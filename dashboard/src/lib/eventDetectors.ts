// ─────────────────────────────────────────────────────────────────────────────
// Event Detectors — Pure functions that score EEG features for meaningful moments.
//
// Each detector receives a short analysis window (256 samples ≈ 1s at 250 Hz)
// per channel and returns a score 0–1 plus relevant feature values.
//
// Sensitivity (0–1) scales thresholds: lower = more conservative, higher = more
// reactive. The mapping is detector-specific.
// ─────────────────────────────────────────────────────────────────────────────

import { FftEngine, FREQUENCY_BANDS } from "./fftEngine";
import type { EventDetectorType, EventCandidate, DetectorConfig, BandPowers } from "../types";

const FFT_SIZE = 256;

// Shared engine — reuse across all detectors in the worker
let engine: FftEngine | null = null;
function getEngine(sr: number): FftEngine {
  if (!engine || engine.sampleRateHz !== sr) engine = new FftEngine(FFT_SIZE, sr);
  return engine;
}

// ── Band-power helper ────────────────────────────────────────────────────

function bandPowersForChannel(
  data: Float64Array,
  offset: number,
  sr: number,
): { bandPowers: BandPowers; dominantFreq: number; totalPower: number } | null {
  const eng = getEngine(sr);
  if (offset + FFT_SIZE > data.length) return null;
  const result = eng.analyse(data, offset);
  if (!result) return null;
  return {
    bandPowers: result.bandPowers,
    dominantFreq: result.dominantFrequency,
    totalPower: result.totalPower,
  };
}

/** Peak-to-peak amplitude in a window. */
function peakAmplitude(data: Float64Array, offset: number, len: number): number {
  let min = Infinity, max = -Infinity;
  const end = Math.min(offset + len, data.length);
  for (let i = offset; i < end; i++) {
    if (data[i] < min) min = data[i];
    if (data[i] > max) max = data[i];
  }
  return max - min;
}

/** RMS of a window. */
function rms(data: Float64Array, offset: number, len: number): number {
  let sum = 0;
  const end = Math.min(offset + len, data.length);
  for (let i = offset; i < end; i++) sum += data[i] * data[i];
  return Math.sqrt(sum / (end - offset));
}

// ── Threshold mappers ────────────────────────────────────────────────────

/** Map sensitivity 0–1 to a threshold: low sensitivity → high threshold. */
function thresholdFromSensitivity(
  sensitivity: number,
  low: number,
  high: number,
): number {
  // Invert: sensitivity=1 → low threshold (trigger easily)
  return high - sensitivity * (high - low);
}

// ── DETECTOR IMPLEMENTATIONS ─────────────────────────────────────────────

// Frontal channels (Fp1=0, Fp2=1, F3=2, F4=3 in 10-20 approx mapping)
const FRONTAL_CHANNELS = [0, 1, 2, 3];
const LATERAL_LEFT = [0, 2, 4, 6];
const LATERAL_RIGHT = [1, 3, 5, 7];

interface DetectorResult {
  score: number;
  channels: number[] | null;
  features: Record<string, number>;
}

// ── 1. Alpha Burst — sustained alpha power spike ─────────────────────────

function detectAlphaBurst(
  channelData: Float64Array[],
  offset: number,
  sr: number,
  sensitivity: number,
): DetectorResult {
  const threshold = thresholdFromSensitivity(sensitivity, 5, 50);
  let bestScore = 0;
  let bestCh = -1;
  let bestAlpha = 0;
  let bestTotal = 0;

  for (let ch = 0; ch < channelData.length; ch++) {
    const result = bandPowersForChannel(channelData[ch], offset, sr);
    if (!result) continue;
    const alpha = result.bandPowers.Alpha ?? 0;
    const ratio = result.totalPower > 0 ? alpha / result.totalPower : 0;
    // Score based on both absolute power and relative dominance
    const score = Math.min(1, (alpha / threshold) * 0.6 + ratio * 2 * 0.4);
    if (score > bestScore) {
      bestScore = score;
      bestCh = ch;
      bestAlpha = alpha;
      bestTotal = result.totalPower;
    }
  }

  return {
    score: Math.max(0, Math.min(1, bestScore)),
    channels: bestCh >= 0 ? [bestCh] : null,
    features: { alphaPower: bestAlpha, totalPower: bestTotal, threshold },
  };
}

// ── 2. Blink Artifact — sharp frontal spike ──────────────────────────────

