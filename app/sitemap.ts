import { MetadataRoute } from 'next'

const SHOPIFY_DOMAIN = 'purcurie.myshopify.com';
const GRAPHQL_URL = `https://${SHOPIFY_DOMAIN}/api/2024-01/graphql.json`;

async function fetchShopifyData() {
  const query = `
    {
      products(first: 100) {
        nodes {
          handle
          updatedAt
        }
      }
      collections(first: 50) {
        nodes {
          handle
          updatedAt
        }
      }
    }
  `;

  const response = await fetch(GRAPHQL_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!,
    },
    next: { revalidate: 3600 }, // Refreshes every hour
    body: JSON.stringify({ query }),
  });

  const { data } = await response.json();
  return data;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://purcurie.com';
  const { products, collections } = await fetchShopifyData();

  // Map Products
  const productUrls = products.nodes.map((p: any) => ({
    url: `${baseUrl}/products/${p.handle}`,
    lastModified: new Date(p.updatedAt),
  }));

  // Map Collections
  const collectionUrls = collections.nodes.map((c: any) => ({
    url: `${baseUrl}/collections/${c.handle}`,
    lastModified: new Date(c.updatedAt),
  }));

  return [
    { url: baseUrl, lastModified: new Date() },
    ...productUrls,
    ...collectionUrls,
  ];
}