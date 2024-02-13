
import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
  log: ['query'] // all queries sent to the DB appear
});


