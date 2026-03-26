import { useEffect, useRef, useState, useCallback } from "react";

const NUM_CHANNELS = 16;
const SAMPLE_RATE = 250;
const UI_UPDATE_MS = 500; // Throttle React state updates

/**
 * Hook that connects to the PiEEG-16 WebSocket and maintains
 * per-channel ring buffers for the last `timeWindowSec` seconds.
 * Canvas reads refs directly — React only re-renders for UI stats.
 */
export function useEEG(timeWindowSec = 4) {
  const [connected, setConnected] = useState(false);
  const [sampleCount, setSampleCount] = useState(0);
  const [hz, setHz] = useState(0);
  const wsRef = useRef(null);
  const buffersRef = useRef(null);
  const writeIndexRef = useRef(0);
  const samplesInBufRef = useRef(0);
  const tsRef = useRef([]);
  const pausedRef = useRef(false);
  const sampleCountRef = useRef(0);
  const lastUIUpdate = useRef(0);

  const bufferSize = SAMPLE_RATE * timeWindowSec;

  // Allocate ring buffers
  if (!buffersRef.current || buffersRef.current[0].length !== bufferSize) {
    buffersRef.current = Array.from(
      { length: NUM_CHANNELS },
      () => new Float32Array(bufferSize)
    );
    writeIndexRef.current = 0;
    samplesInBufRef.current = 0;
  }

  const setPaused = useCallback((v) => {
    pausedRef.current = v;
  }, []);

  const sendCommand = useCallback((cmd) => {
    const ws = wsRef.current;
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify(cmd));
    }
  }, []);

  useEffect(() => {
    const wsHost = location.hostname || "localhost";
    const wsPort = import.meta.env.DEV ? 1616 : parseInt(location.port || "1617") - 1;
    const url = `ws://${wsHost}:${wsPort}`;

    function connect() {
      const ws = new WebSocket(url);
      wsRef.current = ws;

      ws.onopen = () => setConnected(true);
      ws.onclose = () => {
        setConnected(false);
        setTimeout(connect, 2000);
      };
      ws.onerror = () => ws.close();

      ws.onmessage = (event) => {
        const msg = JSON.parse(event.data);
        if (msg.status) return;
        if (pausedRef.current) return;

        const channels = msg.channels;
        if (!channels || channels.length !== NUM_CHANNELS) return;

        // Write into ring buffers (no React state — refs only)
        const bufs = buffersRef.current;
        const wi = writeIndexRef.current;
        for (let ch = 0; ch < NUM_CHANNELS; ch++) {
          bufs[ch][wi] = channels[ch];
        }
        writeIndexRef.current = (wi + 1) % bufferSize;
        if (samplesInBufRef.current < bufferSize) samplesInBufRef.current++;

        sampleCountRef.current++;

        // Compute Hz via timestamp window
        const now = msg.t;
        const ts = tsRef.current;
        ts.push(now);
        const cutoff = now - 2;
        while (ts.length > 0 && ts[0] < cutoff) ts.shift();

        // Throttled React state update for header stats
        const wallNow = performance.now();
        if (wallNow - lastUIUpdate.current > UI_UPDATE_MS) {
          lastUIUpdate.current = wallNow;
          setSampleCount(sampleCountRef.current);
          if (ts.length > 1) {
            const elapsed = ts[ts.length - 1] - ts[0];
            if (elapsed > 0) setHz(Math.round((ts.length - 1) / elapsed));
          }
        }
      };
    }

    connect();
    return () => {
      const ws = wsRef.current;
      if (ws) ws.close();
    };
  }, [bufferSize]);

  return {
    connected,
    sampleCount,
    hz,
    buffers: buffersRef,
    writeIndex: writeIndexRef,
    samplesInBuffer: samplesInBufRef,
    bufferSize,
    setPaused,
    sendCommand,
  };
}
