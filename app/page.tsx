import dynamic from 'next/dynamic';
import Image from 'next/image';

/* Above-fold — always loaded */
import AnnouncementBar from './components/AnnouncementBar';
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
      <AnnouncementBar />
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

        <ProblemSection />

        <hr className="hdiv" />

        <SolutionSection />

        <hr className="hdiv" />

        <IntegrationsSection />

        <hr className="hdiv" />

        <VideoSection />

        <hr className="hdiv" />

        <HowItWorksSection />

        <hr className="hdiv" />

        <EmailPreviewSection />

        <hr className="hdiv" />

        <WhyPurLEADSection />

        <hr className="hdiv" />

        {/* Results Metrics */}
        <section className="z1 py-24" style={{ background: 'linear-gradient(135deg,#0A1C35 0%,#0C2044 60%,#0A1C35 100%)', position: 'relative' }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="rev grid md:grid-cols-[45%_55%] gap-10 items-stretch">
              {/* LEFT: image */}
              <div className="results-img-wrap" style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(232,184,75,0.25)', boxShadow: '0 0 60px rgba(232,184,75,0.1)', position: 'relative', minHeight: 340 }}>
                <Image
                  fill
                  src="https://media.licdn.com/dms/image/v2/D5612AQE59nh9oSZKrw/article-cover_image-shrink_720_1280/B56ZqISEuKJ8AI-/0/1763223031917?e=2147483647&v=beta&t=CFVHxen3Puq4nciKrtfvjFP5NV8ra1N-NoZPGQkLQFM"
                  alt="AI-powered results"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent 60%, rgba(10,28,53,0.6) 100%)' }} />
              </div>
              {/* RIGHT: heading + stats */}
              <div>
                <div className="lbl lbl-gold">Aggregate Results</div>
                <h2 style={{ fontSize: 'clamp(1.35rem,2.4vw,1.9rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-.02em', marginTop: '.5rem', marginBottom: '1.5rem' }}>
                  Numbers don&rsquo;t lie.<br /><span style={{ color: 'var(--gold)' }}>Ours don&rsquo;t either.</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-6 text-center card" style={{ borderColor: 'rgba(232,184,75,.3)', background: 'linear-gradient(160deg,rgba(232,184,75,.08),rgba(13,36,68,.65))' }}>
                    <div className="font-display font-extrabold" style={{ fontSize: '1.875rem', color: 'var(--gold)', lineHeight: 1 }}>$800K+</div>
                    <div style={{ width: 32, height: 2, background: 'var(--gold)', borderRadius: 1, margin: '.6rem auto .5rem' }} />
                    <div className="font-mono text-xs" style={{ color: 'var(--t3)', textTransform: 'uppercase', letterSpacing: '.07em' }}>Pipeline Generated</div>
                  </div>
                  {[
                    { count: 620, suffix: '',  label: 'Meetings Booked' },
                    { count: 34,  suffix: '',  label: 'Active Clients' },
                    { count: 87,  suffix: '%', label: 'Client Retention' },
                  ].map((s, i) => (
                    <div key={i} className="p-6 text-center card">
                      <div className="snum" data-count={s.count} data-suffix={s.suffix} style={{ fontSize: '1.75rem' }}>0{s.suffix}</div>
                      <div style={{ width: 32, height: 2, background: 'var(--acc)', borderRadius: 1, margin: '.6rem auto .5rem' }} />
                      <div className="font-mono text-xs" style={{ color: 'var(--t3)', textTransform: 'uppercase', letterSpacing: '.07em' }}>{s.label}</div>
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
              <h2 style={{ fontSize: 'clamp(1.35rem,2.4vw,1.9rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-.02em', color: '#0F172A' }}>
                The honest <span style={{ color: 'var(--acc)' }}>comparison.</span>
              </h2>
              <p style={{ color: '#334155', marginTop: '.5rem', fontSize: '.9375rem', maxWidth: '48ch' }}>We built this table ourselves. You should pressure-test it.</p>
            </div>
            <div className="rev" style={{ border: '1px solid var(--border)', borderRadius: 4, overflow: 'hidden' }}>
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

        <PricingSection />

        <hr className="hdiv" />

        {/* Guarantee */}
        <section className="z1 py-14" style={{ background: 'linear-gradient(160deg,#0A1C35 0%,#0E2340 60%,#0A1C35 100%)', position: 'relative' }}>
          <div className="max-w-5xl mx-auto px-6">
            <div className="rev grid md:grid-cols-[58%_42%] gap-10 items-center">
              {/* Left: all text + cards */}
              <div>
                <div className="lbl lbl-gold">Risk-Free Commitment</div>
                <h2 style={{ fontSize: 'clamp(1.35rem,2.4vw,1.9rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-.02em', marginTop: '.5rem' }}>
                  We only win<br /><span style={{ color: 'var(--gold)' }}>when you win.</span>
                </h2>
                <p style={{ color: 'var(--t2)', marginTop: '.75rem', fontSize: '.9rem', maxWidth: '46ch', marginBottom: '1rem' }}>
                  Three promises we make to every client before they sign a single thing.
                </p>
                <div className="flex flex-col gap-2">
                  {[
                    { num: '45',   tag: 'Day Guarantee',          body: "If we haven't booked your first qualified call within 45 days of launch, you don't pay for month two. No questions asked." },
                    { num: '100%', tag: 'Transparent Reporting',  body: "Weekly reports showing exactly what was sent, what replied, and what we're doing about it. Every campaign, every metric." },
                    { num: '0',    tag: 'Lock-in After Month 3',  body: "After the initial 3-month window, it's fully month-to-month. Our clients stay because they see results \u2014 not because they're locked in." },
                  ].map((g, i) => (
                    <div key={i} className="gtee" style={{ padding: '.75rem 1rem' }}>
                      <div className="gtee-num" style={{ fontSize: '1.2rem', marginBottom: '.15rem' }}>{g.num}</div>
                      <div className="font-mono" style={{ fontSize: '.6rem', color: 'var(--gold)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: '.35rem' }}>{g.tag}</div>
                      <p style={{ fontSize: '.82rem', lineHeight: 1.65, color: 'var(--t2)', margin: 0 }}>{g.body}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Right: image */}
              <div className="guarantee-img-wrap" style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(0,209,255,0.25)', boxShadow: '0 0 50px rgba(0,209,255,0.1)', minHeight: 220, position: 'relative' }}>
                <Image
                  fill
                  src="https://www.ringcentral.com/gb/en/blog/wp-content/uploads/2024/09/ai-powered-predictive-dialers-in-contact-centre-790x415.jpg"
                  alt="AI-powered outbound in action"
                  sizes="(max-width: 768px) 100vw, 42vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </section>

        <hr className="hdiv" />

        <RoiCalculator />

        <hr className="hdiv" />

        <TestimonialsSection />

        <hr className="hdiv" />

        <FreeAuditSection />

        <hr className="hdiv" />

        <FaqSection />

        <hr className="hdiv" />

        {/* Contact */}
        <section id="contact" className="z1 py-24 light-section">
          <div className="max-w-4xl mx-auto px-6">
            <div className="rev mb-10">
              <div className="lbl">Get in Touch</div>
              <h2 style={{ fontSize: 'clamp(1.35rem,2.4vw,1.9rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-.02em', marginBottom: '.5rem' }}>
                Let&rsquo;s talk <span style={{ color: 'var(--acc)' }}>pipeline.</span>
              </h2>
              <p style={{ color: 'var(--t2)', maxWidth: '42ch', fontSize: '.9375rem' }}>Have a question before booking? We&rsquo;ll get back to you within one business day.</p>
            </div>
            <div className="rev grid md:grid-cols-3 gap-px" style={{ background: 'var(--border)', border: '1px solid var(--border)', borderRadius: 4, overflow: 'hidden' }}>
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
            background: 'linear-gradient(160deg, rgba(7,21,38,0.82) 0%, rgba(10,28,53,0.76) 50%, rgba(7,21,38,0.82) 100%)',
          }} />
          <div className="max-w-xl mx-auto px-6 text-center" style={{ position: 'relative', zIndex: 1 }}>
            <div className="rev" style={{
              background: 'rgba(13,36,68,0.7)',
              border: '1px solid rgba(0,209,255,0.2)',
              borderTop: '2px solid rgba(0,209,255,0.5)',
              borderRadius: 18,
              padding: '2rem',
              backdropFilter: 'blur(12px)',
            }}>
              <div className="lbl lbl-gold justify-center" style={{ display: 'inline-flex', marginBottom: '.75rem', fontSize: '.6rem' }}>
                Now Accepting New Clients
              </div>
              <h2 className="font-display font-extrabold" style={{ fontSize: 'clamp(1.15rem,2vw,1.5rem)', lineHeight: 1.15, letterSpacing: '-.02em', color: 'var(--t1)', marginBottom: '.75rem' }}>
                Your next 15 sales calls<br /><span style={{ color: 'var(--gold)' }}>are waiting.</span>
              </h2>
              <p style={{ fontSize: '.875rem', lineHeight: 1.65, color: 'var(--t2)', maxWidth: '38ch', margin: '0 auto 1.5rem' }}>
                Book a free 30-min strategy call. We&rsquo;ll show you exactly how many meetings purLEAD can generate &mdash; and how fast.
              </p>
              <a href="https://calendly.com/atanseiyeifeoluwa" target="_blank" rel="noopener noreferrer"
                className="btn-p mag inline-flex items-center gap-2" style={{ fontSize: '.875rem', padding: '.8rem 2rem' }}>
                Book My Free Strategy Call
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <p className="mt-4 text-xs" style={{ color: 'var(--t3)' }}>No sales pressure &bull; No commitment &bull; Results or you don&rsquo;t pay month two.</p>
            </div>
          </div>
        </section>
      </main>

      <FooterWithModals />
    </>
  );
}
