import { NextResponse } from "next/server"

export const runtime = 'edge';

export async function GET() {
  // Get courses from database
  return NextResponse.json({ courses: [] })
}

export async function POST(request: Request) {
  const data = await request.json()
  // Create course in database
  return NextResponse.json({ course: data })
} 