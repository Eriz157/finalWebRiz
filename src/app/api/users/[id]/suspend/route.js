import { route, json, readJson, requireUser, intParam, ApiError } from '@/lib/api';
import { query } from '@/lib/db';
import { verifyAction } from '@/lib/adminActions';

const PRESET = { '1d': '1 day', '1m': '1 month', '1y': '1 year' };
const UNIT = { minutes: 'minutes', hours: 'hours', days: 'days' };

async function target(admin, id) {
  const t = (await query('SELECT id,role FROM users WHERE id=$1', [id])).rows[0];
  if (!t) throw new ApiError(404, 'Akun tidak ditemukan.');
  if (t.role === 'admin' || t.id === admin.id) throw new ApiError(403, 'Akun admin tidak dapat ditangguhkan.');
}

// Tangguhkan akun (butuh kata sandi + OTP). duration: 1d | 1m | 1y | custom | forever.
export const POST = route(async (req, ctx) => {
  const admin = await requireUser(['admin']);
  const id = intParam((await ctx.params).id);
  const b = await readJson(req);
  verifyAction('suspend', b);
  await target(admin, id);
  let interval = null;
  if (b.duration === 'forever') interval = null;
  else if (PRESET[b.duration]) interval = PRESET[b.duration];
  else if (b.duration === 'custom') {
    const n = Number(b.amount);
    if (!Number.isInteger(n) || n < 1 || n > 9999 || !UNIT[b.unit]) throw new ApiError(400, 'Durasi kustom harus 1–9999 menit, jam, atau hari.');
    interval = `${n} ${UNIT[b.unit]}`;
  } else throw new ApiError(400, 'Durasi penangguhan tidak valid.');
  if (interval) await query('UPDATE users SET suspended_at=now(), suspended_until=now() + $2::interval WHERE id=$1', [id, interval]);
  else await query('UPDATE users SET suspended_at=now(), suspended_until=NULL WHERE id=$1', [id]);
  return json({ ok: true });
});

// Cabut penangguhan lebih awal.
export const DELETE = route(async (req, ctx) => {
  const admin = await requireUser(['admin']);
  const id = intParam((await ctx.params).id);
  await target(admin, id);
  await query('UPDATE users SET suspended_at=NULL, suspended_until=NULL WHERE id=$1', [id]);
  return json({ ok: true });
});
