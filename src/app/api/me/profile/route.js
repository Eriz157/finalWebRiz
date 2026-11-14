import { route, json, readJson, requireUser, text, urlOf, ApiError } from '@/lib/api';
import { query } from '@/lib/db';

export const PATCH = route(async (req) => {
  const u = await requireUser();
  const b = await readJson(req);
  const name = text(b.name, 'Nama tampilan', 2, 60);
  const bio = text(b.bio, 'Bio', 0, 240, { optional: true });
  const ig = urlOf(b.instagram, 'Tautan Instagram'), be = urlOf(b.behance, 'Tautan Behance'), web = urlOf(b.website, 'Tautan website');
  let avatar = null;
  if (typeof b.avatar === 'string') {
    if (b.avatar && (!/^data:image\/(jpeg|png|webp);base64,[A-Za-z0-9+/=]+$/.test(b.avatar) || b.avatar.length > 90000)) throw new ApiError(400, 'Foto profil tidak valid atau terlalu besar.');
    avatar = b.avatar;
  }
  await query(`UPDATE users SET name=$2,bio=$3,instagram=$4,behance=$5,website=$6,avatar=COALESCE($7,avatar) WHERE id=$1`, [u.id, name, bio, ig, be, web, avatar]);
  return json({ ok: true });
});
