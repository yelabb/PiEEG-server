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

  // Trace — skip points for large buffers
  const skip = count > 2000 ? Math.floor(count / 2000) : 1;
  const halfH = h / 2;
  const xScale = w / (bufferSize - 1);
  const yScale = halfH / yRange;

  // Draw gradient fill under trace
  ctx.beginPath();
  let firstX = 0;
  for (let i = 0; i < count; i += skip) {
    const idx = (writeIndex - count + i + bufferSize) % bufferSize;
    const x = i * xScale;
    const y = mid - buf[idx] * yScale;
    if (i === 0) {
      ctx.moveTo(x, y);
      firstX = x;
    } else {
      ctx.lineTo(x, y);
    }
  }
  const lastI = count - 1;
  const lastX = lastI * xScale;
  ctx.lineTo(lastX, h);
  ctx.lineTo(firstX, h);
  ctx.closePath();
  
  const grad = ctx.createLinearGradient(0, mid - halfH * 0.5, 0, h);
  grad.addColorStop(0, color + "18");
  grad.addColorStop(1, color + "00");
  ctx.fillStyle = grad;
  ctx.fill();

  // Draw trace line (single pass, optimized styling)
  ctx.strokeStyle = color;
  ctx.lineWidth = 1.3;
  ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.beginPath();
  for (let i = 0; i < count; i += skip) {
    const idx = (writeIndex - count + i + bufferSize) % bufferSize;
    const x = i * xScale;
    const y = mid - buf[idx] * yScale;
    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
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
  const dprRef = useRef(window.devicePixelRatio || 1);
  const sizeRef = useRef({ w: 0, h: 0, pw: 0, ph: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });

    const tick = () => {
      const dpr = dprRef.current;
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      const pw = Math.round(w * dpr);
      const ph = Math.round(h * dpr);

      // Only resize if dimensions changed
      if (sizeRef.current.pw !== pw || sizeRef.current.ph !== ph) {
        sizeRef.current = { w, h, pw, ph };
        canvas.width = pw;
        canvas.height = ph;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }

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
