'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

type ChecklistPanel = { title: string; visual: 'checklist'; items: string[] };
type EmailPanel    = { title: string; visual: 'email'; preview: { subject: string; body: string } };
type TimelinePanel = { title: string; visual: 'timeline'; steps: string[] };
type StatsPanel    = { title: string; visual: 'stats'; stats: { label: string; val: number }[] };
type Panel = ChecklistPanel | EmailPanel | TimelinePanel | StatsPanel;
interface Feature { label: string; panel: Panel; }

const features: Feature[] = [
  {
    label: 'Done-for-you. Zero lift on your end.',
    panel: {
      title: 'You book the call. We do everything else.',
      visual: 'checklist',
      items: ['ICP research & list building', 'Domain & inbox setup', 'AI copywriting', 'Reply management', 'Calendar booking'],
    },
  },
  {
    label: 'AI-personalized at every touchpoint',
    panel: {
      title: 'Every message is unique to that prospect.',
      visual: 'email',
      preview: {
        subject: 'Re: scaling outbound at {Company}',
        body: 'Hey {FirstName}, noticed {Company} just {RecentTrigger} — wanted to reach out about...',
      },
    },
  },
  {
    label: 'Results in 30–45 days, not 6 months',
    panel: {
      title: 'Timeline from onboarding to booked calls.',
      visual: 'timeline',
      steps: ['Day 1: Onboarding', 'Day 3: ICP defined', 'Day 7: Sequences live', 'Day 14: First replies', 'Day 21–30: Calls booked'],
    },
  },
  {
    label: 'Full transparency — you own all data',
    panel: {
      title: 'Live dashboard. Weekly reports. Your data.',
      visual: 'stats',
      stats: [{ label: 'Emails sent', val: 94 }, { label: 'Opens', val: 41 }, { label: 'Replies', val: 8 }, { label: 'Meetings', val: 3 }],
    },
  },
];

