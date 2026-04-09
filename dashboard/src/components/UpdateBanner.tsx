import { useState, useEffect } from "react";
import type { UpdateInfo } from "../types";

export default function UpdateBanner({ onGoToUpdate }: { onGoToUpdate?: () => void }) {
  const [info, setInfo] = useState<UpdateInfo | null>(null);
  const [ready, setReady] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    fetch("/api/update/check")
      .then((r) => r.json())
      .then((data) => {
        if (!data.error) setInfo(data);
        setReady(true);
      })
      .catch(() => setReady(true));
  }, []);

  if (dismissed || !ready || !info?.update_available) return null;

  return (
    <div className="update-banner">
      <div className="update-banner-content">
        <span className="update-banner-text">
          Update available: <strong>{info.current_version}</strong> →{" "}
          <strong>{info.latest_version}</strong>
        </span>
        {onGoToUpdate && (
          <button className="btn update-btn" onClick={onGoToUpdate}>
            Update now
          </button>
        )}
        <a
          className="btn update-btn update-btn-secondary"
          href="https://github.com/pieeg-club/PiEEG-server/releases"
          target="_blank"
          rel="noopener noreferrer"
        >
          Changelog
        </a>
        <button
          className="update-dismiss"
          onClick={() => setDismissed(true)}
          title="Dismiss"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
