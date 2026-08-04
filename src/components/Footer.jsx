import { useState } from "react";
import { siteConfig } from "../siteConfig";

// EDIT HERE: footer link columns below. Social URLs live in src/siteConfig.js.
const footerCols = [
  {
    heading: "Studio",
    links: [
      { href: "#about", label: "About" },
      { href: `mailto:${siteConfig.contactEmail}`, label: "Contact", isContact: true },
    ],
  },
  {
    heading: "Apps",
    links: [
      { href: "#next-translate", label: siteConfig.appName },
      { href: "#about", label: "What's next" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const [copied, setCopied] = useState(false);

  // mailto: links only work if the visitor's OS has a default mail app
  // configured (and some embedded/in-app browsers block them outright).
  // Copying the address to the clipboard means the click always visibly
  // does *something*, even when mailto silently fails to open anything.
  function handleContactClick() {
    navigator.clipboard?.writeText(siteConfig.contactEmail).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#home" className="brand-lockup" aria-label={`${siteConfig.studioName} — home`}>
              <span className="brand-mark" role="img" />
              <span className="brand-word" role="img" />
            </a>
            <p>{siteConfig.tagline}</p>
          </div>
          <div className="footer-cols">
            {footerCols.map((col) => (
              <div className="footer-col" key={col.heading}>
                <h5>{col.heading}</h5>
                {col.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={link.isContact ? handleContactClick : undefined}
                    title={link.isContact ? `Also copies ${siteConfig.contactEmail} to your clipboard` : undefined}
                  >
                    {link.isContact && copied ? "Copied email!" : link.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {year} {siteConfig.studioName}. All rights reserved.
          </span>
          <div className="social-row">
            <a href={siteConfig.social.twitter} aria-label="X / Twitter" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24">
                <path d="M18.3 2H21l-6.6 7.5L22 22h-6.9l-5.4-6.9L3.5 22H1l7.1-8.1L1 2h7l4.9 6.3L18.3 2Zm-1.2 18h1.9L7 4h-2l12.1 16Z" />
              </svg>
            </a>
            <a href={siteConfig.social.instagram} aria-label="Instagram" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24">
                <path d="M12 2c2.7 0 3.05.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.22.6 1.77 1.15.55.55.89 1.11 1.15 1.77.25.64.42 1.37.47 2.43.05 1.07.06 1.42.06 4.12s-.01 3.05-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.64.25-1.37.42-2.43.47-1.07.05-1.42.06-4.12.06s-3.05-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.25-.64-.42-1.37-.47-2.43C2.01 15.05 2 14.7 2 12s.01-3.05.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.22 1.15-1.77A4.9 4.9 0 0 1 5.45 2.53c.64-.25 1.37-.42 2.43-.47C8.95 2.01 9.3 2 12 2Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4ZM18.4 6.6a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z" />
              </svg>
            </a>
            <a href={siteConfig.social.tiktok} aria-label="TikTok" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24">
                <path d="M16.6 2h-3.2v13.2a2.9 2.9 0 1 1-2.1-2.8v-3.3a6.1 6.1 0 1 0 5.3 6.1V8.9a7.6 7.6 0 0 0 4.4 1.4V7.1a4.4 4.4 0 0 1-4.4-4.4V2Z" />
              </svg>
            </a>
            <a href={siteConfig.social.youtube} aria-label="YouTube" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24">
                <path d="M22 12s0-3.5-.45-5.2a2.9 2.9 0 0 0-2-2.05C17.9 4.3 12 4.3 12 4.3s-5.9 0-7.55.45a2.9 2.9 0 0 0-2 2.05C2 8.5 2 12 2 12s0 3.5.45 5.2a2.9 2.9 0 0 0 2 2.05C6.1 19.7 12 19.7 12 19.7s5.9 0 7.55-.45a2.9 2.9 0 0 0 2-2.05C22 15.5 22 12 22 12Zm-12.1 3.4V8.6l5.4 3.4-5.4 3.4Z" />
              </svg>
            </a>
            <a href={siteConfig.social.producthunt} aria-label="Product Hunt" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24">
                <path d="M13.4 12H10.4V8.4H13.4C14.4 8.4 15.2 9.2 15.2 10.2C15.2 11.2 14.4 12 13.4 12ZM13.4 5.4H7.4V18.6H10.4V15H13.4C16.1 15 18.2 12.9 18.2 10.2C18.2 7.5 16.1 5.4 13.4 5.4Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