function PanelContent({ panel }: { panel: Panel }) {
  if (panel.visual === 'checklist') {
    return (
      <div>
        <p className="font-mono" style={{ fontSize: '.68rem', color: 'var(--t3)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Task Checklist</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.625rem' }}>
          {panel.items.map((item, i) => (
            <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '.75rem', animation: `fadeSlideDown .3s ${i * 0.1}s both` }}>
              <span style={{ width: 20, height: 20, borderRadius: '50%', flexShrink: 0, background: 'rgba(34,197,94,.15)', border: '1px solid rgba(34,197,94,.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#22C55E', fontSize: 10 }}>✓</span>
              <span style={{ fontSize: '.85rem', color: 'var(--t2)' }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (panel.visual === 'email') {
    const highlight = (text: string) =>
      text.replace(/\{(\w+)\}/g, '<span style="color:#00D1FF;background:rgba(0,209,255,0.1);border-radius:3px;padding:1px 4px">$&</span>');
    return (
      <div>
        <p className="font-mono" style={{ fontSize: '.68rem', color: 'var(--t3)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Email Preview</p>
        <div style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(0,209,255,0.2)', borderRadius: 10, padding: '1rem', animation: 'fadeSlideDown .35s both' }}>
          <div className="font-mono" style={{ fontSize: '.6rem', color: 'var(--t3)', marginBottom: '.3rem', letterSpacing: '.08em' }}>SUBJECT</div>
          <div style={{ fontSize: '.82rem', color: 'var(--t1)', fontWeight: 600, marginBottom: '.75rem' }} dangerouslySetInnerHTML={{ __html: highlight(panel.preview.subject) }} />
          <div className="font-mono" style={{ fontSize: '.6rem', color: 'var(--t3)', marginBottom: '.3rem', letterSpacing: '.08em' }}>BODY</div>
          <div style={{ fontSize: '.82rem', color: 'var(--t2)', lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: highlight(panel.preview.body) }} />
        </div>
      </div>
    );
  }

  if (panel.visual === 'timeline') {
    return (
      <div>
        <p className="font-mono" style={{ fontSize: '.68rem', color: 'var(--t3)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>Campaign Timeline</p>
        <div style={{ position: 'relative', paddingLeft: '1.5rem' }}>
          <div style={{ position: 'absolute', left: '.45rem', top: 0, bottom: 0, width: 1, background: 'rgba(0,209,255,0.15)' }} />
          {panel.steps.map((step, i) => (
            <div key={step} style={{ position: 'relative', marginBottom: '.875rem', animation: `fadeSlideDown .3s ${i * 0.1}s both` }}>
              <div style={{ position: 'absolute', left: '-1.28rem', top: '.25rem', width: 8, height: 8, borderRadius: '50%', background: i === panel.steps.length - 1 ? '#22C55E' : 'var(--acc)', border: '1px solid rgba(0,209,255,0.3)' }} />
              <span style={{ fontSize: '.85rem', color: i === panel.steps.length - 1 ? '#22C55E' : 'var(--t2)' }}>{step}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // stats (StatsPanel)
  const maxVal = Math.max(...panel.stats.map(s => s.val));
  return (
    <div>
      <p className="font-mono" style={{ fontSize: '.68rem', color: 'var(--t3)', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Campaign Metrics</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '.875rem' }}>
        {panel.stats.map((s, i) => (
          <div key={s.label} style={{ animation: `fadeSlideDown .3s ${i * 0.1}s both` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '.3rem' }}>
              <span style={{ fontSize: '.78rem', color: 'var(--t2)' }}>{s.label}</span>
              <span style={{ fontSize: '.78rem', color: 'var(--acc)', fontWeight: 700 }}>{s.val}</span>
            </div>
            <div style={{ height: 4, borderRadius: 2, background: 'rgba(255,255,255,0.06)', overflow: 'hidden' }}>
              <div style={{
                height: '100%', borderRadius: 2,
                background: 'linear-gradient(90deg, var(--acc), #22C55E)',
                width: `${(s.val / maxVal) * 100}%`,
                transformOrigin: 'left center',
                animation: `fillBar .8s ${i * 0.15}s cubic-bezier(.16,1,.3,1) both`,
              }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SolutionSection() {
  const [activeFeature, setActiveFeature] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    let W: number, H: number;
    let pts: { x: number; y: number; vx: number; vy: number; r: number }[];
    let rafId: number;

    if (window.innerWidth < 768) return; // skip canvas on mobile
    let resizeTimer: ReturnType<typeof setTimeout>;
    function resize() {
      W = canvas!.width = canvas!.parentElement!.offsetWidth;
      H = canvas!.height = canvas!.parentElement!.offsetHeight;
      pts = Array.from({ length: Math.min(Math.floor(W * H / 22000), 40) }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.28, vy: (Math.random() - 0.5) * 0.28,
        r: Math.random() * 1.2 + 0.4,
      }));
    }
    resize();
    function debouncedResize() { clearTimeout(resizeTimer); resizeTimer = setTimeout(resize, 150); }
    window.addEventListener('resize', debouncedResize);

    function draw() {
      ctx.clearRect(0, 0, W, H);
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(167,139,250,0.22)';
        ctx.fill();
      });
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(167,139,250,${0.09 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      rafId = requestAnimationFrame(draw);
    }
    draw();
    return () => { window.removeEventListener('resize', debouncedResize); cancelAnimationFrame(rafId); };
  }, []);

  return (
    <section className="z1 py-14" style={{ background: 'linear-gradient(160deg,var(--surf) 0%,#0B1F3A 100%)', position: 'relative', overflow: 'hidden' }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }} />
      <div className="max-w-6xl mx-auto px-6" style={{ position: 'relative', zIndex: 1 }}>
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="rev">
            <div className="lbl lbl-gold">The Solution</div>
            <h2 style={{ fontSize: 'clamp(1.35rem,2.4vw,1.9rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-.02em', marginBottom: '.75rem' }}>
              Meet purLEAD &mdash;<br />your AI outbound<br /><span style={{ color: 'var(--gold)' }}>engine.</span>
            </h2>
            <p className="rev" style={{ fontSize: '.9375rem', lineHeight: 1.6, maxWidth: '44ch', marginBottom: '.5rem', color: 'var(--t2)', transitionDelay: '.05s' }}>
              purLEAD builds and operates a fully AI-personalized outbound system. We identify ideal clients, craft hyper-personalized sequences, warm your sending infrastructure, and book qualified calls directly into your calendar.
            </p>
            <p className="rev" style={{ fontSize: '.9375rem', lineHeight: 1.6, maxWidth: '44ch', marginBottom: '1.25rem', color: 'var(--t2)', transitionDelay: '.12s' }}>
              No templates. No spray-and-pray. Every message is crafted with AI precision around each prospect&rsquo;s specific context &mdash; so it reads like your best sales rep wrote it, at scale.
            </p>
            <ul className="space-y-2">
              {features.map((f, i) => (
                <li key={i}
                  onClick={() => setActiveFeature(i)}
                  style={{
                    cursor: 'pointer',
                    padding: '.4rem .75rem',
                    borderRadius: 10,
                    border: `1px solid ${activeFeature === i ? 'rgba(0,209,255,0.4)' : 'rgba(255,255,255,0.06)'}`,
                    background: activeFeature === i ? 'rgba(0,209,255,0.07)' : 'transparent',
                    transition: 'all .25s',
                    display: 'flex', alignItems: 'center', gap: '0.6rem',
                  }}>
                  <span style={{
                    width: 16, height: 16,
                    background: activeFeature === i ? 'rgba(34,197,94,.2)' : 'rgba(34,197,94,.08)',
                    border: `1px solid ${activeFeature === i ? 'rgba(34,197,94,.5)' : 'rgba(34,197,94,.2)'}`,
                    borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--cta)', fontSize: 8, flexShrink: 0,
                  }}>✓</span>
                  <span className="text-sm" style={{ color: activeFeature === i ? 'var(--t1)' : 'var(--t2)' }}>{f.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rev" style={{ transitionDelay: '.25s', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {/* Dashboard panel */}
            <div
              key={activeFeature}
              style={{
                minHeight: 240, borderRadius: 16,
                border: '1px solid rgba(0,209,255,0.2)',
                background: 'rgba(7,20,40,0.6)',
                backdropFilter: 'blur(12px)',
                padding: '1.25rem',
                position: 'relative', overflow: 'hidden',
              }}
            >
              <p style={{ fontSize: '.875rem', fontWeight: 700, color: 'var(--t1)', marginBottom: '.875rem' }}>
                {features[activeFeature].panel.title}
              </p>
              <PanelContent panel={features[activeFeature].panel} />
            </div>
            {/* Standalone image below dashboard */}
            <div style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(0,209,255,0.12)' }}>
              <Image
                src="https://media.licdn.com/dms/image/v2/D5612AQGXapinavXLpg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1700037910684?e=2147483647&v=beta&t=LjKcnA7TJmllGmxPwdmddKq0hCfKXY94WxONk7FS2AM"
                alt=""
                width={800}
                height={450}
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ width: '100%', height: 'auto', display: 'block', opacity: 0.85 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
