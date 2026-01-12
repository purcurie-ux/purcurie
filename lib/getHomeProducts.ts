import { shopifyFetch } from "./shopify";

export async function getHomeProducts() {
  const query = `
    query ($handle: String!) {
      collection(handle: $handle) {
        products(first: 6) {
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
  `;

  const data = await shopifyFetch(query, {
    handle: "frontpage", // ⚠️ collection handle
  });

  return data.collection.products.edges.map((e: any) => e.node);
}
