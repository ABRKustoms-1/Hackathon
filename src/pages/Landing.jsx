import useReveal from "../components/hooks/useReveal";
import { INDUSTRIES, CASE_STUDIES } from "../constants/data";
import MarqueeStrip from "../components/ui/MarqueeStrip";

export default function Landing({ onGetStarted, onLogin }) {
  // Activate the scroll animations
  useReveal();

  return (
    <div className="landing-page">
      {/* 1. Hero Section */}
      <section className="hero">
        <div className="hero-content reveal">
          <h1 className="hero-title">
            Your legal team and grants advisor — <span className="grad-text">for a fraction of the cost.</span>
          </h1>
          <p className="hero-sub">
            ScaleReady gives every Canadian business owner the roadmap, documents, and funding they need to grow.
          </p>
          <div className="hero-ctas">
            <button className="btn-primary" onClick={onGetStarted}>Build My Free Roadmap →</button>
            <button className="btn-secondary">See How It Works</button>
          </div>
        </div>
      </section>

      <MarqueeStrip />

      {/* 2. Industry Grid */}
      <section className="industries-section reveal">
        <h2 className="section-title text-center">Built for <span className="grad-text">your industry</span></h2>
        <div className="industry-grid">
          {INDUSTRIES.map((ind) => (
            <div key={ind.label} className="industry-card" onClick={onGetStarted}>
              <span className="industry-emoji">{ind.emoji}</span>
              <div className="industry-label">{ind.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Case Studies */}
      <section className="case-studies reveal">
        <h2 className="section-title">Real Canadian businesses. <span className="grad-text">Real results.</span></h2>
        <div className="grid-3">
          {CASE_STUDIES.map((study) => (
            <div key={study.title} className="case-card">
              <div className="case-header">{study.emoji} {study.title}</div>
              <p className="case-quote">"{study.quote}"</p>
              <button className="btn-ghost">Read Story →</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

