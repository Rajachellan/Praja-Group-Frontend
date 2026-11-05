
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",

  experimental: {
    cpus: 1,
    workerThreads: false,
  },

  trailingSlash: true,

  async redirects() {
    return [
      {
        source: "/joint-venture-guide-for-landowners-chennai",
        destination: "/blogs/joint-venture-guide-for-landowners-chennai/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
