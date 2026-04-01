import { useState } from "react";
import {
  TRIGGER_TYPES,
  BANDS,
  type TriggerType,
  type WebhookRule,
  type WebhookEvent,
} from "../types";
import type { UseWebhooksReturn } from "../hooks/useWebhooks";

// ── trigger labels / descriptions ─────────────────────────────────────────

const TRIGGER_LABELS: Record<TriggerType, string> = {
  band_power_above: "Band power above",
  band_power_below: "Band power below",
  amplitude_above: "Amplitude above",
  amplitude_below: "Amplitude below",
  band_ratio_above: "Band ratio above",
  band_ratio_below: "Band ratio below",
};

// ── inline help tooltip ───────────────────────────────────────────────────

function Hint({ text }: { text: string }) {
  return <span className="wh-hint" title={text}>?</span>;
}

const NEEDS_BAND = new Set<TriggerType>([
  "band_power_above", "band_power_below",
]);
const NEEDS_RATIO = new Set<TriggerType>([
  "band_ratio_above", "band_ratio_below",
]);
const NEEDS_CHANNEL = new Set<TriggerType>([
  "band_power_above", "band_power_below",
  "amplitude_above", "amplitude_below",
  "band_ratio_above", "band_ratio_below",
]);

interface Props {
  open: boolean;
  onClose: () => void;
  numChannels: number;
  webhooks: UseWebhooksReturn;
  webhooksEnabled: boolean;
  onToggleEnabled: () => void;
}

