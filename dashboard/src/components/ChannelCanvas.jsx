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

  // Build path points for reuse
  const points = [];
  for (let i = 0; i < count; i += skip) {
    const idx = (writeIndex - count + i + bufferSize) % bufferSize;
    points.push({ x: i * xScale, y: mid - buf[idx] * yScale });
  }

  // Neon glow effect: draw trace twice — outer glow then crisp line
  ctx.save();
  ctx.shadowColor = color;
  ctx.shadowBlur = 6;
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  for (let i = 0; i < points.length; i++) {
    i === 0 ? ctx.moveTo(points[i].x, points[i].y) : ctx.lineTo(points[i].x, points[i].y);
  }
  ctx.stroke();
  ctx.restore();

  // Gradient fill under trace
  if (points.length > 1) {
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) ctx.lineTo(points[i].x, points[i].y);
    ctx.lineTo(points[points.length - 1].x, h);
    ctx.lineTo(points[0].x, h);
    ctx.closePath();
    const grad = ctx.createLinearGradient(0, mid - halfH * 0.5, 0, h);
    grad.addColorStop(0, color + "18");
    grad.addColorStop(1, color + "00");
    ctx.fillStyle = grad;
    ctx.fill();
  }

  // Crisp trace on top (no shadow)
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.2;
  ctx.beginPath();
  for (let i = 0; i < points.length; i++) {
    i === 0 ? ctx.moveTo(points[i].x, points[i].y) : ctx.lineTo(points[i].x, points[i].y);
  }
  ctx.stroke();

  // Return RMS for signal quality
  let sumSq = 0;
  const sampleCount = Math.min(count, 250); // last ~1s
  for (let i = count - sampleCount; i < count; i++) {
    const idx = (writeIndex - count + i + bufferSize) % bufferSize;
    sumSq += buf[idx] * buf[idx];
  }
  return Math.sqrt(sumSq / sampleCount);
}

const ChannelCanvas = memo(function ChannelCanvas({ chIdx, eeg, yRange, expanded, onToggleExpand }) {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);
  const rmsRef = useRef(0);
  const labelRef = useRef(null);

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

      const rms = drawChannel(
        ctx, w, h,
        eeg.buffers.current[chIdx],
        eeg.samplesInBuffer.current,
        eeg.writeIndex.current,
        eeg.bufferSize,
        yRange,
        TRACE_COLORS[chIdx],
      );

      // Update signal quality indicator
      if (rms !== undefined) {
        rmsRef.current = rms;
        if (labelRef.current) {
          const ratio = rms / yRange;
          let qColor;
          if (ratio > 0.8) qColor = "#f85149";       // clipping — red
          else if (ratio > 0.4) qColor = "#d29922";   // noisy — yellow
          else qColor = "#3fb950";                     // good — green
          labelRef.current.style.borderLeftColor = qColor;
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [chIdx, eeg, yRange]);

  return (
    <div className={`channel-cell${expanded ? " expanded" : ""}`} onClick={onToggleExpand}>
      <div className="channel-label" ref={labelRef}>Ch {chIdx + 1}</div>
      <canvas
        ref={canvasRef}
        style={{ display: "block", width: "100%", height: "100%" }}
      />
    </div>
  );
});

export default ChannelCanvas;
