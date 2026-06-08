import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({ message: "Booking created successfully (mock)" }, { status: 200 });
}
