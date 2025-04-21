import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { serialize } from 'cookie';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { access_token } = body;

    if (!access_token) {
      return NextResponse.json({ error: 'Access token is required' }, { status: 400 });
    }

    const cookieStr = serialize('access_token', access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    });

    const response = NextResponse.json({ message: 'Cookie set successfully' });
    response.headers.set('Set-Cookie', cookieStr);
    return response;
  } catch (error) {
    console.error('Error setting cookie:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
