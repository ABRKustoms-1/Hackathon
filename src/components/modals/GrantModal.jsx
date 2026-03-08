import Modal from "../ui/Modal";

/**
 * GrantModal Component
 * Displays detailed eligibility, funding amounts, and 
 * pre-filled application status for matched grants.
 */
export default function GrantModal({ grant, onClose }) {
  if (!grant) return null;

  return (
    <Modal open={!!grant} onClose={onClose} title={`💰 ${grant.name}`}>
      {/* 1. Badge Row */}
      <div className="grant-badges">
        <span className="badge-type">{grant.type}</span>
        <span className={`badge-deadline deadline-${grant.color}`}>
          🕐 {grant.deadline}
        </span>
        <span className="badge-match">{grant.match}% eligibility match</span>
      </div>

      {/* 2. Funding Highlight Card */}
      <div className="funding-highlight-card">
        <div className="funding-info">
          <div className="label-tiny">MAXIMUM FUNDING</div>
          <div className="amount-hero">{grant.amount}</div>
        </div>
        <div className="app-status-box">
          <div className="label-tiny">APPLICATION</div>
          <div className="status-percent">80% Pre-filled</div>
        </div>
      </div>

      {/* 3. Eligibility Checklist */}
      <div className="eligibility-section">
        <h4 className="section-title-sm">Eligibility Checklist</h4>
        <div className="check-item">
          <div className="check-icon-circle">✓</div>
          <span>Registered Canadian business</span>
        </div>
        <div className="check-item">
          <div className="check-icon-circle">✓</div>
          <span>Operating in {grant.province || 'eligible province'}</span>
        </div>
        <div className="check-item">
          <div className="check-icon-circle">✓</div>
          <span>Fewer than 500 employees</span>
        </div>
      </div>

      {/* 4. Actions */}
      <div className="modal-actions-grid">
        <button className="btn-primary" style={{ flex: 1 }}>
          Complete Application →
        </button>
        <button className="btn-secondary" onClick={onClose}>
          Save for Later
        </button>
      </div>

      <style>{`
        .grant-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 24px;
        }

        .badge-type {
          background: rgba(37,99,235,0.08);
          color: var(--blue);
          padding: 4px 12px;
          border-radius: 99px;
          font-size: 12px;
          font-weight: 700;
        }

        .badge-deadline {
          padding: 4px 12px;
          border-radius: 99px;
          font-size: 12px;
          font-weight: 600;
        }

        .deadline-green { background: #DCFCE7; color: #166534; }
        .deadline-yellow { background: #FEF9C3; color: #854D0E; }
        .deadline-red { background: #FEE2E2; color: #991B1B; }

        .badge-match {
          background: #F0FDF4;
          color: #166534;
          padding: 4px 12px;
          border-radius: 99px;
          font-size: 12px;
          font-weight: 700;
        }

        .funding-highlight-card {
          background: var(--gradient-soft);
          border-radius: 12px;
          padding: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        .label-tiny {
          font-size: 11px;
          font-weight: 700;
          color: var(--gray-500);
          letter-spacing: 0.05em;
          margin-bottom: 4px;
        }

        .amount-hero {
          font-family: 'Instrument Serif', serif;
          font-size: 36px;
          color: var(--gray-900);
          line-height: 1;
        }

        .status-percent {
          font-size: 16px;
          font-weight: 700;
          color: var(--blue);
        }

        .eligibility-section {
          margin-bottom: 32px;
        }

        .section-title-sm {
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--gray-500);
          margin-bottom: 16px;
        }

        .check-item {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 10px;
          font-size: 14px;
          color: var(--gray-700);
        }

        .check-icon-circle {
          width: 20px;
          height: 20px;
          background: var(--gradient);
          border-radius: 50%;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          flex-shrink: 0;
        }

        .modal-actions-grid {
          display: flex;
          gap: 12px;
        }
      `}</style>
    </Modal>
  );
}

