import { useState } from "react";
import Reveal from "./Reveal";
import { siteConfig } from "../siteConfig";

function encodeFormData(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

// This form submits to Netlify Forms (see the hidden form in index.html and
// the README section "Wire up the notify form"). No backend/email service
// needed as long as this is deployed on Netlify.
export default function Notify() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeFormData({ "form-name": siteConfig.notifyFormName, email }),
      });
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="notify" className="notify-section">
      <div className="wrap">
        <Reveal className="glass">
          <span className="eyebrow" style={{ justifyContent: "center" }}>
            Stay in the loop
          </span>
          <h2>Be first to know when {siteConfig.appName} launches.</h2>
          <p>No spam. Just one email when it's live on Google Play.</p>
          <form className="notify-form" onSubmit={handleSubmit}>
            <input
              type="email"
              required
              placeholder="you@email.com"
              aria-label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" disabled={status === "submitting"}>
              {status === "submitting" ? "Sending…" : "Notify me"}
            </button>
          </form>
          {status === "success" && (
            <p className="notify-msg show success">You're on the list — we'll email you at launch.</p>
          )}
          {status === "error" && (
            <p className="notify-msg show error">
              Something went wrong — email us directly at {siteConfig.contactEmail}.
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
