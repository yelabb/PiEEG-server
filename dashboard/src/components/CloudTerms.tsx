import { useState, useEffect } from "react";

const TOS_ACCEPTED_KEY = "pieeg_cloud_tos_accepted";
const TOS_VERSION = "2026-04-18";

export function hasAcceptedTerms(): boolean {
  try {
    const v = localStorage.getItem(TOS_ACCEPTED_KEY);
    return v === TOS_VERSION;
  } catch {
    return false;
  }
}

export function acceptTerms(): void {
  localStorage.setItem(TOS_ACCEPTED_KEY, TOS_VERSION);
}

interface Props {
  onAccept: () => void;
}

export default function CloudTerms({ onAccept }: Props) {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (hasAcceptedTerms()) onAccept();
  }, [onAccept]);

  const handleAccept = () => {
    if (!checked) return;
    acceptTerms();
    onAccept();
  };

  return (
    <div className="cloud-terms">
      <h3 className="cloud-terms-title">PiEEG Cloud — Terms of Service</h3>
      <div className="cloud-terms-scroll">
        <p className="cloud-terms-updated">Last updated: April 18, 2026</p>

        <section>
          <h4>1. Overview</h4>
          <p>
            PiEEG Server is open-source software (MIT License) that runs
            entirely on your local device. All EEG acquisition, filtering,
            recording, and visualization happen offline — no data leaves
            your machine unless you explicitly use the <strong>PiEEG Cloud</strong> features
            described below.
          </p>
          <p>
            These Terms of Service ("Terms") govern your use of PiEEG Cloud,
            the optional cloud relay and session storage service operated by the
            PiEEG Community ("we", "us", "our"). By signing in to PiEEG Cloud
            you agree to these Terms.
          </p>
        </section>

        <section>
          <h4>2. What stays offline</h4>
          <ul>
            <li>All EEG data acquisition and hardware communication.</li>
            <li>Signal filtering, visualization, and analysis.</li>
            <li>Local CSV recordings stored on your device.</li>
            <li>Dashboard authentication (local 6-digit code).</li>
            <li>Webhooks, OSC, and LSL integrations.</li>
          </ul>
          <p>
            We have <strong>no access</strong> to any data that stays on your
            local PiEEG Server instance.
          </p>
        </section>

        <section>
          <h4>3. Live relay</h4>
          <p>
            When you start a Live Relay, your EEG frames are streamed in
            real-time through our servers to anyone who has the share link.
          </p>
          <ul>
            <li>
              <strong>We do not record, store, or log live relay data.</strong>{" "}
              Frames are forwarded in transit and immediately discarded.
            </li>
            <li>
              Relay connections are ephemeral — when you stop the relay, the
              stream ends and the share link becomes inactive.
            </li>
            <li>
              We retain only minimal connection metadata (timestamps, frame
              counts) for service health monitoring. This metadata contains
              no EEG signal data.
            </li>
          </ul>
        </section>

        <section>
          <h4>4. Session storage &amp; sharing</h4>
          <p>
            When you upload a recorded session, the CSV file is stored in
            encrypted cloud storage (DigitalOcean Spaces).
          </p>
          <ul>
            <li>
              Uploaded files are stored for the purpose of sharing and
              retrieval by you.
            </li>
            <li>
              You may delete any uploaded session at any time. Deletion is
              permanent and irreversible.
            </li>
            <li>
              We may access aggregated, anonymized metadata (file sizes,
              channel counts, durations) for service analytics. We will
              not access the raw EEG data in your files.
            </li>
          </ul>
        </section>

        <section>
          <h4>5. Account &amp; authentication</h4>
          <p>
            Cloud accounts are identified by email address. We use one-time
            codes (OTP) for authentication — no passwords are stored.
          </p>
          <ul>
            <li>We store your email address for authentication purposes.</li>
            <li>
              You may request account deletion by emailing{" "}
              <strong>privacy@pieeg.com</strong>. Upon deletion, all your
              stored sessions and account data will be permanently removed.
            </li>
          </ul>
        </section>

        <section>
          <h4>6. Data processing &amp; privacy</h4>
          <ul>
            <li>
              EEG data may constitute sensitive biometric information. You
              are responsible for obtaining appropriate consent before
              uploading data collected from other individuals.
            </li>
            <li>
              We process data only to provide the cloud service. We do not
              sell, share, or use your data for advertising or profiling.
            </li>
            <li>
              Our servers are hosted on Fly.io (London).
              Uploaded files are stored on DigitalOcean Spaces (London).
              Account data is stored in MongoDB (Dublin).
            </li>
          </ul>
        </section>

        <section>
          <h4>7. Acceptable use</h4>
          <p>You agree not to:</p>
          <ul>
            <li>
              Upload data you do not have the right to share.
            </li>
            <li>
              Use the service in any way that violates applicable laws or
              regulations.
            </li>
            <li>
              Attempt to interfere with the service's infrastructure.
            </li>
          </ul>
        </section>

        <section>
          <h4>8. Disclaimer of warranties</h4>
          <p>
            PiEEG Cloud is provided <strong>"AS IS"</strong> without
            warranties of any kind. The service is experimental and
            community-operated. We do not guarantee uptime, data
            durability, or fitness for any particular purpose. PiEEG is
            not a medical device.
          </p>
        </section>

        <section>
          <h4>9. Limitation of liability</h4>
          <p>
            To the fullest extent permitted by law, the PiEEG Community shall
            not be liable for any indirect, incidental, or consequential
            damages arising from your use of PiEEG Cloud.
          </p>
        </section>

        <section>
          <h4>10. Changes to these Terms</h4>
          <p>
            We may update these Terms at any time. Continued use of PiEEG
            Cloud after changes constitutes acceptance of the revised Terms.
            Material changes will be communicated via the dashboard.
          </p>
        </section>
      </div>

      <label className="cloud-terms-checkbox">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <span>I have read and agree to the Terms of Service</span>
      </label>

      <button
        className="btn cloud-btn"
        disabled={!checked}
        onClick={handleAccept}
      >
        Continue
      </button>
    </div>
  );
}
