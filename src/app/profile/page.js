import { redirect } from 'next/navigation';
import { getUser } from '@/lib/auth';
import { loadProfile } from '@/lib/profileData';
import ProfileView from '@/components/ProfileView';

export const metadata = { title: 'Profil — The Art Archive' };

export default async function Page() {
  const user = await getUser();
  if (!user) redirect('/login');
  const data = await loadProfile(user, user.id);
  return <ProfileView key={user.id} {...data} />;
}
