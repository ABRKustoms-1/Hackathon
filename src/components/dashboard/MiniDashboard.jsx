/**
 * MiniDashboard Component
 * A non-interactive preview used in the Landing Page Hero.
 * Demonstrates the value of the platform to potential users.
 */
export default function MiniDashboard() {
  const previewSteps = [
    { title: "Register Business Name", status: "done", cost: "$60" },
    { title: "Federal Incorporation", status: "done", cost: "$200" },
    { title: "CRA Business Number", status: "progress", cost: "Free" },
    { title: "GST/HST Registration", status: "todo", cost: "Free" },
  ];

  return (
    <div className="mini-dash-wrapper">
      {/* Header Bar */}
      <div className="mini-dash-header">
        <span className="user-greeting">Welcome back, Amir 👋</span>
        <span className="location-tag">Ontario · Food & Beverage</span>
      </div>

      {/* Action Alert */}
      <div className="mini-alert">
        <span className="alert-icon">🔔</span>
        <p><strong>GST/HST Registration</strong> due in 18 days — <span className="blue-link">Get Document →</span></p>
      </div>

      {/* Progress Summary */}
      <div className="mini-content">
        <div className="content-label-row">
          <span className="label-bold">MY ROADMAP</span>
          <span className="progress-pill">3/8 complete</span>
        </div>

        {/* Steps List */}
        <div className="mini-steps">
          {previewSteps.map((step, i) => (
            <div key={i} className="mini-step-row">
              <div className={`status-dot dot-${step.status}`} />
              <span className={`step-text ${step.status === 'done' ? 'strike' : ''}`}>
                {step.title}
              </span>
              <span className="step-price">{step.cost}</span>
            </div>
          ))}
        </div>

        {/* Bottom Stat Cards */}
        <div className="mini-stats-row">
          <div className="mini-stat-box stat-blue">
            <div className="stat-number">$47,500</div>
            <div className="stat-label">GRANTS MATCHED</div>
          </div>
          <div className="mini-stat-box stat-green">
            <div className="stat-number">12</div>
            <div className="stat-label">DOCUMENTS READY</div>
          </div>
        </div>
      </div>

      <style>{`
        .mini-dash-wrapper {
          background: white;
          border-radius: 20px;
          box-shadow: 0 24px 80px rgba(0,0,0,0.15);
          border: 1px solid var(--gray-200);
          overflow: hidden;
          font-size: 12px;
          user-select: none;
        }

        .mini-dash-header {
          background: var(--gradient);
          padding: 14px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .user-greeting { color: white; font-weight: 700; font-size: 13px; }
        
        .location-tag {
          background: rgba(255,255,255,0.2);
          color: white;
          padding: 3px 10px;
          border-radius: 99px;
          font-size: 10px;
        }

        .mini-alert {
          background: #FFF7ED;
          border: 1px solid #FED7AA;
          margin: 14px 14px 0;
          padding: 10px 14px;
          border-radius: 12px;
          display: flex;
          gap: 10px;
          font-size: 11px;
        }

        .blue-link { color: var(--blue); font-weight: 600; }

        .mini-content { padding: 14px; }

        .content-label-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .label-bold { font-weight: 700; color: var(--gray-500); font-size: 10px; letter-spacing: 0.05em; }
        
        .progress-pill {
          background: var(--gradient);
          color: white;
          padding: 2px 8px;
          border-radius: 99px;
          font-size: 10px;
        }

        .mini-step-row {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 0;
          border-bottom: 1px solid var(--gray-100);
        }

        .status-dot { width: 8px; height: 8px; border-radius: 50%; }
        .dot-done { background: #22C55E; }
        .dot-progress { background: var(--orange); }
        .dot-todo { background: var(--gray-300); }

        .step-text { flex: 1; color: var(--gray-900); }
        .step-text.strike { text-decoration: line-through; color: var(--gray-400); }
        .step-price { color: var(--gray-400); font-size: 10px; }

        .mini-stats-row {
          display: flex;
          gap: 8px;
          margin-top: 14px;
        }

        .mini-stat-box {
          flex: 1;
          border-radius: 10px;
          padding: 10px;
          text-align: center;
        }

        .stat-blue { background: #EEF2FF; }
        .stat-green { background: #F0FDF4; }

        .stat-number {
          font-family: 'Instrument Serif', serif;
          font-size: 18px;
          font-weight: 800;
        }

        .stat-blue .stat-number { color: var(--blue); }
        .stat-green .stat-number { color: #16A34A; }

        .stat-label { font-size: 9px; color: var(--gray-500); font-weight: 700; margin-top: 2px; }
      `}</style>
    </div>
  );
}


