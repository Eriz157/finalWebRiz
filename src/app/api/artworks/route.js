import { route, json, requireUser, text, urlOf, fileOf, ApiError } from '@/lib/api';
import { query } from '@/lib/db';

export const POST = route(async (req) => {
  const u = await requireUser(['member']);
  const form = await req.formData();
  const title = text(form.get('title'), 'Judul karya', 1, 120);
  const painter = text(form.get('painter'), 'Nama seniman', 1, 80);
  const synopsis = text(form.get('synopsis'), 'Sinopsis karya', 1, 1200);
  const category = text(form.get('category'), 'Kategori', 1, 40);
  if (!(await query('SELECT 1 FROM categories WHERE slug=$1', [category])).rowCount) throw new ApiError(400, 'Kategori tidak valid.');
  const studio = urlOf(form.get('studioUrl'), 'Tautan Studio View');
  const img = await fileOf(form, 'image', { types: ['image/jpeg', 'image/png', 'image/webp'], maxBytes: 3 * 1024 * 1024, label: 'Gambar karya', required: true });
  const r = await query(`INSERT INTO artworks(owner_id,title,painter,synopsis,category,studio_url,image,image_mime)
    VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING id`, [u.id, title, painter, synopsis, category, studio, img.buffer, img.mime]);
  return json({ id: r.rows[0].id }, 201);
});