function detectBlink(
  channelData: Float64Array[],
  offset: number,
  sr: number,
  sensitivity: number,
): DetectorResult {
  const ampThreshold = thresholdFromSensitivity(sensitivity, 80, 300);
  const windowLen = Math.min(FFT_SIZE, channelData[0]?.length - offset || 0);
  if (windowLen < 30) return { score: 0, channels: null, features: {} };

  let maxAmp = 0;
  let bestCh = -1;

  const frontal = FRONTAL_CHANNELS.filter((c) => c < channelData.length);
  for (const ch of frontal) {
    const amp = peakAmplitude(channelData[ch], offset, windowLen);
    if (amp > maxAmp) {
      maxAmp = amp;
      bestCh = ch;
    }
  }

  // Also check for fast transient (derivative spike)
  let maxDeriv = 0;
  if (bestCh >= 0) {
    const buf = channelData[bestCh];
    for (let i = offset + 1; i < offset + windowLen; i++) {
      const d = Math.abs(buf[i] - buf[i - 1]);
      if (d > maxDeriv) maxDeriv = d;
    }
  }

  const score = Math.min(1, (maxAmp / ampThreshold) * 0.7 + (maxDeriv / (ampThreshold * 0.3)) * 0.3);

  return {
    score: Math.max(0, Math.min(1, score)),
    channels: bestCh >= 0 ? [bestCh] : frontal,
    features: { peakAmplitude: maxAmp, maxDerivative: maxDeriv, threshold: ampThreshold },
  };
}

// ── 3. Eye Movement — lateral asymmetry ──────────────────────────────────

function detectEyeMovement(
  channelData: Float64Array[],
  offset: number,
  _sr: number,
  sensitivity: number,
): DetectorResult {
  const asymThreshold = thresholdFromSensitivity(sensitivity, 15, 80);
  const windowLen = Math.min(FFT_SIZE, channelData[0]?.length - offset || 0);
  if (windowLen < 10) return { score: 0, channels: null, features: {} };

  const leftChs = LATERAL_LEFT.filter((c) => c < channelData.length);
  const rightChs = LATERAL_RIGHT.filter((c) => c < channelData.length);
  if (!leftChs.length || !rightChs.length) return { score: 0, channels: null, features: {} };

  // Compute mean amplitude for left vs right frontal channels
  let leftMean = 0, rightMean = 0;
  for (const ch of leftChs) {
    let sum = 0;
    for (let i = offset; i < offset + windowLen; i++) sum += channelData[ch][i];
    leftMean += sum / windowLen;
  }
  leftMean /= leftChs.length;

  for (const ch of rightChs) {
    let sum = 0;
    for (let i = offset; i < offset + windowLen; i++) sum += channelData[ch][i];
    rightMean += sum / windowLen;
  }
  rightMean /= rightChs.length;

  const asymmetry = Math.abs(leftMean - rightMean);
  const score = Math.min(1, asymmetry / asymThreshold);

  return {
    score: Math.max(0, Math.min(1, score)),
    channels: [...leftChs, ...rightChs],
    features: { leftMean, rightMean, asymmetry, threshold: asymThreshold },
  };
}

// ── 4. Band Transition — dominant band switches ──────────────────────────

// We need previous dominant band; store per-channel in a Map.
const prevDominantBand = new Map<number, string>();

function detectBandTransition(
  channelData: Float64Array[],
  offset: number,
  sr: number,
  sensitivity: number,
): DetectorResult {
  // Sensitivity affects how much power the new band must have
  const minRatio = thresholdFromSensitivity(sensitivity, 0.15, 0.5);
  let bestScore = 0;
  let bestCh = -1;
  let fromBand = "";
  let toBand = "";

  for (let ch = 0; ch < channelData.length; ch++) {
    const result = bandPowersForChannel(channelData[ch], offset, sr);
    if (!result || result.totalPower < 1) continue;

    // Find dominant band
    let maxPower = 0;
    let dominant = "";
    for (const band of FREQUENCY_BANDS) {
      const bp = result.bandPowers[band.name] ?? 0;
      if (bp > maxPower) {
        maxPower = bp;
        dominant = band.name;
      }
    }

    const ratio = maxPower / result.totalPower;
    const prev = prevDominantBand.get(ch);
    prevDominantBand.set(ch, dominant);

    if (prev && prev !== dominant && ratio > minRatio) {
      const score = Math.min(1, ratio / minRatio * 0.8);
      if (score > bestScore) {
        bestScore = score;
        bestCh = ch;
        fromBand = prev;
        toBand = dominant;
      }
    }
  }

  return {
    score: Math.max(0, Math.min(1, bestScore)),
    channels: bestCh >= 0 ? [bestCh] : null,
    features: { fromBand: fromBand ? FREQUENCY_BANDS.findIndex((b) => b.name === fromBand) : -1, toBand: toBand ? FREQUENCY_BANDS.findIndex((b) => b.name === toBand) : -1, minRatio },
  };
}

// ── 5. Amplitude Anomaly — exceeds ±N µV ─────────────────────────────────

