import { query, todayStr } from './db';
import { mapUser } from './auth';

/* ---------- kategori ---------- */
export async function listCategories() {
  const r = await query('SELECT slug,label,color FROM categories ORDER BY label');
  return r.rows;
}

/* ---------- karya ---------- */
const ART_SELECT = `
  SELECT a.id,a.owner_id,a.title,a.painter,a.synopsis,a.category,a.studio_url,a.is_example,a.created_at,
    (SELECT count(*) FROM likes l WHERE l.artwork_id=a.id) AS likes,
    (SELECT count(*) FROM comments c WHERE c.artwork_id=a.id) AS comments,
    EXISTS(SELECT 1 FROM likes l WHERE l.artwork_id=a.id AND l.user_id=$1) AS liked,
    EXISTS(SELECT 1 FROM favorites f WHERE f.artwork_id=a.id AND f.user_id=$1) AS faved
  FROM artworks a`;
export function mapArt(r) {
  return {
    id: r.id, ownerId: r.owner_id, title: r.title, painter: r.painter, synopsis: r.synopsis, category: r.category,
    studioUrl: r.studio_url, example: r.is_example, createdAt: new Date(r.created_at).toISOString(),
    likes: r.likes, comments: r.comments, liked: r.liked, faved: r.faved, image: `/api/artworks/${r.id}/image`,
  };
}
export async function listArtworks(viewerId, { ownerId, favoritesOf } = {}) {
  let where = '', params = [viewerId || 0];
  if (ownerId) { where = ' WHERE a.owner_id=$2'; params.push(ownerId); }
  else if (favoritesOf) { where = ' WHERE EXISTS(SELECT 1 FROM favorites f2 WHERE f2.artwork_id=a.id AND f2.user_id=$2)'; params.push(favoritesOf); }
  const r = await query(`${ART_SELECT}${where} ORDER BY a.created_at, a.id`, params);
  return r.rows.map(mapArt);
}
export async function getArtwork(id, viewerId) {
  const r = await query(`${ART_SELECT} WHERE a.id=$2`, [viewerId || 0, id]);
  return r.rows[0] ? mapArt(r.rows[0]) : null;
}

/* ---------- pengguna ---------- */
export async function getPublicUser(id, viewer) {
  const r = await query('SELECT * FROM users WHERE id=$1', [id]);
  if (!r.rows[0]) return null;
  const self = viewer && (viewer.id === id || viewer.role === 'admin');
  return mapUser(r.rows[0], !!self);
}
export async function listUsers() {
  const r = await query(`SELECT u.*, (SELECT count(*) FROM artworks a WHERE a.owner_id=u.id) AS art_count FROM users u ORDER BY u.created_at, u.id`);
  return r.rows.map((x) => ({ ...mapUser(x), artCount: x.art_count }));
}

/* ---------- challenge ---------- */
const STATUS = `CASE WHEN c.closed THEN 'ended' WHEN $1::date < c.start_date THEN 'soon' WHEN $1::date > c.end_date THEN 'ended' ELSE 'active' END`;
const CH_SELECT = `
  SELECT c.id,c.owner_id,u.name AS owner_name,c.title,c.description,c.rules,c.prize,c.start_date,c.end_date,c.closed,
    c.announced_at,c.attachment_name,c.attachment_mime,c.created_at, ${STATUS} AS status,
    (SELECT count(*) FROM submissions s WHERE s.challenge_id=c.id) AS participants
  FROM challenges c JOIN users u ON u.id=c.owner_id`;
export function mapChallenge(r) {
  const att = r.attachment_name ? { name: r.attachment_name, mime: r.attachment_mime, url: `/api/challenges/${r.id}/attachment` } : null;
  return {
    id: r.id, ownerId: r.owner_id, ownerName: r.owner_name, title: r.title, description: r.description, rules: r.rules,
    prize: r.prize, start: r.start_date, end: r.end_date, closed: r.closed, status: r.status, participants: r.participants,
    announcedAt: r.announced_at ? new Date(r.announced_at).toISOString() : null, attachment: att,
    banner: att && att.mime.startsWith('image/') ? att.url : null,
  };
}
export async function listChallenges() {
  const r = await query(`${CH_SELECT} ORDER BY c.start_date DESC, c.id DESC`, [todayStr()]);
  return r.rows.map(mapChallenge);
}
export async function getChallenge(id) {
  const r = await query(`${CH_SELECT} WHERE c.id=$2`, [todayStr(), id]);
  return r.rows[0] ? mapChallenge(r.rows[0]) : null;
}
export function canManageChallenge(user, ch) {
  return !!user && (user.role === 'admin' || (user.role === 'curator' && ch.ownerId === user.id));
}
export function canManageArtwork(user, ownerId) {
  return !!user && (user.role === 'admin' || (user.role === 'member' && ownerId === user.id));
}

// Nilai dan catatan hanya terlihat oleh pengelola challenge dan pemilik submisi.
export async function listSubmissions(ch, viewer) {
  const r = await query(`
    SELECT s.id,s.challenge_id,s.artwork_id,s.user_id,s.score,s.note,s.created_at,
      a.title,a.painter, w.rank
    FROM submissions s
    JOIN artworks a ON a.id=s.artwork_id
    LEFT JOIN winners w ON w.submission_id=s.id
    WHERE s.challenge_id=$1 ORDER BY s.created_at, s.id`, [ch.id]);
  const manage = canManageChallenge(viewer, ch);
  return r.rows.map((s) => {
    const seeScore = manage || (viewer && viewer.id === s.user_id);
    return {
      id: s.id, challengeId: s.challenge_id, artworkId: s.artwork_id, userId: s.user_id, createdAt: new Date(s.created_at).toISOString(),
      title: s.title, painter: s.painter, image: `/api/artworks/${s.artwork_id}/image`,
      score: seeScore ? s.score : null, note: seeScore ? s.note : '', rank: ch.announcedAt ? s.rank : null,
    };
  });
}

/* ---------- statistik beranda ---------- */
export async function getStats() {
  const r = await query(`SELECT
    (SELECT count(*) FROM artworks) AS arts,
    (SELECT count(*) FROM users WHERE role='member') AS members,
    (SELECT count(*) FROM users) AS users,
    (SELECT count(*) FROM likes) + (SELECT count(*) FROM comments) AS appreciation,
    (SELECT count(*) FROM challenges c WHERE NOT c.closed AND $1::date BETWEEN c.start_date AND c.end_date) AS active`, [todayStr()]);
  return r.rows[0];
}
