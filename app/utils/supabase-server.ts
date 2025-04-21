import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';

export function createClient() {
  const cookieStore = cookies(); // ✅ This works in server components (it's sync in App Router)
  return createServerComponentClient({ cookies: () => cookieStore });
}
