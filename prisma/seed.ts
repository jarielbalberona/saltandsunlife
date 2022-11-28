// import { PrismaClient, Seeder } from "@prisma/client";
import { PrismaClient } from "@prisma/client";
import { sync } from "glob";
import path from "path";

const prisma = new PrismaClient();

const paths = sync(path.join(__dirname, "./seeders/seed-files/*.ts"));

async function main() {
  for (const path of paths) {
    const { seed, SeedID } = require(path);
    // const is_seeded = await checkIfSeeded(SeedID, prisma);
    // if (is_seeded) continue;
    const filename = path.split("/seed-files/")[1];
    console.log(`Seeding ${filename}...`);
    await seed(prisma);

    // await updateSeed(filename, SeedID, prisma);
  }
}

// async function checkIfSeeded(seed_id: number, db: PrismaClient) {
//   const count = await db.seeder.count({
//     where: {
//       seed_id,
//     },
//   });

//   return count > 0;
// }

// async function updateSeed(filename: string, seed_id: number, db: PrismaClient) {
//   const data: Omit<Seeder, "id"> = {
//     filename,
//     seed_id,
//     date_of_seed: new Date(),
//   };

//   await db.seeder.createMany({
//     data: [data],
//     skipDuplicates: true,
//   });
// }

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
