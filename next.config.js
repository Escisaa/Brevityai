/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed telemetry since it's no longer valid
  // telemetry: false, // Remove this line

  images: {
    domains: ["lh3.googleusercontent.com", "avatars.githubusercontent.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      net: false,
      tls: false,
    };
    return config;
  },

  env: {
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
  },

  reactStrictMode: true,

  // Updated experimental settings
  experimental: {
    appDir: true, // Keep this if you're using the app directory
  },

  // Use the new `serverExternalPackages` instead of the deprecated one
  serverExternalPackages: ["stripe"],

  poweredByHeader: false,
};

module.exports = nextConfig;
