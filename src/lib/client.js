'use client';
// Pembantu sisi browser: panggilan API dan pengecilan gambar sebelum diunggah.
export async function api(path, { method = 'GET', json, form } = {}) {
  const res = await fetch(path, {
    method,
    headers: json ? { 'content-type': 'application/json' } : undefined,
    body: json ? JSON.stringify(json) : form,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || 'Terjadi kesalahan. Coba lagi.');
  return data;
}

function loadImg(src) {
  return new Promise((res, rej) => { const i = new Image(); i.onload = () => res(i); i.onerror = () => rej(new Error('Gambar tidak dapat dibaca.')); i.src = src; });
}
const toDataUrl = (f) => new Promise((res, rej) => { const r = new FileReader(); r.onload = () => res(r.result); r.onerror = rej; r.readAsDataURL(f); });

// Mengecilkan gambar (JPEG) agar unggahan ringan. Mengembalikan Blob.
export async function shrinkToBlob(file, { maxDim = 1400, quality = 0.85, limit = 900 * 1024 } = {}) {
  const im = await loadImg(await toDataUrl(file));
  let dim = maxDim, q = quality;
  for (let i = 0; i < 6; i++) {
    const k = Math.min(1, dim / Math.max(im.naturalWidth, im.naturalHeight));
    const cv = document.createElement('canvas');
    cv.width = Math.max(1, Math.round(im.naturalWidth * k)); cv.height = Math.max(1, Math.round(im.naturalHeight * k));
    const cx = cv.getContext('2d'); cx.fillStyle = '#fff'; cx.fillRect(0, 0, cv.width, cv.height); cx.drawImage(im, 0, 0, cv.width, cv.height);
    const blob = await new Promise((r) => cv.toBlob(r, 'image/jpeg', q));
    if (blob && blob.size <= limit) return blob;
    dim = Math.round(dim * 0.8); q = Math.max(0.6, q - 0.06);
  }
  throw new Error('Gambar terlalu besar. Coba gambar lain.');
}
// Untuk foto profil: hasil berupa data URL kecil.
export async function avatarDataUrl(file) {
  const im = await loadImg(await toDataUrl(file));
  for (const [dim, q] of [[320, 0.8], [256, 0.7], [200, 0.6]]) {
    const k = Math.min(1, dim / Math.max(im.naturalWidth, im.naturalHeight));
    const cv = document.createElement('canvas');
    cv.width = Math.max(1, Math.round(im.naturalWidth * k)); cv.height = Math.max(1, Math.round(im.naturalHeight * k));
    const cx = cv.getContext('2d'); cx.fillStyle = '#fff'; cx.fillRect(0, 0, cv.width, cv.height); cx.drawImage(im, 0, 0, cv.width, cv.height);
    const u = cv.toDataURL('image/jpeg', q);
    if (u.length <= 60000) return u;
  }
  throw new Error('Foto terlalu besar.');
}
