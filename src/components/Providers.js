'use client';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AnimatePresence, LazyMotion, MotionConfig, domAnimation, m } from 'motion/react';
import { AppCtx } from './context';
import CommentsDrawer from './CommentsDrawer';
import { Icon } from './ui';

export default function Providers({ user, categories, children }) {
  const router = useRouter();
  const [toasts, setToasts] = useState([]);
  const [modal, setModal] = useState(null);   // { node, wide }
  const [drawer, setDrawer] = useState(null); // { art, onCount }
  const [navLabel, setNavLabel] = useState(null);
  const resolver = useRef(null);
  const lastFocus = useRef(null);
  const tid = useRef(0);

  const cats = useMemo(() => Object.fromEntries(categories.map((c) => [c.slug, c])), [categories]);

  const toast = useCallback((msg, kind = '') => {
    const id = ++tid.current;
    setToasts((t) => [...t, { id, msg, kind }]);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 3800);
  }, []);

  const closeModal = useCallback((answer = false) => {
    setModal(null);
    if (resolver.current) { const r = resolver.current; resolver.current = null; r(answer); }
    try { lastFocus.current?.focus?.({ preventScroll: true }); } catch {}
  }, []);
  const openModal = useCallback((node, opts = {}) => { lastFocus.current = document.activeElement; setModal({ node, wide: !!opts.wide }); }, []);

  const confirm = useCallback((o) => new Promise((res) => {
    resolver.current = res;
    lastFocus.current = document.activeElement;
    setModal({
      node: (
        <>
          <h2>{o.title}</h2><p className="lead2">{o.text || ''}</p>
          <div className="mdl-actions">
            <button type="button" className="btn line" autoFocus onClick={() => closeModal(false)}>Batal</button>
            <button type="button" className={'btn ' + (o.danger ? 'danger' : 'primary')} onClick={() => closeModal(true)}>{o.ok || 'Ya'}</button>
          </div>
        </>
      ),
    });
  }), [closeModal]);

  const needLogin = useCallback((msg) => {
    if (user) return false;
    openModal(
      <>
        <h2>Masuk dulu, ya</h2><p className="lead2">{msg || 'Fitur ini hanya untuk akun terdaftar.'}</p>
        <div className="mdl-actions">
          <button type="button" className="btn line" onClick={() => closeModal()}>Nanti saja</button>
          <button type="button" className="btn primary" autoFocus onClick={() => { closeModal(); router.push('/login'); }}>Masuk / Gabung <Icon n="arrow" /></button>
        </div>
      </>,
    );
    return true;
  }, [user, openModal, closeModal, router]);

  const openComments = useCallback((art, onCount) => setDrawer({ art, onCount }), []);
  const closeComments = useCallback(() => setDrawer(null), []);
  const refresh = useCallback(() => router.refresh(), [router]);

  useEffect(() => {
    if (!modal) return;
    document.body.style.overflow = 'hidden';
    const k = (e) => { if (e.key === 'Escape') { e.stopPropagation(); closeModal(false); } };
    document.addEventListener('keydown', k, true);
    return () => { document.body.style.overflow = ''; document.removeEventListener('keydown', k, true); };
  }, [modal, closeModal]);
  // Setiap perpindahan halaman menutup dialog yang masih terbuka.
  useEffect(() => { if (!user) setDrawer(null); }, [user]);

  const value = useMemo(() => ({
    user, cats, categories, toast, confirm, openModal, closeModal, needLogin, openComments, closeComments,
    refresh, router, modalOpen: !!modal, navLabel, setNavLabel,
  }), [user, cats, categories, toast, confirm, openModal, closeModal, needLogin, openComments, closeComments, refresh, router, modal, navLabel]);

  return (
    <AppCtx.Provider value={value}>
     <MotionConfig reducedMotion="user"><LazyMotion features={domAnimation} strict>
      {children}
      <div className={'scrim' + (drawer ? ' open' : '')} onClick={closeComments} />
      <aside className={'drawer' + (drawer ? ' open' : '')} aria-label="Komentar karya" aria-hidden={drawer ? 'false' : 'true'}>
        {drawer && <CommentsDrawer key={drawer.art.id} art={drawer.art} onCount={drawer.onCount} onClose={closeComments} />}
      </aside>
      <AnimatePresence>
        {modal && (
          <m.div key="mdl" className="mdl" role="dialog" aria-modal="true" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.18 }} onMouseDown={(e) => { if (e.target === e.currentTarget) closeModal(false); }}>
            <m.div className={'mdl-sheet' + (modal.wide ? ' wide' : '')} initial={{ opacity: 0, y: 28, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: 0.98 }} transition={{ type: 'spring', stiffness: 360, damping: 30 }}>
              <button type="button" className="mdl-x" onClick={() => closeModal(false)} aria-label="Tutup">×</button>
              {modal.node}
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
      <div className="toasts" role="status" aria-live="polite">
        <AnimatePresence>
          {toasts.map((t) => <m.div key={t.id} className={'toast ' + t.kind} initial={{ opacity: 0, y: 24, scale: 0.94 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, x: 40 }} transition={{ type: 'spring', stiffness: 420, damping: 28 }}>{t.msg}</m.div>)}
        </AnimatePresence>
      </div>
     </LazyMotion></MotionConfig>
    </AppCtx.Provider>
  );
}
