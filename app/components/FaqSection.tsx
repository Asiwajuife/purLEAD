'use client';
import { useState } from 'react';
import Image from 'next/image';

const items = [
  { q: 'How fast will I see results?', a: 'Most clients receive their first booked call within 2–4 weeks of launch. Month one typically produces 50–70% of full capacity as the system warms and optimizes.' },
  { q: 'Do I need to write any of the emails myself?', a: 'No. Our team writes all copy and our AI personalizes every message. We\'ll have an onboarding call to learn your voice and positioning — then we handle everything else.' },
  { q: 'Will this work in my industry?', a: 'If your clients are businesses (B2B) and your average deal value is $5K+, outbound email works. We\'ve run campaigns in SaaS, consulting, fintech, professional services, media, and more.' },
  { q: 'How is this different from a regular email agency?', a: 'Traditional agencies use templates. We use AI to research each prospect and write genuinely personalized messages — referencing their company, role, recent news, and specific pain points. The difference in reply rates is dramatic. We also manage replies and handle booking, not just sending.' },
  { q: "What if I don't hit the meeting targets?", a: "We take accountability seriously. If we consistently fall short, we'll discuss plan adjustments, strategy pivots, or additional support at no extra cost. We succeed when you succeed." },
  { q: 'Is there a long-term contract?', a: "We ask for a 3-month initial commitment — outbound takes time to fully optimize. After that, it's month-to-month. Most clients stay because they see results, not because they're locked in." },
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number|null>(null);

  return (
    <section id="faq" className="z1 py-24 light-section">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[55%_45%] gap-12 items-start">
          {/* LEFT: heading + accordion */}
          <div>
            <div className="rev-blur mb-10">
              <div className="lbl">FAQ</div>
              <h2 style={{ fontSize: 'clamp(1.65rem,3vw,2.4rem)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-.03em' }}>
                Questions we get <span style={{ color: 'var(--acc)' }}>a lot.</span>
              </h2>
            </div>
            <div style={{ border: '1px solid rgba(0,0,0,0.09)', borderRadius: 14, overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}>
              {items.map((item, i) => {
                const isOpen = openIdx === i;
                return (
                  <div key={i} className="rev-blur faq-item" style={{ borderBottom: i < items.length - 1 ? '1px solid var(--border)' : 'none', transitionDelay: `${i * .05}s` }}>
                    <div className="faq-trigger flex items-center justify-between px-6 py-5 select-none cursor-pointer"
                      style={{ transition: 'background .18s' }}
                      onClick={() => setOpenIdx(isOpen ? null : i)}>
                      <span className="font-display font-semibold" style={{ color: 'var(--t1)', fontSize: '.9375rem', lineHeight: 1.4 }}>{item.q}</span>
                      <span className="shrink-0 ml-4 flex items-center justify-center"
                        style={{
                          width: 26, height: 26, borderRadius: 6,
                          background: isOpen ? 'rgba(0,209,255,.12)' : 'rgba(0,209,255,.06)',
                          border: `1px solid ${isOpen ? 'rgba(0,209,255,.4)' : 'rgba(0,209,255,.18)'}`,
                          color: 'var(--acc)',
                          fontSize: '1.1rem', lineHeight: 1, fontWeight: 300,
                          transform: isOpen ? 'rotate(45deg)' : '',
                          transition: 'transform .28s cubic-bezier(.16,1,.3,1), background .2s, border-color .2s',
                        }}>+</span>
                    </div>
                    <div className={`fa px-6 text-sm leading-relaxed${isOpen ? ' open' : ''}`}
                      style={{ color: 'var(--t2)', paddingBottom: isOpen ? '1.4rem' : 0, lineHeight: 1.75 }}>
                      {item.a}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: sticky image */}
          <div className="hidden md:block" style={{ position: 'sticky', top: '6rem' }}>
            <div style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(0,209,255,0.2)', boxShadow: '0 0 50px rgba(0,209,255,0.1)' }}>
              <Image
                src="https://img.freepik.com/premium-photo/robot-hand-with-question-mark-digital-binary-code-background_3972-11.jpg?w=360"
                alt="AI assistant"
                width={360}
                height={270}
                sizes="(max-width: 768px) 0px, 360px"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
            <p style={{ marginTop: '1rem', fontSize: '.82rem', color: 'var(--t3)', textAlign: 'center', fontFamily: 'monospace', letterSpacing: '.05em' }}>
              Have a question not listed?<br />
              <a href="mailto:hello@purlead.com" style={{ color: 'var(--acc)' }}>hello@purlead.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
