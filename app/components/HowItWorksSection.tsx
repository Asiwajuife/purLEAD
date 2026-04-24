'use client';
import { useState, useEffect, useRef } from 'react';

const steps = [
  {
    n: '01', title: 'Strategy & ICP',
    body: 'We deep-dive your offer, define your Ideal Client Profile, and map your go-to-market targeting strategy.',
    stat: '⚡ Ready in 48 hours',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'stepIconSpin 10s linear infinite' }}>
        <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/>
      </svg>
    ),
  },
  {
    n: '02', title: 'System Build',
    body: 'We configure sending infrastructure, warm domains, enrich prospect lists, and build AI-personalized sequences.',
    stat: '📬 ~2,000 targeted prospects',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'stepIconPulse 2s ease-in-out infinite' }}>
        <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14"/><path d="M16.24 7.76a6 6 0 010 8.49M7.76 7.76a6 6 0 000 8.49"/>
      </svg>
    ),
  },
  {
    n: '03', title: 'Launch & Test',
    body: 'Campaigns go live. We A/B test subject lines, copy angles, and CTAs. AI optimizes on reply signals continuously.',
    stat: '🚀 Live in week 1',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'stepIconBob 1.8s ease-in-out infinite' }}>
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/>
      </svg>
    ),
  },
  {
    n: '04', title: 'Calls on Calendar',
    body: 'Qualified prospects book directly into your calendar. We handle reply management so you can focus on closing.',
    stat: '📈 Avg. 18% reply rate',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'stepIconWag 2.5s ease-in-out infinite' }}>
        <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
  },
];

