import { Discount, PrismaClient } from "@prisma/client";

import discounts from "../files/discounts.json";

export const SeedID = 2;

export async function seed(prisma: PrismaClient) {
  console.log(`Start seeding ...`);
  await prisma.discount.createMany({
    data: discounts,
    skipDuplicates: true,
  });
  console.log(`Seeding finished.`);
}
