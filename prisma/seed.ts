import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const defaultData: Prisma.tinponismCreateInput = {
	id: 1,
	akarusa: 0,
	updatedAt: new Date(),
};

async function main() {
	console.log(`Start seeding ...`);
	const duplicate = await prisma.tinponism.findUnique({
		where: {
			id: defaultData.id,
		},
	});
	if (duplicate) {
		console.log(`Already seeded.`);
		return;
	}
	await prisma.tinponism.create({
		data: defaultData,
	});
	console.log(`Seeding finished.`);
}

main()
	.catch(e => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