function detectAmplitudeAnomaly(
  channelData: Float64Array[],
  offset: number,
  _sr: number,
  sensitivity: number,
): DetectorResult {
  const ampThreshold = thresholdFromSensitivity(sensitivity, 100, 500);
  const windowLen = Math.min(FFT_SIZE, channelData[0]?.length - offset || 0);
  if (windowLen < 2) return { score: 0, channels: null, features: {} };

  let maxAmp = 0;
  let bestCh = -1;
  const affectedChannels: number[] = [];

  for (let ch = 0; ch < channelData.length; ch++) {
    const amp = peakAmplitude(channelData[ch], offset, windowLen);
    if (amp > ampThreshold * 0.6) affectedChannels.push(ch);
    if (amp > maxAmp) {
      maxAmp = amp;
      bestCh = ch;
    }
  }

  const score = Math.min(1, maxAmp / ampThreshold);

  return {
    score: Math.max(0, Math.min(1, score)),
    channels: affectedChannels.length > 0 ? affectedChannels : (bestCh >= 0 ? [bestCh] : null),
    features: { peakAmplitude: maxAmp, threshold: ampThreshold, affectedCount: affectedChannels.length },
  };
}

// ── 6. Drowsiness Onset — theta/alpha ratio shift ────────────────────────

function detectDrowsiness(
  channelData: Float64Array[],
  offset: number,
  sr: number,
  sensitivity: number,
): DetectorResult {
  const ratioThreshold = thresholdFromSensitivity(sensitivity, 0.8, 2.5);
  let maxRatio = 0;
  let bestCh = -1;
  let bestTheta = 0;
  let bestAlpha = 0;

  for (let ch = 0; ch < channelData.length; ch++) {
    const result = bandPowersForChannel(channelData[ch], offset, sr);
    if (!result) continue;
    const theta = result.bandPowers.Theta ?? 0;
    const alpha = result.bandPowers.Alpha ?? 0;
    const ratio = alpha > 0.001 ? theta / alpha : 0;
    if (ratio > maxRatio) {
      maxRatio = ratio;
      bestCh = ch;
      bestTheta = theta;
      bestAlpha = alpha;
    }
  }

  const score = Math.min(1, maxRatio / ratioThreshold);

  return {
    score: Math.max(0, Math.min(1, score)),
    channels: bestCh >= 0 ? [bestCh] : null,
    features: { thetaAlphaRatio: maxRatio, theta: bestTheta, alpha: bestAlpha, threshold: ratioThreshold },
  };
}

// ── 7. Focus State — sustained beta dominance ────────────────────────────

function detectFocusState(
  channelData: Float64Array[],
  offset: number,
  sr: number,
  sensitivity: number,
): DetectorResult {
  const betaThreshold = thresholdFromSensitivity(sensitivity, 3, 30);
  let bestScore = 0;
  let bestCh = -1;
  let bestBeta = 0;
  let bestRatio = 0;

  for (let ch = 0; ch < channelData.length; ch++) {
    const result = bandPowersForChannel(channelData[ch], offset, sr);
    if (!result) continue;
    const beta = result.bandPowers.Beta ?? 0;
    const ratio = result.totalPower > 0 ? beta / result.totalPower : 0;
    const score = Math.min(1, (beta / betaThreshold) * 0.5 + ratio * 3 * 0.5);
    if (score > bestScore) {
      bestScore = score;
      bestCh = ch;
      bestBeta = beta;
      bestRatio = ratio;
    }
  }

  return {
    score: Math.max(0, Math.min(1, bestScore)),
    channels: bestCh >= 0 ? [bestCh] : null,
    features: { betaPower: bestBeta, betaRatio: bestRatio, threshold: betaThreshold },
  };
}

// ── 8. Muscle Artifact — broadband high-frequency burst ──────────────────

function detectMuscleArtifact(
  channelData: Float64Array[],
  offset: number,
  sr: number,
  sensitivity: number,
): DetectorResult {
  const gammaThreshold = thresholdFromSensitivity(sensitivity, 5, 40);
  const windowLen = Math.min(FFT_SIZE, channelData[0]?.length - offset || 0);
  if (windowLen < FFT_SIZE) return { score: 0, channels: null, features: {} };

  let maxScore = 0;
  let bestCh = -1;
  let bestGamma = 0;
  let bestRms = 0;

  for (let ch = 0; ch < channelData.length; ch++) {
    const result = bandPowersForChannel(channelData[ch], offset, sr);
    if (!result) continue;
    const gamma = result.bandPowers.Gamma ?? 0;
    const channelRms = rms(channelData[ch], offset, windowLen);

    // Muscle: high gamma + high RMS
    const gammaScore = gamma / gammaThreshold;
    const rmsScore = channelRms / 50; // 50 µV as baseline
    const score = Math.min(1, gammaScore * 0.6 + rmsScore * 0.4);
    if (score > maxScore) {
      maxScore = score;
      bestCh = ch;
      bestGamma = gamma;
      bestRms = channelRms;
    }
  }

  return {
    score: Math.max(0, Math.min(1, maxScore)),
    channels: bestCh >= 0 ? [bestCh] : null,
    features: { gammaPower: bestGamma, rms: bestRms, threshold: gammaThreshold },
  };
}

