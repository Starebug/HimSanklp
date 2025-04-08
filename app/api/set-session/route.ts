// app/api/set-session/route.ts

import { cookies } from 'next/headers'

export async function POST(req: Request) {
  const { access_token, refresh_token } = await req.json()
  const cookieStore = cookies()

  if (!access_token || !refresh_token)
    return new Response('Missing tokens', { status: 400 })
    cookieStore.set('sb-access-token', access_token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
  })
  cookieStore.set('sb-refresh-token', refresh_token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
  })
  return new Response('Session set', { status: 200 })
}