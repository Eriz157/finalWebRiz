import { route, json, requireUser, ApiError } from '@/lib/api';
import { query } from '@/lib/db';

export const POST = route(async () => {
  const u = await requireUser(['public']);
  if (u.curatorStatus) throw new ApiError(400, 'Pengajuan sudah pernah dikirim.');
  await query("UPDATE users SET curator_status='pending' WHERE id=$1", [u.id]);
  return json({ ok: true });
});
