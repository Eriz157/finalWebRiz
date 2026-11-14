import { route, json, readJson, requireUser, intParam, ApiError } from '@/lib/api';
import { query } from '@/lib/db';

export const POST = route(async (req, ctx) => {
  await requireUser(['admin']);
  const id = intParam((await ctx.params).id);
  const b = await readJson(req);
  const t = (await query('SELECT curator_status FROM users WHERE id=$1', [id])).rows[0];
  if (!t) throw new ApiError(404, 'Akun tidak ditemukan.');
  if (t.curator_status !== 'pending') throw new ApiError(400, 'Akun ini tidak sedang mengajukan Curator.');
  if (b.action === 'approve') await query("UPDATE users SET role='curator', curator_status=NULL WHERE id=$1", [id]);
  else if (b.action === 'reject') await query("UPDATE users SET curator_status='rejected' WHERE id=$1", [id]);
  else throw new ApiError(400, 'Tindakan tidak valid.');
  return json({ ok: true });
});
