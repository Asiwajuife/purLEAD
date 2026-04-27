'use client';
import { useState, useEffect, useRef } from 'react';

/* ── Animated SVG illustrations ─────────────────────────────────────── */

function IllustrationAI() {
  return (
    <svg viewBox="0 0 200 140" width="100%" height="100%" style={{ overflow: 'visible' }}>
      <style>{`
        @keyframes typeLine { from { width: 0 } to { width: 100% } }
        @keyframes blinkCursor { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes fadeInRow { from{opacity:0;transform:translateY(6px)} to{opacity:1;transform:none} }
        .ai-row1 { animation: fadeInRow .5s .1s both }
        .ai-row2 { animation: fadeInRow .5s .45s both }
        .ai-row3 { animation: fadeInRow .5s .8s both }
        .ai-cursor { animation: blinkCursor 1s infinite }
      `}</style>
      {/* Card bg */}
      <rect x="10" y="10" width="180" height="120" rx="10" fill="rgba(13,36,68,0.8)" stroke="rgba(0,209,255,0.3)" strokeWidth="1"/>
      {/* Header bar */}
      <rect x="10" y="10" width="180" height="28" rx="10" fill="rgba(0,209,255,0.08)"/>
      <rect x="10" y="28" width="180" height="10" fill="rgba(0,209,255,0.08)"/>
      <circle cx="26" cy="24" r="5" fill="rgba(0,209,255,0.5)"/>
      <rect x="36" y="20" width="60" height="8" rx="3" fill="rgba(148,163,184,0.35)"/>
      {/* Row 1 */}
      <g className="ai-row1">
        <rect x="22" y="46" width="14" height="14" rx="3" fill="rgba(232,184,75,0.15)" stroke="rgba(232,184,75,0.4)" strokeWidth="1"/>
        <text x="29" y="57" textAnchor="middle" fontSize="8" fill="#E8B84B">AI</text>
        <rect x="42" y="49" width="90" height="7" rx="2" fill="rgba(0,209,255,0.25)"/>
        <rect x="138" y="49" width="40" height="7" rx="2" fill="rgba(148,163,184,0.15)"/>
      </g>
      {/* Row 2 */}
      <g className="ai-row2">
        <rect x="22" y="68" width="14" height="14" rx="3" fill="rgba(168,139,250,0.15)" stroke="rgba(168,139,250,0.4)" strokeWidth="1"/>
        <text x="29" y="79" textAnchor="middle" fontSize="8" fill="#a78bfa">✦</text>
        <rect x="42" y="71" width="70" height="7" rx="2" fill="rgba(168,139,250,0.3)"/>
        <rect x="118" y="71" width="30" height="7" rx="2" fill="rgba(148,163,184,0.15)"/>
        <rect x="154" y="71" width="24" height="7" rx="2" fill="rgba(148,163,184,0.15)"/>
      </g>
      {/* Row 3 — typing */}
      <g className="ai-row3">
        <rect x="22" y="90" width="14" height="14" rx="3" fill="rgba(34,197,94,0.12)" stroke="rgba(34,197,94,0.35)" strokeWidth="1"/>
        <text x="29" y="101" textAnchor="middle" fontSize="8" fill="#22C55E">→</text>
        <rect x="42" y="93" width="55" height="7" rx="2" fill="rgba(34,197,94,0.25)"/>
        <rect x="97" y="93" width="4" height="7" rx="1" fill="#22C55E" className="ai-cursor"/>
      </g>
      {/* Badge */}
      <rect x="22" y="113" width="90" height="11" rx="5" fill="rgba(0,209,255,0.08)" stroke="rgba(0,209,255,0.2)" strokeWidth="1"/>
      <text x="67" y="121" textAnchor="middle" fontSize="6.5" fill="rgba(0,209,255,0.7)" fontFamily="monospace">PERSONALIZED · NOT A TEMPLATE</text>
    </svg>
  );
}

