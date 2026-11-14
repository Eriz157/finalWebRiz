import { notFound } from 'next/navigation';
import { getUser } from '@/lib/auth';
import { getChallenge, listSubmissions, listArtworks } from '@/lib/queries';
import ChallengeDetailView from '@/components/ChallengeDetailView';

export const metadata = { title: 'Challenge — The Art Archive' };

export default async function Page({ params }) {
  const id = Number((await params).id);
  if (!Number.isInteger(id)) notFound();
  const user = await getUser();
  const challenge = await getChallenge(id);
  if (!challenge) notFound();
  const [submissions, myArts] = await Promise.all([
    listSubmissions(challenge, user),
    user?.role === 'member' ? listArtworks(user.id, { ownerId: user.id }) : [],
  ]);
  return <ChallengeDetailView challenge={challenge} submissions={submissions} myArts={myArts} />;
}
