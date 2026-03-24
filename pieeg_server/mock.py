"""
Mock hardware for testing without a Raspberry Pi.

Generates realistic-looking synthetic EEG signals:
- Alpha rhythm (10 Hz) with varying amplitude
- Background noise
- Occasional blink artifacts

Use with: pieeg-server --mock
"""

import math
import random
import time

NUM_CHANNELS = 16
SAMPLE_RATE = 250


class MockHardware:
    """Drop-in replacement for PiEEGHardware that generates synthetic data."""

    def __init__(self):
        self._start_time = None
        self._sample_index = 0
        # Per-channel random parameters for variety
        self._alpha_amp = [random.uniform(15, 50) for _ in range(NUM_CHANNELS)]
        self._alpha_freq = [random.uniform(9, 11) for _ in range(NUM_CHANNELS)]
        self._alpha_phase = [random.uniform(0, 2 * math.pi) for _ in range(NUM_CHANNELS)]
        self._noise_amp = [random.uniform(5, 20) for _ in range(NUM_CHANNELS)]

    def open(self):
        self._start_time = time.time()
        self._sample_index = 0

    def close(self):
        pass

    def read_sample(self):
        t = self._sample_index / SAMPLE_RATE
        self._sample_index += 1

        channels = []
        for ch in range(NUM_CHANNELS):
            # Alpha oscillation (8-12 Hz)
            alpha = self._alpha_amp[ch] * math.sin(
                2 * math.pi * self._alpha_freq[ch] * t + self._alpha_phase[ch]
            )
            # Slow drift (0.5 Hz)
            drift = 10 * math.sin(2 * math.pi * 0.5 * t + ch)
            # Gaussian-ish noise
            noise = self._noise_amp[ch] * (random.gauss(0, 1))
            # Occasional blink artifact on frontal channels (ch 0-3)
            blink = 0.0
            if ch < 4 and random.random() < 0.002:
                blink = random.uniform(100, 300)

            channels.append(round(alpha + drift + noise + blink, 2))

        return channels

    def __enter__(self):
        self.open()
        return self

    def __exit__(self, *exc):
        self.close()
