// app/api/report/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // adjust if your prisma client path differs
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await prisma.user.findUnique({ where: { email: session.user.email } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  const data = await req.json();
  const { issueName, description, pincode, city, state, severity, mediaUrl } = data;

  try {
    const report = await prisma.issueReport.create({
      data: {
        issueName,
        description,
        pincode,
        city,
        state,
        severity,
        mediaUrl,
        userId: user.id,
      },
    });
    return NextResponse.json(report, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
