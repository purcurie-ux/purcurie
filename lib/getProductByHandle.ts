// import { shopifyFetch } from "./shopify";

// export async function getProductByHandle(handle: string) {
//   const query = `
//     query ($handle: String!) {
//       product(handle: $handle) {
//         id
//         title
//         description
//         descriptionHtml
//         tags
//         images(first: 10) {
//           edges {
//             node {
//               url
//               altText
//             }
//           }
//         }
//         variants(first: 1) {
//           edges {
//             node {
//               id
//               sku
//               price {
//                 amount
//                 currencyCode
//               }
//             }
//           }
//         }
//         collections(first: 1) {
//           edges {
//             node {
//               title
//               handle
//               products(first: 4) {
//                 edges {
//                   node {
//                     id
//                     title
//                     handle
//                     images(first: 1) {
//                       edges {
//                         node {
//                           url
//                           altText
//                         }
//                       }
//                     }
//                     priceRange {
//                       minVariantPrice {
//                         amount
//                         currencyCode
//                       }
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   `;

//   const data = await shopifyFetch(query, { handle });
//   if (!data?.product) return null;

//   return data.product;
// }

import { shopifyFetch } from "./shopify";

export async function getProductByHandle(handle: string) {
  const query = `
    query ($handle: String!) {
      product(handle: $handle) {
        id
        title
        description
        descriptionHtml
        tags
        images(first: 10) {
          edges {
            node {
              url
              altText
            }
          }
        }
        variants(first: 1) {
          edges {
            node {
              id
              sku
              price {
                amount
                currencyCode
              }
            }
          }
        }
        collections(first: 1) {
          edges {
            node {
              title
              handle
              products(first: 4) {
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

        # ✅ Clinical Stats metafield
        clinicalStats: metafield(namespace: "custom", key: "clinical_stats") {
          value
        }

        # ✅ Editorial Section metafield
        editorial: metafield(namespace: "custom", key: "editorial") {
          value
        }

        # ✅ Editorial Reverse Section metafield
        editorialReverse: metafield(namespace: "custom", key: "editorial_reverse") {
          value
        }

        # ✅ Key Ingredients metafield
        keyIngredients: metafield(namespace: "custom", key: "key_ingredients") {
          value
        }

        # ✅ Features Split metafield
        featuresSplit: metafield(namespace: "custom", key: "features_split") {
          value
        }
      }
    }
  `;

  const data = await shopifyFetch(query, { handle });
  if (!data?.product) return null;

  return data.product;
}