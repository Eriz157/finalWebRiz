import { route, json, readJson, requireUser, intParam, ApiError } from '@/lib/api';
import { query } from '@/lib/db';
import { getChallenge } from '@/lib/queries';

export const POST = route(async (req, ctx) => {
  const u = await requireUser(['member']);
  const ch = await getChallenge(intParam((await ctx.params).id));
  if (!ch) throw new ApiError(404, 'Challenge tidak ditemukan.');
  if (ch.status !== 'active') throw new ApiError(400, ch.status === 'soon' ? 'Challenge ini belum dimulai.' : 'Challenge ini sudah berakhir.');
  const b = await readJson(req);
  const art = (await query('SELECT id,owner_id FROM artworks WHERE id=$1', [Number(b.artworkId)])).rows[0];
  if (!art || art.owner_id !== u.id) throw new ApiError(400, 'Pilih salah satu karyamu.');
  try {
    await query('INSERT INTO submissions(challenge_id,artwork_id,user_id) VALUES($1,$2,$3)', [ch.id, art.id, u.id]);
  } catch (e) {
    if (e.code === '23505') throw new ApiError(409, 'Kamu sudah mengikuti challenge ini.');
    throw e;
  }
  return json({ ok: true }, 201);
});
export const DELETE = route(async (req, ctx) => {
  const u = await requireUser(['member']);
  const ch = await getChallenge(intParam((await ctx.params).id));
  if (!ch) throw new ApiError(404, 'Challenge tidak ditemukan.');
  if (ch.status === 'ended') throw new ApiError(400, 'Challenge sudah berakhir. Submisi tidak dapat ditarik.');
  await query('DELETE FROM submissions WHERE challenge_id=$1 AND user_id=$2', [ch.id, u.id]);
  return json({ ok: true });
});
