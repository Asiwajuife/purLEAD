'use client';
import { useEffect, useRef, useState } from 'react';

const steps = [
  { label: 'ICP research',        detail: 'Identifying 800 decision-makers', icon: '🎯', color: '#00D1FF' },
  { label: 'AI personalisation',  detail: 'Writing unique first lines',       icon: '🤖', color: '#A78BFA' },
  { label: 'Sequence launched',   detail: '2,140 emails scheduled',           icon: '📬', color: '#E8B84B' },
  { label: 'Replies arriving',    detail: '47 warm responses so far',         icon: '💬', color: '#22C55E' },
  { label: 'Meetings booked',     detail: '14 calls on calendar',             icon: '📅', color: '#22C55E' },
];

const emails = [
  { name: 'Mark J.', role: 'CTO · Nexara', time: '2m ago',  status: 'Interested — let\'s talk',  open: true  },
  { name: 'Sara L.', role: 'VP Sales · VaultHQ', time: '18m ago', status: 'Can we do Thursday?',  open: true  },
  { name: 'Kevin P.', role: 'CEO · Sprinto', time: '1h ago',  status: 'Sent',                     open: false },
  { name: 'Amy T.',  role: 'Head of Growth · Clay', time: '3h ago', status: 'Delivered',          open: false },
];

