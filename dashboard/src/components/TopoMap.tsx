import { useRef, useEffect, useState, memo, useMemo } from "react";
import { FftEngine, FREQUENCY_BANDS } from "../lib/fftEngine";
import type { EEGData, BandPowers } from "../types";
import { NUM_CHANNELS, SAMPLE_RATE } from "../types";

// ─────────────────────────────────────────────────────────────────────────────
// TopoMap — EEG scalp topographic heatmap
//
// Interpolates per-channel band-power values from electrode positions onto
// a 2D head silhouette using inverse-distance weighting (IDW).
// Renders on HTML Canvas for 60 fps performance.
// ─────────────────────────────────────────────────────────────────────────────

const FFT_SIZE = 256;
const FFT_EVERY_FRAMES = 16; // compute FFT every Nth RAF frame
const IDW_POWER = 2.5;       // inverse-distance weighting exponent
const GRID_RES = 64;         // interpolation grid resolution
const SMOOTHING = 0.3;       // exponential smoothing for values

type TopomapMetric = "Alpha" | "Beta" | "Theta" | "Delta" | "Gamma" | "Total";

const METRICS: { key: TopomapMetric; label: string }[] = [
  { key: "Alpha", label: "α Alpha" },
  { key: "Beta",  label: "β Beta" },
  { key: "Theta", label: "θ Theta" },
  { key: "Delta", label: "δ Delta" },
  { key: "Gamma", label: "γ Gamma" },
  { key: "Total", label: "Σ Total" },
];

// ── Standard 10-20 electrode positions normalised to unit circle ──────────
// (0,0) = centre of head, radius 1 = scalp edge
// x: −1 (left) → +1 (right),  y: −1 (front) → +1 (back)
// 16-channel layout matching typical PiEEG-16 montage.
interface ElectrodePos {
  label: string;
  x: number;
  y: number;
}

const ELECTRODES_16: ElectrodePos[] = [
  { label: "Fp1", x: -0.30, y: -0.85 },
  { label: "Fp2", x:  0.30, y: -0.85 },
  { label: "F7",  x: -0.70, y: -0.45 },
  { label: "F3",  x: -0.35, y: -0.45 },
  { label: "Fz",  x:  0.00, y: -0.40 },
  { label: "F4",  x:  0.35, y: -0.45 },
  { label: "F8",  x:  0.70, y: -0.45 },
  { label: "C3",  x: -0.55, y:  0.00 },
  { label: "Cz",  x:  0.00, y:  0.00 },
  { label: "C4",  x:  0.55, y:  0.00 },
  { label: "P3",  x: -0.45, y:  0.45 },
  { label: "Pz",  x:  0.00, y:  0.42 },
  { label: "P4",  x:  0.45, y:  0.45 },
  { label: "O1",  x: -0.25, y:  0.85 },
  { label: "Oz",  x:  0.00, y:  0.80 },
  { label: "O2",  x:  0.25, y:  0.85 },
];

// ── Heatmap gradient colours (low → high) ─────────────────────────────────
const GRADIENT_COLORS = [
  [6,  10,  20],  // abyss
  [11, 37,  58],  // deep sea
  [18, 92, 109],  // teal dark
  [0,  230, 118], // bioluminescent green
  [255, 215, 64], // amber
  [255, 82,  82], // red hot
  [255, 255, 255],// white — peak
];

function sampleGradient(t: number): [number, number, number] {
  if (t <= 0) return GRADIENT_COLORS[0] as [number, number, number];
  if (t >= 1) return GRADIENT_COLORS[GRADIENT_COLORS.length - 1] as [number, number, number];
  const n = GRADIENT_COLORS.length - 1;
  const seg = t * n;
  const i = Math.min(Math.floor(seg), n - 1);
  const frac = seg - i;
  const a = GRADIENT_COLORS[i];
  const b = GRADIENT_COLORS[i + 1];
  return [
    a[0] + (b[0] - a[0]) * frac,
    a[1] + (b[1] - a[1]) * frac,
    a[2] + (b[2] - a[2]) * frac,
  ];
}

