"""
End-to-end integration test: Mock → Acquisition → WebSocket Server → Client.

Validates the full data pipeline that a real client would use:
- WebSocket connection succeeds
- Welcome message has correct schema
- Live data frames stream continuously
- Filter toggle via client command works
- Multiple clients receive the same data
"""

import asyncio
import json
import math

import pytest
import websockets

from pieeg_server.mock import MockHardware, NUM_CHANNELS
from pieeg_server.acquisition import AcquisitionLoop
from pieeg_server.server import PiEEGServer


# Use a high port to avoid conflicts
TEST_HOST = "127.0.0.1"
TEST_PORT = 19616


@pytest.fixture
def event_loop():
    loop = asyncio.new_event_loop()
    yield loop
    loop.close()


@pytest.fixture
def server_stack(event_loop):
    """Start mock → acquisition → WebSocket server, yield, then tear down."""
    hw = MockHardware()
    hw.open()
    acq = AcquisitionLoop(hw, event_loop, mock=True)
    acq.start()
    server = PiEEGServer(acq, host=TEST_HOST, port=TEST_PORT)

    server_task = event_loop.create_task(server.run())

    # Give server a moment to bind
    event_loop.run_until_complete(asyncio.sleep(0.3))

    yield server

    acq.stop()
    hw.close()
    server_task.cancel()
    try:
        event_loop.run_until_complete(server_task)
    except asyncio.CancelledError:
        pass


class TestWebSocketConnection:
    """Basic connectivity tests."""

    def test_connect_and_receive_welcome(self, server_stack, event_loop):
        async def check():
            async with websockets.connect(f"ws://{TEST_HOST}:{TEST_PORT}") as ws:
                raw = await asyncio.wait_for(ws.recv(), timeout=3.0)
                msg = json.loads(raw)
                assert msg["status"] == "connected"
                assert msg["sample_rate"] == 250
                assert msg["channels"] == 16

        event_loop.run_until_complete(check())

    def test_receive_data_frames(self, server_stack, event_loop):
        async def check():
            async with websockets.connect(f"ws://{TEST_HOST}:{TEST_PORT}") as ws:
                # Skip welcome
                await ws.recv()

                # Receive several data frames
                for _ in range(10):
                    raw = await asyncio.wait_for(ws.recv(), timeout=3.0)
                    frame = json.loads(raw)
                    assert "t" in frame
                    assert "n" in frame
                    assert "channels" in frame
                    assert len(frame["channels"]) == NUM_CHANNELS

                    for val in frame["channels"]:
                        assert math.isfinite(val)

        event_loop.run_until_complete(check())

    def test_sample_numbers_increase(self, server_stack, event_loop):
        async def check():
            async with websockets.connect(f"ws://{TEST_HOST}:{TEST_PORT}") as ws:
                await ws.recv()  # welcome

                prev_n = 0
                for _ in range(20):
                    raw = await asyncio.wait_for(ws.recv(), timeout=3.0)
                    frame = json.loads(raw)
                    assert frame["n"] > prev_n
                    prev_n = frame["n"]

        event_loop.run_until_complete(check())


class TestFilterCommand:
    """Client can enable/disable filtering via WebSocket command."""

    def test_enable_filter_command(self, server_stack, event_loop):
        async def check():
            async with websockets.connect(f"ws://{TEST_HOST}:{TEST_PORT}") as ws:
                await ws.recv()  # welcome

                # Send filter command
                cmd = json.dumps({
                    "cmd": "set_filter",
                    "enabled": True,
                    "lowcut": 1.0,
                    "highcut": 40.0,
                })
                await ws.send(cmd)

                # Should still receive data (now filtered)
                for _ in range(10):
                    raw = await asyncio.wait_for(ws.recv(), timeout=3.0)
                    frame = json.loads(raw)
                    assert len(frame["channels"]) == NUM_CHANNELS

        event_loop.run_until_complete(check())

    def test_disable_filter_command(self, server_stack, event_loop):
        async def check():
            async with websockets.connect(f"ws://{TEST_HOST}:{TEST_PORT}") as ws:
                await ws.recv()  # welcome

                # Enable then disable
                await ws.send(json.dumps({"cmd": "set_filter", "enabled": True}))
                await asyncio.sleep(0.1)
                await ws.send(json.dumps({"cmd": "set_filter", "enabled": False}))

                # Should still receive data
                raw = await asyncio.wait_for(ws.recv(), timeout=3.0)
                frame = json.loads(raw)
                assert "channels" in frame

        event_loop.run_until_complete(check())


class TestMultipleClients:
    """Multiple simultaneous clients should all receive data."""

    def test_two_clients_both_receive(self, server_stack, event_loop):
        async def check():
            async with websockets.connect(f"ws://{TEST_HOST}:{TEST_PORT}") as ws1, \
                        websockets.connect(f"ws://{TEST_HOST}:{TEST_PORT}") as ws2:
                # Both get welcome
                w1 = json.loads(await asyncio.wait_for(ws1.recv(), timeout=3.0))
                w2 = json.loads(await asyncio.wait_for(ws2.recv(), timeout=3.0))
                assert w1["status"] == "connected"
                assert w2["status"] == "connected"

                # Both get data frames
                f1 = json.loads(await asyncio.wait_for(ws1.recv(), timeout=3.0))
                f2 = json.loads(await asyncio.wait_for(ws2.recv(), timeout=3.0))
                assert "channels" in f1
                assert "channels" in f2

        event_loop.run_until_complete(check())


class TestMalformedInput:
    """Server should handle bad client messages gracefully."""

    def test_invalid_json_ignored(self, server_stack, event_loop):
        async def check():
            async with websockets.connect(f"ws://{TEST_HOST}:{TEST_PORT}") as ws:
                await ws.recv()  # welcome

                # Receive some data first to confirm stream is flowing
                raw = await asyncio.wait_for(ws.recv(), timeout=3.0)
                frame = json.loads(raw)
                assert "channels" in frame

                # Now send garbage — server should not crash
                await ws.send("not valid json {{{")
                await ws.send("42")
                await ws.send("{}")

                # Small delay to let server process the messages
                await asyncio.sleep(0.1)

                # Should still receive data after bad messages
                raw = await asyncio.wait_for(ws.recv(), timeout=3.0)
                frame = json.loads(raw)
                assert "channels" in frame

        event_loop.run_until_complete(check())

    def test_unknown_command_ignored(self, server_stack, event_loop):
        async def check():
            async with websockets.connect(f"ws://{TEST_HOST}:{TEST_PORT}") as ws:
                await ws.recv()  # welcome

                await ws.send(json.dumps({"cmd": "nonexistent_cmd"}))

                raw = await asyncio.wait_for(ws.recv(), timeout=3.0)
                frame = json.loads(raw)
                assert "channels" in frame

        event_loop.run_until_complete(check())
