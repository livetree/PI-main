import { revalidatePath } from 'next/cache';

// Called by the editor after a save so the next visit shows the new words.
// It only re-reads the store; it cannot change anything, so it needs no sign-in.
export async function POST() {
  revalidatePath('/');
  revalidatePath('/give');
  revalidatePath('/about');
  return new Response(null, { status: 204 });
}
