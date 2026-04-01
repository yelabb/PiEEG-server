// ─────────────────────────────────────────────────────────────────────────────
// EventTimeline — Horizontal strip below the channel grid showing detected
// events as colored badges. Supports both live (rolling window) and replay
// (fixed total duration) modes.
// ─────────────────────────────────────────────────────────────────────────────

import { useRef, useEffect, useCallback, memo } from "react";
import type { EEGEvent } from "../types";

interface EventTimelineProps {
  events: EEGEvent[];
  /** Total duration in seconds. For live mode, pass elapsed time. */
  totalDuration: number;
  /** Current playback position in seconds (replay). Null for live. */
  currentTime: number | null;
  /** Whether this is live mode (rolling window). */
  live: boolean;
  /** Called when user clicks an event. */
  onEventClick?: (event: EEGEvent) => void;
  /** Called when user clicks a timestamp (seek in replay). */
  onSeek?: (timeS: number) => void;
}

const LANE_HEIGHT = 20;
const BADGE_RADIUS = 7;
const MIN_VISIBLE_WIDTH = 6;

const EventTimeline = memo(function EventTimeline({
  events,
  totalDuration,
  currentTime,
  live,
  onEventClick,
  onSeek,
}: EventTimelineProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef(0);
  const sizeRef = useRef({ w: 0, h: 0 });
  const hoveredRef = useRef<EEGEvent | null>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  // Assign lanes by detector type (up to 8 types → 4 lane pairs)
  const laneMap = useRef(new Map<string, number>());

  function getLane(detector: string): number {
    if (!laneMap.current.has(detector)) {
      laneMap.current.set(detector, laneMap.current.size);
    }
    return laneMap.current.get(detector)!;
  }

  // ── Resize observer ──────────────────────────────────────────────────
  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      const { width, height } = entry.contentRect;
      sizeRef.current = { w: width, h: height };
    });
    observer.observe(wrap);
    return () => observer.disconnect();
  }, []);

  // ── Drawing ──────────────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false })!;

    const draw = () => {
      const { w, h } = sizeRef.current;
      if (w === 0 || h === 0) {
        rafRef.current = requestAnimationFrame(draw);
        return;
      }

      const dpr = window.devicePixelRatio || 1;
      const pw = Math.round(w * dpr);
      const ph = Math.round(h * dpr);
      if (canvas.width !== pw || canvas.height !== ph) {
        canvas.width = pw;
        canvas.height = ph;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }

      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, w, h);

      // Border top
      ctx.strokeStyle = "rgba(255,255,255,0.06)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, 0.5);
      ctx.lineTo(w, 0.5);
      ctx.stroke();

      const dur = totalDuration || 1;
      const padding = 8;
      const usableW = w - padding * 2;

      // Time axis ticks
      const numTicks = Math.min(20, Math.floor(usableW / 60));
      ctx.fillStyle = "rgba(255,255,255,0.2)";
      ctx.font = "9px var(--mono, monospace)";
      ctx.textAlign = "center";

      for (let i = 0; i <= numTicks; i++) {
        const t = (i / numTicks) * dur;
        const x = padding + (i / numTicks) * usableW;

        ctx.strokeStyle = "rgba(255,255,255,0.04)";
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(x, 12);
        ctx.lineTo(x, h);
        ctx.stroke();

        const min = Math.floor(t / 60);
        const sec = Math.floor(t % 60);
        ctx.fillText(`${min}:${String(sec).padStart(2, "0")}`, x, 10);
      }

      // Draw events
      const laneOffset = 16;
      const maxLanes = Math.max(1, Math.floor((h - laneOffset) / LANE_HEIGHT));

      for (const evt of events) {
        const lane = getLane(evt.detector) % maxLanes;
        const y = laneOffset + lane * LANE_HEIGHT + LANE_HEIGHT / 2;

        const x1 = padding + (evt.startTime / dur) * usableW;
        const x2 = padding + (evt.endTime / dur) * usableW;
        const eventW = Math.max(MIN_VISIBLE_WIDTH, x2 - x1);

        // Background bar for duration events
        if (x2 - x1 > MIN_VISIBLE_WIDTH) {
          ctx.fillStyle = evt.color + "30";
          ctx.beginPath();
          ctx.roundRect(x1, y - BADGE_RADIUS, eventW, BADGE_RADIUS * 2, 3);
          ctx.fill();
        }

        // Badge circle
        ctx.fillStyle = evt.color;
        ctx.beginPath();
        ctx.arc(x1 + eventW / 2, y, BADGE_RADIUS, 0, Math.PI * 2);
        ctx.fill();

        // Icon
        ctx.fillStyle = "#000";
        ctx.font = "9px sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(evt.icon, x1 + eventW / 2, y + 0.5);

        // Score bar (tiny bar below badge)
        const scoreW = eventW * evt.score;
        ctx.fillStyle = evt.color + "80";
        ctx.fillRect(x1 + (eventW - scoreW) / 2, y + BADGE_RADIUS + 1, scoreW, 2);
      }

      // Playhead (replay mode)
      if (currentTime !== null && !live) {
        const px = padding + (currentTime / dur) * usableW;
        ctx.strokeStyle = "#0070f3";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(px, 0);
        ctx.lineTo(px, h);
        ctx.stroke();

        // Playhead triangle
        ctx.fillStyle = "#0070f3";
        ctx.beginPath();
        ctx.moveTo(px - 4, 0);
        ctx.lineTo(px + 4, 0);
        ctx.lineTo(px, 6);
        ctx.closePath();
        ctx.fill();
      }

      // Live edge indicator
      if (live) {
        ctx.fillStyle = "#00c853";
        ctx.beginPath();
        ctx.arc(w - 6, h / 2, 3, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(rafRef.current);
  }, [events, totalDuration, currentTime, live]);

  // ── Mouse interaction ────────────────────────────────────────────────
  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const rect = canvasRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = e.clientX - rect.left;
      const dur = totalDuration || 1;
      const padding = 8;
      const usableW = rect.width - padding * 2;

      // Find hovered event
      let hovered: EEGEvent | null = null;
      for (const evt of events) {
        const x1 = padding + (evt.startTime / dur) * usableW;
        const x2 = padding + (evt.endTime / dur) * usableW;
        const evtW = Math.max(MIN_VISIBLE_WIDTH, x2 - x1);
        if (x >= x1 && x <= x1 + evtW) {
          hovered = evt;
          break;
        }
      }

      hoveredRef.current = hovered;
      const tip = tooltipRef.current;
      if (tip) {
        if (hovered) {
          tip.style.display = "block";
          tip.style.left = `${e.clientX - rect.left}px`;
          tip.style.bottom = `${rect.height + 4}px`;
          tip.innerHTML = `<strong>${hovered.icon} ${hovered.label}</strong><br/><span style="opacity:0.7">${hovered.explanation}</span><br/><span style="font-size:10px;opacity:0.5">${formatTime(hovered.startTime)} · Score ${(hovered.score * 100).toFixed(0)}%</span>`;
        } else {
          tip.style.display = "none";
        }
      }
    },
    [events, totalDuration],
  );

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (hoveredRef.current && onEventClick) {
        onEventClick(hoveredRef.current);
        return;
      }
      // Otherwise seek to clicked time (replay)
      if (onSeek) {
        const rect = canvasRef.current?.getBoundingClientRect();
        if (!rect) return;
        const x = e.clientX - rect.left;
        const padding = 8;
        const usableW = rect.width - padding * 2;
        const t = ((x - padding) / usableW) * (totalDuration || 1);
        if (t >= 0) onSeek(t);
      }
    },
    [onEventClick, onSeek, totalDuration],
  );

  const handleMouseLeave = useCallback(() => {
    hoveredRef.current = null;
    if (tooltipRef.current) tooltipRef.current.style.display = "none";
  }, []);

  return (
    <div className="event-timeline-wrap" ref={wrapRef}>
      <div className="event-timeline-tooltip" ref={tooltipRef} />
      <canvas
        ref={canvasRef}
        className="event-timeline-canvas"
        onMouseMove={handleMouseMove}
        onClick={handleClick}
        onMouseLeave={handleMouseLeave}
      />
    </div>
  );
});

function formatTime(s: number): string {
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${String(sec).padStart(2, "0")}`;
}

export default EventTimeline;
