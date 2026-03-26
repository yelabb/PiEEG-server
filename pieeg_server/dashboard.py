"""
HTTP server serving the PiEEG-16 real-time dashboard.

Serves either the React/Vite build (default) or the legacy single-file
HTML dashboard on port 1617 (one above the WebSocket data port 1616).
Uses only the standard library.
"""

import asyncio
import logging
import mimetypes
from pathlib import Path
from functools import partial
from http import HTTPStatus
from http.server import SimpleHTTPRequestHandler
import socketserver
import threading

logger = logging.getLogger("pieeg.dashboard")

_PKG_DIR = Path(__file__).parent

# React build output (built via: cd dashboard && npm run build)
REACT_STATIC_DIR = _PKG_DIR / "static" / "dashboard"

# Legacy single-file HTML dashboard
LEGACY_STATIC_DIR = _PKG_DIR / "static"

DEFAULT_DASHBOARD_PORT = 1617


def _make_handler(static_dir: Path):
    """Create a handler class bound to a specific static directory."""

    class _DashboardHandler(SimpleHTTPRequestHandler):
        """Serve files from the given static directory, silently."""

        def __init__(self, *args, **kwargs):
            super().__init__(*args, directory=str(static_dir), **kwargs)

        def log_message(self, format, *args):
            logger.debug(format, *args)

        def do_GET(self):
            # SPA fallback: if the path doesn't match a file, serve index.html
            file_path = static_dir / self.path.lstrip("/")
            if not file_path.is_file() and not self.path.startswith("/assets"):
                self.path = "/index.html"
            super().do_GET()

    return _DashboardHandler


class _ReusableTCPServer(socketserver.TCPServer):
    allow_reuse_address = True


class DashboardServer:
    """Runs the dashboard HTTP server in a background thread."""

    def __init__(
        self,
        host: str = "0.0.0.0",
        port: int = DEFAULT_DASHBOARD_PORT,
        legacy: bool = False,
    ):
        self._host = host
        self._port = port
        self._legacy = legacy
        self._httpd = None
        self._thread = None

    def start(self):
        if self._legacy or not REACT_STATIC_DIR.is_dir():
            static_dir = LEGACY_STATIC_DIR
            variant = "legacy"
        else:
            static_dir = REACT_STATIC_DIR
            variant = "react"

        handler = _make_handler(static_dir)
        self._httpd = _ReusableTCPServer(
            (self._host, self._port), handler
        )
        self._thread = threading.Thread(
            target=self._httpd.serve_forever,
            name="pieeg-dashboard",
            daemon=True,
        )
        self._thread.start()
        logger.info(
            "Dashboard (%s) running at http://%s:%d",
            variant,
            self._host if self._host != "0.0.0.0" else "raspberrypi.local",
            self._port,
        )

    def stop(self):
        if self._httpd:
            self._httpd.shutdown()
