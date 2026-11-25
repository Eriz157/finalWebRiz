'use client';
import { useEffect, useState } from 'react';
import { useApp } from './context';
import { api } from '@/lib/client';
import { Icon, OtpNote } from './ui';

const DEMO = [['admin@archive.id', 'admin123', 'Admin'], ['kurator@archive.id', 'kurator123', 'Curator'], ['member@archive.id', 'member123', 'Member'], ['publik@archive.id', 'publik123', 'Public']];

// Hitung mundur (ms tersisa) menuju endAt; null bila tanpa batas.
function useRemaining(endAt) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    if (!endAt) return undefined;
    setNow(Date.now());
    const t = setInterval(() => setNow(Date.now()), 200);
    return () => clearInterval(t);
  }, [endAt]);
  return endAt ? Math.max(0, endAt - now) : null;
}
const hms = (ms) => { const t = Math.ceil(ms / 1000), p = (n) => String(n).padStart(2, '0'); return `${p(Math.floor(t / 3600))}:${p(Math.floor((t % 3600) / 60))}:${p(t % 60)}`; };

// Pemberitahuan blokir (60 detik) atau penangguhan akun, dengan hitung mundur langsung.
function Notice({ notice, onOver }) {
  const ms = useRemaining(notice.endAt);
  const over = notice.endAt != null && ms <= 0;
  useEffect(() => { if (over) onOver(notice.kind); }, [over, notice.kind, onOver]);
  if (notice.kind === 'lock') {
    const sec = Math.ceil(ms / 1000);
    return (
      <div className="notice lock" role="alert" aria-live="off">
        <div className="cd" aria-hidden="true">{sec}</div>
        <div className="nt"><b>Akun diblokir sementara</b>
          <p>Salah kata sandi 5 kali. Coba lagi dalam <b>{sec}</b> detik.</p>
          <div className="bar"><i style={{ transform: `scaleX(${Math.min(1, ms / 60000)})` }} /></div></div>
      </div>);
  }
  return (
    <div className="notice susp" role="alert" aria-live="off">
      <div className="nt"><b>Akun ditangguhkan</b>
        {notice.endAt == null
          ? <p>Akun anda ditangguhkan selama batas waktu yang tidak ditentukan, mohon maaf atas ketidaknyamanannya.</p>
          : <><p>Akun anda ditangguhkan selama <b className="clock">{hms(ms)}</b>, mohon maaf atas ketidaknyamanannya.</p><small className="mute">Hitungan mundur jam:menit:detik</small></>}</div>
    </div>);
}

function Recover({ onBack, onDone }) {
  const { toast } = useApp();
  const [step, setStep] = useState(1);
  const [id, setId] = useState('');
  const [acc, setAcc] = useState(null);
  const [f, setF] = useState({ otp: '', newEmail: '', newPassword: '' });
  const [err, setErr] = useState('');
  const [busy, setBusy] = useState(false);
  const call = (json) => api('/api/auth/recover', { method: 'POST', json });
  const request = async (e) => {
    e.preventDefault(); setErr('');
    if (!id.trim()) return setErr('Isi nama akun (atau email) kamu.');
    setBusy(true);
    try { const d = await call({ action: 'request', identifier: id }); setAcc(d); setStep(2); toast('Kode OTP dikirim. Lihat notifikasi demo di bawah.', 'ok'); }
    catch (x) { setErr(x.message); }
    setBusy(false);
  };
  const reset = async (e) => {
    e.preventDefault(); setErr('');
    if (f.otp.length !== 6) return setErr('Kode OTP terdiri dari 6 digit.');
    if (!f.newEmail.trim() && !f.newPassword) return setErr('Isi email baru, kata sandi baru, atau keduanya.');
    if (f.newPassword && f.newPassword.length < 6) return setErr('Kata sandi minimal 6 karakter.');
    setBusy(true);
    try { const d = await call({ action: 'reset', identifier: id, otpToken: acc.otpToken, ...f }); toast('Data akun berhasil diubah. Silakan masuk.', 'ok'); onDone(d.email); }
    catch (x) { setErr(x.message); setBusy(false); }
  };
  return (
    <div id="fRecover">
      <h2 className="h-sm" style={{ margin: '0 0 6px' }}>Lupa email atau kata sandi?</h2>
      <p className="small mute" style={{ margin: '0 0 18px' }}>Masukkan nama akunmu, lalu ubah email dan/atau kata sandi dengan kode OTP.</p>
      {step === 1 ? (
        <form onSubmit={request} noValidate>
          <div className="fld"><label htmlFor="cId">Nama akun (atau email)</label><input className="in" id="cId" autoFocus autoComplete="username" placeholder="Nama yang tampil di profilmu" value={id} onChange={(e) => setId(e.target.value)} /></div>
          <p className="msg-err" role="alert">{err}</p>
          <button className="btn primary" style={{ width: '100%' }} type="submit" disabled={busy}>Kirim kode OTP <Icon n="arrow" /></button>
        </form>
      ) : (
        <form onSubmit={reset} noValidate>
          <p className="small" style={{ margin: '0 0 12px' }}>Akun ditemukan: <b>{acc.name}</b> <span className="mute">({acc.email})</span></p>
          <OtpNote otp={acc.otp} expiresIn={acc.expiresIn} onFill={() => setF({ ...f, otp: acc.otp })} />
          <div className="fld"><label htmlFor="cOtp">Kode OTP (6 digit)</label><input className="in" id="cOtp" inputMode="numeric" maxLength={6} autoComplete="one-time-code" value={f.otp} onChange={(e) => setF({ ...f, otp: e.target.value.replace(/\D/g, '') })} /></div>
          <div className="fld"><label htmlFor="cEmail">Email baru <span className="mute">(opsional)</span></label><input className="in" id="cEmail" type="email" autoComplete="email" placeholder="nama@email.com" value={f.newEmail} onChange={(e) => setF({ ...f, newEmail: e.target.value })} /></div>
          <div className="fld"><label htmlFor="cPass">Kata sandi baru <span className="mute">(opsional)</span></label><input className="in" id="cPass" type="password" autoComplete="new-password" placeholder="Min. 6 karakter" value={f.newPassword} onChange={(e) => setF({ ...f, newPassword: e.target.value })} /></div>
          <p className="msg-err" role="alert">{err}</p>
          <button className="btn primary" style={{ width: '100%' }} type="submit" disabled={busy}>Simpan perubahan <Icon n="arrow" /></button>
        </form>
      )}
      <button type="button" className="btn line sm" style={{ marginTop: 14 }} onClick={onBack}>← Kembali ke masuk</button>
    </div>
  );
}

