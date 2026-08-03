import Reveal from "./Reveal";

// EDIT HERE: the three steps below.
const steps = [
  {
    num: "01",
    title: "Open and talk",
    body: "Open Next Translate and start speaking naturally, in any language.",
  },
  {
    num: "02",
    title: "It understands",
    body: "The AI detects the language and picks up on meaning, slang, and tone.",
  },
  {
    num: "03",
    title: "Hear it translated",
    body: "The translation plays back instantly — ready for the reply.",
  },
];

export default function HowItWorks() {
  return (
    <section className="how">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">How it works</span>
          <h2>Three steps. That's it.</h2>
        </Reveal>
        <div className="steps">
          {steps.map((step) => (
            <Reveal className="neu step" key={step.num}>
              <span className="step-num">{step.num}</span>
              <h4>{step.title}</h4>
              <p>{step.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
