'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { useApp } from './context';
import { api } from '@/lib/client';
import { Avatar, Icon } from './ui';

const NAVS = {
  guest: [['/', 'Beranda'], ['/gallery', 'Gallery'], ['/login', 'Login / Join']],
  public: [['/', 'Beranda'], ['/gallery', 'Gallery'], ['/profile', 'Profil']],
  curator: [['/', 'Beranda'], ['/gallery', 'Gallery'], ['/overview', 'Overview'], ['/challenges', 'Challenge'], ['/profile', 'Profil']],
  member: [['/', 'Beranda'], ['/gallery', 'Gallery'], ['/challenges', 'Challenge'], ['/my-artwork', 'My Artwork'], ['/profile', 'Profil']],
  admin: [['/', 'Beranda'], ['/gallery', 'Gallery'], ['/challenges', 'Challenge'], ['/users', 'User Management'], ['/profile', 'Profil']],
};
const LABELS = { '/': '00 / IV — Entrance', '/gallery': 'The Hall — Gallery', '/login': 'Sign In — Entrance', '/profile': 'Profile — Your Card', '/overview': 'Overview — Curator Desk', '/challenges': 'Open Calls', '/my-artwork': 'My Artwork — Studio', '/users': 'Registry — Users' };

export default function Navbar() {
  const { user, toast, navLabel } = useApp();
  const path = usePathname() || '/';
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const items = NAVS[user ? user.role : 'guest'];
  const seg = '/' + (path.split('/')[1] || '');
  const label = path === '/' ? (navLabel || LABELS['/']) : (LABELS[seg] || '');
  const isOn = (href) => {
    if (href === '/') return path === '/';
    if (href === '/profile') return path === '/profile' || (path.startsWith('/profile/') && user && path === '/profile/' + user.id);
    return seg === href;
  };
  const logout = async () => {
    const n = user?.name || '';
    try { await api('/api/auth/logout', { method: 'POST' }); } catch {}
    toast('Sampai jumpa' + (n ? ', ' + n.split(' ')[0] : '') + '.', 'ok');
    router.push('/'); router.refresh();
  };
  return (
    <header className="nav" id="nav">
      <div className="nav-box">
        <Link className="brand" href="/" aria-label="The Art Archive, ke beranda">The <em>Art</em> Archive</Link>
        <ul className={'nav-links' + (open ? ' open' : '')} id="navLinks">
          {items.map(([href, t]) => (
            <li key={href}><Link href={href} aria-current={isOn(href) ? 'page' : undefined} onClick={() => setOpen(false)}>{t}</Link></li>
          ))}
        </ul>
        <div className="nav-right">
          <span className="nav-label" id="navLabel" suppressHydrationWarning>{label}</span>
          {user && (
            <span className="me-chip">
              <Link href="/profile" aria-label="Profil saya"><Avatar u={user} /></Link>
              <button type="button" className="nav-out" onClick={logout}>Keluar</button>
            </span>
          )}
          <button type="button" className="nav-toggle" onClick={() => setOpen((o) => !o)} aria-label="Buka menu" aria-expanded={open}><Icon n="menu" /></button>
        </div>
      </div>
    </header>
  );
}