// ── Precompute IDW grid (electrode coords don't change) ───────────────────
// For each grid cell, store per-electrode weights so we avoid recomputing sqrt
// every frame.
interface GridWeights {
  weights: Float64Array[];  // [gridIdx][electrodeIdx]
  inside: boolean[];        // whether grid cell is inside head circle
  edgeFade: Float64Array;   // alpha fade at edge
  nx: Float64Array;         // normalised x per grid cell
  ny: Float64Array;         // normalised y per grid cell
}

function precomputeGrid(electrodes: ElectrodePos[], resolution: number): GridWeights {
  const total = resolution * resolution;
  const weights: Float64Array[] = new Array(total);
  const inside: boolean[] = new Array(total);
  const edgeFade = new Float64Array(total);
  const nx = new Float64Array(total);
  const ny = new Float64Array(total);

  for (let gy = 0; gy < resolution; gy++) {
    for (let gx = 0; gx < resolution; gx++) {
      const idx = gy * resolution + gx;
      const px = -1.0 + 2.0 * (gx + 0.5) / resolution;
      const py = -1.0 + 2.0 * (gy + 0.5) / resolution;
      const dist = Math.sqrt(px * px + py * py);

      nx[idx] = px;
      ny[idx] = py;

      if (dist > 1.05) {
        inside[idx] = false;
        edgeFade[idx] = 0;
        weights[idx] = new Float64Array(0);
        continue;
      }

      inside[idx] = true;
      edgeFade[idx] = dist > 0.92 ? ((1.05 - dist) / 0.13) : 1.0;

      const w = new Float64Array(electrodes.length);
      let exact = -1;
      for (let e = 0; e < electrodes.length; e++) {
        const dx = px - electrodes[e].x;
        const dy = py - electrodes[e].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 0.001) { exact = e; break; }
        w[e] = 1.0 / Math.pow(d, IDW_POWER);
      }

      if (exact >= 0) {
        // Mark exact hit: store -1 in first slot, electrode index in second
        const ew = new Float64Array(electrodes.length);
        ew[exact] = -1; // sentinel
        weights[idx] = ew;
      } else {
        // Normalise weights
        let wSum = 0;
        for (let e = 0; e < electrodes.length; e++) wSum += w[e];
        if (wSum > 0) {
          for (let e = 0; e < electrodes.length; e++) w[e] /= wSum;
        }
        weights[idx] = w;
      }
    }
  }

  return { weights, inside, edgeFade, nx, ny };
}

// ── Canvas drawing ────────────────────────────────────────────────────────

