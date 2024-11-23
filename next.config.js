/** @type {import('next').NextConfig} */
const nextConfig = {
  telemetry: false,
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
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["stripe"],
  },
  poweredByHeader: false,
};

module.exports = nextConfig;
