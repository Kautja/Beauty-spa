import { NextRequest, NextResponse } from "next/server";
import { courses } from "@/contant/courses";

export const runtime = "nodejs";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  if (!id) {
    return NextResponse.json({ error: "Missing course id" }, { status: 400 });
  }
  
  const course = courses.find((c) => c._id === id);
  if (!course) {
    return NextResponse.json({ error: "Course not found" }, { status: 404 });
  }
  return NextResponse.json(course);
}
