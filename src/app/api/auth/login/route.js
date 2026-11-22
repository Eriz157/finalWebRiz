import bcrypt from 'bcryptjs';
import { route, json, readJson, ApiError } from '@/lib/api';
import { query } from '@/lib/db';
import { createSession, mapUser } from '@/lib/auth';
import { isSuspended, suspendedMessage, remainingMs } from '@/lib/suspension';

const MAX_TRIES = 3, LOCK_SECONDS = 60;

export const POST = route(async (req) => {
  const b = await readJson(req);
  const email = typeof b.email === 'string' ? b.email.trim().toLowerCase() : '';
  const pw = typeof b.password === 'string' ? b.password : '';
  if (!email || !pw) throw new ApiError(400, 'Isi email dan kata sandi.');
  const u = (await query('SELECT * FROM users WHERE lower(email)=$1', [email])).rows[0];
  if (!u) throw new ApiError(401, 'Email atau kata sandi tidak cocok.');

  // Diblokir sementara setelah 3x salah kata sandi.
  if (u.locked_until && new Date(u.locked_until).getTime() > Date.now()) {
    const ms = new Date(u.locked_until).getTime() - Date.now();
    throw new ApiError(429, `Akun diblokir sementara karena salah kata sandi ${MAX_TRIES} kali. Coba lagi dalam ${Math.ceil(ms / 1000)} detik.`, { lockMs: ms });
  }
  if (!(await bcrypt.compare(pw, u.password_hash))) {
    const n = (u.failed_logins || 0) + 1;
    if (n >= MAX_TRIES) {
      await query(`UPDATE users SET failed_logins=0, locked_until=now() + ($2 || ' seconds')::interval WHERE id=$1`, [u.id, String(LOCK_SECONDS)]);
      throw new ApiError(429, `Kata sandi salah ${MAX_TRIES} kali. Akun diblokir selama ${LOCK_SECONDS} detik.`, { lockMs: LOCK_SECONDS * 1000 });
    }
    await query('UPDATE users SET failed_logins=$2 WHERE id=$1', [u.id, n]);
    throw new ApiError(401, `Email atau kata sandi tidak cocok. Sisa percobaan: ${MAX_TRIES - n}.`);
  }
  await query('UPDATE users SET failed_logins=0, locked_until=NULL WHERE id=$1', [u.id]);
  if (isSuspended(u)) throw new ApiError(403, suspendedMessage(u), { suspended: true, suspendedMs: remainingMs(u) });
  await createSession(u.id);
  return json({ user: mapUser(u) });
});
