import { useState, useEffect, useRef } from "react";

/**
 * Navbar Component
 * Handles transparency on scroll, visibility on scroll direction,
 * and dropdown menus for Features and Industries.
 */
export default function Navbar({ onGetStarted, onLogin, page, setPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [openDrop, setOpenDrop] = useState(null);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      // Blur background after 60px
      setScrolled(y > 60);
      // Hide if scrolling down past 200px, show if scrolling up
      setHidden(y > lastY.current && y > 200);
      lastY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const drops = {
    Features: ["Personalized Roadmap", "Document Vault", "Funding Matcher", "Compliance Tracker"],
    Industries: ["Food & Beverage", "Retail", "Construction", "Health", "Tech"]
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""} ${hidden ? "hidden" : ""}`}>
      {/* Branding / Home link */}
      <div className="nav-logo" onClick={() => { setPage('landing'); window.scrollTo(0,0); }}>
        <div className="logo-dot" />
        <div>
          ScaleReady
          <span className="nav-tagline">Canada's Business Growth Co-Pilot</span>
        </div>
      </div>

      {/* Center Links */}
      <div className="nav-links">
        {["How It Works", "Features", "Funding", "Industries", "Pricing"].map(link => (
          <div key={link} className="nav-link-container"
            onMouseEnter={() => setOpenDrop(link)}
            onMouseLeave={() => setOpenDrop(null)}>
            <div className="nav-link">{link}</div>
            
            {/* Dropdown Logic */}
            {drops[link] && openDrop === link && (
              <div className="nav-dropdown">
                {drops[link].map(d => (
                  <div key={d} className="dropdown-item">{d}</div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="nav-right">
        <span className="lang-toggle">EN | FR</span>
        <button className="nav-link" onClick={onLogin}>Log In</button>
        <button className="btn-primary-sm" onClick={onGetStarted}>
          Get Started Free →
        </button>
      </div>
    </nav>
  );
}

