// middleware.ts
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });
  await supabase.auth.getSession();
    const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) {
        return redirect('/login');
      }
  return user;
}

export const config = {
  matcher: ['/dashboard/:path*','/dashboard','/onBoarding'], // protect these routes
};
