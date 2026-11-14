'use client';
import Link from 'next/link';
import { useApp } from './context';
import { api } from '@/lib/client';
import { ArtCard, Icon, Void } from './ui';
import ArtForm from './ArtForm';

export default function MyArtworkView({ arts, submissionCount }) {
  const { openModal, confirm, toast, refresh } = useApp();
  const likes = arts.reduce((n, a) => n + a.likes, 0), cms = arts.reduce((n, a) => n + a.comments, 0);
  const add = () => openModal(<ArtForm />);
  const del = async (a) => {
    if (!(await confirm({ title: 'Hapus karya ini?', text: `“${a.title}” akan dihapus dari Gallery beserta suka, komentar, dan submisi challenge-nya.`, ok: 'Hapus karya', danger: true }))) return;
    try { await api(`/api/artworks/${a.id}`, { method: 'DELETE' }); toast('Karya dihapus.', 'ok'); refresh(); } catch (x) { toast(x.message, 'err'); }
  };
  return (
    <div className="page" id="p-karya-saya"><div className="wrap">
      <div className="p-head"><div><span className="eyebrow">My Artwork — Studio</span><h1 className="h-xl">Karya <em>saya.</em></h1></div>
        <button type="button" className="btn primary" onClick={add}><Icon n="plus" /> Daftarkan karya</button></div>
      <div className="tiles">
        <div className="tile"><b>{arts.length}</b><span>Karya dipamerkan</span></div><div className="tile"><b>{likes}</b><span>Suka diterima</span></div>
        <div className="tile"><b>{cms}</b><span>Komentar</span></div><div className="tile"><b>{submissionCount}</b><span>Submisi challenge</span></div>
      </div>
      {!arts.length ? (
        <Void title="Belum ada karya"><p>Daftarkan karya pertamamu. Judul, sinopsis, kategori, gambar, dan Studio View opsional. Karya akan otomatis tampil di Gallery.</p>
          <button type="button" className="btn primary" onClick={add}><Icon n="plus" /> Daftarkan karya</button></Void>
      ) : (
        <div className="art-grid">{arts.map((a) => (
          <ArtCard key={a.id} a={a} footer={<>
            <Link className="btn soft xs" href={`/gallery/${a.id}`}><Icon n="eye" /> Lihat</Link>
            <button type="button" className="btn line xs" onClick={() => openModal(<ArtForm art={a} />)}><Icon n="edit" /> Edit</button>
            <button type="button" className="btn danger xs" onClick={() => del(a)}><Icon n="trash" /> Hapus</button></>} />
        ))}</div>
      )}
    </div></div>
  );
}
