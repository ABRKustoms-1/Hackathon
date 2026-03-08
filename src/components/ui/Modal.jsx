import { useEffect } from "react";

/**
 * Modal Component
 * A reusable wrapper for all pop-ups in the application.
 * @param {boolean} open - Controls visibility
 * @param {function} onClose - Function to trigger on close
 * @param {string} title - The heading of the modal
 * @param {ReactNode} children - The content inside the modal
 */
export default function Modal({ open, onClose, title, children }) {
  // Prevent background scrolling when the modal is active
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  return (
    <div 
      className="modal-overlay animate-fade-in" 
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="modal-box">
        <div className="modal-header">
          <h3 className="modal-title">{title}</h3>
          <button 
            className="modal-close" 
            onClick={onClose}
            aria-label="Close modal"
          >
            ×
          </button>
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>

      <style>{`
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(8px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }

        .modal-box {
          background: var(--white);
          border-radius: var(--radius-lg);
          max-width: 640px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          box-shadow: var(--shadow-xl);
          /* Uses the bounce animation defined in Person 1's skeleton */
          animation: bounceIn 0.35s cubic-bezier(.22,1,.36,1);
        }

        .modal-header {
          padding: 32px 36px 24px;
          border-bottom: 1px solid var(--gray-100);
          position: sticky;
          top: 0;
          background: var(--white);
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .modal-title {
          font-family: 'Instrument Serif', serif;
          font-size: 28px;
          color: var(--gray-900);
        }

        .modal-close {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1.5px solid var(--gray-200);
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          color: var(--gray-500);
          cursor: none; /* Let the CustomCursor take over */
          transition: all 0.2s;
        }

        .modal-close:hover {
          background: var(--gray-100);
          color: var(--gray-900);
        }

        .modal-body {
          padding: 28px 36px 36px;
        }

        @keyframes bounceIn {
          0% { transform: scale(0.8); opacity: 0; }
          60% { transform: scale(1.05); }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
