import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Suspense } from 'react';

/* Above-fold — always loaded */
import NavBar from './components/NavBar';
import AmbientOrbs from './components/AmbientOrbs';
import HeroSection from './components/HeroSection';
import CustomCursor from './components/CustomCursor';
import ToastProvider from './components/ToastProvider';
import PageEffects from './components/PageEffects';
import ConversionLayer from './components/ConversionLayer';

/* Below-fold — lazy loaded */
const ProblemSection      = dynamic(() => import('./components/ProblemSection'));
const SolutionSection     = dynamic(() => import('./components/SolutionSection'));
const IntegrationsSection = dynamic(() => import('./components/IntegrationsSection'));
const VideoSection        = dynamic(() => import('./components/VideoSection'));
const HowItWorksSection   = dynamic(() => import('./components/HowItWorksSection'));
const EmailPreviewSection = dynamic(() => import('./components/EmailPreviewSection'));
const WhyPurLEADSection   = dynamic(() => import('./components/WhyPurLEADSection'));
const PricingSection      = dynamic(() => import('./components/PricingSection'));
const RoiCalculator       = dynamic(() => import('./components/RoiCalculator'));
const TestimonialsSection = dynamic(() => import('./components/TestimonialsSection'));
const FreeAuditSection    = dynamic(() => import('./components/FreeAuditSection'));
const FaqSection          = dynamic(() => import('./components/FaqSection'));
const FooterWithModals    = dynamic(() => import('./components/FooterWithModals'));

