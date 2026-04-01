// ─────────────────────────────────────────────────────────────────────────────
// Shared type definitions for the PiEEG dashboard
// ─────────────────────────────────────────────────────────────────────────────

import type { MutableRefObject } from "react";

/** Default / maximum number of EEG channels. */
export const NUM_CHANNELS = 16;

/** ADC sample rate in Hz. */
export const SAMPLE_RATE = 250;

/** Trace colours — one per channel (wraps via index % length). */
export const TRACE_COLORS: readonly string[] = [
  "#58a6ff", "#3fb950", "#d29922", "#f85149",
  "#bc8cff", "#39d2c0", "#f0883e", "#db61a2",
  "#58a6ff", "#3fb950", "#d29922", "#f85149",
  "#bc8cff", "#39d2c0", "#f0883e", "#db61a2",
];

// ── EEG data shared between hooks and canvas components ──────────────────

export interface EEGData {
  buffers: MutableRefObject<Float32Array[]>;
  writeIndex: MutableRefObject<number>;
  samplesInBuffer: MutableRefObject<number>;
  bufferSize: number;
  numChannels: number;
  gridSuspended: boolean;
}

// ── FFT / spectral types ─────────────────────────────────────────────────

export interface FrequencyBand {
  name: string;
  label: string;
  low: number;
  high: number;
  color: string;
}

export interface BandPowers {
  [bandName: string]: number;
}

export interface FFTResult {
  frequencies: Float64Array;
  psd: Float64Array;
  bandPowers: BandPowers;
  dominantFrequency: number;
  totalPower: number;
}

// ── WebSocket message types ──────────────────────────────────────────────

export interface WSSampleMessage {
  channels: number[];
  t: number;
}

export interface WSStatusMessage {
  status: unknown;
}

export interface WSRecordStoppedPayload {
  filename: string;
  frames: number;
  duration: number;
  path: string;
}

export interface WSRecordStatusMessage {
  record_status: {
    recording: boolean;
    stopped?: WSRecordStoppedPayload;
  };
}

export type WSMessage = WSSampleMessage | WSStatusMessage | WSRecordStatusMessage | WSWebhookMessage;

// ── Webhook types ────────────────────────────────────────────────────────

export const TRIGGER_TYPES = [
  "band_power_above",
  "band_power_below",
  "amplitude_above",
  "amplitude_below",
  "band_ratio_above",
  "band_ratio_below",
] as const;

export type TriggerType = (typeof TRIGGER_TYPES)[number];

export const BANDS = ["delta", "theta", "alpha", "beta", "gamma"] as const;
export type Band = (typeof BANDS)[number];

export interface WebhookRule {
  id: string;
  name: string;
  enabled: boolean;
  trigger_type: TriggerType;
  params: Record<string, unknown>;
  url: string;
  method: string;
  headers: Record<string, string>;
  body_template: string;
  cooldown: number;
  last_fired: number;
  fire_count: number;
}

export interface WebhookEvent {
  rule_id: string;
  rule_name: string;
  trigger_type: string;
  value: number;
  threshold: number;
  ts: number;
}

export interface WSWebhookMessage {
  webhook_event?: WebhookEvent;
  webhook_rules?: WebhookRule[];
  webhook_created?: WebhookRule;
  webhook_updated?: WebhookRule;
  webhook_deleted?: boolean;
  webhook_error?: string;
  webhook_test?: { ok: boolean; error?: string };
}

// ── Recording / playback types ───────────────────────────────────────────

export interface RecordResult {
  filename: string;
  frames: number;
  duration: number;
  path: string;
  downloadUrl: string;
}

export interface Recording {
  filename: string;
  size: number;
  mtime: number;
}

export interface Annotation {
  id: number;
  frame: number;
  time: number;
  text: string;
  timestamp: string;
}

// ── useEEG hook return type ──────────────────────────────────────────────

