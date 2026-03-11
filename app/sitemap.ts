import { MetadataRoute } from 'next'

const SHOPIFY_DOMAIN = 'pur-curie.myshopify.com';
// Updated to the current 2026 stable version
const GRAPHQL_URL = `https://${SHOPIFY_DOMAIN}/api/2026-01/graphql.json`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://purcurie.com';
  
  const staticPages = [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
    { url: `${baseUrl}/shipping`, lastModified: new Date() },
    { url: `${baseUrl}/refund`, lastModified: new Date() },
    { url: `${baseUrl}/terms`, lastModified: new Date() },
    { url: `${baseUrl}/privacy`, lastModified: new Date() },
  ];

  try {
    const response = await fetch(GRAPHQL_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN || '',
        'Accept': 'application/json',
      },
      next: { revalidate: 3600 },
      body: JSON.stringify({
        query: `{
          products(first: 100) { nodes { handle updatedAt } }
          collections(first: 50) { nodes { handle updatedAt } }
        }`,
      }),
    });

    const result = await response.json();

    // Debugging logs for Vercel
    if (result.errors) {
      console.error("Shopify API Error:", JSON.stringify(result.errors, null, 2));
      return staticPages;
    }

    if (!result?.data) {
      console.warn("No data returned from Shopify.");
      return staticPages;
    }

    // MATCHES YOUR LOGS: /product/[handle]
    const productUrls = (result.data.products?.nodes || []).map((p: any) => ({
      url: `${baseUrl}/product/${p.handle}`, 
      lastModified: new Date(p.updatedAt),
    }));

    // MATCHES YOUR LOGS: /categories/[handle]
    const collectionUrls = (result.data.collections?.nodes || []).map((c: any) => ({
      url: `${baseUrl}/categories/${c.handle}`,
      lastModified: new Date(c.updatedAt),
    }));

    return [...staticPages, ...productUrls, ...collectionUrls];

  } catch (error) {
    console.error("Sitemap build network error:", error);
    return staticPages;
  }
}