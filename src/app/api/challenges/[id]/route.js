import { route, json, requireUser, intParam, ApiError } from '@/lib/api';
import { query, tx } from '@/lib/db';
import { getChallenge, canManageChallenge } from '@/lib/queries';
import { readChallengeForm } from '@/lib/challengeForm';

async function loadManaged(ctx) {
  const u = await requireUser(['curator', 'admin']);
  const id = intParam((await ctx.params).id);
  const ch = await getChallenge(id);
  if (!ch) throw new ApiError(404, 'Challenge tidak ditemukan.');
  if (!canManageChallenge(u, ch)) throw new ApiError(403, 'Kamu hanya dapat mengelola challenge milikmu sendiri.');
  return ch;
}
export const PATCH = route(async (req, ctx) => {
  const ch = await loadManaged(ctx);
  const f = await readChallengeForm(req);
  const datesChanged = ch.start !== f.start || ch.end !== f.end;
  await tx(async (q) => {
    await q(`UPDATE challenges SET title=$2,description=$3,rules=$4,prize=$5,start_date=$6,end_date=$7,
      closed = CASE WHEN $8 THEN false ELSE closed END WHERE id=$1`, [ch.id, f.title, f.description, f.rules, f.prize, f.start, f.end, datesChanged]);
    if (f.att) await q('UPDATE challenges SET attachment=$2,attachment_name=$3,attachment_mime=$4 WHERE id=$1', [ch.id, f.att.buffer, f.att.name, f.att.mime]);
    else if (f.removeAtt) await q('UPDATE challenges SET attachment=NULL,attachment_name=NULL,attachment_mime=NULL WHERE id=$1', [ch.id]);
  });
  // Bila challenge tidak lagi berstatus selesai, pengumuman pemenang dibatalkan.
  const after = await getChallenge(ch.id);
  if (after.status !== 'ended') {
    await query('DELETE FROM winners WHERE challenge_id=$1', [ch.id]);
    await query('UPDATE challenges SET announced_at=NULL WHERE id=$1', [ch.id]);
  }
  return json({ ok: true });
});
export const DELETE = route(async (req, ctx) => {
  const ch = await loadManaged(ctx);
  await query('DELETE FROM challenges WHERE id=$1', [ch.id]);
  return json({ ok: true });
});
