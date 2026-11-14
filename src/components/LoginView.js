'use client';
import { useState } from 'react';
import { useApp } from './context';
import { api } from '@/lib/client';
import { Icon } from './ui';

const DEMO = [['admin@archive.id', 'admin123', 'Admin'], ['kurator@archive.id', 'kurator123', 'Curator'], ['member@archive.id', 'member123', 'Member'], ['publik@archive.id', 'publik123', 'Public']];

export default function LoginView({ showDemo }) {
  const { toast, router } = useApp();
  const [tab, setTab] = useState('in');
  const [li, setLi] = useState({ email: '', password: '' });
  const [rg, setRg] = useState({ name: '', email: '', password: '', role: 'public' });
  const [err, setErr] = useState('');
  const [busy, setBusy] = useState(false);

  const done = (user, msg) => {
    toast(msg || `Selamat datang, ${user.name.split(' ')[0]}.`, 'ok');
    router.push(user.curatorStatus ? '/profile?tab=akun' : '/');
    router.refresh();
  };
  const login = async (e, creds) => {
    e && e.preventDefault(); setErr('');
    const c = creds || li;
    if (!c.email.trim() || !c.password) return setErr('Isi email dan kata sandi.');
    setBusy(true);
    try { const d = await api('/api/auth/login', { method: 'POST', json: c }); done(d.user); }
    catch (x) { setErr(x.message); setBusy(false); }
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
        <div className="tabs" role="tablist" style={{ marginBottom: 24 }}>
          <button type="button" className="tab" role="tab" aria-selected={tab === 'in'} onClick={() => { setTab('in'); setErr(''); }}>Masuk</button>
          <button type="button" className="tab" role="tab" aria-selected={tab === 'join'} onClick={() => { setTab('join'); setErr(''); }}>Gabung</button>
        </div>
        {tab === 'in' ? (
          <form onSubmit={login} noValidate id="fLogin">
            <div className="fld"><label htmlFor="lEmail">Email</label><input className="in" id="lEmail" type="email" autoComplete="email" placeholder="nama@email.com" value={li.email} onChange={(e) => setLi({ ...li, email: e.target.value })} /></div>
            <div className="fld"><label htmlFor="lPass">Kata sandi</label><input className="in" id="lPass" type="password" autoComplete="current-password" placeholder="••••••••" value={li.password} onChange={(e) => setLi({ ...li, password: e.target.value })} /></div>
            <p className="msg-err" id="lErr" role="alert">{err}</p>
            <button className="btn primary" style={{ width: '100%' }} type="submit" disabled={busy}>Masuk <Icon n="arrow" /></button>
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
