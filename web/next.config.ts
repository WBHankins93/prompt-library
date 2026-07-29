import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  // TODO(domain): set metadataBase after the public domain is chosen.
};

export default nextConfig;
