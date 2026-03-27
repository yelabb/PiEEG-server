import { useEffect, useRef } from "react";

const FFT_SIZE = 256;
const SAMPLE_RATE = 250;

/**
 * Hook for offloading FFT computation to a WebWorker.
 * Keeps intensive FFT calculation off the main thread.
 * Falls back to main-thread computation if workers unavailable.
 */
export function useFFTWorker(fallbackFFTEngine) {
  const workerRef = useRef(null);
  const pendingRef = useRef(new Map());
  const requestIdRef = useRef(0);
  const readyRef = useRef(false);

  useEffect(() => {
    // Check if WebWorkers are available
    if (typeof Worker === "undefined") {
      return; // Fallback to main thread
    }

    try {
      const worker = new Worker(
        new URL("../workers/fftWorker.js", import.meta.url),
        { type: "module" }
      );

      worker.onmessage = (event) => {
        const { type, result, id } = event.data;
        if (type === "ready") {
          readyRef.current = true;
        } else if (type === "analyseResult" && pendingRef.current.has(id)) {
          const callback = pendingRef.current.get(id);
          callback(result);
          pendingRef.current.delete(id);
        }
      };

      worker.onerror = (err) => {
        console.warn("FFT Worker error, falling back to main thread:", err);
        readyRef.current = false;
      };

      workerRef.current = worker;
    } catch (e) {
      console.warn("Could not create FFT worker:", e);
    }

    return () => {
      if (workerRef.current) {
        workerRef.current.terminate();
      }
    };
  }, []);

  const analyseAsync = (samples, callback) => {
    if (!readyRef.current || !workerRef.current) {
      // Fallback to main thread
      const result = fallbackFFTEngine.analyse(samples, 0);
      callback(result);
      return;
    }

    const id = ++requestIdRef.current;
    pendingRef.current.set(id, callback);
    workerRef.current.postMessage({
      type: "analyse",
      data: { samples, id },
    });
  };

  const analyseRingAsync = (ringBuf, writeIndex, samplesInBuf, callback) => {
    if (!readyRef.current || !workerRef.current) {
      // Fallback to main thread
      const result = fallbackFFTEngine.analyseRing(ringBuf, writeIndex, samplesInBuf);
      callback(result);
      return;
    }

    const id = ++requestIdRef.current;
    pendingRef.current.set(id, callback);
    workerRef.current.postMessage({
      type: "analyseRing",
      data: { ringBuf, writeIndex, samplesInBuf, id },
    });
  };

  return {
    analyseAsync,
    analyseRingAsync,
    isReady: readyRef.current,
  };
}
