/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  // Ensure Prisma client files are bundled correctly for Vercel serverless
  serverExternalPackages: ["@prisma/client"],
};

export default nextConfig;
