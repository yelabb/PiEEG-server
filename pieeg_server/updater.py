"""
Self-update logic for PiEEG-16-server.

Detects the installation method and provides check/apply update capabilities
exposed as JSON API endpoints from the dashboard.

Installation methods:
  A) pip install pieeg-server          → update via pip install --upgrade
  B) curl ... | bash  (git clone)      → update via git pull + pip install -e .
  C) git clone + ./setup.sh            → same as B
"""

import json
import logging
import subprocess
import sys
from pathlib import Path

from . import __version__

logger = logging.getLogger("pieeg.updater")

_PKG_DIR = Path(__file__).resolve().parent          # pieeg_server/
_PROJECT_DIR = _PKG_DIR.parent                       # repo root (if git)

PYPI_URL = "https://pypi.org/pypi/pieeg-server/json"


def _detect_install_method() -> str:
    """Return 'git' if the project lives inside a git repo, else 'pip'."""
    # Walk up from the package directory looking for .git
    git_dir = _PROJECT_DIR / ".git"
    if git_dir.is_dir():
        return "git"
    return "pip"


def _get_git_remote_version() -> str | None:
    """Fetch the latest version from the git remote's pyproject.toml."""
    try:
        result = subprocess.run(
            ["git", "fetch", "--quiet"],
            cwd=str(_PROJECT_DIR),
            capture_output=True, timeout=15,
        )
        # Read version from remote main branch pyproject.toml
        result = subprocess.run(
            ["git", "show", "origin/main:pyproject.toml"],
            cwd=str(_PROJECT_DIR),
            capture_output=True, text=True, timeout=10,
        )
        if result.returncode != 0:
            return None
        for line in result.stdout.splitlines():
            line = line.strip()
            if line.startswith("version"):
                # version = "0.9.0"
                return line.split("=", 1)[1].strip().strip('"').strip("'")
    except Exception as e:
        logger.debug("git remote version check failed: %s", e)
    return None


def _get_pypi_version() -> str | None:
    """Fetch the latest version from PyPI."""
    try:
        from urllib.request import urlopen
        with urlopen(PYPI_URL, timeout=5) as resp:
            data = json.loads(resp.read())
        return data["info"]["version"]
    except Exception as e:
        logger.debug("PyPI version check failed: %s", e)
    return None


def check_update() -> dict:
    """
    Check whether an update is available.

    Returns dict:
      {
        "current_version": "0.8.0",
        "latest_version": "0.9.0" | null,
        "update_available": true/false,
        "install_method": "pip" | "git",
      }
    """
    method = _detect_install_method()

    if method == "git":
        latest = _get_git_remote_version()
    else:
        latest = _get_pypi_version()

    available = False
    if latest and latest != __version__:
        available = _version_newer(latest, __version__)

    return {
        "current_version": __version__,
        "latest_version": latest,
        "update_available": available,
        "install_method": method,
    }


def apply_update() -> dict:
    """
    Apply the update based on the detected install method.

    Returns dict:
      {
        "ok": true/false,
        "install_method": "pip" | "git",
        "message": "...",
        "restart_required": true/false,
      }
    """
    method = _detect_install_method()

    try:
        if method == "git":
            return _update_git()
        else:
            return _update_pip()
    except Exception as e:
        logger.error("Update failed: %s", e, exc_info=True)
        return {
            "ok": False,
            "install_method": method,
            "message": str(e),
            "restart_required": False,
        }


def _update_git() -> dict:
    """Pull latest code and re-install in editable mode."""
    # git pull
    result = subprocess.run(
        ["git", "pull", "--ff-only", "origin", "main"],
        cwd=str(_PROJECT_DIR),
        capture_output=True, text=True, timeout=60,
    )
    if result.returncode != 0:
        return {
            "ok": False,
            "install_method": "git",
            "message": f"git pull failed: {result.stderr.strip()}",
            "restart_required": False,
        }

    git_output = result.stdout.strip()

    # Re-install in editable mode (picks up new dependencies too)
    result = subprocess.run(
        [sys.executable, "-m", "pip", "install", "-e", ".", "--quiet"],
        cwd=str(_PROJECT_DIR),
        capture_output=True, text=True, timeout=120,
    )
    if result.returncode != 0:
        return {
            "ok": False,
            "install_method": "git",
            "message": f"pip install -e . failed: {result.stderr.strip()}",
            "restart_required": False,
        }

    return {
        "ok": True,
        "install_method": "git",
        "message": f"Updated successfully. {git_output}",
        "restart_required": True,
    }


def _update_pip() -> dict:
    """Upgrade via pip."""
    result = subprocess.run(
        [sys.executable, "-m", "pip", "install", "--upgrade", "pieeg-server", "--quiet"],
        capture_output=True, text=True, timeout=120,
    )
    if result.returncode != 0:
        return {
            "ok": False,
            "install_method": "pip",
            "message": f"pip upgrade failed: {result.stderr.strip()}",
            "restart_required": False,
        }

    return {
        "ok": True,
        "install_method": "pip",
        "message": "Updated successfully via pip.",
        "restart_required": True,
    }


def _version_newer(candidate: str, current: str) -> bool:
    """Compare version strings (simple tuple comparison)."""
    try:
        def _parse(v: str):
            return tuple(int(x) for x in v.split("."))
        return _parse(candidate) > _parse(current)
    except (ValueError, TypeError):
        return candidate != current
