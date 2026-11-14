import './globals.css';
import { getUser } from '@/lib/auth';
import { listCategories } from '@/lib/queries';
import Providers from '@/components/Providers';
import Navbar from '@/components/Navbar';

export const metadata = { title: 'The Art Archive', description: 'Galeri digital tempat kreator memajang karya, bertukar kritik, dan mengikuti challenge.' };
export const dynamic = 'force-dynamic';

export default async function RootLayout({ children }) {
  const [user, categories] = await Promise.all([getUser(), listCategories()]);
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=DM+Sans:wght@400;500;600&family=Archivo+Black&family=Inter:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400;1,6..72,500&display=swap" />
      </head>
      <body>
        <a className="sr" href="#app" id="skip">Lewati ke konten</a>
        <Providers user={user} categories={categories}>
          <Navbar />
          <main id="app">{children}</main>
          <div className="sr" id="live" aria-live="polite" />
        </Providers>
      </body>
    </html>
  );
}
