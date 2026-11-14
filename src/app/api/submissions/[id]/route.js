import { route, json, readJson, requireUser, intParam, text, ApiError } from '@/lib/api';
import { query } from '@/lib/db';
import { getChallenge, canManageChallenge } from '@/lib/queries';

// Penilaian: hanya curator pemilik challenge (atau admin).
export const PATCH = route(async (req, ctx) => {
  const u = await requireUser(['curator', 'admin']);
  const id = intParam((await ctx.params).id);
  const s = (await query('SELECT id,challenge_id FROM submissions WHERE id=$1', [id])).rows[0];
  if (!s) throw new ApiError(404, 'Submisi tidak ditemukan.');
  const ch = await getChallenge(s.challenge_id);
  if (!canManageChallenge(u, ch)) throw new ApiError(403, 'Kamu hanya dapat menilai challenge milikmu sendiri.');
  const b = await readJson(req);
  const score = Number(b.score);
  if (b.score === '' || b.score === null || !Number.isInteger(score) || score < 0 || score > 100) throw new ApiError(400, 'Nilai harus bilangan bulat 0–100.');
  const note = text(b.note, 'Catatan', 0, 200, { optional: true });
  await query('UPDATE submissions SET score=$2, note=$3 WHERE id=$1', [id, score, note]);
  return json({ ok: true });
});
