import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",

  experimental: {
    cpus: 1,
    workerThreads: false,
    inlineCss: true,
    optimizePackageImports: [
      "lucide-react",
      "react-icons",
      "framer-motion",
      "gsap",
      "@gsap/react",
    ],
  },

  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [60, 65, 70, 75, 80],
    deviceSizes: [384, 512, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 160, 192, 256, 384],
    minimumCacheTTL: 31536000,
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
