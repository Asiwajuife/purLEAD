'use client';
import { useEffect } from 'react';

function animCounter(el: HTMLElement, target: number, suffix: string, dur = 1400) {
  const start = performance.now();
  function update(t: number) {
    const p = Math.min((t - start) / dur, 1);
    const v = Math.round((1 - Math.pow(1 - p, 3)) * target);
    el.textContent = v + suffix;
    if (p < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

export default function PageEffects() {
  useEffect(() => {
    /* ── Scroll progress ── */
    const prog = document.getElementById('scroll-progress');
    function updateProg() {
      if (!prog) return;
      const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
      prog.style.width = pct + '%';
    }
    window.addEventListener('scroll', updateProg, { passive: true });

    /* ── Back to top ── */
    const btt = document.getElementById('btt');
    function updateBtt() { btt?.classList.toggle('show', window.scrollY > 500); }
    window.addEventListener('scroll', updateBtt, { passive: true });
    btt?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    /* ── Reveal ── */
    const ro = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('vis'); ro.unobserve(e.target); } });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.rev').forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) el.classList.add('vis');
      else ro.observe(el);
    });

    /* ── Animated counters ── */
    const counterObs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const el = e.target as HTMLElement;
          animCounter(el, +(el.dataset.count || 0), el.dataset.suffix || '');
          counterObs.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    document.querySelectorAll<HTMLElement>('.snum[data-count]').forEach(el => counterObs.observe(el));

    /* ── Hero word animation ── */
    setTimeout(() => {
      document.querySelectorAll('.word-in').forEach((el, i) => {
        setTimeout(() => el.classList.add('vis'), i * 120);
      });
    }, 200);

    /* ── 3D Card tilt ── */
    function attachTilt() {
      document.querySelectorAll<HTMLElement>('.tilt').forEach(card => {
        card.addEventListener('mousemove', e => {
          const r = card.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width  - 0.5;
          const y = (e.clientY - r.top)  / r.height - 0.5;
          card.style.transform = `perspective(700px) rotateY(${x*6}deg) rotateX(${-y*6}deg) translateY(-2px)`;
        });
        card.addEventListener('mouseleave', () => { card.style.transform = ''; });
      });
    }
    attachTilt();

    /* ── Button ripple ── */
    document.querySelectorAll<HTMLElement>('.btn-p').forEach(btn => {
      btn.addEventListener('click', e => {
        const r = btn.getBoundingClientRect();
        const span = document.createElement('span');
        const size = Math.max(r.width, r.height);
        span.className = 'ripple';
        span.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX-r.left-size/2}px;top:${e.clientY-r.top-size/2}px`;
        btn.appendChild(span);
        setTimeout(() => span.remove(), 600);
      });
    });

    /* ── Magnetic buttons ── */
    document.querySelectorAll<HTMLElement>('.mag').forEach(btn => {
      btn.addEventListener('mousemove', e => {
        const r = btn.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width  / 2) * 0.25;
        const y = (e.clientY - r.top  - r.height / 2) * 0.25;
        btn.style.transform = `translate(${x}px,${y}px)`;
      });
      btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
    });

    return () => {
      window.removeEventListener('scroll', updateProg);
      window.removeEventListener('scroll', updateBtt);
      ro.disconnect();
      counterObs.disconnect();
    };
  }, []);

  return (
    <>
      <div id="scroll-progress" />
      <button id="btt" aria-label="Back to top">
        <svg width="15" height="15" fill="none" viewBox="0 0 24 24">
          <path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </>
  );
}
