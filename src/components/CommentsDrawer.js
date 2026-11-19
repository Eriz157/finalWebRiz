'use client';
import { useEffect, useRef, useState } from 'react';
import { useApp } from './context';
import { api } from '@/lib/client';
import { Avatar, Badge, Icon } from './ui';
import { relTime } from '@/lib/format';

export default function CommentsDrawer({ art, onCount, onClose }) {
  const { user, toast, confirm, router } = useApp();
  const [list, setList] = useState(null);
  const [text, setText] = useState('');
  const [err, setErr] = useState('');
  const [busy, setBusy] = useState(false);
  const [replyTo, setReplyTo] = useState(null);
  const body = useRef(null);

  const load = async () => {
    try { const d = await api(`/api/artworks/${art.id}/comments`); setList(d.comments); }
    catch (e) { setList([]); toast(e.message, 'err'); }
  };
  useEffect(() => { load(); }, [art.id]); // eslint-disable-line
  useEffect(() => { if (body.current) body.current.scrollTop = body.current.scrollHeight; }, [list && list.length]);

  const submit = async (e) => {
    e.preventDefault();
    const t = text.trim();
    if (!t) { setErr('Tulis komentar terlebih dahulu.'); return; }
    setBusy(true); setErr('');
    try {
      await api(`/api/artworks/${art.id}/comments`, { method: 'POST', json: { body: t, parentId: replyTo ? replyTo.id : undefined } });
      setText(''); setReplyTo(null); await load();
    } catch (e2) { setErr(e2.message); }
    setBusy(false);
  };
  useEffect(() => { if (list) onCount && onCount(list.length); }, [list]); // eslint-disable-line

  const del = async (c) => {
    const ok = await confirm({ title: 'Hapus komentar?', text: 'Komentar ini (beserta balasannya) akan dihapus permanen.', ok: 'Hapus', danger: true });
    if (!ok) return;
    try { await api(`/api/comments/${c.id}`, { method: 'DELETE' }); await load(); } catch (e) { toast(e.message, 'err'); }
  };
  const like = async (c) => {
    if (!user) { toast('Masuk untuk menyukai komentar.', 'err'); return; }
    try {
      const d = await api(`/api/comments/${c.id}/like`, { method: 'POST' });
      setList((l) => l.map((x) => (x.id === c.id ? { ...x, liked: d.liked, likes: d.likes } : x)));
    } catch (e) { toast(e.message, 'err'); }
  };
  const startReply = (c) => {
    if (!user) { toast('Masuk untuk membalas komentar.', 'err'); return; }
    setReplyTo(c); setErr('');
    setTimeout(() => { const el = document.getElementById('cmText'); if (el) el.focus(); }, 0);
  };
  const n = list ? list.length : 0;
  const tops = (list || []).filter((c) => !c.parentId);
  const repliesOf = (id) => (list || []).filter((c) => c.parentId === id);
  const Item = ({ c, top }) => {
    const mine = user && (user.id === c.userId || user.role === 'admin');
    return (
      <div className={'cm' + (top ? '' : ' cm-reply')}>
        <Avatar u={{ name: c.userName, avatar: c.avatar }} cls="md" />
        <div>
          <div className="hd"><b>{c.userName}</b>{c.userRole !== 'public' && <Badge r={c.userRole} />}<small suppressHydrationWarning>{relTime(c.createdAt)}</small></div>
          <p>{c.body}</p>
          <div className="cm-act">
            <button type="button" className={'cm-like' + (c.liked ? ' on' : '')} onClick={() => like(c)} aria-pressed={!!c.liked} aria-label={c.liked ? 'Batal sukai komentar' : 'Sukai komentar'}>
              <Icon n="heart" /> <span>{c.likes || 0}</span>
            </button>
            <button type="button" className="cm-rep" onClick={() => startReply(c)}>Balas</button>
            {mine && <button type="button" className="del" onClick={() => del(c)}>{user.id === c.userId ? 'Hapus' : 'Hapus (moderasi)'}</button>}
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="dr-head">
        <div><h3>Komentar</h3><p>{art.title} · {n} komentar</p></div>
        <button type="button" className="mdl-x" style={{ position: 'static' }} onClick={onClose} aria-label="Tutup komentar">×</button>
      </div>
      <div className="dr-body" ref={body}>
        {list && !list.length && (
          <div className="void" style={{ margin: '18px 0', borderStyle: 'solid' }}>
            <div className="h-sm">Belum ada komentar</div>
            <p style={{ margin: 0 }}>{user ? 'Jadilah yang pertama memberi tanggapan.' : 'Masuk untuk memberi tanggapan pertama.'}</p>
          </div>
        )}
        {tops.map((c) => (
          <div className="cm-thread" key={c.id}>
            <Item c={c} top />
            {repliesOf(c.id).map((r) => <Item c={r} key={r.id} />)}
          </div>
        ))}
      </div>
      <div className="dr-foot">
        {user ? (
          <form onSubmit={submit} noValidate>
            {replyTo && <div className="cm-replying">Membalas <b>{replyTo.userName}</b><button type="button" onClick={() => setReplyTo(null)} aria-label="Batal membalas">×</button></div>}
            <textarea className="in" id="cmText" maxLength={500} value={text} onChange={(e) => setText(e.target.value)} placeholder={replyTo ? `Balas ${replyTo.userName}…` : 'Tulis tanggapanmu tentang karya ini…'} aria-label="Komentar" />
            <p className="msg-err" role="alert" style={{ margin: '0 0 8px' }}>{err}</p>
            <div className="btn-row" style={{ justifyContent: 'space-between' }}>
              <span className="small mute">Maks. 500 karakter</span>
              <button type="submit" className="btn primary sm" disabled={busy}>{replyTo ? 'Kirim balasan' : 'Kirim komentar'}</button>
            </div>
          </form>
        ) : (
          <>
            <p style={{ margin: '0 0 12px', color: 'var(--ink2)', fontSize: 14.5 }}>Tamu hanya dapat membaca komentar. Masuk untuk ikut berkomentar.</p>
            <button type="button" className="btn primary sm" onClick={() => { onClose(); router.push('/login'); }}>Masuk / Gabung <Icon n="arrow" /></button>
          </>
        )}
      </div>
    </>
  );
}
