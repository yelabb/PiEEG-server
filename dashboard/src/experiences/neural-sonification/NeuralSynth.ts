// ─────────────────────────────────────────────────────────────────────────────
// NeuralSynth — Web Audio API synthesis engine driven by EEG band powers.
//
// Mapping:
//   Delta (0.5–4 Hz)  → deep drone (sub oscillator volume + pitch)
//   Theta (4–8 Hz)    → ambient pad texture (FM modulation depth)
//   Alpha (8–13 Hz)   → warm melodic tone (filter cutoff opening)
//   Beta  (13–30 Hz)  → bright rhythmic layer (high-freq oscillator mix)
//   Gamma (30–100 Hz) → sparkle / shimmer (noise burst + delay send)
//
// All parameter changes use exponentialRampToValueAtTime for click-free transitions.
// ─────────────────────────────────────────────────────────────────────────────

import type { BandPowers } from "../../types";

// ── Musical scales (semitone offsets from root) ──────────────────────────

const SCALES: Record<string, number[]> = {
  pentatonic: [0, 2, 4, 7, 9],
  minor: [0, 2, 3, 5, 7, 8, 10],
  major: [0, 2, 4, 5, 7, 9, 11],
  dorian: [0, 2, 3, 5, 7, 9, 10],
  phrygian: [0, 1, 3, 5, 7, 8, 10],
  lydian: [0, 2, 4, 6, 7, 9, 11],
  blues: [0, 3, 5, 6, 7, 10],
  harmonic_minor: [0, 2, 3, 5, 7, 8, 11],
  whole_tone: [0, 2, 4, 6, 8, 10],
};

const ROOT_NOTES: Record<string, number> = {
  C: 261.63, "C#": 277.18, D: 293.66, "D#": 311.13,
  E: 329.63, F: 349.23, "F#": 369.99, G: 392.0,
  "G#": 415.3, A: 440.0, "A#": 466.16, B: 493.88,
};

export interface SynthConfig {
  masterVolume: number; // 0–1
  scale: string;
  rootNote: string;
  reverbMix: number; // 0–1
  delayTime: number; // seconds
  delayFeedback: number; // 0–0.9
  /** Sensitivity multiplier for band power → parameter mapping */
  sensitivity: number; // 0.5–5
}

const DEFAULT_CONFIG: SynthConfig = {
  masterVolume: 0.6,
  scale: "pentatonic",
  rootNote: "C",
  reverbMix: 0.35,
  delayTime: 0.3,
  delayFeedback: 0.3,
  sensitivity: 2,
};

// ── Helpers ──────────────────────────────────────────────────────────────

function midiToFreq(semitones: number, root: number): number {
  return root * 2 ** (semitones / 12);
}

function clamp(v: number, lo: number, hi: number): number {
  return v < lo ? lo : v > hi ? hi : v;
}

function ramp(param: AudioParam, value: number, t: number, dt = 0.08): void {
  param.setTargetAtTime(value, t, dt);
}

// ── NeuralSynth class ────────────────────────────────────────────────────

export class NeuralSynth {
  private ctx: AudioContext | null = null;
  private master: GainNode | null = null;

  // Voices
  private droneOsc: OscillatorNode | null = null;
  private droneGain: GainNode | null = null;
  private padOsc: OscillatorNode | null = null;
  private padModOsc: OscillatorNode | null = null;
  private padModGain: GainNode | null = null;
  private padGain: GainNode | null = null;
  private melodicOsc: OscillatorNode | null = null;
  private melodicGain: GainNode | null = null;
  private melodicFilter: BiquadFilterNode | null = null;
  private brightOsc: OscillatorNode | null = null;
  private brightGain: GainNode | null = null;
  private shimmerOsc: OscillatorNode | null = null;
  private shimmerGain: GainNode | null = null;

  // Effects
  private delay: DelayNode | null = null;
  private delayFeedback: GainNode | null = null;
  private delaySend: GainNode | null = null;
  private convolver: ConvolverNode | null = null;
  private reverbSend: GainNode | null = null;
  private dryGain: GainNode | null = null;
  private wetGain: GainNode | null = null;

  config: SynthConfig = { ...DEFAULT_CONFIG };
  private _playing = false;

  get playing(): boolean {
    return this._playing;
  }

  // ── Lifecycle ──────────────────────────────────────────────────────

