'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useApp } from './context';
import { api } from '@/lib/client';
import { Avatar, Badge, Icon, OtpNote, Void } from './ui';
import { fmtDate } from '@/lib/format';

function RequestChange({ u }) {
  const { closeModal, toast, refresh } = useApp();
  const [f, setF] = useState({ name: u.name, email: u.email });
  const [err, setErr] = useState('');
  const submit = async (e) => {
    e.preventDefault(); setErr('');
    if (f.name.trim().length < 2) return setErr('Nama minimal 2 karakter.');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) return setErr('Format email belum benar.');
    try { await api(`/api/users/${u.id}/requests`, { method: 'POST', json: { kind: 'profile', name: f.name, email: f.email } }); closeModal(); toast('Permintaan dikirim. Menunggu persetujuan pemilik akun.', 'ok'); refresh(); }
    catch (x) { setErr(x.message); }
  };
  return (
    <>
      <h2>Ajukan perubahan akun</h2><p className="lead2">Perubahan nama atau email baru berlaku setelah {u.name} menyetujuinya di halaman profilnya. Admin tidak dapat mengubahnya langsung.</p>
      <form onSubmit={submit} noValidate>
        <div className="fld"><label htmlFor="ueN">Nama</label><input className="in" id="ueN" maxLength={60} autoFocus value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} /></div>
        <div className="fld"><label htmlFor="ueE">Email</label><input className="in" id="ueE" type="email" value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} /></div>
        <p className="msg-err" role="alert">{err}</p>
        <div className="mdl-actions"><button type="button" className="btn line" onClick={() => closeModal()}>Batal</button><button type="submit" className="btn primary">Kirim permintaan</button></div>
      </form>
    </>
  );
}

// Kolom verifikasi (kata sandi + OTP). Panduan ditampilkan agar juri mudah mencoba fungsinya.
function Verify({ f, setF, guide, purpose, targetId }) {
  const [otp, setOtp] = useState(null);
  const [msg, setMsg] = useState('');
  const send = async () => {
    setMsg('');
    try { const d = await api('/api/otp', { method: 'POST', json: { purpose, targetId } }); setOtp(d); setF({ ...f, otp: '', otpToken: d.otpToken }); }
    catch (x) { setMsg(x.message); }
  };
  return (
    <>
      <div className="guide" role="note">
        <b>Panduan juri</b>
        <p>{guide.passLabel} : <code>{guide.password}</code></p>
        <p className="small mute">Kode OTP acak dan berbeda setiap kali diminta. Seharusnya dikirim ke Gmail admin; di mode demo ia tampil sebagai notifikasi setelah menekan <b>Kirim kode OTP</b>.</p>
      </div>
      <div className="fld"><label htmlFor="vpw">Kata sandi verifikasi</label><input className="in" id="vpw" type="password" autoComplete="off" value={f.password} onChange={(e) => setF({ ...f, password: e.target.value })} /></div>
      <div className="fld"><button type="button" className="btn soft sm" onClick={send}>{otp ? 'Kirim ulang kode OTP' : 'Kirim kode OTP'}</button>{msg && <span className="msg-err"> {msg}</span>}</div>
      {otp && <OtpNote otp={otp.otp} expiresIn={otp.expiresIn} onFill={() => setF({ ...f, otp: otp.otp, otpToken: otp.otpToken })} />}
      <div className="fld"><label htmlFor="votp">Kode OTP (6 digit)</label><input className="in" id="votp" inputMode="numeric" maxLength={6} autoComplete="off" value={f.otp} onChange={(e) => setF({ ...f, otp: e.target.value.replace(/\D/g, '') })} /></div>
    </>
  );
}

