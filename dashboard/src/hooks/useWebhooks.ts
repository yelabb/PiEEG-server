/**
 * Top-level webhook state hook.
 *
 * Owns rules, events, WS message handling, and the client-side evaluator.
 * Lives at App level so evaluation runs regardless of panel open/closed.
 * Controlled by an `enabled` flag (persisted in localStorage by the caller).
 */

import { useState, useEffect, useCallback, useRef } from "react";
import type { EEGData, WebhookRule, WebhookEvent, WSWebhookMessage } from "../types";
import { useWebhookEvaluator } from "./useWebhookEvaluator";

export interface UseWebhooksReturn {
  rules: WebhookRule[];
  events: WebhookEvent[];
  saveRule: (rule: Partial<WebhookRule> & { id?: string }) => void;
  deleteRule: (id: string) => void;
  testRule: (id: string) => void;
  toggleRule: (rule: WebhookRule) => void;
}

export function useWebhooks(
  enabled: boolean,
  eegData: EEGData,
  sendCommand: (cmd: Record<string, unknown>) => void,
): UseWebhooksReturn {
  const [rules, setRules] = useState<WebhookRule[]>([]);
  const [events, setEvents] = useState<WebhookEvent[]>([]);

  // Load rules from server when enabled
  useEffect(() => {
    if (enabled) sendCommand({ cmd: "webhook_list" });
  }, [enabled, sendCommand]);

  // Handle WS messages — attached via window global
  const handleWSMessage = useCallback((msg: WSWebhookMessage) => {
    if (msg.webhook_rules) setRules(msg.webhook_rules);
    if (msg.webhook_created) setRules((prev) => [...prev, msg.webhook_created!]);
    if (msg.webhook_updated) {
      setRules((prev) =>
        prev.map((r) => (r.id === msg.webhook_updated!.id ? msg.webhook_updated! : r))
      );
    }
    if (msg.webhook_deleted !== undefined) {
      sendCommand({ cmd: "webhook_list" });
    }
    if (msg.webhook_event) {
      setEvents((prev) => [msg.webhook_event!, ...prev].slice(0, 50));
    }
  }, [sendCommand]);

  useEffect(() => {
    (window as unknown as Record<string, unknown>).__webhookHandler = handleWSMessage;
    return () => { delete (window as unknown as Record<string, unknown>).__webhookHandler; };
  }, [handleWSMessage]);

  // Client-side trigger evaluation — only runs when enabled
  useWebhookEvaluator(enabled ? rules : [], eegData, sendCommand);

  // CRUD actions
  const saveRule = useCallback((rule: Partial<WebhookRule> & { id?: string }) => {
    if (rule.id && rules.some((r) => r.id === rule.id)) {
      sendCommand({ cmd: "webhook_update", rule_id: rule.id, rule });
    } else {
      sendCommand({ cmd: "webhook_create", rule });
    }
  }, [rules, sendCommand]);

  const deleteRule = useCallback((id: string) => {
    sendCommand({ cmd: "webhook_delete", rule_id: id });
  }, [sendCommand]);

  const testRule = useCallback((id: string) => {
    sendCommand({ cmd: "webhook_test", rule_id: id });
  }, [sendCommand]);

  const toggleRule = useCallback((rule: WebhookRule) => {
    sendCommand({
      cmd: "webhook_update",
      rule_id: rule.id,
      rule: { enabled: !rule.enabled },
    });
  }, [sendCommand]);

  return { rules, events, saveRule, deleteRule, testRule, toggleRule };
}
