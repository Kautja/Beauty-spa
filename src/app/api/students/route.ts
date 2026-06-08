import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({ message: "Student registered successfully (mock)" }, { status: 200 });
}
