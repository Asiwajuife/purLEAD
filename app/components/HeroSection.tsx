'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

const feedItems = [
  { color: 'var(--acc)', label: "Rachel W. booked — <span style='color:#00D1FF'>30 min</span>", time: 'now', live: true },
  { color: '#818cf8',    label: 'Sequence launched — SaaS vertical',         time: '1m',  live: false },
  { color: 'var(--acc)', label: "Tom B. booked — <span style='color:#00D1FF'>45 min</span>",    time: '2m',  live: true },
  { color: '#fbbf24',    label: '950 prospects verified &amp; enriched',      time: '4m',  live: false },
  { color: '#34d399',    label: 'Subject line A/B winner confirmed',          time: '6m',  live: false },
  { color: 'var(--acc)', label: "Nina F. booked — <span style='color:#00D1FF'>30 min</span>",   time: '9m',  live: true },
  { color: '#818cf8',    label: 'Sequence launched — Consulting niche',       time: '11m', live: false },
  { color: '#fbbf24',    label: '1,400 new prospects enriched',               time: '13m', live: false },
  { color: 'var(--acc)', label: "James C. booked — <span style='color:#00D1FF'>30 min</span>",  time: '16m', live: true },
  { color: '#34d399',    label: 'Reply rate up 9% this week',                 time: '20m', live: false },
];

const typewriterWords = ['SaaS founders', 'Agency owners', 'B2B consultants', 'FinTech startups'];

