'use client';
import { useEffect } from 'react';

const people = [
  { name: 'James T.',  loc: 'New York, US',   img: 'https://randomuser.me/api/portraits/men/32.jpg',   dur: '30 min' },
  { name: 'Priya S.',  loc: 'London, UK',     img: 'https://randomuser.me/api/portraits/women/44.jpg', dur: '45 min' },
  { name: 'Marcus P.', loc: 'Toronto, CA',    img: 'https://randomuser.me/api/portraits/men/68.jpg',   dur: '30 min' },
  { name: 'Rachel W.', loc: 'Sydney, AU',     img: 'https://randomuser.me/api/portraits/women/29.jpg', dur: '30 min' },
  { name: 'Daniel K.', loc: 'Berlin, DE',     img: 'https://randomuser.me/api/portraits/men/52.jpg',   dur: '45 min' },
  { name: 'Nina F.',   loc: 'Chicago, US',    img: 'https://randomuser.me/api/portraits/women/60.jpg', dur: '30 min' },
  { name: 'Tom B.',    loc: 'Dubai, UAE',     img: 'https://randomuser.me/api/portraits/men/36.jpg',   dur: '30 min' },
  { name: 'Aisha R.',  loc: 'Singapore, SG',  img: 'https://randomuser.me/api/portraits/women/47.jpg', dur: '45 min' },
  { name: 'Carlos M.', loc: 'Miami, US',      img: 'https://randomuser.me/api/portraits/men/22.jpg',   dur: '30 min' },
  { name: 'Sophie L.', loc: 'Paris, FR',      img: 'https://randomuser.me/api/portraits/women/55.jpg', dur: '30 min' },
];

export default function ToastProvider() {
  useEffect(() => {
    const wrap = document.getElementById('toast-wrap');
    if (!wrap) return;

    let idx = 0;
    let timer: ReturnType<typeof setTimeout>;

    function showToast() {
      const p = people[idx % people.length];
      idx++;

      const t = document.createElement('div');
      t.className = 'toast';
      t.innerHTML = `
        <img src="${p.img}" width="38" height="38" style="border-radius:50%;object-fit:cover;border:1px solid var(--border);flex-shrink:0" alt="${p.name}">
        <div style="min-width:0;flex:1">
          <div style="font-family:var(--font-syne),'Syne',sans-serif;font-weight:700;font-size:.82rem;color:var(--t1);margin-bottom:.15rem">${p.name} <span style="font-weight:400;color:var(--t3)">from ${p.loc}</span></div>
          <div style="font-size:.78rem;color:var(--t2);margin-bottom:.35rem">just booked a <span style="color:var(--cta);font-weight:600">${p.dur} strategy call</span></div>
          <div style="font-family:'JetBrains Mono',monospace;font-size:.62rem;color:var(--t3)">&#128205; Verified booking &bull; just now</div>
        </div>
        <button aria-label="Dismiss" style="background:none;border:none;color:var(--t3);font-size:1rem;cursor:pointer;line-height:1;padding:0;flex-shrink:0;margin-top:-.1rem">&#10005;</button>
        <div class="toast-prog"></div>`;

      t.querySelector('button')!.addEventListener('click', () => t.remove());
      wrap!.appendChild(t);

      requestAnimationFrame(() => requestAnimationFrame(() => {
        t.classList.add('show');
        t.querySelector<HTMLElement>('.toast-prog')!.classList.add('run');
      }));

      setTimeout(() => {
        t.classList.remove('show');
        setTimeout(() => t.remove(), 500);
      }, 5500);

      timer = setTimeout(showToast, 22000 + Math.random() * 16000);
    }

    timer = setTimeout(showToast, 8000);
    return () => clearTimeout(timer);
  }, []);

  return <div id="toast-wrap" />;
}
