import { route, json, readJson, requireUser, intParam, text, ApiError } from '@/lib/api';
import { query, ensureCommentSchema } from '@/lib/db';
import { getUser } from '@/lib/auth';

const SEL = `SELECT c.id,c.user_id,c.body,c.created_at,c.parent_id,u.name,u.role,u.avatar,
  (SELECT count(*) FROM comment_likes cl WHERE cl.comment_id=c.id) AS likes,
  EXISTS(SELECT 1 FROM comment_likes cl WHERE cl.comment_id=c.id AND cl.user_id=$2) AS liked
  FROM comments c JOIN users u ON u.id=c.user_id`;
const map = (r) => ({ id: r.id, userId: r.user_id, userName: r.name, userRole: r.role, avatar: r.avatar, body: r.body, parentId: r.parent_id, likes: Number(r.likes), liked: r.liked, createdAt: new Date(r.created_at).toISOString() });

export const GET = route(async (req, ctx) => {
  await ensureCommentSchema();
  const id = intParam((await ctx.params).id);
  const me = await getUser();
  const r = await query(`${SEL} WHERE c.artwork_id=$1 ORDER BY c.created_at, c.id`, [id, me ? me.id : 0]);
  return json({ comments: r.rows.map(map) });
});
export const POST = route(async (req, ctx) => {
  await ensureCommentSchema();
  const u = await requireUser();
  const id = intParam((await ctx.params).id);
  const b = await readJson(req);
  const body = text(b.body, 'Komentar', 1, 500);
  if (!(await query('SELECT 1 FROM artworks WHERE id=$1', [id])).rowCount) throw new ApiError(404, 'Karya tidak ditemukan.');
  let parent = null;
  if (b.parentId != null) {
    const p = (await query('SELECT id,parent_id FROM comments WHERE id=$1 AND artwork_id=$2', [intParam(b.parentId), id])).rows[0];
    if (!p) throw new ApiError(404, 'Komentar yang dibalas tidak ditemukan.');
    parent = p.parent_id || p.id; // balasan selalu menempel ke komentar utama (satu tingkat)
  }
  const ins = await query('INSERT INTO comments(artwork_id,user_id,body,parent_id) VALUES($1,$2,$3,$4) RETURNING id', [id, u.id, body, parent]);
  const r = await query(`${SEL} WHERE c.id=$1`, [ins.rows[0].id, u.id]);
  return json({ comment: map(r.rows[0]) }, 201);
});
