import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "1nc21dil75.ufs.sh",
        pathname: "/f/**",
      },
    ],
  }
};

export default nextConfig;
