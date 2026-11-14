import { requireRole } from '@/lib/guard';
import { listArtworks } from '@/lib/queries';
import { query } from '@/lib/db';
import MyArtworkView from '@/components/MyArtworkView';

export const metadata = { title: 'My Artwork — The Art Archive' };

export default async function Page() {
  const u = await requireRole(['member']);
  const [arts, subs] = await Promise.all([listArtworks(u.id, { ownerId: u.id }), query('SELECT count(*) AS n FROM submissions WHERE user_id=$1', [u.id])]);
  return <MyArtworkView arts={[...arts].reverse()} submissionCount={subs.rows[0].n} />;
}
