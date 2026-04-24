'use client';
import { useState } from 'react';
import { FeatureItem } from './PricingTooltip';
import CountdownTimer from './CountdownTimer';

const plans = [
  {
    name: 'Starter',
    monthly: '$997', annual: '$797',
    setupM: '+ $497 one-time setup', setupA: '+ $397 one-time setup',
    meetings: '5–10 qualified meetings',
    features: ['1 target vertical / ICP', 'AI-personalized sequences', 'Domain & inbox setup', 'Bi-weekly reporting', 'Reply management'],
    featured: false,
    cta: 'Get Started →',
    btnClass: 'btn-g',
  },
  {
    name: 'Growth',
    monthly: '$1,997', annual: '$1,597',
    setupM: '+ $997 one-time setup', setupA: '+ $797 one-time setup',
    meetings: '10–25 qualified meetings',
    features: ['2 target verticals / ICPs', 'Advanced AI personalization', 'Multi-channel outreach', 'Weekly reporting + strategy calls', 'Full reply management', 'A/B testing & optimization'],
    featured: true,
    cta: 'Book a Call →',
    btnClass: 'btn-p',
  },
  {
    name: 'Scale',
    monthly: '$3,997', annual: '$3,197',
    setupM: '+ $1,997 one-time setup', setupA: '+ $1,597 one-time setup',
    meetings: '20–45 qualified meetings',
    features: ['3+ verticals / ICPs', 'Premium AI personalization engine', 'Full multi-channel stack', 'Dedicated account strategist', 'Priority support & SLA', 'Custom integrations & CRM sync'],
    featured: false,
    cta: 'Get Started →',
    btnClass: 'btn-g',
  },
];

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
      style={{ transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1)', transform: open ? 'rotate(180deg)' : 'rotate(0deg)', flexShrink: 0 }}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export default function PricingSection() {
  const [annual, setAnnual] = useState(false);
  const [open, setOpen] = useState<boolean[]>([false, true, false]);

  const toggle = (i: number) => setOpen(prev => prev.map((v, idx) => idx === i ? !v : v));

  return (
    <section id="pricing" className="z1 py-10" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        aria-hidden="true"
        src="https://powerinai.com/frontend/assets/images/services/ai_inbound/AI%20Call%201.webp"
        alt=""
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', zIndex: 0 }}
      />
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, zIndex: 0,
        background: 'linear-gradient(135deg, rgba(7,15,28,0.78) 0%, rgba(10,28,53,0.72) 60%, rgba(7,15,28,0.78) 100%)',
      }} />
      <div className="max-w-6xl mx-auto px-6" style={{ position: 'relative', zIndex: 1 }}>
        <div className="rev mb-4">
          <div className="lbl lbl-gold">Pricing</div>
          <h2 style={{ fontSize: 'clamp(1.35rem,2.4vw,1.9rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-.02em' }}>
            Transparent. Simple.<br /><span style={{ color: 'var(--gold)' }}>Built to pay for itself.</span>
          </h2>
        </div>
        <div className="rev flex items-center gap-3 mb-6" style={{ transitionDelay: '.05s' }}>
          <div className="tog-wrap">
            <button className={`tog-btn${!annual ? ' active' : ''}`} onClick={() => setAnnual(false)}>Monthly</button>
            <button className={`tog-btn${annual  ? ' active' : ''}`} onClick={() => setAnnual(true)}>Annual</button>
          </div>
          <span className="save-badge">Save 20%</span>
        </div>

        <CountdownTimer />

        <div className="grid md:grid-cols-3 gap-4 md:items-start">
          {plans.map((plan, i) => {
            const price = annual ? plan.annual : plan.monthly;
            const setup = annual ? plan.setupA : plan.setupM;
            const isOpen = open[i];

            const header = (
              <button
                onClick={() => toggle(i)}
                style={{
                  width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  background: 'none', border: 'none', cursor: 'pointer', padding: 0, textAlign: 'left',
                }}
                aria-expanded={isOpen}
              >
                <div>
                  <div className="font-mono text-xs mb-2" style={{ color: plan.featured ? 'var(--gold)' : 'var(--t3)', letterSpacing: '.14em', textTransform: 'uppercase' }}>{plan.name}</div>
                  <div className="flex items-end gap-1">
                    <span className="font-display font-extrabold" style={{ fontSize: '1.75rem', color: 'var(--t1)', lineHeight: 1 }}>{price}</span>
                    <span className="text-sm mb-1" style={{ color: 'var(--t3)' }}>/mo</span>
                  </div>
                  <div className="font-mono text-xs mt-1" style={{ color: 'var(--t3)' }}>{setup}</div>
                </div>
                <span style={{ color: plan.featured ? 'var(--gold)' : 'var(--t3)', marginLeft: '1rem' }}>
                  <Chevron open={isOpen} />
                </span>
              </button>
            );

            const body = (
              <div style={{
                overflow: 'hidden',
                maxHeight: isOpen ? 600 : 0,
                opacity: isOpen ? 1 : 0,
                transition: 'max-height 0.45s cubic-bezier(0.16,1,0.3,1), opacity 0.35s ease',
              }}>
                <div style={{ paddingTop: '1rem', borderTop: `1px solid ${plan.featured ? 'rgba(232,184,75,0.2)' : 'rgba(255,255,255,0.07)'}`, marginTop: '1rem' }}>
                  <div className="pi py-2 text-sm mb-2" style={{ color: 'var(--t2)' }}>
                    <strong style={{ color: 'var(--t1)' }}>{plan.meetings}</strong>/month
                  </div>
                  {plan.features.map(f => <FeatureItem key={f} text={f} />)}
                  <a
                    href="https://calendly.com/atanseiyeifeoluwa"
                    target="_blank" rel="noopener noreferrer"
                    className={`${plan.btnClass} block text-center text-sm py-3 mt-4`}
                  >{plan.cta}</a>

                  {plan.featured && (
                    <div style={{ marginTop: '1rem', paddingTop: '.875rem', borderTop: '1px solid rgba(232,184,75,0.15)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '.4rem' }}>
                        <span className="font-mono" style={{ fontSize: '.62rem', color: 'rgba(232,184,75,0.8)', letterSpacing: '.08em' }}>AVAILABILITY</span>
                        <span className="font-mono" style={{ fontSize: '.62rem', color: 'var(--gold)', fontWeight: 700, animation: 'scarcityPulse 2s ease-in-out infinite' }}>3 spots left</span>
                      </div>
                      <div style={{ height: 4, borderRadius: 2, background: 'rgba(255,255,255,0.06)', overflow: 'hidden' }}>
                        <div style={{
                          height: '100%', width: '80%', borderRadius: 2,
                          background: 'linear-gradient(90deg, #E8B84B, #22C55E)',
                          boxShadow: '0 0 8px rgba(232,184,75,0.5)',
                          transition: isOpen ? 'width 0.8s 0.3s cubic-bezier(0.16,1,0.3,1)' : 'none',
                        }} />
                      </div>
                      <p style={{ fontSize: '.65rem', color: 'var(--t3)', marginTop: '.4rem' }}>8 of 10 slots filled this month</p>
                    </div>
                  )}
                </div>
              </div>
            );

            const inner = (
              <div className={plan.featured ? 'pfinner p-5' : ''}>
                {header}
                {body}
              </div>
            );

            return (
              <div key={plan.name} className="rev" style={{ transitionDelay: `${i * .1}s`, opacity: plan.featured ? 1 : .85 }}>
                {plan.featured && (
                  <div className="font-mono text-xs mb-2.5 text-center" style={{ color: 'var(--gold)', letterSpacing: '.16em', textTransform: 'uppercase' }}>&#9733; Most Popular</div>
                )}
                {plan.featured
                  ? <div className="pfwrap" style={{ cursor: 'default' }}>{inner}</div>
                  : <div className="card tilt p-5" style={{ cursor: 'default' }}>{inner}</div>
                }
              </div>
            );
          })}
        </div>

        <p className="mt-6 text-sm" style={{ color: 'var(--t3)' }}>
          Not sure which fits?{' '}
          <a href="https://calendly.com/atanseiyeifeoluwa" target="_blank" rel="noopener noreferrer"
             style={{ color: 'var(--acc)' }} className="hover:underline underline-offset-2">Book a free call</a>{' '}
          and we&rsquo;ll tell you.
        </p>
      </div>
    </section>
  );
}
