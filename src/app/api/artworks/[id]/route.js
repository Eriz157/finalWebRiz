import { route, json, readJson, requireUser, intParam, text, urlOf, ApiError } from '@/lib/api';
import { query } from '@/lib/db';
import { canManageArtwork } from '@/lib/queries';
import { removeArtworkImages } from '@/lib/files';

async function load(ctx) {
  const id = intParam((await ctx.params).id);
  const a = (await query('SELECT id,owner_id,title,painter,synopsis,description,category,studio_url FROM artworks WHERE id=$1', [id])).rows[0];
  if (!a) throw new ApiError(404, 'Karya tidak ditemukan.');
  return a;
}
// Pemilik karya mengubah langsung. Admin TIDAK dapat mengubah karya secara langsung: ia hanya mengajukan
// permintaan yang baru berlaku setelah pemilik karya menyetujuinya di halaman profilnya.
export const PATCH = route(async (req, ctx) => {
  const u = await requireUser();
  const a = await load(ctx);
  const isOwner = u.role === 'member' && a.owner_id === u.id;
  if (!isOwner && u.role !== 'admin') throw new ApiError(403, 'Kamu tidak memiliki izin untuk karya ini.');
  const b = await readJson(req);
  const title = text(b.title, 'Judul karya', 1, 120), painter = text(b.painter, 'Nama seniman', 1, 80), synopsis = text(b.synopsis, 'Sinopsis karya', 1, 1200);
  const description = text(b.description, 'Deskripsi karya', 1, 240);
  const category = text(b.category, 'Kategori', 1, 40);
  if (!(await query('SELECT 1 FROM categories WHERE slug=$1', [category])).rowCount) throw new ApiError(400, 'Kategori tidak valid.');
  const studio = urlOf(b.studioUrl, 'Tautan Studio View');
  if (isOwner) {
    await query('UPDATE artworks SET title=$2,painter=$3,synopsis=$4,description=$7,category=$5,studio_url=$6 WHERE id=$1', [a.id, title, painter, synopsis, category, studio, description]);
    return json({ ok: true });
  }
  const next = { title, painter, synopsis, description, category, studio_url: studio };
  const changes = {};
  for (const k of Object.keys(next)) if (next[k] !== a[k]) changes[k] = { from: a[k], to: next[k] };
  if (!Object.keys(changes).length) throw new ApiError(400, 'Tidak ada perubahan yang diajukan.');
  if ((await query("SELECT 1 FROM artwork_requests WHERE artwork_id=$1 AND status='pending'", [a.id])).rowCount)
    throw new ApiError(409, 'Masih ada permintaan perubahan untuk karya ini yang menunggu persetujuan pemilik.');
  await query('INSERT INTO artwork_requests(artwork_id,owner_id,admin_id,changes) VALUES($1,$2,$3,$4)', [a.id, a.owner_id, u.id, JSON.stringify(changes)]);
  return json({ ok: true, pending: true });
});
export const DELETE = route(async (req, ctx) => {
  const u = await requireUser();
  const a = await load(ctx);
  if (!canManageArtwork(u, a.owner_id)) throw new ApiError(403, 'Kamu tidak memiliki izin untuk karya ini.');
  const f = (await query('DELETE FROM artworks WHERE id=$1 RETURNING image_file', [a.id])).rows[0];
  if (f) await removeArtworkImages([f.image_file]);
  return json({ ok: true });
});
