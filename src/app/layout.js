import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Prepare International | Equipping for Global Impact',
  description: 'Introducing Prepare International to the world. We build, equip, and empower leaders across the globe to bring lasting change.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

function MobileHeader() {
  return (
    <header className="header-glass">
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'var(--brand-gradient)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>
            PI
          </div>
          <span style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.02em' }}>
            PREPARE <span style={{ color: 'var(--brand-primary)' }}>INTL</span>
          </span>
        </Link>
        <nav style={{ display: 'flex', gap: '1.5rem', fontWeight: 500, fontSize: '0.9rem' }}>
          <Link href="/about" className="hide-on-mobile">About</Link>
          <Link href="/diagnostic" className="hide-on-mobile">Diagnostic</Link>
          <Link href="/give" className="hide-on-mobile">Give</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/connect" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>Get Involved</Link>
        </nav>
      </div>
      <style>{`
        @media (max-width: 600px) {
          .hide-on-mobile { display: none; }
        }
      `}</style>
    </header>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MobileHeader />
        <main style={{ paddingTop: '72px' }}>
          {children}
        </main>
        <footer style={{ padding: '4rem 0', background: 'var(--surface)', borderTop: '1px solid var(--border)', marginTop: 'auto' }}>
          <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', textAlign: 'center' }}>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: '1.5rem', opacity: 0.8 }}>
              PREPARE INTL
            </div>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '400px' }}>
              Equipping leaders to bring lasting change to their communities worldwide.
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
