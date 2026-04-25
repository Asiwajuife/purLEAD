'use client';
import { useState } from 'react';

interface Testimonial {
  quote: string;
  imgId: string;
  name: string;
  role: string;
  result: string;
  caseStudy: {
    context: string;
    challenge: string;
    solution: string;
    before: { label: string; value: string }[];
    after:  { label: string; value: string }[];
  };
}

const testimonials: Testimonial[] = [
  {
    quote: "We went from 2\u20133 referral calls a month to 14 qualified meetings booked in our first 6 weeks. purLEAD paid for itself after the second call we closed.",
    imgId: '1560250097-0b93528c311a',
    name: 'James T.',
    role: 'CEO, SaaS Consulting Firm',
    result: '📅 11 calls booked in 3 weeks',
    caseStudy: {
      context: 'A 12-person SaaS consulting firm specialising in ERP migrations for mid-market manufacturers. Relied entirely on referrals and had no outbound motion.',
      challenge: 'Pipeline had dried up after two large retainers ended simultaneously. The team needed a repeatable source of qualified conversations within 60 days to avoid a revenue gap.',
      solution: 'purLEAD built a two-vertical ICP targeting manufacturing ops directors and IT VPs. AI-personalised sequences referencing recent M&A activity and tech-stack signals. Dedicated inbox infrastructure with 3-week warm-up, weekly A/B testing on subject lines.',
      before: [{ label: 'Monthly meetings', value: '2–3' }, { label: 'Source', value: 'Referral only' }, { label: 'Reply rate', value: '<1%' }, { label: 'Pipeline visibility', value: 'None' }],
      after:  [{ label: 'Monthly meetings', value: '14' }, { label: 'Reply rate', value: '9.4%' }, { label: 'Pipeline added', value: '$220K' }, { label: 'Time to first call', value: '11 days' }],
    },
  },
  {
    quote: "I was skeptical of AI outreach \u2014 I\u2019d tried it before and got nothing. purLEAD\u2019s personalization is on another level. My prospects respond thinking I wrote each email myself.",
    imgId: '1573497019940-1c28c88b4f3e',
    name: 'Aisha R.',
    role: 'Founder, FinTech Advisory',
    result: '💰 $47K pipeline in 30 days',
    caseStudy: {
      context: 'Solo FinTech regulatory advisory practice serving Series A–C fintech startups. Strong word-of-mouth but no scalable way to reach net-new founders.',
      challenge: 'Previous cold outreach attempts with generic tools returned zero replies and damaged sender reputation. Needed a high-trust approach that matched the firm\'s premium positioning.',
      solution: 'purLEAD researched each prospect\'s recent funding announcement, product launch, or regulatory filing to craft context-specific opening lines. LinkedIn touchpoints layered in after email day 3. Full deliverability rebuild from scratch.',
      before: [{ label: 'Cold reply rate', value: '0%' }, { label: 'Sender reputation', value: 'Damaged' }, { label: 'Net-new pipeline', value: '$0/mo' }, { label: 'Channels', value: 'Email only' }],
      after:  [{ label: 'Reply rate', value: '11.2%' }, { label: 'Pipeline (30 days)', value: '$47K' }, { label: 'Meetings booked', value: '8' }, { label: 'Channels', value: 'Email + LinkedIn' }],
    },
  },
  {
    quote: "We scaled from Growth to Scale in month 3. Booking 30+ calls a month now and our close rate improved because the meetings are actually qualified. Best investment we made.",
    imgId: '1472099645785-5658abf4ff4e',
    name: 'Marcus P.',
    role: 'Managing Director, B2B Media Group',
    result: '📬 22% reply rate achieved',
    caseStudy: {
      context: 'A B2B media and content agency serving private equity-backed portfolio companies. Historically relied on founder network; wanted to break into new verticals.',
      challenge: 'Sales team was spending 60% of time on manual prospecting. Meetings that did happen were poorly qualified — wrong budget, wrong seniority, wrong timing.',
      solution: 'Upgraded to Scale plan in month 3. Three target verticals with separate sequences. Clay enrichment pipeline for technographic + firmographic filtering before any email is sent. Dedicated account strategist running weekly optimisation reviews.',
      before: [{ label: 'Calls/month', value: '8–10' }, { label: 'Qualified rate', value: '40%' }, { label: 'Prospecting time', value: '60% of SDR week' }, { label: 'Verticals active', value: '1' }],
      after:  [{ label: 'Calls/month', value: '30+' }, { label: 'Qualified rate', value: '82%' }, { label: 'Reply rate', value: '22%' }, { label: 'Verticals active', value: '3' }],
    },
  },
  {
    quote: "purLEAD completely changed how we think about pipeline. We're now closing deals we never would have found on our own. The AI sequences feel human, not spammy.",
    imgId: '1580489944761-15a19d654956',
    name: 'Sofia L.',
    role: 'COO, Agency Network',
    result: '📅 18 qualified calls in month 1',
    caseStudy: {
      context: 'A network of boutique creative agencies under a shared holding structure. Needed a centralised outbound system that could serve multiple brands simultaneously.',
      challenge: 'Each agency had tried outbound independently with inconsistent results. The holding company wanted one system that could be configured per-brand while sharing infrastructure.',
      solution: 'purLEAD built a multi-brand sending infrastructure with brand-specific sequences and ICPs. Centralised reporting dashboard. AI personalisation tuned to each brand\'s voice and offer.',
      before: [{ label: 'Outbound meetings', value: 'Ad-hoc' }, { label: 'Brands with outbound', value: '0 of 4' }, { label: 'Monthly pipeline', value: 'Unmeasured' }, { label: 'Time to first reply', value: '6+ weeks' }],
      after:  [{ label: 'Month 1 meetings', value: '18' }, { label: 'Brands active', value: '3 of 4' }, { label: 'Pipeline (60 days)', value: '$310K' }, { label: 'Time to first reply', value: '7 days' }],
    },
  },
  {
    quote: "Within 45 days we had 9 new enterprise conversations open. The targeting was surgical — every reply was from someone who actually fit our ICP.",
    imgId: '1507003211169-0a1dd7228f2d',
    name: 'Derek M.',
    role: 'VP Sales, Cloud Infrastructure Co.',
    result: '💰 $120K in new pipeline',
    caseStudy: {
      context: 'A cloud infrastructure and managed services provider targeting mid-market CTOs and engineering VPs. Average deal size $40–60K ARR with 6-month sales cycle.',
      challenge: 'Existing SDR team was hitting the same prospects repeatedly. Needed a way to systematically open new enterprise accounts without adding headcount.',
      solution: 'purLEAD identified 800 net-new accounts using technographic filters (AWS/Azure spend signals, recent DevOps hires). Sequences led with infrastructure cost and incident reduction angles. Multi-touch including LinkedIn voice notes.',
      before: [{ label: 'Net-new accounts/mo', value: '2–3' }, { label: 'Enterprise opps', value: 'Stalled' }, { label: 'Pipeline from outbound', value: '$15K/mo' }, { label: 'SDR capacity used', value: '90% manual' }],
      after:  [{ label: 'New conversations', value: '9 in 45 days' }, { label: 'Pipeline added', value: '$120K' }, { label: 'Avg. reply quality', value: 'High seniority' }, { label: 'SDR time saved', value: '14h/week' }],
    },
  },
  {
    quote: "We tried building this in-house first. Wasted 4 months. purLEAD had campaigns live in week 2 and we saw replies by day 10. Wish we'd started sooner.",
    imgId: '1438761681033-6461ffad8d80',
    name: 'Rachel K.',
    role: 'Founder, B2B SaaS Startup',
    result: '📬 Day-10 first warm replies',
    caseStudy: {
      context: 'An early-stage B2B SaaS product in the HR-tech space. Two-person founding team, pre-Series A, needed to validate outbound as a channel before hiring sales.',
      challenge: 'Four months spent configuring tools, writing sequences, and warming domains — with zero booked meetings. Needed an expert to take over before runway was consumed.',
      solution: 'purLEAD inherited and rebuilt the broken sending infrastructure. ICP narrowed from "all HR buyers" to CHROs and People Ops Directors at 100–500 person tech companies. Sequences rewritten from scratch with job-change and headcount-growth triggers.',
      before: [{ label: 'Months spent', value: '4' }, { label: 'Meetings booked', value: '0' }, { label: 'Deliverability score', value: 'Failing' }, { label: 'ICP clarity', value: 'Too broad' }],
      after:  [{ label: 'Days to first reply', value: '10' }, { label: 'Meetings in week 4', value: '6' }, { label: 'Open rate', value: '48%' }, { label: 'Positive reply rate', value: '7.1%' }],
    },
  },
];

