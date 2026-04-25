'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function EmailPreviewSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setRevealed(true); obs.disconnect(); } },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const P = ({ delay, children }: { delay: string; children: React.ReactNode }) => (
    <p className={`email-para${revealed ? ' vis' : ''}`} style={{ marginBottom: '.75rem', transitionDelay: delay }}>
      {children}
    </p>
  );

  return (
    <section className="z1 py-24 light-section" style={{ position: 'relative', overflow: 'hidden' }}>
      <Image
        fill
        src="https://t3.ftcdn.net/jpg/07/69/73/28/360_F_769732816_wJtrCLNzSffmJn20BdW36sbraDQgPnqj.jpg"
        alt=""
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'center', zIndex: 0 }}
      />
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, zIndex: 0,
        background: 'rgba(255,255,255,0.55)',
      }} />
      <div className="max-w-6xl mx-auto px-6" style={{ position: 'relative', zIndex: 1 }}>
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* Left copy */}
          <div className="rev">
            <div className="lbl" style={{ color: '#0F172A', borderColor: 'rgba(0,0,0,0.15)' }}>What It Looks Like</div>
            <h2 style={{ fontSize: 'clamp(1.35rem,2.4vw,1.9rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-.02em', marginBottom: '1.25rem', color: '#0F172A' }}>
              This lands in your<br />prospect&rsquo;s inbox &mdash;<br /><span style={{ color: 'var(--acc)' }}>and gets replies.</span>
            </h2>
            <p style={{ fontSize: '.9375rem', lineHeight: 1.7, maxWidth: '44ch', color: '#334155', marginBottom: '1.5rem' }}>
              Every message references something real about the prospect &mdash; their company news, funding, LinkedIn activity, or specific pain. It doesn&rsquo;t read like a template because it isn&rsquo;t one.
            </p>
            <ul className="space-y-2.5">
              {[
                'AI-researched per prospect before sending',
                'Reads like you wrote it personally',
                'Deliverability-optimized domain & inbox',
                '3-touch sequence fully managed for you',
              ].map((item, i) => (
                <li key={item} className="rev flex items-center gap-2.5 text-sm" style={{ color: '#334155', transitionDelay: `${.1 + i * .08}s` }}>
                  <span style={{ color: 'var(--acc)', fontSize: 10 }}>&#9679;</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: email mockup with reveal animation */}
          <div className="rev" style={{ transitionDelay: '.1s' }}>
            <div className="card overflow-hidden p-0" ref={ref}>
              {/* Gmail chrome header */}
              <div className="px-4 py-3" style={{ background: '#EEF2F7', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
                <div className="flex items-center gap-1.5 mb-3">
                  <div className="w-2 h-2 rounded-full" style={{ background: 'rgba(255,59,48,.5)' }} />
                  <div className="w-2 h-2 rounded-full" style={{ background: 'rgba(255,196,0,.5)' }} />
                  <div className="w-2 h-2 rounded-full" style={{ background: 'rgba(0,209,255,.5)' }} />
                  <span className="ml-2 font-mono" style={{ fontSize: '.62rem', color: 'var(--t3)' }}>Gmail &mdash; Compose</span>
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2" style={{ fontSize: '.78rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
                    <span className="font-mono w-9 shrink-0" style={{ color: 'var(--t3)' }}>From</span>
                    <span style={{ color: 'var(--t2)' }}>alex@growthpartners.io</span>
                  </div>
                  <div className="flex items-center gap-2" style={{ fontSize: '.78rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
                    <span className="font-mono w-9 shrink-0" style={{ color: 'var(--t3)' }}>To</span>
                    <span style={{ color: 'var(--t2)' }}>sarah.chen@nextsaas.com</span>
                  </div>
                  <div className="flex items-center gap-2" style={{ fontSize: '.78rem', paddingTop: '.25rem' }}>
                    <span className="font-mono w-9 shrink-0" style={{ color: 'var(--t3)' }}>Re</span>
                    <span style={{ color: 'var(--t1)', fontWeight: 600 }}>Quick thought on NextSaaS&rsquo;s Q3 growth push</span>
                  </div>
                </div>
              </div>

              {/* Email body — paragraphs reveal sequentially */}
              <div className={`px-5 py-4${revealed ? ' email-reveal' : ''}`} style={{ fontSize: '.875rem', lineHeight: 1.75, color: 'var(--t2)' }}>
                <P delay="0.05s">Hi Sarah,</P>
                <P delay="0.3s">
                  Saw the announcement about <span className="email-hl">NextSaaS closing its Series A</span> — congrats. That&rsquo;s a real inflection point and the timing of this note is intentional.
                </P>
                <P delay="0.6s">
                  Most founders at your stage are choosing between hiring SDRs (90-day ramp, $90K+) or cobbling together outreach themselves. There&rsquo;s a third option that&rsquo;s faster and cheaper.
                </P>
                <P delay="0.9s">
                  We run an AI outbound system that books <span className="email-hl"><strong style={{ color: 'var(--t1)' }}>10&ndash;20 qualified calls/month</strong></span> for B2B SaaS teams &mdash; live in 2 weeks, no headcount needed.
                </P>
                <P delay="1.15s">Worth 20 minutes to run the numbers?</P>
                <P delay="1.35s"><span style={{ color: 'var(--t3)' }}>&mdash; Alex</span></P>
              </div>

              {/* Annotation bar */}
              <div className="email-tag">
                <div className="live-dot w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'var(--acc)', borderRadius: '50%' }} />
                <span className="font-mono" style={{ fontSize: '.62rem', color: 'var(--acc)' }}>
                  Personalized using: Series A announcement &bull; LinkedIn role &bull; ICP match score 94%
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
