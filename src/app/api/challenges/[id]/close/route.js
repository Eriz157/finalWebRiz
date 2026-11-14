import { route, json, requireUser, intParam, ApiError } from '@/lib/api';
import { query } from '@/lib/db';
import { getChallenge, canManageChallenge } from '@/lib/queries';

export const POST = route(async (req, ctx) => {
  const u = await requireUser(['curator', 'admin']);
  const ch = await getChallenge(intParam((await ctx.params).id));
  if (!ch) throw new ApiError(404, 'Challenge tidak ditemukan.');
  if (!canManageChallenge(u, ch)) throw new ApiError(403, 'Kamu hanya dapat mengelola challenge milikmu sendiri.');
  if (ch.status !== 'active') throw new ApiError(400, 'Hanya challenge yang sedang aktif yang dapat diakhiri.');
  await query('UPDATE challenges SET closed=true WHERE id=$1', [ch.id]);
  return json({ ok: true });
});
