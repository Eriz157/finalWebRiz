import { requireRole } from '@/lib/guard';
import { listUsers } from '@/lib/queries';
import { query } from '@/lib/db';
import UsersView from '@/components/UsersView';

export const metadata = { title: 'User Management — The Art Archive' };

export default async function Page() {
  await requireRole(['admin']);
  const [users, arts] = await Promise.all([listUsers(), query('SELECT count(*) AS n FROM artworks')]);
  return <UsersView users={users} artTotal={arts.rows[0].n} />;
}
