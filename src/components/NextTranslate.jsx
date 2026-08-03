import Reveal from "./Reveal";
import { siteConfig } from "../siteConfig";

// EDIT HERE: section copy, and the three feature cards below.
const features = [
  {
    num: "01",
    title: "Zero setup",
    body: "No source or target language to choose. Start talking — it figures out the rest.",
  },
  {
    num: "02",
    title: "Understands people",
    body: "Built to catch slang, expressions, and tone — not robotic, word-for-word translation.",
  },
  {
    num: "03",
    title: "Real conversations",
    body: "Made for actual back-and-forth conversation, not one phrase at a time.",
  },
];

export default function NextTranslate() {
  const isLive = Boolean(siteConfig.googlePlayUrl);

  return (
    <section id="next-translate" className="nt-section">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">Our first app</span>
          <h2>Just talk. Next Translate does the rest.</h2>
          <p>
            Most translation apps make you pick a source language, pick a target language, hit a button —
            and by the time you're done, the conversation's moved on. Next Translate skips all of it.
          </p>
        </Reveal>

        <Reveal className="glass nt-panel">
          <div>
            <div className="icon-wrap">
              <img src="/next-translate-icon-lg.png" alt="Next Translate icon" />
            </div>
            {isLive ? (
              <a href={siteConfig.googlePlayUrl} className="badge-soon" target="_blank" rel="noreferrer">
                <span className="pulse" />
                Get it on Google Play
              </a>
            ) : (
              <span className="badge-soon">
                <span className="pulse" />
                Coming soon to Google Play
              </span>
            )}
          </div>
          <div>
            <h3>Real-time AI voice translation, built for how people actually talk.</h3>
            <p className="lead">
              No language menus. No setup. Next Translate listens, detects what language you're speaking,
              understands what you mean — not just the words — and translates it back automatically.
            </p>
          </div>
        </Reveal>

        <div className="feature-grid">
          {features.map((feature) => (
            <Reveal className="neu feature-card" key={feature.num}>
              <span className="num">{feature.num}</span>
              <h4>{feature.title}</h4>
              <p>{feature.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
