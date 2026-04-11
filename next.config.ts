import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Webpack Optimization (Fixes the "Everything" Bundle / Unused JS)
 webpack: (config, { webpack, isServer }) => {
    // ✅ Use the webpack instance provided by Next.js instead of importing it
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /^\.\/locale$/,
        contextRegExp: /moment$/,
      })
    );
    return config;
  },

  // 2. Redirects
  async redirects() {
    return [
      {
        source: '/track/:awb',
        destination: 'https://www.delhivery.com/track-v2/package/:awb',
        permanent: false,
      },
      {
        source: '/products/:handle',
        destination: '/product/:handle',
        permanent: true,
      },
    ];
  },

  // 3. Images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.shopify.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
};

export default nextConfig;