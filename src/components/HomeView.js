'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useApp } from './context';
import { FrameImg, Icon, ChCard, Foot, Void } from './ui';

const LABELS = ['00 / IV — Entrance', 'I / IV — On View', 'II / IV — In Numbers', 'III / IV — Open Calls', 'IV / IV — Join'];
const p2 = (n) => (n < 10 ? '0' : '') + n;
const clamp01 = (v) => Math.min(1, Math.max(0, v));
const smooth = (a, b, v) => { const t = clamp01((v - a) / (b - a)); return t * t * (3 - 2 * t); };
const loadScript = (src) => {
  const w = window; w.__scriptCache = w.__scriptCache || {};
  if (!w.__scriptCache[src]) w.__scriptCache[src] = new Promise((res, rej) => { const el = document.createElement('script'); el.src = src; el.async = true; el.onload = res; el.onerror = rej; document.head.appendChild(el); });
  return w.__scriptCache[src];
};
const pageBg = () => { const m = getComputedStyle(document.body).backgroundColor.match(/\d+/g) || [243, 240, 233]; return '#' + m.slice(0, 3).map((x) => (+x).toString(16).padStart(2, '0')).join(''); };

function Count({ to }) {
  const ref = useRef(null);
  const [v, setV] = useState(to);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion:reduce)').matches;
    if (reduce || to === 0) return;
    setV(0);
    const io = new IntersectionObserver((es) => es.forEach((en) => {
      if (!en.isIntersecting) return; io.disconnect();
      const t0 = performance.now(), dur = 1100;
      const tick = (now) => { const p = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - p, 3); setV(Math.round(to * e)); if (p < 1) requestAnimationFrame(tick); };
      requestAnimationFrame(tick);
    }), { threshold: 0.4 });
    io.observe(el); return () => io.disconnect();
  }, [to]);
  return <b ref={ref}>{v}</b>;
}

function Wall({ sets }) {
  const { cats } = useApp();
  const [i, setI] = useState(0), [out, setOut] = useState(false), [paused, setPaused] = useState(false), [gen, setGen] = useState(0);
  const busy = useRef(false);
  const n = sets.length;
  const go = (k) => {
    if (busy.current) return; busy.current = true; setOut(true);
    setTimeout(() => { setI(((k % n) + n) % n); setOut(false); setGen((g) => g + 1); busy.current = false; }, 520);
  };
  useEffect(() => {
    if (n < 2 || paused) return;
    const t = setTimeout(() => { if (document.hidden) setGen((g) => g + 1); else go(i + 1); }, 8000);
    return () => clearTimeout(t);
  }, [i, paused, gen, n]); // eslint-disable-line
  const items = sets[i];
  const cols = items.length === 3 ? '1fr 1.35fr 1fr' : `repeat(${items.length},minmax(0,1fr))`;
  const max = items.length === 1 ? { maxWidth: 420, margin: '0 auto' } : items.length === 2 ? { maxWidth: 760, margin: '0 auto' } : {};
  return (
    <div className="wall" onMouseEnter={() => setPaused(true)} onMouseLeave={() => { setPaused(false); setGen((g) => g + 1); }}>
      <div id="wallBox">
        <div className={'wall-set' + (out ? ' out' : '')} style={{ gridTemplateColumns: cols, ...max }}>
          {items.map((a) => (
            <Link key={a.id} className="wall-item" href={`/gallery/${a.id}`} aria-label={`Buka ${a.title} di galeri`}>
              <div className="fr-d"><FrameImg a={a} /></div>
              <div className="plq"><b>{a.title}</b><span>{a.painter} · {(cats[a.category] || {}).label}</span></div>
            </Link>
          ))}
        </div>
      </div>
      <div className="wall-bar">
        <button type="button" className="rnd2" onClick={() => go(i - 1)} aria-label="Pajangan sebelumnya"><Icon n="back" /></button>
        <div className={'wall-prog' + (n > 1 ? ' run' : '')} key={gen} style={{ '--dur': '8s', animationPlayState: paused ? 'paused' : undefined }} aria-hidden="true"><i /></div>
        <span className="upper" style={{ minWidth: 64, textAlign: 'center' }}>{p2(i + 1)} / {p2(n)}</span>
        <button type="button" className="rnd2" onClick={() => go(i + 1)} aria-label="Pajangan berikutnya"><Icon n="arrow" /></button>
      </div>
    </div>
  );
}

