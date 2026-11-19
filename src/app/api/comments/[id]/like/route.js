import { route, json, requireUser, intParam, ApiError } from '@/lib/api';
import { query, ensureCommentSchema } from '@/lib/db';

export const POST = route(async (req, ctx) => {
  await ensureCommentSchema();
  const u = await requireUser();
  const id = intParam((await ctx.params).id);
  if (!(await query('SELECT 1 FROM comments WHERE id=$1', [id])).rowCount) throw new ApiError(404, 'Komentar tidak ditemukan.');
  const del = await query('DELETE FROM comment_likes WHERE user_id=$1 AND comment_id=$2', [u.id, id]);
  if (!del.rowCount) await query('INSERT INTO comment_likes(user_id,comment_id) VALUES($1,$2)', [u.id, id]);
  const c = await query('SELECT count(*) AS n FROM comment_likes WHERE comment_id=$1', [id]);
  return json({ liked: !del.rowCount, likes: Number(c.rows[0].n) });
});
