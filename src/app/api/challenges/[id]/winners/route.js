import { route, json, readJson, requireUser, intParam, ApiError } from '@/lib/api';
import { query, tx } from '@/lib/db';
import { getChallenge, canManageChallenge } from '@/lib/queries';

// Pemenang hanya dapat diumumkan setelah challenge berakhir (validasi waktu di server).
export const POST = route(async (req, ctx) => {
  const u = await requireUser(['curator', 'admin']);
  const ch = await getChallenge(intParam((await ctx.params).id));
  if (!ch) throw new ApiError(404, 'Challenge tidak ditemukan.');
  if (!canManageChallenge(u, ch)) throw new ApiError(403, 'Kamu hanya dapat mengelola challenge milikmu sendiri.');
  if (ch.status !== 'ended') throw new ApiError(400, 'Pemenang hanya dapat diumumkan setelah challenge berakhir.');
  const b = await readJson(req);
  const w = {};
  for (const r of [1, 2, 3]) {
    const v = b.winners && b.winners[r];
    if (v !== undefined && v !== null && v !== '') {
      const n = Number(v);
      if (!Number.isInteger(n)) throw new ApiError(400, 'Data pemenang tidak valid.');
      w[r] = n;
    }
  }
  if (!w[1]) throw new ApiError(400, 'Pilih setidaknya Juara 1.');
  if (w[3] && !w[2]) throw new ApiError(400, 'Juara 3 tidak dapat diisi tanpa Juara 2.');
  const ids = Object.values(w);
  if (new Set(ids).size !== ids.length) throw new ApiError(400, 'Satu karya hanya boleh mendapat satu peringkat.');
  const ok = await query('SELECT id FROM submissions WHERE challenge_id=$1 AND id = ANY($2::int[])', [ch.id, ids]);
  if (ok.rowCount !== ids.length) throw new ApiError(400, 'Ada submisi yang bukan bagian dari challenge ini.');
  await tx(async (q) => {
    await q('DELETE FROM winners WHERE challenge_id=$1', [ch.id]);
    for (const [rank, sid] of Object.entries(w)) await q('INSERT INTO winners(challenge_id,rank,submission_id) VALUES($1,$2,$3)', [ch.id, Number(rank), sid]);
    await q('UPDATE challenges SET announced_at=now() WHERE id=$1', [ch.id]);
  });
  return json({ ok: true });
});
