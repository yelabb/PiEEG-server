"""
Optional server-side Butterworth bandpass filter for EEG data.

Clients can request raw or filtered data via the WebSocket API.
"""

import numpy as np
from scipy import signal


class BandpassFilter:
    """
    Stateful Butterworth bandpass filter for a single channel.

    Uses second-order sections (SOS) with persistent filter state
    for numerically stable, efficient incremental filtering.
    """

    def __init__(self, lowcut: float = 1.0, highcut: float = 40.0,
                 fs: float = 250.0, order: int = 5):
        self._sos = signal.butter(order, [lowcut, highcut], btype="band",
                                  fs=fs, output="sos")
        self._zi = signal.sosfilt_zi(self._sos) * 0.0

    def apply(self, new_samples: list[float]) -> list[float]:
        """Filter a block of new samples, carrying state across calls."""
        x = np.asarray(new_samples, dtype=np.float64)
        y, self._zi = signal.sosfilt(self._sos, x, zi=self._zi)
        return y.tolist()


class MultichannelFilter:
    """Manages independent bandpass filters for N channels."""

    def __init__(self, num_channels: int = 16,
                 lowcut: float = 1.0, highcut: float = 40.0,
                 fs: float = 250.0):
        self._filters = [
            BandpassFilter(lowcut, highcut, fs)
            for _ in range(num_channels)
        ]

    def apply_sample(self, channels: list[float]) -> list[float]:
        """Filter a single multi-channel sample (wraps each in a 1-element list)."""
        return [
            f.apply([ch])[0]
            for f, ch in zip(self._filters, channels)
        ]

    def apply_block(self, block: list[list[float]]) -> list[list[float]]:
        """
        Filter a block of samples.

        block: list of N-channel samples (each sample is a list of floats)
        Returns: filtered block in the same shape.
        """
        if not block:
            return []

        num_channels = len(block[0])
        # Transpose: channel-major
        by_channel = [
            [sample[ch] for sample in block]
            for ch in range(num_channels)
        ]

        filtered_by_channel = [
            f.apply(ch_data)
            for f, ch_data in zip(self._filters, by_channel)
        ]

        # Transpose back: sample-major
        return [
            [filtered_by_channel[ch][i] for ch in range(num_channels)]
            for i in range(len(block))
        ]
