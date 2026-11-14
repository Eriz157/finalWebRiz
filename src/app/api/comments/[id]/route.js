import { route, json, requireUser, intParam, ApiError } from '@/lib/api';
import { query } from '@/lib/db';

export const DELETE = route(async (req, ctx) => {
  const u = await requireUser();
  const id = intParam((await ctx.params).id);
  const c = (await query('SELECT user_id FROM comments WHERE id=$1', [id])).rows[0];
  if (!c) throw new ApiError(404, 'Komentar tidak ditemukan.');
  if (c.user_id !== u.id && u.role !== 'admin') throw new ApiError(403, 'Kamu hanya dapat menghapus komentarmu sendiri.');
  await query('DELETE FROM comments WHERE id=$1', [id]);
  return json({ ok: true });
});
