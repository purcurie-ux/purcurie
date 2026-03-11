import { MetadataRoute } from 'next'

const SHOPIFY_DOMAIN = 'purcurie.myshopify.com';
const GRAPHQL_URL = `https://${SHOPIFY_DOMAIN}/api/2024-10/graphql.json`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://purcurie.com';
  
  // Default pages that always exist
  const staticPages = [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
  ];

  try {
    const response = await fetch(GRAPHQL_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN || '',
        // Adding this line often fixes "silent" fetch failures
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

    // Safety check: If Shopify returns an error or empty data
    if (!result?.data) {
      console.warn("Shopify API returned no data, serving static sitemap.");
      return staticPages;
    }

    const productUrls = (result.data.products?.nodes || []).map((p: any) => ({
      url: `${baseUrl}/products/${p.handle}`,
      lastModified: new Date(p.updatedAt),
    }));

    const collectionUrls = (result.data.collections?.nodes || []).map((c: any) => ({
      url: `${baseUrl}/collections/${c.handle}`,
      lastModified: new Date(c.updatedAt),
    }));

    return [...staticPages, ...productUrls, ...collectionUrls];

  } catch (error) {
    // If the network or fetch fails entirely, the build will still pass!
    console.error("Sitemap build error:", error);
    return staticPages;
  }
}