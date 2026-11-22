import bcrypt from 'bcryptjs';
import { route, json, readJson, ApiError, emailOf } from '@/lib/api';
import { query } from '@/lib/db';
import { issueOtp, checkOtp } from '@/lib/otp';

// Lupa email / kata sandi. Seharusnya OTP dikirim ke email pemilik akun; karena proyek ini
// masih berstatus demo, OTP acak dikembalikan ke klien untuk ditampilkan sebagai notifikasi demo.
async function findAccount(identifier) {
  const q = typeof identifier === 'string' ? identifier.trim().toLowerCase() : '';
  if (!q) throw new ApiError(400, 'Isi nama akun (atau email) kamu.');
  const rows = (await query('SELECT id,name,email FROM users WHERE lower(name)=$1 OR lower(email)=$1', [q])).rows;
  if (!rows.length) throw new ApiError(404, 'Akun tidak ditemukan. Periksa penulisan nama akun kamu.');
  if (rows.length > 1) throw new ApiError(409, 'Ada lebih dari satu akun dengan nama itu. Masukkan email akun.');
  return rows[0];
}
const mask = (e) => { const [a, d] = e.split('@'); return `${a[0]}${'•'.repeat(Math.max(2, a.length - 1))}@${d}`; };

export const POST = route(async (req) => {
  const b = await readJson(req);
  const u = await findAccount(b.identifier);
  if (b.action === 'request') return json({ ok: true, name: u.name, email: mask(u.email), ...(await issueOtp('recover', u.id)) });
  if (b.action !== 'reset') throw new ApiError(400, 'Permintaan tidak valid.');

  await checkOtp('recover', u.id, b.otp, b.otpToken);
  const newEmail = typeof b.newEmail === 'string' && b.newEmail.trim() ? emailOf(b.newEmail) : null;
  const newPw = typeof b.newPassword === 'string' && b.newPassword ? b.newPassword : null;
  if (!newEmail && !newPw) throw new ApiError(400, 'Isi email baru, kata sandi baru, atau keduanya.');
  if (newPw && newPw.length < 6) throw new ApiError(400, 'Kata sandi minimal 6 karakter.');
  if (newEmail && (await query('SELECT 1 FROM users WHERE lower(email)=$1 AND id<>$2', [newEmail, u.id])).rowCount) throw new ApiError(409, 'Email itu sudah dipakai akun lain.');
  const hash = newPw ? await bcrypt.hash(newPw, 10) : null;
  // Sekaligus membuka blokir percobaan login yang salah.
  await query('UPDATE users SET email=COALESCE($2,email), password_hash=COALESCE($3,password_hash), failed_logins=0, locked_until=NULL WHERE id=$1', [u.id, newEmail, hash]);
  return json({ ok: true, email: newEmail || u.email });
});
