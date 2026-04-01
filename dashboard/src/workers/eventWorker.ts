// ─────────────────────────────────────────────────────────────────────────────
// Event Engine Web Worker
//
// Runs detectors off the main thread. Receives channel data windows, returns
// scored candidates. For full-scan (replay), processes entire recording and
// returns merged events.
// ─────────────────────────────────────────────────────────────────────────────

import type { DetectorConfig, EventWorkerInMessage, EventWorkerOutMessage } from "../types";
import { runDetectors, scanRecording, DEFAULT_DETECTORS } from "../lib/eventDetectors";
import { mergeCandidates } from "../lib/eventMerger";

let detectors: DetectorConfig[] = DEFAULT_DETECTORS;

self.onmessage = (e: MessageEvent<EventWorkerInMessage>) => {
  const msg = e.data;

  if (msg.type === "configure") {
    detectors = msg.detectors;
    return;
  }

  if (msg.type === "analyse") {
    // Live: analyse one window
    const candidates = runDetectors(
      detectors,
      msg.channelData,
      0,
      msg.startFrame,
      msg.sampleRate,
    );
    const reply: EventWorkerOutMessage = { type: "candidates", candidates };
    self.postMessage(reply);
    return;
  }

  if (msg.type === "scan") {
    // Replay: scan entire recording
    const candidates = scanRecording(
      detectors,
      msg.channelData,
      msg.totalFrames,
      msg.sampleRate,
    );
    const events = mergeCandidates(candidates, detectors);
    const reply: EventWorkerOutMessage = { type: "scan_complete", events };
    self.postMessage(reply);
    return;
  }
};
