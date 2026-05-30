import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ESLint is run separately (locally / in CI). The flat-config + Next
    // build-time lint runner mismatch was crashing production builds, so we
    // don't gate `next build` on linting.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
