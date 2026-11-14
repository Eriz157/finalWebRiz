'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useApp } from './context';
import { api, shrinkToBlob } from '@/lib/client';
import { Icon } from './ui';
import { todayIso, plusDays } from '@/lib/format';

// Formulir challenge: dipakai di dialog (buat/edit) dan inline di halaman Overview.
export function ChallengeForm({ challenge: c, inline, onDone }) {
  const { toast, closeModal, refresh } = useApp();
  const [f, setF] = useState({
    title: c?.title || '', description: c?.description || '', start: c?.start || todayIso(), end: c?.end || plusDays(14),
    prize: c?.prize || '', rules: c?.rules || '',
  });
  const [file, setFile] = useState(null);
  const [removeAtt, setRemoveAtt] = useState(false);
  const [err, setErr] = useState('');
  const [busy, setBusy] = useState(false);
  const [key, setKey] = useState(0);
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const attName = file ? file.name : (!removeAtt && c?.attachment ? c.attachment.name : '');

  const pick = (e) => {
    const fl = e.target.files?.[0]; if (!fl) return;
    if (!/^image\//.test(fl.type) && fl.type !== 'application/pdf') { e.target.value = ''; toast('Lampiran harus gambar atau PDF.', 'err'); return; }
    if (fl.type === 'application/pdf' && fl.size > 900 * 1024) { e.target.value = ''; toast('PDF maksimal sekitar 900 KB.', 'err'); return; }
    setFile(fl); setRemoveAtt(false);
  };
  const submit = async (e) => {
    e.preventDefault(); setErr('');
    if (f.title.trim().length < 3) return setErr('Judul challenge minimal 3 karakter.');
    if (f.description.trim().length < 10) return setErr('Deskripsi challenge minimal 10 karakter.');
    if (!f.start || !f.end) return setErr('Tanggal mulai dan selesai wajib diisi.');
    if (f.end <= f.start) return setErr('Tanggal selesai harus setelah tanggal mulai.');
    setBusy(true);
    try {
      const fd = new FormData();
      Object.entries(f).forEach(([k, v]) => fd.append(k, v));
      if (file) {
        if (/^image\//.test(file.type)) fd.append('attachment', await shrinkToBlob(file, { maxDim: 1600, limit: 800 * 1024 }), 'lampiran.jpg');
        else fd.append('attachment', file, file.name);
      }
      if (removeAtt) fd.append('removeAttachment', '1');
      await api(c ? `/api/challenges/${c.id}` : '/api/challenges', { method: c ? 'PATCH' : 'POST', form: fd });
      toast(c ? 'Challenge diperbarui.' : 'Challenge diterbitkan.', 'ok');
      if (!c && inline) { setF({ title: '', description: '', start: todayIso(), end: plusDays(14), prize: '', rules: '' }); setFile(null); setKey((k) => k + 1); }
      if (!inline) closeModal();
      onDone && onDone(); refresh();
    } catch (x) { setErr(x.message); }
    setBusy(false);
  };
  const p = inline ? 'o' : 'm';
  return (
    <form onSubmit={submit} noValidate>
      <div className="fld"><label htmlFor={p + 'T'}>Judul challenge</label><input className="in" id={p + 'T'} maxLength={100} autoComplete="off" autoFocus={!inline} placeholder="Contoh: Cahaya di Ujung Hari" value={f.title} onChange={set('title')} /></div>
      <div className="fld"><label htmlFor={p + 'D'}>Deskripsi challenge</label><textarea className="in" id={p + 'D'} maxLength={1500} placeholder="Jelaskan tema, harapan, dan kriteria penilaian" value={f.description} onChange={set('description')} /></div>
      <div className="cols2">
        <div className="fld"><label htmlFor={p + 'S'}>Tanggal mulai</label><input className="in" id={p + 'S'} type="date" value={f.start} onChange={set('start')} /></div>
        <div className="fld"><label htmlFor={p + 'E'}>Tanggal selesai</label><input className="in" id={p + 'E'} type="date" value={f.end} onChange={set('end')} /></div>
      </div>
      <div className="fld"><label htmlFor={p + 'P'}>Hadiah (opsional)</label><input className="in" id={p + 'P'} maxLength={120} placeholder="Contoh: Rp 2.000.000 + pajangan utama" value={f.prize} onChange={set('prize')} /></div>
      <div className="fld"><label htmlFor={p + 'R'}>Aturan (opsional)</label><textarea className="in" id={p + 'R'} maxLength={1200} style={{ minHeight: 84 }} placeholder="Satu aturan per baris" value={f.rules} onChange={set('rules')} /></div>
      <div className="fld"><span className="lbl">Lampiran (opsional)</span>
        <div className="dz" style={{ minHeight: 76 }}>
          <input key={key} type="file" accept="image/*,.pdf" aria-label="Pilih lampiran" onChange={pick} />
          <div className="pvx" style={{ width: 56, height: 56, ...(!file && !removeAtt && c?.banner ? { backgroundImage: `url('${c.banner}')` } : {}) }} />
          <span>{attName || 'Gambar atau PDF (PDF maks. 900 KB)'}</span>
        </div>
        {attName && <button type="button" className="btn text" style={{ alignSelf: 'flex-start', padding: '2px 0' }} onClick={() => { setFile(null); setRemoveAtt(true); setKey((k) => k + 1); }}>Hapus lampiran</button>}
      </div>
      <p className="msg-err" role="alert">{err}</p>
      <div className="mdl-actions">
        {(c || !inline) && <button type="button" className="btn line" onClick={() => closeModal()}>Batal</button>}
        <button type="submit" className="btn primary" disabled={busy}>{c ? 'Simpan perubahan' : 'Terbitkan challenge'}</button>
      </div>
    </form>
  );
}

function JoinModal({ c, myArts }) {
  const { closeModal, toast, refresh } = useApp();
  const [sel, setSel] = useState(myArts[0]?.id);
  const [err, setErr] = useState('');
  const submit = async (e) => {
    e.preventDefault();
    try { await api(`/api/challenges/${c.id}/join`, { method: 'POST', json: { artworkId: sel } }); closeModal(); toast('Karya berhasil didaftarkan ke challenge.', 'ok'); refresh(); }
    catch (x) { setErr(x.message); }
  };
  return (
    <>
      <h2>Ikuti challenge</h2>
      <p className="lead2">Pilih satu karya dari portofoliomu untuk “{c.title}”. Satu member hanya dapat mengirim satu karya.</p>
      <form onSubmit={submit} noValidate>
        <div className="pick-grid">{myArts.map((a) => (
          <label className="pick" key={a.id}><input type="radio" name="jArt" checked={sel === a.id} onChange={() => setSel(a.id)} />
            <span><div className="t"><img src={a.image} alt="" /></div><b>{a.title}</b></span></label>
        ))}</div>
        <p className="msg-err" role="alert">{err}</p>
        <div className="mdl-actions"><button type="button" className="btn line" onClick={() => closeModal()}>Batal</button><button type="submit" className="btn primary">Kirim karya</button></div>
      </form>
    </>
  );
}

// Aksi yang dipakai bersama oleh daftar, detail, dan Overview.
export function useChallengeActions(myArts = []) {
  const { openModal, closeModal, confirm, toast, refresh, router } = useApp();
  const join = (c) => {
    if (!myArts.length) {
      openModal(<><h2>Belum ada karya</h2><p className="lead2">Daftarkan karya terlebih dahulu di halaman My Artwork, lalu kembali untuk mengikuti “{c.title}”.</p>
        <div className="mdl-actions"><button type="button" className="btn line" onClick={() => closeModal()}>Nanti</button>
          <button type="button" className="btn primary" onClick={() => { closeModal(); router.push('/my-artwork'); }}>Buka My Artwork <Icon n="arrow" /></button></div></>);
      return;
    }
    openModal(<JoinModal c={c} myArts={myArts} />, { wide: myArts.length > 3 });
  };
  const withdraw = async (c) => {
    if (!(await confirm({ title: 'Tarik submisi?', text: `Karyamu akan dikeluarkan dari “${c.title}”. Kamu masih bisa mendaftar lagi selama challenge belum berakhir.`, ok: 'Tarik submisi' }))) return;
    try { await api(`/api/challenges/${c.id}/join`, { method: 'DELETE' }); toast('Submisi ditarik.', 'ok'); refresh(); } catch (x) { toast(x.message, 'err'); }
  };
  const edit = (c) => openModal(<><h2>Edit challenge</h2><p className="lead2">Perbarui detail challenge.</p><ChallengeForm challenge={c} /></>);
  const create = () => openModal(<><h2>Tambah challenge</h2><p className="lead2">Terbitkan open call baru untuk para member.</p><ChallengeForm /></>);
  const del = async (c, afterTo) => {
    if (!(await confirm({ title: 'Hapus challenge?', text: `“${c.title}” beserta ${c.participants} submisinya akan dihapus permanen.`, ok: 'Hapus challenge', danger: true }))) return;
    try { await api(`/api/challenges/${c.id}`, { method: 'DELETE' }); toast('Challenge dihapus.', 'ok'); if (afterTo) router.push(afterTo); refresh(); } catch (x) { toast(x.message, 'err'); }
  };
  const close = async (c) => {
    if (!(await confirm({ title: 'Akhiri challenge sekarang?', text: 'Submisi akan ditutup dan pemenang dapat diumumkan. Member tidak bisa lagi mendaftar atau menarik karya.', ok: 'Akhiri challenge' }))) return;
    try { await api(`/api/challenges/${c.id}/close`, { method: 'POST' }); toast('Challenge diakhiri.', 'ok'); refresh(); } catch (x) { toast(x.message, 'err'); }
  };
  return { join, withdraw, edit, create, del, close };
}