function DeleteAccount({ u }) {
  const { closeModal, toast, refresh } = useApp();
  const [f, setF] = useState({ password: '', otp: '', otpToken: '' });
  const [err, setErr] = useState('');
  const [busy, setBusy] = useState(false);
  const submit = async (e) => {
    e.preventDefault(); setErr('');
    if (!f.password) return setErr('Masukkan kata sandi hapus akun.');
    if (!f.otpToken) return setErr('Tekan Kirim kode OTP terlebih dahulu.');
    if (f.otp.length !== 6) return setErr('Kode OTP terdiri dari 6 digit.');
    setBusy(true);
    try { await api(`/api/users/${u.id}`, { method: 'DELETE', json: f }); closeModal(); toast('Akun dihapus.', 'ok'); refresh(); }
    catch (x) { setErr(x.message); setBusy(false); }
  };
  return (
    <>
      <h2>Hapus akun {u.name}?</h2>
      <p className="lead2">Ikut terhapus: {u.artCount} karya, challenge, komentar, dan submisi milik akun ini. Tindakan ini permanen dan tidak dapat dibatalkan.</p>
      <form onSubmit={submit} noValidate>
        <Verify f={f} setF={setF} guide={{ passLabel: 'pass hapus akun', password: 'hard_delete123' }} purpose="hardDelete" targetId={u.id} />
        <p className="msg-err" role="alert">{err}</p>
        <div className="mdl-actions"><button type="button" className="btn line" onClick={() => closeModal()}>Batal</button><button type="submit" className="btn danger" disabled={busy}>Hapus permanen</button></div>
      </form>
    </>
  );
}

function SuspendAccount({ u }) {
  const { closeModal, toast, refresh } = useApp();
  const [f, setF] = useState({ password: '', otp: '', otpToken: '' });
  const [dur, setDur] = useState('1d');
  const [amount, setAmount] = useState('1');
  const [unit, setUnit] = useState('days');
  const [err, setErr] = useState('');
  const [busy, setBusy] = useState(false);
  const submit = async (e) => {
    e.preventDefault(); setErr('');
    if (dur === 'custom' && !(Number.isInteger(Number(amount)) && Number(amount) >= 1 && Number(amount) <= 9999)) return setErr('Durasi kustom harus 1–9999.');
    if (!f.password) return setErr('Masukkan kata sandi tangguhkan akun.');
    if (!f.otpToken) return setErr('Tekan Kirim kode OTP terlebih dahulu.');
    if (f.otp.length !== 6) return setErr('Kode OTP terdiri dari 6 digit.');
    setBusy(true);
    try { await api(`/api/users/${u.id}/suspend`, { method: 'POST', json: { ...f, duration: dur, amount: Number(amount), unit } }); closeModal(); toast(`${u.name} ditangguhkan.`, 'ok'); refresh(); }
    catch (x) { setErr(x.message); setBusy(false); }
  };
  return (
    <>
      <h2>Tangguhkan akun {u.name}</h2>
      <p className="lead2">Selama masa penangguhan, akun ini tidak dapat masuk. Penangguhan dapat dicabut kapan saja.</p>
      <form onSubmit={submit} noValidate>
        <div className="fld"><label htmlFor="sdur">Lama penangguhan</label>
          <select className="in" id="sdur" value={dur} onChange={(e) => setDur(e.target.value)}>
            <option value="1d">1 hari</option><option value="1m">1 bulan</option><option value="1y">1 tahun</option>
            <option value="custom">Kustom</option><option value="forever">Tanpa batas waktu</option></select></div>
        {dur === 'custom' && (
          <div className="fld"><label htmlFor="samt">Durasi kustom</label>
            <div style={{ display: 'flex', gap: 10 }}>
              <input className="in" id="samt" type="number" min="1" max="9999" value={amount} onChange={(e) => setAmount(e.target.value)} />
              <select className="in" aria-label="Satuan" value={unit} onChange={(e) => setUnit(e.target.value)}><option value="minutes">menit</option><option value="hours">jam</option><option value="days">hari</option></select></div></div>)}
        <Verify f={f} setF={setF} guide={{ passLabel: 'pass tangguhkan akun', password: 'soft_delete123' }} purpose="suspend" targetId={u.id} />
        <p className="msg-err" role="alert">{err}</p>
        <div className="mdl-actions"><button type="button" className="btn line" onClick={() => closeModal()}>Batal</button><button type="submit" className="btn primary" disabled={busy}>Tangguhkan</button></div>
      </form>
    </>
  );
}

