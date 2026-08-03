import { PrismaClient } from "@/generated/prisma-client";

const globalForPrisma = globalThis;

if (!globalForPrisma.prisma) {
  globalForPrisma.prisma = new PrismaClient({
    log: ["error"],
    datasources: {
      db: {
        url: process.env.DATABASE_URL,
      },
    },
  });
}

export const prisma = globalForPrisma.prisma;

// Legacy helper for backward compatibility
export function getPrisma() {
  return prisma;
}