function IllustrationCalendar() {
  const slots = [
    { cx: 46, booked: true  },
    { cx: 82, booked: true  },
    { cx: 118, booked: false },
    { cx: 154, booked: false },
    { cx: 46,  cy2: 95, booked: true  },
    { cx: 82,  cy2: 95, booked: true  },
    { cx: 118, cy2: 95, booked: true  },
    { cx: 154, cy2: 95, booked: false },
  ];
  return (
    <svg viewBox="0 0 200 140" width="100%" height="100%">
      <style>{`
        @keyframes slotFill { from{opacity:0;transform:scaleX(0)} to{opacity:1;transform:scaleX(1)} }
        .slot-b { transform-origin: left center; animation: slotFill .4s both }
        .s1{animation-delay:.1s}.s2{animation-delay:.3s}.s3{animation-delay:.5s}
        .s4{animation-delay:.7s}.s5{animation-delay:.2s}.s6{animation-delay:.4s}.s7{animation-delay:.6s}
      `}</style>
      <rect x="10" y="10" width="180" height="120" rx="10" fill="rgba(13,36,68,0.8)" stroke="rgba(0,209,255,0.3)" strokeWidth="1"/>
      {/* Calendar header */}
      <rect x="10" y="10" width="180" height="24" rx="10" fill="rgba(232,184,75,0.1)"/>
      <rect x="10" y="24" width="180" height="10" fill="rgba(232,184,75,0.1)"/>
      <text x="100" y="26" textAnchor="middle" fontSize="9" fill="#E8B84B" fontWeight="bold">APRIL 2025</text>
      {/* Day headers */}
      {['M','T','W','T','F'].map((d,i) => (
        <text key={i} x={28 + i * 36} y="46" textAnchor="middle" fontSize="7" fill="rgba(148,163,184,0.5)" fontFamily="monospace">{d}</text>
      ))}
      {/* Row 1 slots */}
      {[
        { x: 10, w: 32, booked: true,  delay: '.1s'  },
        { x: 46, w: 32, booked: true,  delay: '.3s'  },
        { x: 82, w: 32, booked: false, delay: '.5s'  },
        { x: 118,w: 32, booked: false, delay: '.7s'  },
        { x: 154,w: 32, booked: false, delay: '.0s'  },
      ].map((s, i) => (
        <g key={i}>
          <rect x={s.x + 10} y="52" width={s.w} height="16" rx="4"
            fill={s.booked ? 'rgba(0,209,255,0.12)' : 'rgba(255,255,255,0.03)'}
            stroke={s.booked ? 'rgba(0,209,255,0.4)' : 'rgba(255,255,255,0.08)'} strokeWidth="1"/>
          {s.booked && (
            <text x={s.x + 26} y="63" textAnchor="middle" fontSize="6.5" fill="#00D1FF" className={`slot-b s${i+1}`} style={{ animationDelay: s.delay }}>✓ call</text>
          )}
        </g>
      ))}
      {/* Row 2 slots */}
      {[
        { x: 10, w: 32, booked: true,  delay: '.2s' },
        { x: 46, w: 32, booked: true,  delay: '.4s' },
        { x: 82, w: 32, booked: true,  delay: '.6s' },
        { x: 118,w: 32, booked: true,  delay: '.8s' },
        { x: 154,w: 32, booked: false, delay: '.0s' },
      ].map((s, i) => (
        <g key={i}>
          <rect x={s.x + 10} y="76" width={s.w} height="16" rx="4"
            fill={s.booked ? 'rgba(34,197,94,0.1)' : 'rgba(255,255,255,0.03)'}
            stroke={s.booked ? 'rgba(34,197,94,0.35)' : 'rgba(255,255,255,0.08)'} strokeWidth="1"/>
          {s.booked && (
            <text x={s.x + 26} y="87" textAnchor="middle" fontSize="6.5" fill="#22C55E" className={`slot-b s${i+1}`} style={{ animationDelay: s.delay }}>booked</text>
          )}
        </g>
      ))}
      <rect x="22" y="103" width="156" height="1" fill="rgba(0,209,255,0.12)"/>
      <text x="100" y="117" textAnchor="middle" fontSize="7.5" fill="rgba(0,209,255,0.6)" fontFamily="monospace">7 CALLS BOOKED THIS WEEK</text>
    </svg>
  );
}

