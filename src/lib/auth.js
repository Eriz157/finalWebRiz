import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { query } from './db';

const COOKIE = 'aa_session';
const key = () => new TextEncoder().encode(process.env.AUTH_SECRET || 'dev-only-secret-ganti-di-env-minimal-32-karakter');

export async function createSession(userId) {
  const token = await new SignJWT({ uid: userId })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(key());
  (await cookies()).set(COOKIE, token, {
    httpOnly: true, sameSite: 'lax', secure: process.env.NODE_ENV === 'production', path: '/', maxAge: 60 * 60 * 24 * 7,
  });
}
export async function destroySession() { (await cookies()).delete(COOKIE); }

export function mapUser(r, withEmail = true) {
  return {
    id: r.id, name: r.name, role: r.role, curatorStatus: r.curator_status || null,
    bio: r.bio, avatar: r.avatar, instagram: r.instagram, behance: r.behance, website: r.website,
    createdAt: new Date(r.created_at).toISOString(), ...(withEmail ? { email: r.email } : {}),
  };
}

// Selalu membaca ulang dari database supaya perubahan peran langsung berlaku.
export async function getUser() {
  const token = (await cookies()).get(COOKIE)?.value;
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, key());
    const r = await query('SELECT * FROM users WHERE id=$1', [payload.uid]);
    return r.rows[0] ? mapUser(r.rows[0]) : null;
  } catch { return null; }
}
