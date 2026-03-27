"""
Simple session authentication for PiEEG-16 dashboards.

Generates a random 6-digit code at server start, displayed in the console.
Browsers must submit this code once; a session cookie keeps them authenticated.
"""

import hashlib
import hmac
import logging
import secrets
import time
from collections import defaultdict

logger = logging.getLogger("pieeg.auth")

# Session cookie name
COOKIE_NAME = "pieeg_session"

# How long a session token is valid (seconds) — 24 hours
SESSION_TTL = 86400

# WebSocket token TTL (seconds) — short-lived
WS_TOKEN_TTL = 30

# Rate limiting: max attempts per IP in the window
RATE_LIMIT_WINDOW = 60  # seconds
RATE_LIMIT_MAX = 5  # attempts per window


class AuthManager:
    """Manages a per-run access code and validated session tokens."""

    def __init__(self):
        self._code = f"{secrets.randbelow(900000) + 100000}"  # 6-digit code
        self._secret = secrets.token_hex(16)  # HMAC key for tokens
        self._sessions: dict[str, float] = {}  # token → expiry timestamp
        self._ws_tokens: dict[str, float] = {}  # ws_token → expiry timestamp
        self._attempts: defaultdict[str, list[float]] = defaultdict(list)  # ip → timestamps

    @property
    def code(self) -> str:
        return self._code

    def check_rate_limit(self, ip: str) -> bool:
        """Return True if the IP is within rate limits, False if blocked."""
        now = time.time()
        window_start = now - RATE_LIMIT_WINDOW
        # Prune old entries
        self._attempts[ip] = [t for t in self._attempts[ip] if t > window_start]
        if len(self._attempts[ip]) >= RATE_LIMIT_MAX:
            return False
        self._attempts[ip].append(now)
        return True

    def verify_code(self, code: str) -> bool:
        """Check if the submitted code matches (constant-time)."""
        return hmac.compare_digest(code.strip(), self._code)

    def create_session(self) -> str:
        """Create a new session token after successful code entry."""
        token = secrets.token_urlsafe(32)
        self._sessions[token] = time.time() + SESSION_TTL
        return token

    def validate_session(self, token: str | None) -> bool:
        """Check if a session token is valid and not expired."""
        if not token:
            return False
        expiry = self._sessions.get(token)
        if expiry is None:
            return False
        if time.time() > expiry:
            del self._sessions[token]
            return False
        return True

    def create_ws_token(self) -> str:
        """Create a short-lived, single-use token for WebSocket auth."""
        token = secrets.token_urlsafe(32)
        self._ws_tokens[token] = time.time() + WS_TOKEN_TTL
        return token

    def validate_ws_token(self, token: str | None) -> bool:
        """Validate and consume a single-use WebSocket token."""
        if not token:
            return False
        expiry = self._ws_tokens.pop(token, None)  # single-use: remove on check
        if expiry is None:
            return False
        if time.time() > expiry:
            return False
        return True

    def print_code(self):
        """Print the access code in BIG ASCII art to the console."""
        digits = {
            "0": [" ███ ", "█   █", "█   █", "█   █", " ███ "],
            "1": ["  █  ", " ██  ", "  █  ", "  █  ", " ███ "],
            "2": [" ███ ", "█   █", "  ██ ", " █   ", "█████"],
            "3": [" ███ ", "█   █", "  ██ ", "█   █", " ███ "],
            "4": ["█  █ ", "█  █ ", "█████", "   █ ", "   █ "],
            "5": ["█████", "█    ", "████ ", "    █", "████ "],
            "6": [" ███ ", "█    ", "████ ", "█   █", " ███ "],
            "7": ["█████", "   █ ", "  █  ", " █   ", " █   "],
            "8": [" ███ ", "█   █", " ███ ", "█   █", " ███ "],
            "9": [" ███ ", "█   █", " ████", "    █", " ███ "],
        }

        lines = [""] * 5
        for ch in self._code:
            glyph = digits[ch]
            for row in range(5):
                lines[row] += glyph[row] + "  "

        border = "═" * (len(lines[0]) + 4)
        print()
        print(f"  ╔{border}╗")
        print(f"  ║  {'DASHBOARD ACCESS CODE'.center(len(lines[0]))}  ║")
        print(f"  ╠{border}╣")
        for line in lines:
            print(f"  ║  {line}  ║")
        print(f"  ╠{border}╣")
        print(f"  ║  {'Enter this code in your browser to connect'.center(len(lines[0]))}  ║")
        code_line = f"Code: {self._code}".center(len(lines[0]))
        print(f"  ║  {code_line}  ║")
        print(f"  ╚{border}╝")
        print()