export default function LoginView({ showDemo }) {
  const { toast } = useApp();
  const [tab, setTab] = useState('in');
  const [li, setLi] = useState({ email: '', password: '' });
  const [rg, setRg] = useState({ name: '', email: '', password: '', role: 'public' });
  const [err, setErr] = useState('');
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState(null);   // { kind: 'lock' | 'suspend', endAt }
  const [info, setInfo] = useState('');
  const locked = notice?.kind === 'lock';
  const noticeOver = (kind) => { setNotice(null); setInfo(kind === 'lock' ? 'Blokir selesai. Silakan coba masuk lagi.' : 'Masa penangguhan berakhir. Silakan masuk kembali.'); };

  const done = (user, msg) => {
    try { sessionStorage.setItem('aa_flash', msg || `Selamat datang, ${user.name.split(' ')[0]}.`); } catch {}
    window.location.assign(user.curatorStatus ? '/profile?tab=akun' : '/');   // muat ulang penuh: sesi & menu navbar pasti sesuai peran
  };
  const login = async (e, creds) => {
    e && e.preventDefault(); setErr(''); setInfo('');
    const c = creds || li;
    if (!c.email.trim() || !c.password) return setErr('Isi email dan kata sandi.');
    setBusy(true);
    try { const d = await api('/api/auth/login', { method: 'POST', json: c }); done(d.user); }
    catch (x) {
      const d = x.data || {};
      if (d.lockMs) { setNotice({ kind: 'lock', endAt: Date.now() + d.lockMs }); setErr(''); }
      else if (d.suspended) { setNotice({ kind: 'suspend', endAt: d.suspendedMs == null ? null : Date.now() + d.suspendedMs }); setErr(''); }
      else { setNotice(null); setErr(x.message); }
      setBusy(false);
    }
  };
  const register = async (e) => {
    e.preventDefault(); setErr('');
    if (rg.name.trim().length < 2) return setErr('Isi nama lengkap (minimal 2 karakter).');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(rg.email.trim())) return setErr('Format email belum benar.');
    if (rg.password.length < 6) return setErr('Kata sandi minimal 6 karakter.');
    setBusy(true);
    try {
      const d = await api('/api/auth/register', { method: 'POST', json: rg });
      done(d.user, rg.role === 'curator' ? 'Akun dibuat. Pengajuan Curator menunggu persetujuan admin.' : `Akun dibuat. Selamat bergabung, ${rg.name.trim().split(' ')[0]}.`);
    } catch (x) { setErr(x.message); setBusy(false); }
  };
  const ROLES = [['public', 'Public', 'Menyukai, berkomentar, dan menyimpan favorit.'], ['member', 'Member', 'Memamerkan karya dan mengikuti challenge.'], ['curator', 'Curator', 'Perlu persetujuan admin. Selama menunggu, akunmu berstatus Public.']];
  return (
    <div className="page" id="p-login"><div className="wrap"><div className="auth">
      <div className="auth-l">
        <span className="eyebrow">Entrance — Pintu masuk</span>
        <h1 className="h-xl">Masuk ke<br /><em>arsip.</em></h1>
        <p className="lead">Satu akun untuk menyukai, menyimpan, dan berkomentar. Ingin memamerkan karya atau membuka challenge? Pilih peranmu saat bergabung.</p>
        {showDemo && (
          <div className="demo"><span className="upper">Coba cepat dengan akun demo</span>
            <div className="demo-list">{DEMO.map(([email, password, t]) => <button key={t} type="button" className="btn soft sm" disabled={busy} onClick={() => { setBusy(true); login(null, { email, password }); }}>{t}</button>)}</div>
            <p className="small mute" style={{ margin: '12px 0 0' }}>Akun demo berasal dari data contoh di database.</p></div>
        )}
      </div>
      <div className="panel">
        {tab !== 'rec' && <div className="tabs" role="tablist" style={{ marginBottom: 24 }}>
          <button type="button" className="tab" role="tab" aria-selected={tab === 'in'} onClick={() => { setTab('in'); setErr(''); }}>Masuk</button>
          <button type="button" className="tab" role="tab" aria-selected={tab === 'join'} onClick={() => { setTab('join'); setErr(''); }}>Gabung</button>
        </div>}
        {tab === 'rec' ? <Recover onBack={() => { setTab('in'); setErr(''); }} onDone={(email) => { setNotice(null); setLi({ email, password: '' }); setTab('in'); setInfo('Data akun sudah diperbarui. Silakan masuk.'); }} />
        : tab === 'in' ? (
          <form onSubmit={login} noValidate id="fLogin">
            <div className="fld"><label htmlFor="lEmail">Email</label><input className="in" id="lEmail" type="email" autoComplete="email" placeholder="nama@email.com" value={li.email} onChange={(e) => setLi({ ...li, email: e.target.value })} /></div>
            <div className="fld"><label htmlFor="lPass">Kata sandi</label><input className="in" id="lPass" type="password" autoComplete="current-password" placeholder="••••••••" value={li.password} onChange={(e) => setLi({ ...li, password: e.target.value })} /></div>
            {notice && <Notice notice={notice} onOver={noticeOver} />}
            {info && !notice && <p className="msg-ok" role="status">{info}</p>}
            <p className="msg-err" id="lErr" role="alert">{err}</p>
            <button className="btn primary" style={{ width: '100%' }} type="submit" disabled={busy || locked}>Masuk <Icon n="arrow" /></button>
            <p className="small" style={{ margin: '14px 0 0', textAlign: 'center' }}><button type="button" className="linkbtn" onClick={() => { setTab('rec'); setErr(''); setInfo(''); }}>Lupa email atau kata sandi?</button></p>
          </form>
        ) : (
          <form onSubmit={register} noValidate id="fReg">
            <div className="fld"><label htmlFor="rName">Nama lengkap</label><input className="in" id="rName" maxLength={60} autoComplete="name" placeholder="Nama yang akan tampil" value={rg.name} onChange={(e) => setRg({ ...rg, name: e.target.value })} /></div>
            <div className="cols2">
              <div className="fld"><label htmlFor="rEmail">Email</label><input className="in" id="rEmail" type="email" autoComplete="email" placeholder="nama@email.com" value={rg.email} onChange={(e) => setRg({ ...rg, email: e.target.value })} /></div>
              <div className="fld"><label htmlFor="rPass">Kata sandi</label><input className="in" id="rPass" type="password" autoComplete="new-password" placeholder="Min. 6 karakter" value={rg.password} onChange={(e) => setRg({ ...rg, password: e.target.value })} /></div>
            </div>
            <div className="fld"><span className="lbl">Daftar sebagai</span>
              <div className="role-pick">{ROLES.map(([v, t, s]) => (
                <label key={v}><input type="radio" name="rRole" value={v} checked={rg.role === v} onChange={() => setRg({ ...rg, role: v })} /><span><b>{t}</b><small>{s}</small></span></label>
              ))}</div></div>
            <p className="msg-err" id="rErr" role="alert">{err}</p>
            <button className="btn primary" style={{ width: '100%' }} type="submit" disabled={busy}>Buat akun <Icon n="arrow" /></button>
          </form>
        )}
      </div>
    </div></div></div>
  );
}
