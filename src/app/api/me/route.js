import { route, json, requireUser, ApiError } from '@/lib/api';
import { query } from '@/lib/db';
import { destroySession } from '@/lib/auth';

// Hapus akun sendiri (admin tidak dapat menghapus akunnya lewat sini).
export const DELETE = route(async () => {
  const u = await requireUser();
  if (u.role === 'admin') throw new ApiError(403, 'Akun admin tidak dapat dihapus.');
  await query('DELETE FROM users WHERE id=$1', [u.id]);
  await destroySession();
  return json({ ok: true });
});