export default function HeroSection() {
  const canvasRef      = useRef<HTMLCanvasElement>(null);
  const feedRef        = useRef<HTMLDivElement>(null);
  const clockRef       = useRef<HTMLSpanElement>(null);
  const callsRef       = useRef<HTMLDivElement>(null);
  const countdownRef   = useRef<HTMLSpanElement>(null);
  const callCountRef   = useRef<HTMLSpanElement>(null);
  const emailCountRef  = useRef<HTMLSpanElement>(null);
  const twRef          = useRef<number | null>(null);

  /* Canvas particles (desktop only) */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.innerWidth < 768) return; // skip on mobile
    const ctx = canvas.getContext('2d')!;
    let W: number, H: number, pts: { x:number;y:number;vx:number;vy:number;r:number }[];
    let rafId: number;
    let resizeTimer: ReturnType<typeof setTimeout>;

    function resize() {
      W = canvas!.width  = canvas!.parentElement!.offsetWidth;
      H = canvas!.height = canvas!.parentElement!.offsetHeight;
      pts = Array.from({ length: Math.min(Math.floor(W * H / 18000), 50) }, () => ({
        x: Math.random()*W, y: Math.random()*H,
        vx: (Math.random()-.5)*.35, vy: (Math.random()-.5)*.35,
        r: Math.random()*1.5+.5,
      }));
    }
    resize();
    function debouncedResize() { clearTimeout(resizeTimer); resizeTimer = setTimeout(resize, 150); }
    window.addEventListener('resize', debouncedResize);

    function draw() {
      ctx.clearRect(0,0,W,H);
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
        ctx.fillStyle = 'rgba(0,209,255,.3)';
        ctx.fill();
      });
      for (let i = 0; i < pts.length; i++) {
        for (let j = i+1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          const dist = Math.sqrt(dx*dx + dy*dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(0,209,255,${0.15*(1-dist/120)})`;
            ctx.lineWidth = .5;
            ctx.stroke();
          }
        }
      }
      rafId = requestAnimationFrame(draw);
    }
    draw();
    return () => { window.removeEventListener('resize', debouncedResize); cancelAnimationFrame(rafId); };
  }, []);

  /* Clock */
  useEffect(() => {
    if (window.innerWidth < 768) return;
    function tick() {
      const now = new Date();
      if (clockRef.current)
        clockRef.current.textContent =
          [now.getHours(), now.getMinutes(), now.getSeconds()]
            .map(n => String(n).padStart(2,'0')).join(':');
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  /* Live feed */
  useEffect(() => {
    if (window.innerWidth < 768) return;
    const feed = feedRef.current;
    if (!feed) return;
    let idx = 0;
    const rows = Array.from(feed.children) as HTMLElement[];

    function updateRow(row: HTMLElement, item: typeof feedItems[0]) {
      row.style.transition = 'opacity .3s';
      row.style.opacity = '0';
      setTimeout(() => {
        row.style.cssText = item.live
          ? 'background:rgba(0,209,255,.06);border:1px solid rgba(0,209,255,.15);display:flex;align-items:center;gap:.5rem;padding:.375rem .625rem;border-radius:.25rem;transition:opacity .3s'
          : 'background:var(--elev);border:1px solid var(--border);display:flex;align-items:center;gap:.5rem;padding:.375rem .625rem;border-radius:.25rem;transition:opacity .3s';
        row.innerHTML = `<div class="${item.live ? 'live-dot' : ''}" style="width:6px;height:6px;border-radius:50%;background:${item.color};flex-shrink:0"></div><span style="font-size:.75rem;color:var(--t2)">${item.label}</span><span class="ml-auto font-mono" style="font-size:.55rem;color:var(--t3)">${item.time}</span>`;
        row.style.opacity = '1';
      }, 320);
    }

    const id = setInterval(() => {
      const item = feedItems[idx % feedItems.length];
      const row  = rows[idx % rows.length];
      if (row) updateRow(row, item);
      if (item.live && callsRef.current)
        callsRef.current.textContent = String(parseInt(callsRef.current.textContent || '18') + 1);
      idx++;
    }, 3000);
    return () => clearInterval(id);
  }, []);

  /* Typewriter */
  useEffect(() => {
    if (window.innerWidth < 768) return;
    const el = document.getElementById('typewriter-text') as HTMLSpanElement | null;
    if (!el) return;
    let wordIdx = 0, charIdx = 0, deleting = false;
    let holdTimer: ReturnType<typeof setTimeout>;

    function type() {
      const word = typewriterWords[wordIdx % typewriterWords.length];
      if (!deleting) {
        el!.textContent = word.slice(0, charIdx + 1);
        charIdx++;
        if (charIdx === word.length) {
          deleting = true;
          holdTimer = setTimeout(() => { twRef.current = window.setInterval(type, 35); }, 2200);
          return;
        }
        twRef.current = window.setTimeout(type, 65);
      } else {
        el!.textContent = word.slice(0, charIdx - 1);
        charIdx--;
        if (charIdx === 0) {
          deleting = false;
          wordIdx++;
          twRef.current = window.setTimeout(type, 65);
          return;
        }
        twRef.current = window.setTimeout(type, 35);
      }
    }

    twRef.current = window.setTimeout(type, 800);
    return () => {
      if (twRef.current) clearTimeout(twRef.current);
      clearTimeout(holdTimer);
    };
  }, []);

  /* Calls counter (0 → 3 easeOut) */
  useEffect(() => {
    if (window.innerWidth < 768) return;
    const el = callCountRef.current;
    if (!el) return;
    const target = 3, dur = 1800, start = performance.now();
    function frame(now: number) {
      const p = Math.min((now - start) / dur, 1);
      const v = Math.round((1 - Math.pow(1 - p, 3)) * target);
      el!.textContent = String(v);
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }, []);

  /* Email counter tick */
  useEffect(() => {
    if (window.innerWidth < 768) return;
    let count = 847;
    const id = setInterval(() => {
      count++;
      if (emailCountRef.current) emailCountRef.current.textContent = String(count);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  /* Countdown */
  useEffect(() => {
    if (window.innerWidth < 768) return;
    let total = 2 * 60 + 14;
    const id = setInterval(() => {
      total = Math.max(0, total - 1);
      const h = Math.floor(total / 60), m = total % 60;
      if (countdownRef.current) countdownRef.current.textContent = `${h}h ${m}m`;
    }, 60000);
    return () => clearInterval(id);
  }, []);

  /* Magnetic buttons */
  useEffect(() => {
    if (!window.matchMedia('(pointer:fine)').matches) return;
    const els = document.querySelectorAll<HTMLElement>('.btn-p, .btn-g');
    const cleanup: (() => void)[] = [];
    els.forEach(el => {
      function onMove(e: MouseEvent) {
        const r = el.getBoundingClientRect();
        const ox = Math.max(-8, Math.min(8, (e.clientX - r.left - r.width/2) * 0.18));
        const oy = Math.max(-8, Math.min(8, (e.clientY - r.top - r.height/2) * 0.18));
        el.style.transform = `translate(${ox}px,${oy}px)`;
      }
      function onLeave() { el.style.transform = 'translate(0,0)'; }
      el.addEventListener('mousemove', onMove);
      el.addEventListener('mouseleave', onLeave);
      cleanup.push(() => { el.removeEventListener('mousemove', onMove); el.removeEventListener('mouseleave', onLeave); });
    });
    return () => cleanup.forEach(fn => fn());
  }, []);

  return (
    <section className="relative flex items-center overflow-hidden"
      style={{ minHeight: '100svh', paddingTop: 60 }}>
      {/* Animated background image */}
      <div aria-hidden="true" className="hero-bg-zoom" style={{
        position: 'absolute', inset: '-5%', zIndex: 0,
        animation: 'heroBgZoom 18s ease-in-out infinite',
      }}>
        <Image
          fill
          src="https://cdn.vocallabs.ai/Blogs/6a18df1c-0c79-4edf-88d0-b15f92bfe699.png"
          alt=""
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>
      {/* Dark overlay */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, zIndex: 0,
        background: 'linear-gradient(160deg, rgba(4,10,20,0.82) 0%, rgba(7,22,45,0.75) 50%, rgba(4,10,20,0.88) 100%)',
      }} />
      <canvas ref={canvasRef} id="hero-canvas" style={{ position: 'absolute', inset: 0, zIndex: 1 }} />

      <div className="relative z-[2] max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Copy */}
        <div>
          <div className="lbl lbl-gold" style={{ marginBottom: '1.25rem' }}>AI-Powered Outbound System</div>

          <h1 className="glitch-h1 font-display font-extrabold"
            style={{ fontSize: 'clamp(1.75rem,3.6vw,2.75rem)', lineHeight: 1.08, letterSpacing: '-.025em', color: 'var(--t1)', marginBottom: '1.25rem' }}>
            Stop Waiting<br />for Referrals.<br />
            <span style={{ color: 'var(--acc)' }} className="word-in">Start Booking</span><br />
            <span className="word-in" style={{ transitionDelay: '.1s', color: 'var(--gold)' }}>Calls on Demand.</span>
          </h1>

          {/* Typewriter */}
          <div className="rev" style={{ marginBottom: '1rem', transitionDelay: '.05s' }}>
            <span style={{ fontSize: '.9rem', color: 'var(--t3)' }}>Currently running outbound for: </span>
            <span id="typewriter-text" style={{ color: 'var(--acc)', fontWeight: 600 }} />
            <span style={{ color: 'var(--acc)', animation: 'typewrite .7s step-end infinite alternate', marginLeft: 1 }}>|</span>
          </div>

          <p className="rev" style={{ fontSize: '1rem', lineHeight: 1.7, maxWidth: '42ch', marginBottom: '2rem', color: 'var(--t2)' }}>
            purLEAD deploys a fully done-for-you AI outbound system that fills your calendar with
            10&ndash;20 qualified sales calls every month &mdash; without hiring a single SDR.
          </p>

          <div className="rev flex flex-wrap gap-3" style={{ transitionDelay: '.1s' }}>
            <a href="https://calendly.com/atanseiyeifeoluwa" target="_blank" rel="noopener noreferrer"
               className="btn-p mag inline-flex items-center gap-2 text-sm px-7 py-3.5">
              Book a Free Strategy Call
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="#how" className="btn-g inline-flex items-center text-sm px-7 py-3.5">See How It Works</a>
          </div>

          <div className="rev flex items-center gap-4 flex-wrap" style={{ marginTop: '1.75rem', transitionDelay: '.2s' }}>
            <div className="flex -space-x-2">
              {['#4F46E5','#0891B2','#059669','#D97706'].map((bg, i) => (
                <div key={i} aria-hidden="true" style={{
                  width: 32, height: 32, borderRadius: '50%', flexShrink: 0,
                  background: bg, border: '2px solid var(--bg)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '.65rem', fontWeight: 700, color: '#fff',
                }}>{'MTSP'[i]}</div>
              ))}
            </div>
            <p style={{ fontSize: '.85rem', color: 'var(--t2)' }}>
              <span style={{ color: 'var(--gold)', fontWeight: 700 }}>47 businesses</span> already booking calls
            </p>
            {/* Live call count badge */}
            <div className="fbadge flex items-center gap-1.5 font-mono text-xs px-3 py-1.5 rounded-full badge-gold">
              <span className="live-dot" style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--gold)', display: 'inline-block' }} />
              <span ref={callCountRef}>0</span> calls booked today
            </div>
            {/* Email count badge */}
            <div className="fbadge flex items-center gap-1.5 font-mono text-xs px-3 py-1.5 rounded-full"
              style={{ background: 'rgba(0,209,255,0.07)', border: '1px solid rgba(0,209,255,0.2)', color: 'var(--acc)', animationDelay: '.4s' }}>
              <span className="live-dot" style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--acc)', display: 'inline-block' }} />
              <span ref={emailCountRef}>847</span> emails sent today
            </div>
          </div>

          {/* Trust logos */}
          <div className="rev" style={{ marginTop: '1.5rem', transitionDelay: '.28s' }}>
            <p className="font-mono" style={{ fontSize: '.58rem', color: 'var(--t3)', letterSpacing: '.12em', marginBottom: '.65rem' }}>TRUSTED BY TEAMS AT</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.6rem' }}>
              {['Nexara','VaultHQ','Sprinto','Quantify','PivotLab','GroveAI'].map(name => (
                <span key={name} style={{
                  padding: '.3rem .85rem', borderRadius: 100,
                  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
                  fontSize: '.72rem', fontWeight: 600, color: 'var(--t2)',
                  backdropFilter: 'blur(8px)', letterSpacing: '.04em',
                }}>{name}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Dashboard mockup */}
        <div className="rev hidden md:block" style={{ transitionDelay: '.25s' }}>
          <div className="card p-4" style={{ background: 'var(--surf)' }}>
            <div className="flex items-center gap-1.5 mb-3 pb-3" style={{ borderBottom: '1px solid var(--border)' }}>
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'rgba(255,59,48,.5)' }} />
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'rgba(255,196,0,.5)' }} />
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'rgba(0,209,255,.5)' }} />
              <span className="ml-2 font-mono" style={{ fontSize: '.62rem', color: 'var(--t3)' }}>purLEAD &middot; Live Dashboard</span>
              <span ref={clockRef} className="ml-auto font-mono" style={{ fontSize: '.62rem', color: 'var(--t3)' }} />
            </div>
            <div className="grid grid-cols-3 gap-1.5 mb-3">
              {[
                { ref: callsRef, val: '18', label: 'Calls', color: 'var(--acc)' },
                { ref: null,     val: '4.2k', label: 'Emails', color: 'var(--t1)' },
                { ref: null,     val: '6.1%', label: 'Reply', color: 'var(--acc)' },
              ].map((s, i) => (
                <div key={i} className="p-2" style={{ background: 'var(--elev)', border: '1px solid var(--border)', borderRadius: 3, textAlign: 'center' }}>
                  <div ref={s.ref || undefined} className="font-display font-extrabold" style={{ fontSize: '1.1rem', color: s.color, lineHeight: 1.2 }}>{s.val}</div>
                  <div className="font-mono" style={{ fontSize: '.55rem', color: 'var(--t3)', marginTop: '.1rem' }}>{s.label}</div>
                </div>
              ))}
            </div>
            {/* Next meeting countdown row */}
            <div className="grid grid-cols-3 gap-1.5 mb-3">
              <div className="col-span-3 p-2" style={{
                background: 'var(--elev)', border: '1px solid rgba(34,197,94,.2)', borderRadius: 3,
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              }}>
                <span className="font-mono" style={{ fontSize: '.6rem', color: 'var(--t3)' }}>NEXT MEETING</span>
                <span ref={countdownRef} className="font-display font-bold" style={{ fontSize: '.85rem', color: 'var(--cta)' }}>2h 14m</span>
              </div>
            </div>
            <div className="space-y-1" ref={feedRef}>
              {[
                { label: "Marcus T. booked — <span style='color:#00D1FF'>30 min</span>", time: 'now', color: 'var(--acc)', live: true },
                { label: 'Sequence launched — FinTech',          time: '1m',  color: '#818cf8', live: false },
                { label: "Sofia M. booked — <span style='color:#00D1FF'>45 min</span>",  time: '3m',  color: 'var(--acc)', live: true },
                { label: '820 leads verified &amp; enriched',    time: '5m',  color: '#fbbf24', live: false },
                { label: 'A/B test winner identified',           time: '8m',  color: '#34d399', live: false },
                { label: "Priya S. booked — <span style='color:#00D1FF'>30 min</span>",  time: '11m', color: 'var(--acc)', live: true },
                { label: 'Sequence launched — Legal vertical',   time: '14m', color: '#818cf8', live: false },
                { label: '1,200 new prospects enriched',         time: '18m', color: '#fbbf24', live: false },
                { label: "Daniel K. booked — <span style='color:#00D1FF'>30 min</span>", time: '22m', color: 'var(--acc)', live: true },
                { label: 'Reply rate up 12% this week',          time: '30m', color: '#34d399', live: false },
              ].map((row, i) => (
                <div key={i} className="flex items-center gap-2 px-2.5 py-1.5 rounded"
                  style={{ background: row.live ? 'rgba(0,209,255,.06)' : 'var(--elev)', border: `1px solid ${row.live ? 'rgba(0,209,255,.15)' : 'var(--border)'}` }}>
                  <div className={row.live ? 'live-dot' : ''} style={{ width: 6, height: 6, borderRadius: '50%', background: row.color, flexShrink: 0 }} />
                  <span style={{ fontSize: '.75rem', color: 'var(--t2)' }} dangerouslySetInnerHTML={{ __html: row.label }} />
                  <span className="ml-auto font-mono" style={{ fontSize: '.55rem', color: 'var(--t3)' }}>{row.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
