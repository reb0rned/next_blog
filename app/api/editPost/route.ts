import { prisma } from "@/app/utils/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const {id, title, content, imageUrl} = await req.json()

  try {
    const data = await prisma.blogPost.update({
      where: {id},
      data: {
        title,
        content,
        imageUrl,
        changedAt: new Date()
      }
    })

    return NextResponse.json({ success: true, data });
  } catch (err) {
    return NextResponse.json({ error: "Failed to update" }, { status: 500 });
  }
}