function IllustrationChart() {
  const bars = [22, 34, 28, 46, 40, 58, 72, 68, 84, 96];
  const maxH = 60;
  return (
    <svg viewBox="0 0 200 140" width="100%" height="100%">
      <style>{`
        @keyframes growBar { from{transform:scaleY(0)} to{transform:scaleY(1)} }
        .bar-g { transform-origin: bottom center }
        .b0{animation:growBar .4s .05s both} .b1{animation:growBar .4s .12s both}
        .b2{animation:growBar .4s .19s both} .b3{animation:growBar .4s .26s both}
        .b4{animation:growBar .4s .33s both} .b5{animation:growBar .4s .4s both}
        .b6{animation:growBar .4s .47s both} .b7{animation:growBar .4s .54s both}
        .b8{animation:growBar .4s .61s both} .b9{animation:growBar .4s .68s both}
        @keyframes drawLine { from{stroke-dashoffset:300} to{stroke-dashoffset:0} }
        .trend-line { stroke-dasharray:300; animation: drawLine 1s .8s both }
      `}</style>
      <rect x="10" y="10" width="180" height="120" rx="10" fill="rgba(13,36,68,0.8)" stroke="rgba(0,209,255,0.3)" strokeWidth="1"/>
      {/* Grid lines */}
      {[0,1,2,3].map(i => (
        <line key={i} x1="28" y1={30 + i * 17} x2="185" y2={30 + i * 17} stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
      ))}
      {/* Bars */}
      {bars.map((v, i) => {
        const h = (v / 100) * maxH;
        const x = 32 + i * 16;
        const y = 96 - h;
        const isLast = i === bars.length - 1;
        return (
          <g key={i}>
            <rect x={x} y={y} width="10" height={h} rx="2"
              fill={isLast ? 'rgba(232,184,75,0.5)' : 'rgba(0,209,255,0.25)'}
              stroke={isLast ? 'rgba(232,184,75,0.8)' : 'rgba(0,209,255,0.5)'}
              strokeWidth="1"
              className={`bar-g b${i}`}/>
          </g>
        );
      })}
      {/* Trend line */}
      <polyline
        className="trend-line"
        points={bars.map((v, i) => `${37 + i * 16},${96 - (v / 100) * maxH}`).join(' ')}
        fill="none" stroke="rgba(34,197,94,0.7)" strokeWidth="1.5" strokeLinejoin="round"/>
      {/* Axis */}
      <line x1="28" y1="97" x2="185" y2="97" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
      {/* Labels */}
      <text x="32" y="110" fontSize="6" fill="rgba(148,163,184,0.45)" fontFamily="monospace">W1</text>
      <text x="145" y="110" fontSize="6" fill="rgba(148,163,184,0.45)" fontFamily="monospace">W10</text>
      <text x="100" y="124" textAnchor="middle" fontSize="7" fill="rgba(34,197,94,0.7)" fontFamily="monospace">+337% REPLY RATE GROWTH</text>
    </svg>
  );
}

function IllustrationTarget() {
  return (
    <svg viewBox="0 0 200 140" width="100%" height="100%">
      <style>{`
        @keyframes pingRing { 0%{transform:scale(.6);opacity:1} 100%{transform:scale(1.6);opacity:0} }
        @keyframes arrowFly { 0%{transform:translate(-50px,-20px) rotate(30deg);opacity:0} 60%{opacity:1} 100%{transform:translate(0,0) rotate(0deg);opacity:1} }
        .ring1 { animation: pingRing 2s .2s ease-out infinite }
        .ring2 { animation: pingRing 2s .8s ease-out infinite }
        .arrow { animation: arrowFly .7s .3s cubic-bezier(.16,1,.3,1) both }
      `}</style>
      <rect x="10" y="10" width="180" height="120" rx="10" fill="rgba(13,36,68,0.8)" stroke="rgba(0,209,255,0.3)" strokeWidth="1"/>
      {/* Target rings */}
      <circle cx="100" cy="65" r="44" fill="none" stroke="rgba(0,209,255,0.08)" strokeWidth="1.5"/>
      <circle cx="100" cy="65" r="32" fill="none" stroke="rgba(0,209,255,0.13)" strokeWidth="1.5"/>
      <circle cx="100" cy="65" r="20" fill="none" stroke="rgba(0,209,255,0.22)" strokeWidth="1.5"/>
      <circle cx="100" cy="65" r="9"  fill="rgba(232,184,75,0.2)" stroke="rgba(232,184,75,0.7)" strokeWidth="1.5"/>
      <circle cx="100" cy="65" r="9" className="ring1" fill="none" stroke="rgba(232,184,75,0.4)" strokeWidth="1.5"/>
      <circle cx="100" cy="65" r="9" className="ring2" fill="none" stroke="rgba(0,209,255,0.35)" strokeWidth="1.5"/>
      {/* Arrow */}
      <g className="arrow">
        <line x1="68" y1="65" x2="95" y2="65" stroke="#E8B84B" strokeWidth="2.5" strokeLinecap="round"/>
        <polyline points="90,61 96,65 90,69" fill="none" stroke="#E8B84B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      {/* Tags around */}
      {[
        { x: 22, y: 28, label: 'ICP Match', color: 'rgba(0,209,255,0.6)' },
        { x: 125, y: 28, label: 'Decision Maker', color: 'rgba(168,139,250,0.7)' },
        { x: 22, y: 100, label: 'Verified Email', color: 'rgba(34,197,94,0.65)' },
        { x: 130, y: 100, label: 'Intent Signal', color: 'rgba(232,184,75,0.7)' },
      ].map((t, i) => (
        <g key={i}>
          <rect x={t.x} y={t.y} width={t.label.length * 5.4} height="12" rx="4"
            fill="rgba(13,36,68,0.7)" stroke={t.color.replace('0.', 'rgba(').split('rgba(')[0] || t.color} strokeWidth="0.5"
            style={{ stroke: t.color }}/>
          <text x={t.x + 4} y={t.y + 8.5} fontSize="6.5" fill={t.color} fontFamily="monospace">{t.label}</text>
        </g>
      ))}
      <text x="100" y="122" textAnchor="middle" fontSize="7" fill="rgba(148,163,184,0.5)" fontFamily="monospace">2,400 VERIFIED PROSPECTS/MO</text>
    </svg>
  );
}

