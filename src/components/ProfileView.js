'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useApp } from './context';
import { api, avatarDataUrl } from '@/lib/client';
import { Avatar, Badge, ArtCard, ChCard, Icon, Void } from './ui';
import { fmtDate } from '@/lib/format';

function LinkRows({ u }) {
  const rows = [['Instagram', u.instagram], ['Behance', u.behance], ['Website', u.website]].filter((r) => r[1]);
  if (!rows.length) return null;
  return <div className="pf-links">{rows.map(([t, h]) => <a key={t} href={h} target="_blank" rel="noopener noreferrer"><span>{t}</span><span>↗</span></a>)}</div>;
}

function ProfileForm({ u }) {
  const { toast, refresh } = useApp();
  const [f, setF] = useState({ name: u.name, bio: u.bio || '', instagram: u.instagram || '', behance: u.behance || '', website: u.website || '' });
  const [avatar, setAvatar] = useState(null); // null = tidak diubah, '' = dihapus
  const [err, setErr] = useState('');
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const shown = avatar === null ? u.avatar : avatar;
  const submit = async (e) => {
    e.preventDefault(); setErr('');
    if (f.name.trim().length < 2) return setErr('Nama tampilan minimal 2 karakter.');
    try {
      await api('/api/me/profile', { method: 'PATCH', json: { ...f, ...(avatar !== null ? { avatar } : {}) } });
      toast('Profil diperbarui.', 'ok'); setAvatar(null); refresh();
    } catch (x) { setErr(x.message); }
  };
  return (
    <div className="panel"><h3>Profil publik</h3><p className="sub">Informasi ini dapat dilihat siapa saja yang membuka profilmu.</p>
      <form onSubmit={submit} noValidate>
        <div className="fld"><span className="lbl">Foto profil</span>
          <div className="btn-row" style={{ gap: 16 }}>
            <span><Avatar u={{ ...u, avatar: shown }} cls="lg" /></span>
            <div>
              <label className="btn line sm" style={{ cursor: 'pointer', position: 'relative' }}>Pilih foto
                <input type="file" accept="image/*" style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer', width: '100%' }}
                  onChange={async (e) => { const fl = e.target.files?.[0]; if (!fl) return; try { setAvatar(await avatarDataUrl(fl)); } catch { toast('Foto tidak bisa diproses. Coba gambar lain.', 'err'); } }} />
              </label>{' '}
              <button type="button" className="btn text" onClick={() => setAvatar('')}>Hapus foto</button>
              <p className="hintx" style={{ marginTop: 8 }}>JPG/PNG. Otomatis dikecilkan.</p>
            </div>
          </div></div>
        <div className="fld"><label htmlFor="pName">Nama tampilan</label><input className="in" id="pName" maxLength={60} value={f.name} onChange={set('name')} /></div>
        <div className="fld"><label htmlFor="pBio">Bio singkat</label><textarea className="in" id="pBio" maxLength={240} placeholder="Ceritakan dirimu dan karyamu" value={f.bio} onChange={set('bio')} /></div>
        <div className="fld"><label htmlFor="pIg">Instagram</label><input className="in" id="pIg" type="url" placeholder="https://instagram.com/…" value={f.instagram} onChange={set('instagram')} /></div>
        <div className="cols2">
          <div className="fld"><label htmlFor="pBe">Behance</label><input className="in" id="pBe" type="url" placeholder="https://behance.net/…" value={f.behance} onChange={set('behance')} /></div>
          <div className="fld"><label htmlFor="pWeb">Website</label><input className="in" id="pWeb" type="url" placeholder="https://" value={f.website} onChange={set('website')} /></div>
        </div>
        <p className="msg-err" id="pErr" role="alert">{err}</p>
        <button className="btn primary sm" type="submit">Simpan profil</button>
      </form>
    </div>
  );
}

