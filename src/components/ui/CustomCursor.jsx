import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  
  // High-performance position tracking (avoids React state re-renders)
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    // 1. Update target coordinates on move
    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    // 2. Add 'hovering' class when touching interactive elements
    const onMouseOver = (e) => {
      if (e.target.closest('button, a, .nav-link, .option-tile, .card-interactive')) {
        if (ringRef.current) ringRef.current.classList.add('hovering');
      }
    };

    const onMouseOut = () => {
      if (ringRef.current) ringRef.current.classList.remove('hovering');
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    window.addEventListener('mouseout', onMouseOut);

    // 3. The Animation Loop (Linear Interpolation for the "trailing" effect)
    const animate = () => {
      // The ring follows the dot with a 15% lag for smoothness
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.15;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.15;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };
    
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('mouseout', onMouseOut);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* The solid center dot */}
      <div 
        ref={dotRef} 
        className="cursor-dot" 
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: '8px', height: '8px',
          backgroundColor: 'var(--blue)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
          marginTop: '-4px', marginLeft: '-4px'
        }} 
      />
      {/* The outer trailing ring */}
      <div 
        ref={ringRef} 
        className="cursor-ring" 
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: '36px', height: '36px',
          border: '1.5px solid rgba(37,99,235,0.4)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99998,
          marginTop: '-18px', marginLeft: '-18px',
          transition: 'width 0.3s, height 0.3s, background 0.3s, border-color 0.3s'
        }} 
      />
      
      {/* CSS for the hover state */}
      <style>{`
        .cursor-ring.hovering {
          width: 52px !important;
          height: 52px !important;
          background: rgba(37,99,235,0.06);
          border-color: var(--blue);
          margin-top: -26px !important;
          margin-left: -26px !important;
        }
      `}</style>
    </>
  );
}
