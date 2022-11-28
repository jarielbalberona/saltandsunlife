import { Item, PrismaClient } from "@prisma/client";

import getInventory from "../files/items";

export const SeedID = 1;

export async function seed(prisma: PrismaClient) {
  const items: Item[] = await getInventory();

  console.log(`Start seeding ...`);
  await prisma.item.createMany({
    data: items,
    skipDuplicates: true,
  });
  console.log(`Seeding finished.`);
}
