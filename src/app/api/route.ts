import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function GET() {
	const huro = await prisma.tinponism.findMany();
	return NextResponse.json({
		data: huro,
	});
}
