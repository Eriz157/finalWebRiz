import { route, json, readJson, requireUser, intParam, ApiError } from '@/lib/api';
import { query, tx } from '@/lib/db';

// Pemilik karya memutuskan permintaan ubah karya dari admin: approve / reject, lalu dismiss ("Oke") untuk menutup notifikasi.
const COLS = ['title', 'painter', 'synopsis', 'description', 'category', 'studio_url'];
export const POST = route(async (req, ctx) => {
  const u = await requireUser();
  const id = intParam((await ctx.params).id);
  const r = (await query('SELECT * FROM artwork_requests WHERE id=$1 AND owner_id=$2', [id, u.id])).rows[0];
  if (!r) throw new ApiError(404, 'Permintaan tidak ditemukan.');
  const { action } = await readJson(req);

  if (action === 'approve' || action === 'reject') {
    if (r.status !== 'pending') throw new ApiError(400, 'Permintaan ini sudah diputuskan.');
    if (action === 'reject') {
      await query("UPDATE artwork_requests SET status='rejected', decided_at=now() WHERE id=$1", [id]);
      return json({ ok: true });
    }
    const keys = Object.keys(r.changes).filter((k) => COLS.includes(k));
    if (keys.includes('category') && !(await query('SELECT 1 FROM categories WHERE slug=$1', [r.changes.category.to])).rowCount)
      throw new ApiError(409, 'Kategori yang diajukan sudah tidak tersedia. Tolak permintaan ini.');
    await tx(async (q) => {
      // Nama kolom hanya dari daftar COLS (tidak berasal dari input pengguna).
      await q(`UPDATE artworks SET ${keys.map((k, i) => `${k}=$${i + 2}`).join(',')} WHERE id=$1`, [r.artwork_id, ...keys.map((k) => r.changes[k].to)]);
      await q("UPDATE artwork_requests SET status='approved', decided_at=now() WHERE id=$1", [id]);
    });
    return json({ ok: true });
  }
  if (action === 'dismiss') {
    if (r.status !== 'approved') throw new ApiError(400, 'Tindakan tidak tersedia untuk permintaan ini.');
    await query("UPDATE artwork_requests SET status='dismissed' WHERE id=$1", [id]);
    return json({ ok: true });
  }
  throw new ApiError(400, 'Tindakan tidak valid.');
});
