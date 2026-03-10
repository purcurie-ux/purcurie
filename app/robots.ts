import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/admin',      // If you have a custom admin route
        '/api',        // Your backend API routes
        '/cart',       // No need for Google to crawl the cart
        '/checkout',   // No need for Google to crawl checkout
        '/account',    // User account pages
      ],
    },
    sitemap: 'https://purcurie.com/sitemap.xml',
  }
}