export default function Home() {
  return (
    <>
      <CustomCursor />
      <AmbientOrbs />
      <ConversionLayer />
      <ToastProvider />
      <PageEffects />

      <a href="#main-content" className="skip-link">Skip to content</a>
      <NavBar />

      <main id="main-content">
        <HeroSection />

        <hr className="gdiv" />

        {/* Ticker */}
        <div className="z1 overflow-hidden py-3" style={{ background: 'linear-gradient(90deg,#071626,#0D2444,#071626)', borderTop: '1px solid rgba(232,184,75,.12)', borderBottom: '1px solid rgba(0,209,255,.1)' }}>
          <div className="flex overflow-hidden select-none">
            <div className="ticker-track text-xs font-medium" style={{ color: 'rgba(148,163,184,0.55)', letterSpacing: '.04em' }}>
              <span>&bull;&ensp;SaaS Companies</span><span>&bull;&ensp;Consulting Firms</span><span>&bull;&ensp;FinTech Startups</span><span>&bull;&ensp;Professional Services</span><span>&bull;&ensp;Media Agencies</span><span>&bull;&ensp;Solo Operators</span><span>&bull;&ensp;B2B Service Businesses</span><span style={{ color: 'rgba(232,184,75,.75)', fontWeight: 700 }}>&bull;&ensp;47 Clients Served</span><span style={{ color: 'rgba(34,197,94,.7)', fontWeight: 600 }}>&bull;&ensp;$800K+ Pipeline Generated</span>
              <span>&bull;&ensp;SaaS Companies</span><span>&bull;&ensp;Consulting Firms</span><span>&bull;&ensp;FinTech Startups</span><span>&bull;&ensp;Professional Services</span><span>&bull;&ensp;Media Agencies</span><span>&bull;&ensp;Solo Operators</span><span>&bull;&ensp;B2B Service Businesses</span><span style={{ color: 'rgba(232,184,75,.75)', fontWeight: 700 }}>&bull;&ensp;47 Clients Served</span><span style={{ color: 'rgba(34,197,94,.7)', fontWeight: 600 }}>&bull;&ensp;$800K+ Pipeline Generated</span>
            </div>
          </div>
        </div>

        <Suspense fallback={null}><ProblemSection /></Suspense>

        <hr className="hdiv" />

        <Suspense fallback={null}><SolutionSection /></Suspense>

        <hr className="hdiv" />

        <Suspense fallback={null}><IntegrationsSection /></Suspense>

        <hr className="hdiv" />

        <Suspense fallback={null}><VideoSection /></Suspense>

        <hr className="hdiv" />

        <Suspense fallback={null}><HowItWorksSection /></Suspense>

        <hr className="hdiv" />

        <Suspense fallback={null}><EmailPreviewSection /></Suspense>

        <hr className="hdiv" />

        <Suspense fallback={null}><WhyPurLEADSection /></Suspense>

        <hr className="hdiv" />

        {/* Results Metrics — pro max */}
        <section className="z1 py-24" style={{ background: 'linear-gradient(135deg,#0A1C35 0%,#0C2044 60%,#0A1C35 100%)', position: 'relative', overflow: 'hidden' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: '50%', left: '25%', transform: 'translate(-50%,-50%)', width: 640, height: 640, background: 'radial-gradient(circle, rgba(232,184,75,0.055) 0%, transparent 65%)', pointerEvents: 'none' }} />
          <div className="max-w-6xl mx-auto px-6" style={{ position: 'relative', zIndex: 1 }}>
            <div className="rev grid md:grid-cols-[45%_55%] gap-10 items-stretch">

              {/* LEFT: image + floating $800K badge */}
              <div className="results-img-wrap" style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(232,184,75,0.2)', boxShadow: '0 0 80px rgba(232,184,75,0.09)', position: 'relative', minHeight: 360 }}>
                <Image
                  fill
                  src="https://media.licdn.com/dms/image/v2/D5612AQE59nh9oSZKrw/article-cover_image-shrink_720_1280/B56ZqISEuKJ8AI-/0/1763223031917?e=2147483647&v=beta&t=CFVHxen3Puq4nciKrtfvjFP5NV8ra1N-NoZPGQkLQFM"
                  alt="AI-powered results"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(7,14,26,0.18) 0%, rgba(10,28,53,0.55) 100%)' }} />
                {/* Floating metric badge */}
                <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', background: 'rgba(7,13,24,0.9)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(232,184,75,0.28)', borderRadius: 16, padding: '1rem 1.375rem' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, transparent, #E8B84B, transparent)', borderRadius: '16px 16px 0 0', opacity: .7 }} />
                  <div style={{ fontFamily: 'var(--font-syne)', fontSize: '1.875rem', fontWeight: 900, lineHeight: 1, background: 'linear-gradient(135deg,#E8B84B 0%,#F5D07A 50%,#C89020 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>$800K+</div>
                  <div className="font-mono" style={{ fontSize: '.6rem', color: 'rgba(148,163,184,0.65)', letterSpacing: '.14em', textTransform: 'uppercase', marginTop: '.3rem' }}>Pipeline Generated</div>
                </div>
              </div>

              {/* RIGHT: heading + stat rows */}
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 0 }}>
                <div className="lbl lbl-gold">Aggregate Results</div>
                <h2 style={{ fontSize: 'clamp(1.65rem,3vw,2.4rem)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-.03em', marginTop: '.5rem', marginBottom: '1.75rem' }}>
                  Numbers don&rsquo;t lie.<br /><span style={{ color: 'var(--gold)' }}>Ours don&rsquo;t either.</span>
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '.875rem' }}>
                  {[
                    { count: 620, suffix: '',  label: 'Meetings Booked',  color: '#00D1FF', rgb: '0,209,255' },
                    { count: 34,  suffix: '',  label: 'Active Clients',   color: '#22C55E', rgb: '34,197,94' },
                    { count: 87,  suffix: '%', label: 'Client Retention', color: '#E8B84B', rgb: '232,184,75' },
                  ].map((s, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', background: `rgba(${s.rgb},0.04)`, border: `1px solid rgba(${s.rgb},0.15)`, borderRadius: 16, padding: '1.25rem 1.5rem', transition: 'border-color .3s, background .3s' }}>
                      <div style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(1.75rem,3.5vw,2.25rem)', fontWeight: 900, lineHeight: 1, color: s.color, minWidth: '3.5ch', flexShrink: 0 }}>
                        <span className="snum" data-count={s.count} data-suffix={s.suffix}>0{s.suffix}</span>
                      </div>
                      <div style={{ width: 1, height: 34, background: `rgba(${s.rgb},0.22)`, flexShrink: 0 }} />
                      <div className="font-mono" style={{ fontSize: '.72rem', color: 'rgba(148,163,184,0.6)', textTransform: 'uppercase', letterSpacing: '.1em' }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        <hr className="hdiv" />

        {/* Comparison Table */}
        <section className="z1 py-24 light-section" style={{ position: 'relative', overflow: 'hidden' }}>
          <Image
            fill
            src="https://cdn.govexec.com/media/featured/gai-accelerated_ai/gaiacceleratedaiparallax.jpg"
            alt=""
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center', zIndex: 0 }}
          />
          <div aria-hidden="true" style={{
            position: 'absolute', inset: 0, zIndex: 0,
            background: 'rgba(255,255,255,0.72)',
          }} />
          <div className="max-w-5xl mx-auto px-6" style={{ position: 'relative', zIndex: 1 }}>
            <div className="rev mb-12">
              <div className="lbl" style={{ color: '#0F172A', borderColor: 'rgba(0,0,0,0.15)' }}>How We Compare</div>
              <h2 style={{ fontSize: 'clamp(1.65rem,3vw,2.4rem)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-.03em', color: '#0F172A' }}>
                The honest <span style={{ color: 'var(--acc)' }}>comparison.</span>
              </h2>
              <p style={{ color: '#334155', marginTop: '.5rem', fontSize: '.9375rem', maxWidth: '48ch' }}>We built this table ourselves. You should pressure-test it.</p>
            </div>
            <div className="rev cmp-table-wrap" style={{ border: '1px solid rgba(0,0,0,0.1)', borderRadius: 14, overflow: 'hidden', boxShadow: '0 4px 32px rgba(0,0,0,0.07)' }}>
            <div className="overflow-x-auto">
              <table className="cmp-table" style={{ minWidth: 520 }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: 'left', width: '28%' }}>Criteria</th>
                    <th className="cmp-hl">purLEAD</th>
                    <th>SDR Hire</th>
                    <th>DIY Outreach</th>
                    <th>Generic Agency</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Time to first result',       <span className="cmp-yes">2&ndash;4 weeks</span>,         <span className="cmp-no">90+ days</span>,                   <span className="cmp-mid">4&ndash;8 weeks</span>,         <span className="cmp-mid">4&ndash;6 weeks</span>],
                    ['Monthly cost',               <span className="cmp-yes">$997&ndash;$3,997</span>,       <span className="cmp-no">$7,000&ndash;$10,000</span>,         <span className="cmp-mid">$200&ndash;$500 tools</span>,   <span className="cmp-mid">$3,000&ndash;$8,000</span>],
                    ['AI personalization',         <span className="cmp-yes">&#10003; Every message</span>, <span className="cmp-no">&#10007; Manual only</span>,         <span className="cmp-no">&#10007; Templates</span>,       <span className="cmp-no">&#10007; Templates</span>],
                    ['Reply management',           <span className="cmp-yes">&#10003; Fully handled</span>, <span className="cmp-yes">&#10003; Handled</span>,            <span className="cmp-no">&#10007; You handle it</span>,   <span className="cmp-mid">&#126; Partial</span>],
                    ['Reporting & transparency',   <span className="cmp-yes">&#10003; Weekly detailed</span>, <span className="cmp-mid">&#126; Varies</span>,            <span className="cmp-no">&#10007; Manual tracking</span>, <span className="cmp-no">&#10007; Usually opaque</span>],
                    ['Setup effort (your side)',   <span className="cmp-yes">&#10003; 1 onboarding call</span>, <span className="cmp-no">&#10007; Full hiring process</span>, <span className="cmp-no">&#10007; You build everything</span>, <span className="cmp-mid">&#126; Medium</span>],
                    ['Scalability',               <span className="cmp-yes">&#10003; Instant plan upgrade</span>, <span className="cmp-no">&#10007; Hire another rep</span>, <span className="cmp-mid">&#126; Limited by your time</span>, <span className="cmp-mid">&#126; Slow</span>],
                    ['Cancel anytime',            <span className="cmp-yes">&#10003; After 3 months</span>, <span className="cmp-no">&#10007; Employment law</span>,    <span className="cmp-yes">&#10003; Yes</span>,           <span className="cmp-mid">&#126; Contract-dependent</span>],
                  ].map(([label, pur, sdr, diy, agency], i) => (
                    <tr key={i}>
                      <td>{label}</td>
                      <td className="cmp-hl">{pur}</td>
                      <td>{sdr}</td>
                      <td>{diy}</td>
                      <td>{agency}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            </div>
          </div>
        </section>

        <hr className="hdiv" />

        <Suspense fallback={null}><PricingSection /></Suspense>

        <hr className="hdiv" />

        {/* Guarantee \u2014 pro max with strategic image */}
        <section className="z1 py-24" style={{ background: 'linear-gradient(160deg,#07111F 0%,#0A1C35 50%,#07111F 100%)', position: 'relative', overflow: 'hidden' }}>
          <div aria-hidden="true" style={{ position: 'absolute', top: '20%', right: '8%', width: 560, height: 560, background: 'radial-gradient(circle, rgba(0,209,255,0.045) 0%, transparent 65%)', pointerEvents: 'none' }} />
          <div aria-hidden="true" style={{ position: 'absolute', bottom: '10%', left: '4%', width: 400, height: 400, background: 'radial-gradient(circle, rgba(232,184,75,0.035) 0%, transparent 65%)', pointerEvents: 'none' }} />

          <div className="max-w-6xl mx-auto px-6" style={{ position: 'relative', zIndex: 1 }}>
            <div className="rev grid md:grid-cols-[55%_45%] gap-12 items-center">

              {/* LEFT: label + heading + 3 horizontal guarantee rows */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="lbl lbl-gold">Risk-Free Commitment</div>
                <h2 style={{ fontSize: 'clamp(1.65rem,3vw,2.4rem)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-.03em', marginTop: '.5rem', marginBottom: '.875rem' }}>
                  We only win<br /><span style={{ color: 'var(--gold)' }}>when you win.</span>
                </h2>
                <p style={{ color: 'var(--t2)', fontSize: '.9375rem', maxWidth: '44ch', lineHeight: 1.65, marginBottom: '2rem' }}>
                  Three promises we make to every client before they sign a single thing.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '.875rem' }}>
                  {([
                    {
                      num: '45', unit: ' days',
                      tag: 'Day Guarantee',
                      body: "If we haven't booked your first qualified call within 45 days of launch, you don't pay for month two. No questions asked.",
                      color: '#E8B84B', rgb: '232,184,75',
                      iconPath: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>,
                    },
                    {
                      num: '100', unit: '%',
                      tag: 'Transparent Reporting',
                      body: "Weekly reports showing exactly what was sent, what replied, and what we're doing about it. Every campaign, every metric.",
                      color: '#00D1FF', rgb: '0,209,255',
                      iconPath: <><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></>,
                    },
                    {
                      num: '0', unit: '',
                      tag: 'Lock-in After Month 3',
                      body: "After the initial 3-month window, it's fully month-to-month. Our clients stay because they see results \u2014 not because they're locked in.",
                      color: '#22C55E', rgb: '34,197,94',
                      iconPath: <><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></>,
                    },
                  ] as const).map((g, i) => (
                    <div key={i} className="rev" style={{ transitionDelay: `${i * 0.08}s`, display: 'flex', alignItems: 'flex-start', gap: '1.25rem', background: `rgba(${g.rgb},0.04)`, border: `1px solid rgba(${g.rgb},0.15)`, borderRadius: 16, padding: '1.25rem 1.5rem', position: 'relative', overflow: 'hidden' }}>
                      {/* Left accent bar */}
                      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, background: `linear-gradient(180deg, transparent, ${g.color}, transparent)`, opacity: .5, borderRadius: '16px 0 0 16px' }} />
                      {/* Icon badge */}
                      <div style={{ width: 44, height: 44, borderRadius: 12, background: `rgba(${g.rgb},0.1)`, border: `1px solid rgba(${g.rgb},0.22)`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: g.color, flexShrink: 0 }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{g.iconPath}</svg>
                      </div>
                      {/* Content */}
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '.5rem', marginBottom: '.3rem', flexWrap: 'wrap' }}>
                          <span style={{ fontFamily: 'var(--font-syne)', fontSize: 'clamp(1.375rem,2.5vw,1.75rem)', fontWeight: 900, lineHeight: 1, color: g.color }}>{g.num}<span style={{ fontSize: '.8rem', opacity: .7 }}>{g.unit}</span></span>
                          <span className="font-mono" style={{ fontSize: '.6rem', color: g.color, letterSpacing: '.12em', textTransform: 'uppercase', fontWeight: 700, opacity: .75 }}>{g.tag}</span>
                        </div>
                        <p style={{ fontSize: '.8125rem', lineHeight: 1.68, color: 'var(--t2)', margin: 0 }}>{g.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT: image card with floating trust badges */}
              <div style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(0,209,255,0.14)', boxShadow: '0 0 80px rgba(0,209,255,0.07)', position: 'relative', minHeight: 480 }}>
                <Image
                  fill
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&q=80"
                  alt="Partnership and trust"
                  sizes="(max-width: 768px) 100vw, 45vw"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
                {/* Overlay */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(7,14,26,0.18) 0%, rgba(7,20,44,0.62) 100%)' }} />

                {/* TOP-LEFT badge: 45-Day Guarantee */}
                <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem', background: 'rgba(7,13,24,0.9)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(232,184,75,0.28)', borderRadius: 14, padding: '.875rem 1.125rem', display: 'flex', alignItems: 'center', gap: '.75rem' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, transparent, #E8B84B, transparent)', borderRadius: '14px 14px 0 0', opacity: .7 }} />
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(232,184,75,0.12)', border: '1px solid rgba(232,184,75,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#E8B84B', flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-syne)', fontSize: '1.375rem', fontWeight: 900, lineHeight: 1, color: '#E8B84B' }}>45-Day</div>
                    <div className="font-mono" style={{ fontSize: '.57rem', color: 'rgba(148,163,184,0.6)', letterSpacing: '.12em', textTransform: 'uppercase', marginTop: '.25rem' }}>Money-Back Guarantee</div>
                  </div>
                </div>

                {/* BOTTOM-RIGHT badge: Zero Lock-in */}
                <div style={{ position: 'absolute', bottom: '1.5rem', right: '1.5rem', background: 'rgba(7,13,24,0.9)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(34,197,94,0.28)', borderRadius: 14, padding: '.875rem 1.125rem' }}>
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, transparent, #22C55E, transparent)', borderRadius: '0 0 14px 14px', opacity: .7 }} />
                  <div style={{ fontFamily: 'var(--font-syne)', fontSize: '1.875rem', fontWeight: 900, lineHeight: 1, color: '#22C55E', textShadow: '0 0 20px rgba(34,197,94,0.25)' }}>$0</div>
                  <div className="font-mono" style={{ fontSize: '.57rem', color: 'rgba(148,163,184,0.6)', letterSpacing: '.12em', textTransform: 'uppercase', marginTop: '.25rem' }}>Zero Lock-in Fees</div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <hr className="hdiv" />

        <Suspense fallback={null}><RoiCalculator /></Suspense>

        <hr className="hdiv" />

        <Suspense fallback={null}><TestimonialsSection /></Suspense>

        <hr className="hdiv" />

        <Suspense fallback={null}><FreeAuditSection /></Suspense>

        <hr className="hdiv" />

        <Suspense fallback={null}><FaqSection /></Suspense>

        <hr className="hdiv" />

        {/* Contact */}
        <section id="contact" className="z1 py-24 light-section">
          <div className="max-w-4xl mx-auto px-6">
            <div className="rev mb-10">
              <div className="lbl">Get in Touch</div>
              <h2 style={{ fontSize: 'clamp(1.65rem,3vw,2.4rem)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-.03em', marginBottom: '.5rem' }}>
                Let&rsquo;s talk <span style={{ color: 'var(--acc)' }}>pipeline.</span>
              </h2>
              <p style={{ color: 'var(--t2)', maxWidth: '42ch', fontSize: '.9375rem' }}>Have a question before booking? We&rsquo;ll get back to you within one business day.</p>
            </div>
            <div className="rev grid md:grid-cols-3 gap-px" style={{ background: 'rgba(0,209,255,0.08)', border: '1px solid rgba(0,0,0,0.08)', borderRadius: 16, overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
              {[
                {
                  href: 'mailto:hello@purlead.com',
                  target: undefined,
                  svg: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>,
                  title: 'Email Us',
                  sub: 'hello@purlead.com',
                  cta: 'SEND A MESSAGE \u2192',
                },
                {
                  href: 'https://calendly.com/atanseiyeifeoluwa',
                  target: '_blank',
                  svg: <><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></>,
                  title: 'Book a Call',
                  sub: 'Free 30-min strategy session',
                  cta: 'OPEN CALENDLY \u2192',
                },
                {
                  href: 'https://linkedin.com/company/purlead',
                  target: '_blank',
                  svg: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />,
                  title: 'LinkedIn',
                  sub: 'Follow our company page',
                  cta: 'VIEW PROFILE \u2192',
                  fill: true,
                },
              ].map((c, i) => (
                <a key={i} href={c.href} target={c.target} rel={c.target ? 'noopener noreferrer' : undefined}
                  className="block p-7 contact-card"
                  style={{ background: 'var(--surf)' }}>
                  <div className="ib mb-4">
                    <svg width="18" height="18" fill={c.fill ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke={c.fill ? undefined : 'currentColor'} strokeWidth={c.fill ? undefined : '1.8'} strokeLinecap="round" strokeLinejoin="round">{c.svg}</svg>
                  </div>
                  <div className="font-display font-bold mb-1" style={{ color: 'var(--t1)', fontSize: '.9375rem' }}>{c.title}</div>
                  <div className="text-sm mb-3" style={{ color: 'var(--t2)' }}>{c.sub}</div>
                  <div className="font-mono text-xs" style={{ color: 'var(--acc)', letterSpacing: '.08em' }}>{c.cta}</div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="z1 py-16" style={{ position: 'relative', overflow: 'hidden' }}>
          <Image
            fill
            src="https://plaksha.edu.in/blog/storage/ai-image-2.jpeg"
            alt=""
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center', zIndex: 0 }}
          />
          <div aria-hidden="true" style={{
            position: 'absolute', inset: 0, zIndex: 0,
            background: 'linear-gradient(160deg, rgba(5,14,28,0.9) 0%, rgba(9,24,46,0.86) 50%, rgba(5,14,28,0.9) 100%)',
          }} />
          <div className="max-w-3xl mx-auto px-6" style={{ position: 'relative', zIndex: 1 }}>
            <div className="rev-blur" style={{
              background: 'rgba(9,20,40,0.88)',
              border: '1px solid rgba(0,209,255,0.14)',
              borderRadius: 16,
              backdropFilter: 'blur(20px)',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,.5), 0 0 0 1px rgba(255,255,255,.03)',
            }}>

              {/* Status bar */}
              <div style={{
                borderBottom: '1px solid rgba(0,209,255,0.09)',
                padding: '.55rem 1.25rem',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                background: 'rgba(0,209,255,0.03)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
                  <span className="live-dot" style={{ width: 6, height: 6, borderRadius: '50%', background: '#22C55E', display: 'inline-block', flexShrink: 0 }} />
                  <span className="font-mono" style={{ fontSize: '.6rem', color: 'var(--t3)', letterSpacing: '.1em', textTransform: 'uppercase' }}>Now Accepting New Clients</span>
                </div>
                <span className="font-mono" style={{ fontSize: '.6rem', color: 'var(--gold)', fontWeight: 700, letterSpacing: '.06em', animation: 'scarcityPulse 2.5s ease-in-out infinite' }}>3 spots remaining</span>
              </div>

              {/* Body */}
              <div className="grid md:grid-cols-[1fr_220px] gap-6 items-center" style={{ padding: '1.5rem 1.25rem' }}>

                {/* Left: copy */}
                <div>
                  <h2 className="font-display font-extrabold" style={{ fontSize: 'clamp(1.1rem,2.2vw,1.5rem)', lineHeight: 1.18, letterSpacing: '-.03em', color: 'var(--t1)', marginBottom: '.5rem' }}>
                    Your next 15 sales calls<br /><span style={{ color: 'var(--gold)' }}>are waiting.</span>
                  </h2>
                  <p style={{ fontSize: '.8125rem', lineHeight: 1.7, color: 'var(--t2)', maxWidth: '52ch', marginBottom: '1.1rem' }}>
                    Book a free 30-min strategy call. We&rsquo;ll show you exactly how many meetings purLEAD can generate &mdash; and how fast.
                  </p>
                  <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                    {[['18', 'calls booked this month'], ['9.4%', 'avg reply rate'], ['11 days', 'to first booking']].map(([val, lbl]) => (
                      <div key={lbl}>
                        <div className="font-display" style={{ fontSize: '.95rem', fontWeight: 800, color: 'var(--acc)', lineHeight: 1 }}>{val}</div>
                        <div className="font-mono" style={{ fontSize: '.56rem', color: 'var(--t3)', letterSpacing: '.07em', marginTop: '.15rem', textTransform: 'uppercase' }}>{lbl}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: CTA */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
                  <a href="https://calendly.com/atanseiyeifeoluwa" target="_blank" rel="noopener noreferrer"
                    className="btn-p mag inline-flex items-center justify-center gap-2"
                    style={{ fontSize: '.8125rem', padding: '.75rem 1.25rem', width: '100%', whiteSpace: 'nowrap' }}>
                    Book Free Strategy Call
                    <svg width="13" height="13" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </a>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '.3rem' }}>
                    {['No commitment required', 'Results or no charge month two', 'Free — no credit card'].map(item => (
                      <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '.375rem' }}>
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0 }}><path d="M2 6l3 3 5-5" stroke="#22C55E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        <span style={{ fontSize: '.72rem', color: 'var(--t3)', lineHeight: 1.4 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Suspense fallback={null}><FooterWithModals /></Suspense>
    </>
  );
}
