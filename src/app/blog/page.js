import { getAllPosts } from '../../lib/api';
import Link from 'next/link';

export const metadata = {
  title: 'Blog | Prepare International',
  description: 'Read the latest updates, field stories, and leadership insights from Prepare International.',
};

export default function BlogIndex() {
  const posts = getAllPosts(['title', 'date', 'slug', 'excerpt', 'author']);

  return (
    <div className="container" style={{ padding: '4rem 1.5rem', minHeight: '80vh' }}>
      <header style={{ marginBottom: '3rem', borderBottom: '1px solid var(--border)', paddingBottom: '2rem' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '0.5rem' }}>The PI Blog</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem' }}>Stories, updates, and visions from the field.</p>
      </header>
      
      {posts.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-secondary)' }}>
          <p>No posts published yet. Check back soon!</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {posts.map(post => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="card" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <span style={{ fontSize: '0.875rem', color: 'var(--brand-primary)', fontWeight: 600 }}>{post.date}</span>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{post.title}</h2>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{post.excerpt}</p>
                <span style={{ fontSize: '0.875rem', fontWeight: 500, marginTop: '1rem', color: 'var(--text-primary)' }}>Read More →</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