export default function HowItWorksSection() {
  const [active, setActive] = useState(0);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function goTo(i: number) {
    if (resetTimer.current) clearTimeout(resetTimer.current);
    setActive(i);
    if (i === steps.length - 1) {
      resetTimer.current = setTimeout(() => setActive(0), 2500);
    }
  }

  useEffect(() => () => { if (resetTimer.current) clearTimeout(resetTimer.current); }, []);

  return (
    <section id="how" className="z1 py-24" style={{
      backgroundImage: 'url(https://i0.wp.com/outboundsalespro.com/wp-content/uploads/2025/11/3.jpg?resize=993.75%2C559&ssl=1)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      position: 'relative',
    }}>
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, zIndex: 0,
        background: 'linear-gradient(160deg, rgba(7,15,28,0.88) 0%, rgba(10,28,53,0.83) 100%)',
      }} />
      <div className="max-w-6xl mx-auto px-6" style={{ position: 'relative', zIndex: 1 }}>
        <div className="rev mb-10">
          <div className="lbl">The Process</div>
          <h2 style={{ fontSize: 'clamp(1.35rem,2.4vw,1.9rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-.02em' }}>
            Up and running in <span style={{ color: 'var(--cta)' }}>30 days.</span>
          </h2>
          <p style={{ color: 'var(--t2)', marginTop: '.5rem', fontSize: '.9375rem' }}>Four steps. Click any to explore.</p>
        </div>

        {/* Progress track */}
        <div className="rev how-track mb-7" style={{ transitionDelay: '.05s' }}>
          {/* SVG animated connector */}
          <svg className="how-track-svg" style={{ position: 'absolute', left: '.5rem', right: '.5rem', top: '50%', transform: 'translateY(-50%)', overflow: 'visible', pointerEvents: 'none', width: 'calc(100% - 1rem)', height: 4 }} aria-hidden="true">
            <line x1="0" y1="2" x2="100%" y2="2" stroke="rgba(0,209,255,0.1)" strokeWidth="2" />
            <line x1="0" y1="2" x2={`${(active / (steps.length - 1)) * 100}%`} y2="2"
              stroke="url(#howGrad)" strokeWidth="2" strokeLinecap="round"
              style={{ transition: 'x2 .5s cubic-bezier(.16,1,.3,1)' }} />
            <defs>
              <linearGradient id="howGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#22C55E" />
                <stop offset="100%" stopColor="#00D1FF" />
              </linearGradient>
            </defs>
          </svg>
          {steps.map((s, i) => (
            <button
              key={s.n}
              onClick={() => goTo(i)}
              className={`how-dot${active === i ? ' how-dot-active' : active > i ? ' how-dot-done' : ''}`}
              aria-label={`Step ${s.n}: ${s.title}`}
            >
              <span className="font-mono" style={{ fontSize: '.65rem', fontWeight: 700, lineHeight: 1 }}>{s.n}</span>
            </button>
          ))}
        </div>

        {/* Step cards + visual panel */}
        <div className="grid md:grid-cols-4 gap-8 items-start">
          <div className="md:col-span-3 grid md:grid-cols-4 gap-4">
            {steps.map((step, i) => (
              <div key={step.n} className="rev" style={{ transitionDelay: `${i * .07}s` }}>
              <div
                className={`how-card${active === i ? ' how-active' : active > i ? ' how-done' : ''}`}
                onClick={() => goTo(i)}
              >
                {/* Animated step icon */}
                <div style={{
                  width: 38, height: 38, borderRadius: 8, marginBottom: '.875rem',
                  background: active === i ? 'rgba(0,209,255,0.1)' : 'rgba(0,209,255,0.04)',
                  border: `1px solid ${active === i ? 'rgba(0,209,255,0.4)' : 'rgba(0,209,255,0.14)'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: active === i ? 'var(--acc)' : 'var(--t3)',
                  transition: 'all .3s',
                }}>
                  {step.icon}
                </div>

                <div
                  className="font-mono text-xs mb-2"
                  style={{
                    color: active === i ? 'var(--acc)' : active > i ? 'var(--cta)' : 'var(--t3)',
                    letterSpacing: '.12em', transition: 'color .3s',
                  }}
                >{step.n}</div>

                <div className="how-vline" style={{ background: active >= i ? 'var(--acc)' : 'rgba(255,255,255,0.09)' }} />

                <h3
                  className="font-display font-bold"
                  style={{ color: active === i ? 'var(--t1)' : 'var(--t2)', fontSize: '.9375rem', transition: 'color .3s' }}
                >{step.title}</h3>

                {active === i ? (
                  <>
                    <p className="how-body" style={{ fontSize: '.8375rem', lineHeight: 1.65, color: 'var(--t2)', marginTop: '.75rem' }}>
                      {step.body}
                    </p>
                    <div style={{
                      display: 'inline-block', marginTop: '.875rem',
                      background: 'rgba(0,209,255,0.06)', border: '1px solid rgba(0,209,255,0.18)',
                      borderRadius: 100, padding: '.2rem .875rem',
                      fontSize: '.7rem', color: 'var(--acc)', letterSpacing: '.03em',
                      animation: 'fadeSlideDown .35s cubic-bezier(.16,1,.3,1) forwards',
                    }}>
                      {step.stat}
                    </div>
                  </>
                ) : (
                  <p className="font-mono" style={{ fontSize: '.58rem', color: 'var(--t3)', marginTop: '.5rem', letterSpacing: '.07em' }}>
                    CLICK TO EXPAND
                  </p>
                )}
              </div>
              </div>
            ))}
          </div>

          {/* Right visual panel */}
          <div className="hidden md:block md:col-span-1">
            <div style={{
              borderRadius: 14, overflow: 'hidden',
              border: '1px solid rgba(0,209,255,0.2)',
              background: 'var(--surf)',
            }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80"
                alt="AI outbound analytics dashboard"
                style={{ width: '100%', height: 220, objectFit: 'cover', display: 'block', opacity: .7, mixBlendMode: 'luminosity' }}
              />
              <div style={{ padding: '1rem', borderTop: '1px solid rgba(0,209,255,0.12)' }}>
                <p className="font-mono" style={{ fontSize: '.62rem', color: 'var(--acc)', letterSpacing: '.1em' }}>SYSTEM STATUS</p>
                <p style={{ fontSize: '.8rem', color: 'var(--t1)', marginTop: '.25rem', fontWeight: 600 }}>All campaigns live ✓</p>
                <p style={{ fontSize: '.72rem', color: 'var(--t3)', marginTop: '.15rem' }}>Last optimized: just now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
