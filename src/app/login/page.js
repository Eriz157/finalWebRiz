import { redirect } from 'next/navigation';
import { getUser } from '@/lib/auth';
import LoginView from '@/components/LoginView';

export const metadata = { title: 'Masuk — The Art Archive' };

export default async function Page() {
  if (await getUser()) redirect('/');
  // Tombol akun demo hanya muncul bila data contoh ada (lingkungan pengembangan / presentasi).
  return <LoginView showDemo={process.env.SHOW_DEMO_LOGIN !== '0'} />;
}
