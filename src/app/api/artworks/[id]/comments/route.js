import { route, json, readJson, requireUser, intParam, text, ApiError } from '@/lib/api';
import { query } from '@/lib/db';

const SEL = `SELECT c.id,c.user_id,c.body,c.created_at,u.name,u.role,u.avatar FROM comments c JOIN users u ON u.id=c.user_id`;
const map = (r) => ({ id: r.id, userId: r.user_id, userName: r.name, userRole: r.role, avatar: r.avatar, body: r.body, createdAt: new Date(r.created_at).toISOString() });

export const GET = route(async (req, ctx) => {
  const id = intParam((await ctx.params).id);
  const r = await query(`${SEL} WHERE c.artwork_id=$1 ORDER BY c.created_at, c.id`, [id]);
  return json({ comments: r.rows.map(map) });
});
export const POST = route(async (req, ctx) => {
  const u = await requireUser();
  const id = intParam((await ctx.params).id);
  const b = await readJson(req);
  const body = text(b.body, 'Komentar', 1, 500);
  if (!(await query('SELECT 1 FROM artworks WHERE id=$1', [id])).rowCount) throw new ApiError(404, 'Karya tidak ditemukan.');
  const ins = await query('INSERT INTO comments(artwork_id,user_id,body) VALUES($1,$2,$3) RETURNING id', [id, u.id, body]);
  const r = await query(`${SEL} WHERE c.id=$1`, [ins.rows[0].id]);
  return json({ comment: map(r.rows[0]) }, 201);
});
