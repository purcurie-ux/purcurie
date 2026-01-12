import { shopifyFetch } from "./shopify";

export async function getCollectionProducts(handle: string) {
  const query = `
    query ($handle: String!) {
      collection(handle: $handle) {
        id
        title
        products(first: 50) {
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

  const data = await shopifyFetch(query, { handle });

  if (!data?.collection) return null;

  return {
    id: data.collection.id,
    title: data.collection.title,
    products: data.collection.products.edges.map((e: any) => e.node),
  };
}
