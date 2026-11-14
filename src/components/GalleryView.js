'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useApp } from './context';
import { createGallery } from './galleryController';
import ArtForm from './ArtForm';

export default function GalleryView({ arts: serverArts, initialId }) {
  const app = useApp();
  const appRef = useRef(app); appRef.current = app;
  const [arts, setArts] = useState(serverArts);
  const artsRef = useRef(arts); artsRef.current = arts;
  const ctl = useRef(null);

  // Data baru dari server (setelah router.refresh) menggantikan data lokal.
  useEffect(() => { setArts(serverArts); }, [serverArts]);
  useEffect(() => {
    ctl.current = createGallery({
      ui: () => appRef.current,
      arts: () => artsRef.current,
      initialId,
      removeLocal: (id) => setArts((l) => l.filter((a) => a.id !== id)),
      onEdit: (a) => appRef.current.openModal(<ArtForm art={a} />),
    });
    return () => { ctl.current && ctl.current.destroy(); ctl.current = null; };
  }, []); // eslint-disable-line
  useEffect(() => { if (ctl.current) { ctl.current.sync(); } }, [arts, app.user]);

  const I = (d) => <svg viewBox="0 0 24 24" aria-hidden="true"><path d={d} /></svg>;
  return (
    <section id="p-galeri">
      <div className="stage" id="stage" data-view="home">
        <div className="backdrop b1" aria-hidden="true" /><div className="backdrop b2" aria-hidden="true" />
        <div className="canvas" id="canvas" data-mode="landscape" data-view="home">
          <div className="bg" aria-hidden="true">
            <div className="scene"><div className="plate p1" /><div className="plate p2" /></div>
            <div className="grade" /><div className="veil" />
          </div>
          <section className="view detail is-off" id="detail" aria-label="Detail karya">
            <div className="dtext">
              <button type="button" className="back" id="btnBack"><span className="rnd">{I('M20 12H5M11 6l-6 6 6 6')}</span><span>Kembali ke Galeri</span></button>
              <div className="meta">
                <span className="chip" id="dCat"><i className="dot" /><span /></span>
                <span className="chip ex" id="dEx" hidden>Contoh</span>
              </div>
              <h2 id="dTitle" />
              <hr className="rule" />
              <p className="by"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="4" /><path d="M4.5 20c.9-4 3.8-6 7.5-6s6.6 2 7.5 6" /></svg><span id="dBy" /></p>
              <h3>Sinopsis</h3>
              <p className="syn" id="dSyn" />
              <a className="studio" id="dStudio" target="_blank" rel="noopener noreferrer">
                <span className="ic"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 9.5 12 4l9 5.5H3Z" /><path d="M5.5 11.5v6M9.8 11.5v6M14.2 11.5v6M18.5 11.5v6M3.5 20h17" /></svg></span>
                <span className="st"><b>Studio View</b><small><i className="led" /><span id="dStudioTxt">Tidak tersedia</span></small></span>
                <span className="go">{I('M4 12h15M13 6l6 6-6 6')}</span>
              </a>
              <div className="actions" id="dInter">
                <button type="button" className="pill outline sm" id="btnLike" aria-pressed="false">{I('M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.4A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z')}<span>Suka</span> <span className="cnt" id="likeN">0</span></button>
                <button type="button" className="pill outline sm" id="btnFav" aria-pressed="false">{I('M7 4h10v16l-5-3.5L7 20V4Z')}<span id="favTxt">Favorit</span></button>
                <button type="button" className="pill outline sm" id="btnCmt">{I('M5 5h14v10H10l-4 3.5V15H5V5Z')}<span>Komentar</span> <span className="cnt" id="cmtN">0</span></button>
              </div>
              <Link className="linkbtn" id="dGuestHint" href="/login" hidden style={{ display: 'inline-block', marginTop: 12 }}>Masuk atau gabung untuk menyukai, menyimpan, dan berkomentar →</Link>
              <div className="actions own" id="dOwn" hidden>
                <button type="button" className="pill outline sm" id="btnEdit">{I('M4 20h4L19 9l-4-4L4 16v4ZM13.5 6.5l4 4')}Edit</button>
                <button type="button" className="pill outline sm warn" id="btnDel">{I('M5 7h14M10 7V4h4v3M7 7l1 13h8l1-13')}Hapus</button>
              </div>
            </div>
            <div className="dstage" aria-hidden="false"><div className="dslot" id="dslot" /></div>
          </section>
        </div>
        <section className="view spiral" id="spiral" aria-label="Galeri karya">
          <div className="hw"><div className="helix" id="helix" /></div>
          <div className="sbar"><span className="n" aria-hidden="true"><b id="cIdx">00</b> / <span id="cTotal">00</span></span><p id="hint">Memuat koleksi…</p></div>
          <div className="ptitle" aria-hidden="true"><h2 id="pTitle" /><p id="pBy" /></div>
        </section>
        <section className="view focus is-off" id="focus" aria-label="Karya terpilih">
          <button type="button" className="back" id="fBack"><span className="rnd">{I('M20 12H5M11 6l-6 6 6 6')}</span><span>Kembali ke Galeri</span></button>
          <div className="fstage"><div className="fwrap" id="fwrap"><div className="fcard" id="fcard"><div className="fimgw"><img id="fimg" alt="" draggable="false" /></div><i className="shine" /><i className="glare" /></div></div></div>
          <div className="fbar">
            <h2 id="focTitle" /><p className="by2" id="focBy" />
            <button type="button" className="pill solid" id="btnDetail">Lihat Detail {I('M4 12h15M13 6l6 6-6 6')}</button>
            <p className="tip">Gerakkan kursor di atas karya untuk memiringkannya. Tekan dan tahan untuk memperbesar.</p>
          </div>
        </section>
      </div>
    </section>
  );
}
