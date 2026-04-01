/**
 * Client-side webhook trigger evaluator.
 *
 * Uses the existing FftEngine to compute band powers from EEG ring buffers,
 * evaluates webhook rules locally, and sends `webhook_fire` to the server
 * when a trigger condition is met. The server then relays the HTTP request.
 */

import { useEffect, useRef } from "react";
import { FftEngine } from "../lib/fftEngine";
import type { EEGData, WebhookRule } from "../types";

const FFT_SIZE = 256;
const EVAL_INTERVAL_MS = 1000; // evaluate every 1 s

/** Map lowercase band names (from rules) → capitalised (from fftEngine). */
const BAND_MAP: Record<string, string> = {
  delta: "Delta",
  theta: "Theta",
  alpha: "Alpha",
  beta: "Beta",
  gamma: "Gamma",
};

// Shared engine instance — no need to recreate per hook mount.
let fftEngine: FftEngine | null = null;
function getEngine(): FftEngine {
  if (!fftEngine) fftEngine = new FftEngine(FFT_SIZE, 250);
  return fftEngine;
}

/**
 * Evaluate a single rule against current band powers / amplitude.
 * Returns [triggered, measuredValue].
 */
function evaluateRule(
  rule: WebhookRule,
  bandPowers: Record<string, number>,
  amplitude: number,
): [boolean, number] {
  const { trigger_type, params } = rule;
  const threshold = Number(params.threshold ?? 0);

  if (trigger_type === "band_power_above" || trigger_type === "band_power_below") {
    const band = BAND_MAP[String(params.band ?? "alpha")] ?? "Alpha";
    const val = bandPowers[band] ?? 0;
    return trigger_type === "band_power_above"
      ? [val > threshold, val]
      : [val < threshold, val];
  }

  if (trigger_type === "amplitude_above" || trigger_type === "amplitude_below") {
    return trigger_type === "amplitude_above"
      ? [amplitude > threshold, amplitude]
      : [amplitude < threshold, amplitude];
  }

  if (trigger_type === "band_ratio_above" || trigger_type === "band_ratio_below") {
    const numBand = BAND_MAP[String(params.numerator ?? "alpha")] ?? "Alpha";
    const denBand = BAND_MAP[String(params.denominator ?? "theta")] ?? "Theta";
    const num = bandPowers[numBand] ?? 0;
    const den = bandPowers[denBand] ?? 0;
    const ratio = den < 1e-9 ? 0 : num / den;
    return trigger_type === "band_ratio_above"
      ? [ratio > threshold, ratio]
      : [ratio < threshold, ratio];
  }

  return [false, 0];
}

export function useWebhookEvaluator(
  rules: WebhookRule[],
  eegData: EEGData,
  sendCommand: (cmd: Record<string, unknown>) => void,
) {
  const rulesRef = useRef(rules);
  rulesRef.current = rules;

  // Track cooldowns client-side (rule_id → last fire timestamp in ms)
  const cooldownsRef = useRef<Map<string, number>>(new Map());

  useEffect(() => {
    const engine = getEngine();
    const timer = setInterval(() => {
      const currentRules = rulesRef.current;
      if (!currentRules.length) return;

      const { buffers, writeIndex, samplesInBuffer, numChannels } = eegData;
      if (samplesInBuffer.current < FFT_SIZE) return;

      const now = Date.now();
      const cooldowns = cooldownsRef.current;

      for (const rule of currentRules) {
        if (!rule.enabled || !rule.url) continue;

        // Client-side cooldown check
        const lastFired = cooldowns.get(rule.id) ?? 0;
        if (now - lastFired < rule.cooldown * 1000) continue;

        // Determine which channel to evaluate
        const chParam = rule.params.channel;
        const channels: number[] =
          chParam === "avg"
            ? Array.from({ length: numChannels }, (_, i) => i)
            : [Math.min(Number(chParam ?? 0), numChannels - 1)];

        // Compute band powers & amplitude for the needed channel(s)
        let bandPowers: Record<string, number> = {};
        let amplitude = 0;

        if (channels.length === 1) {
          const ch = channels[0];
          const result = engine.analyseRing(
            buffers.current[ch],
            writeIndex.current,
            samplesInBuffer.current,
          );
          if (!result) continue;
          bandPowers = result.bandPowers;
          // Peak amplitude from last FFT_SIZE samples
          const buf = buffers.current[ch];
          const bLen = buf.length;
          const start = (writeIndex.current - FFT_SIZE + bLen) % bLen;
          let maxAmp = 0;
          for (let i = 0; i < FFT_SIZE; i++) {
            const v = Math.abs(buf[(start + i) % bLen]);
            if (v > maxAmp) maxAmp = v;
          }
          amplitude = maxAmp;
        } else {
          // Average across channels
          const accum: Record<string, number> = {};
          let ampSum = 0;
          let count = 0;
          for (const ch of channels) {
            const result = engine.analyseRing(
              buffers.current[ch],
              writeIndex.current,
              samplesInBuffer.current,
            );
            if (!result) continue;
            for (const [k, v] of Object.entries(result.bandPowers)) {
              accum[k] = (accum[k] ?? 0) + v;
            }
            const buf = buffers.current[ch];
            const bLen = buf.length;
            const start = (writeIndex.current - FFT_SIZE + bLen) % bLen;
            let maxAmp = 0;
            for (let i = 0; i < FFT_SIZE; i++) {
              const v = Math.abs(buf[(start + i) % bLen]);
              if (v > maxAmp) maxAmp = v;
            }
            ampSum += maxAmp;
            count++;
          }
          if (!count) continue;
          for (const k of Object.keys(accum)) {
            bandPowers[k] = accum[k] / count;
          }
          amplitude = ampSum / count;
        }

        const [triggered, value] = evaluateRule(rule, bandPowers, amplitude);
        if (triggered) {
          cooldowns.set(rule.id, now);
          sendCommand({
            cmd: "webhook_fire",
            rule_id: rule.id,
            value,
          });
        }
      }
    }, EVAL_INTERVAL_MS);

    return () => clearInterval(timer);
  }, [eegData, sendCommand]);
}
