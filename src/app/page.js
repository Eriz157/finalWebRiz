import { getUser } from '@/lib/auth';
import { listArtworks, listChallenges, getStats } from '@/lib/queries';
import HomeView from '@/components/HomeView';

export default async function Page() {
  const user = await getUser();
  const [stats, arts, chs] = await Promise.all([getStats(), listArtworks(user?.id), listChallenges()]);
  const popular = [...arts].sort((a, b) => b.likes - a.likes || b.id - a.id);
  const newest = arts.length ? arts[arts.length - 1] : null;
  const active = chs.filter((c) => c.status === 'active').sort((a, b) => (a.end < b.end ? -1 : 1));
  const soon = chs.filter((c) => c.status === 'soon').sort((a, b) => (a.start < b.start ? -1 : 1));
  return <HomeView stats={stats} popular={popular} newest={newest} calls={[...active, ...soon].slice(0, 3)} />;
}
