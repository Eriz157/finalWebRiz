import { redirect } from 'next/navigation';
import { getUser } from './auth';

// Pagar halaman di sisi server: tamu ke /login, peran yang salah ke beranda.
export async function requireRole(roles) {
  const u = await getUser();
  if (!u) redirect('/login');
  if (roles && !roles.includes(u.role)) redirect('/');
  return u;
}