  async start(): Promise<void> {
    if (this._playing) return;
    const ctx = new AudioContext();
    if (ctx.state === "suspended") await ctx.resume();
    this.ctx = ctx;
    const t = ctx.currentTime;

    // ── Master output ────────────────────────────────────────────────
    this.master = ctx.createGain();
    this.master.gain.value = this.config.masterVolume;

    // ── Reverb (impulse response) ────────────────────────────────────
    this.convolver = ctx.createConvolver();
    this.convolver.buffer = this._createImpulse(ctx, 2.5, 2);
    this.reverbSend = ctx.createGain();
    this.reverbSend.gain.value = 1;
    this.wetGain = ctx.createGain();
    this.wetGain.gain.value = this.config.reverbMix;
    this.dryGain = ctx.createGain();
    this.dryGain.gain.value = 1 - this.config.reverbMix;

    // dry path: master → dryGain → destination
    // wet path: master → reverbSend → convolver → wetGain → destination
    this.master.connect(this.dryGain);
    this.dryGain.connect(ctx.destination);
    this.master.connect(this.reverbSend);
    this.reverbSend.connect(this.convolver);
    this.convolver.connect(this.wetGain);
    this.wetGain.connect(ctx.destination);

    // ── Delay ────────────────────────────────────────────────────────
    this.delay = ctx.createDelay(2);
    this.delay.delayTime.value = this.config.delayTime;
    this.delayFeedback = ctx.createGain();
    this.delayFeedback.gain.value = this.config.delayFeedback;
    this.delaySend = ctx.createGain();
    this.delaySend.gain.value = 0;
    // send → delay → feedback loop, delay → master
    this.delaySend.connect(this.delay);
    this.delay.connect(this.delayFeedback);
    this.delayFeedback.connect(this.delay);
    this.delay.connect(this.master);

    const root = ROOT_NOTES[this.config.rootNote] ?? 261.63;

    // ── 1. Drone (Delta) — sub sine ─────────────────────────────────
    this.droneOsc = ctx.createOscillator();
    this.droneOsc.type = "sine";
    this.droneOsc.frequency.value = root / 2; // one octave below root
    this.droneGain = ctx.createGain();
    this.droneGain.gain.value = 0;
    this.droneOsc.connect(this.droneGain);
    this.droneGain.connect(this.master);
    this.droneOsc.start(t);

    // ── 2. Pad (Theta) — FM synthesis ───────────────────────────────
    this.padOsc = ctx.createOscillator();
    this.padOsc.type = "sine";
    this.padOsc.frequency.value = root;
    this.padModOsc = ctx.createOscillator();
    this.padModOsc.type = "sine";
    this.padModOsc.frequency.value = root * 2; // modulator at 2x carrier
    this.padModGain = ctx.createGain();
    this.padModGain.gain.value = 0; // mod depth driven by theta
    this.padGain = ctx.createGain();
    this.padGain.gain.value = 0;
    this.padModOsc.connect(this.padModGain);
    this.padModGain.connect(this.padOsc.frequency);
    this.padOsc.connect(this.padGain);
    this.padGain.connect(this.master);
    this.padModOsc.start(t);
    this.padOsc.start(t);

    // ── 3. Melodic (Alpha) — filtered sawtooth ──────────────────────
    this.melodicOsc = ctx.createOscillator();
    this.melodicOsc.type = "sawtooth";
    this.melodicOsc.frequency.value = root;
    this.melodicFilter = ctx.createBiquadFilter();
    this.melodicFilter.type = "lowpass";
    this.melodicFilter.frequency.value = 400;
    this.melodicFilter.Q.value = 2;
    this.melodicGain = ctx.createGain();
    this.melodicGain.gain.value = 0;
    this.melodicOsc.connect(this.melodicFilter);
    this.melodicFilter.connect(this.melodicGain);
    this.melodicGain.connect(this.master);
    this.melodicOsc.start(t);

    // ── 4. Bright (Beta) — square wave, higher octave ───────────────
    this.brightOsc = ctx.createOscillator();
    this.brightOsc.type = "square";
    this.brightOsc.frequency.value = root * 2;
    this.brightGain = ctx.createGain();
    this.brightGain.gain.value = 0;
    this.brightOsc.connect(this.brightGain);
    this.brightGain.connect(this.master);
    this.brightGain.connect(this.delaySend!);
    this.brightOsc.start(t);

    // ── 5. Shimmer (Gamma) — high triangle + delay send ─────────────
    this.shimmerOsc = ctx.createOscillator();
    this.shimmerOsc.type = "triangle";
    this.shimmerOsc.frequency.value = root * 4;
    this.shimmerGain = ctx.createGain();
    this.shimmerGain.gain.value = 0;
    this.shimmerOsc.connect(this.shimmerGain);
    this.shimmerGain.connect(this.master);
    this.shimmerGain.connect(this.delaySend!);
    this.shimmerOsc.start(t);

    this._playing = true;
  }