export interface UseEEGReturn {
  connected: boolean;
  numChannels: number;
  sampleCount: number;
  hz: number;
  latencyMs: number | null;
  recording: boolean;
  recordElapsed: number;
  recordResult: RecordResult | null;
  data: EEGData;
  dismissRecordResult: () => void;
  setPaused: (v: boolean) => void;
  sendCommand: (cmd: Record<string, unknown>) => void;
}

// ── Canvas drawing helpers ───────────────────────────────────────────────

export interface CanvasSize {
  w: number;
  h: number;
  pw: number;
  ph: number;
  dpr: number;
}

export interface ChannelStats {
  mean: number;
  rms: number;
  pp: number;
  min: number;
  max: number;
  zeroCross: number;
  latestVal: number;
  statCount: number;
}

// ── Update / version info ────────────────────────────────────────────────

export interface UpdateInfo {
  current_version: string;
  latest_version: string;
  update_available: boolean;
  install_method: string;
}

// ── Worker message types ─────────────────────────────────────────────────

export interface WorkerAnalyseMessage {
  type: "analyse";
  data: { samples: Float32Array | Float64Array | number[]; id: number };
}

export interface WorkerAnalyseRingMessage {
  type: "analyseRing";
  data: {
    ringBuf: Float32Array;
    writeIndex: number;
    samplesInBuf: number;
    id: number;
  };
}

export interface WorkerInitMessage {
  type: "init";
}

export type WorkerInMessage = WorkerAnalyseMessage | WorkerAnalyseRingMessage | WorkerInitMessage;

export interface WorkerReadyMessage {
  type: "ready";
}

export interface WorkerResultMessage {
  type: "analyseResult";
  id: number;
  result: FFTResult | null;
}

export type WorkerOutMessage = WorkerReadyMessage | WorkerResultMessage;

// ── Scale & time options ─────────────────────────────────────────────────

export interface SelectOption<T> {
  value: T;
  label: string;
}

// ── Event Engine types ───────────────────────────────────────────────────

export const EVENT_DETECTOR_TYPES = [
  "alpha_burst",
  "blink_artifact",
  "eye_movement",
  "band_transition",
  "amplitude_anomaly",
  "drowsiness_onset",
  "focus_state",
  "muscle_artifact",
] as const;

export type EventDetectorType = (typeof EVENT_DETECTOR_TYPES)[number];

export interface DetectorConfig {
  type: EventDetectorType;
  label: string;
  description: string;
  color: string;
  icon: string;
  enabled: boolean;
  sensitivity: number; // 0–1 (maps to internal thresholds)
  defaultSensitivity: number;
}

/** A scored candidate moment before merge. */
export interface EventCandidate {
  detector: EventDetectorType;
  /** Time in seconds (stream-relative for live, absolute for replay). */
  time: number;
  /** Frame index (sample number). */
  frame: number;
  /** Confidence score 0–1. */
  score: number;
  /** Channel(s) most relevant, or null for global events. */
  channels: number[] | null;
  /** Feature values that triggered detection. */
  features: Record<string, number>;
}

/** A merged event (candidates within a merge window are combined). */
export interface EEGEvent {
  id: string;
  detector: EventDetectorType;
  label: string;
  color: string;
  icon: string;
  /** Start time in seconds. */
  startTime: number;
  /** End time in seconds (same as start for instantaneous). */
  endTime: number;
  /** Start frame index. */
  startFrame: number;
  /** End frame index. */
  endFrame: number;
  /** Peak score across merged candidates. */
  score: number;
  /** Channels involved. */
  channels: number[] | null;
  /** Feature snapshot at peak score. */
  features: Record<string, number>;
  /** Human-readable explanation. */
  explanation: string;
}

/** Message sent TO the event engine worker. */
export type EventWorkerInMessage =
  | { type: "configure"; detectors: DetectorConfig[] }
  | { type: "analyse"; channelData: Float64Array[]; startFrame: number; sampleRate: number }
  | { type: "scan"; channelData: Float64Array[]; totalFrames: number; sampleRate: number };

/** Message sent FROM the event engine worker. */
export type EventWorkerOutMessage =
  | { type: "candidates"; candidates: EventCandidate[] }
  | { type: "scan_complete"; events: EEGEvent[] };
