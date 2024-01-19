import { tinponism } from "@prisma/client";
import { prisma } from "./prisma";

async function seed() {
	const date = new Date();

	const sensorData: tinponism[] = [
		{
			id: 1,
			akarusa: 100,
			time: date,
		},
	];

	for (const tinponism of sensorData) {
		await prisma.tinponism.upsert({
			where: { id: tinponism.id },
			update: {},
			create: tinponism,
		});
	}
}

seed()
	.catch(error => {
		console.error("Error:", error);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
