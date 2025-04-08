import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { redirect } from 'next/navigation';
export async function requireUser() {
    const supabase = createServerComponentClient({cookies});
    const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        return redirect('/login');
      }
    return user;
}