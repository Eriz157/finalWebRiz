import { route, json, readJson, requireUser, intParam, ApiError } from '@/lib/api';
import { issueOtp } from '@/lib/otp';

// Minta OTP acak untuk tindakan sensitif admin (hapus / tangguhkan akun).
export const POST = route(async (req) => {
  const admin = await requireUser(['admin']);
  const b = await readJson(req);
  if (b.purpose !== 'hardDelete' && b.purpose !== 'suspend') throw new ApiError(400, 'Tujuan OTP tidak valid.');
  const target = intParam(b.targetId);
  return json(await issueOtp(b.purpose, `${admin.id}:${target}`));
});
