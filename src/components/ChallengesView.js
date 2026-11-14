'use client';
import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import { useApp } from './context';
import { Icon } from './ui';
import { useChallengeActions } from './challengeParts';
import { CH_LABEL, chWhen, fmtDate } from '@/lib/format';

const pad = (n) => String(n).padStart(2, '0');
const mod = (n, m) => ((n % m) + m) % m;
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const hex = (h) => { h = h.replace('#', ''); if (h.length === 3) h = [...h].map((x) => x + x).join(''); const n = parseInt(h, 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; };
const mixA = (a, b, t) => a.map((v, i) => v + (b[i] - v) * t);
const rgb = (a) => `rgb(${a.map(Math.round).join(',')})`;
const rulesOf = (c) => String(c.rules || '').split(/\r?\n/).map((s) => s.replace(/^\s*(?:[-•*]|\d+[.)])\s*/, '').trim()).filter(Boolean);
const FILTERS = [['all', 'Semua'], ['active', 'Aktif'], ['soon', 'Akan datang'], ['ended', 'Selesai']];
const ORD = { active: 0, soon: 1, ended: 2 };
const HASH = '#/challenge/';

export default function ChallengesView({ challenges, joinedIds, myArts }) {
  const { user: u } = useApp();
  const act = useChallengeActions(myArts);
  const [filter, setFilter] = useState('all');
  const [sel, setSel] = useState(null);

  const all = useMemo(() => [...challenges].sort((a, b) => ORD[a.status] - ORD[b.status] || (a.end < b.end ? -1 : 1)), [challenges]);
  const list = useMemo(() => all.filter((c) => filter === 'all' || c.status === filter), [all, filter]);
  const cnt = { all: all.length, active: 0, soon: 0, ended: 0 }; all.forEach((c) => { cnt[c.status]++; });

  const pageRef = useRef(null);
  const rootRef = useRef(null);
  const stageRef = useRef(null);
  const detailRef = useRef(null);
  const scrollRef = useRef(null);
  const dcardRef = useRef(null);
  const cardEls = useRef([]);
  const st = useRef({ cur: 0, view: 'list', id: null });
  const allRef = useRef(all); allRef.current = all;
  const filterRef = useRef(setFilter);

  /* ===================== ENGINE SPIRAL ===================== */
  useEffect(() => {
    const page = pageRef.current, root = rootRef.current, stage = stageRef.current, detail = detailRef.current, scroller = scrollRef.current, dcard = dcardRef.current;
    if (!root) return undefined;
    const N = list.length;
    const cards = list.map((_, i) => cardEls.current[i]).filter(Boolean);
    const loop = N >= 4;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const DETAIL_RADIUS = 28;
    const cssVar = (n) => getComputedStyle(page).getPropertyValue(n).trim();
    const COL = {
      cardFar: hex(cssVar('--sp-card-far')), cardNear: hex(cssVar('--sp-card-near')), txtFar: hex(cssVar('--sp-text-far')),
      txtNear: hex(cssVar('--sp-text-near')), active: hex(cssVar('--sp-active')), ink: hex(cssVar('--sp-ink')), accentDeep: hex(cssVar('--sp-accent-deep')),
    };
    let W = 0, H = 0, ch = 160, rad = 24;
    let cur = clamp(st.current.cur, 0, Math.max(0, N - 1)), target = Math.round(cur);
    let raf = 0, lastT = 0, suppressClick = false, drag = null, gesture = false, gStart = 0, snapT = 0;
    let view = 'list', activeIdx = 0, dead = false;
    const disposers = [];
    const on = (el, ev, fn, o) => { el.addEventListener(ev, fn, o); disposers.push(() => el.removeEventListener(ev, fn, o)); };
    const modalOpen = () => !!document.querySelector('[role="dialog"]');

    detail.inert = true; detail.classList.remove('is-in', 'is-visible'); stage.classList.remove('is-away'); stage.inert = false; root.dataset.view = 'list';

    function measure() {
      const nav = document.querySelector('.nav');
      page.style.height = `calc(100svh - ${nav ? nav.offsetHeight : 84}px)`;
      W = root.clientWidth; H = root.clientHeight;
      if (!W || !H || !cards.length) return;
      const cw = Math.min(W * 0.92, 1240);
      const narrow = window.innerWidth < 560;
      ch = clamp(H * 0.25, narrow ? 140 : 150, 300); rad = ch * 0.16;
      const p = clamp(ch * 0.14, 16, 36); const fs = clamp(ch * 0.075, 11, 17);
      cards.forEach((c) => {
        c.style.width = cw + 'px'; c.style.height = ch + 'px';
        c.style.setProperty('--pad', p + 'px'); c.style.setProperty('--fs', fs + 'px'); c.style.setProperty('--r', rad + 'px'); c.style.setProperty('--ts', '100px');
        const t = c.querySelector('.sp-title'); t.style.whiteSpace = 'nowrap'; t.style.maxWidth = 'none'; t.style.display = 'block';
      });
      const maxW = Math.max(...cards.map((c) => c.querySelector('.sp-title').offsetWidth), 1);
      const ts = clamp(((cw - 2 * p) / maxW) * 96, ch * (narrow ? 0.17 : 0.2), ch * 0.44);
      cards.forEach((c) => {
        const t = c.querySelector('.sp-title'); t.style.whiteSpace = ''; t.style.maxWidth = ''; t.style.display = '';
        c.style.setProperty('--ts', ts + 'px');
      });
      render();
    }

    function render() {
      if (!W) return;
      const GAP0 = H * 0.27, R = 0.66, S = 0.84, focal = H * 0.7;
      const padX = Math.max(8, W * 0.012);
      for (let i = 0; i < cards.length; i++) {
        const c = cards[i];
        const d = loop ? mod(i - cur + 1.5, N) - 1.5 : i - cur;
        const ad = Math.abs(d);
        let y, s, op, rx, ry, rz;
        if (d >= 0) {
          const dd = Math.min(d, 9);
          y = focal - (GAP0 * (1 - Math.pow(R, dd))) / (1 - R); s = Math.pow(S, dd);
          op = dd < 6 ? 1 : Math.max(0, 1 - (dd - 6) / 2.5);
          rx = Math.min(dd, 6) * 5; ry = Math.min(dd, 6) * 4.5; rz = 1.2 + Math.min(dd, 4) * 0.4;
        } else {
          const k = -d;
          y = focal + k * H * 0.34; s = 1 + k * 0.5; op = Math.max(0, 1 - k / 1.15);
          rx = -k * 10; ry = -k * 8; rz = 1.2 + k * 2;
        }
        if (op < 0.01) { c.style.visibility = 'hidden'; c.style.opacity = 0; c.style.pointerEvents = 'none'; continue; }
        c.style.visibility = 'visible'; c.style.opacity = op.toFixed(3);
        c.style.zIndex = 1000 - Math.round(ad * 50);
        c.style.pointerEvents = op > 0.5 ? 'auto' : 'none';
        c.style.transform = `translate3d(${padX}px, ${(y - ch / 2).toFixed(2)}px, 0) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) rotateZ(${rz.toFixed(2)}deg) scale(${s.toFixed(4)})`;
        const t = d >= 0 ? Math.pow(Math.min(d / 6, 1), 0.85) : 0;
                const bg = mixA(COL.cardNear, COL.cardFar, t), txt = mixA(COL.txtNear, COL.txtFar, t);
        c.style.setProperty('--cb', rgb(bg));
        c.style.setProperty('--ct', rgb(txt));
        c.style.setProperty('--cm', rgb(txt));
        const isActive = ad < 0.5;
        if (isActive !== c._isActive) { c._isActive = isActive; c.classList.toggle('is-active', isActive); }
      }
      st.current.cur = cur;
    }

    function tick(now) {
      const dt = Math.min(48, now - (lastT || now)); lastT = now;
      const k = 1 - Math.pow(1 - (drag && drag.moved ? 0.28 : reduced ? 0.3 : 0.085), dt / 16.67);
      const diff = target - cur;
      if (Math.abs(diff) < 0.0004) { cur = target; render(); raf = 0; lastT = 0; return; }
      cur += diff * k; render(); raf = requestAnimationFrame(tick);
    }
    const kick = () => { if (!raf && view === 'list' && !dead) raf = requestAnimationFrame(tick); };
    const clampT = () => { if (!loop) target = clamp(target, 0, Math.max(0, N - 1)); };

    /* ---- input ---- */
    on(page, 'wheel', (e) => {
      if (view !== 'list' || !N) return;
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      if (modalOpen()) return;
      e.preventDefault();
      let dy = e.deltaY;
      if (e.deltaMode === 1) dy *= 33; else if (e.deltaMode === 2) dy *= H;
      if (!gesture) { gesture = true; gStart = Math.round(target); }
      target += clamp(dy, -300, 300) * 0.0025; clampT();
      clearTimeout(snapT);
      snapT = setTimeout(() => {
        const delta = target - gStart, a = Math.abs(delta);
        target = gStart + Math.sign(delta) * (a > 0.08 ? Math.max(1, Math.round(a)) : 0); clampT();
        gesture = false; kick();
      }, 140);
      kick();
    }, { passive: false });
    disposers.push(() => clearTimeout(snapT));

    const ppc = () => H * 0.27;
    on(root, 'pointerdown', (e) => {
      if (view !== 'list' || (e.pointerType === 'mouse' && e.button !== 0)) return;
      drag = { y: e.clientY, t0: target, last: e.clientY, lt: performance.now(), v: 0, moved: false };
    });
    on(window, 'pointermove', (e) => {
      if (!drag) return;
      const dy = e.clientY - drag.y;
      if (!drag.moved && Math.abs(dy) > 6) drag.moved = true;
      if (!drag.moved) return;
      const now = performance.now(), dt = now - drag.lt;
      if (dt > 0) { drag.v = 0.8 * drag.v + 0.2 * ((e.clientY - drag.last) / ppc() / dt); drag.last = e.clientY; drag.lt = now; }
      target = drag.t0 + dy / ppc(); clampT(); kick();
    });
    const endDrag = () => {
      if (!drag) return;
      if (drag.moved) { target = Math.round(target + drag.v * 220); clampT(); suppressClick = true; setTimeout(() => { suppressClick = false; }, 60); kick(); }
      drag = null;
    };
    on(window, 'pointerup', endDrag); on(window, 'pointercancel', endDrag);

    const step = (n) => { target = Math.round(target) + n; clampT(); kick(); };
    on(window, 'keydown', (e) => {
      if (modalOpen()) return;
      if (view === 'detail') { if (e.key === 'Escape') back(); return; }
      const tg = e.target, tag = tg && tg.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
      if (!N) return;
      if (e.key === 'ArrowDown' || e.key === 'PageDown') { e.preventDefault(); step(1); }
      else if (e.key === 'ArrowUp' || e.key === 'PageUp') { e.preventDefault(); step(-1); }
      else if (e.key === 'Enter' && (document.activeElement === document.body || document.activeElement === root)) navigate(mod(Math.round(cur), N));
    });

    /* ---- detail ---- */
    const insetFor = (rect, last, radius) => {
      const t = Math.max(0, rect.top - last.top), r = Math.max(0, last.right - rect.right);
      const b = Math.max(0, last.bottom - rect.bottom), l = Math.max(0, rect.left - last.left);
      return `inset(${t}px ${r}px ${b}px ${l}px round ${radius}px)`;
    };
    const FULL = `inset(0px 0px 0px 0px round ${DETAIL_RADIUS}px)`;
    const setContent = (id, animated) => { if (animated) flushSync(() => setSel(id)); else setSel(id); };

    function showDetail(idx, animated) {
      const id = list[idx].id;
      if (view === 'detail' && activeIdx === idx) return;
      if (raf) { cancelAnimationFrame(raf); raf = 0; lastT = 0; }
      dcard.getAnimations().forEach((a) => a.cancel());
      const card = cards[idx];
      const canFly = animated && !reduced && view === 'list' && card.style.visibility !== 'hidden';
      const first = canFly ? card.getBoundingClientRect() : null;
      const fromBg = canFly ? getComputedStyle(card).backgroundColor : null;
      if (!animated) { cur = target = idx; render(); }
      view = 'detail'; activeIdx = idx; st.current.view = 'detail'; st.current.id = id;
      root.dataset.view = 'detail';
      setContent(id, animated);
      scroller.scrollTop = 0;
      detail.classList.add('is-visible'); detail.inert = false;
      stage.classList.add('is-away'); stage.inert = true;
      if (first) {
        const last = dcard.getBoundingClientRect();
        dcard.animate([{ clipPath: insetFor(first, last, rad), backgroundColor: fromBg }, { clipPath: FULL, backgroundColor: getComputedStyle(dcard).backgroundColor }], { duration: 800, easing: 'cubic-bezier(.22,.8,.2,1)' });
      }
      if (animated) requestAnimationFrame(() => requestAnimationFrame(() => detail.classList.add('is-in')));
      else detail.classList.add('is-in');
      detail.querySelector('[data-back]').focus({ preventScroll: true });
    }

    function showList(animated) {
      if (view === 'list') return;
      view = 'list'; st.current.view = 'list'; st.current.id = null;
      root.dataset.view = 'list';
      detail.classList.remove('is-in'); detail.inert = true;
      stage.style.transition = 'none'; stage.classList.remove('is-away'); stage.inert = false;
      requestAnimationFrame(() => requestAnimationFrame(() => { stage.style.transition = ''; }));
      render();
      dcard.getAnimations().forEach((a) => a.cancel());
      detail.classList.remove('is-visible');
      kick();
    }

    function route(animated) {
      const m = location.hash.match(/^#\/challenge\/([\w-]+)/);
      if (!m) { showList(animated); return; }
      const idx = list.findIndex((c) => String(c.id) === m[1]);
      if (idx >= 0) { showDetail(idx, animated); return; }
      if (allRef.current.some((c) => String(c.id) === m[1])) { filterRef.current('all'); return; }
      history.replaceState(null, '', location.pathname + location.search);
      showList(false);
    }
    function navigate(i) { location.hash = HASH + list[i].id; }
    function back() { location.hash = '#/'; }

    cards.forEach((c, i) => on(c, 'click', (e) => { e.preventDefault(); if (suppressClick) return; navigate(i); }));
    on(window, 'hashchange', () => route(true));
    on(detail.querySelector('[data-back]'), 'click', back);

    const ro = new ResizeObserver(measure); ro.observe(root); disposers.push(() => ro.disconnect());
    measure();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { if (!dead) measure(); });
    if (st.current.view === 'detail' && !location.hash.startsWith(HASH)) st.current.view = 'list';
    route(false);

    return () => { dead = true; if (raf) cancelAnimationFrame(raf); disposers.forEach((f) => f()); };
  }, [list]);

  /* ===================== DATA TAMPILAN ===================== */
  const c = sel != null ? all.find((x) => x.id === sel) : null;
  const joined = c ? joinedIds.includes(c.id) : false;
  const manage = !!(c && u && (u.role === 'admin' || (u.role === 'curator' && c.ownerId === u.id)));
  const rules = c ? rulesOf(c) : [];
  const idx = c ? Math.max(0, list.findIndex((x) => x.id === c.id)) : 0;
  const addBtn = u.role === 'admin'
    ? <button type="button" className="sp-add" onClick={act.create}><Icon n="plus" /> Tambah challenge</button>
    : u.role === 'curator' ? <Link className="sp-add" href="/overview"><Icon n="plus" /> Buat di Overview</Link> : null;
  const note = u.role === 'member' ? 'Pilih challenge yang masih aktif, lalu daftarkan salah satu karyamu.' : u.role === 'curator' ? 'Kamu hanya dapat mengelola dan menilai challenge milikmu sendiri.' : 'Sebagai admin, kamu dapat mengelola seluruh challenge.';

  return (
    <div className="sp-page" ref={pageRef} id="p-challenge">
      <header className="sp-head">
        <span className="sp-eyebrow">Open Calls — Challenge</span>
        <h1 className="sp-h1">Daftar <em>challenge.</em></h1>
        <p className="sp-lead">{note}</p>
        {addBtn}
      </header>

      <nav className="sp-side" role="tablist" aria-label="Filter challenge">
        <span className="sp-side-t">Kategori</span>
        {FILTERS.map(([k, t]) => (
          <button key={k} type="button" className="sp-f" role="tab" aria-selected={filter === k} onClick={() => { setFilter(k); if (location.hash.startsWith(HASH)) location.hash = '#/'; }}>{t} <span className="n">{cnt[k]}</span></button>
        ))}
      </nav>

      <section className="sp-root" ref={rootRef} data-view="list" aria-label="Daftar challenge">
        <div className="sp-stage" ref={stageRef}>
          {list.map((x, i) => (
            <a key={x.id} ref={(el) => { cardEls.current[i] = el; }} className="sp-card" href={HASH + x.id} draggable={false}
              aria-label={`${x.title}, ${CH_LABEL[x.status]}, ${x.participants} peserta`}>
              <span className="sp-top" aria-hidden="true"><span>{pad(i + 1)}</span><span>{CH_LABEL[x.status]}{joinedIds.includes(x.id) ? ' · Sudah ikut' : ''}</span></span>
              <span className="sp-title" aria-hidden="true">{x.title}</span>
              <span className="sp-bottom" aria-hidden="true"><span suppressHydrationWarning>{chWhen(x)} · {x.participants} peserta</span><span className="sp-arrow">↗</span></span>
            </a>
          ))}
        </div>
        {!list.length && <div className="sp-empty"><b>Tidak ada challenge</b><span>Belum ada challenge pada kategori ini.</span></div>}

      </section>

      <article className="sp-detail" ref={detailRef} aria-live="polite">
        <div className="sp-scroll" ref={scrollRef}>
          <div className="sp-dcard" ref={dcardRef}>
            <div className="sp-dtop">
              <button className="sp-back sp-fade" style={{ '--i': 0 }} type="button" data-back><span aria-hidden="true">←</span> Kembali</button>
              <p className="sp-kicker sp-fade" style={{ '--i': 1 }}>{c ? `${pad(idx + 1)} / ${pad(list.length)} · ${CH_LABEL[c.status]}${joined ? ' · Sudah ikut' : ''}` : ''}</p>
            </div>
            <div>
              <h2 className="sp-dtitle sp-fade" style={{ '--i': 1 }}>{c?.title}</h2>
              <div className="sp-grid">
                <div>
                  <p className="sp-desc sp-fade" style={{ '--i': 2 }}>{c?.description}</p>
                  <dl className="sp-facts sp-fade" style={{ '--i': 3 }}>
                    <div className="sp-fact"><dt>Mulai</dt><dd>{c ? fmtDate(c.start) : ''}</dd></div>
                    <div className="sp-fact"><dt>Selesai</dt><dd>{c ? fmtDate(c.end) : ''}</dd></div>
                    <div className="sp-fact"><dt>Peserta</dt><dd>{c ? `${c.participants} karya` : ''}</dd></div>
                    <div className="sp-fact"><dt>Curator</dt><dd>{c && (c.ownerId ? <Link href={`/profile/${c.ownerId}`}>{c.ownerName || '—'}</Link> : '—')}</dd></div>
                    <div className="sp-fact"><dt>Hadiah</dt><dd>{c?.prize || '—'}</dd></div>
                    <div className="sp-fact"><dt>Waktu</dt><dd suppressHydrationWarning>{c ? chWhen(c) : ''}</dd></div>
                    {c?.attachment && <div className="sp-fact"><dt>Lampiran</dt><dd><a href={c.attachment.url} target="_blank" rel="noreferrer">{c.attachment.name}</a></dd></div>}
                  </dl>
                  {c && (
                    <div className="sp-acts sp-fade" style={{ '--i': 4 }}>
                      {u.role === 'member' && (joined
                        ? <>
                          <span className="sp-joined">Sudah ikut</span>
                          {c.status !== 'ended' && <button type="button" className="sp-cta ghost" onClick={() => act.withdraw(c)}>Tarik submisi</button>}
                        </>
                        : c.status === 'active' && <button type="button" className="sp-cta" onClick={() => act.join(c)}>Ikuti challenge <span aria-hidden="true">→</span></button>)}
                      <Link className={u.role === 'member' ? 'sp-cta ghost' : 'sp-cta'} href={`/challenges/${c.id}`}>{manage ? 'Kelola & nilai' : 'Lihat halaman lengkap'} <span aria-hidden="true">→</span></Link>
                      {manage && <>
                        <button type="button" className="sp-cta ghost" onClick={() => act.edit(c)}>Edit</button>
                        {c.status === 'active' && <button type="button" className="sp-cta ghost" onClick={() => act.close(c)}>Akhiri sekarang</button>}
                        <button type="button" className="sp-cta danger" onClick={() => act.del(c)}>Hapus</button>
                      </>}
                    </div>
                  )}
                </div>
                <div className="sp-fade" style={{ '--i': 3 }}>
                  <h3 className="sp-rules-title">Aturan main</h3>
                  {rules.length ? <ol className="sp-rules">{rules.map((r, i) => <li key={i}>{r}</li>)}</ol> : <p className="sp-rules-empty">Belum ada aturan khusus untuk challenge ini.</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