  stop(): void {
    if (!this._playing || !this.ctx) return;
    this._playing = false;
    this.ctx.close();
    this.ctx = null;
  }

  // ── Update from band powers ────────────────────────────────────────

  update(bp: BandPowers): void {
    if (!this._playing || !this.ctx) return;
    const t = this.ctx.currentTime;
    const s = this.config.sensitivity;
    const root = ROOT_NOTES[this.config.rootNote] ?? 261.63;
    const scale = SCALES[this.config.scale] ?? SCALES.pentatonic;

    // Normalise band powers (typical EEG µV²/Hz values vary widely;
    // we use log-scale compression so the mapping feels musical)
    const delta = clamp(Math.log1p((bp.Delta ?? 0) * s) / 6, 0, 1);
    const theta = clamp(Math.log1p((bp.Theta ?? 0) * s) / 6, 0, 1);
    const alpha = clamp(Math.log1p((bp.Alpha ?? 0) * s) / 6, 0, 1);
    const beta = clamp(Math.log1p((bp.Beta ?? 0) * s) / 6, 0, 1);
    const gamma = clamp(Math.log1p((bp.Gamma ?? 0) * s) / 6, 0, 1);

    // ── Delta → drone volume + pitch bend ────────────────────────────
    ramp(this.droneGain!.gain, delta * 0.25, t);
    ramp(this.droneOsc!.frequency, (root / 2) * (1 + delta * 0.1), t);

    // ── Theta → pad volume + FM mod depth ────────────────────────────
    ramp(this.padGain!.gain, theta * 0.2, t);
    ramp(this.padModGain!.gain, theta * root * 0.5, t);

    // ── Alpha → melodic volume + filter opens + scale note ───────────
    ramp(this.melodicGain!.gain, alpha * 0.18, t);
    ramp(this.melodicFilter!.frequency, 400 + alpha * 3600, t);
    // Pick a scale degree based on alpha intensity
    const noteIdx = Math.floor(alpha * scale.length) % scale.length;
    const octave = alpha > 0.6 ? 1 : 0;
    const freq = midiToFreq(scale[noteIdx] + octave * 12, root);
    ramp(this.melodicOsc!.frequency, freq, t, 0.15);
    // Also shift pad to a harmonic note
    const padNote = scale[(noteIdx + 2) % scale.length];
    ramp(this.padOsc!.frequency, midiToFreq(padNote, root), t, 0.15);

    // ── Beta → bright layer volume + octave ──────────────────────────
    ramp(this.brightGain!.gain, beta * 0.12, t);
    const brightNote = scale[(noteIdx + 4) % scale.length];
    ramp(this.brightOsc!.frequency, midiToFreq(brightNote + 12, root), t, 0.12);

    // ── Gamma → shimmer volume + delay send ──────────────────────────
    ramp(this.shimmerGain!.gain, gamma * 0.08, t);
    ramp(this.delaySend!.gain, gamma * 0.5, t);
    const shimNote = scale[(noteIdx + 3) % scale.length];
    ramp(this.shimmerOsc!.frequency, midiToFreq(shimNote + 24, root), t, 0.1);
  }

  // ── Config live-update ─────────────────────────────────────────────

  applyConfig(cfg: Partial<SynthConfig>): void {
    Object.assign(this.config, cfg);
    if (!this._playing || !this.ctx) return;
    const t = this.ctx.currentTime;

    if (cfg.masterVolume !== undefined) {
      ramp(this.master!.gain, cfg.masterVolume, t);
    }
    if (cfg.reverbMix !== undefined) {
      ramp(this.wetGain!.gain, cfg.reverbMix, t);
      ramp(this.dryGain!.gain, 1 - cfg.reverbMix, t);
    }
    if (cfg.delayTime !== undefined) {
      this.delay!.delayTime.setTargetAtTime(cfg.delayTime, t, 0.1);
    }
    if (cfg.delayFeedback !== undefined) {
      ramp(this.delayFeedback!.gain, cfg.delayFeedback, t);
    }
  }

  // ── Generate simple reverb impulse response ────────────────────────

  private _createImpulse(
    ctx: AudioContext,
    duration: number,
    channels: number,
  ): AudioBuffer {
    const length = Math.floor(ctx.sampleRate * duration);
    const buf = ctx.createBuffer(channels, length, ctx.sampleRate);
    for (let ch = 0; ch < channels; ch++) {
      const data = buf.getChannelData(ch);
      for (let i = 0; i < length; i++) {
        data[i] = (Math.random() * 2 - 1) * (1 - i / length) ** 2;
      }
    }
    return buf;
  }
}
