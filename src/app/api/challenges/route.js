import { route, json, requireUser } from '@/lib/api';
import { query } from '@/lib/db';
import { readChallengeForm } from '@/lib/challengeForm';

export const POST = route(async (req) => {
  const u = await requireUser(['curator', 'admin']);
  const f = await readChallengeForm(req);
  const r = await query(`INSERT INTO challenges(owner_id,title,description,rules,prize,start_date,end_date,attachment,attachment_name,attachment_mime)
    VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING id`,
    [u.id, f.title, f.description, f.rules, f.prize, f.start, f.end, f.att?.buffer ?? null, f.att?.name ?? null, f.att?.mime ?? null]);
  return json({ id: r.rows[0].id }, 201);
});
