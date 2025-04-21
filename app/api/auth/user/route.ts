// app/api/auth/create-user/route.ts

import { prisma } from "@/app/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { userId, email, access_token, refresh_token } = body;

    if (!userId || !email || !access_token || !refresh_token) {
      return NextResponse.json({ error: 'User details and tokens are required' }, { status: 400 });
    }

    let newUser = await prisma.account.findFirst({
      where: { userId },
    });

    if (!newUser) {
      newUser = await prisma.account.create({
        data: {
          userId,
          provider: 'supabase',
          providerAccountId: userId,
          email,
          refresh_token,
          access_token,
          fullname: '',
          city: '',
          state: '',
        },
      });
    }

    return NextResponse.json({ message: 'User processed successfully', user: newUser }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
