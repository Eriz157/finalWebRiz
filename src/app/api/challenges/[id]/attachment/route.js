import { query } from '@/lib/db';
import { intParam } from '@/lib/api';

export async function GET(req, ctx) {
  let id;
  try { id = intParam((await ctx.params).id); } catch { return new Response('Not found', { status: 404 }); }
  const r = await query('SELECT attachment,attachment_name,attachment_mime FROM challenges WHERE id=$1', [id]);
  const c = r.rows[0];
  if (!c || !c.attachment) return new Response('Not found', { status: 404 });
  const safe = String(c.attachment_name).replace(/[^\w.\-]+/g, '_');
  return new Response(c.attachment, { headers: { 'Content-Type': c.attachment_mime, 'Content-Disposition': `inline; filename="${safe}"`, 'Cache-Control': 'private, max-age=300' } });
}
