import { readField } from '@/content/store.mjs';

// A photo uploaded through the on-page editor.
// ponytail: photos live as base64 in Firestore (1 MB a document, so the editor
// shrinks them first). Move to Vercel Blob if anyone needs full-size originals.
export async function GET(_request, { params }) {
  const { id } = await params;
  const data = /^[a-z0-9]{8,40}$/.test(id) ? await readField(`images/${id}`, 'data').catch(() => null) : null;
  if (!data) return new Response('Not found', { status: 404 });
  return new Response(Buffer.from(data, 'base64'), {
    headers: {
      'Content-Type': 'image/jpeg',
      'X-Content-Type-Options': 'nosniff',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
