import { route, json, requireUser, intParam, ApiError } from '@/lib/api';
import { query } from '@/lib/db';

// Menyalakan / mematikan. Hanya akun yang sudah masuk.
export const POST = route(async (req, ctx) => {
  const u = await requireUser();
  const id = intParam((await ctx.params).id);
  if (!(await query('SELECT 1 FROM artworks WHERE id=$1', [id])).rowCount) throw new ApiError(404, 'Karya tidak ditemukan.');
  const del = await query('DELETE FROM likes WHERE user_id=$1 AND artwork_id=$2', [u.id, id]);
  if (!del.rowCount) await query('INSERT INTO likes(user_id,artwork_id) VALUES($1,$2)', [u.id, id]);
  const c = await query('SELECT count(*) AS n FROM likes WHERE artwork_id=$1', [id]);
  return json({ on: !del.rowCount, count: c.rows[0].n });
});
