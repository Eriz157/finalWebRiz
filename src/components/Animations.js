'use client';
// GSAP + ScrollTrigger: judul per kata, elemen masuk satu-satu (scroll tetap bawaan browser).
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const HEADINGS = '.h-lg, .h-xl, .h-sm, .page-head h1, .b-count-head h2';
const REVEALS = '.sec-head .lead, .sec-head .eyebrow, .b-count-head .eyebrow, .b-count-head .lead, [data-reveal]';

// Bungkus tiap kata dalam teks judul; kembalikan fungsi untuk memulihkan HTML aslinya.
function splitWords(el) {
  const original = el.innerHTML;
  const words = [];
  const walk = (node) => {
    [...node.childNodes].forEach((n) => {
      if (n.nodeType === 3) {
        const parts = n.textContent.split(/(\s+)/);
        const frag = document.createDocumentFragment();
        parts.forEach((p) => {
          if (!p) return;
          if (/^\s+$/.test(p)) { frag.appendChild(document.createTextNode(' ')); return; }
          const o = document.createElement('span'); o.className = 'w';
          const i = document.createElement('span'); i.className = 'wi'; i.textContent = p;
          o.appendChild(i); frag.appendChild(o); words.push(i);
        });
        n.replaceWith(frag);
      } else if (n.nodeType === 1 && n.tagName !== 'BR') walk(n);
    });
  };
  walk(el);
  return { words, revert: () => { el.innerHTML = original; } };
}

export default function Animations() {
  const pathname = usePathname();

  // GSAP dimuat belakangan (import dinamis) supaya tidak menambah JS awal halaman.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    if (pathname.startsWith('/gallery')) return undefined;
    const reverts = [];
    let ctx, dead = false;
    // Sembunyikan sasaran selama GSAP dimuat, supaya tidak berkedip (tampil lalu hilang lalu muncul).
    const hide = document.createElement('style');
    hide.textContent = `${HEADINGS},${REVEALS}{opacity:0}`;
    document.head.appendChild(hide);
    const run = async () => {
      let gsap, ScrollTrigger;
      try { [{ default: gsap }, { ScrollTrigger }] = await Promise.all([import('gsap'), import('gsap/ScrollTrigger')]); }
      catch { hide.remove(); return; }
      if (dead) return;
      gsap.registerPlugin(ScrollTrigger);
      ctx = gsap.context(() => {
        document.querySelectorAll(HEADINGS).forEach((h) => {
          if (h.closest('#bTitle, .mdl, .drawer') || h.id === 'bTitle' || h.dataset.noSplit != null) return;
          const { words, revert } = splitWords(h);
          if (!words.length) return;
          reverts.push(revert);
          gsap.set(words, { yPercent: 110, opacity: 0 });
          gsap.to(words, {
            yPercent: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.07,
            scrollTrigger: { trigger: h, start: 'top 88%', once: true },
          });
        });
        const items = gsap.utils.toArray(REVEALS);
        items.forEach((el) => gsap.set(el, { opacity: 0, y: 28 }));
        ScrollTrigger.batch(items, {
          start: 'top 90%', once: true,
          onEnter: (b) => gsap.to(b, { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', stagger: 0.12, clearProps: 'transform' }),
        });
      });
      ScrollTrigger.refresh();
      hide.remove();
    };
    // Bila preloader sedang tampil, tunggu sampai selesai agar animasi masuk terlihat pengunjung.
    const waiting = !!document.getElementById('aap');
    const timer = waiting ? 0 : setTimeout(run, 0);
    if (waiting) window.addEventListener('preloader:done', run, { once: true });
    return () => { dead = true; clearTimeout(timer); window.removeEventListener('preloader:done', run); hide.remove(); if (ctx) ctx.revert(); reverts.forEach((r) => { try { r(); } catch { /* DOM sudah diganti */ } }); };
  }, [pathname]);

  return null;
}
