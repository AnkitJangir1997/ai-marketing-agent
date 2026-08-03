import { prisma } from "@/lib/prisma";

export async function getAllWebsites() {
  try {
    return await prisma.website.findMany({
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.error("Error in getAllWebsites service:", error);
    throw error;
  }
}

export async function getWebsiteById(id) {
  try {
    return await prisma.website.findUnique({
      where: { id: parseInt(id, 10) },
    });
  } catch (error) {
    console.error("Error in getWebsiteById service:", error);
    throw error;
  }
}

export async function createWebsite(data) {
  try {
    return await prisma.website.create({
      data,
    });
  } catch (error) {
    console.error("Error in createWebsite service:", error);
    throw error;
  }
}