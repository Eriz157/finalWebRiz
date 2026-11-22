import { ApiError } from './api';
import { checkOtp } from './otp';

// Kata sandi verifikasi tindakan sensitif admin (tetap, untuk panduan juri).
// Kode OTP-nya acak per permintaan (lihat src/lib/otp.js dan POST /api/otp).
export const GUIDE = {
  hardDelete: { password: 'hard_delete123' },  // hapus akun permanen
  suspend: { password: 'soft_delete123' },     // tangguhkan akun
};

// subject = `${adminId}:${targetId}`: OTP hanya sah untuk admin dan akun target yang sama.
export async function verifyAction(kind, body, subject) {
  const g = GUIDE[kind];
  const pw = body && typeof body.password === 'string' ? body.password : '';
  if (!pw) throw new ApiError(400, 'Masukkan kata sandi verifikasi.');
  if (pw !== g.password) throw new ApiError(403, 'Kata sandi verifikasi salah.');
  await checkOtp(kind, subject, body.otp, body.otpToken);
}
