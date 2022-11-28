import { Item, PrismaClient } from "@prisma/client";

import items from "../files/items.json";

export const SeedID = 1;

export async function seed(prisma: PrismaClient) {
  console.log(`Start seeding ...`);
  await prisma.item.createMany({
    data: items as any,
    skipDuplicates: true,
  });
  console.log(`Seeding finished.`);
}