function AccountTab({ u }) {
  const { toast, refresh, confirm, router } = useApp();
  const [email, setEmail] = useState(u.email), [oldP, setOldP] = useState(''), [newP, setNewP] = useState(''), [err, setErr] = useState('');
  const save = async (e) => {
    e.preventDefault(); setErr('');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return setErr('Format email belum benar.');
    if (newP && newP.length < 6) return setErr('Kata sandi baru minimal 6 karakter.');
    try { await api('/api/me/account', { method: 'PATCH', json: { email, currentPassword: oldP, newPassword: newP } }); toast('Akun diperbarui.', 'ok'); setOldP(''); setNewP(''); refresh(); }
    catch (x) { setErr(x.message); }
  };
  const apply = async () => {
    if (!(await confirm({ title: 'Ajukan jadi Curator?', text: 'Admin akan meninjau pengajuanmu. Kamu tetap bisa memakai akun ini sebagai Public selama menunggu.', ok: 'Ajukan' }))) return;
    try { await api('/api/me/curator-request', { method: 'POST' }); toast('Pengajuan terkirim ke admin.', 'ok'); refresh(); } catch (x) { toast(x.message, 'err'); }
  };
  const del = async () => {
    if (!(await confirm({ title: 'Hapus akunmu?', text: 'Karya, komentar, dan submisi challenge milikmu akan ikut terhapus. Tindakan ini tidak dapat dibatalkan.', ok: 'Hapus akun saya', danger: true }))) return;
    try { await api('/api/me', { method: 'DELETE' }); toast('Akunmu telah dihapus.', 'ok'); router.push('/'); router.refresh(); } catch (x) { toast(x.message, 'err'); }
  };
  return (
    <>
      <div className="panel" style={{ marginBottom: 24 }}><h3>Kelola akun</h3><p className="sub">Informasi privat. Tidak tampil di profil publik.</p>
        <form onSubmit={save} noValidate>
          <div className="fld"><label htmlFor="aEmail">Email</label><input className="in" id="aEmail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
          <div className="cols2">
            <div className="fld"><label htmlFor="aOld">Kata sandi saat ini</label><input className="in" id="aOld" type="password" autoComplete="current-password" placeholder="Hanya jika mengganti sandi" value={oldP} onChange={(e) => setOldP(e.target.value)} /></div>
            <div className="fld"><label htmlFor="aNew">Kata sandi baru</label><input className="in" id="aNew" type="password" autoComplete="new-password" placeholder="Min. 6 karakter" value={newP} onChange={(e) => setNewP(e.target.value)} /></div>
          </div>
          <p className="msg-err" id="aErr" role="alert">{err}</p>
          <button className="btn primary sm" type="submit">Simpan perubahan</button>
        </form></div>
      {u.role === 'public' && (
        <div className="panel" style={{ marginBottom: 24 }}><h3>Menjadi Curator</h3>
          {u.curatorStatus === 'pending' ? <p className="sub">Pengajuanmu sedang ditinjau admin. <Badge r="pending">Pending</Badge></p>
            : u.curatorStatus === 'rejected' ? <p className="sub">Pengajuan sebelumnya ditolak admin. Menurut aturan platform, akun dengan pengajuan ditolak hanya dapat dihapus atau tetap dipakai sebagai Public.</p>
            : <><p className="sub">Curator dapat membuka challenge dan memilih pemenang. Pengajuan perlu disetujui admin.</p><button type="button" className="btn line sm" onClick={apply}>Ajukan jadi Curator</button></>}
        </div>
      )}
      {u.role !== 'admin' && (
        <div className="panel" style={{ borderColor: '#d7a79b' }}><h3 style={{ color: 'var(--err)' }}>Hapus akun</h3><p className="sub">Menghapus akun akan ikut menghapus karya, komentar, dan data terkait. Tindakan ini tidak dapat dibatalkan.</p><button type="button" className="btn danger sm" onClick={del}>Hapus akun saya</button></div>
      )}
    </>
  );
}

