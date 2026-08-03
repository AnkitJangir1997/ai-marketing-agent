import { PrismaClient } from "@/generated/prisma-client";

const globalForPrisma = global;

export function getPrisma() {
  if (
    !globalForPrisma.prisma ||
    !globalForPrisma.prisma.seoAudit ||
    !globalForPrisma.prisma.keyword
  ) {
    globalForPrisma.prisma = new PrismaClient();
  }

  return globalForPrisma.prisma;
}

export const prisma = getPrisma();
