import { getUser } from './auth';

export class ApiError extends Error {
  constructor(status, message) { super(message); this.status = status; }
}
export const json = (data, status = 200) => Response.json(data, { status });

// Membungkus handler agar galat dikembalikan sebagai JSON { error }.
export function route(fn) {
  return async (req, ctx) => {
    try { return await fn(req, ctx); }
    catch (e) {
      if (e instanceof ApiError) return json({ error: e.message }, e.status);
      if (e && e.code === '23505') return json({ error: 'Data tersebut sudah ada.' }, 409);
      console.error(e);
      return json({ error: 'Terjadi kesalahan pada server.' }, 500);
    }
  };
}
export async function requireUser(roles) {
  const u = await getUser();
  if (!u) throw new ApiError(401, 'Silakan masuk terlebih dahulu.');
  if (roles && !roles.includes(u.role)) throw new ApiError(403, 'Kamu tidak memiliki izin untuk tindakan ini.');
  return u;
}
export async function readJson(req) {
  try { return await req.json(); } catch { throw new ApiError(400, 'Permintaan tidak valid.'); }
}
export function intParam(v) {
  const n = Number(v);
  if (!Number.isInteger(n) || n <= 0) throw new ApiError(404, 'Data tidak ditemukan.');
  return n;
}

/* ---------- validasi ---------- */
export function text(v, label, min, max, { optional = false } = {}) {
  const s = typeof v === 'string' ? v.trim() : '';
  if (!s && optional) return '';
  if (s.length < min) throw new ApiError(400, min <= 1 ? `${label} wajib diisi.` : `${label} minimal ${min} karakter.`);
  if (s.length > max) throw new ApiError(400, `${label} maksimal ${max} karakter.`);
  return s;
}
export function emailOf(v) {
  const s = typeof v === 'string' ? v.trim().toLowerCase() : '';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s) || s.length > 190) throw new ApiError(400, 'Format email belum benar.');
  return s;
}
export function urlOf(v, label, { optional = true } = {}) {
  const s = typeof v === 'string' ? v.trim() : '';
  if (!s) { if (optional) return ''; throw new ApiError(400, `${label} wajib diisi.`); }
  try {
    const u = new URL(s);
    if (u.protocol !== 'http:' && u.protocol !== 'https:') throw 0;
    return u.href;
  } catch { throw new ApiError(400, `${label} harus berupa tautan yang diawali http:// atau https://`); }
}
export function dateOf(v, label) {
  if (typeof v !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(v) || isNaN(Date.parse(v))) throw new ApiError(400, `${label} belum benar.`);
  return v;
}
export async function fileOf(form, name, { types, maxBytes, label, required = false }) {
  const f = form.get(name);
  if (!f || typeof f === 'string' || !f.size) {
    if (required) throw new ApiError(400, `${label} wajib dipilih.`);
    return null;
  }
  if (!types.includes(f.type)) throw new ApiError(400, `${label}: jenis file tidak didukung.`);
  if (f.size > maxBytes) throw new ApiError(400, `${label}: ukuran file terlalu besar.`);
  return { buffer: Buffer.from(await f.arrayBuffer()), mime: f.type, name: f.name || name };
}
