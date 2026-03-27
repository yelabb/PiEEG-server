// Import FFT engine into worker
import { FftEngine } from "../lib/fftEngine.js";

const FFT_SIZE = 256;
const SAMPLE_RATE = 250;

let fftEngine = null;

// Initialize worker
self.onmessage = (event) => {
  const { type, data } = event.data;

  if (type === "init") {
    fftEngine = new FftEngine(FFT_SIZE, SAMPLE_RATE);
    self.postMessage({ type: "ready" });
    return;
  }

  if (type === "analyse" && fftEngine) {
    const { samples, id } = data;
    const result = fftEngine.analyse(samples, 0);
    self.postMessage({
      type: "analyseResult",
      id,
      result,
    });
  }

  if (type === "analyseRing" && fftEngine) {
    const { ringBuf, writeIndex, samplesInBuf, id } = data;
    const result = fftEngine.analyseRing(ringBuf, writeIndex, samplesInBuf);
    self.postMessage({
      type: "analyseResult",
      id,
      result,
    });
  }
};

self.postMessage({ type: "ready" });