function IllustrationReport() {
  return (
    <svg viewBox="0 0 200 140" width="100%" height="100%">
      <style>{`
        @keyframes countUp { from{opacity:0} to{opacity:1} }
        .r1{animation:countUp .3s .1s both} .r2{animation:countUp .3s .3s both}
        .r3{animation:countUp .3s .5s both} .r4{animation:countUp .3s .7s both}
        @keyframes fillBar2 { from{width:0} to{width:var(--w)} }
        .fill-bar { animation: fillBar2 .6s cubic-bezier(.16,1,.3,1) both }
      `}</style>
      <rect x="10" y="10" width="180" height="120" rx="10" fill="rgba(13,36,68,0.8)" stroke="rgba(0,209,255,0.3)" strokeWidth="1"/>
      <rect x="10" y="10" width="180" height="26" rx="10" fill="rgba(0,209,255,0.06)"/>
      <rect x="10" y="26" width="180" height="10" fill="rgba(0,209,255,0.06)"/>
      <text x="22" y="27" fontSize="8.5" fill="rgba(0,209,255,0.8)" fontWeight="bold">WEEKLY PERFORMANCE REPORT</text>
      {[
        { label: 'Emails Sent',    val: '1,840', bar: 92, color: '#00D1FF', cls: 'r1', delay: '.2s' },
        { label: 'Open Rate',      val: '47%',   bar: 47, color: '#E8B84B', cls: 'r2', delay: '.4s' },
        { label: 'Positive Replies',val: '6.2%', bar: 62, color: '#22C55E', cls: 'r3', delay: '.6s' },
        { label: 'Calls Booked',   val: '11',    bar: 55, color: '#a78bfa', cls: 'r4', delay: '.8s' },
      ].map((row, i) => (
        <g key={i} className={row.cls}>
          <text x="22" y={50 + i * 20} fontSize="7.5" fill="var(--t2, rgba(148,163,184,0.8))">{row.label}</text>
          <text x="178" y={50 + i * 20} textAnchor="end" fontSize="8" fill={row.color} fontWeight="bold">{row.val}</text>
          <rect x="22" y={53 + i * 20} width="156" height="5" rx="2" fill="rgba(255,255,255,0.05)"/>
          <rect x="22" y={53 + i * 20} width={`${row.bar * 1.56}`} height="5" rx="2" fill={row.color}
            className="fill-bar" style={{ '--w': `${row.bar * 1.56}px`, animationDelay: row.delay } as React.CSSProperties}/>
        </g>
      ))}
    </svg>
  );
}

