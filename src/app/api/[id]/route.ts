import { prisma } from "@/utils/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(reqest: Request, { params }: { params: { akarusa: number } }) {
	const { akarusa } = params;

	const sensor = await prisma.tinponism.findMany({
		where: {
			akarusa: {
				gte: 0,
			},
		},
	});

	return NextResponse.json({
		data: sensor[0],
	});
}

// ここにPOSTをつくる
export async function POST(reqest: Request, { params }: { params: { id: string } }) {
	const { id: url_number } = params;

	const body = await reqest.json();
	console.log(body);
	const returnBody = `POSTで受け取った値：${body["akarusa"]}`;
	const sensor = await prisma.tinponism.update({
		where: {
			id: Number(url_number),
		},
		data: {
			akarusa: body["akarusa"],
		},
	});

	return new Response(JSON.stringify({ body: returnBody }));
}
