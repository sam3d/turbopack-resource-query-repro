import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      rules: {
        "*.txt": {
          loaders: [require.resolve("./loader.js")],
          as: "*.js",
        },
      },
    },
  },
};

export default nextConfig;
