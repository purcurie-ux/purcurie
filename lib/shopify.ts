// const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!;
// const token = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN!;
// const version = process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION!;

// // export async function shopifyFetch(query: string, variables = {}) {
// //   const res = await fetch(`https://${domain}/api/${version}/graphql.json`, {
// //     method: "POST",
// //     headers: {
// //       "Content-Type": "application/json",
// //       "X-Shopify-Storefront-Access-Token": token,
// //     },
// //     body: JSON.stringify({ query, variables }),
// //     next: { revalidate: 60 },
// //   });

// //   const json = await res.json();
// //   return json.data;
// // }




// export async function shopifyFetch(query: string, variables = {}) {
//   const res = await fetch(`https://${domain}/api/${version}/graphql.json`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "X-Shopify-Storefront-Access-Token": token,
//     },
//     body: JSON.stringify({ query, variables }),

//     // 👇 IMPORTANT
//     cache: "no-store",
//   });

//   const json = await res.json();
//   return json.data;
// }





// const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!;
// const token = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN!;
// const version = process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION!;

// export async function shopifyFetch(query: string, variables = {}) {
//   const res = await fetch(`https://${domain}/api/${version}/graphql.json`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "X-Shopify-Storefront-Access-Token": token,
//     },
//     body: JSON.stringify({ query, variables }),

//     // 👇 IMPORTANT
//     cache: "no-store",
//   });

//   const json = await res.json();
//   return json.data;
// }
// // lib/shopify.ts

// export async function getLivePrices(variantIds: string[]) {
//   const query = `
//     query getLivePrices($ids: [ID!]!) {
//       nodes(ids: $ids) {
//         ... on ProductVariant {
//           id
//           price {
//             amount
//             currencyCode
//           }
//           product {
//             title
//             featuredImage {
//               url
//             }
//           }
//         }
//       }
//     }
//   `;

//   // Ensure 'shopifyFetch' is imported or defined in this file
//   const response = await shopifyFetch(query, { ids: variantIds });
//   return response.nodes;
// }

// // lib/shopify.ts

// export async function searchProducts(searchTerm: string) {
//   const query = `
//     query searchProducts($query: String!) {
//       products(first: 20, query: $query) {
//         edges {
//           node {
//             id
//             title
//             handle
//             tags
//             description
//             featuredImage {
//               url
//               altText
//             }
//             priceRange {
//               minVariantPrice {
//                 amount
//                 currencyCode
//               }
//             }
//           }
//         }
//       }
//     }
//   `;

//   // Note: We wrap the search term in asterisks like `*turmeric*` 
//   // so it matches partial words as well!
//   const variables = {
//     query: `*${searchTerm}*`
//   };

//   const response = await shopifyFetch(query, variables);
//   return response.products.edges.map((edge: any) => edge.node);
// }


const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!;
const token = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN!;
const version = process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION!;

export async function shopifyFetch(query: string, variables = {}) {
  const res = await fetch(`https://${domain}/api/${version}/graphql.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": token,
    },
    body: JSON.stringify({ query, variables }),
    cache: "no-store",
  });

  const json = await res.json();
  return json.data;
}

export async function getLivePrices(variantIds: string[]) {
  const query = `
    query getLivePrices($ids: [ID!]!) {
      nodes(ids: $ids) {
        ... on ProductVariant {
          id
          price {
            amount
            currencyCode
          }
          product {
            title
            featuredImage {
              url
            }
          }
        }
      }
    }
  `;

  const response = await shopifyFetch(query, { ids: variantIds });
  return response.nodes;
}

// lib/shopify.ts

export async function searchProducts(searchTerm: string) {
  const term = searchTerm.trim();
  if (!term) return [];

  /**
   * IMPORTANT: To search across standard metafields, we use the 'product_tags' 
   * and 'title' filters. For specific category metafields, we target the keys 
   * found in your settings screenshot.
   */
  const shopifyQuery = `title:*${term}* OR tag:*${term}* OR sku:*${term}* OR product_type:*${term}* OR metafields.shopify.active-ingredient:*${term}* OR metafields.shopify.cosmetic-function:*${term}*`;

  const gqlQuery = `
    query searchProducts($query: String!) {
      products(first: 20, query: $query) {
        edges {
          node {
            id
            title
            handle
            tags
            description
            featuredImage {
              url
              altText
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
  `;

  // We set cache to 'no-store' to ensure we get live results immediately
  const response = await shopifyFetch(gqlQuery, { query: shopifyQuery });

  if (!response?.products?.edges) return [];

  return response.products.edges.map((edge: any) => edge.node);
}