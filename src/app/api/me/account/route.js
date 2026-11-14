import bcrypt from 'bcryptjs';
import { route, json, readJson, requireUser, emailOf, ApiError } from '@/lib/api';
import { query } from '@/lib/db';

export const PATCH = route(async (req) => {
  const u = await requireUser();
  const b = await readJson(req);
  const email = emailOf(b.email);
  const dup = await query('SELECT 1 FROM users WHERE lower(email)=$1 AND id<>$2', [email, u.id]);
  if (dup.rowCount) throw new ApiError(409, 'Email itu sudah dipakai akun lain.');
  const np = typeof b.newPassword === 'string' ? b.newPassword : '';
  if (np) {
    const cur = await query('SELECT password_hash FROM users WHERE id=$1', [u.id]);
    if (!(await bcrypt.compare(typeof b.currentPassword === 'string' ? b.currentPassword : '', cur.rows[0].password_hash))) throw new ApiError(400, 'Kata sandi saat ini tidak cocok.');
    if (np.length < 6 || np.length > 72) throw new ApiError(400, 'Kata sandi baru minimal 6 karakter.');
    await query('UPDATE users SET email=$2, password_hash=$3 WHERE id=$1', [u.id, email, await bcrypt.hash(np, 10)]);
  } else await query('UPDATE users SET email=$2 WHERE id=$1', [u.id, email]);
  return json({ ok: true });
});
