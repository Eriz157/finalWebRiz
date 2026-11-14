'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useApp } from './context';
import { api } from '@/lib/client';
import { Avatar, Badge, Icon, Void } from './ui';
import { fmtDate, ROLE_LABEL } from '@/lib/format';

function EditUser({ u }) {
  const { closeModal, toast, refresh } = useApp();
  const [f, setF] = useState({ name: u.name, email: u.email, password: '' });
  const [err, setErr] = useState('');
  const submit = async (e) => {
    e.preventDefault(); setErr('');
    if (f.name.trim().length < 2) return setErr('Nama minimal 2 karakter.');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) return setErr('Format email belum benar.');
    if (f.password && f.password.length < 6) return setErr('Kata sandi baru minimal 6 karakter.');
    try { await api(`/api/users/${u.id}`, { method: 'PATCH', json: { name: f.name, email: f.email, ...(f.password ? { password: f.password } : {}) } }); closeModal(); toast('Akun diperbarui.', 'ok'); refresh(); }
    catch (x) { setErr(x.message); }
  };
  return (
    <>
      <h2>Edit akun</h2><p className="lead2">Ubah informasi dasar atau atur ulang kata sandi.</p>
      <form onSubmit={submit} noValidate>
        <div className="fld"><label htmlFor="ueN">Nama</label><input className="in" id="ueN" maxLength={60} autoFocus value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} /></div>
        <div className="fld"><label htmlFor="ueE">Email</label><input className="in" id="ueE" type="email" value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} /></div>
        <div className="fld"><label htmlFor="ueP">Atur ulang kata sandi (opsional)</label><input className="in" id="ueP" type="text" autoComplete="off" placeholder="Kosongkan bila tidak diganti" value={f.password} onChange={(e) => setF({ ...f, password: e.target.value })} /></div>
        <p className="msg-err" role="alert">{err}</p>
        <div className="mdl-actions"><button type="button" className="btn line" onClick={() => closeModal()}>Batal</button><button type="submit" className="btn primary">Simpan</button></div>
      </form>
    </>
  );
}

const status = (u) => u.curatorStatus === 'pending' ? <span className="badge pending">Pending curator</span>
  : u.curatorStatus === 'rejected' ? <span className="badge rejected">Ditolak</span> : <span className="badge active"><i className="dotc" />Aktif</span>;

