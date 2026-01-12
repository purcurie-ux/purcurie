// // // import { shopifyFetch } from "./shopify";

// // // export async function getPaginatedProducts(first = 9, after?: string) {
// // //   const query = `
// // //     query ($first: Int!, $after: String) {
// // //       products(first: $first, after: $after) {
// // //         pageInfo {
// // //           hasNextPage
// // //           endCursor
// // //         }
// // //         edges {
// // //           node {
// // //             id
// // //             title
// // //             handle
// // //             images(first: 1) {
// // //               edges {
// // //                 node {
// // //                   url
// // //                   altText
// // //                 }
// // //               }
// // //             }
// // //             priceRange {
// // //               minVariantPrice {
// // //                 amount
// // //                 currencyCode
// // //               }
// // //             }
// // //           }
// // //         }
// // //       }
// // //     }
// // //   `;

// // //   const data = await shopifyFetch(query, {
// // //     first,
// // //     after: after || null,
// // //   });

// // //   return data.products;
// // // }





// // import { shopifyFetch } from "./shopify";

// // export async function getPaginatedProducts(first = 9, after?: string) {
// //   const query = `
// //     query ($first: Int!, $after: String) {
// //       products(first: $first, after: $after) {
// //         pageInfo {
// //           hasNextPage
// //           endCursor
// //         }
// //         edges {
// //           node {
// //             id
// //             title
// //             handle
// //             images(first: 1) {
// //               edges {
// //                 node {
// //                   url
// //                   altText
// //                 }
// //               }
// //             }
// //             priceRange {
// //               minVariantPrice {
// //                 amount
// //                 currencyCode
// //               }
// //             }
// //           }
// //         }
// //       }
// //     }
// //   `;

// //   const data = await shopifyFetch(query, {
// //     first,
// //     after: after || null,
// //   });

// //   return data.products;
// // }





// import { shopifyFetch } from "./shopify";

// export async function getPaginatedProducts(first = 9, after?: string) {
//   const query = `
//     query ($first: Int!, $after: String) {
//       products(first: $first, after: $after) {
//         pageInfo {
//           hasNextPage
//           hasPreviousPage
//           startCursor
//           endCursor
//         }
//         edges {
//           node {
//             id
//             title
//             handle
//             images(first: 1) {
//               edges {
//                 node {
//                   url
//                   altText
//                 }
//               }
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

//   const data = await shopifyFetch(query, {
//     first,
//     after: after || null,
//   });

//   return data.products;
// }






import { shopifyFetch } from "./shopify";

export async function getPaginatedProducts(
  limit = 9,
  cursor?: string,
  direction: "next" | "prev" = "next"
) {
  const isPrev = direction === "prev";

  const variables: any = isPrev
    ? { last: limit, before: cursor }
    : { first: limit, after: cursor };

  const query = `
    query (
      $first: Int
      $after: String
      $last: Int
      $before: String
    ) {
      products(
        first: $first
        after: $after
        last: $last
        before: $before
      ) {
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
        edges {
          node {
            id
            title
            handle
            images(first: 1) {
              edges {
                node {
                  url
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
  `;

  const data = await shopifyFetch(query, variables);
  return data.products;
}
