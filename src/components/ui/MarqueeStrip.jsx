/**
 * MarqueeStrip Component
 * Creates an infinite auto-scrolling bar of Canadian business facts.
 * Uses the 'marquee' keyframe animation from animations.css.
 */
export default function MarqueeStrip() {
  const items = [
    "4.2M small businesses in Canada",
    "$30B+ in unclaimed grants annually",
    "3 levels of government to navigate",
    "98% of Canadian businesses are small businesses",
    "10M+ Canadians employed by small businesses",
    "Covering all 10 provinces & 3 territories",
    "Federal · Provincial · Municipal compliance",
    "Bilingual EN · FR support",
  ];

  // We duplicate the items to ensure the scroll loop is seamless and never shows a gap
  const doubledItems = [...items, ...items];

  return (
    <div className="marquee-strip">
      <div className="marquee-track">
        {doubledItems.map((item, i) => (
          <div key={i} className="marquee-item">
            <span className="marquee-accent">◆</span>
            {item}
          </div>
        ))}
      </div>

      <style>{`
        .marquee-strip {
          background: var(--gray-900);
          padding: 16px 0;
          overflow: hidden;
          position: relative;
          z-index: 5;
        }

        .marquee-track {
          display: flex;
          /* Refers to the 'marquee' animation in animations.css */
          animation: marquee 40s linear infinite;
          width: max-content;
        }

        .marquee-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 0 40px;
          white-space: nowrap;
          color: white;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.02em;
        }

        .marquee-accent {
          color: var(--orange-light);
          font-weight: 700;
        }
      `}</style>
    </div>
  );
}

