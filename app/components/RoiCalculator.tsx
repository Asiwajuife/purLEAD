'use client';
import { useState, useCallback, useEffect, useRef } from 'react';

function fmt(n: number) {
  if (n >= 1000000) return '$' + (n/1000000).toFixed(1) + 'M';
  if (n >= 1000)    return '$' + Math.round(n/1000) + 'K';
  return '$' + n;
}

function easeOut(t: number) { return 1 - Math.pow(1 - t, 3); }

function animateValue(
  from: number, to: number, duration: number,
  onUpdate: (v: number) => void, onDone?: () => void,
) {
  const start = performance.now();
  function tick(now: number) {
    const p = Math.min((now - start) / duration, 1);
    onUpdate(Math.round(from + (to - from) * easeOut(p)));
    if (p < 1) requestAnimationFrame(tick);
    else onDone?.();
  }
  requestAnimationFrame(tick);
}

export default function RoiCalculator() {
  const [deal,  setDeal]  = useState(15000);
  const [close, setClose] = useState(20);
  const [meet,  setMeet]  = useState(15);
  const [plan,  setPlan]  = useState(1997);

  const monthly = Math.round(deal * (close/100) * meet);
  const annual  = monthly * 12;
  const roi     = Math.round(monthly / plan);

  /* Animated display values */
  const [dispMonthly, setDispMonthly] = useState(0);
  const [dispAnnual,  setDispAnnual]  = useState(0);
  const [dispRoi,     setDispRoi]     = useState(0);
  const [popClass,    setPopClass]    = useState('');

  const sectionRef  = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);
  const prevMonthly = useRef(monthly);

  /* Scroll-triggered first animation */
  useEffect(() => {
    if (hasAnimated.current) return;
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || hasAnimated.current) return;
      hasAnimated.current = true;
      obs.disconnect();
      const dur = 1200;
      animateValue(0, monthly, dur, setDispMonthly);
      animateValue(0, annual,  dur, setDispAnnual);
      animateValue(0, roi,     dur, setDispRoi, () => {
        setPopClass('pop');
        setTimeout(() => setPopClass(''), 400);
      });
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* After initial animation, keep display in sync with slider changes */
  useEffect(() => {
    if (!hasAnimated.current) return;
    if (monthly === prevMonthly.current) return;
    prevMonthly.current = monthly;
    setDispMonthly(monthly);
    setDispAnnual(annual);
    setDispRoi(roi);
    setPopClass('pop');
    setTimeout(() => setPopClass(''), 400);
  }, [monthly, annual, roi]);

  const slider = useCallback((label: string, id: string, min: number, max: number, step: number,
    val: number, set: (n:number) => void, display: string, minLabel: string, maxLabel: string) => (
    <div>
      <div className="flex justify-between items-center mb-1">
        <span className="font-mono text-xs" style={{ color: 'var(--t3)', letterSpacing: '.1em', textTransform: 'uppercase' }}>{label}</span>
        <span className="font-display font-bold text-sm" style={{ color: 'var(--t1)' }}>{display}</span>
      </div>
      <input type="range" id={id} className="roi-range" min={min} max={max} step={step} value={val}
        onChange={e => set(+e.target.value)} />
      <div className="flex justify-between font-mono text-xs" style={{ color: 'var(--t3)' }}>
        <span>{minLabel}</span><span>{maxLabel}</span>
      </div>
    </div>
  ), []);

  const outStyle = (extra?: React.CSSProperties): React.CSSProperties => ({
    transition: 'transform .15s',
    ...(popClass ? { animation: 'countPop .35s cubic-bezier(.16,1,.3,1)' } : {}),
    ...extra,
  });

  return (
    <section ref={sectionRef} className="z1 py-24 light-section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        aria-hidden="true"
        src="https://img.freepik.com/premium-vector/abstract-artificial-intelligence-brain_33403-43.jpg"
        alt=""
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', zIndex: 0 }}
      />
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, zIndex: 0,
        background: 'rgba(255,255,255,0.6)',
      }} />
      <div className="max-w-4xl mx-auto px-6" style={{ position: 'relative', zIndex: 1 }}>
        <div className="rev mb-10">
          <div className="lbl" style={{ color: '#0F172A', borderColor: 'rgba(0,0,0,0.15)' }}>ROI Calculator</div>
          <h2 style={{ fontSize: 'clamp(1.35rem,2.4vw,1.9rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-.02em', marginBottom: '.6rem', color: '#0F172A' }}>
            See your numbers<br /><span style={{ color: 'var(--acc)' }}>before you commit.</span>
          </h2>
          <p style={{ color: '#334155', fontSize: '.9375rem', maxWidth: '48ch' }}>Move the sliders to match your business. The math updates instantly.</p>
        </div>
        <div className="rev card p-7">
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-6 mb-8">
            {slider('Avg. Deal Value',    'roi-deal',  2000, 150000, 1000, deal,  setDeal,  fmt(deal),               '$2k',     '$150k')}
            {slider('Close Rate',         'roi-close', 5,    60,     1,    close, setClose, close + '%',             '5%',      '60%')}
            {slider('Meetings / Month',   'roi-meet',  5,    45,     1,    meet,  setMeet,  String(meet),            '5',       '45')}
            {slider('Monthly Plan Cost',  'roi-plan',  997,  3997,   1000, plan,  setPlan,  '$' + plan.toLocaleString(), 'Starter', 'Scale')}
          </div>
          <hr style={{ border: 'none', borderTop: '1px solid var(--border)', marginBottom: '1.5rem' }} />
          <div className="grid grid-cols-3 gap-3">
            <div className="roi-out">
              <div className="roi-big roi-green" style={outStyle()}>{fmt(dispMonthly)}</div>
              <div className="font-mono text-xs" style={{ color: 'var(--t3)', textTransform: 'uppercase', letterSpacing: '.07em', marginTop: '.3rem' }}>Monthly Revenue</div>
            </div>
            <div className="roi-out">
              <div className="roi-big roi-white" style={outStyle()}>{fmt(dispAnnual)}</div>
              <div className="font-mono text-xs" style={{ color: 'var(--t3)', textTransform: 'uppercase', letterSpacing: '.07em', marginTop: '.3rem' }}>Annual Pipeline</div>
            </div>
            <div className="roi-out">
              <div className="roi-big roi-green" style={outStyle()}>{dispRoi}x</div>
              <div className="font-mono text-xs" style={{ color: 'var(--t3)', textTransform: 'uppercase', letterSpacing: '.07em', marginTop: '.3rem' }}>Return on Investment</div>
            </div>
          </div>
          <p className="mt-4 text-xs" style={{ color: 'var(--t3)' }}>Based on conservative estimates. Actual results depend on your offer, ICP, and market conditions.</p>
        </div>
      </div>
    </section>
  );
}
