import { notFound, redirect } from 'next/navigation';
import { getUser } from '@/lib/auth';
import { loadProfile } from '@/lib/profileData';
import ProfileView from '@/components/ProfileView';

export const metadata = { title: 'Profil — The Art Archive' };

export default async function Page({ params }) {
  const id = Number((await params).id);
  if (!Number.isInteger(id)) notFound();
  const user = await getUser();
  if (user && user.id === id) redirect('/profile');
  const data = await loadProfile(user, id);
  if (!data) notFound();
  return <ProfileView key={id} {...data} />;
}
