"""
Optional server-side Butterworth bandpass filter for EEG data.

Ported from the original PiEEG-16 GUI scripts.
Clients can request raw or filtered data via the WebSocket API.
"""

from scipy import signal


def butter_bandpass_coefficients(lowcut: float, highcut: float,
                                  fs: float, order: int = 5):
    """Compute Butterworth bandpass filter coefficients."""
    nyq = 0.5 * fs
    low = lowcut / nyq
    high = highcut / nyq
    b, a = signal.butter(order, [low, high], btype="band")
    return b, a


class BandpassFilter:
    """
    Stateful Butterworth bandpass filter for a single channel.

    Maintains a running buffer so it can be applied incrementally
    as new samples arrive in blocks.
    """

    def __init__(self, lowcut: float = 1.0, highcut: float = 40.0,
                 fs: float = 250.0, order: int = 5, buffer_size: int = 250):
        self._b, self._a = butter_bandpass_coefficients(lowcut, highcut, fs, order)
        self._buffer_size = buffer_size
        self._buffer: list[float] = [0.0] * buffer_size

    def apply(self, new_samples: list[float]) -> list[float]:
        """
        Filter a block of new samples.

        Prepends the internal buffer for continuity, applies the filter,
        and returns only the newly-filtered portion.
        """
        combined = self._buffer + new_samples
        filtered = signal.lfilter(self._b, self._a, combined).tolist()

        # Update buffer with the tail of the combined data
        self._buffer = combined[-self._buffer_size:]

        # Return only the new portion
        return filtered[len(combined) - len(new_samples):]


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
