import bcrypt from 'bcryptjs';
import { route, json, readJson, ApiError } from '@/lib/api';
import { query } from '@/lib/db';
import { createSession, mapUser } from '@/lib/auth';

export const POST = route(async (req) => {
  const b = await readJson(req);
  const email = typeof b.email === 'string' ? b.email.trim().toLowerCase() : '';
  const pw = typeof b.password === 'string' ? b.password : '';
  if (!email || !pw) throw new ApiError(400, 'Isi email dan kata sandi.');
  const r = await query('SELECT * FROM users WHERE lower(email)=$1', [email]);
  const u = r.rows[0];
  if (!u || !(await bcrypt.compare(pw, u.password_hash))) throw new ApiError(401, 'Email atau kata sandi tidak cocok.');
  await createSession(u.id);
  return json({ user: mapUser(u) });
});
