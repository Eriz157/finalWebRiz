import { route, json, readJson, requireUser, intParam, text, ApiError } from '@/lib/api';
import { query } from '@/lib/db';
import { getChallenge, canJudgeChallenge } from '@/lib/queries';
import { CRITERIA, validPart, totalOf } from '@/lib/scoring';

// Penilaian 4 kriteria (1–100): hanya curator pemilik challenge (admin tidak dapat menilai).
// Total = kreativitas 30% + teknik 25% + orisinalitas 25% + estetika 20%.
export const PATCH = route(async (req, ctx) => {
  const u = await requireUser(['curator']);
  const id = intParam((await ctx.params).id);
  const s = (await query('SELECT id,challenge_id FROM submissions WHERE id=$1', [id])).rows[0];
  if (!s) throw new ApiError(404, 'Submisi tidak ditemukan.');
  const ch = await getChallenge(s.challenge_id);
  if (!canJudgeChallenge(u, ch)) throw new ApiError(403, 'Kamu hanya dapat menilai challenge milikmu sendiri.');
  const b = await readJson(req);
  const v = {};
  for (const c of CRITERIA) {
    const raw = b[c.key];
    const n = typeof raw === 'string' && raw.trim() === '' ? NaN : Number(raw);
    if (raw === null || raw === undefined || !validPart(n)) throw new ApiError(400, `Nilai ${c.label.toLowerCase()} harus bilangan bulat 1–100.`);
    v[c.key] = n;
  }
  const note = text(b.note, 'Catatan', 0, 200, { optional: true });
  await query(
    'UPDATE submissions SET score_creativity=$2, score_technique=$3, score_originality=$4, score_aesthetics=$5, score=$6, note=$7 WHERE id=$1',
    [id, v.creativity, v.technique, v.originality, v.aesthetics, totalOf(v), note]);
  return json({ ok: true, score: totalOf(v) });
});