function CaseStudyModal({ t, onClose }: { t: Testimonial; onClose: () => void }) {
  return (
    <div
      role="dialog" aria-modal="true" aria-label={`${t.name} case study`}
      style={{
        position: 'fixed', inset: 0, zIndex: 70,
        background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(6px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '1.5rem', animation: 'fadeSlideDown .35s cubic-bezier(.16,1,.3,1) forwards',
      }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div style={{
        background: '#0B1E38', border: '1px solid rgba(0,209,255,0.25)',
        borderTop: '2px solid var(--acc)', borderRadius: 18,
        maxWidth: 640, width: '100%', maxHeight: '90vh', overflowY: 'auto',
        position: 'relative', padding: '2rem',
      }}>
        <button onClick={onClose} aria-label="Close" style={{
          position: 'absolute', top: '1rem', right: '1rem',
          background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '50%', width: 32, height: 32, cursor: 'pointer',
          color: 'var(--t3)', fontSize: '.9rem', lineHeight: 1,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>✕</button>

        {/* Header */}
        <div className="flex items-center gap-3" style={{ marginBottom: '1.5rem' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://images.unsplash.com/photo-${t.imgId}?w=72&h=72&fit=crop&crop=face&q=80`}
            alt={t.name} width={48} height={48}
            className="rounded-full"
            style={{ border: '2px solid rgba(0,209,255,0.35)', flexShrink: 0 }}
          />
          <div>
            <div style={{ fontWeight: 700, color: 'var(--t1)', fontSize: '.9375rem' }}>{t.name}</div>
            <div className="font-mono" style={{ fontSize: '.65rem', color: 'var(--t3)', letterSpacing: '.07em', textTransform: 'uppercase' }}>{t.role}</div>
          </div>
          <div style={{
            marginLeft: 'auto', background: 'rgba(34,197,94,0.08)',
            border: '1px solid rgba(34,197,94,0.25)', borderRadius: 100,
            padding: '.2rem .75rem', fontSize: '.68rem', color: '#22C55E', fontWeight: 600, flexShrink: 0,
          }}>{t.result}</div>
        </div>

        {/* Sections */}
        {([
          ['Context', t.caseStudy.context],
          ['The Challenge', t.caseStudy.challenge],
          ['What purLEAD Did', t.caseStudy.solution],
        ] as [string, string][]).map(([label, body]) => (
          <div key={label} style={{ marginBottom: '1.25rem' }}>
            <div className="font-mono" style={{ fontSize: '.62rem', color: 'var(--acc)', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '.4rem' }}>{label}</div>
            <p style={{ fontSize: '.875rem', color: 'var(--t2)', lineHeight: 1.7 }}>{body}</p>
          </div>
        ))}

        {/* Before / After */}
        <div className="cs-ba-grid" style={{ gap: '1rem', marginTop: '1.5rem' }}>
          {(['before', 'after'] as const).map(key => (
            <div key={key} style={{
              background: key === 'after' ? 'rgba(34,197,94,0.05)' : 'rgba(255,255,255,0.03)',
              border: `1px solid ${key === 'after' ? 'rgba(34,197,94,0.25)' : 'rgba(255,255,255,0.08)'}`,
              borderRadius: 10, padding: '1rem',
            }}>
              <div className="font-mono" style={{
                fontSize: '.6rem', letterSpacing: '.12em', textTransform: 'uppercase', marginBottom: '.75rem',
                color: key === 'after' ? '#22C55E' : 'var(--t3)',
              }}>{key === 'before' ? '▼ Before' : '▲ After'}</div>
              {t.caseStudy[key].map(stat => (
                <div key={stat.label} style={{ marginBottom: '.5rem' }}>
                  <div style={{ fontSize: '.7rem', color: 'var(--t3)', marginBottom: '.1rem' }}>{stat.label}</div>
                  <div style={{ fontSize: '1rem', fontWeight: 800, color: key === 'after' ? '#22C55E' : 'var(--t2)' }}>{stat.value}</div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div style={{ marginTop: '1.5rem' }}>
          <a href="https://calendly.com/atanseiyeifeoluwa" target="_blank" rel="noopener noreferrer"
             className="btn-p block text-center py-3" style={{ fontSize: '.9rem' }}>
            Get results like {t.name.split(' ')[0]}&rsquo;s →
          </a>
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({ t, onClick }: { t: Testimonial; onClick: () => void }) {
  return (
    <div
      className="card p-7 flex flex-col gap-4"
      onClick={onClick}
      role="button" tabIndex={0}
      onKeyDown={e => e.key === 'Enter' && onClick()}
      aria-label={`Read ${t.name}'s full case study`}
      style={{
        minWidth: 320, maxWidth: 340, flexShrink: 0,
        borderLeft: '3px solid rgba(0,209,255,0.4)',
        cursor: 'pointer', transition: 'transform .2s, box-shadow .2s',
      }}
    >
      <div style={{ fontSize: '1.6rem', lineHeight: 1, color: 'var(--acc)', marginBottom: '-.15rem' }}>&ldquo;</div>
      <p className="font-display" style={{ fontSize: '.875rem', fontStyle: 'italic', color: 'var(--t1)', lineHeight: 1.7, fontWeight: 400, flex: 1 }}>
        {t.quote}
      </p>
      {/* Result stat pill */}
      <div style={{
        display: 'inline-block', alignSelf: 'flex-start',
        background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.25)',
        borderRadius: 100, padding: '.2rem .75rem',
        fontSize: '.68rem', color: '#22C55E', letterSpacing: '.03em', fontWeight: 600,
      }}>
        {t.result}
      </div>
      {/* Gold stars */}
      <div style={{ fontSize: '.8rem', color: 'var(--gold)', letterSpacing: '.05em' }}>★★★★★</div>
      <div className="flex items-center gap-3 pt-3" style={{ borderTop: '1px solid rgba(0,209,255,0.12)' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://images.unsplash.com/photo-${t.imgId}?w=72&h=72&fit=crop&crop=face&q=80`}
          alt={t.name}
          width={36} height={36}
          className="rounded-full"
          style={{ border: '1px solid rgba(0,209,255,0.25)', objectFit: 'cover', flexShrink: 0 }}
        />
        <p className="font-mono text-xs" style={{ color: 'var(--t3)', letterSpacing: '.08em', textTransform: 'uppercase' }}>
          {t.name} &mdash; {t.role}
        </p>
      </div>
      <div className="font-mono" style={{ fontSize: '.6rem', color: 'rgba(0,209,255,0.45)', letterSpacing: '.1em', marginTop: '-.25rem' }}>
        TAP FOR FULL CASE STUDY →
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const [active, setActive] = useState<Testimonial | null>(null);
  const row = [...testimonials, ...testimonials];

  return (
    <>
      <section className="testimonials-sect z1 py-14" style={{ overflow: 'hidden', position: 'relative' }}>
        {/* Background image layer */}
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: 'url(https://paeditorial.co.uk/wp-content/uploads/2025/07/AI-in-Peer-Review.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.18,
        }} />
        {/* Dark base overlay */}
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0, zIndex: 0,
          background: 'rgba(7,15,28,0.70)',
        }} />
        <div className="max-w-6xl mx-auto px-6" style={{ position: 'relative', zIndex: 1 }}>
          <div className="rev mb-6">
            <div className="lbl lbl-gold">Client Results</div>
            <h2 style={{ fontSize: 'clamp(1.35rem,2.4vw,1.9rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-.02em' }}>
              Real businesses.<br /><span style={{ color: 'var(--gold)' }}>Real pipeline.</span>
            </h2>
            <p className="font-mono text-xs mt-3" style={{ color: 'rgba(0,209,255,0.45)', letterSpacing: '.06em' }}>
              TAP ANY CARD FOR THE FULL CASE STUDY
            </p>
          </div>
        </div>

        <div className="testimonials-marquee" style={{ position: 'relative', zIndex: 1 }}>
          <div className="testimonial-track" style={{ display: 'flex', gap: '1.25rem' }}>
            {row.map((t, i) => <TestimonialCard key={i} t={t} onClick={() => setActive(t)} />)}
          </div>
        </div>
      </section>

      {active && <CaseStudyModal t={active} onClose={() => setActive(null)} />}
    </>
  );
}
