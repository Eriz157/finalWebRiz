import crypto from 'node:crypto';
import { SignJWT, jwtVerify } from 'jose';
import { ApiError } from './api';

// OTP acak 6 digit, berlaku 5 menit, terikat pada tujuan (purpose) dan subjek-nya.
// Stateless: yang disimpan klien hanyalah token bertanda tangan berisi hash OTP, bukan OTP itu sendiri.
// Proyek ini masih berstatus demo: seharusnya OTP dikirim ke email pemilik akun / admin;
// di sini OTP dikembalikan ke klien agar bisa ditampilkan sebagai notifikasi demo.
const secret = () => process.env.AUTH_SECRET || 'dev-only-secret-ganti-di-env-minimal-32-karakter';
const key = () => new TextEncoder().encode(secret());
const TTL = 5 * 60;
const digest = (otp, purpose, subject) => crypto.createHmac('sha256', secret()).update(`${purpose}|${subject}|${otp}`).digest('hex');

export async function issueOtp(purpose, subject) {
  const otp = String(crypto.randomInt(0, 1000000)).padStart(6, '0');
  const token = await new SignJWT({ p: purpose, s: String(subject), h: digest(otp, purpose, subject) })
    .setProtectedHeader({ alg: 'HS256' }).setIssuedAt().setExpirationTime(`${TTL}s`).sign(key());
  return { otp, otpToken: token, expiresIn: TTL };
}

export async function checkOtp(purpose, subject, otp, token) {
  const code = typeof otp === 'string' ? otp.trim() : '';
  if (!code) throw new ApiError(400, 'Masukkan kode OTP.');
  if (typeof token !== 'string' || !token) throw new ApiError(400, 'Minta kode OTP terlebih dahulu.');
  let c;
  try { c = (await jwtVerify(token, key())).payload; }
  catch { throw new ApiError(403, 'Kode OTP kedaluwarsa. Minta kode baru.'); }
  const a = Buffer.from(c.h || '', 'hex'), b = Buffer.from(digest(code, purpose, subject), 'hex');
  if (c.p !== purpose || c.s !== String(subject) || a.length !== b.length || !crypto.timingSafeEqual(a, b)) throw new ApiError(403, 'Kode OTP salah.');
}
