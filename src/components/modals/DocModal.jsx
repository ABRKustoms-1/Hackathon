import Modal from "../ui/Modal";

/**
 * DocModal Component
 * Displays a specialized preview of a business document 
 * with pre-filled user data and download actions.
 */
export default function DocModal({ doc, onClose }) {
  if (!doc) return null;

  return (
    <Modal open={!!doc} onClose={onClose} title={`${doc.icon} ${doc.name}`}>
      {/* Status & Category Badges */}
      <div className="doc-modal-meta">
        <span className={`doc-status-badge doc-${doc.status}`}>
          {doc.status === 'ready' ? '✓ Ready to Download' : 
           doc.status === 'submitted' ? '📤 Submitted' : '✏️ Draft'}
        </span>
        <span className="doc-category-tag">{doc.category}</span>
      </div>

      {/* Document Paper Preview */}
      <div className="doc-preview-paper">
        <div className="paper-header">{doc.name.toUpperCase()}</div>
        <div className="paper-content">
          <p>This document has been automatically pre-filled using your ScaleReady business profile data.</p>
          
          <div className="data-preview-box">
            <p><strong>Business Legal Name:</strong> Pita Palace Inc.</p>
            <p><strong>Jurisdiction:</strong> Ontario, Canada</p>
            <p><strong>Business Number:</strong> [Pending Registration]</p>
          </div>

          <p className="placeholder-text">
            [Full legal text and form fields are generated upon download. 
            This preview ensures your core information is accurate before filing.]
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="modal-actions">
        <button className="btn-primary w-full">⬇ Download Official PDF</button>
        <button className="btn-secondary w-full" onClick={onClose}>Edit Business Details</button>
      </div>

      <style>{`
        .doc-modal-meta {
          display: flex;
          gap: 10px;
          margin-bottom: 24px;
        }

        .doc-status-badge {
          padding: 4px 12px;
          border-radius: 99px;
          font-size: 12px;
          font-weight: 700;
        }

        .doc-ready { background: #DCFCE7; color: #166534; }
        .doc-draft { background: #EDE9FE; color: #5B21B6; }
        .doc-submitted { background: #DBEAFE; color: #1D4ED8; }

        .doc-category-tag {
          background: var(--gray-100);
          color: var(--gray-600);
          padding: 4px 12px;
          border-radius: 99px;
          font-size: 12px;
          font-weight: 600;
        }

        .doc-preview-paper {
          background: #F9FAFB;
          border: 1px solid var(--gray-200);
          border-radius: 12px;
          padding: 32px;
          margin-bottom: 24px;
          font-family: serif;
          line-height: 1.6;
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.02);
        }

        .paper-header {
          text-align: center;
          font-weight: 700;
          font-size: 14px;
          margin-bottom: 24px;
          color: var(--gray-900);
          letter-spacing: 0.05em;
        }

        .data-preview-box {
          background: white;
          border: 1px solid var(--gray-200);
          padding: 16px;
          border-radius: 8px;
          margin: 20px 0;
          font-family: 'Syne', sans-serif;
          font-size: 13px;
        }

        .placeholder-text {
          color: var(--gray-400);
          font-size: 12px;
          font-style: italic;
          margin-top: 20px;
        }

        .modal-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
      `}</style>
    </Modal>
  );
}

