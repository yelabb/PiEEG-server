"""
Terminal UI monitor for live EEG data.

Displays a compact real-time view of all 16 channels directly in the
terminal — useful over SSH or when no browser is available.

"""

import asyncio
import logging
import threading
import time
from collections import deque

logger = logging.getLogger("pieeg.monitor")

SPARKLINE_CHARS = "▁▂▃▄▅▆▇█"
HISTORY_LEN = 40  # number of samples shown per sparkline


def _sparkline(values: list[float]) -> str:
    """Render a list of values as a unicode sparkline string."""
    if not values:
        return ""
    lo, hi = min(values), max(values)
    span = hi - lo if hi != lo else 1.0
    return "".join(
        SPARKLINE_CHARS[min(int((v - lo) / span * (len(SPARKLINE_CHARS) - 1)),
                            len(SPARKLINE_CHARS) - 1)]
        for v in values
    )


class TerminalMonitor:
    """Async consumer that renders a live Rich table in the terminal."""

    def __init__(self, acquisition, refresh_hz: float = 4.0):
        self._acq = acquisition
        self._queue = acquisition.subscribe(maxsize=512)
        self._refresh_interval = 1.0 / refresh_hz
        self._histories: list[deque] = [
            deque(maxlen=HISTORY_LEN) for _ in range(16)
        ]
        self._last_frame: dict | None = None
        self._start_time = time.time()

    async def run(self):
        """Start the monitor — blocks until cancelled."""
        from rich.live import Live
        from rich.table import Table
        from rich.text import Text
        from rich.console import Console

        console = Console()

        # Background task: drain the queue into histories
        drain_task = asyncio.create_task(self._drain())

        try:
            with Live(self._build_table(Table, Text),
                       console=console,
                       refresh_per_second=4,
                       transient=True) as live:
                while True:
                    await asyncio.sleep(self._refresh_interval)
                    live.update(self._build_table(Table, Text))
        finally:
            drain_task.cancel()
            self._acq.unsubscribe(self._queue)

    async def _drain(self):
        """Read frames from the queue and store channel histories."""
        while True:
            frame = await self._queue.get()
            self._last_frame = frame
            channels = frame.get("channels", [])
            for i, v in enumerate(channels[:16]):
                self._histories[i].append(v)

    def _build_table(self, Table, Text):
        """Build a Rich Table snapshot of the current state."""
        elapsed = time.time() - self._start_time
        n = self._last_frame["n"] if self._last_frame else 0

        table = Table(
            title=f"[bold cyan]PiEEG-16 Monitor[/]  "
                  f"[dim]samples: {n:,}  "
                  f"uptime: {elapsed:.0f}s[/]",
            show_lines=True,
            padding=(0, 1),
        )
        table.add_column("Ch", style="bold", width=4, justify="right")
        table.add_column("µV", width=12, justify="right")
        table.add_column("Waveform", min_width=HISTORY_LEN)

        for i in range(16):
            hist = list(self._histories[i])
            value = f"{hist[-1]:+.1f}" if hist else "—"
            spark = _sparkline(hist) if len(hist) > 1 else ""
            table.add_row(str(i + 1), value, spark)

        return table