export default function WebhookPanel({
  open, onClose, numChannels, webhooks, webhooksEnabled, onToggleEnabled,
}: Props) {
  const { rules, events, saveRule, deleteRule, testRule, toggleRule } = webhooks;
  const [editing, setEditing] = useState<WebhookRule | null>(null);
  const [tab, setTab] = useState<"rules" | "log">("rules");

  if (!open) return null;

  function handleSave(rule: Partial<WebhookRule> & { id?: string }) {
    saveRule(rule);
    setEditing(null);
  }

  return (
    <div className="webhook-panel side-panel">
      <div className="panel-header">
        <h2>Webhooks</h2>
        <button className="btn-close" onClick={onClose}>×</button>
      </div>

      <p className="wh-intro">
        Send HTTP requests when EEG conditions are met.
        Define rules based on band power, amplitude, or band ratios.
        Evaluation runs in the browser — close this panel and it keeps working.
      </p>

      <div className="wh-enable-row">
        <label className="wh-toggle-main">
          <input type="checkbox" checked={webhooksEnabled} onChange={onToggleEnabled} />
          <span>{webhooksEnabled ? "Evaluation active" : "Evaluation paused"}</span>
          <Hint text="When enabled, rules are evaluated once per second against live EEG data. Disable to pause all triggers without deleting rules." />
        </label>
      </div>

      <div className="webhook-tabs">
        <button className={`wh-tab${tab === "rules" ? " active" : ""}`} onClick={() => setTab("rules")}>
          Rules ({rules.length}) <Hint text="Trigger rules that fire webhooks when EEG conditions are met" />
        </button>
        <button className={`wh-tab${tab === "log" ? " active" : ""}`} onClick={() => setTab("log")}>
          Log ({events.length}) <Hint text="History of recently fired webhook events" />
        </button>
      </div>

      {tab === "rules" && (
        <div className="webhook-rules">
          {editing ? (
            <RuleEditor
              rule={editing}
              numChannels={numChannels}
              onSave={handleSave}
              onCancel={() => setEditing(null)}
            />
          ) : (
            <>
              <button className="btn btn-add" onClick={() => setEditing(newRule())}>
                + Add Rule <Hint text="Create a new webhook rule to trigger HTTP requests on EEG events" />
              </button>
              {rules.length === 0 && (
                <p className="wh-empty">No webhook rules configured. Add one to get started.</p>
              )}
              {rules.map((r) => (
                <div key={r.id} className={`wh-rule-card${r.enabled ? "" : " disabled"}`}>
                  <div className="wh-rule-header">
                    <label className="wh-toggle">
                      <input
                        type="checkbox"
                        checked={r.enabled}
                        onChange={() => toggleRule(r)}
                      />
                      <span className="wh-rule-name">{r.name || "Untitled"}</span>
                    </label>
                    <div className="wh-rule-actions">
                      <button className="btn-sm" onClick={() => setEditing(r)} title="Edit">✎</button>
                      <button className="btn-sm" onClick={() => testRule(r.id)} title="Test">▶</button>
                      <button className="btn-sm btn-danger" onClick={() => deleteRule(r.id)} title="Delete">✕</button>
                    </div>
                  </div>
                  <div className="wh-rule-detail">
                    <span className="wh-trigger">{TRIGGER_LABELS[r.trigger_type]}</span>
                    {r.params.band ? <span className="wh-badge">{String(r.params.band)}</span> : null}
                    {r.params.threshold !== undefined && (
                      <span className="wh-badge">≥ {String(r.params.threshold)}</span>
                    )}
                    <span className="wh-badge">⏱ {r.cooldown}s</span>
                    {r.fire_count > 0 && (
                      <span className="wh-badge wh-fired">🔔 {r.fire_count}×</span>
                    )}
                  </div>
                  <div className="wh-url">{r.url || "No URL"}</div>
                </div>
              ))}
            </>
          )}
        </div>
      )}

      {tab === "log" && (
        <div className="webhook-log">
          {events.length === 0 && <p className="wh-empty">No webhook events yet.</p>}
          {events.map((ev, i) => (
            <div key={`${ev.ts}-${i}`} className="wh-log-entry">
              <span className="wh-log-time">
                {new Date(ev.ts * 1000).toLocaleTimeString()}
              </span>
              <span className="wh-log-name">{ev.rule_name}</span>
              <span className="wh-log-type">{ev.trigger_type}</span>
              <span className="wh-log-value">
                {ev.value.toFixed(2)} (≥{ev.threshold})
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Default new rule ──────────────────────────────────────────────────────

function newRule(): WebhookRule {
  return {
    id: "",
    name: "",
    enabled: true,
    trigger_type: "band_power_above",
    params: { band: "alpha", channel: 0, threshold: 10 },
    url: "",
    method: "POST",
    headers: {},
    body_template: "",
    cooldown: 10,
    last_fired: 0,
    fire_count: 0,
  };
}

// ── Rule editor form ──────────────────────────────────────────────────────

function RuleEditor({
  rule,
  numChannels,
  onSave,
  onCancel,
}: {
  rule: WebhookRule;
  numChannels: number;
  onSave: (r: Partial<WebhookRule> & { id?: string }) => void;
  onCancel: () => void;
}) {
  const [name, setName] = useState(rule.name);
  const [triggerType, setTriggerType] = useState<TriggerType>(rule.trigger_type);
  const [band, setBand] = useState(String(rule.params.band || "alpha"));
  const [numerator, setNumerator] = useState(String(rule.params.numerator || "alpha"));
  const [denominator, setDenominator] = useState(String(rule.params.denominator || "theta"));
  const [channel, setChannel] = useState(String(rule.params.channel ?? 0));
  const [threshold, setThreshold] = useState(String(rule.params.threshold ?? 10));
  const [url, setUrl] = useState(rule.url);
  const [method, setMethod] = useState(rule.method || "POST");
  const [authHeader, setAuthHeader] = useState(rule.headers?.Authorization || "");
  const [cooldown, setCooldown] = useState(String(rule.cooldown));

  function handleSave() {
    const params: Record<string, unknown> = { threshold: parseFloat(threshold) || 0 };
    if (NEEDS_BAND.has(triggerType)) params.band = band;
    if (NEEDS_RATIO.has(triggerType)) {
      params.numerator = numerator;
      params.denominator = denominator;
    }
    if (NEEDS_CHANNEL.has(triggerType)) {
      params.channel = channel === "avg" ? "avg" : parseInt(channel) || 0;
    }

    const headers: Record<string, string> = {};
    if (authHeader.trim()) headers.Authorization = authHeader.trim();

    onSave({
      ...(rule.id ? { id: rule.id } : {}),
      name: name || `${TRIGGER_LABELS[triggerType]}`,
      trigger_type: triggerType,
      params,
      url,
      method,
      headers,
      cooldown: parseFloat(cooldown) || 10,
    });
  }

  return (
    <div className="wh-editor">
      <h3>{rule.id ? "Edit Rule" : "New Rule"}</h3>

      <label>Name <Hint text="A friendly name to identify this rule in the list and logs" /></label>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="My webhook" />

      <label>Trigger <Hint text="The EEG condition to watch for. Evaluated once per second using live FFT data" /></label>
      <select value={triggerType} onChange={(e) => setTriggerType(e.target.value as TriggerType)}>
        {TRIGGER_TYPES.map((t) => (
          <option key={t} value={t}>{TRIGGER_LABELS[t]}</option>
        ))}
      </select>

      {NEEDS_BAND.has(triggerType) && (
        <>
          <label>Band <Hint text="EEG frequency band: delta (0.5-4 Hz), theta (4-8), alpha (8-13), beta (13-30), gamma (30-100)" /></label>
          <select value={band} onChange={(e) => setBand(e.target.value)}>
            {BANDS.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
        </>
      )}

      {NEEDS_RATIO.has(triggerType) && (
        <>
          <label>Numerator band <Hint text="Top band in the ratio (e.g. alpha in alpha/theta)" /></label>
          <select value={numerator} onChange={(e) => setNumerator(e.target.value)}>
            {BANDS.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
          <label>Denominator band <Hint text="Bottom band in the ratio (e.g. theta in alpha/theta)" /></label>
          <select value={denominator} onChange={(e) => setDenominator(e.target.value)}>
            {BANDS.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
        </>
      )}

      {NEEDS_CHANNEL.has(triggerType) && (
        <>
          <label>Channel <Hint text="Which EEG channel to monitor, or 'Average' to average all channels" /></label>
          <select value={channel} onChange={(e) => setChannel(e.target.value)}>
            <option value="avg">Average (all)</option>
            {Array.from({ length: numChannels }, (_, i) => (
              <option key={i} value={i}>Ch {i + 1}</option>
            ))}
          </select>
        </>
      )}

      <label>Threshold <Hint text="Value that triggers the webhook. Units depend on trigger type (µV² for band power, µV for amplitude, ratio for band ratio)" /></label>
      <input
        type="number"
        value={threshold}
        step="0.1"
        onChange={(e) => setThreshold(e.target.value)}
      />

      <label>Webhook URL <Hint text="The HTTP endpoint that will receive the webhook request when triggered" /></label>
      <input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="https://example.com/webhook"
      />

      <label>Method <Hint text="HTTP method to use for the webhook request" /></label>
      <select value={method} onChange={(e) => setMethod(e.target.value)}>
        <option value="POST">POST</option>
        <option value="PUT">PUT</option>
        <option value="PATCH">PATCH</option>
        <option value="GET">GET</option>
      </select>

      <label>Authorization header <Hint text="Optional auth token sent with the request, e.g. 'Bearer abc123'" /></label>
      <input
        value={authHeader}
        onChange={(e) => setAuthHeader(e.target.value)}
        placeholder="Bearer your-token-here"
      />

      <label>Cooldown (seconds) <Hint text="Minimum time between two consecutive fires of this rule, to avoid spamming" /></label>
      <input
        type="number"
        value={cooldown}
        min="1"
        step="1"
        onChange={(e) => setCooldown(e.target.value)}
      />

      <div className="wh-editor-actions">
        <button className="btn" onClick={handleSave}>Save</button>
        <button className="btn btn-muted" onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
}
