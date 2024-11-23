/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable telemetry during builds
  telemetry: false,

  // Enable static image imports
  images: {
    domains: ["lh3.googleusercontent.com", "avatars.githubusercontent.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  // Webpack configuration if needed
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      net: false,
      tls: false,
    };
    return config;
  },

  // Environment variables that should be available at build time
  env: {
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
  },

  // Enable strict mode
  reactStrictMode: true,

  // Enable experimental features if needed
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["stripe"],
  },

  // Disable x-powered-by header
  poweredByHeader: false,
};

module.exports = nextConfig;
