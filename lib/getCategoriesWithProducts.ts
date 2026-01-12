import { shopifyFetch } from "./shopify";

export async function getCategoriesWithProducts() {
  const query = `
    query {
      collections(first: 20) {
        edges {
          node {
            id
            title
            handle
            image {
              url
              altText
            }
            products(first: 3) {
              edges {
                node {
                  id
                  title
                  handle
                  images(first: 1) {
                    edges {
                      node {
                        url
                        altText
                      }
                    }
                  }
                  priceRange {
                    minVariantPrice {
                      amount
                      currencyCode
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  const data = await shopifyFetch(query);
  if (!data?.collections) return [];

  // 🚫 EXCLUDE collections you don't want
  const excludedHandles = ["frontpage", "best-seller"];

  return data.collections.edges
    .map((e: any) => e.node)
    .filter((collection: any) => !excludedHandles.includes(collection.handle));
}
