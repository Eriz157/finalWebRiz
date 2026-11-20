import { query } from '@/lib/db';
import { intParam } from '@/lib/api';
import { readArtworkImage } from '@/lib/files';

export async function GET(req, ctx) {
  let id;
  try { id = intParam((await ctx.params).id); } catch { return new Response('Not found', { status: 404 }); }
  const r = await query('SELECT image_file,image_mime FROM artworks WHERE id=$1', [id]);
  if (!r.rows[0]) return new Response('Not found', { status: 404 });
  const buf = await readArtworkImage(r.rows[0].image_file);
  if (!buf) return new Response('Berkas gambar tidak ditemukan di folder uploads.', { status: 404 });
  return new Response(buf, { headers: { 'Content-Type': r.rows[0].image_mime, 'Cache-Control': 'public, max-age=31536000, immutable' } });
}
