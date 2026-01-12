import { shopifyFetch } from "./shopify";

export async function getBestSellerProduct() {
  const query = `
    query ($handle: String!) {
      collection(handle: $handle) {
        products(first: 1) {
          edges {
            node {
              id
              title
              handle
              images(first: 5) {
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
    handle: "best-seller", // ⚠️ confirm handle
  });

  if (!data?.collection?.products?.edges?.length) {
    return null;
  }

  return data.collection.products.edges[0].node;
}
