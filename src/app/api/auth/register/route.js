import bcrypt from 'bcryptjs';
import { route, json, readJson, text, emailOf, ApiError } from '@/lib/api';
import { query } from '@/lib/db';
import { createSession, mapUser } from '@/lib/auth';

export const POST = route(async (req) => {
  const b = await readJson(req);
  const name = text(b.name, 'Nama', 2, 60);
  const email = emailOf(b.email);
  const pw = typeof b.password === 'string' ? b.password : '';
  if (pw.length < 6 || pw.length > 72) throw new ApiError(400, 'Kata sandi minimal 6 karakter.');
  const want = ['public', 'member', 'curator'].includes(b.role) ? b.role : 'public';
  const role = want === 'member' ? 'member' : 'public';
  const status = want === 'curator' ? 'pending' : null;
  const dup = await query('SELECT 1 FROM users WHERE lower(email)=$1', [email]);
  if (dup.rowCount) throw new ApiError(409, 'Email ini sudah terdaftar. Silakan masuk.');
  const r = await query('INSERT INTO users(name,email,password_hash,role,curator_status) VALUES($1,$2,$3,$4,$5) RETURNING *',
    [name, email, await bcrypt.hash(pw, 10), role, status]);
  await createSession(r.rows[0].id);
  return json({ user: mapUser(r.rows[0]) }, 201);
});