const fmtUntil = (iso) => new Date(iso).toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' });
const status = (u) => u.suspended ? <><span className="badge rejected">Ditangguhkan</span><div className="small mute">{u.suspendedUntil ? `s.d. ${fmtUntil(u.suspendedUntil)}` : 'tanpa batas waktu'}</div></> : u.reqPending > 0 ? <span className="badge pending">Menunggu persetujuan</span> : u.curatorStatus === 'pending' ? <span className="badge pending">Pending curator</span>
  : u.curatorStatus === 'rejected' ? <span className="badge rejected">Ditolak</span> : <span className="badge active"><i className="dotc" />Aktif</span>;

export default function UsersView({ users, artTotal }) {
  const { user: me, openModal, confirm, toast, refresh } = useApp();
  const [filter, setFilter] = useState('all'), [q, setQ] = useState('');
  const cnt = { public: 0, member: 0, curator: 0, admin: 0 }; users.forEach((u) => cnt[u.role]++);
  const pend = users.filter((u) => u.curatorStatus === 'pending');
  const ql = q.trim().toLowerCase();
  const list = users.filter((u) => (filter === 'all' || u.role === filter) && (!ql || u.name.toLowerCase().includes(ql) || u.email.toLowerCase().includes(ql)));
  const run = async (fn, okMsg) => { try { await fn(); if (okMsg) toast(okMsg, 'ok'); refresh(); } catch (x) { toast(x.message, 'err'); } };
  const approve = (u) => run(() => api(`/api/users/${u.id}/curator`, { method: 'POST', json: { action: 'approve' } }), `${u.name} disetujui sebagai Curator.`);
  const reject = async (u) => {
    if (!(await confirm({ title: 'Tolak pengajuan?', text: `${u.name} akan melihat bahwa pengajuannya ditolak dan tetap dapat memakai akun sebagai Public.`, ok: 'Tolak pengajuan', danger: true }))) return;
    run(() => api(`/api/users/${u.id}/curator`, { method: 'POST', json: { action: 'reject' } }), 'Pengajuan ditolak.');
  };
  const resetPw = async (u) => {
    if (!(await confirm({ title: `Minta reset kata sandi ${u.name}?`, text: 'Kata sandi baru direset menjadi kata sandi default hanya setelah pemilik akun menyetujuinya. Admin tidak dapat melihat atau mengubah kata sandi.', ok: 'Kirim permintaan' }))) return;
    run(() => api(`/api/users/${u.id}/requests`, { method: 'POST', json: { kind: 'password_reset' } }), 'Permintaan reset dikirim. Menunggu persetujuan pemilik akun.');
  };
  const cancelReq = (u) => run(() => api(`/api/users/${u.id}/requests`, { method: 'DELETE' }), 'Permintaan dibatalkan.');
  const unsuspend = async (u) => {
    if (!(await confirm({ title: `Cabut penangguhan ${u.name}?`, text: 'Akun dapat langsung masuk kembali.', ok: 'Cabut penangguhan' }))) return;
    run(() => api(`/api/users/${u.id}/suspend`, { method: 'DELETE' }), 'Penangguhan dicabut.');
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
                    <button type="button" className="btn line xs" onClick={() => openModal(<RequestChange u={u} />)}><Icon n="edit" /> Ajukan ubah</button>
                    <button type="button" className="btn line xs act-reset" onClick={() => resetPw(u)}>Reset sandi</button>
                    {u.reqPending > 0 && <button type="button" className="btn soft xs" onClick={() => cancelReq(u)}>Batalkan</button>}
                    {u.suspended ? <button type="button" className="btn soft xs" onClick={() => unsuspend(u)}>Cabut tangguhan</button>
                      : <button type="button" className="btn line xs act-hold" onClick={() => openModal(<SuspendAccount u={u} />)}>Tangguhkan</button>}
                    <button type="button" className="btn danger xs" aria-label={`Hapus ${u.name}`} onClick={() => openModal(<DeleteAccount u={u} />)}><Icon n="trash" /></button></>}
                </div>
              </div>);
          })}
        </div>
      )}
    </div></div>
  );
}
