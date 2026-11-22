import bcrypt from 'bcryptjs';
import { route, json, readJson, requireUser, intParam, ApiError } from '@/lib/api';
import { query, tx } from '@/lib/db';
import { DEFAULT_PASSWORD } from '@/lib/accountRequests';

// Pemilik akun memutuskan permintaan admin: approve / reject, lalu untuk reset sandi: reveal (lihat) dan dismiss (oke).
export const POST = route(async (req, ctx) => {
  const u = await requireUser();
  const id = intParam((await ctx.params).id);
  const r = (await query('SELECT * FROM account_requests WHERE id=$1 AND user_id=$2', [id, u.id])).rows[0];
  if (!r) throw new ApiError(404, 'Permintaan tidak ditemukan.');
  const { action } = await readJson(req);

  if (action === 'approve' || action === 'reject') {
    if (r.status !== 'pending') throw new ApiError(400, 'Permintaan ini sudah diputuskan.');
    if (action === 'reject') {
      await query("UPDATE account_requests SET status='rejected', decided_at=now() WHERE id=$1", [id]);
      return json({ ok: true });
    }
    if (r.kind === 'profile') {
      if (r.new_email && (await query('SELECT 1 FROM users WHERE lower(email)=lower($1) AND id<>$2', [r.new_email, u.id])).rowCount)
        throw new ApiError(409, 'Email baru itu sudah dipakai akun lain. Tolak permintaan ini.');
      await tx(async (q) => {
        await q('UPDATE users SET name=COALESCE($2,name), email=COALESCE($3,email) WHERE id=$1', [u.id, r.new_name, r.new_email]);
        await q("UPDATE account_requests SET status='approved', decided_at=now() WHERE id=$1", [id]);
      });
    } else {
      const hash = await bcrypt.hash(DEFAULT_PASSWORD, 10);
      await tx(async (q) => {
        await q('UPDATE users SET password_hash=$2 WHERE id=$1', [u.id, hash]);
        await q("UPDATE account_requests SET status='approved', decided_at=now() WHERE id=$1", [id]);
      });
    }
    return json({ ok: true });
  }

  if (r.kind !== 'password_reset' || r.status !== 'approved') throw new ApiError(400, 'Tindakan tidak tersedia untuk permintaan ini.');
  if (action === 'reveal') {
    await query('UPDATE account_requests SET revealed=true WHERE id=$1', [id]);
    return json({ ok: true, password: DEFAULT_PASSWORD });
  }
  if (action === 'dismiss') {
    if (!r.revealed) throw new ApiError(400, 'Lihat kata sandi default terlebih dahulu.');
    await query("UPDATE account_requests SET status='dismissed' WHERE id=$1", [id]);
    return json({ ok: true });
  }
  throw new ApiError(400, 'Tindakan tidak valid.');
});
