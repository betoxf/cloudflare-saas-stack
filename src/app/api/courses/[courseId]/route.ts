export const runtime = 'edge';

import { NextResponse } from "next/server"

export async function GET(
  request: Request,
  { params }: { params: { courseId: string } }
) {
  // Get course from database
  return NextResponse.json({ course: {} })
}

export async function PUT(
  request: Request,
  { params }: { params: { courseId: string } }
) {
  const data = await request.json()
  // Update course in database
  return NextResponse.json({ course: data })
}

export async function DELETE(
  request: Request,
  { params }: { params: { courseId: string } }
) {
  // Delete course from database
  return NextResponse.json({ success: true })
} 