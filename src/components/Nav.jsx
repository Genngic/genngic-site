import { siteConfig } from "../siteConfig";

// EDIT HERE:
// - Add/remove/rename nav links in `navLinks` below.
// - Change the CTA button label/target in the JSX further down.
const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#next-translate", label: "Next Translate" },
  { href: "#about", label: "About" },
  { href: "#notify", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#home" className="brand-lockup" aria-label={`${siteConfig.studioName} — home`}>
          <span className="brand-mark" role="img" />
          <span className="brand-word" role="img" />
        </a>
        <nav className="nav-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
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
