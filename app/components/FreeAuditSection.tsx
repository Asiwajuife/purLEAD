'use client';
import { useState, useRef } from 'react';

type Step = 1 | 2 | 3;

interface FormData {
  name: string;
  email: string;
  company: string;
  revenue: string;
  challenge: string;
  website: string;
}

const revenueOptions = ['Under $500K', '$500K–$2M', '$2M–$10M', '$10M+'];
const challengeOptions = [
  'Not enough leads',
  'Low reply rates',
  'Unqualified meetings',
  'No outbound system',
  'Scaling existing outreach',
];

export default function FreeAuditSection() {
  const [step, setStep] = useState<Step>(1);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState<FormData>({ name: '', email: '', company: '', revenue: '', challenge: '', website: '' });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const sectionRef = useRef<HTMLElement>(null);

  function set(k: keyof FormData, v: string) {
    setForm(f => ({ ...f, [k]: v }));
    setErrors(e => ({ ...e, [k]: '' }));
  }

  function validate1() {
    const e: Partial<FormData> = {};
    if (!form.name.trim()) e.name = 'Required';
    if (!form.email.trim()) e.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email';
    if (!form.company.trim()) e.company = 'Required';
    return e;
  }

  function validate2() {
    const e: Partial<FormData> = {};
    if (!form.revenue) e.revenue = 'Please select one';
    if (!form.challenge) e.challenge = 'Please select one';
    return e;
  }

  function next() {
    if (step === 1) {
      const e = validate1();
      if (Object.keys(e).length) { setErrors(e); return; }
      setStep(2);
    } else if (step === 2) {
      const e = validate2();
      if (Object.keys(e).length) { setErrors(e); return; }
      setStep(3);
    }
  }

  async function submit(ev: React.FormEvent) {
    ev.preventDefault();
    await fetch('https://formspree.io/f/xykldavw', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        name:      form.name,
        email:     form.email,
        company:   form.company,
        revenue:   form.revenue,
        challenge: form.challenge,
        website:   form.website,
      }),
    });
    setDone(true);
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(0,209,255,0.18)', borderRadius: 8,
    padding: '.65rem .875rem', fontSize: '.875rem', color: 'var(--t1)',
    outline: 'none', transition: 'border-color .2s',
  };

  const errStyle: React.CSSProperties = {
    fontSize: '.68rem', color: '#F87171', marginTop: '.25rem',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block', fontSize: '.72rem', color: 'var(--t3)',
    letterSpacing: '.07em', textTransform: 'uppercase', marginBottom: '.375rem',
    fontFamily: 'var(--font-mono, monospace)',
  };

  const pillBtnStyle = (active: boolean): React.CSSProperties => ({
    padding: '.4rem .875rem', borderRadius: 100, fontSize: '.8rem', cursor: 'pointer',
    border: `1px solid ${active ? 'rgba(0,209,255,0.6)' : 'rgba(0,209,255,0.18)'}`,
    background: active ? 'rgba(0,209,255,0.1)' : 'transparent',
    color: active ? 'var(--acc)' : 'var(--t3)', transition: 'all .2s',
  });

  return (
    <section id="free-audit" ref={sectionRef} className="z1 py-24" style={{
      background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0,209,255,0.06) 0%, #070F1C 70%)',
    }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left prose */}
          <div className="rev">
            <div className="lbl">Free Audit</div>
            <h2 style={{ fontSize: 'clamp(1.35rem,2.4vw,1.9rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-.02em', marginBottom: '1rem' }}>
              Get a free<br /><span style={{ color: 'var(--acc)' }}>outbound audit.</span>
            </h2>
            <p style={{ color: 'var(--t2)', fontSize: '.9375rem', lineHeight: 1.7, maxWidth: '42ch', marginBottom: '1.75rem' }}>
              We&rsquo;ll review your current outreach setup (or lack of one) and show you exactly where leads are leaking — no pitch, no pressure.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '.75rem', marginBottom: '2rem' }}>
              {[
                'ICP & targeting analysis',
                'Sequence & copy teardown',
                'Deliverability health check',
                'Competitor gap mapping',
              ].map(item => (
                <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '.625rem', fontSize: '.9rem', color: 'var(--t2)' }}>
                  <span style={{ color: 'var(--cta)', fontSize: '1rem', flexShrink: 0 }}>✓</span> {item}
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {[['48h', 'Turnaround'], ['100%', 'Free'], ['No', 'Pitch']].map(([val, lbl]) => (
                <div key={lbl} style={{
                  background: 'rgba(0,209,255,0.05)', border: '1px solid rgba(0,209,255,0.18)',
                  borderRadius: 10, padding: '.625rem 1rem', textAlign: 'center', minWidth: 72,
                }}>
                  <div style={{ fontSize: '1.125rem', fontWeight: 800, color: 'var(--acc)' }}>{val}</div>
                  <div className="font-mono" style={{ fontSize: '.6rem', color: 'var(--t3)', letterSpacing: '.1em', textTransform: 'uppercase' }}>{lbl}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div className="rev" style={{ transitionDelay: '.08s' }}>
            <div style={{
              background: 'rgba(13,36,68,0.7)', border: '1px solid rgba(0,209,255,0.2)',
              borderRadius: 16, padding: '2rem', backdropFilter: 'blur(12px)',
            }}>
              {done ? (
                /* Success state */
                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" style={{ margin: '0 auto 1.25rem' }}>
                    <circle cx="28" cy="28" r="26" stroke="rgba(34,197,94,0.4)" strokeWidth="2" />
                    <circle cx="28" cy="28" r="26" stroke="#22C55E" strokeWidth="2"
                      strokeDasharray="163" strokeDashoffset="0"
                      style={{ animation: 'checkDraw .6s ease forwards' }} />
                    <polyline points="17,28 24,35 39,20" stroke="#22C55E" strokeWidth="2.5"
                      strokeLinecap="round" strokeLinejoin="round"
                      strokeDasharray="30" strokeDashoffset="0"
                      style={{ animation: 'checkDraw .4s .5s ease forwards' }} />
                  </svg>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 800, color: 'var(--t1)', marginBottom: '.5rem' }}>You&rsquo;re on the list.</h3>
                  <p style={{ fontSize: '.875rem', color: 'var(--t2)', lineHeight: 1.6 }}>
                    We&rsquo;ll review your details and send your audit within 48 hours. Check your inbox at <span style={{ color: 'var(--acc)' }}>{form.email}</span>.
                  </p>
                </div>
              ) : (
                <form onSubmit={submit} noValidate>
                  {/* Step indicator */}
                  <div style={{ display: 'flex', gap: '.5rem', marginBottom: '1.5rem' }}>
                    {([1, 2, 3] as Step[]).map(s => (
                      <div key={s} style={{
                        height: 3, flex: 1, borderRadius: 2,
                        background: step >= s ? 'var(--acc)' : 'rgba(0,209,255,0.12)',
                        transition: 'background .3s',
                      }} />
                    ))}
                  </div>
                  <p className="font-mono" style={{ fontSize: '.62rem', color: 'var(--t3)', letterSpacing: '.1em', marginBottom: '1.25rem' }}>
                    STEP {step} OF 3 — {['ABOUT YOU', 'YOUR BUSINESS', 'FINAL DETAILS'][step - 1]}
                  </p>

                  {step === 1 && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <div>
                        <label style={labelStyle}>Full Name</label>
                        <input style={inputStyle} value={form.name} onChange={e => set('name', e.target.value)} placeholder="Alex Johnson" />
                        {errors.name && <p style={errStyle}>{errors.name}</p>}
                      </div>
                      <div>
                        <label style={labelStyle}>Work Email</label>
                        <input style={inputStyle} type="email" value={form.email} onChange={e => set('email', e.target.value)} placeholder="alex@company.com" />
                        {errors.email && <p style={errStyle}>{errors.email}</p>}
                      </div>
                      <div>
                        <label style={labelStyle}>Company Name</label>
                        <input style={inputStyle} value={form.company} onChange={e => set('company', e.target.value)} placeholder="Acme Corp" />
                        {errors.company && <p style={errStyle}>{errors.company}</p>}
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                      <div>
                        <label style={labelStyle}>Annual Revenue</label>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.5rem', marginTop: '.25rem' }}>
                          {revenueOptions.map(opt => (
                            <button key={opt} type="button" style={pillBtnStyle(form.revenue === opt)}
                              onClick={() => set('revenue', opt)}>{opt}</button>
                          ))}
                        </div>
                        {errors.revenue && <p style={errStyle}>{errors.revenue}</p>}
                      </div>
                      <div>
                        <label style={labelStyle}>Biggest Outbound Challenge</label>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '.375rem', marginTop: '.25rem' }}>
                          {challengeOptions.map(opt => (
                            <button key={opt} type="button" style={pillBtnStyle(form.challenge === opt)}
                              onClick={() => set('challenge', opt)}>{opt}</button>
                          ))}
                        </div>
                        {errors.challenge && <p style={errStyle}>{errors.challenge}</p>}
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <div>
                        <label style={labelStyle}>Website (optional)</label>
                        <input style={inputStyle} value={form.website} onChange={e => set('website', e.target.value)} placeholder="https://yoursite.com" />
                      </div>
                      <p style={{ fontSize: '.78rem', color: 'var(--t3)', lineHeight: 1.6 }}>
                        By submitting you agree to receive a one-time audit report. No spam, ever. We respect your privacy.
                      </p>
                      <div style={{
                        background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.2)',
                        borderRadius: 10, padding: '.875rem 1rem',
                      }}>
                        <p style={{ fontSize: '.8rem', color: '#22C55E', fontWeight: 600, marginBottom: '.25rem' }}>What happens next?</p>
                        <p style={{ fontSize: '.75rem', color: 'var(--t2)', lineHeight: 1.6 }}>
                          Our team reviews your info and sends a detailed audit within 48 hours — including a short Loom walkthrough of your gaps.
                        </p>
                      </div>
                    </div>
                  )}

                  <div style={{ marginTop: '1.5rem', display: 'flex', gap: '.75rem' }}>
                    {step > 1 && (
                      <button type="button" onClick={() => setStep(s => (s - 1) as Step)}
                        style={{ flex: '0 0 auto', padding: '.65rem 1.25rem', borderRadius: 8, background: 'transparent', border: '1px solid rgba(0,209,255,0.2)', color: 'var(--t3)', fontSize: '.875rem', cursor: 'pointer' }}>
                        Back
                      </button>
                    )}
                    {step < 3 ? (
                      <button type="button" onClick={next} className="btn-g" style={{ flex: 1, padding: '.7rem', fontSize: '.9rem' }}>
                        Continue →
                      </button>
                    ) : (
                      <button type="submit" className="btn-p" style={{ flex: 1, padding: '.7rem', fontSize: '.9rem' }}>
                        Get My Free Audit →
                      </button>
                    )}
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
