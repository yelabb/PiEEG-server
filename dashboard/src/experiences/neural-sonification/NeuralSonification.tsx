// ─────────────────────────────────────────────────────────────────────────────
// NeuralSonification — Live EEG-to-music experience.
//
// Band powers drive a layered synthesiser:
//   Delta → deep drone, Theta → FM pad, Alpha → melodic lead,
//   Beta → bright harmonics, Gamma → sparkle/shimmer
//
// UI shows real-time band level meters + DJ-style controls.
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useEffect, useRef, useCallback } from "react";
import type { ExperienceProps } from "../registry";
import { useNeuralAudio } from "./useNeuralAudio";
import type { SynthConfig } from "./NeuralSynth";
import { FREQUENCY_BANDS } from "../../lib/fftEngine";
import type { BandPowers } from "../../types";

// ── Band → layer label mapping ──────────────────────────────────────────

const LAYER_LABELS: Record<string, string> = {
  Delta: "Drone",
  Theta: "Pad",
  Alpha: "Melody",
  Beta: "Bright",
  Gamma: "Shimmer",
};

const SCALES = [
  "pentatonic", "minor", "major", "dorian", "phrygian",
  "lydian", "blues", "harmonic_minor", "whole_tone",
];

const ROOTS = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

// ── Component ────────────────────────────────────────────────────────────

