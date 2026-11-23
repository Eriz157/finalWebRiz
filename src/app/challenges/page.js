import { getUser } from '@/lib/auth';
import { listChallenges, listArtworks } from '@/lib/queries';
import { query } from '@/lib/db';
import ChallengesView from '@/components/ChallengesView';

export const metadata = { title: 'Challenge — The Art Archive' };

export default async function Page() {
  const u = await getUser();   // terbuka untuk guest dan public juga
  const member = u?.role === 'member';
  const [challenges, myArts, joined] = await Promise.all([
    listChallenges(),
    member ? listArtworks(u.id, { ownerId: u.id }) : [],
    member ? query('SELECT challenge_id FROM submissions WHERE user_id=$1', [u.id]) : { rows: [] },
  ]);
  return <ChallengesView challenges={challenges} myArts={myArts} joinedIds={joined.rows.map((r) => r.challenge_id)} />;
}
