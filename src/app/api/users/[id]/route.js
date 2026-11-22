import { route, json, readJson, requireUser, intParam, ApiError } from '@/lib/api';
import { verifyAction } from '@/lib/adminActions';
import { removeArtworkImages } from '@/lib/files';
import { query } from '@/lib/db';

// Admin tidak lagi mengubah nama, email, kata sandi, atau peran secara langsung.
// Gunakan POST /api/users/[id]/requests (butuh persetujuan pemilik akun) dan /api/users/[id]/curator.
export const PATCH = route(async () => {
  await requireUser(['admin']);
  throw new ApiError(403, 'Admin tidak dapat mengubah akun secara langsung. Ajukan permintaan agar disetujui pemilik akun.');
});

// Hapus permanen: butuh kata sandi hapus akun + OTP (lihat src/lib/adminActions.js).
export const DELETE = route(async (req, ctx) => {
  const admin = await requireUser(['admin']);
  verifyAction('hardDelete', await readJson(req));
  const id = intParam((await ctx.params).id);
  const t = (await query('SELECT role FROM users WHERE id=$1', [id])).rows[0];
  if (!t) throw new ApiError(404, 'Akun tidak ditemukan.');
  if (t.role === 'admin' || id === admin.id) throw new ApiError(403, 'Akun admin tidak dapat dihapus.');
  const files = (await query('SELECT image_file FROM artworks WHERE owner_id=$1', [id])).rows.map((r) => r.image_file);
  await query('DELETE FROM users WHERE id=$1', [id]);
  await removeArtworkImages(files);
  return json({ ok: true });
});
