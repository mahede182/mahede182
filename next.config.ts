/** @type {import('next').NextConfig} */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.0.112"],
  compress: true,
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["react-icons", "framer-motion"],
    useDeploymentId: true,
    useDeploymentIdServerActions: true 
  },
};

export default nextConfig;
