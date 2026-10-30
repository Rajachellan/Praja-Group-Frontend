import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",

  experimental: {
    cpus: 1,
    workerThreads: false,
  },

  trailingSlash: true,
};

export default nextConfig;