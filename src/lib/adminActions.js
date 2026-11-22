import { ApiError } from './api';

// Kode verifikasi tindakan sensitif admin. Proyek ini masih berstatus demo (gimmick):
// seharusnya OTP dikirim ke Gmail admin, tetapi di sini dipakai OTP universal.
export const GUIDE = {
  hardDelete: { password: 'hard_delete123', otp: '010507' },  // hapus akun permanen
  suspend: { password: 'soft_delete123', otp: '301006' },     // tangguhkan akun
};

export function verifyAction(kind, body) {
  const g = GUIDE[kind];
  const pw = body && typeof body.password === 'string' ? body.password : '';
  const otp = body && typeof body.otp === 'string' ? body.otp.trim() : '';
  if (!pw) throw new ApiError(400, 'Masukkan kata sandi verifikasi.');
  if (pw !== g.password) throw new ApiError(403, 'Kata sandi verifikasi salah.');
  if (!otp) throw new ApiError(400, 'Masukkan kode OTP.');
  if (otp !== g.otp) throw new ApiError(403, 'Kode OTP salah.');
}
