import { route, json, readJson, requireUser, intParam, text, emailOf, ApiError } from '@/lib/api';
import { query } from '@/lib/db';

// Admin tidak mengubah nama, email, atau kata sandi secara langsung. Ia hanya mengajukan permintaan
// yang baru berlaku setelah pemilik akun menyetujuinya di halaman profilnya.
async function target(admin, id) {
  const t = (await query('SELECT id,name,email,role FROM users WHERE id=$1', [id])).rows[0];
  if (!t) throw new ApiError(404, 'Akun tidak ditemukan.');
  if (t.role === 'admin' || t.id === admin.id) throw new ApiError(403, 'Akun admin tidak dapat diajukan perubahan. Ubah akunmu sendiri lewat halaman Profil.');
  return t;
}

export const POST = route(async (req, ctx) => {
  const admin = await requireUser(['admin']);
  const id = intParam((await ctx.params).id);
  const t = await target(admin, id);
  const b = await readJson(req);
  if (!['profile', 'password_reset'].includes(b.kind)) throw new ApiError(400, 'Jenis permintaan tidak valid.');
  if ((await query("SELECT 1 FROM account_requests WHERE user_id=$1 AND kind=$2 AND status='pending'", [id, b.kind])).rowCount)
    throw new ApiError(409, 'Masih ada permintaan sejenis yang menunggu persetujuan akun ini.');
  if (b.kind === 'password_reset') {
    await query("INSERT INTO account_requests(user_id,admin_id,kind) VALUES($1,$2,'password_reset')", [id, admin.id]);
    return json({ ok: true });
  }
  let name = null, email = null;
  if (b.name !== undefined && String(b.name).trim() !== t.name) name = text(b.name, 'Nama', 2, 60);
  if (b.email !== undefined && String(b.email).trim().toLowerCase() !== t.email.toLowerCase()) {
    email = emailOf(b.email);
    if ((await query('SELECT 1 FROM users WHERE lower(email)=$1 AND id<>$2', [email, id])).rowCount) throw new ApiError(409, 'Email itu sudah dipakai akun lain.');
  }
  if (name === null && email === null) throw new ApiError(400, 'Tidak ada perubahan nama atau email yang diajukan.');
  await query("INSERT INTO account_requests(user_id,admin_id,kind,new_name,new_email) VALUES($1,$2,'profile',$3,$4)", [id, admin.id, name, email]);
  return json({ ok: true });
});

// Batalkan semua permintaan yang masih menunggu untuk akun ini.
export const DELETE = route(async (req, ctx) => {
  await requireUser(['admin']);
  const id = intParam((await ctx.params).id);
  await query("DELETE FROM account_requests WHERE user_id=$1 AND status='pending'", [id]);
  return json({ ok: true });
});