export default function ProfileView({ profile: u, own, arts, favorites, subs, challenges }) {
  const sp = useSearchParams();
  const tabs = [['profil', 'Profil publik'], ['favorit', 'Favorit'], ['akun', 'Akun']];
  if (u.role === 'member') tabs.splice(2, 0, ['submisi', 'Submisi']);
  const [tab, setTab] = useState(() => (tabs.some((t) => t[0] === sp.get('tab')) ? sp.get('tab') : 'profil'));

  const left = (
    <aside className="pf-card">
      <Avatar u={u} cls="lg" /><h1 className="h-md">{u.name}</h1>
      <div className="btn-row" style={{ gap: 8 }}><Badge r={u.role} />{u.curatorStatus === 'pending' && own && <Badge r="pending">Pending</Badge>}</div>
      {u.bio ? <p style={{ margin: '4px 0 0', color: 'var(--ink2)' }}>{u.bio}</p> : <p className="mute" style={{ margin: '4px 0 0' }}>{own ? 'Belum ada bio. Tambahkan di tab Profil.' : 'Belum ada bio.'}</p>}
      <LinkRows u={u} />
      <p className="small mute" style={{ margin: '6px 0 0' }}>Bergabung {fmtDate(u.createdAt)}{own && <><br />{u.email}</>}</p>
      {u.role === 'member' && <p className="small" style={{ margin: 0 }}><b>{arts.length}</b> karya dipamerkan</p>}
    </aside>
  );

  let right;
  if (own) {
    let body;
    if (tab === 'favorit') body = !favorites.length
      ? <Void title="Belum ada favorit"><p>Simpan karya yang kamu suka dari halaman detail di Gallery. Semuanya akan muncul di sini.</p><Link className="btn primary sm" href="/gallery">Jelajahi Gallery <Icon n="arrow" /></Link></Void>
      : <div className="art-grid">{favorites.map((a) => <ArtCard key={a.id} a={a} />)}</div>;
    else if (tab === 'submisi') body = !subs.length
      ? <Void title="Belum ada submisi"><p>Karya yang kamu daftarkan ke challenge akan tercatat di sini.</p><Link className="btn primary sm" href="/challenges">Lihat challenge <Icon n="arrow" /></Link></Void>
      : <div>{subs.map((s) => (
          <div className="sub-row" key={s.id}>
            <div className="th"><img src={s.image} alt="" /></div>
            <div><h4>{s.title}</h4><p>di <Link href={`/challenges/${s.chId}`} style={{ color: 'var(--terra-d)' }}>{s.chTitle}</Link> · {fmtDate(s.createdAt)}</p></div>
            <span className={'badge ' + (s.winner ? 'curator' : '')}>{s.status}</span>
          </div>))}</div>;
    else if (tab === 'akun') body = <AccountTab u={u} />;
    else body = <ProfileForm u={u} />;
    right = (
      <>
        {u.curatorStatus === 'pending' && <div className="banner"><div><b>Pengajuan Curator sedang ditinjau</b>Admin akan memeriksa pengajuanmu. Selama menunggu, kamu tetap dapat menjelajah sebagai Public.</div></div>}
        {u.curatorStatus === 'rejected' && <div className="banner rej"><div><b>Pengajuan Curator ditolak</b>Admin menolak pengajuanmu. Kamu tetap dapat memakai akun ini sebagai Public, atau menghapus akunmu di tab Akun.</div></div>}
        <div className="tabs" role="tablist">{tabs.map(([k, t]) => <button key={k} type="button" className="tab" role="tab" aria-selected={tab === k} onClick={() => setTab(k)}>{t}</button>)}</div>
        {body}
      </>
    );
  } else {
    right = (
      <>
        <div className="tabs"><span className="tab" aria-selected="true">{u.role === 'curator' ? 'Karya & challenge' : 'Galeri karya'}</span></div>
        {u.role === 'curator' && (
          <>
            <h2 className="h-sm" style={{ margin: '0 0 14px' }}>Challenge diselenggarakan</h2>
            {challenges.length ? <div className="ch-grid" style={{ marginBottom: 34 }}>{challenges.map((c, i) => <ChCard key={c.id} c={c} idx={i + 1} plain />)}</div>
              : <Void style={{ marginBottom: 30 }}><p style={{ margin: 0 }}>Belum ada challenge.</p></Void>}
          </>
        )}
        {arts.length ? <div className="art-grid">{arts.map((a) => <ArtCard key={a.id} a={a} />)}</div>
          : <Void title="Belum ada karya"><p style={{ margin: 0 }}>{u.name} belum memamerkan karya.</p></Void>}
      </>
    );
  }
  return (
    <div className="page" id="p-profil"><div className="wrap">
      <div className="p-head"><div><span className="eyebrow">{own ? 'Profile — Kartu saya' : 'Profile — Kreator'}</span><h2 className="h-xl">{own ? <>Profil <em>saya.</em></> : <>Kenali <em>kreatornya.</em></>}</h2></div></div>
      <div className="pf">{left}<div>{right}</div></div>
    </div></div>
  );
}
