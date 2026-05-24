import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  experimental: {
    // Turbopack's disk cache (enabled by default) doesn't reliably invalidate
    // when source files change between dev server restarts. Disabling it ensures
    // CSS and component changes are always picked up on next dev.
    turbopackFileSystemCacheForDev: false,
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
