import { useState } from "react";
import { ROADMAP_STEPS, DOCUMENTS, FUNDING_PROGRAMS } from "../constants/data";

export default function Dashboard({ onGetStarted }) {
  const [activeTab, setActiveTab] = useState('roadmap');
  const [completedSteps, setCompletedSteps] = useState([0, 1]); // Mock progress

  const tabs = [
    { id: 'roadmap', label: '🗺️ Roadmap' },
    { id: 'vault', label: '📁 Document Vault' },
    { id: 'funding', label: '💰 Funding' },
    { id: 'compliance', label: '🔔 Compliance' },
  ];

  // Mock compliance data for the dashboard
  const complianceItems = [
    { title: "GST/HST Registration", due: "Mar 25, 2026", days: 18, color: "orange" },
    { title: "AGCO Liquor Licence Renewal", due: "Mar 12, 2026", days: 5, color: "red" },
  ];

  return (
    <div className="dashboard-container">
      {/* 1. Header with Stats */}
      <header className="dash-header">
        <div>
          <h1>Welcome back, <span className="grad-text">Amir</span> 👋</h1>
          <div className="dash-badges">
            <span className="badge-blue">Pita Palace Inc.</span>
            <span className="badge-gray">Ontario · Food & Beverage</span>
          </div>
        </div>
        <div className="dash-stats">
          <div className="stat-card">
            <div className="stat-val">$47,500</div>
            <div className="stat-lab">GRANTS AVAILABLE</div>
          </div>
        </div>
      </header>

      {/* 2. Urgent Alert */}
      <div className="dash-alert animate-fade-in">
        <span>🚨</span>
        <p><strong>Liquor Licence Renewal</strong> due in 5 days — <button className="btn-link">Act Now</button></p>
      </div>

      {/* 3. Tab Navigation */}
      <nav className="dash-tabs">
        {tabs.map(t => (
          <button 
            key={t.id} 
            className={`tab-btn ${activeTab === t.id ? 'active' : ''}`}
            onClick={() => setActiveTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </nav>

      {/* 4. Tab Content Logic */}
      <div className="tab-content">
        {activeTab === 'roadmap' && (
          <div className="roadmap-list card-white">
            <div className="list-header">
              <h3>My Business Roadmap</h3>
              <span>{completedSteps.length} of {ROADMAP_STEPS.length} complete</span>
            </div>
            {ROADMAP_STEPS.map((step, i) => (
              <div key={i} className="dash-row">
                <div className={`status-dot ${completedSteps.includes(i) ? 'done' : 'todo'}`} />
                <div className="row-info">
                  <div className={`row-title ${completedSteps.includes(i) ? 'strike' : ''}`}>{step.title}</div>
                  <div className="row-meta">{step.level} · {step.cost}</div>
                </div>
                {!completedSteps.includes(i) && <button className="btn-primary-xs">Mark Done</button>}
              </div>
            ))}
          </div>
        )}

        {activeTab === 'vault' && (
          <div className="vault-grid">
            {DOCUMENTS.map((doc, i) => (
              <div key={i} className="doc-card">
                <span className="doc-icon">{doc.icon}</span>
                <div className="doc-info">
                  <div className="doc-name">{doc.name}</div>
                  <div className={`doc-status ${doc.status}`}>{doc.status}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ... Similar logic for Funding and Compliance tabs ... */}
      </div>

      <style>{`
        .dashboard-container { padding: 120px 48px 40px; background: var(--off-white); min-height: 100vh; }
        .dash-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 32px; }
        .dash-badges { display: flex; gap: 8px; margin-top: 8px; }
        .badge-blue { background: rgba(37,99,235,0.08); color: var(--blue); padding: 4px 12px; border-radius: 99px; font-size: 12px; font-weight: 700; }
        .badge-gray { background: var(--gray-100); color: var(--gray-600); padding: 4px 12px; border-radius: 99px; font-size: 12px; font-weight: 600; }
        .dash-stats { display: flex; gap: 16px; }
        .stat-card { background: white; padding: 16px 24px; border-radius: 12px; text-align: center; border: 1px solid var(--gray-100); }
        .stat-val { font-family: 'Instrument Serif', serif; font-size: 28px; color: var(--blue); }
        .stat-lab { font-size: 11px; color: var(--gray-500); font-weight: 700; }
        .dash-alert { background: #FFF7ED; border: 1px solid #FED7AA; padding: 16px 24px; border-radius: 12px; display: flex; gap: 12px; margin-bottom: 24px; }
        .dash-tabs { display: flex; gap: 8px; background: white; padding: 4px; border-radius: 12px; width: fit-content; margin-bottom: 24px; border: 1px solid var(--gray-100); }
        .tab-btn { padding: 10px 20px; border: none; background: transparent; border-radius: 8px; font-weight: 600; cursor: pointer; color: var(--gray-600); }
        .tab-btn.active { background: var(--blue); color: white; }
        .card-white { background: white; border-radius: var(--radius-lg); border: 1px solid var(--gray-100); overflow: hidden; }
        .dash-row { display: flex; align-items: center; gap: 16px; padding: 16px 24px; border-bottom: 1px solid var(--gray-50); }
        .status-dot { width: 10px; height: 10px; border-radius: 50%; }
        .status-dot.done { background: #22C55E; }
        .status-dot.todo { background: var(--gray-300); }
        .strike { text-decoration: line-through; color: var(--gray-400); }
        .vault-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px; }
        .doc-card { background: white; padding: 20px; border-radius: 12px; border: 1px solid var(--gray-100); display: flex; gap: 16px; align-items: center; }
        .btn-primary-xs { background: var(--gradient); color: white; border: none; padding: 6px 12px; border-radius: 6px; font-size: 12px; font-weight: 600; cursor: pointer; }
      `}</style>
    </div>
  );
}


