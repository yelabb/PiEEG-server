import { useRef, useEffect, useState, memo, type RefObject } from "react";
import type { VideoContextData } from "../hooks/useVideoContext";

// ── HUD overlay — reads refs directly, updates DOM without re-renders ────

function WebcamHUD({ data }: { data: VideoContextData }) {
  const hudRef = useRef<HTMLDivElement>(null);
  const blinkFlashRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const iv = setInterval(() => {
      const el = hudRef.current;
      const flash = blinkFlashRef.current;
      if (!el || !data.ready) return;

      const now = Date.now();
      const snaps = data.snapshots;
      const latest = snaps.length > 0 ? snaps[snaps.length - 1] : null;

      // --- Blink flash (visible for 300ms after blink) ---
      const recentBlink =
        data.blinks.length > 0 &&
        now - data.blinks[data.blinks.length - 1].t < 300;
      if (flash) {
        flash.style.opacity = recentBlink ? "1" : "0";
      }

      if (!latest) {
        el.textContent = "Waiting for face…";
        return;
      }

      // --- Compute labels ---
      const avgEar = (latest.earLeft + latest.earRight) / 2;
      const eyeLabel = avgEar < 0.21 ? "👁 CLOSED" : "👁 open";

      // Head movement — average last 10 snapshots
      const tail = snaps.slice(-10);
      const avgMove =
        tail.reduce((s, v) => s + v.headDelta, 0) / tail.length;
      const moveLabel =
        avgMove > 0.02
          ? "🔴 HIGH"
          : avgMove > 0.008
            ? "🟡 MED"
            : "🟢 LOW";

      const jawLabel = latest.jawOpen > 0.04 ? "👄 OPEN" : "👄 —";

      // Blink count last 10s
      const blinkCount = data.blinks.filter(
        (b) => now - b.t < 10_000
      ).length;

      el.innerHTML =
        `<span class="hud-row">${eyeLabel}</span>` +
        `<span class="hud-row">⚡ blinks: ${blinkCount}</span>` +
        `<span class="hud-row">🗣 head: ${moveLabel}</span>` +
        `<span class="hud-row">${jawLabel}</span>`;
    }, 100);

    return () => clearInterval(iv);
  }, [data]);

  return (
    <>
      <div ref={blinkFlashRef} className="webcam-blink-flash" />
      <div ref={hudRef} className="webcam-hud">Initialising…</div>
    </>
  );
}

// ── WebcamFeed ───────────────────────────────────────────────────────────

interface WebcamFeedProps {
  active: boolean;
  videoRef: RefObject<HTMLVideoElement | null>;
  videoData: VideoContextData;
}

const WebcamFeed = memo(function WebcamFeed({ active, videoRef, videoData }: WebcamFeedProps) {
  const streamRef = useRef<MediaStream | null>(null);
  const [minimized, setMinimized] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    if (!active) {
      stopStream();
      return;
    }
    let cancelled = false;

    (async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { width: 320, height: 240, facingMode: "user" },
          audio: false,
        });
        if (cancelled) {
          stream.getTracks().forEach((t) => t.stop());
          return;
        }
        streamRef.current = stream;
        if (videoRef.current) videoRef.current.srcObject = stream;
        setError(null);
      } catch (err: any) {
        if (!cancelled) {
          setError(
            err.name === "NotAllowedError"
              ? "Camera access denied"
              : err.name === "NotFoundError"
                ? "No camera found"
                : "Camera unavailable"
          );
        }
      }
    })();

    return () => {
      cancelled = true;
      stopStream();
    };
  }, [active]);

  function stopStream() {
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
    if (videoRef.current) videoRef.current.srcObject = null;
  }

  if (!active) return null;

  return (
    <div className={`webcam-feed${minimized ? " minimized" : ""}`}>
      <div className="webcam-toolbar">
        <button
          className="webcam-info-btn"
          onClick={() => setShowInfo((v) => !v)}
          title="What is this?"
        >
          ?
        </button>
        <button
          className="webcam-toggle"
          onClick={() => setMinimized((v) => !v)}
          title={minimized ? "Show webcam" : "Hide webcam"}
        >
          {minimized ? "📷" : "▾"}
        </button>
      </div>
      {showInfo && (
        <div className="webcam-info-tooltip">
          <p>
            The optional webcam tracks <strong>blinks</strong>,{" "}
            <strong>eye openness</strong>, <strong>jaw</strong> &amp;{" "}
            <strong>head movement</strong> via MediaPipe.
          </p>
          <p>
            All processing runs locally in your browser. Video frames never
            leave your device.
          </p>
        </div>
      )}
      {!minimized &&
        (error ? (
          <div className="webcam-error">📷 {error}</div>
        ) : (
          <>
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="webcam-video"
            />
            <WebcamHUD data={videoData} />
          </>
        ))}
    </div>
  );
});

export default WebcamFeed;
