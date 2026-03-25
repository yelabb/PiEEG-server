#!/usr/bin/env bash
# ============================================================
# PiEEG-16-server: One-time setup script for Raspberry Pi
# Run once on a fresh Raspberry Pi OS installation.
# ============================================================
set -euo pipefail

echo "=== PiEEG-16-server Setup ==="
echo ""

# --- 1. System packages ---
echo "[1/4] Installing system packages..."
sudo apt-get update -qq
sudo apt-get install -y -qq python3 python3-pip python3-venv

# --- 2. Enable SPI (required for ADC communication) ---
echo "[2/4] Enabling SPI interface..."
if ! grep -q "^dtparam=spi=on" /boot/firmware/config.txt 2>/dev/null && \
   ! grep -q "^dtparam=spi=on" /boot/config.txt 2>/dev/null; then
    # Try the Pi 5 / Bookworm path first, fall back to legacy
    if [ -f /boot/firmware/config.txt ]; then
        echo "dtparam=spi=on" | sudo tee -a /boot/firmware/config.txt > /dev/null
    else
        echo "dtparam=spi=on" | sudo tee -a /boot/config.txt > /dev/null
    fi
    echo "  SPI enabled (reboot required after setup)"
    NEEDS_REBOOT=1
else
    echo "  SPI already enabled"
    NEEDS_REBOOT=0
fi

# --- 3. Create venv and install pieeg-server ---
echo "[3/4] Installing pieeg-server..."
INSTALL_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$INSTALL_DIR"

python3 -m venv --system-site-packages .venv
# shellcheck source=/dev/null
source .venv/bin/activate

pip install --upgrade pip -q
pip install -e . -q

echo "  Installed to: $INSTALL_DIR/.venv"

# --- 4. Create systemd service (optional auto-start) ---
echo "[4/4] Creating systemd service (pieeg-server)..."
sudo tee /etc/systemd/system/pieeg-server.service > /dev/null <<EOF
[Unit]
Description=PiEEG-16 EEG Streaming Server
After=network.target

[Service]
Type=simple
User=$(whoami)
WorkingDirectory=$INSTALL_DIR
ExecStart=$INSTALL_DIR/.venv/bin/pieeg-server
Restart=on-failure
RestartSec=5

[Install]
WantedBy=multi-user.target
EOF

sudo systemctl daemon-reload
sudo systemctl enable pieeg-server.service
echo "  Service created and enabled (starts on boot)"

# --- 5. Symlink so 'pieeg-server' works without activating the venv ---
echo "[5/5] Creating pieeg-server command..."
sudo ln -sf "$INSTALL_DIR/.venv/bin/pieeg-server" /usr/local/bin/pieeg-server
echo "  Linked: /usr/local/bin/pieeg-server → $INSTALL_DIR/.venv/bin/pieeg-server"

# --- Done ---
echo ""
echo "=== Setup complete! ==="
echo ""
echo "  To start now:   pieeg-server"
echo "  Or with filter: pieeg-server --filter"
echo "  Auto-starts on boot via systemd"
echo ""

if [ "${NEEDS_REBOOT:-0}" -eq 1 ]; then
    echo "  *** REBOOT REQUIRED to enable SPI ***"
    echo "  Run: sudo reboot"
fi