export default function UsersView({ users, artTotal }) {
  const { user: me, openModal, confirm, toast, refresh } = useApp();
  const [filter, setFilter] = useState('all'), [q, setQ] = useState('');
  const cnt = { public: 0, member: 0, curator: 0, admin: 0 }; users.forEach((u) => cnt[u.role]++);
  const pend = users.filter((u) => u.curatorStatus === 'pending');
  const ql = q.trim().toLowerCase();
  const list = users.filter((u) => (filter === 'all' || u.role === filter) && (!ql || u.name.toLowerCase().includes(ql) || u.email.toLowerCase().includes(ql)));
  const run = async (fn, okMsg) => { try { await fn(); if (okMsg) toast(okMsg, 'ok'); refresh(); } catch (x) { toast(x.message, 'err'); } };
  const setRole = (u, role) => run(() => api(`/api/users/${u.id}`, { method: 'PATCH', json: { role } }), `${u.name} sekarang berperan sebagai ${ROLE_LABEL[role]}.`);
  const approve = (u) => run(() => api(`/api/users/${u.id}/curator`, { method: 'POST', json: { action: 'approve' } }), `${u.name} disetujui sebagai Curator.`);
  const reject = async (u) => {
    if (!(await confirm({ title: 'Tolak pengajuan?', text: `${u.name} akan melihat bahwa pengajuannya ditolak dan hanya dapat memakai akun sebagai Public atau menghapus akunnya.`, ok: 'Tolak pengajuan', danger: true }))) return;
    run(() => api(`/api/users/${u.id}/curator`, { method: 'POST', json: { action: 'reject' } }), 'Pengajuan ditolak.');
  };
  const del = async (u) => {
    if (!(await confirm({ title: `Hapus akun ${u.name}?`, text: `Ikut terhapus: ${u.artCount} karya, challenge, komentar, dan submisi milik akun ini. Tindakan ini tidak dapat dibatalkan.`, ok: 'Hapus akun', danger: true }))) return;
    run(() => api(`/api/users/${u.id}`, { method: 'DELETE' }), 'Akun dihapus.');
  };
  return (
    <div className="page" id="p-users"><div className="wrap">
      <div className="p-head"><div><span className="eyebrow">Registry — Admin</span><h1 className="h-xl">User <em>management.</em></h1></div></div>
      <div className="tiles">
        <div className="tile"><b>{users.length}</b><span>Total akun</span></div><div className="tile"><b>{cnt.public}</b><span>Public</span></div>
        <div className="tile"><b>{cnt.member}</b><span>Member</span></div><div className="tile"><b>{cnt.curator}</b><span>Curator</span></div><div className="tile"><b>{artTotal}</b><span>Karya</span></div>
      </div>
      {pend.length > 0 && (
        <>
          <h3 className="h-md" style={{ marginBottom: 14 }}>Pengajuan curator <span className="mute">({pend.length})</span></h3>
          <div className="pend">{pend.map((u) => (
            <div className="pend-row" key={u.id}>
              <div className="who" style={{ display: 'flex', gap: 12, alignItems: 'center' }}><Avatar u={u} cls="md" />
                <div><b>{u.name}</b><div className="small mute">{u.email} · mendaftar {fmtDate(u.createdAt)}</div>{u.bio && <div className="small" style={{ maxWidth: '56ch' }}>{u.bio}</div>}</div></div>
              <div className="btn-row">
                <button type="button" className="btn primary sm" onClick={() => approve(u)}><Icon n="check" /> Setujui</button>
                <button type="button" className="btn danger sm" onClick={() => reject(u)}><Icon n="x" /> Tolak</button></div>
            </div>))}</div>
        </>
      )}
      <h3 className="h-md" style={{ marginBottom: 16 }}>Semua akun</h3>
      <div className="filters">
        {[['all', 'Semua'], ['public', 'Public'], ['member', 'Member'], ['curator', 'Curator'], ['admin', 'Admin']].map(([k, t]) => <button key={k} type="button" className={'btn sm ' + (filter === k ? 'on' : 'line')} onClick={() => setFilter(k)}>{t}</button>)}
        <input className="in" type="search" id="uSearch" placeholder="Cari nama atau email…" aria-label="Cari akun" value={q} onChange={(e) => setQ(e.target.value)} />
      </div>
      {!list.length ? <Void title="Tidak ada akun" style={{ marginTop: 20 }}><p style={{ margin: 0 }}>Tidak ada akun yang cocok dengan filter.</p></Void> : (
        <div className="utable">
          <div className="urow h"><span>Akun</span><span>Peran</span><span>Status</span><span>Karya</span><span>Bergabung</span><span style={{ textAlign: 'right' }}>Aksi</span></div>
          {list.map((u) => {
            const self = u.id === me.id, adm = u.role === 'admin';
            return (
              <div className="urow" key={u.id}>
                <div className="who"><Avatar u={u} cls="md" /><div><b>{u.name}{self && <span className="mute" style={{ fontWeight: 400 }}> (kamu)</span>}</b><small>{u.email}</small></div></div>
                <span><Badge r={u.role} /></span><span>{status(u)}</span><span>{u.artCount}</span><span className="small">{fmtDate(u.createdAt)}</span>
                <div className="acts">
                  <Link className="btn soft xs" href={`/profile/${u.id}`}>Profil</Link>
                  {!adm && <>
                    <select className="in" style={{ width: 'auto', padding: '7px 28px 7px 10px', fontSize: 12.5 }} aria-label={`Ubah peran ${u.name}`} value={u.role} onChange={(e) => setRole(u, e.target.value)}>
                      <option value="public">Public</option><option value="member">Member</option><option value="curator">Curator</option></select>
                    <button type="button" className="btn line xs" onClick={() => openModal(<EditUser u={u} />)}><Icon n="edit" /> Edit</button>
                    <button type="button" className="btn danger xs" aria-label={`Hapus ${u.name}`} onClick={() => del(u)}><Icon n="trash" /></button></>}
                  {adm && self && <button type="button" className="btn line xs" onClick={() => openModal(<EditUser u={u} />)}><Icon n="edit" /> Edit</button>}
                </div>
              </div>);
          })}
        </div>
      )}
    </div></div>
  );
}