export default function NeuralSonification({ eegData, onExit }: ExperienceProps) {
  const audio = useNeuralAudio(eegData);
  const [playing, setPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [bandLevels, setBandLevels] = useState<BandPowers>({});
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef(0);

  // Config state mirrors the synth config for UI reactivity
  const [config, setConfig] = useState<SynthConfig>({
    masterVolume: 0.6,
    scale: "pentatonic",
    rootNote: "C",
    reverbMix: 0.35,
    delayTime: 0.3,
    delayFeedback: 0.3,
    sensitivity: 2,
  });

  // ── Play / Stop ────────────────────────────────────────────────────

  const togglePlay = useCallback(async () => {
    if (playing) {
      audio.stop();
      setPlaying(false);
    } else {
      await audio.start();
      setPlaying(true);
    }
  }, [playing, audio]);

  // ── Config change handler ──────────────────────────────────────────

  const updateConfig = useCallback(
    (key: keyof SynthConfig, value: number | string) => {
      const patch = { [key]: value } as Partial<SynthConfig>;
      audio.applyConfig(patch);
      setConfig((prev) => ({ ...prev, ...patch }));
    },
    [audio],
  );

  // ── Keyboard shortcuts ─────────────────────────────────────────────

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onExit();
      if (e.key === " ") {
        e.preventDefault();
        togglePlay();
      }
      if (e.key === "c" || e.key === "C") setShowControls((v) => !v);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onExit, togglePlay]);

  // ── Animation loop — read band powers and draw visualiser ──────────

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frameCount = 0;

    const draw = () => {
      rafRef.current = requestAnimationFrame(draw);
      frameCount++;

      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }

      ctx.clearRect(0, 0, w, h);

      const bp = audio.latestBP.current;
      if (!bp) {
        // Placeholder text
        ctx.fillStyle = "#8b949e";
        ctx.font = "16px system-ui, sans-serif";
        ctx.textAlign = "center";
        ctx.fillText(
          playing ? "Waiting for EEG data…" : "Press Play to start sonification",
          w / 2,
          h / 2,
        );
        return;
      }

      // Update React state at reduced rate for the controls panel
      if (frameCount % 6 === 0) {
        setBandLevels(bp);
      }

      const sensitivity = config.sensitivity;
      const bands = FREQUENCY_BANDS;
      const barW = Math.min(80, (w - 40) / bands.length - 12);
      const startX = (w - bands.length * (barW + 12) + 12) / 2;
      const maxBarH = h * 0.55;
      const barY = h * 0.7;

      for (let i = 0; i < bands.length; i++) {
        const band = bands[i];
        const raw = bp[band.name] ?? 0;
        const norm = Math.min(Math.log1p(raw * sensitivity) / 6, 1);
        const barH = norm * maxBarH;
        const x = startX + i * (barW + 12);

        // Glow
        ctx.shadowColor = band.color;
        ctx.shadowBlur = norm * 25;

        // Bar
        const grad = ctx.createLinearGradient(x, barY, x, barY - barH);
        grad.addColorStop(0, band.color + "33");
        grad.addColorStop(1, band.color);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.roundRect(x, barY - barH, barW, barH, 4);
        ctx.fill();

        ctx.shadowBlur = 0;

        // Label
        ctx.fillStyle = band.color;
        ctx.font = "bold 11px system-ui, sans-serif";
        ctx.textAlign = "center";
        ctx.fillText(band.label, x + barW / 2, barY + 16);

        // Layer label
        ctx.fillStyle = "#8b949e";
        ctx.font = "10px system-ui, sans-serif";
        ctx.fillText(LAYER_LABELS[band.name] ?? "", x + barW / 2, barY + 30);

        // Level value
        ctx.fillStyle = "#c9d1d9";
        ctx.font = "12px monospace";
        ctx.fillText(
          norm > 0.01 ? (norm * 100).toFixed(0) + "%" : "—",
          x + barW / 2,
          barY - barH - 8,
        );
      }

      // Title
      ctx.fillStyle = "#e6edf3";
      ctx.font = "bold 18px system-ui, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("Neural Sonification", w / 2, 36);

      // Subtle note
      ctx.fillStyle = "#484f58";
      ctx.font = "11px system-ui, sans-serif";
      ctx.fillText(
        `${config.rootNote} ${config.scale} · sensitivity ${config.sensitivity.toFixed(1)}×`,
        w / 2,
        56,
      );
    };

    rafRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafRef.current);
  }, [playing, config.sensitivity, config.rootNote, config.scale, audio.latestBP]);

  const showLanding = !playing || !audio.latestBP.current;

  // ── Render ─────────────────────────────────────────────────────────

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 9999,
      background: "#0d1117", display: "flex", flexDirection: "column",
    }}>
      {/* Visualiser canvas (always mounted for RAF) */}
      <canvas
        ref={canvasRef}
        style={{
          flex: 1, width: "100%", display: "block",
          opacity: showLanding ? 0.15 : 1,
          transition: "opacity 0.6s ease",
        }}
      />

      {/* ── Landing overlay ─────────────────────────────────────────── */}
      {showLanding && (
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          gap: 32, padding: 24, pointerEvents: "auto",
        }}>
          {/* Back button — top left */}
          <button
            onClick={onExit}
            style={{
              position: "absolute", top: 16, left: 16,
              background: "transparent", border: "1px solid #30363d",
              color: "#8b949e", borderRadius: 6, padding: "6px 14px",
              fontSize: 13, cursor: "pointer",
            }}
          >
            ← Back
          </button>

          {/* Hero */}
          <div style={{ textAlign: "center", maxWidth: 520 }}>
            <div style={{
              fontSize: 40, marginBottom: 8,
              filter: "drop-shadow(0 0 24px #58a6ff55)",
            }}>
              🎵
            </div>
            <h1 style={{
              color: "#e6edf3", fontSize: 28, fontWeight: 700, margin: "0 0 8px",
              letterSpacing: "-0.02em",
            }}>
              Neural Sonification
            </h1>
            <p style={{ color: "#8b949e", fontSize: 14, margin: 0, lineHeight: 1.5 }}>
              Your brainwaves become music. Each EEG frequency band drives
              a different layer of a live synthesiser.
            </p>
          </div>

          {/* Band → Layer cards */}
          <div style={{
            display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center",
            maxWidth: 560,
          }}>
            {FREQUENCY_BANDS.map((band) => (
              <div key={band.name} style={{
                background: "#161b22", border: `1px solid ${band.color}33`,
                borderRadius: 10, padding: "12px 16px", minWidth: 92,
                textAlign: "center", flex: "0 0 auto",
              }}>
                <div style={{
                  color: band.color, fontSize: 18, fontWeight: 700,
                  lineHeight: 1, marginBottom: 4,
                }}>
                  {band.label.split(" ")[0]}
                </div>
                <div style={{ color: "#e6edf3", fontSize: 12, fontWeight: 600 }}>
                  {band.name}
                </div>
                <div style={{
                  color: "#484f58", fontSize: 10, margin: "4px 0 0",
                  borderTop: "1px solid #21262d", paddingTop: 4,
                }}>
                  {band.low}–{band.high} Hz
                </div>
                <div style={{ color: band.color, fontSize: 11, fontWeight: 600, marginTop: 2 }}>
                  → {LAYER_LABELS[band.name]}
                </div>
              </div>
            ))}
          </div>

          {/* Play button */}
          <button onClick={togglePlay} style={{
            background: "linear-gradient(135deg, #238636, #2ea043)",
            color: "#fff", border: "none", borderRadius: 50,
            padding: "14px 40px", fontSize: 17, fontWeight: 700,
            cursor: "pointer", letterSpacing: "0.02em",
            boxShadow: "0 0 30px #23863644, 0 2px 8px #00000066",
            transition: "transform 0.15s ease, box-shadow 0.15s ease",
          }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 0 40px #238636aa, 0 4px 16px #00000088";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 0 30px #23863644, 0 2px 8px #00000066";
            }}
          >
            ▶ &nbsp;Start Sonification
          </button>

          {/* Hint */}
          <span style={{ color: "#484f58", fontSize: 11 }}>
            Space = play &middot; C = controls &middot; Esc = exit
          </span>
        </div>
      )}

      {/* ── Transport + controls (visible when playing) ──────────── */}
      {!showLanding && (
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          background: "linear-gradient(transparent, #0d1117cc 30%, #0d1117)",
          padding: "16px 20px 20px",
        }}>
          {/* Transport bar */}
          <div style={{
            display: "flex", alignItems: "center", gap: 12,
            justifyContent: "center", marginBottom: showControls ? 16 : 0,
          }}>
            <button onClick={togglePlay} style={btnStyle}>
              ⏸ Pause
            </button>
            <button onClick={() => setShowControls((v) => !v)} style={btnStyle}>
              {showControls ? "▲ Hide" : "⚙ Controls"}
            </button>
            <button onClick={onExit} style={{ ...btnStyle, background: "#da3633" }}>
              ✕ Exit
            </button>
            <span style={{ color: "#484f58", fontSize: 11, marginLeft: 8 }}>
              Space=play · C=controls · Esc=exit
            </span>
          </div>

          {/* Expanded controls panel */}
          {showControls && (
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: 12, maxWidth: 900, margin: "0 auto",
            }}>
              {/* Scale */}
              <label style={labelStyle}>
                Scale
                <select
                  value={config.scale}
                  onChange={(e) => updateConfig("scale", e.target.value)}
                  style={selectStyle}
                >
                  {SCALES.map((s) => (
                    <option key={s} value={s}>{s.replace(/_/g, " ")}</option>
                  ))}
                </select>
              </label>

              {/* Root note */}
              <label style={labelStyle}>
                Root Note
                <select
                  value={config.rootNote}
                  onChange={(e) => updateConfig("rootNote", e.target.value)}
                  style={selectStyle}
                >
                  {ROOTS.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </label>

              {/* Master volume */}
              <label style={labelStyle}>
                Volume — {(config.masterVolume * 100).toFixed(0)}%
                <input
                  type="range" min={0} max={1} step={0.01}
                  value={config.masterVolume}
                  onChange={(e) => updateConfig("masterVolume", +e.target.value)}
                  style={rangeStyle}
                />
              </label>

              {/* Sensitivity */}
              <label style={labelStyle}>
                Sensitivity — {config.sensitivity.toFixed(1)}×
                <input
                  type="range" min={0.5} max={5} step={0.1}
                  value={config.sensitivity}
                  onChange={(e) => updateConfig("sensitivity", +e.target.value)}
                  style={rangeStyle}
                />
              </label>

              {/* Reverb */}
              <label style={labelStyle}>
                Reverb — {(config.reverbMix * 100).toFixed(0)}%
                <input
                  type="range" min={0} max={1} step={0.01}
                  value={config.reverbMix}
                  onChange={(e) => updateConfig("reverbMix", +e.target.value)}
                  style={rangeStyle}
                />
              </label>

              {/* Delay time */}
              <label style={labelStyle}>
                Delay — {(config.delayTime * 1000).toFixed(0)}ms
                <input
                  type="range" min={0.05} max={1} step={0.01}
                  value={config.delayTime}
                  onChange={(e) => updateConfig("delayTime", +e.target.value)}
                  style={rangeStyle}
                />
              </label>

              {/* Delay feedback */}
              <label style={labelStyle}>
                Feedback — {(config.delayFeedback * 100).toFixed(0)}%
                <input
                  type="range" min={0} max={0.9} step={0.01}
                  value={config.delayFeedback}
                  onChange={(e) => updateConfig("delayFeedback", +e.target.value)}
                  style={rangeStyle}
                />
              </label>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ── Shared styles ────────────────────────────────────────────────────────

const btnStyle: React.CSSProperties = {
  background: "#238636",
  color: "#fff",
  border: "none",
  borderRadius: 6,
  padding: "8px 18px",
  fontSize: 14,
  fontWeight: 600,
  cursor: "pointer",
};

const labelStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 4,
  color: "#c9d1d9",
  fontSize: 12,
  fontWeight: 500,
};

const selectStyle: React.CSSProperties = {
  background: "#161b22",
  color: "#c9d1d9",
  border: "1px solid #30363d",
  borderRadius: 4,
  padding: "4px 8px",
  fontSize: 13,
};

const rangeStyle: React.CSSProperties = {
  width: "100%",
  accentColor: "#58a6ff",
};
