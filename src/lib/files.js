import fs from 'fs/promises';
import path from 'path';
import crypto from 'crypto';

// Gambar karya disimpan sebagai berkas di folder uploads/artworks (atau UPLOAD_DIR bila diatur).
// Database hanya menyimpan nama berkasnya (kolom artworks.image_file).
const EXT = { 'image/jpeg': '.jpg', 'image/png': '.png', 'image/webp': '.webp' };
export const uploadRoot = () => (process.env.UPLOAD_DIR ? path.resolve(process.env.UPLOAD_DIR) : path.join(process.cwd(), 'uploads'));
const artDir = () => path.join(uploadRoot(), 'artworks');
const safe = (n) => typeof n === 'string' && /^[A-Za-z0-9._-]+$/.test(n) && !n.includes('..');

export async function saveArtworkImage(buffer, mime) {
  await fs.mkdir(artDir(), { recursive: true });
  const name = crypto.randomUUID() + (EXT[mime] || '.jpg');
  await fs.writeFile(path.join(artDir(), name), buffer);
  return name;
}
export async function readArtworkImage(name) {
  if (!safe(name)) return null;
  try { return await fs.readFile(path.join(artDir(), name)); } catch { return null; }
}
// Berkas contoh ("demo-*") tidak pernah dihapus karena dipakai ulang oleh data demo.
export async function removeArtworkImages(names) {
  for (const n of names) if (safe(n) && !n.startsWith('demo-')) await fs.unlink(path.join(artDir(), n)).catch(() => {});
}
