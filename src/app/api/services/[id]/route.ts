import { NextRequest, NextResponse } from "next/server";
import { services } from "@/contant/services";

export const runtime = "nodejs";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  if (!id) {
    return NextResponse.json({ error: "Missing service id" }, { status: 400 });
  }
  
  const service = services.find((s) => s._id === id);
  if (!service) {
    return NextResponse.json({ error: "Service not found" }, { status: 404 });
  }
  return NextResponse.json(service);
}
