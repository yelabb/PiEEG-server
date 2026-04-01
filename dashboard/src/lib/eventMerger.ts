// ─────────────────────────────────────────────────────────────────────────────
// Event Engine — Merges scored candidates into discrete events.
//
// Candidates within MERGE_WINDOW_MS of each other (same detector) are combined
// into a single event. The peak score is kept and the time span is widened.
// ─────────────────────────────────────────────────────────────────────────────

import type {
  EventCandidate,
  EEGEvent,
  DetectorConfig,
  EventDetectorType,
} from "../types";

import { DEFAULT_DETECTORS } from "./eventDetectors";

const MERGE_WINDOW_S = 1.5; // seconds

let idCounter = 0;
function nextId(): string {
  return `evt_${Date.now().toString(36)}_${(idCounter++).toString(36)}`;
}

/** Look up detector config by type. */
function detectorFor(type: EventDetectorType, detectors: DetectorConfig[]): DetectorConfig {
  return detectors.find((d) => d.type === type) ?? DEFAULT_DETECTORS.find((d) => d.type === type)!;
}

function buildExplanation(candidate: EventCandidate): string {
  const f = candidate.features;
  switch (candidate.detector) {
    case "alpha_burst":
      return `Alpha power ${(f.alphaPower ?? 0).toFixed(1)} µV² (${((f.alphaPower ?? 0) / (f.totalPower || 1) * 100).toFixed(0)}% of total)`;
    case "blink_artifact":
      return `Frontal spike ${(f.peakAmplitude ?? 0).toFixed(0)} µV, derivative ${(f.maxDerivative ?? 0).toFixed(1)}`;
    case "eye_movement":
      return `L/R asymmetry ${(f.asymmetry ?? 0).toFixed(1)} µV (L=${(f.leftMean ?? 0).toFixed(1)}, R=${(f.rightMean ?? 0).toFixed(1)})`;
    case "band_transition": {
      const bands = ["Delta", "Theta", "Alpha", "Beta", "Gamma"];
      const from = bands[f.fromBand ?? 0] ?? "?";
      const to = bands[f.toBand ?? 0] ?? "?";
      return `Band shift ${from} → ${to}`;
    }
    case "amplitude_anomaly":
      return `Peak ${(f.peakAmplitude ?? 0).toFixed(0)} µV across ${f.affectedCount ?? 1} channel(s)`;
    case "drowsiness_onset":
      return `θ/α ratio ${(f.thetaAlphaRatio ?? 0).toFixed(2)} (θ=${(f.theta ?? 0).toFixed(1)}, α=${(f.alpha ?? 0).toFixed(1)})`;
    case "focus_state":
      return `Beta power ${(f.betaPower ?? 0).toFixed(1)} µV² (${((f.betaRatio ?? 0) * 100).toFixed(0)}% of total)`;
    case "muscle_artifact":
      return `Gamma ${(f.gammaPower ?? 0).toFixed(1)} µV², RMS ${(f.rms ?? 0).toFixed(1)} µV`;
    default:
      return `Score ${candidate.score.toFixed(2)}`;
  }
}

/** Merge a flat array of candidates (sorted by time) into events. */
export function mergeCandidates(
  candidates: EventCandidate[],
  detectors: DetectorConfig[],
): EEGEvent[] {
  if (!candidates.length) return [];

  // Group by detector type
  const groups = new Map<EventDetectorType, EventCandidate[]>();
  for (const c of candidates) {
    const arr = groups.get(c.detector) ?? [];
    arr.push(c);
    groups.set(c.detector, arr);
  }

  const events: EEGEvent[] = [];

  for (const [type, group] of groups) {
    group.sort((a, b) => a.time - b.time);
    const det = detectorFor(type, detectors);

    let current: {
      startTime: number;
      endTime: number;
      startFrame: number;
      endFrame: number;
      peakScore: number;
      peakCandidate: EventCandidate;
      channels: Set<number>;
    } | null = null;

    for (const c of group) {
      if (current && c.time - current.endTime <= MERGE_WINDOW_S) {
        // Extend current event
        current.endTime = c.time;
        current.endFrame = c.frame;
        if (c.score > current.peakScore) {
          current.peakScore = c.score;
          current.peakCandidate = c;
        }
        if (c.channels) {
          for (const ch of c.channels) current.channels.add(ch);
        }
      } else {
        // Flush previous event
        if (current) {
          events.push({
            id: nextId(),
            detector: type,
            label: det.label,
            color: det.color,
            icon: det.icon,
            startTime: current.startTime,
            endTime: current.endTime,
            startFrame: current.startFrame,
            endFrame: current.endFrame,
            score: current.peakScore,
            channels: current.channels.size > 0 ? [...current.channels] : null,
            features: current.peakCandidate.features,
            explanation: buildExplanation(current.peakCandidate),
          });
        }
        current = {
          startTime: c.time,
          endTime: c.time,
          startFrame: c.frame,
          endFrame: c.frame,
          peakScore: c.score,
          peakCandidate: c,
          channels: new Set(c.channels ?? []),
        };
      }
    }

    // Flush last
    if (current) {
      events.push({
        id: nextId(),
        detector: type,
        label: det.label,
        color: det.color,
        icon: det.icon,
        startTime: current.startTime,
        endTime: current.endTime,
        startFrame: current.startFrame,
        endFrame: current.endFrame,
        score: current.peakScore,
        channels: current.channels.size > 0 ? [...current.channels] : null,
        features: current.peakCandidate.features,
        explanation: buildExplanation(current.peakCandidate),
      });
    }
  }

  // Sort all events by time
  events.sort((a, b) => a.startTime - b.startTime);
  return events;
}
