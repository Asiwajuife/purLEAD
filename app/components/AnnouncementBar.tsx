'use client';
import { useEffect, useState } from 'react';

export default function AnnouncementBar() {
  const [gone, setGone] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('ann-gone')) {
      setGone(true);
    } else {
      document.body.classList.add('has-ann');
    }
  }, []);

  function dismiss() {
    setGone(true);
    document.body.classList.remove('has-ann');
    sessionStorage.setItem('ann-gone', '1');
  }

  return (
    <div id="ann-bar" className={gone ? 'gone' : ''}>
      <div className="max-w-6xl mx-auto px-4 w-full flex items-center justify-between gap-3">
        <div style={{ flex: 1 }} />
        <div className="flex items-center gap-3 text-center" style={{ color: '#0B1F3A' }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#0B1F3A', opacity: .6, animation: 'ldot 1.5s infinite', flexShrink: 0, display: 'inline-block' }} />
          <span style={{ fontFamily: 'var(--font-syne)', fontSize: '.8rem', fontWeight: 700, letterSpacing: '.01em' }}>
            Only <strong>3 client spots</strong> left this month &mdash;{' '}
            <a href="https://calendly.com/atanseiyeifeoluwa" target="_blank" rel="noopener noreferrer"
               style={{ color: '#0B1F3A', textDecoration: 'underline', textUnderlineOffset: 2, fontWeight: 800 }}>
              Book your call now &rarr;
            </a>
          </span>
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <button onClick={dismiss} aria-label="Dismiss"
            style={{ background: 'rgba(11,31,58,.15)', border: 'none', color: '#0B1F3A', width: 22, height: 22, borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.9rem', cursor: 'pointer', flexShrink: 0, lineHeight: 1 }}>
            &#10005;
          </button>
        </div>
      </div>
    </div>
  );
}
