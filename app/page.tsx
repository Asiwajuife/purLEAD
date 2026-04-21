import AnnouncementBar from './components/AnnouncementBar';
import NavBar from './components/NavBar';
import AmbientOrbs from './components/AmbientOrbs';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import VideoSection from './components/VideoSection';
import HowItWorksSection from './components/HowItWorksSection';
import EmailPreviewSection from './components/EmailPreviewSection';
import PricingSection from './components/PricingSection';
import RoiCalculator from './components/RoiCalculator';
import TestimonialsSection from './components/TestimonialsSection';
import FreeAuditSection from './components/FreeAuditSection';
import FaqSection from './components/FaqSection';
import FooterWithModals from './components/FooterWithModals';
import CustomCursor from './components/CustomCursor';
import ToastProvider from './components/ToastProvider';
import PageEffects from './components/PageEffects';
import ConversionLayer from './components/ConversionLayer';

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
              <span>&bull;&ensp;SaaS Companies</span><span>&bull;&ensp;Consulting Firms</span><span>&bull;&ensp;FinTech Startups</span><span>&bull;&ensp;Professional Services</span><span>&bull;&ensp;Media Agencies</span><span>&bull;&ensp;Solo Operators</span><span>&bull;&ensp;B2B Service Businesses</span><span style={{ color: 'rgba(232,184,75,.75)', fontWeight: 700 }}>&bull;&ensp;47 Clients Served</span><span style={{ color: 'rgba(34,197,94,.7)', fontWeight: 600 }}>&bull;&ensp;$1.8M+ Pipeline Generated</span>
              <span>&bull;&ensp;SaaS Companies</span><span>&bull;&ensp;Consulting Firms</span><span>&bull;&ensp;FinTech Startups</span><span>&bull;&ensp;Professional Services</span><span>&bull;&ensp;Media Agencies</span><span>&bull;&ensp;Solo Operators</span><span>&bull;&ensp;B2B Service Businesses</span><span style={{ color: 'rgba(232,184,75,.75)', fontWeight: 700 }}>&bull;&ensp;47 Clients Served</span><span style={{ color: 'rgba(34,197,94,.7)', fontWeight: 600 }}>&bull;&ensp;$1.8M+ Pipeline Generated</span>
            </div>
          </div>
        </div>

        <ProblemSection />

        <hr className="hdiv" />

        {/* Solution */}
        <section className="z1 py-24" style={{ background: 'linear-gradient(160deg,var(--surf) 0%,#0B1F3A 100%)' }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div className="rev">
                <div className="lbl lbl-gold">The Solution</div>
                <h2 style={{ fontSize: 'clamp(1.35rem,2.4vw,1.9rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-.02em', marginBottom: '1.25rem' }}>
                  Meet purLEAD &mdash;<br />your AI outbound<br /><span style={{ color: 'var(--gold)' }}>engine.</span>
                </h2>
                <p style={{ fontSize: '.9375rem', lineHeight: 1.7, maxWidth: '44ch', marginBottom: '1rem', color: 'var(--t2)' }}>
                  purLEAD builds and operates a fully AI-personalized outbound system. We identify ideal clients, craft hyper-personalized sequences, warm your sending infrastructure, and book qualified calls directly into your calendar.
                </p>
                <p style={{ fontSize: '.9375rem', lineHeight: 1.7, maxWidth: '44ch', marginBottom: '1.75rem', color: 'var(--t2)' }}>
                  No templates. No spray-and-pray. Every message is crafted with AI precision around each prospect&rsquo;s specific context &mdash; so it reads like your best sales rep wrote it, at scale.
                </p>
                <ul className="space-y-2.5">
                  {['Done-for-you. Zero lift on your end.', 'AI-personalized at every touchpoint', 'Results in 30\u201345 days, not 6 months', 'Full transparency \u2014 you own all data'].map(item => (
                    <li key={item} className="flex items-center gap-2.5 text-sm" style={{ color: 'var(--t2)' }}>
                      <span style={{ width: 16, height: 16, background: 'rgba(34,197,94,.12)', border: '1px solid rgba(34,197,94,.3)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--cta)', fontSize: 8, flexShrink: 0 }}>&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rev grid grid-cols-2 gap-3" style={{ transitionDelay: '.1s' }}>
                {[
                  { count: 12, suffix: '+', label: 'Meetings/month avg.', color: 'var(--t1)', barColor: 'var(--acc)' },
                  { count: 41, suffix: '%', label: 'Open rate (2\xd7 industry)', color: 'var(--t1)', barColor: 'var(--acc)' },
                  { count: 6,  suffix: '%+ reply', label: 'Positive reply rate', color: 'var(--t1)', barColor: 'var(--acc)' },
                  { count: 3,  suffix: ' weeks', label: 'Time to first booked call', color: 'var(--cta)', barColor: 'var(--cta)' },
                ].map((s, i) => (
                  <div key={i} className="p-7 card" style={{ borderColor: i === 3 ? 'rgba(34,197,94,.25)' : 'rgba(0,209,255,.2)' }}>
                    <div className="snum" data-count={s.count} data-suffix={s.suffix} style={{ color: s.color }}>0{s.suffix}</div>
                    <div className="sbar" style={{ background: s.barColor }} />
                    <div className="font-mono text-xs" style={{ color: 'var(--t3)', letterSpacing: '.07em', textTransform: 'uppercase' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <hr className="hdiv" />

        {/* Integrations */}
        <section className="z1 py-12 light-section">
          <div className="max-w-5xl mx-auto px-6">
            <p className="rev font-mono text-xs text-center mb-7" style={{ color: 'var(--t3)', letterSpacing: '.14em', textTransform: 'uppercase' }}>Connects with your existing stack &mdash; no rip-and-replace</p>
            <div className="rev flex flex-wrap items-center justify-center gap-3">
              {[
                { name: 'HubSpot',    color: '#FF7A59' },
                { name: 'Salesforce', color: '#00A1E0' },
                { name: 'Apollo.io',  color: '#7C3AED' },
                { name: 'Clay',       color: '#A855F7' },
                { name: 'Instantly',  color: 'var(--acc)' },
                { name: 'Slack',      color: '#E01E5A' },
                { name: 'LinkedIn',   color: '#0A66C2' },
                { name: 'Gmail',      color: '#EA4335' },
                { name: 'Zapier',     color: '#22C55E' },
                { name: 'Pipedrive',  color: '#0052CC' },
                { name: 'Smartlead', color: '#34d399' },
                { name: 'Notion',     color: '#818cf8' },
              ].map(p => (
                <div key={p.name} className="int-pill">
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: p.color, display: 'inline-block', flexShrink: 0 }} />
                  <span className="font-mono text-xs" style={{ color: 'var(--t2)' }}>{p.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr className="hdiv" />

        <VideoSection />

        <hr className="hdiv" />

        <HowItWorksSection />

        <hr className="hdiv" />

        <EmailPreviewSection />

        <hr className="hdiv" />

        {/* Benefits */}
        <section className="z1 py-24 light-section">
          <div className="max-w-6xl mx-auto px-6">
            <div className="rev mb-12">
              <div className="lbl">Why purLEAD</div>
              <h2 style={{ fontSize: 'clamp(1.35rem,2.4vw,1.9rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-.02em' }}>
                Built for businesses<br />serious about <span style={{ color: 'var(--acc)' }}>growth.</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                {
                  delay: '0s',
                  svg: <><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></>,
                  title: 'AI-Personalized at Scale',
                  body: 'Every email references something real \u2014 company news, role, recent activity, or pain. Not a mail-merge. Actual intelligence.',
                },
                {
                  delay: '.06s',
                  svg: <><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></>,
                  title: 'Calls Booked, Not Just Leads',
                  body: "We don\u2019t hand you a list and call it a day. We manage responses and get qualified prospects scheduled so you show up and close.",
                },
                {
                  delay: '.12s',
                  svg: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />,
                  title: 'Faster Than Any Hire',
                  body: 'An SDR takes 90 days to ramp. purLEAD is live in 2 weeks and booking in 30. No recruiting, no onboarding, no overhead.',
                },
                {
                  delay: '.18s',
                  svg: <><path d="M3 3v18h18"/><path d="M9 17V9l4 4 4-8"/></>,
                  title: 'Full Accountability',
                  body: "Weekly reporting. Transparent metrics. You always know what\u2019s sending, what\u2019s working, and what we\u2019re optimizing. No black boxes.",
                },
                {
                  delay: '.24s',
                  svg: <><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></>,
                  title: 'Precision Targeting',
                  body: 'We build targeted, verified prospect lists from premium data sources. Only real decision-makers matching your ICP enter the pipeline.',
                },
                {
                  delay: '.3s',
                  svg: <><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 102.13-9.36L1 10"/></>,
                  title: 'Continuously Optimized',
                  body: 'Our system learns as it runs. We test, iterate, and improve reply rates every week. Your outbound gets sharper over time, not stale.',
                },
              ].map((b, i) => (
                <div key={i} className="rev tilt card p-6 flex gap-4" style={{ transitionDelay: b.delay }}>
                  <div className="ib">
                    <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{b.svg}</svg>
                  </div>
                  <div>
                    <h3 className="font-display font-bold mb-1.5" style={{ color: 'var(--t1)', fontSize: '.9375rem' }}>{b.title}</h3>
                    <p style={{ fontSize: '.8375rem', lineHeight: 1.65, color: 'var(--t2)' }}>{b.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr className="hdiv" />

        {/* Results Metrics */}
        <section className="z1 py-24" style={{ background: 'linear-gradient(135deg,#0A1C35 0%,#0C2044 60%,#0A1C35 100%)', position: 'relative' }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="rev text-center mb-12">
              <div className="lbl lbl-gold justify-center" style={{ display: 'inline-flex' }}>Aggregate Results</div>
              <h2 style={{ fontSize: 'clamp(1.35rem,2.4vw,1.9rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-.02em', marginTop: '.5rem' }}>
                Numbers don&rsquo;t lie.<br /><span style={{ color: 'var(--gold)' }}>Ours don&rsquo;t either.</span>
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 rev">
              <div className="p-8 text-center card" style={{ borderColor: 'rgba(232,184,75,.3)', background: 'linear-gradient(160deg,rgba(232,184,75,.08),rgba(13,36,68,.65))' }}>
                <div className="font-display font-extrabold" style={{ fontSize: '1.875rem', color: 'var(--gold)', lineHeight: 1 }}>$1.8M+</div>
                <div style={{ width: 32, height: 2, background: 'var(--gold)', borderRadius: 1, margin: '.6rem auto .5rem' }} />
                <div className="font-mono text-xs" style={{ color: 'var(--t3)', textTransform: 'uppercase', letterSpacing: '.07em' }}>Pipeline Generated</div>
              </div>
              {[
                { count: 620, suffix: '',  label: 'Meetings Booked' },
                { count: 34,  suffix: '',  label: 'Active Clients' },
                { count: 87,  suffix: '%', label: 'Client Retention' },
              ].map((s, i) => (
                <div key={i} className="p-8 text-center card">
                  <div className="snum" data-count={s.count} data-suffix={s.suffix} style={{ fontSize: '1.75rem' }}>0{s.suffix}</div>
                  <div style={{ width: 32, height: 2, background: 'var(--acc)', borderRadius: 1, margin: '.6rem auto .5rem' }} />
                  <div className="font-mono text-xs" style={{ color: 'var(--t3)', textTransform: 'uppercase', letterSpacing: '.07em' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <hr className="hdiv" />

        {/* Comparison Table */}
        <section className="z1 py-24 light-section">
          <div className="max-w-5xl mx-auto px-6">
            <div className="rev mb-12">
              <div className="lbl">How We Compare</div>
              <h2 style={{ fontSize: 'clamp(1.35rem,2.4vw,1.9rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-.02em' }}>
                The honest <span style={{ color: 'var(--acc)' }}>comparison.</span>
              </h2>
              <p style={{ color: 'var(--t2)', marginTop: '.5rem', fontSize: '.9375rem', maxWidth: '48ch' }}>We built this table ourselves. You should pressure-test it.</p>
            </div>
            <div className="rev overflow-x-auto" style={{ border: '1px solid var(--border)', borderRadius: 4, overflow: 'hidden' }}>
              <table className="cmp-table">
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
        </section>

        <hr className="hdiv" />

        <PricingSection />

        <hr className="hdiv" />

        {/* Guarantee */}
        <section className="z1 py-24" style={{ background: 'linear-gradient(160deg,#0A1C35 0%,#0E2340 60%,#0A1C35 100%)', position: 'relative' }}>
          <div className="max-w-5xl mx-auto px-6">
            <div className="rev text-center mb-12">
              <div className="lbl lbl-gold justify-center" style={{ display: 'inline-flex' }}>Risk-Free Commitment</div>
              <h2 style={{ fontSize: 'clamp(1.35rem,2.4vw,1.9rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-.02em', marginTop: '.5rem' }}>
                We only win<br /><span style={{ color: 'var(--gold)' }}>when you win.</span>
              </h2>
              <p style={{ color: 'var(--t2)', marginTop: '.75rem', fontSize: '.9375rem', maxWidth: '46ch', marginLeft: 'auto', marginRight: 'auto' }}>Three promises we make to every client before they sign a single thing.</p>
            </div>
            <div className="rev grid md:grid-cols-3 gap-4">
              {[
                { num: '45',   tag: 'Day Guarantee',            body: "If we haven\u2019t booked your first qualified call within 45 days of launch, you don\u2019t pay for month two. No questions asked." },
                { num: '100%', tag: 'Transparent Reporting',    body: "Weekly reports showing exactly what was sent, what replied, and what we\u2019re doing about it. Every campaign, every metric, every week." },
                { num: '0',    tag: 'Lock-in After Month 3',   body: "After the initial 3-month window, it\u2019s fully month-to-month. Our clients stay because they see results \u2014 not because they\u2019re locked in." },
              ].map((g, i) => (
                <div key={i} className="gtee">
                  <div className="gtee-num mb-2">{g.num}</div>
                  <div className="font-mono text-xs mb-3" style={{ color: 'var(--gold)', letterSpacing: '.1em', textTransform: 'uppercase' }}>{g.tag}</div>
                  <p style={{ fontSize: '.875rem', lineHeight: 1.7, color: 'var(--t2)' }}>{g.body}</p>
                </div>
              ))}
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
                  href: 'mailto:hello@purlead.co',
                  target: undefined,
                  svg: <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>,
                  title: 'Email Us',
                  sub: 'hello@purlead.co',
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
        <section className="z1 py-28" style={{ background: 'linear-gradient(160deg,#071526 0%,#0A1C35 40%,#0C2040 70%,#071526 100%)', position: 'relative' }}>
          <div className="max-w-2xl mx-auto px-6 text-center" style={{ position: 'relative', zIndex: 1 }}>
            <div className="rev">
              <div className="lbl lbl-gold justify-center" style={{ display: 'inline-flex', marginBottom: '1rem' }}>
                Now Accepting New Clients
              </div>
              <h2 className="font-display font-extrabold" style={{ fontSize: 'clamp(1.5rem,2.8vw,2.2rem)', lineHeight: 1.1, letterSpacing: '-.02em', color: 'var(--t1)', marginBottom: '1.25rem' }}>
                Your next 15 sales calls<br /><span style={{ color: 'var(--gold)' }}>are waiting.</span>
              </h2>
              <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--t2)', maxWidth: '46ch', margin: '0 auto 2rem' }}>
                Book a free 30-minute strategy call and we&rsquo;ll show you exactly how many meetings purLEAD can generate for your business &mdash; and how fast.
              </p>
              <a href="https://calendly.com/atanseiyeifeoluwa" target="_blank" rel="noopener noreferrer"
                className="btn-p mag inline-flex items-center gap-2.5" style={{ fontSize: '.9375rem', padding: '1rem 2.5rem' }}>
                Book My Free Strategy Call
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <p className="mt-5 text-sm" style={{ color: 'var(--t3)' }}>No sales pressure &bull; No commitment &bull; Results or you don&rsquo;t pay month two.</p>
            </div>
          </div>
        </section>
      </main>

      <FooterWithModals />
    </>
  );
}
