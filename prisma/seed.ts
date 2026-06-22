import { PrismaClient } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";


const adapter = new PrismaBetterSqlite3({
  url: "./prisma/dev.db",
});


const prisma = new PrismaClient({
  adapter,
});


async function main() {

  await prisma.product.createMany({
    data: [
      {
        name: "Royal Oud",
        slug: "royal-oud",
        description: "Luxury oud fragrance",
        price: 120,
        image: "/perfumes/oud.jpg",
        category: "Men",
        stock: 20,
      },
      {
        name: "Velvet Rose",
        slug: "velvet-rose",
        description: "Elegant floral perfume",
        price: 90,
        image: "/perfumes/rose.jpg",
        category: "Women",
        stock: 15,
      },
    ],
  });


  console.log("Database seeded successfully");
}


main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });