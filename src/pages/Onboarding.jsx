import { useState } from "react";

export default function Onboarding({ onComplete }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    type: "",
    province: "",
    city: "",
    stage: "",
    goals: [],
    profile: []
  });

  const next = () => setStep((s) => Math.min(s + 1, 5));
  const back = () => setStep((s) => Math.max(s - 1, 1));

  // Step Content Data (Simplified for logic)
  const businessTypes = ["Food & Beverage", "Retail", "Construction", "Tech", "Creative"];
  const provinces = ["Ontario", "BC", "Alberta", "Quebec", "Manitoba", "Nova Scotia"];

  return (
    <div className="onboarding-container animate-fade-up">
      <div className="onboarding-card">
        {/* Progress Header */}
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${(step / 5) * 100}%` }} />
        </div>
        <p className="step-indicator">Step {step} of 5</p>

        {/* --- Step 1: Business Type --- */}
        {step === 1 && (
          <div className="step-content">
            <h2>What kind of business are you building?</h2>
            <div className="option-grid">
              {businessTypes.map((t) => (
                <button 
                  key={t}
                  className={`option-tile ${formData.type === t ? 'active' : ''}`}
                  onClick={() => { setFormData({...formData, type: t}); next(); }}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* --- Step 2: Location --- */}
        {step === 2 && (
          <div className="step-content">
            <h2>Where are you located?</h2>
            <select 
              className="input-field"
              value={formData.province}
              onChange={(e) => setFormData({...formData, province: e.target.value})}
            >
              <option value="">Select Province</option>
              {provinces.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
            <input 
              className="input-field"
              placeholder="City (e.g. Toronto)"
              onChange={(e) => setFormData({...formData, city: e.target.value})}
            />
            <button className="btn-primary" onClick={next} disabled={!formData.province}>Continue</button>
          </div>
        )}

        {/* Steps 3-5 follow a similar pattern... */}
        {step === 5 && (
          <div className="step-content">
            <h2>Ready to see your roadmap?</h2>
            <p>We've found 14 grants and 8 licenses for you.</p>
            <button className="btn-primary" onClick={() => onComplete(formData)}>
              Generate My Roadmap →
            </button>
          </div>
        )}

        {/* Navigation Footer */}
        {step > 1 && step < 5 && (
          <button className="btn-ghost" onClick={back} style={{ marginTop: '20px' }}>
            ← Back
          </button>
        )}
      </div>

      <style>{`
        .onboarding-container {
          min-height: 100vh; display: flex; align-items: center;
          justify-content: center; background: var(--off-white); padding: 100px 24px;
        }
        .onboarding-card {
          max-width: 600px; width: 100%; background: white;
          padding: 40px; border-radius: var(--radius-lg); box-shadow: var(--shadow-lg);
        }
        .progress-bar { height: 6px; background: var(--gray-100); border-radius: 3px; margin-bottom: 20px; }
        .progress-fill { height: 100%; background: var(--gradient); border-radius: 3px; transition: width 0.3s; }
        .option-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 24px; }
        .option-tile { 
          padding: 20px; border: 1.5px solid var(--gray-200); border-radius: var(--radius);
          background: white; cursor: pointer; transition: all 0.2s; font-weight: 600;
        }

        .option-tile.active { border-color: var(--blue); background: var(--gray-50); color: var(--blue); }
        .input-field { width: 100%; padding: 12px; border: 1.5px solid var(--gray-200); border-radius: 8px; margin-bottom: 12px; }
      `}</style>
    </div>
  );
}
