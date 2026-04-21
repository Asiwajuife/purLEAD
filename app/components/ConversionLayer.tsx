'use client';
import { useEffect, useState } from 'react';

const CALENDLY = 'https://calendly.com/atanseiyeifeoluwa';

export default function ConversionLayer() {
  const [showBar, setShowBar] = useState(false);
  const [showExit, setShowExit] = useState(false);

  /* Sticky bottom bar — show after scrolling 600px */
  useEffect(() => {
    function onScroll() { setShowBar(window.scrollY > 600); }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Exit intent — fires once per session */
  useEffect(() => {
    if (sessionStorage.getItem('exitShown')) return;
    function onMouseLeave(e: MouseEvent) {
      if (e.clientY < 20) {
        setShowExit(true);
        sessionStorage.setItem('exitShown', '1');
      }
    }
    document.addEventListener('mouseleave', onMouseLeave);
    return () => document.removeEventListener('mouseleave', onMouseLeave);
  }, []);

  return (
    <>
      {/* Floating Book-a-Call button */}
      <a
        href={CALENDLY} target="_blank" rel="noopener noreferrer"
        className="float-cal-btn"
        aria-label="Book a call"
        style={{ position: 'fixed', bottom: showBar ? '5rem' : '1.75rem', right: '1.75rem', zIndex: 48, transition: 'bottom .3s' }}
      >
        <span className="float-cal-label">Book a Call</span>
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
        <span aria-hidden="true" style={{
          position: 'absolute', inset: -4, borderRadius: '50%',
          border: '2px solid rgba(0,209,255,0.4)',
          animation: 'pulseRing 2.4s ease-out infinite',
          pointerEvents: 'none',
        }} />
      </a>

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
          {' '}Book a 15-min strategy call — free.
        </p>
        <a href={CALENDLY} target="_blank" rel="noopener noreferrer"
           className="btn-p text-sm px-5 py-2.5 whitespace-nowrap" style={{ flexShrink: 0 }}>
          Book a Call →
        </a>
      </div>

      {/* Exit intent popup */}
      {showExit && (
        <div
          role="dialog" aria-modal="true" aria-label="Before you go"
          style={{
            position: 'fixed', inset: 0, zIndex: 60,
            background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '1.5rem',
            animation: 'fadeSlideDown .4s cubic-bezier(.16,1,.3,1) forwards',
          }}
          onClick={e => { if (e.target === e.currentTarget) setShowExit(false); }}
        >
          <div style={{
            background: '#0C2140', border: '1px solid rgba(0,209,255,0.3)',
            borderTop: '2px solid var(--acc)',
            borderRadius: 18, padding: '2.5rem', maxWidth: 460, width: '100%',
            position: 'relative',
          }}>
            <button
              onClick={() => setShowExit(false)}
              aria-label="Close"
              style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', color: 'var(--t3)', cursor: 'pointer', fontSize: '1.25rem', lineHeight: 1 }}>
              ✕
            </button>
            <div className="font-mono" style={{ fontSize: '.62rem', color: 'var(--acc)', letterSpacing: '.14em', marginBottom: '.75rem' }}>WAIT —</div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--t1)', lineHeight: 1.2, marginBottom: '.875rem' }}>
              Don&rsquo;t leave without<br />your free audit.
            </h3>
            <p style={{ fontSize: '.875rem', color: 'var(--t2)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              We&rsquo;ll audit your outbound in 48 hours and show you exactly where you&rsquo;re leaving pipeline on the table — no strings attached.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
              <a href="#free-audit" onClick={() => setShowExit(false)}
                 className="btn-p block text-center py-3" style={{ fontSize: '.9375rem' }}>
                Get My Free Audit →
              </a>
              <button onClick={() => setShowExit(false)}
                style={{ background: 'none', border: 'none', color: 'var(--t3)', fontSize: '.8rem', cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: 3 }}>
                No thanks, I don&rsquo;t want more pipeline
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
