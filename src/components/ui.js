'use client';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { useApp } from './context';
import { ROLE_LABEL, initials, bannerStyle, patCircles, chWhen, fmtDate, CH_LABEL, pad2 } from '@/lib/format';

const IC = {
  heart: <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.4A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" />,
  chat: <path d="M5 5h14v10H10l-4 3.5V15H5V5Z" />,
  edit: <path d="M4 20h4L19 9l-4-4L4 16v4ZM13.5 6.5l4 4" />,
  trash: <path d="M5 7h14M10 7V4h4v3M7 7l1 13h8l1-13" />,
  plus: <path d="M12 5v14M5 12h14" />,
  arrow: <path d="M4 12h15M13 6l6 6-6 6" />,
  back: <path d="M20 12H5M11 6l-6 6 6 6" />,
  eye: <><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z" /><circle cx="12" cy="12" r="3" /></>,
  check: <path d="m5 12 5 5 9-10" />,
  x: <path d="M6 6l12 12M18 6 6 18" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
};
export function Icon({ n, style }) { return <svg viewBox="0 0 24 24" aria-hidden="true" style={style}>{IC[n]}</svg>; }

export function Avatar({ u, cls = '' }) {
  if (!u) return <span className={'avatar ' + cls}>?</span>;
  if (u.avatar) return <span className={'avatar ' + cls} style={{ backgroundImage: `url('${u.avatar}')` }} role="img" aria-label={u.name} />;
  return <span className={'avatar ' + cls} aria-hidden="true">{initials(u.name)}</span>;
}
export const Badge = ({ r, children }) => <span className={'badge ' + r}>{children || ROLE_LABEL[r] || r}</span>;
export const Void = ({ title, children, style }) => (
  <div className="void" style={style}>{title && <div className="h-sm">{title}</div>}{children}</div>
);

// Gambar bingkai: rasio asli diterapkan setelah dimuat.
export function FrameImg({ a }) {
  const ref = useRef(null);
  useEffect(() => {
    const img = ref.current; if (!img) return;
    const f = () => { if (img.naturalWidth) { img.style.aspectRatio = img.naturalWidth + '/' + img.naturalHeight; img.style.objectFit = 'cover'; } };
    if (img.complete) f(); else img.addEventListener('load', f, { once: true });
  }, [a]);
  if (!a) return <div className="ph" role="img" aria-label="Bingkai kosong" />;
  // eslint-disable-next-line @next/next/no-img-element
  return <img ref={ref} src={a.image} alt={`${a.title}, karya ${a.painter}`} />;
}

export function ArtCard({ a, footer }) {
  const { cats } = useApp();
  const c = cats[a.category] || { label: a.category, color: '#7a6648' };
  return (
    <article className="art-card">
      <div className="im">
        {a.example && <span className="badge">Contoh</span>}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={a.image} alt={`${a.title}, karya ${a.painter}`} loading="lazy" />
        <Link className="lnk" href={`/gallery/${a.id}`} aria-label={`Lihat ${a.title} di galeri`} />
      </div>
      <div className="tx"><h4>{a.title}</h4><p>{a.painter}</p></div>
      <div className="st">
        <span className="tagchip" style={{ '--c': c.color }}><i />{c.label}</span>
        {a.studioUrl && <span className="tagchip" style={{ '--c': 'var(--ok)' }}><i />Studio View</span>}
        <span title="Suka"><Icon n="heart" />{a.likes}</span>
        <span title="Komentar"><Icon n="chat" />{a.comments}</span>
      </div>
      <div className="ft" style={footer ? undefined : { paddingBottom: 8 }}>{footer}</div>
    </article>
  );
}

export function ChCard({ c, idx = 1, plain, joined, onJoin, onEdit, onDelete }) {
  const { user } = useApp();
  const manage = user && (user.role === 'admin' || (user.role === 'curator' && c.ownerId === user.id));
  return (
    <article className="ch-card">
      <div className="ch-ban" style={bannerStyle(c)}>
        {!c.banner && (
          <svg className="pat" viewBox="0 0 400 170" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <g fill="none" stroke="rgba(255,255,255,.34)">{patCircles(c.id).map((p, i) => <circle key={i} cx={p.cx} cy={p.cy} r={p.r} />)}</g>
          </svg>
        )}
        <span className={'badge ' + c.status}><i className="dotc" />{CH_LABEL[c.status]}</span><span className="no">{pad2(idx)}</span>
      </div>
      <div className="ch-body">
        <h3>{c.title}</h3><p>{c.description}</p>
        <div className="ch-meta"><span><b suppressHydrationWarning>{chWhen(c)}</b></span><span>{fmtDate(c.start)} – {fmtDate(c.end)}</span><span>{c.participants} peserta</span></div>
        <div className="ch-meta"><span>Curator: <b>{c.ownerName || '—'}</b></span>{c.prize && <span>Hadiah: <b>{c.prize}</b></span>}</div>
        <div className="ch-foot">
          <Link className="btn primary sm" href={`/challenges/${c.id}`}>Lihat detail <Icon n="arrow" /></Link>
          {!plain && user?.role === 'member' && (joined ? <span className="badge member">Sudah ikut</span> : c.status === 'active' && <button type="button" className="btn line sm" onClick={() => onJoin(c)}>Ikuti</button>)}
          {!plain && manage && <>
            <span className="grow" />
            <button type="button" className="btn soft xs" onClick={() => onEdit(c)}><Icon n="edit" /> Edit</button>
            <button type="button" className="btn danger xs" onClick={() => onDelete(c)}><Icon n="trash" /> Hapus</button>
          </>}
        </div>
      </div>
    </article>
  );
}

export function Foot({ children }) {
  return <footer className="foot"><Link className="brand" href="/">The <em>Art</em> Archive</Link><span>{children}</span></footer>;
}
