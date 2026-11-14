import { requireRole } from '@/lib/guard';
import { listChallenges, listSubmissions } from '@/lib/queries';
import OverviewView from '@/components/OverviewView';

export const metadata = { title: 'Overview — The Art Archive' };

export default async function Page() {
  const u = await requireRole(['curator']);
  const mine = (await listChallenges()).filter((c) => c.ownerId === u.id);
  const subs = {};
  for (const c of mine) subs[c.id] = await listSubmissions(c, u);
  return <OverviewView challenges={mine} subs={subs} />;
}
