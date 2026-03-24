"""
Entry point: python -m pieeg_server

Wires up hardware → acquisition thread → WebSocket server.
One command to start streaming EEG data on the local network.
"""

import argparse
import asyncio
import logging
import signal
import sys

from .hardware import PiEEGHardware
from .acquisition import AcquisitionLoop
from .server import PiEEGServer, DEFAULT_HOST, DEFAULT_PORT


def parse_args():
    p = argparse.ArgumentParser(
        prog="pieeg-server",
        description="PiEEG-16 local streaming server",
    )
    p.add_argument(
        "--host", default=DEFAULT_HOST,
        help="Bind address (default: 0.0.0.0 = all interfaces)",
    )
    p.add_argument(
        "--port", type=int, default=DEFAULT_PORT,
        help="WebSocket port (default: 8765)",
    )
    p.add_argument(
        "--gpio-chip", default="0",
        help="GPIO chip name for gpiod (default: '0')",
    )
    p.add_argument(
        "--filter", action="store_true",
        help="Enable 1–40 Hz bandpass filter on server side",
    )
    p.add_argument(
        "--lowcut", type=float, default=1.0,
        help="Bandpass low cutoff in Hz (default: 1.0)",
    )
    p.add_argument(
        "--highcut", type=float, default=40.0,
        help="Bandpass high cutoff in Hz (default: 40.0)",
    )
    p.add_argument(
        "--verbose", "-v", action="store_true",
        help="Enable debug logging",
    )
    return p.parse_args()


def main():
    args = parse_args()

    logging.basicConfig(
        level=logging.DEBUG if args.verbose else logging.INFO,
        format="%(asctime)s [%(name)s] %(levelname)s: %(message)s",
        datefmt="%H:%M:%S",
    )
    logger = logging.getLogger("pieeg")

    # --- Hardware ---
    logger.info("Initializing PiEEG-16 hardware (GPIO chip: %s)...", args.gpio_chip)
    hw = PiEEGHardware(gpio_chip=args.gpio_chip)
    hw.open()
    logger.info("Hardware initialized — ADCs configured, LEDs should be ON")

    # --- Acquisition ---
    loop = asyncio.new_event_loop()

    acq = AcquisitionLoop(hw, loop)
    acq.start()
    logger.info("Acquisition started (250 Hz, 16 channels)")

    # --- Server ---
    server = PiEEGServer(acq, host=args.host, port=args.port)
    if args.filter:
        server.enable_filter(args.lowcut, args.highcut)
        logger.info("Server-side filter: %.1f–%.1f Hz", args.lowcut, args.highcut)

    # --- Graceful shutdown ---
    def shutdown(*_):
        logger.info("Shutting down...")
        acq.stop()
        hw.close()
        loop.stop()
        sys.exit(0)

    signal.signal(signal.SIGINT, shutdown)
    signal.signal(signal.SIGTERM, shutdown)

    # --- Run ---
    logger.info(
        "PiEEG-16 server ready — ws://%s:%d",
        args.host if args.host != "0.0.0.0" else "raspberrypi.local",
        args.port,
    )
    loop.run_until_complete(server.run())


if __name__ == "__main__":
    main()
