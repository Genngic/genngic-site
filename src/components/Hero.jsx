import Reveal from "./Reveal";

// EDIT HERE: headline, subcopy, and button labels/targets.
export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="wrap hero-grid">
        <Reveal>
          <span className="eyebrow">Genngic — Independent app studio</span>
          <h1>
            Software that <span className="accent">adapts</span> to you.
          </h1>
          <p className="lead">
            Genngic builds apps that meet people where they are. First up: Next Translate — real-time AI
            voice translation that skips the settings and just listens.
          </p>
          <div className="btn-row">
            <a href="#next-translate" className="btn-primary">
              <span className="dot" />
              Meet Next Translate
            </a>
            <a href="#notify" className="btn-ghost">
              Get notified at launch
            </a>
          </div>
        </Reveal>
        <Reveal className="hero-visual">
          <div className="glass hero-glass">
            <span className="orbit-tag t1">real-time</span>
            <img className="icon-large" src="/next-translate-icon-lg.png" alt="Next Translate app icon" />
            <span className="orbit-tag t2">AI-powered</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
