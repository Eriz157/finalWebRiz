import { query, todayStr } from './db';
import { getPublicUser, listArtworks, listChallenges } from './queries';

// Mengumpulkan semua data halaman profil (milik sendiri maupun orang lain).
export async function loadProfile(viewer, id) {
  const profile = await getPublicUser(id, viewer);
  if (!profile) return null;
  const own = !!viewer && viewer.id === id;
  const [arts, favorites, chs] = await Promise.all([
    listArtworks(viewer?.id, { ownerId: id }),
    own ? listArtworks(viewer.id, { favoritesOf: id }) : [],
    profile.role === 'curator' ? listChallenges() : [],
  ]);
  let subs = [];
  if (own && profile.role === 'member') {
    const r = await query(`
      SELECT s.id,s.score,s.created_at,a.id AS art_id,a.title,c.id AS ch_id,c.title AS ch_title,
        (c.closed OR $2::date > c.end_date) AS ended, w.rank, c.announced_at
      FROM submissions s JOIN artworks a ON a.id=s.artwork_id JOIN challenges c ON c.id=s.challenge_id
      LEFT JOIN winners w ON w.submission_id=s.id
      WHERE s.user_id=$1 ORDER BY s.created_at DESC`, [id, todayStr()]);
    subs = r.rows.map((s) => ({
      id: s.id, artId: s.art_id, title: s.title, chId: s.ch_id, chTitle: s.ch_title, createdAt: new Date(s.created_at).toISOString(),
      image: `/api/artworks/${s.art_id}/image`,
      status: s.rank && s.announced_at ? `Juara ${s.rank}` : s.score != null ? `Nilai ${s.score}` : s.ended ? 'Tidak menang' : 'Menunggu penilaian',
      winner: !!(s.rank && s.announced_at),
    }));
  }
  return { profile, own, arts, favorites, subs, challenges: chs.filter((c) => c.ownerId === id) };
}
