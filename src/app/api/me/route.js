import { route, requireUser, ApiError } from '@/lib/api';

// Penghapusan akun mandiri dinonaktifkan. Akun hanya dapat dihapus oleh admin lewat User Management.
export const DELETE = route(async () => {
  await requireUser();
  throw new ApiError(403, 'Penghapusan akun sendiri dinonaktifkan. Hubungi admin bila perlu.');
});
