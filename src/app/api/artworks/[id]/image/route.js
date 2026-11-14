import { query } from '@/lib/db';
import { intParam } from '@/lib/api';

export async function GET(req, ctx) {
  let id;
  try { id = intParam((await ctx.params).id); } catch { return new Response('Not found', { status: 404 }); }
  const r = await query('SELECT image,image_mime FROM artworks WHERE id=$1', [id]);
  if (!r.rows[0]) return new Response('Not found', { status: 404 });
  return new Response(r.rows[0].image, { headers: { 'Content-Type': r.rows[0].image_mime, 'Cache-Control': 'public, max-age=31536000, immutable' } });
}
