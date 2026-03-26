import { useRef, useEffect, memo } from "react";

const GRID_COLOR = "rgba(48,54,61,0.4)";
const ZERO_LINE_COLOR = "rgba(88,166,255,0.15)";

const TRACE_COLORS = [
  "#58a6ff", "#3fb950", "#d29922", "#f85149",
  "#bc8cff", "#39d2c0", "#f0883e", "#db61a2",
  "#58a6ff", "#3fb950", "#d29922", "#f85149",
  "#bc8cff", "#39d2c0", "#f0883e", "#db61a2",
];

function drawChannel(ctx, w, h, buf, count, writeIndex, bufferSize, yRange, color) {
  ctx.clearRect(0, 0, w, h);

  // Horizontal grid lines
  ctx.strokeStyle = GRID_COLOR;
  ctx.lineWidth = 0.5;
  const step = h / 4;
  for (let y = step; y < h; y += step) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
    ctx.stroke();
  }

  // Zero line
  ctx.strokeStyle = ZERO_LINE_COLOR;
  ctx.lineWidth = 1;
  const mid = h / 2;
  ctx.beginPath();
  ctx.moveTo(0, mid);
  ctx.lineTo(w, mid);
  ctx.stroke();

  if (count < 2) return;

  // Trace — draw every Nth point when buffer is large
  const skip = count > 2000 ? Math.floor(count / 2000) : 1;
  const halfH = h / 2;
  const xScale = w / (bufferSize - 1);
  const yScale = halfH / yRange;

  ctx.strokeStyle = color;
  ctx.lineWidth = 1.2;
  ctx.beginPath();

  let started = false;
  for (let i = 0; i < count; i += skip) {
    const idx = (writeIndex - count + i + bufferSize) % bufferSize;
    const x = i * xScale;
    const y = mid - buf[idx] * yScale;
    if (!started) { ctx.moveTo(x, y); started = true; }
    else ctx.lineTo(x, y);
  }
  ctx.stroke();
}

const ChannelCanvas = memo(function ChannelCanvas({ chIdx, eeg, yRange }) {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });

    const tick = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      const pw = Math.round(w * dpr);
      const ph = Math.round(h * dpr);

      if (canvas.width !== pw || canvas.height !== ph) {
        canvas.width = pw;
        canvas.height = ph;
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Fill background (alpha:false needs explicit fill)
      ctx.fillStyle = "#0d1117";
      ctx.fillRect(0, 0, w, h);

      drawChannel(
        ctx, w, h,
        eeg.buffers.current[chIdx],
        eeg.samplesInBuffer.current,
        eeg.writeIndex.current,
        eeg.bufferSize,
        yRange,
        TRACE_COLORS[chIdx],
      );

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [chIdx, eeg, yRange]);

  return (
    <div className="channel-cell">
      <div className="channel-label">Ch {chIdx + 1}</div>
      <canvas
        ref={canvasRef}
        style={{ display: "block", width: "100%", height: "100%" }}
      />
    </div>
  );
});

export default ChannelCanvas;
