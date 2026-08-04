import { useCallback, useEffect, useState } from "react";
import Reveal from "./Reveal";

const SLIDE_COUNT = 7;
const slides = Array.from({ length: SLIDE_COUNT }, (_, i) => i + 1);

// How far (as a % of a slide's own width) and how much smaller/fainter each
// neighboring slide gets, per step away from the active one.
const OFFSET_STEP = 76;
const SCALE_STEP = 0.16;
const OPACITY_STEP = 0.42;
const MAX_VISIBLE_OFFSET = 2;

function shortestOffset(i, index) {
  let d = i - index;
  if (d > SLIDE_COUNT / 2) d -= SLIDE_COUNT;
  if (d < -SLIDE_COUNT / 2) d += SLIDE_COUNT;
  return d;
}

// EDIT HERE: eyebrow/title/subtitle copy below the carousel.
export default function UIGallery() {
  const [index, setIndex] = useState(0);
  const [theme, setTheme] = useState("dark");

  const goTo = useCallback((i) => {
    setIndex(((i % SLIDE_COUNT) + SLIDE_COUNT) % SLIDE_COUNT);
  }, []);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  return (
    <section id="ui" className="ui-section">
      <div className="wrap">
        <Reveal className="ui-toolbar">
          <span className="eyebrow">Take a look inside</span>
          <div className="theme-switch" role="tablist" aria-label="Preview app theme">
            <span className={`theme-switch-thumb ${theme}`} aria-hidden="true" />
            <button type="button" role="tab" aria-selected={theme === "dark"} className={theme === "dark" ? "active" : ""} onClick={() => setTheme("dark")}>
              Dark
            </button>
            <button type="button" role="tab" aria-selected={theme === "light"} className={theme === "light" ? "active" : ""} onClick={() => setTheme("light")}>
              Light
            </button>
          </div>
        </Reveal>

        <Reveal className="ui-carousel">
          <button type="button" className="ui-arrow ui-arrow-prev" onClick={prev} aria-label="Previous screenshot">
            <svg viewBox="0 0 24 24">
              <path d="M15 4l-8 8 8 8" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="ui-track">
            {slides.map((n, i) => {
              const d = shortestOffset(i, index);
              const abs = Math.abs(d);
              const visible = abs <= MAX_VISIBLE_OFFSET;
              const scale = Math.max(1 - abs * SCALE_STEP, 0.5);
              const opacity = visible ? Math.max(1 - abs * OPACITY_STEP, 0) : 0;

              return (
                <div
                  key={n}
                  className={`ui-slide${d === 0 ? " is-active" : ""}`}
                  style={{
                    "--tx": `${d * OFFSET_STEP}%`,
                    "--scale": scale,
                    opacity,
                    zIndex: 10 - abs,
                    pointerEvents: d === 0 ? "auto" : "none",
                  }}
                  aria-hidden={d !== 0}
                >
                  <div className="ui-phone">
                    <img src={`/screenshots/dark/d${n}.jpg`} alt={d === 0 ? `Next Translate app screen ${n} of ${SLIDE_COUNT}, dark mode` : ""} className={`ui-shot${theme === "dark" ? " is-visible" : ""}`} />
                    <img src={`/screenshots/light/l${n}.jpg`} alt={d === 0 ? `Next Translate app screen ${n} of ${SLIDE_COUNT}, light mode` : ""} className={`ui-shot${theme === "light" ? " is-visible" : ""}`} />
                  </div>
                </div>
              );
            })}
          </div>

          <button type="button" className="ui-arrow ui-arrow-next" onClick={next} aria-label="Next screenshot">
            <svg viewBox="0 0 24 24">
              <path d="M9 4l8 8-8 8" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </Reveal>

        <div className="ui-dots">
          {slides.map((n, i) => (
            <button key={n} type="button" className={i === index ? "active" : ""} onClick={() => goTo(i)} aria-label={`Go to screenshot ${i + 1}`} />
          ))}
        </div>

        <Reveal className="ui-caption">
          <h2>An interface that gets out of your way</h2>
          <p>
            Every screen in Next Translate is built around one motion — hold to speak, release to translate.
            Flip between light and dark above to see it either way.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
