const { PrismaClient } = require("@prisma/client");
const path = require("path");

const dotenv = require("dotenv");
dotenv.config({ path: path.resolve(__dirname, "../../.env.server") });
// Load environment variables from .env file
// dotenv.config();
const prisma = new PrismaClient();
async function main() {
  // ... you will write your Prisma Client queries here
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

module.exports = prisma;
