/**
 * Curated webhook recipe templates for IFTTT, Zapier, and generic webhooks.
 *
 * Each recipe is a pre-configured WebhookRule (minus id/url/key)
 * that users can one-click import into the webhook panel.
 */

import type { TriggerType, ServiceType } from "../types";

export interface WebhookRecipe {
  /** Unique slug */
  id: string;
  /** Human-friendly name */
  name: string;
  /** One-liner shown on the card */
  description: string;
  /** Emoji icon for the card */
  icon: string;
  /** Category for filtering */
  category: "focus" | "relax" | "alert" | "logging" | "smart-home" | "social";
  /** Target service */
  service: ServiceType;
  /** Pre-filled trigger */
  trigger_type: TriggerType;
  /** Pre-filled params (band, channel, threshold, etc.) */
  params: Record<string, unknown>;
  /** Suggested cooldown in seconds */
  cooldown: number;
  /** Suggested IFTTT event name (ifttt only) */
  iftttEvent?: string;
  /** What the user should configure as the "Then That" / action */
  actionHint: string;
}

export const WEBHOOK_RECIPES: WebhookRecipe[] = [
  // ── IFTTT recipes ───────────────────────────────────────────────────────
  {
    id: "ifttt-meditation-notify",
    name: "Meditation Alert",
    description: "Get a phone notification when alpha power rises — you're entering a calm state.",
    icon: "🧘",
    category: "relax",
    service: "ifttt",
    trigger_type: "band_power_above",
    params: { band: "alpha", channel: "avg", threshold: 15 },
    cooldown: 60,
    iftttEvent: "pieeg_alpha_high",
    actionHint: "Then That → Notifications → Send a notification",
  },
  {
    id: "ifttt-focus-streak",
    name: "Focus Streak",
    description: "Log to Google Sheets every time your beta/theta ratio stays high — track deep work.",
    icon: "🎯",
    category: "focus",
    service: "ifttt",
    trigger_type: "band_ratio_above",
    params: { numerator: "beta", denominator: "theta", channel: "avg", threshold: 2.0 },
    cooldown: 120,
    iftttEvent: "pieeg_focus_streak",
    actionHint: "Then That → Google Sheets → Add row to spreadsheet",
  },
  {
    id: "ifttt-blink-light",
    name: "Blink → Smart Light",
    description: "Toggle a smart light when a strong blink is detected via amplitude spike.",
    icon: "💡",
    category: "smart-home",
    service: "ifttt",
    trigger_type: "amplitude_above",
    params: { channel: 0, threshold: 150 },
    cooldown: 5,
    iftttEvent: "pieeg_blink",
    actionHint: "Then That → Philips Hue / LIFX / TP-Link → Toggle light",
  },
  {
    id: "ifttt-drowsy-alarm",
    name: "Drowsiness Alarm",
    description: "Get an alert when theta power spikes — early sign of drowsiness while driving or studying.",
    icon: "😴",
    category: "alert",
    service: "ifttt",
    trigger_type: "band_power_above",
    params: { band: "theta", channel: "avg", threshold: 20 },
    cooldown: 30,
    iftttEvent: "pieeg_drowsy",
    actionHint: "Then That → Notifications → Send a rich notification",
  },
  {
    id: "ifttt-gamma-tweet",
    name: "Gamma Burst → Tweet",
    description: "Auto-post when gamma spikes — capture your 'aha!' moments.",
    icon: "⚡",
    category: "social",
    service: "ifttt",
    trigger_type: "band_power_above",
    params: { band: "gamma", channel: "avg", threshold: 8 },
    cooldown: 300,
    iftttEvent: "pieeg_gamma_burst",
    actionHint: "Then That → Twitter → Post a tweet (uses Value1 for power value)",
  },

  // ── Zapier recipes ──────────────────────────────────────────────────────
  {
    id: "zapier-focus-slack",
    name: "Focus → Slack",
    description: "Post to a Slack channel when you enter a focused state — beta dominates theta.",
    icon: "💬",
    category: "focus",
    service: "zapier",
    trigger_type: "band_ratio_above",
    params: { numerator: "beta", denominator: "theta", channel: "avg", threshold: 2.5 },
    cooldown: 180,
    actionHint: "Action → Slack → Send Channel Message",
  },
  {
    id: "zapier-session-sheets",
    name: "Session Logger",
    description: "Log every significant alpha event to Google Sheets — build a meditation journal.",
    icon: "📊",
    category: "logging",
    service: "zapier",
    trigger_type: "band_power_above",
    params: { band: "alpha", channel: "avg", threshold: 12 },
    cooldown: 30,
    actionHint: "Action → Google Sheets → Create Spreadsheet Row",
  },
  {
    id: "zapier-stress-email",
    name: "Stress Alert Email",
    description: "Email yourself when high-beta surges — a nudge to take a break.",
    icon: "📧",
    category: "alert",
    service: "zapier",
    trigger_type: "band_power_above",
    params: { band: "beta", channel: "avg", threshold: 25 },
    cooldown: 600,
    actionHint: "Action → Gmail / Email by Zapier → Send Email",
  },
  {
    id: "zapier-relax-notion",
    name: "Relax → Notion Log",
    description: "Add a Notion database entry when alpha/beta ratio is high — you've reached calm focus.",
    icon: "📝",
    category: "relax",
    service: "zapier",
    trigger_type: "band_ratio_above",
    params: { numerator: "alpha", denominator: "beta", channel: "avg", threshold: 1.5 },
    cooldown: 120,
    actionHint: "Action → Notion → Create Database Item",
  },

  // ── Generic webhook recipes ─────────────────────────────────────────────
  {
    id: "generic-home-assistant",
    name: "Home Assistant Event",
    description: "Fire a Home Assistant webhook to control any automation — lights, music, thermostat.",
    icon: "🏠",
    category: "smart-home",
    service: "generic",
    trigger_type: "band_power_above",
    params: { band: "alpha", channel: "avg", threshold: 15 },
    cooldown: 10,
    actionHint: "URL: http://homeassistant.local:8123/api/webhook/YOUR_WEBHOOK_ID",
  },
  {
    id: "generic-discord",
    name: "Discord Notification",
    description: "Post to a Discord channel via webhook when gamma bursts — share brain sparks with friends.",
    icon: "🎮",
    category: "social",
    service: "generic",
    trigger_type: "band_power_above",
    params: { band: "gamma", channel: "avg", threshold: 10 },
    cooldown: 60,
    actionHint: "URL: Discord channel → Settings → Integrations → Webhooks → Copy URL",
  },
];

export const RECIPE_CATEGORIES = [
  { id: "all", label: "All", icon: "✦" },
  { id: "focus", label: "Focus", icon: "🎯" },
  { id: "relax", label: "Relax", icon: "🧘" },
  { id: "alert", label: "Alerts", icon: "🔔" },
  { id: "logging", label: "Logging", icon: "📊" },
  { id: "smart-home", label: "Smart Home", icon: "🏠" },
  { id: "social", label: "Social", icon: "💬" },
] as const;
