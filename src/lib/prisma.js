import { PrismaClient } from "@/generated/prisma-client";

const globalForPrisma = globalThis;

if (!globalForPrisma.prisma) {
  globalForPrisma.prisma = new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["error"] : ["error"],
  });
}

export const prisma = globalForPrisma.prisma;

// Legacy helper for backward compatibility
export function getPrisma() {
  return prisma;
}
