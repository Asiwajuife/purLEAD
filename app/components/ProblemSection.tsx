'use client';
import { useState } from 'react';

type Item = { delay: string; svg: React.ReactNode; title: string; body: string; cta: string };

const problems: Item[] = [
  {
    delay: '0s',
    svg: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />,
    title: 'Feast or famine pipeline',
    body: "One month you're slammed, the next scrambling. Inconsistent revenue is a symptom of broken outbound — not bad luck.",
    cta: 'purLEAD builds a predictable system →',
  },
  {
    delay: '.06s',
    svg: <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></>,
    title: 'Trapped by referrals',
    body: "Referrals are great — until they stop. You can't scale on hope. You need a predictable system you own.",
    cta: 'purLEAD creates demand on demand →',
  },
  {
    delay: '.12s',
    svg: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>,
    title: 'Cold outreach that flops',
    body: 'Generic templates sent to unverified lists kill deliverability before your prospect reads a word.',
    cta: 'purLEAD writes AI-personalized sequences →',
  },
  {
    delay: '.18s',
    svg: <><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></>,
    title: 'SDRs cost a fortune',
    body: 'Hiring and managing a sales rep eats $80–120K/year before benefits — and still needs 90 days to ramp.',
    cta: 'purLEAD is live in 2 weeks →',
  },
  {
    delay: '.24s',
    svg: <><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></>,
    title: 'Ad spend with no ROI',
    body: 'Paid ads demand big budgets, long learning curves, and constant optimization. A money pit for most B2B businesses.',
    cta: 'purLEAD targets only decision-makers →',
  },
  {
    delay: '.3s',
    svg: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>,
    title: 'No time to prospect',
    body: "You're running the business. You can't also be your own BDR. Every hour chasing leads is stolen from delivery.",
    cta: "purLEAD runs 24/7 so you don't have to →",
  },
];

function ProblemCard({ c }: { c: Item }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className="rev" style={{ transitionDelay: c.delay }}>
    <div
      className={`prob-flip${flipped ? ' flipped' : ''}`}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped(f => !f)}
    >
      <div className="prob-flip-inner">
        <div className="prob-face prob-front card p-6">
          <div className="ib mb-4">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{c.svg}</svg>
          </div>
          <h3 className="font-display font-bold" style={{ fontSize: '1rem', color: 'var(--t1)' }}>{c.title}</h3>
          <div className="prob-hint font-mono" style={{ fontSize: '.6rem', color: 'rgba(0,209,255,0.5)', letterSpacing: '.1em', marginTop: '.875rem' }}>
            HOVER TO REVEAL →
          </div>
        </div>
        <div className="prob-face prob-back p-6" style={{
          background: 'linear-gradient(145deg, #0C2140 0%, #071525 100%)',
          border: '1px solid rgba(0,209,255,0.35)',
          borderTop: '2px solid rgba(0,209,255,0.55)',
          borderRadius: 14,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
          <div>
            <div style={{ width: 36, height: 36, background: 'rgba(0,209,255,.1)', border: '1px solid rgba(0,209,255,.3)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00D1FF', marginBottom: '0.75rem', flexShrink: 0 }}>
              <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{c.svg}</svg>
            </div>
            <h3 className="font-display font-bold mb-2" style={{ fontSize: '.9375rem', color: '#FFFFFF', lineHeight: 1.3, textShadow: '0 0 20px rgba(0,209,255,0.4)' }}>{c.title}</h3>
            <p style={{ fontSize: '.8375rem', lineHeight: 1.75, color: '#CBD5E1' }}>{c.body}</p>
          </div>
          <span style={{ fontSize: '.72rem', color: '#00D1FF', fontWeight: 700, letterSpacing: '.04em', marginTop: '1rem', display: 'block', borderTop: '1px solid rgba(0,209,255,0.15)', paddingTop: '.75rem' }}>{c.cta}</span>
        </div>
      </div>
    </div>
    </div>
  );
}

export default function ProblemSection() {
  return (
    <section className="z1 py-24" style={{ background: 'linear-gradient(160deg, #070F1C 0%, #0A1C35 50%, #080D18 100%)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="rev mb-10">
          <div className="lbl">The Problem</div>
          <h2 style={{ fontSize: 'clamp(1.35rem,2.4vw,1.9rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-.02em' }}>
            Your pipeline isn&rsquo;t broken.<br /><span style={{ color: 'var(--t3)' }}>Your strategy is.</span>
          </h2>
          <p className="font-mono text-xs mt-3" style={{ color: 'rgba(0,209,255,0.45)', letterSpacing: '.06em' }}>
            Tap each card to reveal the impact.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((c, i) => <ProblemCard key={i} c={c} />)}
        </div>
      </div>
    </section>
  );
}
