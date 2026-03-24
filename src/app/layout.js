import './globals.css';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Prepare International | A Movement of Multiplying Leaders',
  description: 'A movement of leaders who live from Jesus, lead in His Kingdom, and multiply others—across churches, businesses, and communities.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          {children}
        </main>
        <footer style={{ padding: '4rem 0', background: 'var(--surface)', borderTop: '1px solid var(--border)', marginTop: 'auto' }}>
          <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', textAlign: 'center' }}>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.5rem', opacity: 0.8 }}>
              PREPARE INTL
            </div>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '400px' }}>
              Equipping leaders to live from Jesus and lead in His Kingdom—across churches, businesses, and communities.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/diagnostic">Diagnostic</Link>
              <Link href="/give">Give</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/privacy">Privacy Policy</Link>
            </div>
            <p style={{ marginTop: '2rem', fontSize: '0.75rem', color: 'var(--border)' }}>
              &copy; {new Date().getFullYear()} Prepare International. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
