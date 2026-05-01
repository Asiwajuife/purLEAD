'use client';
import { useEffect, useState } from 'react';

const CALENDLY = 'https://calendly.com/atanseiyeifeoluwa';

export default function ConversionLayer() {
  const [showBar, setShowBar] = useState(false);

  /* Sticky bottom bar — show after scrolling 600px */
  useEffect(() => {
    if (window.innerWidth < 768) return;
    function onScroll() { setShowBar(window.scrollY > 600); }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Sticky bottom bar */}
      <div
        role="complementary"
        aria-label="Book a call banner"
        style={{
          position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 47,
          background: 'rgba(7,15,28,0.92)', backdropFilter: 'blur(14px)',
          borderTop: '1px solid rgba(0,209,255,0.18)',
          padding: '.875rem 1.5rem',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem',
          transform: showBar ? 'translateY(0)' : 'translateY(100%)',
          transition: 'transform .4s cubic-bezier(.16,1,.3,1)',
        }}
      >
        <p style={{ fontSize: '.875rem', color: 'var(--t2)', fontWeight: 500, flex: 1, minWidth: 0 }}>
          <span style={{ color: 'var(--t1)', fontWeight: 700 }}>Ready to fill your calendar?</span>
          <span className="sticky-bar-hint">{' '}Book a 15-min strategy call — free.</span>
        </p>
        <a href={CALENDLY} target="_blank" rel="noopener noreferrer"
           className="btn-p text-sm px-5 py-2.5 whitespace-nowrap" style={{ flexShrink: 0 }}>
          Book a Call →
        </a>
      </div>
    </>
  );
}
