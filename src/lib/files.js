import fs from 'fs/promises';
import { openSync, readSync, closeSync } from 'fs';
import path from 'path';
import crypto from 'crypto';

// Gambar karya disimpan sebagai berkas di folder uploads/artworks (atau UPLOAD_DIR bila diatur).
// Database hanya menyimpan nama berkasnya (kolom artworks.image_file).
const EXT = { 'image/jpeg': '.jpg', 'image/png': '.png', 'image/webp': '.webp' };
const uploadRoot = () => (process.env.UPLOAD_DIR ? path.resolve(process.env.UPLOAD_DIR) : path.join(process.cwd(), 'uploads'));
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

// Lebar x tinggi gambar dibaca dari header berkas (JPEG/PNG/WebP) lalu di-cache. Dipakai agar tata letak
// sudah tahu rasio gambar sebelum gambarnya selesai dimuat (tidak ada lompatan ukuran).
const dims = new Map();
function parseSize(b) {
  if (b[0] === 0x89 && b[1] === 0x50) return [b.readUInt32BE(16), b.readUInt32BE(20)];                       // PNG
  if (b.toString('ascii', 0, 4) === 'RIFF' && b.toString('ascii', 8, 12) === 'WEBP') {                        // WebP
    const k = b.toString('ascii', 12, 16);
    if (k === 'VP8 ') return [b.readUInt16LE(26) & 0x3fff, b.readUInt16LE(28) & 0x3fff];
    if (k === 'VP8L') { const v = b.readUInt32LE(21); return [(v & 0x3fff) + 1, ((v >> 14) & 0x3fff) + 1]; }
    if (k === 'VP8X') return [b.readUIntLE(24, 3) + 1, b.readUIntLE(27, 3) + 1];
  }
  if (b[0] === 0xff && b[1] === 0xd8) {                                                                       // JPEG
    for (let i = 2; i + 9 < b.length;) {
      if (b[i] !== 0xff) { i++; continue; }
      const m = b[i + 1];
      if (m >= 0xc0 && m <= 0xcf && m !== 0xc4 && m !== 0xc8 && m !== 0xcc) return [b.readUInt16BE(i + 7), b.readUInt16BE(i + 5)];
      i += 2 + b.readUInt16BE(i + 2);
    }
  }
  return null;
}
export function imageSize(name) {
  if (!safe(name)) return null;
  if (dims.has(name)) return dims.get(name);
  let r = null, fd;
  try {
    fd = openSync(path.join(artDir(), name), 'r');
    const b = Buffer.alloc(262144); const n = readSync(fd, b, 0, b.length, 0);
    r = parseSize(b.subarray(0, n));
  } catch { /* berkas hilang atau format tak dikenal */ }
  finally { if (fd !== undefined) closeSync(fd); }
  if (r) dims.set(name, r);
  return r;
}
