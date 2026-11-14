'use client';
import { useState } from 'react';
import { useApp } from './context';
import { api, shrinkToBlob } from '@/lib/client';

// Dialog daftar / edit karya. Dipakai di My Artwork dan Gallery.
export default function ArtForm({ art }) {
  const { user, categories, toast, closeModal, refresh } = useApp();
  const edit = !!art;
  const [f, setF] = useState({
    title: art?.title || '', painter: art?.painter || user?.name || '', synopsis: art?.synopsis || '',
    category: art?.category || 'classic', studio: !!art?.studioUrl, url: art?.studioUrl || '',
  });
  const [file, setFile] = useState(null);
  const [pv, setPv] = useState('');
  const [err, setErr] = useState('');
  const [busy, setBusy] = useState(false);
  const [over, setOver] = useState(false);
  const set = (k) => (e) => setF({ ...f, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value });
  const pick = (fl) => { if (!fl) return; if (pv) URL.revokeObjectURL(pv); setFile(fl); setPv(URL.createObjectURL(fl)); };

  const submit = async (e) => {
    e.preventDefault(); setErr('');
    if (!edit && !file) return setErr('Pilih gambar karya terlebih dahulu.');
    if (!f.title.trim()) return setErr('Isi judul karya.');
    if (!f.painter.trim()) return setErr('Isi nama seniman.');
    if (!f.synopsis.trim()) return setErr('Isi sinopsis karya.');
    if (f.studio && !/^https?:\/\//i.test(f.url.trim())) return setErr('Isi tautan Studio View yang diawali http:// atau https://');
    setBusy(true);
    try {
      const studioUrl = f.studio ? f.url.trim() : '';
      if (edit) {
        await api(`/api/artworks/${art.id}`, { method: 'PATCH', json: { title: f.title, painter: f.painter, synopsis: f.synopsis, category: f.category, studioUrl } });
        toast('Karya diperbarui.', 'ok');
      } else {
        const fd = new FormData();
        fd.append('title', f.title); fd.append('painter', f.painter); fd.append('synopsis', f.synopsis); fd.append('category', f.category); fd.append('studioUrl', studioUrl);
        fd.append('image', await shrinkToBlob(file), 'karya.jpg');
        await api('/api/artworks', { method: 'POST', form: fd });
        toast('Karya ditambahkan ke Gallery.', 'ok');
      }
      closeModal(); refresh();
    } catch (e2) { setErr(e2.message); setBusy(false); }
  };
  return (
    <>
      <h2>{edit ? 'Edit karya' : 'Daftarkan karya'}</h2>
      <p className="lead2">{edit ? 'Perbarui informasi karya. File gambar tidak dapat diganti; hapus dan unggah ulang bila perlu.' : 'Karya yang kamu daftarkan otomatis tampil di Gallery.'}</p>
      <form onSubmit={submit} noValidate>
        <div className="fld"><label htmlFor="afTitle">Judul karya</label><input className="in" id="afTitle" maxLength={120} autoComplete="off" autoFocus placeholder="Contoh: Senja di Ujung Dunia" value={f.title} onChange={set('title')} /></div>
        <div className="fld"><label htmlFor="afPainter">Nama seniman</label><input className="in" id="afPainter" maxLength={80} autoComplete="off" placeholder="Nama lengkap atau nama panggung" value={f.painter} onChange={set('painter')} /></div>
        <div className="fld"><label htmlFor="afSyn">Sinopsis karya</label><textarea className="in" id="afSyn" maxLength={1200} placeholder="Ceritakan makna atau latar belakang karya ini" value={f.synopsis} onChange={set('synopsis')} /></div>
        <div className="fld"><span className="lbl">Kategori</span>
          <div className="catpick">{categories.map((c) => (
            <label key={c.slug}><input type="radio" name="afCat" value={c.slug} checked={f.category === c.slug} onChange={set('category')} /><span><i style={{ '--c': c.color }} />{c.label}</span></label>
          ))}</div></div>
        <div className="fld"><label className="sw" htmlFor="afStudio"><input type="checkbox" id="afStudio" checked={f.studio} onChange={set('studio')} /><i /><span>Link Studio View tersedia</span></label></div>
        {f.studio && <div className="fld"><label htmlFor="afUrl">Tautan Studio View</label><input className="in" id="afUrl" type="url" maxLength={500} inputMode="url" placeholder="https://" value={f.url} onChange={set('url')} autoFocus /></div>}
        <div className="fld"><span className="lbl">Gambar karya</span>
          {edit ? (
            <div className="dz locked"><div className="pvx" style={{ backgroundImage: `url('${art.image}')` }} /><span>File gambar tidak dapat diganti.</span></div>
          ) : (
            <div className={'dz' + (over ? ' over' : '')} onDragEnter={(e) => { e.preventDefault(); setOver(true); }} onDragOver={(e) => { e.preventDefault(); setOver(true); }}
              onDragLeave={(e) => { e.preventDefault(); setOver(false); }} onDrop={(e) => { e.preventDefault(); setOver(false); const fl = e.dataTransfer?.files?.[0]; if (fl && /^image\//.test(fl.type)) pick(fl); }}>
              <input type="file" id="afFile" accept="image/*" aria-label="Pilih gambar karya" onChange={(e) => pick(e.target.files?.[0])} />
              <div className="pvx" style={pv ? { backgroundImage: `url("${pv}")` } : undefined} />
              <span>{file ? file.name : 'Pilih gambar atau seret ke sini'}</span>
            </div>
          )}
        </div>
        <p className="msg-err" role="alert">{err}</p>
        <div className="mdl-actions">
          <button type="button" className="btn line" onClick={() => closeModal()}>Batal</button>
          <button type="submit" className="btn primary" disabled={busy}>{busy ? 'Menyimpan…' : edit ? 'Simpan perubahan' : 'Tambahkan ke Gallery'}</button>
        </div>
      </form>
    </>
  );
}
