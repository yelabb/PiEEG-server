// ─────────────────────────────────────────────────────────────────────────────
// EventPanel — Side panel with detector toggles, sensitivity sliders, event
// log, and export controls.
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useCallback, type ChangeEvent } from "react";
import type { EEGEvent, DetectorConfig } from "../types";
import { SAMPLE_RATE, NUM_CHANNELS } from "../types";

interface EventPanelProps {
  open: boolean;
  onClose: () => void;
  events: EEGEvent[];
  detectors: DetectorConfig[];
  enabled: boolean;
  onToggleEnabled: () => void;
  onSetDetectorEnabled: (type: string, enabled: boolean) => void;
  onSetDetectorSensitivity: (type: string, sensitivity: number) => void;
  onResetDetectors: () => void;
  onClearEvents: () => void;
  onEventClick?: (event: EEGEvent) => void;
  /** Provide channel data + total frames for CSV export to work. */
  channelData?: Float32Array[] | Float64Array[] | null;
  totalFrames?: number;
}

export default function EventPanel({
  open,
  onClose,
  events,
  detectors,
  enabled,
  onToggleEnabled,
  onSetDetectorEnabled,
  onSetDetectorSensitivity,
  onResetDetectors,
  onClearEvents,
  onEventClick,
  channelData,
  totalFrames,
}: EventPanelProps) {
  const [tab, setTab] = useState<"events" | "detectors">("events");
  const [filter, setFilter] = useState<string>("all");

  const filteredEvents =
    filter === "all" ? events : events.filter((e) => e.detector === filter);

  // ── Export: JSON ─────────────────────────────────────────────────────
  const exportJSON = useCallback(() => {
    const data = {
      exported: new Date().toISOString(),
      sampleRate: SAMPLE_RATE,
      detectors: detectors.map((d) => ({
        type: d.type,
        label: d.label,
        enabled: d.enabled,
        sensitivity: d.sensitivity,
      })),
      events: events.map((e) => ({
        id: e.id,
        detector: e.detector,
        label: e.label,
        startTime: e.startTime,
        endTime: e.endTime,
        startFrame: e.startFrame,
        endFrame: e.endFrame,
        score: e.score,
        channels: e.channels,
        explanation: e.explanation,
        features: e.features,
      })),
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `pieeg_events_${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }, [events, detectors]);

  // ── Export: CSV with event column ────────────────────────────────────
  const exportCSV = useCallback(() => {
    if (!channelData || !totalFrames) {
      // Fallback: export events-only CSV
      const header = ["start_time", "end_time", "start_frame", "end_frame", "detector", "label", "score", "channels", "explanation"];
      const lines = [header.join(",")];
      for (const e of events) {
        lines.push([
          e.startTime.toFixed(4),
          e.endTime.toFixed(4),
          e.startFrame,
          e.endFrame,
          e.detector,
          `"${e.label}"`,
          e.score.toFixed(3),
          e.channels ? `"${e.channels.join(";")}"` : "",
          `"${e.explanation.replace(/"/g, '""')}"`,
        ].join(","));
      }
      downloadBlob(lines.join("\n"), "pieeg_events.csv", "text/csv");
      return;
    }

    // Full CSV with EEG data + event column
    const eventByFrame = new Map<number, string>();
    for (const e of events) {
      for (let f = e.startFrame; f <= e.endFrame; f++) {
        const existing = eventByFrame.get(f);
        eventByFrame.set(f, existing ? `${existing};${e.label}` : e.label);
      }
    }

    const numCh = Math.min(channelData.length, NUM_CHANNELS);
    const header = [
      "frame",
      "time_s",
      ...Array.from({ length: numCh }, (_, i) => `ch${i + 1}`),
      "event",
    ];
    const lines = [header.join(",")];

    for (let i = 0; i < totalFrames; i++) {
      const time = (i / SAMPLE_RATE).toFixed(6);
      const chVals = Array.from({ length: numCh }, (_, ch) =>
        (channelData[ch][i] ?? 0).toFixed(4),
      );
      const evt = eventByFrame.get(i) || "";
      const escaped = evt ? `"${evt.replace(/"/g, '""')}"` : "";
      lines.push([i, time, ...chVals, escaped].join(","));
    }

    downloadBlob(lines.join("\n"), "pieeg_data_with_events.csv", "text/csv");
  }, [events, channelData, totalFrames]);

  if (!open) return null;

  return (
    <div className="ep-overlay">
      <div className="ep-panel">
        {/* Header */}
        <div className="ep-header">
          <h3>⚡ Event Engine</h3>
          <div className="ep-header-actions">
            <label className="ep-toggle-label">
              <input
                type="checkbox"
                checked={enabled}
                onChange={onToggleEnabled}
              />
              <span>{enabled ? "Active" : "Off"}</span>
            </label>
            <button className="ep-close" onClick={onClose}>✕</button>
          </div>
        </div>

        {/* Tabs */}
        <div className="ep-tabs">
          <button
            className={`ep-tab${tab === "events" ? " active" : ""}`}
            onClick={() => setTab("events")}
          >
            Events ({events.length})
          </button>
          <button
            className={`ep-tab${tab === "detectors" ? " active" : ""}`}
            onClick={() => setTab("detectors")}
          >
            Detectors
          </button>
        </div>

        {/* Events tab */}
        {tab === "events" && (
          <div className="ep-content">
            {/* Filter */}
            <div className="ep-filter-row">
              <select
                className="ep-select"
                value={filter}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => setFilter(e.target.value)}
              >
                <option value="all">All types</option>
                {detectors.map((d) => (
                  <option key={d.type} value={d.type}>
                    {d.icon} {d.label}
                  </option>
                ))}
              </select>
              <button className="ep-btn ep-btn-sm" onClick={onClearEvents}>Clear</button>
            </div>

            {/* Event list */}
            <div className="ep-event-list">
              {filteredEvents.length === 0 ? (
                <p className="ep-empty">
                  {enabled ? "No events detected yet…" : "Enable the engine to start detecting"}
                </p>
              ) : (
                filteredEvents.map((evt) => (
                  <div
                    key={evt.id}
                    className="ep-event-item"
                    onClick={() => onEventClick?.(evt)}
                    style={{ borderLeftColor: evt.color }}
                  >
                    <div className="ep-event-head">
                      <span className="ep-event-icon" style={{ color: evt.color }}>
                        {evt.icon}
                      </span>
                      <span className="ep-event-label">{evt.label}</span>
                      <span className="ep-event-score">
                        {(evt.score * 100).toFixed(0)}%
                      </span>
                      <span className="ep-event-time">
                        {formatTime(evt.startTime)}
                      </span>
                    </div>
                    <div className="ep-event-explain">{evt.explanation}</div>
                    {evt.channels && (
                      <div className="ep-event-channels">
                        Ch {evt.channels.map((c) => c + 1).join(", ")}
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>

            {/* Export */}
            <div className="ep-export-row">
              <button className="ep-btn" onClick={exportJSON}>⬇ JSON</button>
              <button className="ep-btn" onClick={exportCSV}>⬇ CSV</button>
            </div>
          </div>
        )}

        {/* Detectors tab */}
        {tab === "detectors" && (
          <div className="ep-content">
            <div className="ep-detector-list">
              {detectors.map((det) => (
                <div key={det.type} className="ep-detector-item">
                  <div className="ep-detector-head">
                    <label className="ep-detector-toggle">
                      <input
                        type="checkbox"
                        checked={det.enabled}
                        onChange={() => onSetDetectorEnabled(det.type, !det.enabled)}
                      />
                      <span className="ep-detector-icon" style={{ color: det.color }}>
                        {det.icon}
                      </span>
                      <span className="ep-detector-name">{det.label}</span>
                    </label>
                  </div>
                  <p className="ep-detector-desc">{det.description}</p>
                  <div className="ep-sensitivity-row">
                    <span className="ep-sensitivity-label">Sensitivity</span>
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.05"
                      value={det.sensitivity}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        onSetDetectorSensitivity(det.type, parseFloat(e.target.value))
                      }
                      className="ep-slider"
                    />
                    <span className="ep-sensitivity-value">
                      {(det.sensitivity * 100).toFixed(0)}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="ep-btn ep-btn-reset"
              onClick={onResetDetectors}
            >
              Reset to Defaults
            </button>
          </div>
        )}
      </div>

      <style>{styles}</style>
    </div>
  );
}

// ── Helpers ──────────────────────────────────────────────────────────────

function formatTime(s: number): string {
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  const ms = Math.floor((s % 1) * 10);
  return `${m}:${String(sec).padStart(2, "0")}.${ms}`;
}

function downloadBlob(content: string, filename: string, type: string) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

// ── Styles ───────────────────────────────────────────────────────────────

const styles = `
  .ep-overlay {
    position: fixed;
    top: 0; right: 0;
    width: 380px;
    height: 100vh;
    z-index: 60;
    display: flex;
    flex-direction: column;
    pointer-events: none;
  }
  .ep-panel {
    pointer-events: auto;
    display: flex;
    flex-direction: column;
    height: 100%;
    background: var(--surface, #111);
    border-left: 1px solid var(--border, rgba(255,255,255,0.06));
    box-shadow: var(--shadow-xl, 0 16px 64px rgba(0,0,0,0.8));
    font-family: var(--sans, -apple-system, sans-serif);
    font-size: 13px;
    color: var(--text, #ededed);
  }

  .ep-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid var(--border);
    flex-shrink: 0;
  }
  .ep-header h3 {
    font-size: 14px;
    font-weight: 600;
    margin: 0;
  }
  .ep-header-actions {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .ep-toggle-label {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 12px;
    cursor: pointer;
    color: var(--text-secondary, #a1a1a1);
  }
  .ep-toggle-label input { accent-color: var(--accent, #0070f3); }
  .ep-close {
    background: none;
    border: none;
    color: var(--text-dim, #666);
    cursor: pointer;
    font-size: 16px;
    padding: 2px 6px;
    border-radius: 4px;
  }
  .ep-close:hover { background: rgba(255,255,255,0.06); color: var(--text); }

  .ep-tabs {
    display: flex;
    border-bottom: 1px solid var(--border);
    flex-shrink: 0;
  }
  .ep-tab {
    flex: 1;
    padding: 8px 0;
    background: none;
    border: none;
    border-bottom: 2px solid transparent;
    color: var(--text-secondary);
    font-size: 12px;
    cursor: pointer;
    transition: all 0.15s;
  }
  .ep-tab:hover { color: var(--text); }
  .ep-tab.active {
    color: var(--text);
    border-bottom-color: var(--accent);
  }

  .ep-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .ep-filter-row {
    display: flex;
    gap: 6px;
    padding: 8px 12px;
    border-bottom: 1px solid var(--border);
    flex-shrink: 0;
  }
  .ep-select {
    flex: 1;
    background: var(--surface-raised, #171717);
    color: var(--text);
    border: 1px solid var(--border);
    border-radius: var(--radius-sm, 6px);
    padding: 4px 8px;
    font-size: 12px;
    font-family: inherit;
  }

  .ep-event-list {
    flex: 1;
    overflow-y: auto;
    padding: 4px 0;
  }
  .ep-empty {
    text-align: center;
    padding: 32px 16px;
    color: var(--text-dim);
    font-size: 12px;
  }

  .ep-event-item {
    padding: 8px 12px;
    border-left: 3px solid transparent;
    cursor: pointer;
    transition: background 0.1s;
  }
  .ep-event-item:hover { background: rgba(255,255,255,0.03); }
  .ep-event-head {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .ep-event-icon { font-size: 14px; }
  .ep-event-label { font-weight: 500; font-size: 12px; }
  .ep-event-score {
    margin-left: auto;
    font-family: var(--mono);
    font-size: 11px;
    color: var(--text-dim);
  }
  .ep-event-time {
    font-family: var(--mono);
    font-size: 11px;
    color: var(--text-dim);
  }
  .ep-event-explain {
    font-size: 11px;
    color: var(--text-secondary);
    margin-top: 2px;
    line-height: 1.3;
  }
  .ep-event-channels {
    font-size: 10px;
    color: var(--text-dim);
    margin-top: 2px;
    font-family: var(--mono);
  }

  .ep-export-row {
    display: flex;
    gap: 6px;
    padding: 8px 12px;
    border-top: 1px solid var(--border);
    flex-shrink: 0;
  }

  .ep-btn {
    background: var(--surface-raised);
    color: var(--text-secondary);
    border: 1px solid var(--border);
    border-radius: var(--radius-sm);
    padding: 5px 10px;
    font-size: 12px;
    cursor: pointer;
    font-family: inherit;
    transition: all 0.15s;
  }
  .ep-btn:hover {
    background: rgba(255,255,255,0.06);
    color: var(--text);
    border-color: var(--border-hover);
  }
  .ep-btn-sm { padding: 3px 8px; font-size: 11px; }
  .ep-btn-reset {
    margin: 8px 12px 12px;
    text-align: center;
  }

  .ep-detector-list {
    flex: 1;
    overflow-y: auto;
    padding: 8px 0;
  }
  .ep-detector-item {
    padding: 8px 12px;
    border-bottom: 1px solid var(--border);
  }
  .ep-detector-head {
    display: flex;
    align-items: center;
  }
  .ep-detector-toggle {
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    font-size: 13px;
  }
  .ep-detector-toggle input { accent-color: var(--accent); }
  .ep-detector-icon { font-size: 14px; }
  .ep-detector-name { font-weight: 500; }
  .ep-detector-desc {
    font-size: 11px;
    color: var(--text-dim);
    margin: 4px 0 6px 22px;
    line-height: 1.3;
  }
  .ep-sensitivity-row {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-left: 22px;
  }
  .ep-sensitivity-label {
    font-size: 11px;
    color: var(--text-secondary);
    white-space: nowrap;
  }
  .ep-slider {
    flex: 1;
    accent-color: var(--accent);
    height: 4px;
  }
  .ep-sensitivity-value {
    font-family: var(--mono);
    font-size: 11px;
    color: var(--text-dim);
    min-width: 32px;
    text-align: right;
  }
`;
