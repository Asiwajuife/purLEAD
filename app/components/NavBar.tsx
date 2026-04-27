'use client';
import { useEffect, useRef, useState } from 'react';

function useOnlineCount() {
  const [count, setCount] = useState(3);
  useEffect(() => {
    if (window.innerWidth < 768) return;
    function randomize() {
      setCount(Math.floor(Math.random() * 4) + 2); // 2–5
      const next = 45000 + Math.random() * 45000;  // 45–90s
      return setTimeout(randomize, next);
    }
    const t = randomize();
    return () => clearTimeout(t);
  }, []);
  return count;
}

const links = [
  { href: '#how',        label: 'How It Works', pill: false },
  { href: '#pricing',    label: 'Pricing',       pill: false },
  { href: '#faq',        label: 'FAQ',           pill: false },
  { href: '#contact',    label: 'Contact',       pill: false },
  { href: '#free-audit', label: 'Free Audit',    pill: true  },
];

export default function NavBar() {
  const online = useOnlineCount();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const menuRef = useRef<HTMLDivElement>(null);
  const togRef  = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (window.innerWidth < 768) return;
    function onScroll() { setScrolled(window.scrollY > 40); }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (window.innerWidth < 768) return;
    const sections = document.querySelectorAll<HTMLElement>('section[id]');
    const observers: IntersectionObserver[] = [];
    sections.forEach(s => {
      const obs = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive('#' + e.target.id); });
      }, { rootMargin: '-40% 0px -40% 0px' });
      obs.observe(s);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (open && menuRef.current && togRef.current &&
          !menuRef.current.contains(e.target as Node) &&
          !togRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [open]);

  function closeMob() { setOpen(false); }

  return (
    <nav id="main-nav" className={scrolled ? 'scrolled' : ''}
      style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, borderBottom: '1px solid transparent', background: 'transparent' }}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between" style={{ height: 60 }}>
        <a href="#" className="font-display font-extrabold tracking-tight" style={{ color: 'var(--t1)', fontSize: '1.1rem' }}>
          pur<span style={{ color: 'var(--gold)' }}>LEAD</span>
        </a>
        <div className="hidden md:flex items-center gap-7 text-sm font-medium" style={{ color: 'var(--t2)' }}>
          {links.map(l => l.pill ? (
            <a key={l.href} href={l.href}
               className="btn-g rounded-full text-xs px-4 py-1.5" style={{ fontWeight: 700 }}>
              {l.label}
            </a>
          ) : (
            <a key={l.href} href={l.href} className={`nl${active === l.href ? ' active' : ''}`}>{l.label}</a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          {/* Online indicator */}
          <div className="hidden md:flex items-center gap-1.5" style={{ fontSize: '.72rem', color: 'rgba(34,197,94,0.85)', fontFamily: 'var(--font-mono,monospace)', letterSpacing: '.04em' }}>
            <span style={{ position: 'relative', width: 7, height: 7, flexShrink: 0 }}>
              <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: '#22C55E', animation: 'pulseRing 2s ease-out infinite' }} />
              <span style={{ position: 'absolute', inset: 1, borderRadius: '50%', background: '#22C55E' }} />
            </span>
            {online} active now
          </div>
          <a href="https://calendly.com/atanseiyeifeoluwa" target="_blank" rel="noopener noreferrer"
             className="btn-p hidden md:inline-flex items-center gap-1.5 text-sm px-4 py-2.5">
            Book a Call
            <svg width="12" height="12" fill="none" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <button ref={togRef} id="nav-toggle" aria-label="Open menu" aria-expanded={open}
            onClick={() => setOpen(v => !v)}
            className="md:hidden flex flex-col justify-center gap-[5px] w-9 h-9 px-1.5 rounded"
            style={{ border: '1px solid var(--border)' }}>
            <span className="block w-full rounded" style={{ height: 1.5, background: 'var(--t2)', transition: 'all .3s', transform: open ? 'rotate(45deg) translate(4px,4px)' : '' }} />
            <span className="block w-full rounded" style={{ height: 1.5, background: 'var(--t2)', transition: 'all .3s', opacity: open ? 0 : 1 }} />
            <span className="block w-full rounded" style={{ height: 1.5, background: 'var(--t2)', transition: 'all .3s', transform: open ? 'rotate(-45deg) translate(4px,-4px)' : '' }} />
          </button>
        </div>
      </div>
      <div ref={menuRef} className={open ? '' : 'hidden'}
        style={{ borderTop: '1px solid var(--border)', background: 'var(--bg)', padding: '1rem 1.5rem' }}>
        {links.map(l => l.pill ? (
          <a key={l.href} href={l.href} onClick={closeMob}
             className="block py-2.5 text-sm font-bold" style={{ color: 'var(--acc)' }}>{l.label} ✦</a>
        ) : (
          <a key={l.href} href={l.href} onClick={closeMob}
             className="block py-2.5 text-sm font-medium" style={{ color: 'var(--t2)' }}>{l.label}</a>
        ))}
        <div className="pt-2">
          <a href="https://calendly.com/atanseiyeifeoluwa" target="_blank" rel="noopener noreferrer"
             className="btn-p block text-center text-sm px-5 py-3">Book a Free Call &rarr;</a>
        </div>
      </div>
    </nav>
  );
}
