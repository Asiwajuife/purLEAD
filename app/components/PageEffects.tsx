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
    const btt = document.getElementById('btt');
    btt?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      // Mobile: set all stat counters to their final value immediately — no RAF loop
      document.querySelectorAll<HTMLElement>('.snum[data-count]').forEach(el => {
        el.textContent = (el.dataset.count || '0') + (el.dataset.suffix || '');
      });
      return;
    }

    /* ── Desktop only below this line ── */

    const prog = document.getElementById('scroll-progress');
    let rafPending = false;
    function updateProg() {
      if (!prog) return;
      const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
      prog.style.width = pct + '%';
    }
    function updateBtt() { btt?.classList.toggle('show', window.scrollY > 500); }
    function onScroll() {
      if (rafPending) return;
      rafPending = true;
      requestAnimationFrame(() => { rafPending = false; updateProg(); updateBtt(); });
    }
    window.addEventListener('scroll', onScroll, { passive: true });

    /* ── Reveal ── */
    const ro = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('vis'); ro.unobserve(e.target); } });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    const observed = new WeakSet<Element>();
    function observeRevEls() {
      document.querySelectorAll<HTMLElement>('.rev').forEach(el => {
        if (observed.has(el)) return;
        observed.add(el);
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) el.classList.add('vis');
        else ro.observe(el);
      });
    }
    observeRevEls();
    const t1 = setTimeout(observeRevEls, 800);
    const t2 = setTimeout(observeRevEls, 2500);

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

    const isFinePointer = window.matchMedia('(pointer:fine)').matches;

    /* ── 3D Card tilt (desktop only) ── */
    if (isFinePointer) {
      document.querySelectorAll<HTMLElement>('.tilt').forEach(card => {
        let raf: number | null = null, ex = 0, ey = 0;
        card.addEventListener('mousemove', e => {
          ex = e.clientX; ey = e.clientY;
          if (raf) return;
          raf = requestAnimationFrame(() => {
            raf = null;
            const r = card.getBoundingClientRect();
            const x = (ex - r.left) / r.width  - 0.5;
            const y = (ey - r.top)  / r.height - 0.5;
            card.style.transform = `perspective(700px) rotateY(${x*6}deg) rotateX(${-y*6}deg) translateY(-2px)`;
          });
        });
        card.addEventListener('mouseleave', () => {
          if (raf) { cancelAnimationFrame(raf); raf = null; }
          card.style.transform = '';
        });
      });
    }

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

    /* ── Magnetic buttons (desktop only) ── */
    if (isFinePointer) {
      document.querySelectorAll<HTMLElement>('.mag').forEach(btn => {
        let raf: number | null = null, ex = 0, ey = 0;
        btn.addEventListener('mousemove', e => {
          ex = e.clientX; ey = e.clientY;
          if (raf) return;
          raf = requestAnimationFrame(() => {
            raf = null;
            const r = btn.getBoundingClientRect();
            btn.style.transform = `translate(${(ex - r.left - r.width/2) * 0.25}px,${(ey - r.top - r.height/2) * 0.25}px)`;
          });
        });
        btn.addEventListener('mouseleave', () => {
          if (raf) { cancelAnimationFrame(raf); raf = null; }
          btn.style.transform = '';
        });
      });
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      ro.disconnect();
      counterObs.disconnect();
      clearTimeout(t1);
      clearTimeout(t2);
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
