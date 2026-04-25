'use client';
import Image from 'next/image';

type IntPill = { name: string; logo: string | null; color: string; svg?: React.ReactNode };

const integrations: IntPill[] = [
  { name: 'HubSpot',    logo: 'https://cdn.simpleicons.org/hubspot/FF7A59',    color: '#FF7A59' },
  { name: 'Salesforce', logo: 'https://cdn.simpleicons.org/salesforce/00A1E0', color: '#00A1E0' },
  { name: 'Slack',      logo: null, color: '#E01E5A',
    svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="#E01E5A"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.527 2.527 0 0 1 2.521 2.521 2.527 2.527 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zm10.123 2.521a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.268 0a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.166 0a2.528 2.528 0 0 1 2.523 2.522v6.312zm-2.523 10.122a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.166 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zm0-1.268a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.312z"/></svg> },
  { name: 'LinkedIn',   logo: null, color: '#0A66C2',
    svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="#0A66C2"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
  { name: 'Gmail',      logo: 'https://cdn.simpleicons.org/gmail/EA4335',      color: '#EA4335' },
  { name: 'Zapier',     logo: 'https://cdn.simpleicons.org/zapier/FF4A00',     color: '#FF4A00' },
  { name: 'Pipedrive',  logo: null, color: '#0052CC',
    svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0052CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 3H2l8 9.46V19l4 2V12.46L22 3z"/></svg> },
  { name: 'Notion',     logo: 'https://cdn.simpleicons.org/notion/818cf8',     color: '#818cf8' },
  { name: 'Apollo.io',  logo: null, color: '#7C3AED',
    svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-5"/></svg> },
  { name: 'Clay',       logo: null, color: '#A855F7',
    svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg> },
  { name: 'Instantly',  logo: null, color: '#00D1FF',
    svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00D1FF" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg> },
  { name: 'Smartlead',  logo: null, color: '#34d399',
    svg: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> },
];

export default function IntegrationsSection() {
  return (
    <section className="z1 py-12 light-section">
      <div className="max-w-5xl mx-auto px-6">
        <p className="rev font-mono text-xs text-center mb-7" style={{ color: 'var(--t3)', letterSpacing: '.14em', textTransform: 'uppercase' }}>
          Connects with your existing stack &mdash; no rip-and-replace
        </p>
        <div className="rev flex flex-wrap items-center justify-center gap-3">
          {integrations.map(p => (
            <div key={p.name} className="int-pill" style={{ gap: '0.5rem', alignItems: 'center', padding: '0.45rem 0.9rem' }}>
              {p.logo ? (
                <>
                  <Image
                    src={p.logo}
                    alt={p.name}
                    width={18} height={18}
                    unoptimized
                    style={{ display: 'block', flexShrink: 0 }}
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const dot = target.nextElementSibling as HTMLElement;
                      if (dot) dot.style.display = 'inline-block';
                    }}
                  />
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: p.color, display: 'none', flexShrink: 0 }} />
                </>
              ) : (
                p.svg ?? null
              )}
              <span className="font-mono text-xs" style={{ color: 'var(--t2)' }}>{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
