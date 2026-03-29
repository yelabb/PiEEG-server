import { useState, useRef, useEffect, useCallback, memo } from "react";
import type { EEGData } from "../types";
import { useChat } from "../hooks/useChat";
import type { ChatConfig } from "../hooks/useChat";

// ── ChatPanel ────────────────────────────────────────────────────────────

interface ChatPanelProps {
  eegData: EEGData;
  open: boolean;
  onClose: () => void;
}

const ChatPanel = memo(function ChatPanel({ eegData, open, onClose }: ChatPanelProps) {
  const { messages, streaming, error, config, setConfig, send, clear } = useChat(eegData);
  const [input, setInput] = useState("");
  const [showSettings, setShowSettings] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when panel opens
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 150);
  }, [open]);

  const handleSend = useCallback(() => {
    if (!input.trim()) return;
    send(input);
    setInput("");
  }, [input, send]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    },
    [handleSend]
  );

  return (
    <div className={`chat-panel${open ? " open" : ""}`}>
      {/* Header */}
      <div className="chat-header">
        <span className="chat-title">
          🧠 EEG Assistant
          {!config.apiKey && <span className="chat-eco-badge">ECO</span>}
        </span>
        <div className="chat-header-actions">
          <button
            className="chat-icon-btn"
            onClick={() => setShowSettings((v) => !v)}
            title="Settings"
          >
            ⚙
          </button>
          <button className="chat-icon-btn" onClick={clear} title="Clear chat">
            🗑
          </button>
          <button className="chat-icon-btn" onClick={onClose} title="Close">
            ✕
          </button>
        </div>
      </div>

      {/* Settings drawer */}
      {showSettings && (
        <SettingsForm
          config={config}
          onChange={setConfig}
          onClose={() => setShowSettings(false)}
        />
      )}

      {/* Messages */}
      <div className="chat-messages">
        {messages.length === 0 && (
          <div className="chat-empty">
            {config.apiKey
              ? "Ask anything about your live EEG data."
              : "No API key — running in eco mode.\nMessages will show the context snapshot the AI would receive.\n\nOpen ⚙ Settings to configure your provider."}
          </div>
        )}
        {messages.map((msg, i) => (
          <div key={i} className={`chat-msg chat-msg-${msg.role}`}>
            <div className="chat-msg-content">{msg.content || "…"}</div>
          </div>
        ))}
        {error && <div className="chat-error">{error}</div>}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="chat-input-area">
        <textarea
          ref={inputRef}
          className="chat-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={streaming ? "Waiting for response…" : "Ask about your EEG…"}
          rows={1}
          disabled={streaming}
        />
        <button
          className="chat-send-btn"
          onClick={handleSend}
          disabled={streaming || !input.trim()}
        >
          {streaming ? "…" : "↑"}
        </button>
      </div>
    </div>
  );
});

export default ChatPanel;

// ── Settings form ────────────────────────────────────────────────────────

interface SettingsFormProps {
  config: ChatConfig;
  onChange: (c: ChatConfig) => void;
  onClose: () => void;
}

function SettingsForm({ config, onChange, onClose }: SettingsFormProps) {
  const [endpoint, setEndpoint] = useState(config.endpoint);
  const [apiKey, setApiKey] = useState(config.apiKey);
  const [model, setModel] = useState(config.model);

  const save = () => {
    onChange({ endpoint: endpoint.trim(), apiKey: apiKey.trim(), model: model.trim() });
    onClose();
  };

  return (
    <div className="chat-settings">
      <label>
        Endpoint
        <input
          type="url"
          value={endpoint}
          onChange={(e) => setEndpoint(e.target.value)}
          placeholder="https://api.openai.com/v1/chat/completions"
        />
      </label>
      <label>
        API Key
        <input
          type="password"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          placeholder="sk-… (leave empty for eco mode)"
          autoComplete="off"
        />
      </label>
      <label>
        Model
        <input
          type="text"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="gpt-4o-mini, claude-3-haiku, llama3, …"
        />
      </label>
      <div className="chat-settings-hint">
        Works with any OpenAI-compatible endpoint:<br />
        OpenAI · Anthropic · Ollama · LM Studio · Groq · Together
      </div>
      <div className="chat-settings-actions">
        <button className="btn" onClick={save}>Save</button>
        <button className="btn" onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}
