'use client';
import { useEffect, useState } from 'react';

function msToEndOfMonth() {
  const now = new Date();
  const end = new Date(now.getFullYear(), now.getMonth() + 1, 1, 0, 0, 0, 0);
  return end.getTime() - now.getTime();
}

function formatMs(ms: number) {
  const total = Math.max(0, Math.floor(ms / 1000));
  const s = total % 60;
  const m = Math.floor(total / 60) % 60;
  const h = Math.floor(total / 3600) % 24;
  const d = Math.floor(total / 86400);
  return { d, h, m, s };
}

export default function CountdownTimer() {
  const [parts, setParts] = useState<ReturnType<typeof formatMs> | null>(null);

  useEffect(() => {
    if (window.innerWidth < 768) return; // hide countdown on mobile — 1s re-render is too expensive
    setParts(formatMs(msToEndOfMonth()));
    const id = setInterval(() => setParts(formatMs(msToEndOfMonth())), 1000);
    return () => clearInterval(id);
  }, []);

  if (!parts) return null;

  const unit = (val: number, label: string) => (
    <div style={{ textAlign: 'center', minWidth: 44 }}>
      <div style={{
        fontSize: '1.5rem', fontWeight: 800, color: 'var(--t1)',
        fontFamily: 'var(--font-mono, monospace)', lineHeight: 1,
        tabularNums: 'tabular-nums',
      } as React.CSSProperties}>
        {String(val).padStart(2, '0')}
      </div>
      <div className="font-mono" style={{ fontSize: '.55rem', color: 'var(--t3)', letterSpacing: '.1em', textTransform: 'uppercase', marginTop: '.25rem' }}>
        {label}
      </div>
    </div>
  );

  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexWrap: 'wrap', gap: '.5rem', marginBottom: '2rem',
    }}>
      <span className="font-mono" style={{ fontSize: '.72rem', color: 'var(--t3)', letterSpacing: '.1em', textTransform: 'uppercase', marginRight: '.5rem' }}>
        Offer resets in:
      </span>
      <div style={{ display: 'flex', alignItems: 'center', gap: '.25rem' }}>
        {unit(parts.d, 'days')}
        <span style={{ color: 'var(--t3)', fontWeight: 700, fontSize: '1.2rem', marginBottom: '1rem' }}>:</span>
        {unit(parts.h, 'hrs')}
        <span style={{ color: 'var(--t3)', fontWeight: 700, fontSize: '1.2rem', marginBottom: '1rem' }}>:</span>
        {unit(parts.m, 'min')}
        <span style={{ color: 'var(--t3)', fontWeight: 700, fontSize: '1.2rem', marginBottom: '1rem' }}>:</span>
        {unit(parts.s, 'sec')}
      </div>
    </div>
  );
}
