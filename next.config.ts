import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Standalone project — pin the workspace root to this folder so Next.js
  // does not pick up lockfiles or configs from sibling projects.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
