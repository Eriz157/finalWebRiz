'use client';
// GSAP + ScrollTrigger: judul per kata, elemen masuk satu-satu (scroll tetap bawaan browser).
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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

  // GSAP: judul muncul per kata, elemen lain masuk satu-satu saat tergulir ke layar.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    if (pathname.startsWith('/gallery')) return undefined;
    const reverts = [];
    let ctx;
    const timer = setTimeout(() => {
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
    }, 80);
    return () => { clearTimeout(timer); if (ctx) ctx.revert(); reverts.forEach((r) => { try { r(); } catch { /* DOM sudah diganti */ } }); };
  }, [pathname]);

  return null;
}
