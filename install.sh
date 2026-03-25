#!/usr/bin/env bash
# ============================================================
# PiEEG-16-server: Remote installer
#
# Usage:
#   curl -sSL https://raw.githubusercontent.com/yelabb/PiEEG-16-server/main/install.sh | bash
#
# This script:
#   1. Checks that you're on a Raspberry Pi (or Linux)
#   2. Installs git if needed
#   3. Clones the PiEEG-16-server repository
#   4. Runs setup.sh (which does the real work)
#
# Safe to re-run — it will pull the latest code if already cloned.
# ============================================================
set -euo pipefail

# --- Colors ---
if [ -t 1 ] && command -v tput &>/dev/null; then
    BOLD=$(tput bold)
    GREEN=$(tput setaf 2)
    YELLOW=$(tput setaf 3)
    RED=$(tput setaf 1)
    CYAN=$(tput setaf 6)
    RESET=$(tput sgr0)
else
    BOLD="" GREEN="" YELLOW="" RED="" CYAN="" RESET=""
fi

REPO_URL="https://github.com/yelabb/PiEEG-16-server.git"
INSTALL_DIR="$HOME/PiEEG-16-server"

echo ""
echo "${BOLD}${CYAN}╔══════════════════════════════════════════╗${RESET}"
echo "${BOLD}${CYAN}║       PiEEG-16 Server Installer          ║${RESET}"
echo "${BOLD}${CYAN}╚══════════════════════════════════════════╝${RESET}"
echo ""

# --- Check OS ---
if [[ "$(uname)" != "Linux" ]]; then
    echo "${RED}ERROR:${RESET} This installer is for Linux (Raspberry Pi OS)."
    echo "       Detected: $(uname)"
    echo ""
    echo "  For development on other platforms, clone manually:"
    echo "    git clone $REPO_URL"
    echo "    cd PiEEG-16-server"
    echo "    pip install -e ."
    echo "    pieeg-server --mock"
    exit 1
fi

# --- Warn if running inside WSL (not a real Pi) ---
if grep -qi microsoft /proc/version 2>/dev/null; then
    echo "${YELLOW}WARNING:${RESET} You appear to be running inside WSL, not on a Raspberry Pi."
    echo "         The server requires SPI/GPIO hardware on a real Pi."
    echo ""
    echo "  For development/testing on Windows, clone manually:"
    echo "    git clone $REPO_URL"
    echo "    cd PiEEG-16-server"
    echo "    pip install -e ."
    echo "    pieeg-server --mock"
    exit 1
fi

# --- Install git if needed ---
if ! command -v git &>/dev/null; then
    echo "Installing git..."
    sudo apt-get update -qq
    sudo apt-get install -y -qq git || {
        echo "${RED}ERROR:${RESET} Failed to install git."
        exit 1
    }
fi

# --- Clone or update ---
if [ -d "$INSTALL_DIR/.git" ]; then
    echo "Updating existing installation in $INSTALL_DIR..."
    cd "$INSTALL_DIR"
    git pull --ff-only origin main 2>/dev/null || {
        echo "${YELLOW}WARNING:${RESET} Could not update (local changes?). Using existing code."
    }
else
    echo "Cloning PiEEG-16-server to $INSTALL_DIR..."
    git clone "$REPO_URL" "$INSTALL_DIR" || {
        echo "${RED}ERROR:${RESET} Failed to clone repository."
        echo "  Check your internet connection and try again."
        exit 1
    }
    cd "$INSTALL_DIR"
fi

# --- Run setup ---
echo ""
chmod +x setup.sh
exec ./setup.sh
