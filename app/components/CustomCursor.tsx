'use client';
import { useEffect } from 'react';

export default function CustomCursor() {
  useEffect(() => {
    if (!window.matchMedia('(pointer:fine)').matches) return;
    const ring = document.getElementById('cur-ring');
    if (!ring) return;

    let mx = 0, my = 0, rx = 0, ry = 0;

    function onMove(e: MouseEvent) { mx = e.clientX; my = e.clientY; ring!.classList.remove('hidden'); }
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
    function addHover() {
      document.querySelectorAll(targets).forEach(el => {
        el.addEventListener('mouseenter', () => ring!.classList.add('hov'));
        el.addEventListener('mouseleave', () => ring!.classList.remove('hov'));
      });
    }
    addHover();

    let rafId: number;
    function loop() {
      rx += (mx - rx) * .18;
      ry += (my - ry) * .18;
      ring!.style.left = rx + 'px';
      ring!.style.top  = ry + 'px';
      rafId = requestAnimationFrame(loop);
    }
    loop();

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('mouseup', onUp);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <div id="cur-ring" className="hidden" />;
}
