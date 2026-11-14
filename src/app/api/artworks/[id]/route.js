import { route, json, readJson, requireUser, intParam, text, urlOf, ApiError } from '@/lib/api';
import { query } from '@/lib/db';
import { canManageArtwork } from '@/lib/queries';

async function load(ctx) {
  const id = intParam((await ctx.params).id);
  const a = (await query('SELECT id,owner_id FROM artworks WHERE id=$1', [id])).rows[0];
  if (!a) throw new ApiError(404, 'Karya tidak ditemukan.');
  return a;
}
export const PATCH = route(async (req, ctx) => {
  const u = await requireUser();
  const a = await load(ctx);
  if (!canManageArtwork(u, a.owner_id)) throw new ApiError(403, 'Kamu tidak memiliki izin untuk karya ini.');
  const b = await readJson(req);
  const title = text(b.title, 'Judul karya', 1, 120), painter = text(b.painter, 'Nama seniman', 1, 80), synopsis = text(b.synopsis, 'Sinopsis karya', 1, 1200);
  const category = text(b.category, 'Kategori', 1, 40);
  if (!(await query('SELECT 1 FROM categories WHERE slug=$1', [category])).rowCount) throw new ApiError(400, 'Kategori tidak valid.');
  const studio = urlOf(b.studioUrl, 'Tautan Studio View');
  await query('UPDATE artworks SET title=$2,painter=$3,synopsis=$4,category=$5,studio_url=$6 WHERE id=$1', [a.id, title, painter, synopsis, category, studio]);
  return json({ ok: true });
});
export const DELETE = route(async (req, ctx) => {
  const u = await requireUser();
  const a = await load(ctx);
  if (!canManageArtwork(u, a.owner_id)) throw new ApiError(403, 'Kamu tidak memiliki izin untuk karya ini.');
  await query('DELETE FROM artworks WHERE id=$1', [a.id]);
  return json({ ok: true });
});