export default function VideoSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const id = setInterval(() => setActiveStep(s => (s + 1) % steps.length), 1800);
    return () => clearInterval(id);
  }, [visible]);

  return (
    <section ref={ref} className="z1 py-24" style={{ background: 'linear-gradient(160deg,#070F1C 0%,#0A1C35 60%,#070F1C 100%)' }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="rev mb-12 text-center">
          <div className="lbl" style={{ justifyContent: 'center' }}>See It Work</div>
          <h2 style={{ fontSize: 'clamp(1.35rem,2.4vw,1.9rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-.02em' }}>
            How we booked <span style={{ color: 'var(--acc)' }}>14 calls in 28 days</span><br />for a SaaS founder.
          </h2>
        </div>

        <div className="rev grid md:grid-cols-2 gap-6 items-start" style={{ transitionDelay: '.07s' }}>

          {/* Left — process steps */}
          <div style={{
            background: 'rgba(13,36,68,0.6)', border: '1px solid rgba(0,209,255,0.18)',
            borderRadius: 16, padding: '1.75rem', backdropFilter: 'blur(12px)',
          }}>
            <p className="font-mono" style={{ fontSize: '.62rem', color: 'var(--t3)', letterSpacing: '.14em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
              CAMPAIGN TIMELINE
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.625rem' }}>
              {steps.map((s, i) => {
                const done  = i < activeStep;
                const isNow = i === activeStep;
                return (
                  <div key={s.label} style={{
                    display: 'flex', alignItems: 'center', gap: '.875rem',
                    padding: '.75rem 1rem', borderRadius: 10,
                    background: isNow ? `rgba(${s.color === '#22C55E' ? '34,197,94' : s.color === '#E8B84B' ? '232,184,75' : s.color === '#A78BFA' ? '167,139,250' : '0,209,255'},0.08)` : 'rgba(255,255,255,0.02)',
                    border: `1px solid ${isNow ? s.color + '55' : 'rgba(255,255,255,0.06)'}`,
                    transition: 'all .4s cubic-bezier(.16,1,.3,1)',
                    opacity: done ? 0.55 : 1,
                  }}>
                    <span style={{ fontSize: '1.25rem', flexShrink: 0 }}>{s.icon}</span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '.8375rem', fontWeight: 600, color: isNow ? s.color : 'var(--t2)', transition: 'color .3s' }}>
                        {s.label}
                      </div>
                      <div style={{ fontSize: '.7rem', color: 'var(--t3)', marginTop: '.1rem' }}>{s.detail}</div>
                    </div>
                    {done && (
                      <span style={{ color: '#22C55E', fontSize: '.8rem', flexShrink: 0 }}>✓</span>
                    )}
                    {isNow && (
                      <span style={{
                        width: 8, height: 8, borderRadius: '50%', background: s.color, flexShrink: 0,
                        animation: 'pulseRing 1.5s ease-out infinite',
                      }} />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Progress bar */}
            <div style={{ marginTop: '1.25rem', height: 3, borderRadius: 2, background: 'rgba(255,255,255,0.06)', overflow: 'hidden' }}>
              <div style={{
                height: '100%', borderRadius: 2,
                background: 'linear-gradient(90deg, #00D1FF, #22C55E)',
                width: `${((activeStep + 1) / steps.length) * 100}%`,
                transition: 'width .5s cubic-bezier(.16,1,.3,1)',
              }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '.4rem' }}>
              <span className="font-mono" style={{ fontSize: '.6rem', color: 'var(--t3)', letterSpacing: '.06em' }}>DAY 1</span>
              <span className="font-mono" style={{ fontSize: '.6rem', color: 'var(--t3)', letterSpacing: '.06em' }}>DAY 28</span>
            </div>
          </div>

          {/* Right — inbox feed */}
          <div style={{
            background: 'rgba(13,36,68,0.6)', border: '1px solid rgba(0,209,255,0.18)',
            borderRadius: 16, padding: '1.75rem', backdropFilter: 'blur(12px)',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <p className="font-mono" style={{ fontSize: '.62rem', color: 'var(--t3)', letterSpacing: '.14em', textTransform: 'uppercase' }}>
                REPLY INBOX
              </p>
              <span style={{
                background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)',
                borderRadius: 100, padding: '.15rem .625rem',
                fontSize: '.65rem', color: '#22C55E', fontWeight: 700,
              }}>2 new</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem', marginBottom: '1.5rem' }}>
              {emails.map((e, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'flex-start', gap: '.75rem',
                  padding: '.75rem .875rem', borderRadius: 10,
                  background: e.open ? 'rgba(34,197,94,0.05)' : 'rgba(255,255,255,0.02)',
                  border: `1px solid ${e.open ? 'rgba(34,197,94,0.2)' : 'rgba(255,255,255,0.05)'}`,
                  animation: visible ? `fadeSlideDown .4s ${i * .1}s both` : 'none',
                }}>
                  <div style={{
                    width: 34, height: 34, borderRadius: '50%', flexShrink: 0,
                    background: `hsl(${(i * 70 + 200) % 360},50%,35%)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '.75rem', fontWeight: 700, color: '#fff',
                  }}>
                    {e.name[0]}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '.15rem' }}>
                      <span style={{ fontSize: '.8rem', fontWeight: 600, color: 'var(--t1)' }}>{e.name}</span>
                      <span className="font-mono" style={{ fontSize: '.6rem', color: 'var(--t3)' }}>{e.time}</span>
                    </div>
                    <div style={{ fontSize: '.68rem', color: 'var(--t3)', marginBottom: '.2rem' }}>{e.role}</div>
                    <div style={{ fontSize: '.75rem', color: e.open ? '#22C55E' : 'var(--t3)', fontWeight: e.open ? 600 : 400 }}>
                      {e.open ? '↩ ' : ''}{e.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stat row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '.5rem', borderTop: '1px solid rgba(0,209,255,0.1)', paddingTop: '1rem' }}>
              {[['22%', 'Reply rate'], ['48%', 'Open rate'], ['14', 'Calls booked']].map(([val, lbl]) => (
                <div key={lbl} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '1.125rem', fontWeight: 800, color: '#22C55E', lineHeight: 1 }}>{val}</div>
                  <div className="font-mono" style={{ fontSize: '.58rem', color: 'var(--t3)', letterSpacing: '.07em', textTransform: 'uppercase', marginTop: '.2rem' }}>{lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
