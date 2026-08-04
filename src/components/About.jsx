import Reveal from "./Reveal";
import { siteConfig } from "../siteConfig";

// EDIT HERE: about copy and the "next app" teaser text.
export default function About() {
  return (
    <section id="about">
      <div className="wrap about-grid">
        <Reveal className="about-visual">
          <div className="metal-plate">
            <img className="plate-logo" src="/genngic-pfp.png" alt={`${siteConfig.studioName} logo`} />
            <span className="plate-label">{siteConfig.studioName.toUpperCase()} · STUDIO</span>
          </div>
        </Reveal>
        <Reveal className="about-copy">
          <span className="eyebrow">About {siteConfig.studioName}</span>
          <h2>One studio. A growing library of apps.</h2>
          <p>
            {siteConfig.studioName} is a novel app studio. {siteConfig.appName} is the first
            release, built around one idea: breaking the language barrier.
          </p>
          <p>
            Every app we build starts from the same question : what's the one unnecessary step we can
            remove? More apps are already on the way.
          </p>
          <div className="app-slot">
            <span className="plus">+</span>
            <span>Next app - in development</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