function drawTopomap(
  ctx: CanvasRenderingContext2D,
  w: number, h: number,
  values: number[],
  electrodes: ElectrodePos[],
  grid: GridWeights,
  resolution: number,
) {
  if (values.length === 0) return;

  const side = Math.min(w, h);
  const cx = w / 2;
  const cy = h / 2;
  const headR = side * 0.40; // 82% of half-side
  const cellW = (headR * 2) / resolution;
  const cellH = (headR * 2) / resolution;

  // Value range
  let vMin = Infinity, vMax = -Infinity;
  for (let i = 0; i < values.length; i++) {
    if (values[i] < vMin) vMin = values[i];
    if (values[i] > vMax) vMax = values[i];
  }
  if (vMax <= vMin) vMax = vMin + 1;
  const vRange = vMax - vMin;

  // ── Interpolated heatmap ──────────────────────────────────────────────
  for (let gy = 0; gy < resolution; gy++) {
    for (let gx = 0; gx < resolution; gx++) {
      const idx = gy * resolution + gx;
      if (!grid.inside[idx]) continue;

      const wArr = grid.weights[idx];
      let interpolated = 0;

      // Check for exact hit sentinel
      let exact = false;
      for (let e = 0; e < wArr.length; e++) {
        if (wArr[e] === -1) {
          interpolated = values[e] ?? 0;
          exact = true;
          break;
        }
      }

      if (!exact) {
        for (let e = 0; e < wArr.length && e < values.length; e++) {
          interpolated += wArr[e] * values[e];
        }
      }

      const norm = Math.max(0, Math.min(1, (interpolated - vMin) / vRange));
      const alpha = grid.edgeFade[idx];
      const [r, g, b] = sampleGradient(norm);

      const px = cx + grid.nx[idx] * headR - cellW / 2;
      const py = cy + grid.ny[idx] * headR - cellH / 2;

      ctx.fillStyle = `rgba(${r | 0},${g | 0},${b | 0},${alpha.toFixed(2)})`;
      ctx.fillRect(px, py, cellW + 0.5, cellH + 0.5);
    }
  }

  // ── Head outline ──────────────────────────────────────────────────────
  ctx.strokeStyle = "rgba(255,255,255,0.25)";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(cx, cy, headR, 0, Math.PI * 2);
  ctx.stroke();

  // ── Nose indicator ────────────────────────────────────────────────────
  ctx.beginPath();
  ctx.moveTo(cx - headR * 0.08, cy - headR);
  ctx.lineTo(cx, cy - headR - headR * 0.12);
  ctx.lineTo(cx + headR * 0.08, cy - headR);
  ctx.strokeStyle = "rgba(255,255,255,0.3)";
  ctx.lineWidth = 1.5;
  ctx.lineJoin = "round";
  ctx.stroke();

  // ── Ear indicators ────────────────────────────────────────────────────
  drawEar(ctx, cx - headR, cy, headR, true);
  drawEar(ctx, cx + headR, cy, headR, false);

  // ── Electrode markers ─────────────────────────────────────────────────
  for (let i = 0; i < electrodes.length && i < values.length; i++) {
    const ex = cx + electrodes[i].x * headR;
    const ey = cy + electrodes[i].y * headR;
    const norm = Math.max(0, Math.min(1, (values[i] - vMin) / vRange));
    const [r, g, b] = sampleGradient(norm);

    // Glow
    ctx.beginPath();
    ctx.arc(ex, ey, 5, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${r | 0},${g | 0},${b | 0},0.4)`;
    ctx.shadowColor = `rgba(${r | 0},${g | 0},${b | 0},0.6)`;
    ctx.shadowBlur = 6;
    ctx.fill();
    ctx.shadowBlur = 0;

    // White dot
    ctx.beginPath();
    ctx.arc(ex, ey, 3, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255,255,255,0.9)";
    ctx.fill();

    // Colored center
    ctx.beginPath();
    ctx.arc(ex, ey, 2, 0, Math.PI * 2);
    ctx.fillStyle = `rgb(${r | 0},${g | 0},${b | 0})`;
    ctx.fill();

    // Label
    ctx.fillStyle = "rgba(255,255,255,0.65)";
    ctx.font = "7px monospace";
    ctx.textAlign = "center";
    ctx.fillText(electrodes[i].label, ex, ey + 10);
  }

  // ── Colour bar legend ─────────────────────────────────────────────────
  drawColourBar(ctx, w, h, vMin, vMax);
}

function drawEar(
  ctx: CanvasRenderingContext2D,
  x: number, y: number, headR: number, isLeft: boolean,
) {
  const sign = isLeft ? -1 : 1;
  ctx.beginPath();
  ctx.moveTo(x, y - headR * 0.12);
  ctx.quadraticCurveTo(x + sign * headR * 0.08, y, x, y + headR * 0.12);
  ctx.strokeStyle = "rgba(255,255,255,0.2)";
  ctx.lineWidth = 1.2;
  ctx.stroke();
}

function drawColourBar(
  ctx: CanvasRenderingContext2D,
  w: number, h: number, vMin: number, vMax: number,
) {
  const barW = 10;
  const barH = h * 0.5;
  const barX = w - barW - 8;
  const barY = (h - barH) / 2;

  for (let i = 0; i < barH; i++) {
    const t = 1.0 - i / barH; // top = high
    const [r, g, b] = sampleGradient(t);
    ctx.fillStyle = `rgb(${r | 0},${g | 0},${b | 0})`;
    ctx.fillRect(barX, barY + i, barW, 1);
  }

  // Border
  ctx.strokeStyle = "rgba(255,255,255,0.15)";
  ctx.lineWidth = 0.5;
  ctx.strokeRect(barX, barY, barW, barH);

  // Labels
  ctx.fillStyle = "rgba(255,255,255,0.4)";
  ctx.font = "7px monospace";
  ctx.textAlign = "right";
  ctx.fillText(vMax.toFixed(1), barX - 3, barY + 4);
  ctx.fillText(vMin.toFixed(1), barX - 3, barY + barH);
}

// ── Component ─────────────────────────────────────────────────────────────

interface TopoMapProps {
  eegData: EEGData;
}

const TopoMap = memo(function TopoMap({ eegData }: TopoMapProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef(0);
  const frameRef = useRef(0);
  const dprRef = useRef(window.devicePixelRatio || 1);
  const needsResizeRef = useRef(true);
  const sizeRef = useRef({ w: 0, h: 0, pw: 0, ph: 0 });
  const valuesRef = useRef<number[]>(new Array(NUM_CHANNELS).fill(0));
  const smoothedRef = useRef<number[]>(new Array(NUM_CHANNELS).fill(0));
  const bandPowersRef = useRef<BandPowers>({});

  const [metric, setMetric] = useState<TopomapMetric>("Alpha");
  const [paused, setPaused] = useState(false);
  const [bandPowers, setBandPowers] = useState<BandPowers>({});
  const [dominant, setDominant] = useState({ band: "", freq: 0 });

  const fft = useMemo(() => new FftEngine(FFT_SIZE, SAMPLE_RATE), []);
  const precomputed = useMemo(() => precomputeGrid(ELECTRODES_16, GRID_RES), []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false })!;

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      const dpr = window.devicePixelRatio || 1;
      dprRef.current = dpr;
      const { width: w, height: h } = entry.contentRect;
      sizeRef.current = {
        w, h,
        pw: Math.round(w * dpr),
        ph: Math.round(h * dpr),
      };
      needsResizeRef.current = true;
    });
    observer.observe(canvas);

    const tick = () => {
      const { w, h, pw, ph } = sizeRef.current;

      if (w === 0 || h === 0) {
        rafRef.current = requestAnimationFrame(tick);
        return;
      }

      if (needsResizeRef.current) {
        needsResizeRef.current = false;
        canvas.width = pw;
        canvas.height = ph;
      }
      ctx.setTransform(dprRef.current, 0, 0, dprRef.current, 0, 0);
      ctx.fillStyle = "#0d1117";
      ctx.fillRect(0, 0, w, h);

      frameRef.current++;

      // ── FFT per channel every Nth frame ──────────────────────────────
      if (!paused && frameRef.current % FFT_EVERY_FRAMES === 0) {
        const bufs = eegData.buffers.current;
        const wi = eegData.writeIndex.current;
        const count = eegData.samplesInBuffer.current;

        if (bufs && count >= FFT_SIZE) {
          const newValues = valuesRef.current;
          let anyResult = false;
          let bestBand = "";
          let bestPow = 0;
          let domFreq = 0;
          const avgBP: BandPowers = {};

          for (let ch = 0; ch < NUM_CHANNELS; ch++) {
            const result = fft.analyseRing(bufs[ch], wi, count);
            if (!result) continue;
            anyResult = true;

            if (metric === "Total") {
              newValues[ch] = result.totalPower;
            } else {
              newValues[ch] = result.bandPowers[metric] || 0;
            }

            // Accumulate band powers for display
            for (const band of FREQUENCY_BANDS) {
              avgBP[band.name] = (avgBP[band.name] || 0) + (result.bandPowers[band.name] || 0);
            }
          }

          if (anyResult) {
            // Average band powers across channels
            for (const band of FREQUENCY_BANDS) {
              avgBP[band.name] = (avgBP[band.name] || 0) / NUM_CHANNELS;
              if ((avgBP[band.name] || 0) > bestPow) {
                bestPow = avgBP[band.name];
                bestBand = band.name;
              }
            }

            // Smooth values
            const sm = smoothedRef.current;
            for (let ch = 0; ch < NUM_CHANNELS; ch++) {
              sm[ch] = sm[ch] * (1 - SMOOTHING) + newValues[ch] * SMOOTHING;
            }

            // Throttled React state updates
            bandPowersRef.current = avgBP;
            setBandPowers(avgBP);
            setDominant((prev) =>
              prev.band === bestBand ? prev : { band: bestBand, freq: domFreq }
            );
          }
        }
      }

      // ── Draw topomap ────────────────────────────────────────────────
      const sm = smoothedRef.current;
      const hasData = sm.some((v) => v !== 0);
      if (hasData) {
        drawTopomap(ctx, w, h, sm, ELECTRODES_16, precomputed, GRID_RES);
      } else {
        ctx.fillStyle = "#4b5563";
        ctx.font = "13px monospace";
        ctx.textAlign = "center";
        ctx.fillText("Collecting samples…", w / 2, h / 2);
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      observer.disconnect();
    };
  }, [eegData, metric, paused, fft, precomputed]);

  const dominantColor =
    FREQUENCY_BANDS.find((b) => b.name === dominant.band)?.color || "#8b949e";

  return (
    <div className="topomap-panel">
      <div className="topomap-toolbar">
        <span className="topomap-title">Topomap</span>
        <div className="topomap-metrics">
          {METRICS.map((m) => (
            <button
              key={m.key}
              className={`topo-metric${metric === m.key ? " active" : ""}`}
              onClick={() => setMetric(m.key)}
            >
              {m.label}
            </button>
          ))}
        </div>
        <button
          className={`btn topo-pause${paused ? " active" : ""}`}
          onClick={() => setPaused((v) => !v)}
        >
          {paused ? "▶" : "⏸"}
        </button>
      </div>

      <div className="topomap-canvas-wrap">
        <canvas
          ref={canvasRef}
          style={{ display: "block", width: "100%", height: "100%" }}
        />
      </div>

      <div className="topomap-bands">
        {FREQUENCY_BANDS.map((band) => {
          const power = bandPowers[band.name] || 0;
          const maxPow = Math.max(
            ...FREQUENCY_BANDS.map((b) => bandPowers[b.name] || 0), 1e-6
          );
          const pct = maxPow > 0 ? (power / maxPow) * 100 : 0;
          return (
            <div key={band.name} className="topo-band">
              <span className="topo-band-dot" style={{ background: band.color }} />
              <span className="topo-band-name" style={{ color: band.color }}>
                {band.label}
              </span>
              <div className="topo-band-track">
                <div
                  className="topo-band-fill"
                  style={{ width: `${pct}%`, background: band.color }}
                />
              </div>
              <span className="topo-band-val">
                {power < 0.01 ? power.toExponential(1) : power.toFixed(2)}
              </span>
            </div>
          );
        })}
      </div>

      <div className="topomap-footer">
        <span>
          Dominant:{" "}
          <strong style={{ color: dominantColor }}>{dominant.band || "—"}</strong>
        </span>
        <span>{NUM_CHANNELS} ch · {GRID_RES}×{GRID_RES} IDW</span>
      </div>
    </div>
  );
});

export default TopoMap;
