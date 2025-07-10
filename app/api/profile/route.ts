// app/api/profile/route.ts

import { NextResponse } from 'next/server';

export async function GET() {
  // your logic to fetch user profile
  return NextResponse.json({ message: 'Profile data here' });
}
