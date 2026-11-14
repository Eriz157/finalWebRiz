import { text, dateOf, fileOf, ApiError } from './api';

// Membaca & memvalidasi form challenge (multipart) — dipakai saat membuat dan mengedit.
export async function readChallengeForm(req) {
  const form = await req.formData();
  const title = text(form.get('title'), 'Judul challenge', 3, 100);
  const description = text(form.get('description'), 'Deskripsi challenge', 10, 2000);
  const rules = text(form.get('rules'), 'Aturan', 0, 1200, { optional: true });
  const prize = text(form.get('prize'), 'Hadiah', 0, 120, { optional: true });
  const start = dateOf(form.get('start'), 'Tanggal mulai');
  const end = dateOf(form.get('end'), 'Tanggal selesai');
  if (end <= start) throw new ApiError(400, 'Tanggal selesai harus setelah tanggal mulai.');
  const att = await fileOf(form, 'attachment', {
    types: ['image/jpeg', 'image/png', 'image/webp', 'application/pdf'], maxBytes: 1024 * 1024, label: 'Lampiran',
  });
  return { title, description, rules, prize, start, end, att, removeAtt: form.get('removeAttachment') === '1' };
}
