import { route, json, requireUser, text, urlOf, fileOf, ApiError } from '@/lib/api';
import { query } from '@/lib/db';
import { saveArtworkImage, removeArtworkImages } from '@/lib/files';

export const POST = route(async (req) => {
  const u = await requireUser(['member']);
  const form = await req.formData();
  const title = text(form.get('title'), 'Judul karya', 1, 120);
  const painter = text(form.get('painter'), 'Nama seniman', 1, 80);
  const synopsis = text(form.get('synopsis'), 'Sinopsis karya', 1, 1200);
  const description = text(form.get('description'), 'Deskripsi karya', 1, 240);
  const category = text(form.get('category'), 'Kategori', 1, 40);
  if (!(await query('SELECT 1 FROM categories WHERE slug=$1', [category])).rowCount) throw new ApiError(400, 'Kategori tidak valid.');
  const studio = urlOf(form.get('studioUrl'), 'Tautan Studio View');
  const img = await fileOf(form, 'image', { types: ['image/jpeg', 'image/png', 'image/webp'], maxBytes: 3 * 1024 * 1024, label: 'Gambar karya', required: true });
  const file = await saveArtworkImage(img.buffer, img.mime);
  try {
    const r = await query(`INSERT INTO artworks(owner_id,title,painter,synopsis,description,category,studio_url,image_file,image_mime)
      VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING id`, [u.id, title, painter, synopsis, description, category, studio, file, img.mime]);
    return json({ id: r.rows[0].id }, 201);
  } catch (e) { await removeArtworkImages([file]); throw e; }
});
