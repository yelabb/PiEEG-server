"""
WebSocket server that broadcasts live EEG data to connected clients.

Protocol (JSON over WebSocket):
  Server → Client (data frame):
    {"t": 1711234567.123456, "n": 42, "channels": [ch1, ..., ch16]}

  Client → Server (optional commands):
    {"cmd": "set_filter", "enabled": true, "lowcut": 1.0, "highcut": 40.0}
    {"cmd": "set_filter", "enabled": false}

  Server → Client (status):
    {"status": "connected", "sample_rate": 250, "channels": 16}
"""

import asyncio
import json
import logging
import time
from datetime import datetime
from pathlib import Path
from urllib.parse import urlparse, parse_qs

import websockets

from .acquisition import AcquisitionLoop
from .auth import AuthManager
from .filters import MultichannelFilter
from .recorder import Recorder

logger = logging.getLogger("pieeg.server")

DEFAULT_HOST = "0.0.0.0"
DEFAULT_PORT = 1616  # PiEEG-16 → 1616


class PiEEGServer:
    """WebSocket server broadcasting EEG frames to all connected clients."""

    def __init__(self, acquisition: AcquisitionLoop,
                 host: str = DEFAULT_HOST, port: int = DEFAULT_PORT,
                 auth: AuthManager | None = None):
        self._acq = acquisition
        self._host = host
        self._port = port
        self._auth = auth
        self._clients: set[websockets.WebSocketServerProtocol] = set()
        self._filter: MultichannelFilter | None = None
        self._queue = acquisition.subscribe()
        self._recorder: Recorder | None = None
        self._recorder_task: asyncio.Task | None = None
        self._record_start_time: float | None = None
        self._recordings_dir = Path("recordings")

    def enable_filter(self, lowcut: float = 1.0, highcut: float = 40.0):
        self._filter = MultichannelFilter(lowcut=lowcut, highcut=highcut)

    def disable_filter(self):
        self._filter = None

    async def run(self):
        """Start the WebSocket server and the broadcast loop."""
        async with websockets.serve(
            self._handle_client, self._host, self._port,
            ping_interval=20, ping_timeout=10,
        ):
            logger.info(
                "PiEEG-16 streaming on ws://%s:%d", self._host, self._port
            )
            await self._broadcast_loop()

    async def _handle_client(self, ws: websockets.WebSocketServerProtocol):
        """Handle a new WebSocket connection."""
        peer = ws.remote_address

        # Validate token from query string: ws://host:port?token=xxx
        if self._auth:
            query = parse_qs(urlparse(ws.request.path).query)
            token = query.get("token", [None])[0]
            if not self._auth.validate_ws_token(token):
                logger.warning("WebSocket auth rejected from %s", peer)
                await ws.close(4401, "Unauthorized")
                return

        self._clients.add(ws)
        logger.info("Client connected: %s", peer)

        # Send welcome message
        welcome = {
            "status": "connected",
            "sample_rate": 250,
            "channels": 16,
            "filter": self._filter is not None,
        }
        welcome.update(self._get_record_status())
        await ws.send(json.dumps(welcome))

        try:
            async for message in ws:
                await self._handle_command(message)
        except websockets.ConnectionClosed:
            pass
        finally:
            self._clients.discard(ws)
            logger.info("Client disconnected: %s", peer)

    async def _handle_command(self, raw: str):
        """Process a client command."""
        try:
            msg = json.loads(raw)
        except (json.JSONDecodeError, TypeError):
            return

        if not isinstance(msg, dict):
            return

        cmd = msg.get("cmd")
        if cmd == "set_filter":
            if msg.get("enabled", True):
                lowcut = float(msg.get("lowcut", 1.0))
                highcut = float(msg.get("highcut", 40.0))
                self.enable_filter(lowcut, highcut)
                logger.info("Filter enabled: %.1f-%.1f Hz", lowcut, highcut)
            else:
                self.disable_filter()
                logger.info("Filter disabled")
        elif cmd == "start_record":
            await self._start_recording()
        elif cmd == "stop_record":
            await self._stop_recording()

    async def _start_recording(self):
        """Start recording EEG data to a timestamped CSV file."""
        if self._recorder_task and not self._recorder_task.done():
            logger.warning("Recording already in progress")
            return

        filename = datetime.now().strftime("pieeg_%Y%m%d_%H%M%S.csv")
        output = self._recordings_dir / filename
        self._recorder = Recorder(self._acq, output=output)
        self._record_start_time = time.time()
        self._recorder_task = asyncio.create_task(self._recorder.run())
        logger.info("Recording started: %s", output)
        await self._broadcast_record_status()

    async def _stop_recording(self):
        """Stop the current recording."""
        if not self._recorder_task or self._recorder_task.done():
            logger.warning("No recording in progress")
            return

        self._recorder_task.cancel()
        try:
            await self._recorder_task
        except asyncio.CancelledError:
            pass
        frames = self._recorder.frames_written
        filename = self._recorder._output.name
        duration = round(time.time() - self._record_start_time, 1) if self._record_start_time else 0
        path = str(self._recorder._output.resolve())
        logger.info("Recording stopped: %d frames → %s", frames, filename)
        self._recorder = None
        self._recorder_task = None
        self._record_start_time = None
        await self._broadcast_record_status(stop_info={
            "filename": filename,
            "frames": frames,
            "duration": duration,
            "path": path,
        })

    async def _broadcast_record_status(self, stop_info: dict | None = None):
        """Send recording status to all connected clients."""
        status = self._get_record_status(stop_info=stop_info)
        payload = json.dumps(status)
        stale = set()
        for ws in list(self._clients):
            try:
                await ws.send(payload)
            except websockets.ConnectionClosed:
                stale.add(ws)
        self._clients -= stale

    def _get_record_status(self, stop_info: dict | None = None) -> dict:
        """Build a record_status message."""
        recording = self._recorder_task is not None and not self._recorder_task.done()
        status: dict = {
            "recording": recording,
        }
        if stop_info:
            status["stopped"] = stop_info
        return {"record_status": status}

    async def _broadcast_loop(self):
        """Continuously read frames from the acquisition queue and broadcast."""
        queue = self._queue

        while True:
            frame = await queue.get()

            if self._filter:
                frame["channels"] = self._filter.apply_sample(frame["channels"])

            if not self._clients:
                continue

            payload = json.dumps(frame)

            # Broadcast to all connected clients (snapshot to avoid mutation during iteration)
            stale = set()
            for ws in list(self._clients):
                try:
                    await ws.send(payload)
                except websockets.ConnectionClosed:
                    stale.add(ws)

            self._clients -= stale
