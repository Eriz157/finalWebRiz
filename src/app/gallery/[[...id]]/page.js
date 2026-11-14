import { getUser } from '@/lib/auth';
import { listArtworks } from '@/lib/queries';
import GalleryView from '@/components/GalleryView';

export const metadata = { title: 'Gallery — The Art Archive' };

export default async function Page({ params }) {
  const user = await getUser();
  const arts = await listArtworks(user?.id);
  const raw = (await params).id?.[0];
  const initialId = raw && arts.some((a) => String(a.id) === raw) ? Number(raw) : null;
  return <GalleryView arts={arts} initialId={initialId} />;
}