export default function HomeView({ stats, popular, newest, calls, joinedIds }) {
  const { user: u, setNavLabel } = useApp();
  const pin = useRef(null), stick = useRef(null), stage = useRef(null), heroTxt = useRef(null), root = useRef(null), artBox = useRef(null), countSec = useRef(null), countStick = useRef(null), countTxt = useRef(null);
  const pool = popular.slice(0, 9), sets = [];
  for (let k = 0; k < pool.length; k += 3) sets.push(pool.slice(k, k + 3));
  if (sets.length > 1 && sets[sets.length - 1].length < 3) { const last = sets[sets.length - 1]; for (let k = 0; last.length < 3 && k < pool.length; k++) if (!last.includes(pool[k])) last.push(pool[k]); }

  /* label navbar mengikuti section */
  useEffect(() => {
    let cur = -1;
    const sio = new IntersectionObserver((es) => es.forEach((en) => {
      if (en.isIntersecting) { const k = +en.target.dataset.sec; if (k !== cur) { cur = k; setNavLabel(LABELS[k]); } }
    }), { rootMargin: '-35% 0px -55% 0px' });
    root.current.querySelectorAll('[data-sec]').forEach((el) => sio.observe(el));
    return () => { sio.disconnect(); setNavLabel(null); };
  }, []); // eslint-disable-line

  /* HERO — visualisasi Starry Archive, progres digerakkan oleh scroll */
  useEffect(() => {
    const pinEl = pin.current, stickEl = stick.current, txt = heroTxt.current;
    let dead = false, handle = null, raf = 0;
    const setNav = () => { const n = document.querySelector('.nav'); document.documentElement.style.setProperty('--nav-h', (n ? n.offsetHeight : 84) + 'px'); };
    const progress = () => {
      const r = pinEl.getBoundingClientRect(), navH = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 84;
      const total = Math.max(1, r.height - stickEl.offsetHeight);
      return clamp01((navH - r.top) / total);
    };
    const apply = () => {
      raf = 0; const p = progress();
      if (handle) handle.setProgress(p * 0.9);
      stickEl.style.pointerEvents = p > 0.5 ? 'none' : '';
      const f = 1 - smooth(0.05, 0.3, p);
      txt.style.opacity = f.toFixed(3); txt.style.transform = `translateY(${(-(1 - f) * 40).toFixed(1)}px)`;
      txt.style.visibility = f < 0.01 ? 'hidden' : 'visible';
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(apply); };
    setNav(); apply();
    const onResize = () => { setNav(); onScroll(); };
    window.addEventListener('scroll', onScroll, { passive: true }); window.addEventListener('resize', onResize);
    loadScript('/vendor/starry-archive.js')
      .then(() => (dead ? null : window.StarryArchive.mount(stage.current, { scroll: false, mirror: true, background: pageBg(), progress: 0 })))
      .then((hd) => { if (dead) { hd && hd.destroy && hd.destroy(); return; } handle = hd; stage.current.classList.add('is-ready'); apply(); })
      .catch((e) => console.error('Starry Archive gagal dimuat:', e));
    return () => { dead = true; if (raf) cancelAnimationFrame(raf); window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onResize); if (handle && handle.destroy) handle.destroy(); };
  }, []);

  /* DALAM ANGKA — art-archive-2: masuk (menimpa section 2) → diam → keluar (menimpa section 4) */
  useEffect(() => {
    const secEl = countSec.current, stickEl = countStick.current, txt = countTxt.current;
    let dead = false, handle = null, started = false, raf = 0;
    const ENT = 0.28, HOLD = 0.52; // 0–0.2 animasi masuk, sampai 0.5 diam, 0.5–1 animasi keluar
    const navH = () => parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 84;
    const apply = () => {
      raf = 0;
      const nh = navH(), vh = window.innerHeight, r = secEl.getBoundingClientRect();
      const total = Math.max(1, r.height - stickEl.offsetHeight);
      const d = nh - r.top; // <0: belum menempel (animasi masuk)
      let s, P;
      if (d < 0) { P = 0; s = 0.9; }
      else { P = clamp01(d / total); s = P < ENT ? 0.9 * (1 - P / ENT) : P < HOLD ? 0 : (0.9 * (P - HOLD)) / (1 - HOLD); }
      if (handle) handle.setProgress(s);
      const fin = smooth(ENT * 0.45, ENT * 1.1, P) * (d < 0 ? 0 : 1), fout = smooth(HOLD + 0.02, HOLD + 0.16, P);
      const f = fin * (1 - fout);
      txt.style.opacity = f.toFixed(3); txt.style.visibility = f < 0.01 ? 'hidden' : 'visible';
      txt.style.transform = `translateY(${((1 - fin) * 30 - fout * 40).toFixed(1)}px)`;
      stickEl.style.pointerEvents = (d < 0 || P < ENT * 0.8 || P > HOLD + 0.1) ? 'none' : '';
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(apply); };
    const start = () => {
      if (started) return; started = true;
      loadScript('/vendor/art-scene-2.js')
        .then(() => (dead ? null : window.ArtScene.mount(artBox.current, { scroll: false, mirror: true, background: pageBg(), progress: 0.9 })))
        .then((hd) => { if (dead) { hd && hd.destroy && hd.destroy(); return; } handle = hd; artBox.current.classList.add('is-ready'); apply(); })
        .catch((e) => console.error('Art Archive gagal dimuat:', e));
    };
    apply();
    const io = new IntersectionObserver((es) => { if (es.some((e) => e.isIntersecting)) { start(); io.disconnect(); } }, { rootMargin: '1200px 0px' });
    io.observe(secEl);
    window.addEventListener('scroll', onScroll, { passive: true }); window.addEventListener('resize', onScroll);
    return () => { dead = true; io.disconnect(); if (raf) cancelAnimationFrame(raf); window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); if (handle && handle.destroy) handle.destroy(); };
  }, []);

  const role = u?.role;
  const second = !u ? <Link className="btn text" href="/login">Join as creator</Link>
    : role === 'member' ? <Link className="btn text" href="/my-artwork">Karya saya</Link>
    : role === 'curator' ? <Link className="btn text" href="/overview">Buat challenge</Link>
    : role === 'admin' ? <Link className="btn text" href="/users">Kelola akun</Link>
    : <Link className="btn text" href="/profile">Profil saya</Link>;
  const cta = !u ? <><Link className="btn primary" href="/login">Gabung sekarang <Icon n="arrow" /></Link><Link className="btn line" style={{ borderColor: '#f3efe5', color: '#f3efe5' }} href="/gallery">Jelajahi dulu</Link></>
    : role === 'member' ? <Link className="btn primary" href="/my-artwork">Daftarkan karya baru <Icon n="arrow" /></Link>
    : role === 'curator' ? <Link className="btn primary" href="/overview">Buat challenge <Icon n="arrow" /></Link>
    : role === 'admin' ? <Link className="btn primary" href="/users">Buka user management <Icon n="arrow" /></Link>
    : <Link className="btn primary" href="/profile">Lengkapi profilmu <Icon n="arrow" /></Link>;

  return (
    <div id="p-beranda" className="page" ref={root}>
      <div className="b-pin" id="sec-hero" data-sec="0" ref={pin}>
        <div className="b-pin-in" ref={stick}>
          <div className="b-stage" ref={stage} aria-hidden="true" />
          <div className="b-hero" ref={heroTxt}>
            <h1 className="b-title" id="bTitle">
              <span className="b-rings" aria-hidden="true"><svg viewBox="0 0 240 110"><circle cx="55" cy="55" r="54" /><circle cx="55" cy="55" r="41" /><circle cx="185" cy="55" r="54" /><circle cx="185" cy="55" r="41" /></svg></span>
              <span className="l1">Walk the</span><span className="l2">Archive.</span>
            </h1>
            <p className="b-sub">Galeri digital tempat kreator memajang karya, bertukar kritik jujur, dan menjawab open call bulanan.</p>
            <div className="b-cta"><Link className="btn primary" href="/gallery">Masuk ke Aula <Icon n="arrow" /></Link>{second}</div>
            <a className="b-scroll" href="#sec-view" onClick={(e) => { e.preventDefault(); document.getElementById('sec-view')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}>
              Scroll to walk <Icon n="arrow" style={{ width: 15, height: 15, verticalAlign: -2, stroke: 'currentColor', fill: 'none', strokeWidth: 1.6 }} />
            </a>
          </div>
        </div>
      </div>

      <section className="sec wrap" id="sec-view" data-sec="1">
        <div className="sec-head"><div><span className="eyebrow">I — Pajangan sementara</span><h2 className="h-lg">Sedang <em>dipajang</em> di dinding utama.</h2></div><p className="lead">Susunan karya yang tampil sementara, berganti otomatis. Klik bingkai untuk melihatnya di aula.</p></div>
        {sets.length ? <Wall sets={sets} /> : <Void title="Dinding masih kosong"><p>Belum ada karya yang dipamerkan. Member dapat mendaftarkan karya pertamanya dari halaman My Artwork.</p></Void>}
      </section>

      <section className="b-pin b-pin2" id="sec-count" data-sec="2" ref={countSec}>
        <div className="b-pin-in" ref={countStick}>
          <div className="b-stage" ref={artBox} aria-hidden="true" />
          <div className="b-count-in" ref={countTxt}>
            <div className="wrap b-count-box"><div className="b-count-col">
              <div className="b-count-head"><span className="eyebrow">II — Dalam angka</span><h2 className="h-lg">Arsip hari ini,<br /><em>dihitung satu per satu.</em></h2><p className="lead">Setiap angka bertambah ketika kreator baru bergabung dan karya baru digantung di aula.</p></div>
          
              <div className="stats">
          <div className="stat hl"><Count to={stats.arts} /><span>Karya dipamerkan</span><small>Terbuka untuk semua pengunjung</small></div>
          <div className="stat"><Count to={stats.members} /><span>Kreator aktif</span><small>Member yang memamerkan karya</small></div>
          <div className="stat"><Count to={stats.active} /><span>Challenge berlangsung</span><small>Open call dari para curator</small></div>
          <div className="stat"><Count to={stats.appreciation} /><span>Apresiasi</span><small>Suka dan komentar terkumpul</small></div>
        </div>
            </div></div>
          </div>
        </div>
      </section>

      <section className="sec wrap" id="sec-calls" data-sec="3">
        <div className="sec-head"><div><span className="eyebrow">III — Open calls</span><h2 className="h-lg">Challenge yang <em>sedang dibuka.</em></h2></div>
          {u && ['member', 'curator', 'admin'].includes(role) && <Link className="btn line" href="/challenges">Semua challenge <Icon n="arrow" /></Link>}</div>
        {!calls.length ? <Void title="Belum ada challenge aktif"><p>Pantau terus: curator akan segera membuka open call berikutnya.</p></Void>
          : <div className="ch-grid">{calls.map((c, k) => <ChCard key={c.id} c={c} idx={k + 1} plain />)}</div>}
      </section>

      <section className="sec wrap" id="sec-join" data-sec="4">
        <div className="band">
          <div style={{ position: 'relative', zIndex: 1 }}>
            <span className="eyebrow">IV — Bergabung</span>
            <h2 className="h-lg" style={{ margin: '16px 0 18px' }}>Gantung karyamu,<br /><em>ikut berkeliling.</em></h2>
            <p className="lead" style={{ marginBottom: 28 }}>{u ? `Halo, ${u.name.split(' ')[0]}. Lanjutkan perjalananmu di arsip.` : 'Daftar gratis. Pilih peran yang paling sesuai: apresiator, kreator, atau penyelenggara challenge.'}</p>
            <div className="btn-row">{cta}</div>
          </div>
          <div className="band-roles">
            <div><b>Public</b><span>Menyukai, berkomentar, dan menyimpan favorit.</span></div>
            <div><b>Member</b><span>Memamerkan karya dan mengikuti challenge.</span></div>
            <div><b>Curator</b><span>Membuka challenge dan memilih pemenang. Perlu persetujuan admin.</span></div>
          </div>
        </div>
      </section>
      <Foot>Galeri digital kreator · {stats.arts} karya · {stats.users} akun</Foot>
    </div>
  );
}
