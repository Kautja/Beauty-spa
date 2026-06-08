import { NextRequest, NextResponse } from "next/server";
import { services } from "@/contant/services";

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
	const { searchParams } = new URL(req.url);
	const limitParam = searchParams.get("limit");
	let data = [...services];
	if (limitParam) {
		const limit = parseInt(limitParam, 10);
		if (!isNaN(limit) && limit > 0) {
			data = data.slice(0, limit);
		}
	}
	return NextResponse.json(data);
}
