'use client';
import { useEffect } from 'react';

export default function CustomCursor() {
  useEffect(() => {
    if (!window.matchMedia('(pointer:fine)').matches) return;
    const ring = document.getElementById('cur-ring');
    if (!ring) return;

    document.body.classList.add('custom-cursor-active');

    let mx = 0, my = 0, rx = 0, ry = 0;
    let rafId: number | null = null;

    function loop() {
      const dx = mx - rx, dy = my - ry;
      if (Math.abs(dx) < 0.5 && Math.abs(dy) < 0.5) { rafId = null; return; }
      rx += dx * .18;
      ry += dy * .18;
      ring!.style.left = rx + 'px';
      ring!.style.top  = ry + 'px';
      rafId = requestAnimationFrame(loop);
    }

    function onMove(e: MouseEvent) {
      mx = e.clientX; my = e.clientY;
      ring!.classList.remove('hidden');
      if (!rafId) rafId = requestAnimationFrame(loop);
    }
    function onLeave() { ring!.classList.add('hidden'); }
    function onEnter() { ring!.classList.remove('hidden'); }
    function onDown()  { ring!.classList.add('click'); }
    function onUp()    { ring!.classList.remove('click'); }

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('mouseup', onUp);

    const targets = 'a,button,[data-interactive],.card,.faq-trigger,.roi-range,.int-pill,.tog-btn,.pfwrap,.gtee';
    document.querySelectorAll(targets).forEach(el => {
      el.addEventListener('mouseenter', () => ring!.classList.add('hov'));
      el.addEventListener('mouseleave', () => ring!.classList.remove('hov'));
    });

    return () => {
      document.body.classList.remove('custom-cursor-active');
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('mouseup', onUp);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <svg id="cur-ring" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" className="hidden" style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 9999, transform: 'translate(-4px, -4px)' }}>
      <defs>
        <filter id="cur-glow">
          <feGaussianBlur stdDeviation="2.5" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <polygon points="4,2 4,22 9,17 13,26 16,25 12,16 19,16" fill="#00D1FF" filter="url(#cur-glow)" opacity="0.95"/>
    </svg>
  );
}