function IllustrationOptimize() {
  return (
    <svg viewBox="0 0 200 140" width="100%" height="100%">
      <style>{`
        @keyframes orbit { from{transform:rotate(0deg) translateX(32px)} to{transform:rotate(360deg) translateX(32px)} }
        @keyframes orbitR { from{transform:rotate(180deg) translateX(24px)} to{transform:rotate(540deg) translateX(24px)} }
        @keyframes pulse2 { 0%,100%{opacity:.7;r:6} 50%{opacity:1;r:8} }
        .orb1 { transform-origin:100px 68px; animation: orbit 4s linear infinite }
        .orb2 { transform-origin:100px 68px; animation: orbitR 3s linear infinite }
      `}</style>
      <rect x="10" y="10" width="180" height="120" rx="10" fill="rgba(13,36,68,0.8)" stroke="rgba(0,209,255,0.3)" strokeWidth="1"/>
      {/* Center brain node */}
      <circle cx="100" cy="68" r="16" fill="rgba(0,209,255,0.08)" stroke="rgba(0,209,255,0.4)" strokeWidth="1.5"/>
      <text x="100" y="73" textAnchor="middle" fontSize="14">🧠</text>
      {/* Orbit rings */}
      <circle cx="100" cy="68" r="32" fill="none" stroke="rgba(0,209,255,0.1)" strokeWidth="1" strokeDasharray="4 4"/>
      <circle cx="100" cy="68" r="24" fill="none" stroke="rgba(168,139,250,0.1)" strokeWidth="1" strokeDasharray="3 5"/>
      {/* Orbiting nodes */}
      <g className="orb1">
        <circle cx="100" cy="68" r="6" fill="rgba(0,209,255,0.2)" stroke="rgba(0,209,255,0.7)" strokeWidth="1.2"/>
        <text x="100" y="71.5" textAnchor="middle" fontSize="7">A/B</text>
      </g>
      <g className="orb2">
        <circle cx="100" cy="68" r="5" fill="rgba(34,197,94,0.2)" stroke="rgba(34,197,94,0.7)" strokeWidth="1.2"/>
        <text x="100" y="71" textAnchor="middle" fontSize="6.5">↑</text>
      </g>
      {/* Corner stats */}
      {[
        { x: 16,  y: 20, val: '+9%',  label: 'reply', color: '#22C55E' },
        { x: 140, y: 20, val: '3×',   label: 'tests',  color: '#00D1FF' },
        { x: 16,  y: 108,val: '−12%', label: 'bounce', color: '#E8B84B' },
        { x: 140, y: 108,val: '↑41%', label: 'open',   color: '#a78bfa' },
      ].map((s, i) => (
        <g key={i}>
          <text x={s.x} y={s.y + 9} fontSize="10" fill={s.color} fontWeight="bold">{s.val}</text>
          <text x={s.x} y={s.y + 18} fontSize="6.5" fill="rgba(148,163,184,0.5)" fontFamily="monospace">{s.label}</text>
        </g>
      ))}
      <text x="100" y="122" textAnchor="middle" fontSize="7" fill="rgba(0,209,255,0.5)" fontFamily="monospace">SELF-IMPROVING EVERY WEEK</text>
    </svg>
  );
}

/* ── Tab data ───────────────────────────────────────────────────────── */

const tabs = [
  {
    id: 'ai',
    title: 'AI-Personalized at Scale',
    body: 'Every email references something real — company news, role, recent activity, or pain point. Not a mail-merge. Actual intelligence applied to every prospect.',
    illustration: <IllustrationAI />,
  },
  {
    id: 'booked',
    title: 'Calls Booked, Not Just Leads',
    body: "We don't hand you a list and call it a day. We manage responses and get qualified prospects scheduled so you show up and close.",
    illustration: <IllustrationCalendar />,
  },
  {
    id: 'fast',
    title: 'Faster Than Any Hire',
    body: 'An SDR takes 90 days to ramp. purLEAD is live in 2 weeks and booking in 30. No recruiting, no onboarding, no overhead.',
    illustration: <IllustrationChart />,
  },
  {
    id: 'target',
    title: 'Precision Targeting',
    body: 'We build targeted, verified prospect lists from premium data sources. Only real decision-makers matching your ICP enter the pipeline.',
    illustration: <IllustrationTarget />,
  },
  {
    id: 'report',
    title: 'Full Accountability',
    body: 'Weekly reporting. Transparent metrics. You always know what\'s sending, what\'s working, and what we\'re optimizing. No black boxes.',
    illustration: <IllustrationReport />,
  },
  {
    id: 'optimize',
    title: 'Continuously Optimized',
    body: 'Our system learns as it runs. We test, iterate, and improve reply rates every week. Your outbound gets sharper over time, not stale.',
    illustration: <IllustrationOptimize />,
  },
];

