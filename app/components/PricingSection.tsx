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

export default function PricingSection() {
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="z1 py-24"
      style={{ background: 'linear-gradient(135deg,#0A1C35 0%,#0D2444 60%,#0A1C35 100%)', position: 'relative' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="rev mb-4">
          <div className="lbl lbl-gold">Pricing</div>
          <h2 style={{ fontSize: 'clamp(1.35rem,2.4vw,1.9rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-.02em' }}>
            Transparent. Simple.<br /><span style={{ color: 'var(--gold)' }}>Built to pay for itself.</span>
          </h2>
        </div>
        <div className="rev flex items-center gap-3 mb-10" style={{ transitionDelay: '.05s' }}>
          <div className="tog-wrap">
            <button className={`tog-btn${!annual ? ' active' : ''}`} onClick={() => setAnnual(false)}>Monthly</button>
            <button className={`tog-btn${annual  ? ' active' : ''}`} onClick={() => setAnnual(true)}>Annual</button>
          </div>
          <span className="save-badge">Save 20%</span>
        </div>

        <CountdownTimer />

        <div className="grid md:grid-cols-3 gap-5 md:items-end">
          {plans.map((plan, i) => {
            const price = annual ? plan.annual : plan.monthly;
            const setup = annual ? plan.setupA : plan.setupM;
            const inner = (
              <div className={plan.featured ? 'pfinner p-7' : ''}>
                <div className="font-mono text-xs mb-5" style={{ color: plan.featured ? 'var(--gold)' : 'var(--t3)', letterSpacing: '.14em', textTransform: 'uppercase' }}>{plan.name}</div>
                <div className="flex items-end gap-1 mb-1">
                  <span className="font-display font-extrabold" style={{ fontSize: '1.875rem', color: 'var(--t1)', lineHeight: 1 }}>{price}</span>
                  <span className="text-sm mb-1.5" style={{ color: 'var(--t3)' }}>/mo</span>
                </div>
                <div className="font-mono text-xs mb-6" style={{ color: 'var(--t3)' }}>{setup}</div>
                <div className="mb-6">
                  <div className="pi py-2.5 text-sm" style={{ color: 'var(--t2)' }}><strong style={{ color: 'var(--t1)' }}>{plan.meetings}</strong>/month</div>
                  {plan.features.map(f => <FeatureItem key={f} text={f} />)}
                </div>
                <a href="https://calendly.com/atanseiyeifeoluwa" target="_blank" rel="noopener noreferrer"
                   className={`${plan.btnClass} block text-center text-sm py-3`}>{plan.cta}</a>

                {/* Scarcity bar — Growth plan only */}
                {plan.featured && (
                  <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid rgba(232,184,75,0.15)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '.4rem' }}>
                      <span className="font-mono" style={{ fontSize: '.62rem', color: 'rgba(232,184,75,0.8)', letterSpacing: '.08em' }}>AVAILABILITY</span>
                      <span className="font-mono" style={{ fontSize: '.62rem', color: 'var(--gold)', fontWeight: 700, animation: 'scarcityPulse 2s ease-in-out infinite' }}>3 spots left</span>
                    </div>
                    <div style={{ height: 4, borderRadius: 2, background: 'rgba(255,255,255,0.06)', overflow: 'hidden' }}>
                      <div style={{
                        height: '100%', width: '80%', borderRadius: 2,
                        background: 'linear-gradient(90deg, #E8B84B, #22C55E)',
                        boxShadow: '0 0 8px rgba(232,184,75,0.5)',
                      }} />
                    </div>
                    <p style={{ fontSize: '.65rem', color: 'var(--t3)', marginTop: '.4rem' }}>8 of 10 slots filled this month</p>
                  </div>
                )}
              </div>
            );

            return (
              <div key={plan.name} className="rev" style={{ transitionDelay: `${i * .1}s`, opacity: plan.featured ? 1 : .85 }}>
                {plan.featured && <div className="font-mono text-xs mb-2.5 text-center" style={{ color: 'var(--gold)', letterSpacing: '.16em', textTransform: 'uppercase' }}>&#9733; Most Popular</div>}
                {plan.featured ? <div className="pfwrap">{inner}</div> : <div className="card tilt p-7">{inner}</div>}
              </div>
            );
          })}
        </div>
        <p className="mt-8 text-sm" style={{ color: 'var(--t3)' }}>
          Not sure which fits?{' '}
          <a href="https://calendly.com/atanseiyeifeoluwa" target="_blank" rel="noopener noreferrer"
             style={{ color: 'var(--acc)' }} className="hover:underline underline-offset-2">Book a free call</a>{' '}
          and we&rsquo;ll tell you.
        </p>
      </div>
    </section>
  );
}