// ── Dispatcher ───────────────────────────────────────────────────────────

type DetectorFn = (
  channelData: Float64Array[],
  offset: number,
  sr: number,
  sensitivity: number,
) => DetectorResult;

const DETECTOR_MAP: Record<EventDetectorType, DetectorFn> = {
  alpha_burst: detectAlphaBurst,
  blink_artifact: detectBlink,
  eye_movement: detectEyeMovement,
  band_transition: detectBandTransition,
  amplitude_anomaly: detectAmplitudeAnomaly,
  drowsiness_onset: detectDrowsiness,
  focus_state: detectFocusState,
  muscle_artifact: detectMuscleArtifact,
};

export function runDetectors(
  detectors: DetectorConfig[],
  channelData: Float64Array[],
  offset: number,
  startFrame: number,
  sr: number,
): EventCandidate[] {
  const candidates: EventCandidate[] = [];
  const time = (startFrame + offset) / sr;
  const frame = startFrame + offset;

  for (const det of detectors) {
    if (!det.enabled) continue;
    const fn = DETECTOR_MAP[det.type];
    if (!fn) continue;

    const result = fn(channelData, offset, sr, det.sensitivity);
    if (result.score >= 0.5) {
      candidates.push({
        detector: det.type,
        time,
        frame,
        score: result.score,
        channels: result.channels,
        features: result.features,
      });
    }
  }

  return candidates;
}

/** Run all detectors over an entire recording (sliding window). */
export function scanRecording(
  detectors: DetectorConfig[],
  channelData: Float64Array[],
  totalFrames: number,
  sr: number,
): EventCandidate[] {
  const allCandidates: EventCandidate[] = [];
  const step = Math.floor(FFT_SIZE / 2); // 50% overlap

  for (let offset = 0; offset + FFT_SIZE <= totalFrames; offset += step) {
    const candidates = runDetectors(detectors, channelData, offset, 0, sr);
    allCandidates.push(...candidates);
  }

  return allCandidates;
}

// ── Default detector configs ─────────────────────────────────────────────

export const DEFAULT_DETECTORS: DetectorConfig[] = [
  {
    type: "alpha_burst",
    label: "Alpha Burst",
    description: "Sustained alpha power spike (relaxation / meditation)",
    color: "#22c55e",
    icon: "α",
    enabled: true,
    sensitivity: 0.5,
    defaultSensitivity: 0.5,
  },
  {
    type: "blink_artifact",
    label: "Blink",
    description: "Sharp frontal spike (Fp1/Fp2)",
    color: "#f59e0b",
    icon: "👁",
    enabled: true,
    sensitivity: 0.5,
    defaultSensitivity: 0.5,
  },
  {
    type: "eye_movement",
    label: "Eye Movement",
    description: "Lateral asymmetry on frontal channels",
    color: "#06b6d4",
    icon: "↔",
    enabled: true,
    sensitivity: 0.5,
    defaultSensitivity: 0.5,
  },
  {
    type: "band_transition",
    label: "Band Transition",
    description: "Dominant frequency band switches (e.g. α→β)",
    color: "#a855f7",
    icon: "⇄",
    enabled: true,
    sensitivity: 0.5,
    defaultSensitivity: 0.5,
  },
  {
    type: "amplitude_anomaly",
    label: "Amplitude Anomaly",
    description: "Signal exceeds ±N µV (artifact or seizure-like)",
    color: "#ef4444",
    icon: "⚡",
    enabled: true,
    sensitivity: 0.5,
    defaultSensitivity: 0.5,
  },
  {
    type: "drowsiness_onset",
    label: "Drowsiness",
    description: "Theta/alpha ratio shift indicating drowsiness",
    color: "#8b5cf6",
    icon: "💤",
    enabled: true,
    sensitivity: 0.5,
    defaultSensitivity: 0.5,
  },
  {
    type: "focus_state",
    label: "Focus",
    description: "Sustained beta dominance indicating concentration",
    color: "#3b82f6",
    icon: "🎯",
    enabled: true,
    sensitivity: 0.5,
    defaultSensitivity: 0.5,
  },
  {
    type: "muscle_artifact",
    label: "Muscle Artifact",
    description: "Broadband high-frequency burst (EMG)",
    color: "#f97316",
    icon: "💪",
    enabled: true,
    sensitivity: 0.5,
    defaultSensitivity: 0.5,
  },
];