/* ── Main component ─────────────────────────────────────────────────── */

export default function WhyPurLEADSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused || window.innerWidth < 768) return;
    timerRef.current = setInterval(() => {
      setActive(a => (a + 1) % tabs.length);
    }, 4000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused]);

  function select(i: number) {
    setActive(i);
    setPaused(true);
  }

  const t = tabs[active];

  return (
    <section className="z1 py-24 light-section">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rev mb-10">
          <div className="lbl">Why purLEAD</div>
          <h2 style={{ fontSize: 'clamp(1.35rem,2.4vw,1.9rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-.02em' }}>
            Built for businesses<br />serious about <span style={{ color: 'var(--acc)' }}>growth.</span>
          </h2>
        </div>

        <div className="rev" style={{ transitionDelay: '.08s' }}>
          {/* Tab pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem', marginBottom: '1.5rem' }}>
            {tabs.map((tab, i) => (
              <button
                key={tab.id}
                onClick={() => select(i)}
                style={{
                  padding: '.4rem 1rem',
                  borderRadius: 100,
                  fontSize: '.75rem',
                  fontFamily: 'var(--font-mono, monospace)',
                  letterSpacing: '.04em',
                  cursor: 'pointer',
                  transition: 'all .25s',
                  border: active === i ? '1px solid rgba(0,209,255,0.55)' : '1px solid rgba(255,255,255,0.1)',
                  background: active === i ? 'rgba(0,209,255,0.1)' : 'rgba(255,255,255,0.03)',
                  color: active === i ? 'var(--acc)' : 'var(--t3)',
                  fontWeight: active === i ? 600 : 400,
                }}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Active panel */}
          <div key={active} className="why-panel" style={{
            background: 'rgba(13,36,68,0.6)',
            border: '1px solid rgba(0,209,255,0.18)',
            borderTop: '2px solid rgba(0,209,255,0.4)',
            borderRadius: 16,
            backdropFilter: 'blur(12px)',
            padding: '2rem',
            animation: 'fadeSlideDown .3s cubic-bezier(.16,1,.3,1) forwards',
          }}>
            {/* Left: copy */}
            <div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '.4rem',
                background: 'rgba(0,209,255,0.06)', border: '1px solid rgba(0,209,255,0.18)',
                borderRadius: 100, padding: '.2rem .75rem', marginBottom: '1rem',
                fontSize: '.65rem', color: 'var(--acc)', letterSpacing: '.1em',
                fontFamily: 'monospace', textTransform: 'uppercase',
              }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--acc)', flexShrink: 0, animation: 'pulseRing 2s infinite' }} />
                {String(active + 1).padStart(2, '0')} / {String(tabs.length).padStart(2, '0')}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--t1)', lineHeight: 1.2, marginBottom: '.875rem', letterSpacing: '-.01em' }}>
                {t.title}
              </h3>
              <p style={{ fontSize: '.9rem', lineHeight: 1.7, color: 'var(--t2)', marginBottom: '1.5rem' }}>
                {t.body}
              </p>
              {/* Progress dots */}
              <div style={{ display: 'flex', gap: '.375rem', alignItems: 'center' }}>
                {tabs.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => select(i)}
                    style={{
                      width: active === i ? 20 : 6,
                      height: 6,
                      borderRadius: 3,
                      background: active === i ? 'var(--acc)' : 'rgba(255,255,255,0.15)',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all .3s',
                      padding: 0,
                    }}
                    aria-label={tabs[i].title}
                  />
                ))}
                {!paused && (
                  <span style={{ fontSize: '.6rem', color: 'var(--t3)', fontFamily: 'monospace', marginLeft: '.25rem', letterSpacing: '.06em' }}>
                    AUTO
                  </span>
                )}
              </div>
            </div>

            {/* Right: illustration */}
            <div className="why-panel-illus" style={{
              background: 'rgba(7,15,28,0.5)',
              border: '1px solid rgba(0,209,255,0.1)',
              borderRadius: 12,
              padding: '1rem',
              height: 180,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              {t.illustration}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
