// Galeri 3D v3: spiral (halaman 1) → fokus (halaman 2) → detail (halaman 3).
// Berjalan imperatif di dalam komponen klien; data berasal dari server (PostgreSQL).
import { api } from '@/lib/client';
import { pad2 } from '@/lib/format';

export function createGallery(env) {
  const $ = (s, r) => (r || document).querySelector(s);
  const byId = (i) => document.getElementById(i);
  const off = [], timers = new Set();
  const on = (t, ev, fn, o) => { t.addEventListener(ev, fn, o); off.push(() => t.removeEventListener(ev, fn, o)); };
  const later = (fn, ms) => { const t = setTimeout(() => { timers.delete(t); fn(); }, ms); timers.add(t); return t; };

  const state = { arts: [], centerId: null, view: 'home', active: true };
  const stage = byId('stage'), canvas = byId('canvas'), spiral = byId('spiral'), focusEl = byId('focus'), detail = byId('detail'), helix = byId('helix');
  const items = new Map();
  const sp = { pos: 0, tgt: 0, raf: 0, snap: 0, ih: 200, dy: 270, R: 420, th: 36, started: false, c: -1 };
  let busy = false;
  const RM = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const CATS = () => env.ui().cats;
  const catOf = (a) => CATS()[a.category] || { label: a.category, color: '#7a6648' };
  const live = (t) => { const l = byId('live'); if (l) l.textContent = t; };
  const noop = () => {};

  function cube(name, extra) {
    return '<div class="cube ' + name + '"><div class="f fr">' + (extra || '') + '</div><div class="f bk"></div><div class="f lf"></div><div class="f rt"></div><div class="f tp"></div></div>';
  }
  function buildObject(a, lg) {
    const o = document.createElement('div');
    o.className = 'obj' + (lg ? ' lg' : '');
    o.innerHTML = '<div class="anchor"><i class="cast"></i><i class="pool"></i>' + cube('base') + cube('ped', a ? '<span class="plaque"><b></b><i></i></span>' : '') + cube('case') + '<div class="inside"></div></div>';
    const inside = $('.inside', o);
    if (a) {
      const pq = $('.plaque', o);
      $('b', pq).textContent = a.title; $('i', pq).textContent = a.painter;
      const fr = document.createElement('div'); fr.className = 'frame';
      const art = document.createElement('div'); art.className = 'art';
      const im = new Image(); im.alt = a.title + ', karya ' + a.painter; im.decoding = 'async'; im.draggable = false; im.src = a.image;
      art.appendChild(im); fr.appendChild(art); inside.appendChild(fr);
    }
    return o;
  }

  /* ---------- spiral 3D: karya tersusun pada heliks, digulir vertikal ---------- */
  function mkItem(a) {
    const b = document.createElement('button'); b.type = 'button'; b.className = 'si'; b.dataset.id = a.id;
    b.setAttribute('aria-label', a.title + ', karya ' + a.painter + ', kategori ' + catOf(a).label);
    const g = document.createElement('span'); g.className = 'sg';
    const im = new Image(); im.alt = ''; im.decoding = 'async'; im.draggable = false; im.src = a.image; g.appendChild(im);
    b.appendChild(g); return b;
  }
  const currentIndex = () => { const i = state.arts.findIndex((a) => a.id === state.centerId); return i < 0 ? 0 : i; };
  const current = () => state.arts[currentIndex()] || null;
  const sig = (a) => [a.id, a.title, a.painter, a.synopsis, a.category, a.studioUrl, a.example].join('|');
  function aim(i) { const N = state.arts.length; if (!N) return; let d = i - sp.pos; d -= N * Math.round(d / N); sp.tgt = sp.pos + d; }
  function geom() {
    const W = stage.clientWidth || innerWidth, H = stage.clientHeight || innerHeight;
    sp.ih = Math.round(Math.max(120, Math.min(H * 0.38, W * 0.66, 400)));
    sp.dy = Math.round(sp.ih * 1.14); sp.R = Math.round(Math.min(W * 0.28, 480));
    helix.style.setProperty('--ih', sp.ih + 'px');
    paint();
  }
  function paint() {
    const N = state.arts.length; if (!N) return;
    state.arts.forEach((a, i) => {
      const el = items.get(a.id); if (!el) return;
      let d = i - sp.pos; d -= N * Math.round(d / N); const ad = Math.abs(d);
      if (ad > 2.7) { el.style.display = 'none'; return; }
      const o = Math.max(0, Math.min(1, 1.18 - 0.42 * ad));
      el.style.display = '';
      el.style.transform = 'translateY(' + (d * sp.dy).toFixed(1) + 'px) rotateY(' + (d * sp.th).toFixed(2) + 'deg) translateZ(' + sp.R + 'px) translate(-50%,-50%)';
      el.style.opacity = o.toFixed(3); el.style.zIndex = 100 - Math.round(ad * 10);
      el.style.setProperty('--dk', ((1 - o) * 0.55).toFixed(2));
      el.classList.toggle('on', ad < 0.5);
    });
    const c = ((Math.round(sp.pos) % N) + N) % N;
    if (c !== sp.c) {
      sp.c = c; byId('cIdx').textContent = pad2(c + 1); setTitle(state.arts[c]);
      if (state.view === 'home') { state.centerId = state.arts[c].id; live('Karya ' + (c + 1) + ' dari ' + N + ': ' + state.arts[c].title); }
    }
  }
  function setTitle(a) {
    const b = $('.ptitle'); if (!b) return;
    byId('pTitle').textContent = a ? a.title : ''; byId('pBy').textContent = a ? a.painter : '';
    if (!RM && a && b.animate) b.animate([{ opacity: 0, transform: 'translateY(10px)' }, { opacity: 1, transform: 'none' }], { duration: 420, easing: 'cubic-bezier(.2,.8,.2,1)' });
  }
  function layout() {
    const N = state.arts.length, h = byId('hint');
    byId('cIdx').textContent = pad2(N ? currentIndex() + 1 : 0); byId('cTotal').textContent = pad2(N);
    if (!N) h.textContent = 'Belum ada karya yang dipamerkan.';
    else h.textContent = (window.matchMedia('(pointer:coarse)').matches ? 'Geser' : 'Gulir') + ' untuk memutar spiral, pilih karya untuk melihatnya';
    if (!N) setTitle(null);
    sp.c = -1; paint();
  }
  function kick() { if (!sp.raf) sp.raf = requestAnimationFrame(step); }
  function step() {
    sp.raf = 0; const d = sp.tgt - sp.pos;
    if (Math.abs(d) < 0.0006) sp.pos = sp.tgt; else sp.pos += d * 0.1;
    paint(); if (sp.pos !== sp.tgt) kick();
  }
  function nudge(v) { sp.tgt += v; clearTimeout(sp.snap); sp.snap = later(() => { sp.tgt = Math.round(sp.tgt); kick(); }, 140); kick(); }

  function sync() {
    const m = env.arts();
    state.arts = m;
    const ids = new Set(m.map((a) => a.id));
    items.forEach((el, id) => {
      const a = m.find((x) => x.id === id);
      if (!a || el._sig !== sig(a)) { el.remove(); items.delete(id); }
    });
    m.forEach((a) => { if (!items.has(a.id)) { const el = mkItem(a); el._sig = sig(a); helix.appendChild(el); items.set(a.id, el); } });
    if (!state.centerId || !ids.has(state.centerId)) state.centerId = m.length ? m[0].id : null;
    if (m.length) {
      if (!sp.started) { sp.started = true; sp.tgt = currentIndex(); sp.pos = RM ? sp.tgt : sp.tgt - 3.4; }
      else if (state.view === 'home') aim(currentIndex());
    }
    layout(); kick();
    if (state.view === 'detail') renderDetail();
  }

  function renderDetail() {
    const a = current();
    const ds = byId('dslot'); ds.textContent = '';
    if (!a) {
      byId('dTitle').textContent = 'Belum ada karya';
      byId('dBy').textContent = '—';
      byId('dSyn').textContent = 'Belum ada karya yang dipamerkan di galeri ini.';
      byId('dCat').hidden = true; byId('dEx').hidden = true; byId('dInter').hidden = true; byId('dOwn').hidden = true; byId('dGuestHint').hidden = true;
      setStudio(''); ds.appendChild(buildObject(null, true)); fit(); return;
    }
    const c = catOf(a);
    byId('dCat').hidden = false;
    byId('dCat').style.setProperty('--c', c.color);
    $('#dCat span').textContent = c.label;
    byId('dEx').hidden = !a.example;
    const h = byId('dTitle'); h.textContent = a.title; h.classList.toggle('long', a.title.length > 26);
    const by = byId('dBy'); by.textContent = '';
    const lk = document.createElement('a'); lk.href = '/profile/' + a.ownerId; lk.dataset.nav = '1'; lk.textContent = a.painter; lk.title = 'Lihat profil kreator'; by.appendChild(lk);
    byId('dSyn').textContent = a.synopsis || 'Pelukis belum menulis sinopsis untuk karya ini.';
    setStudio(a.studioUrl);
    byId('dInter').hidden = false;
    refreshInter();
    ds.appendChild(buildObject(a, true));
    fit();
  }
  function refreshInter() {
    const a = current(); if (!a) return;
    const u = env.ui().user;
    byId('likeN').textContent = a.likes;
    const bl = byId('btnLike'); bl.classList.toggle('on', a.liked); bl.setAttribute('aria-pressed', a.liked ? 'true' : 'false');
    bl.querySelector('span:not(.cnt)').textContent = a.liked ? 'Disukai' : 'Suka';
    const bf = byId('btnFav'); bf.classList.toggle('on', a.faved); bf.setAttribute('aria-pressed', a.faved ? 'true' : 'false');
    byId('favTxt').textContent = a.faved ? 'Tersimpan' : 'Favorit';
    byId('cmtN').textContent = a.comments;
    byId('dOwn').hidden = !(u && (u.role === 'admin' || (u.role === 'member' && a.ownerId === u.id)));
    byId('dGuestHint').hidden = !!u;
  }
  function setStudio(url) {
    const card = byId('dStudio');
    card.classList.toggle('on', !!url);
    byId('dStudioTxt').textContent = url ? 'Tersedia' : 'Tidak tersedia';
    if (url) { card.href = url; card.removeAttribute('aria-disabled'); card.tabIndex = 0; }
    else { card.removeAttribute('href'); card.setAttribute('aria-disabled', 'true'); card.tabIndex = -1; }
  }

  function updateUrl() {
    const c = current();
    const path = state.view === 'detail' && c ? '/gallery/' + c.id : '/gallery';
    try { window.history.replaceState(window.history.state, '', path); } catch {}
  }
  let enterT = 0;
  function setView(v, fromRoute) {
    if (state.view === v) return;
    state.view = v; stage.dataset.view = v; canvas.dataset.view = v === 'detail' ? 'detail' : 'home';
    spiral.classList.toggle('is-off', v !== 'home');
    focusEl.classList.toggle('is-off', v !== 'focus');
    detail.classList.toggle('is-off', v !== 'detail');
    if (v !== 'focus') focusEl.classList.remove('ready');
    clearTimeout(enterT);
    if (v === 'detail') { detail.classList.add('enter'); enterT = later(() => detail.classList.remove('enter'), 4200); }
    else { detail.classList.remove('enter'); byId('dslot').style.removeProperty('--art-glow'); }
    if (v === 'detail') { renderDetail(); const a = current(); if (a) live('Detail karya: ' + a.title); }
    else env.ui().closeComments();
    window.scrollTo(0, 0);
    fit();
    if (v === 'home') { aim(currentIndex()); kick(); }
    if (!fromRoute && v !== 'focus') updateUrl();
  }

  /* ---------- skala kanvas detail ---------- */
  let raf = 0;
  function fit() {
    if (!state.active) return;
    const navH = (byId('nav') || {}).offsetHeight || 84;
    const W = stage.parentNode.clientWidth || window.innerWidth, H = Math.max(window.innerHeight - navH, 320);
    const portrait = W < 820 || W / H < 0.9, mode = portrait ? 'portrait' : 'landscape';
    canvas.dataset.mode = mode;
    let cw, ch, sc, sh, left, top;
    if (!portrait) { cw = 1600; ch = 900; sh = Math.max(H, 560); sc = Math.min(W / cw, sh / ch); left = (W - cw * sc) / 2; top = (sh - ch * sc) / 2; }
    else { cw = 800; sc = W / cw; ch = state.view === 'detail' ? Math.max(detail.offsetHeight, 1500) : 1500; sh = Math.max(ch * sc, H); left = 0; top = (sh - ch * sc) / 2; }
    canvas.dataset.lb = left > 28 ? 'x' : (top > 28 ? 'y' : '');
    stage.style.height = (state.view === 'detail' ? sh : H) + 'px';
    canvas.style.width = cw + 'px'; canvas.style.height = ch + 'px';
    canvas.style.transform = 'translate(' + left + 'px,' + top + 'px) scale(' + sc + ')';
    geom();
  }
  const schedFit = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(fit); };
  on(window, 'resize', schedFit);

  /* ---------- input spiral: roda, seret, tombol ---------- */
  on(stage, 'wheel', (e) => {
    if (state.view !== 'home' || env.ui().modalOpen) return;
    e.preventDefault();
    let d = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY; if (e.deltaMode === 1) d *= 32;
    nudge(Math.max(-1, Math.min(1, d / 420)));
  }, { passive: false });
  let drag = null, moved = false;
  on(spiral, 'pointerdown', (e) => { drag = { y: e.clientY, id: e.pointerId }; moved = false; });
  on(spiral, 'pointermove', (e) => {
    if (!drag) return; const dy = e.clientY - drag.y;
    if (!moved) { if (Math.abs(dy) < 7) return; moved = true; try { spiral.setPointerCapture(drag.id); } catch {} }
    drag.y = e.clientY; nudge(-dy / (sp.dy * 0.9));
  });
  const endDrag = () => { drag = null; };
  on(spiral, 'pointerup', endDrag); on(spiral, 'pointercancel', endDrag);
  on(helix, 'click', (e) => { if (moved) { moved = false; return; } const b = e.target.closest('.si'); if (b) openFocus(Number(b.dataset.id)); });
  const step1 = (k) => { clearTimeout(sp.snap); sp.tgt = Math.round(sp.tgt) + k; kick(); };
  on(document, 'keydown', (e) => {
    if (e.defaultPrevented) return;
    if (e.key === 'Escape') {
      if (state.view === 'focus') closeFocus();
      else if (state.view === 'detail' && !busy) setView('home');
      return;
    }
    if (env.ui().modalOpen || state.view !== 'home') return;
    if (e.target.closest && e.target.closest('input,textarea,select')) return;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === 'PageDown') { e.preventDefault(); step1(1); }
    else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); step1(-1); }
  });
  on(byId('btnBack'), 'click', () => { if (busy) return; setView('home'); });
  on(byId('fBack'), 'click', () => closeFocus());
  on(byId('btnDetail'), 'click', () => toDetail());
  // Tautan internal (profil kreator) memakai router Next.
  on(byId('p-galeri'), 'click', (e) => { const a = e.target.closest('a[data-nav]'); if (a) { e.preventDefault(); env.ui().router.push(a.getAttribute('href')); } });

  /* ---------- halaman kedua: karya di tengah, miring mengikuti kursor, tahan untuk zoom ---------- */
  const fw = byId('fwrap'), fcard = byId('fcard'), fimg = byId('fimg');
  const fc = { rx: 0, ry: 0, tx: 0, ty: 0, z: 0, tz: 0, mx: 50, my: 50, raf: 0, hold: false, over: false };
  function ftick() {
    fc.raf = 0;
    fc.rx += (fc.tx - fc.rx) * 0.14; fc.ry += (fc.ty - fc.ry) * 0.14; fc.z += (fc.tz - fc.z) * 0.11;
    fcard.style.transform = 'rotateX(' + fc.rx.toFixed(2) + 'deg) rotateY(' + fc.ry.toFixed(2) + 'deg) scale(' + (1 + fc.z * 0.05).toFixed(3) + ')';
    fcard.style.setProperty('--mx', fc.mx + '%'); fcard.style.setProperty('--my', fc.my + '%');
    fcard.style.setProperty('--g', (0.45 + fc.z * 0.4 + (fc.over ? 0.15 : 0)).toFixed(2));
    fimg.style.transformOrigin = fc.mx + '% ' + fc.my + '%';
    fimg.style.transform = 'scale(' + (1 + fc.z * 1.3).toFixed(3) + ')';
    if (Math.abs(fc.tx - fc.rx) > 0.02 || Math.abs(fc.ty - fc.ry) > 0.02 || Math.abs(fc.tz - fc.z) > 0.002) fc.raf = requestAnimationFrame(ftick);
  }
  const fkick = () => { if (!fc.raf) fc.raf = requestAnimationFrame(ftick); };
  function fpos(e) {
    const r = fw.getBoundingClientRect();
    const nx = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width)), ny = Math.min(1, Math.max(0, (e.clientY - r.top) / r.height));
    fc.mx = +(nx * 100).toFixed(1); fc.my = +(ny * 100).toFixed(1);
    const k = fc.hold ? 7 : 17; fc.ty = (nx - 0.5) * 2 * k; fc.tx = -(ny - 0.5) * 2 * k; fkick();
  }
  const fidle = () => { fc.over = false; fc.tx = fc.ty = 0; fc.mx = fc.my = 50; fkick(); };
  on(fw, 'pointerenter', (e) => { fc.over = true; fpos(e); });
  on(fw, 'pointermove', fpos);
  on(fw, 'pointerdown', (e) => { fc.hold = true; fc.tz = 1; try { fw.setPointerCapture(e.pointerId); } catch {} fpos(e); });
  function frel(e) {
    fc.hold = false; fc.tz = 0;
    const r = fw.getBoundingClientRect();
    if (e.pointerType === 'touch' || e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) fidle(); else fkick();
  }
  on(fw, 'pointerup', frel); on(fw, 'pointercancel', frel);
  on(fw, 'pointerleave', () => { if (!fc.hold) fidle(); });
  on(fw, 'contextmenu', (e) => e.preventDefault());
  function resetTilt() {
    cancelAnimationFrame(fc.raf); fc.raf = 0;
    fc.rx = fc.ry = fc.tx = fc.ty = fc.z = fc.tz = 0; fc.mx = fc.my = 50; fc.hold = false; fc.over = false; ftick();
  }
  function fillFocus(a) {
    fimg.src = a.image; fimg.alt = a.title + ', karya ' + a.painter;
    byId('focTitle').textContent = a.title; byId('focBy').textContent = a.painter; live('Karya terpilih: ' + a.title);
  }

  /* ---------- penerbangan gambar antar halaman ---------- */
  function flight(a, base, from, to, o) {
    let f = o.el;
    if (!f) {
      f = document.createElement('div'); f.className = 'fly';
      f.style.cssText = 'left:' + base.left + 'px;top:' + base.top + 'px;width:' + base.width + 'px;height:' + base.height + 'px';
      const im = new Image(); im.alt = ''; im.src = a.image; f.appendChild(im);
      document.body.appendChild(f);
    }
    const kf = [];
    for (let i = 0; i <= 8; i++) {
      const t = i / 8;
      const r = { left: from.left + (to.left - from.left) * t, top: from.top + (to.top - from.top) * t - (o.arc || 0) * 4 * t * (1 - t), width: from.width + (to.width - from.width) * t, height: from.height + (to.height - from.height) * t };
      kf.push({ transform: 'translate(' + (r.left - base.left) + 'px,' + (r.top - base.top) + 'px) scale(' + (r.width / base.width) + ',' + (r.height / base.height) + ')', offset: t });
    }
    kf[0].borderRadius = o.r0; kf[8].borderRadius = o.r1;
    const an = f.animate(kf, { duration: RM ? 1 : o.d, easing: o.e, fill: 'forwards' });
    return { el: f, done: an.finished.catch(noop) };
  }
  const thumbRect = (id) => { const it = items.get(id); return it ? $('.sg', it).getBoundingClientRect() : null; };

  function openFocus(id) {
    if (busy || state.view !== 'home') return;
    const i = state.arts.findIndex((a) => a.id === id); if (i < 0) return;
    const a = state.arts[i], it = items.get(id), T = thumbRect(id);
    busy = true; state.centerId = id;
    clearTimeout(sp.snap); aim(i); kick();
    fillFocus(a); resetTilt(); setView('focus');
    (fimg.decode ? fimg.decode() : Promise.resolve()).catch(noop).then(() => {
      requestAnimationFrame(() => {
        if (!state.active) return;
        const B = fcard.getBoundingClientRect(); it.style.visibility = 'hidden';
        const F = flight(a, B, T, B, { d: 1000, e: 'cubic-bezier(.2,.85,.2,1)', r0: '3px', r1: '14px' });
        F.done.then(() => { focusEl.classList.add('ready'); requestAnimationFrame(() => { F.el.remove(); it.style.visibility = ''; busy = false; }); });
      });
    });
  }
  function closeFocus() {
    if (busy || state.view !== 'focus') return;
    const a = current(); if (!a) return;
    busy = true; resetTilt();
    const A = fcard.getBoundingClientRect(), it = items.get(a.id);
    sp.pos = sp.tgt; paint();
    const T = thumbRect(a.id) || A;
    if (it) it.style.visibility = 'hidden';
    focusEl.classList.remove('ready');
    const F = flight(a, A, A, T, { d: 900, e: 'cubic-bezier(.6,0,.2,1)', r0: '14px', r1: '3px' });
    setView('home');
    F.done.then(() => { F.el.remove(); if (it) it.style.visibility = ''; busy = false; });
  }

  /* ---------- transisi ke detail: menyelam ke dalam lukisan ---------- */
  function artRGB() {
    try {
      if (!fimg.naturalWidth) throw 0;
      const c = document.createElement('canvas'); c.width = c.height = 24;
      const x = c.getContext('2d'); x.drawImage(fimg, 0, 0, 24, 24);
      const d = x.getImageData(0, 0, 24, 24).data; let r = 0, g = 0, b = 0, w = 0;
      for (let i = 0; i < d.length; i += 4) { const k = 1 + (Math.max(d[i], d[i + 1], d[i + 2]) - Math.min(d[i], d[i + 1], d[i + 2])) / 32; r += d[i] * k; g += d[i + 1] * k; b += d[i + 2] * k; w += k; }
      return [r / w, g / w, b / w];
    } catch { return [226, 190, 120]; }
  }
  const mixc = (a, b, k) => [a[0] + (b[0] - a[0]) * k, a[1] + (b[1] - a[1]) * k, a[2] + (b[2] - a[2]) * k];
  const rgb = (c, al) => 'rgba(' + Math.round(c[0]) + ',' + Math.round(c[1]) + ',' + Math.round(c[2]) + ',' + (al == null ? 1 : al) + ')';
  function sparkles(cx, cy, cols, n) {
    if (RM) return;
    for (let i = 0; i < n; i++) {
      const s = document.createElement('i'), sz = 3 + Math.random() * 5, col = cols[i % cols.length];
      s.className = 'spk';
      s.style.cssText = 'left:' + cx + 'px;top:' + cy + 'px;width:' + sz + 'px;height:' + sz + 'px;background:radial-gradient(circle,#fff6d8,' + col + ' 60%,transparent 72%);box-shadow:0 0 10px 2px ' + col;
      document.body.appendChild(s);
      const g = Math.random() * 6.283, d = 110 + Math.random() * 380, dx = Math.cos(g) * d, dy = Math.sin(g) * d - 40;
      const an = s.animate([{ transform: 'translate(-50%,-50%) scale(.3)', opacity: 0 }, { opacity: 1, offset: 0.25 }, { transform: 'translate(calc(-50% + ' + dx + 'px),calc(-50% + ' + dy + 'px)) scale(1)', opacity: 0 }], { duration: 900 + Math.random() * 700, delay: Math.random() * 260, easing: 'cubic-bezier(.2,.7,.3,1)', fill: 'forwards' });
      an.onfinish = () => s.remove();
    }
  }
  function ring(cx, cy, col, delay) {
    if (RM) return;
    const r = document.createElement('i'); r.className = 'ring';
    r.style.cssText = 'left:' + cx + 'px;top:' + cy + 'px;border-color:' + col;
    document.body.appendChild(r);
    const k = Math.max(innerWidth, innerHeight) * 1.6 / 200;
    const an = r.animate([{ transform: 'translate(-50%,-50%) scale(.2)', opacity: 0 }, { opacity: 0.9, offset: 0.12 }, { opacity: 0.4, offset: 0.6 }, { transform: 'translate(-50%,-50%) scale(' + k + ')', opacity: 0 }], { duration: 1200, delay, easing: 'cubic-bezier(.2,.6,.3,1)', fill: 'both' });
    an.onfinish = () => r.remove();
  }
  function orb(cx, cy, R, col, z) {
    const o = document.createElement('div'), mid = mixc(col, [255, 226, 170], 0.28), lt = mixc(col, [255, 250, 238], 0.62), dk = mixc(col, [20, 12, 8], 0.55);
    o.className = 'orb'; if (z) o.style.zIndex = z;
    o.style.cssText += 'left:' + (cx - R) + 'px;top:' + (cy - R) + 'px;width:' + (2 * R) + 'px;height:' + (2 * R) + 'px;background:radial-gradient(circle,' + rgb(lt) + ' 0,' + rgb(mid) + ' 36%,' + rgb(dk) + ' 96%,' + rgb(dk, 0) + ' 100%)';
    document.body.appendChild(o); return o;
  }
  function toDetail() {
    if (busy || state.view !== 'focus') return;
    const a = current(); if (!a) return;
    busy = true; resetTilt();
    const W = innerWidth, H = innerHeight, r = fcard.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height / 2;
    const col = artRGB(), glow = rgb(mixc(col, [255, 230, 170], 0.45)), gold = 'rgba(241,215,156,1)';
    const R = Math.hypot(Math.max(cx, W - cx), Math.max(cy, H - cy)) + 60, ds = byId('dslot');
    const ease = 'cubic-bezier(.45,0,.2,1)';
    const f = document.createElement('div'); f.className = 'fly dive';
    f.style.cssText = 'left:' + r.left + 'px;top:' + r.top + 'px;width:' + r.width + 'px;height:' + r.height + 'px;border-radius:14px';
    const im = new Image(); im.alt = ''; im.src = a.image; f.appendChild(im);
    document.body.appendChild(f); fw.style.visibility = 'hidden'; focusEl.classList.add('leave');
    const S = Math.max(W / r.width, H / r.height) * 1.6;
    f.animate([
      { transform: 'scale(1)', opacity: 1 }, { transform: 'scale(1.05)', opacity: 1, offset: 0.16 },
      { transform: 'scale(' + (S * 0.5) + ')', opacity: 1, offset: 0.62 }, { transform: 'scale(' + S + ')', opacity: 0 },
    ], { duration: RM ? 1 : 1250, easing: 'cubic-bezier(.55,0,.8,.5)', fill: 'forwards' }).finished.catch(noop).then(() => f.remove());
    ring(cx, cy, glow, 0); ring(cx, cy, 'rgba(241,215,156,.9)', 180);
    sparkles(cx, cy, [gold, glow], 20);
    const A = orb(cx, cy, R, col);
    const aDur = RM ? 1 : 760, aDelay = RM ? 0 : 460;
    const aAn = A.animate([{ transform: 'scale(0)', opacity: 0 }, { transform: 'scale(.25)', opacity: 1, offset: 0.22 }, { transform: 'scale(1)', opacity: 1 }], { duration: aDur, delay: aDelay, easing: ease, fill: 'both' });
    const prepared = new Promise((res) => {
      later(() => {
        ds.style.setProperty('--art-glow', rgb(mixc(col, [255, 230, 170], 0.35), 0.4));
        setView('detail'); fw.style.visibility = '';
        const im2 = $('.frame img', ds);
        (im2 && im2.decode ? im2.decode() : Promise.resolve()).catch(noop).then(res);
      }, RM ? 1 : aDelay + aDur * 0.72);
    });
    Promise.all([aAn.finished.catch(noop), prepared]).then(() => {
      const fr = $('.frame', ds), b = fr ? fr.getBoundingClientRect() : null;
      const fx = b ? b.left + b.width / 2 : W / 2, fy = b ? Math.min(Math.max(b.top + b.height / 2, 0), H) : H / 2;
      const Rf = Math.hypot(Math.max(fx, W - fx), Math.max(fy, H - fy)) + 60;
      const B = orb(fx, fy, Rf, col, 89), bDur = RM ? 1 : 1700;
      B.animate([
        { transform: 'scale(1)', opacity: 1 }, { transform: 'scale(.62)', opacity: 0.82, offset: 0.3 }, { transform: 'scale(.28)', opacity: 0.5, offset: 0.6 },
        { transform: 'scale(.08)', opacity: 0.22, offset: 0.85 }, { transform: 'scale(0)', opacity: 0 },
      ], { duration: bDur, easing: 'cubic-bezier(.5,0,.25,1)', fill: 'forwards' }).finished.catch(noop).then(() => B.remove());
      A.animate([{ opacity: 1 }, { opacity: 0 }], { duration: RM ? 1 : 450, easing: 'ease', fill: 'forwards' }).finished.catch(noop).then(() => A.remove());
      later(() => { ring(fx, fy, glow, 0); sparkles(fx, fy, [gold, glow], 16); }, RM ? 1 : bDur * 0.78);
      later(() => { focusEl.classList.remove('leave'); busy = false; }, RM ? 50 : bDur + 200);
    });
  }


  /* interaksi */
  on(byId('btnLike'), 'click', async () => {
    const a = current(); if (!a) return;
    if (env.ui().needLogin('Masuk atau gabung untuk menyukai karya ini.')) return;
    try { const r = await api(`/api/artworks/${a.id}/like`, { method: 'POST' }); a.liked = r.on; a.likes = r.count; refreshInter(); }
    catch (e) { env.ui().toast(e.message, 'err'); }
  });
  on(byId('btnFav'), 'click', async () => {
    const a = current(); if (!a) return;
    if (env.ui().needLogin('Masuk atau gabung untuk menyimpan karya ke favorit.')) return;
    try {
      const r = await api(`/api/artworks/${a.id}/favorite`, { method: 'POST' }); a.faved = r.on; refreshInter();
      env.ui().toast(r.on ? 'Ditambahkan ke favorit.' : 'Dihapus dari favorit.', r.on ? 'ok' : '');
    } catch (e) { env.ui().toast(e.message, 'err'); }
  });
  on(byId('btnCmt'), 'click', () => {
    const a = current(); if (!a) return;
    env.ui().openComments(a, (n) => { a.comments = n; if (current() === a) byId('cmtN').textContent = n; });
  });
  on(byId('btnEdit'), 'click', () => { const a = current(); if (a) env.onEdit(a); });
  on(byId('btnDel'), 'click', async () => {
    const a = current(); if (!a) return;
    const ui = env.ui();
    const ok = await ui.confirm({ title: 'Hapus karya ini?', text: '“' + a.title + '” akan dihapus dari galeri beserta suka, komentar, dan submisi challenge-nya.', ok: 'Hapus karya', danger: true });
    if (!ok) return;
    try { await api(`/api/artworks/${a.id}`, { method: 'DELETE' }); } catch (e) { ui.toast(e.message, 'err'); return; }
    env.removeLocal(a.id);
    const i = currentIndex(), rest = state.arts.filter((x) => x.id !== a.id);
    state.centerId = rest.length ? rest[Math.min(i, rest.length - 1)].id : null;
    ui.closeComments();
    sync();
    if (!state.arts.length) setView('home'); else updateUrl();
    ui.toast('Karya dihapus.', 'ok');
    ui.refresh();
  });


  if (document.fonts && document.fonts.ready) document.fonts.ready.then(schedFit);

  // mulai
  sync();
  if (env.initialId != null && state.arts.some((a) => a.id === env.initialId)) {
    state.centerId = env.initialId; sp.tgt = sp.pos = currentIndex(); layout();
    setView('detail', true);
  }
  fit(); layout(); requestAnimationFrame(fit);

  return {
    sync, refreshInter, fit,
    destroy() {
      state.active = false;
      off.forEach((f) => f()); cancelAnimationFrame(raf); cancelAnimationFrame(sp.raf); cancelAnimationFrame(fc.raf);
      timers.forEach(clearTimeout); timers.clear();
      document.querySelectorAll('body > .fly, body > .spk, body > .ring, body > .orb').forEach((n) => n.remove());
      helix.textContent = ''; items.clear();
    },
  };
}
