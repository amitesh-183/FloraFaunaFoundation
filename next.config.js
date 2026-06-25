/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 768, 1024, 1280],
  },
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "DENY" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      ],
    },
    {
      source: "/fonts/(.*)",
      headers: [
        { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
      ],
    },
    {
      source: "/image/(.*)",
      headers: [
        { key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=31536000" },
      ],
    },
  ],
};

module.exports = nextConfig;
