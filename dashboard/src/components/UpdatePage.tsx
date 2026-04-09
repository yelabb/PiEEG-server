import { useState, useEffect, useCallback, useRef } from "react";
import type { UpdateInfo } from "../types";

type Step = "check" | "update" | "restart" | "verify";

interface StepState {
  status: "idle" | "running" | "done" | "error";
  message?: string;
}

interface DoctorCheck {
  category: string;
  status: "ok" | "warn" | "fail";
  message: string;
}

interface DoctorResult {
  checks: DoctorCheck[];
  summary: { ok: number; warnings: number; failures: number };
}

const STEPS: { key: Step; label: string }[] = [
  { key: "check", label: "Check" },
  { key: "update", label: "Update" },
  { key: "restart", label: "Restart" },
  { key: "verify", label: "Verify" },
];

export default function UpdatePage({ onBack }: { onBack: () => void }) {
  const [currentStep, setCurrentStep] = useState<Step>("check");
  const [steps, setSteps] = useState<Record<Step, StepState>>({
    check: { status: "idle" },
    update: { status: "idle" },
    restart: { status: "idle" },
    verify: { status: "idle" },
  });
  const [info, setInfo] = useState<UpdateInfo | null>(null);
  const [showDoctor, setShowDoctor] = useState(false);
  const [doctor, setDoctor] = useState<DoctorResult | null>(null);
  const [doctorLoading, setDoctorLoading] = useState(false);
  const abortRef = useRef(false);

  const setStep = useCallback((key: Step, state: StepState) => {
    setSteps((prev) => ({ ...prev, [key]: state }));
  }, []);

  // Auto-run check on mount
  useEffect(() => {
    runCheck();
    return () => { abortRef.current = true; };
  }, []);

  async function runCheck() {
    setCurrentStep("check");
    setStep("check", { status: "running", message: "Checking for updates…" });
    try {
      const r = await fetch("/api/update/check");
      const data = await r.json();
      if (data.error) throw new Error(data.error);
      setInfo(data);
      if (data.update_available) {
        setStep("check", {
          status: "done",
          message: `Update available: ${data.current_version} → ${data.latest_version} (${data.install_method})`,
        });
      } else {
        setStep("check", {
          status: "done",
          message: `You're on the latest version (${data.current_version}).`,
        });
      }
    } catch (e: unknown) {
      setStep("check", {
        status: "error",
        message: `Check failed: ${e instanceof Error ? e.message : String(e)}`,
      });
    }
  }

  async function runUpdate() {
    setCurrentStep("update");
    setStep("update", { status: "running", message: "Downloading and installing update…" });
    try {
      const r = await fetch("/api/update/apply", { method: "POST" });
      const data = await r.json();
      if (data.error) throw new Error(data.error);
      if (!data.ok) throw new Error(data.message || "Update failed");
      setStep("update", { status: "done", message: data.message });
    } catch (e: unknown) {
      setStep("update", {
        status: "error",
        message: `Update failed: ${e instanceof Error ? e.message : String(e)}`,
      });
    }
  }

  async function runRestart() {
    setCurrentStep("restart");
    setStep("restart", { status: "running", message: "Requesting server restart…" });
    try {
      const r = await fetch("/api/update/restart", { method: "POST" });
      const data = await r.json();
      if (!data.ok) throw new Error(data.message || "Restart failed");
      setStep("restart", {
        status: "running",
        message: `Restart initiated (${data.method}). Waiting for server…`,
      });
      // Poll /api/info until the server is back
      await waitForServer();
      setStep("restart", { status: "done", message: "Server is back online." });
      // Auto-advance to verify
      runVerify();
    } catch (e: unknown) {
      // Connection error is expected during restart — poll anyway
      if (steps.restart.status === "running") {
        try {
          await waitForServer();
          setStep("restart", { status: "done", message: "Server is back online." });
          runVerify();
        } catch {
          setStep("restart", {
            status: "error",
            message: "Server did not come back. Check terminal for logs.",
          });
        }
      } else {
        setStep("restart", {
          status: "error",
          message: `Restart failed: ${e instanceof Error ? e.message : String(e)}`,
        });
      }
    }
  }

  async function waitForServer() {
    const maxAttempts = 30;
    for (let i = 0; i < maxAttempts; i++) {
      if (abortRef.current) throw new Error("Aborted");
      await new Promise((r) => setTimeout(r, 2000));
      try {
        const r = await fetch("/api/info", { signal: AbortSignal.timeout(3000) });
        if (r.ok) return;
      } catch {
        // Server still restarting
      }
    }
    throw new Error("Timeout waiting for server");
  }

  async function runVerify() {
    setCurrentStep("verify");
    setStep("verify", { status: "running", message: "Verifying new version…" });
    try {
      const r = await fetch("/api/update/check");
      const data = await r.json();
      if (data.error) throw new Error(data.error);
      setInfo(data);
      if (data.update_available) {
        setStep("verify", {
          status: "error",
          message: `Still on ${data.current_version} (expected ${data.latest_version}). Restart may be needed.`,
        });
      } else {
        setStep("verify", {
          status: "done",
          message: `Running ${data.current_version}. Update complete!`,
        });
      }
    } catch (e: unknown) {
      setStep("verify", {
        status: "error",
        message: `Verify failed: ${e instanceof Error ? e.message : String(e)}`,
      });
    }
  }

  async function runDoctor() {
    setDoctorLoading(true);
    setShowDoctor(true);
    try {
      const r = await fetch("/api/update/doctor");
      const data = await r.json();
      if (data.error) throw new Error(data.error);
      setDoctor(data);
    } catch {
      setDoctor(null);
    } finally {
      setDoctorLoading(false);
    }
  }

  const stepOrder: Step[] = ["check", "update", "restart", "verify"];
  const currentIdx = stepOrder.indexOf(currentStep);

  return (
    <div className="update-page">
      <div className="update-page-header">
        <button className="btn" onClick={onBack}>← Back</button>
        <h2>Server Update</h2>
        <button className="btn" onClick={runDoctor}>
          {doctorLoading ? "Running…" : "Troubleshoot"}
        </button>
      </div>

      {/* Stepper */}
      <div className="update-stepper">
        {STEPS.map((s, i) => {
          const state = steps[s.key];
          const isCurrent = s.key === currentStep;
          let icon = "○";
          if (state.status === "done") icon = "✓";
          else if (state.status === "running") icon = "●";
          else if (state.status === "error") icon = "✗";

          return (
            <div
              key={s.key}
              className={`update-step${isCurrent ? " current" : ""}${state.status === "done" ? " done" : ""}${state.status === "error" ? " error" : ""}`}
            >
              <span className="update-step-icon">{icon}</span>
              <span className="update-step-label">{s.label}</span>
              {i < STEPS.length - 1 && <span className="update-step-line" />}
            </div>
          );
        })}
      </div>

      {/* Step detail */}
      <div className="update-detail">
        {stepOrder.map((key) => {
          const state = steps[key];
          if (state.status === "idle") return null;
          return (
            <div key={key} className={`update-log-entry update-log-${state.status}`}>
              <strong>{STEPS.find((s) => s.key === key)!.label}:</strong>{" "}
              {state.message}
            </div>
          );
        })}
      </div>

      {/* Actions */}
      <div className="update-actions">
        {currentStep === "check" && steps.check.status === "done" && info?.update_available && (
          <button className="btn active" onClick={runUpdate}>
            Apply Update
          </button>
        )}
        {currentStep === "check" && steps.check.status === "done" && !info?.update_available && (
          <button className="btn" onClick={runCheck}>
            Re-check
          </button>
        )}
        {currentStep === "check" && steps.check.status === "error" && (
          <button className="btn" onClick={runCheck}>Retry Check</button>
        )}
        {currentStep === "update" && steps.update.status === "done" && (
          <button className="btn active" onClick={runRestart}>
            Restart Server
          </button>
        )}
        {currentStep === "update" && steps.update.status === "error" && (
          <button className="btn" onClick={runUpdate}>Retry Update</button>
        )}
        {currentStep === "restart" && steps.restart.status === "error" && (
          <button className="btn" onClick={runRestart}>Retry Restart</button>
        )}
        {currentStep === "verify" && steps.verify.status === "done" && (
          <button className="btn active" onClick={onBack}>
            Done — Back to Dashboard
          </button>
        )}
        {currentStep === "verify" && steps.verify.status === "error" && (
          <>
            <button className="btn" onClick={runRestart}>Retry Restart</button>
            <button className="btn" onClick={runVerify}>Re-verify</button>
          </>
        )}
      </div>

      {/* Doctor / Troubleshoot */}
      {showDoctor && (
        <div className="update-doctor">
          <div className="update-doctor-header">
            <strong>Diagnostics</strong>
            <button className="update-doctor-close" onClick={() => setShowDoctor(false)}>✕</button>
          </div>
          {doctorLoading && <p className="update-doctor-loading">Running checks…</p>}
          {doctor && (
            <>
              <div className="update-doctor-summary">
                <span className="doc-ok">{doctor.summary.ok} ok</span>
                {doctor.summary.warnings > 0 && (
                  <span className="doc-warn">{doctor.summary.warnings} warning(s)</span>
                )}
                {doctor.summary.failures > 0 && (
                  <span className="doc-fail">{doctor.summary.failures} failure(s)</span>
                )}
              </div>
              <div className="update-doctor-checks">
                {doctor.checks.map((c, i) => (
                  <div key={i} className={`doc-check doc-check-${c.status}`}>
                    <span className="doc-icon">
                      {c.status === "ok" ? "✓" : c.status === "warn" ? "⚠" : "✗"}
                    </span>
                    <span className="doc-cat">{c.category}</span>
                    <span className="doc-msg">{c.message}</span>
                  </div>
                ))}
              </div>
            </>
          )}
          {!doctorLoading && !doctor && (
            <p className="update-doctor-loading">Failed to load diagnostics.</p>
          )}
        </div>
      )}
    </div>
  );
}
