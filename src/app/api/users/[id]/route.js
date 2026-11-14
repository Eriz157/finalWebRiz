import bcrypt from 'bcryptjs';
import { route, json, readJson, requireUser, intParam, text, emailOf, ApiError } from '@/lib/api';
import { query } from '@/lib/db';

export const PATCH = route(async (req, ctx) => {
  const admin = await requireUser(['admin']);
  const id = intParam((await ctx.params).id);
  const t = (await query('SELECT * FROM users WHERE id=$1', [id])).rows[0];
  if (!t) throw new ApiError(404, 'Akun tidak ditemukan.');
  const b = await readJson(req);
  const sets = [], vals = [id];
  const add = (col, v) => { vals.push(v); sets.push(`${col}=$${vals.length}`); };
  if (b.name !== undefined) add('name', text(b.name, 'Nama', 2, 60));
  if (b.email !== undefined) {
    const e = emailOf(b.email);
    if ((await query('SELECT 1 FROM users WHERE lower(email)=$1 AND id<>$2', [e, id])).rowCount) throw new ApiError(409, 'Email itu sudah dipakai akun lain.');
    add('email', e);
  }
  if (b.password) {
    if (typeof b.password !== 'string' || b.password.length < 6 || b.password.length > 72) throw new ApiError(400, 'Kata sandi baru minimal 6 karakter.');
    add('password_hash', await bcrypt.hash(b.password, 10));
  }
  if (b.role !== undefined) {
    if (t.role === 'admin') throw new ApiError(403, 'Peran admin tidak dapat diubah.');
    if (!['public', 'member', 'curator'].includes(b.role)) throw new ApiError(400, 'Peran tidak valid.');
    add('role', b.role);
    if (b.role === 'curator') sets.push('curator_status=NULL');
  }
  if (t.role === 'admin' && admin.id !== id) throw new ApiError(403, 'Akun admin lain tidak dapat diubah.');
  if (!sets.length) return json({ ok: true });
  await query(`UPDATE users SET ${sets.join(',')} WHERE id=$1`, vals);
  return json({ ok: true });
});

export const DELETE = route(async (req, ctx) => {
  const admin = await requireUser(['admin']);
  const id = intParam((await ctx.params).id);
  const t = (await query('SELECT role FROM users WHERE id=$1', [id])).rows[0];
  if (!t) throw new ApiError(404, 'Akun tidak ditemukan.');
  if (t.role === 'admin' || id === admin.id) throw new ApiError(403, 'Akun admin tidak dapat dihapus.');
  await query('DELETE FROM users WHERE id=$1', [id]);
  return json({ ok: true });
});
