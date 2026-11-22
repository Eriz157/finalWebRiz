import { route, json, readJson, requireUser, intParam, ApiError } from '@/lib/api';
import { query, tx } from '@/lib/db';
import { getChallenge, canJudgeChallenge } from '@/lib/queries';
import { CRITERIA, validateWinners } from '@/lib/scoring';

// Pemenang hanya dapat diumumkan setelah challenge berakhir (validasi waktu di server).
// Format: { winners: { 1: [id, ...], 2: [id], 3: [id] } }. Satu karya satu peringkat;
// beberapa karya hanya boleh berbagi peringkat bila seluruh nilainya sama persis.
export const POST = route(async (req, ctx) => {
  const u = await requireUser(['curator']);
  const ch = await getChallenge(intParam((await ctx.params).id));
  if (!ch) throw new ApiError(404, 'Challenge tidak ditemukan.');
  if (!canJudgeChallenge(u, ch)) throw new ApiError(403, 'Pemenang hanya dapat ditetapkan oleh curator pemilik challenge.');
  if (ch.status !== 'ended') throw new ApiError(400, 'Pemenang hanya dapat diumumkan setelah challenge berakhir.');
  const b = await readJson(req);
  const w = {};
  for (const r of [1, 2, 3]) {
    const raw = b.winners && b.winners[r];
    const arr = Array.isArray(raw) ? raw : raw === undefined || raw === null || raw === '' ? [] : [raw];
    w[r] = arr.map((v) => { const n = Number(v); if (!Number.isInteger(n)) throw new ApiError(400, 'Data pemenang tidak valid.'); return n; });
  }
  const rows = (await query(`SELECT s.id,a.title,${CRITERIA.map((c) => 's.' + c.col + ' AS ' + c.key).join(',')} FROM submissions s JOIN artworks a ON a.id=s.artwork_id WHERE s.challenge_id=$1`, [ch.id])).rows;
  const msg = validateWinners(w, rows);
  if (msg) throw new ApiError(400, msg);
  await tx(async (q) => {
    await q('DELETE FROM winners WHERE challenge_id=$1', [ch.id]);
    for (const r of [1, 2, 3]) for (const sid of w[r]) await q('INSERT INTO winners(challenge_id,rank,submission_id) VALUES($1,$2,$3)', [ch.id, r, sid]);
    await q('UPDATE challenges SET announced_at=now() WHERE id=$1', [ch.id]);
  });
  return json({ ok: true });
});
