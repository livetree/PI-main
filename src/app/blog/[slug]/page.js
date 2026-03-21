import { getPostBySlug, getAllPosts } from '../../../lib/api';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateMetadata(props) {
  const params = await props.params;
  const post = getPostBySlug(params.slug, ['title', 'excerpt']);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: `${post.title} | Prepare International`,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts(['slug']);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost(props) {
  const params = await props.params;
  const post = getPostBySlug(params.slug, ['title', 'date', 'author', 'content']);

  if (!post) {
    return notFound();
  }

  return (
    <article className="container" style={{ maxWidth: '800px', padding: '4rem 1.5rem', minHeight: '80vh' }}>
      <Link href="/blog" style={{ color: 'var(--brand-primary)', fontWeight: 600, fontSize: '0.875rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
        ← Back to Blog
      </Link>
      
      <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>{post.title}</h1>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
          {post.author && <span>By {post.author}</span>}
          <span>•</span>
          <span>{post.date}</span>
        </div>
      </header>

      <div className="markdown-content" style={{ lineHeight: 1.8, fontSize: '1.125rem', color: 'var(--text-primary)' }}>
        <ReactMarkdown>{post.content || ''}</ReactMarkdown>
      </div>

      <style>{`
        .markdown-content h1, .markdown-content h2, .markdown-content h3 {
          margin-top: 2.5rem;
          margin-bottom: 1rem;
        }
        .markdown-content p {
          margin-bottom: 1.5rem;
        }
        .markdown-content a {
          color: var(--brand-primary);
          text-decoration: underline;
        }
        .markdown-content ul, .markdown-content ol {
          margin-bottom: 1.5rem;
          padding-left: 2rem;
        }
        .markdown-content img {
          max-width: 100%;
          border-radius: var(--radius-md);
          margin: 2rem 0;
          height: auto;
        }
        .markdown-content blockquote {
          border-left: 4px solid var(--brand-primary);
          padding-left: 1rem;
          margin-left: 0;
          color: var(--text-secondary);
          font-style: italic;
        }
      `}</style>
    </article>
  );
}
