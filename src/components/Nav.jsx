import { useState } from "react";
import { siteConfig } from "../siteConfig";

// EDIT HERE:
// - Add/remove/rename nav links in `navLinks` below.
// - Change the CTA button label/target in the JSX further down.
const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#next-translate", label: "Next Translate" },
  { href: "#about", label: "About" },
  { href: `mailto:${siteConfig.contactEmail}`, label: "Contact", isContact: true },
];

export default function Nav() {
  const [copied, setCopied] = useState(false);

  // mailto: links only work if the visitor's OS has a default mail app
  // configured. Copying the address to the clipboard means the click
  // always visibly does something, even when mailto silently fails.
  function handleContactClick() {
    navigator.clipboard?.writeText(siteConfig.contactEmail).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#home" className="brand-lockup" aria-label={`${siteConfig.studioName} — home`}>
          <span className="brand-logo" role="img" />
        </a>
        <nav className="nav-links">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={link.isContact ? handleContactClick : undefined}
              title={link.isContact ? `Also copies ${siteConfig.contactEmail} to your clipboard` : undefined}
            >
              {link.isContact && copied ? "Copied email!" : link.label}
            </a>
          ))}
        </nav>
        <a href="#notify" className="nav-cta">
          Get notified
        </a>
      </div>
    </header>
  );
}
