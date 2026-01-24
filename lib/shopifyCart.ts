// import { shopifyFetch } from "./shopify";

// // export async function create() {
// //   const query = `
// //     mutation {
// //       Create {
// //          {
// //           id
// //           checkoutUrl
// //         }
// //       }
// //     }
// //   `;
// //   const data = await shopifyFetch(query);
// //   return data.Create.;
// // }

// // export async function addTo(
// //   Id: string,
// //   variantId: string,
// //   qty: number
// // ) {
// //   const query = `
// //     mutation ($Id: ID!, $lines: [LineInput!]!) {
// //       LinesAdd(Id: $Id, lines: $lines) {
// //          {
// //           id
// //           checkoutUrl
// //         }
// //       }
// //     }
// //   `;

// //   return shopifyFetch(query, {
// //     Id,
// //     lines: [
// //       {
// //         merchandiseId: variantId,
// //         quantity: qty,
// //       },
// //     ],
// //   });
// // }




// export async function get(Id: string) {
//   const query = `
//       query ($id: ID!) {
//         (id: $id) {
//           id
//           checkoutUrl
//           totalQuantity
//           lines(first: 20) {
//             edges {
//               node {
//                 id
//                 quantity
//                 merchandise {
//                   ... on ProductVariant {
//                     id
//                     price {
//                       amount
//                       currencyCode
//                     }
//                     product {
//                       title
//                     }
//                     image {
//                       url
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     `;
//   return shopifyFetch(query, { id: Id });
// }

// export async function updateQty(Id: string, lineId: string, qty: number) {
//   const query = `
//       mutation ($Id:ID!,$lines:[LineUpdateInput!]!) {
//         LinesUpdate(Id:$Id,lines:$lines){
//           { id }
//         }
//       }
//     `;
//   return shopifyFetch(query, {
//     Id,
//     lines: [{ id: lineId, quantity: qty }],
//   });
// }

// export async function removeItem(Id: string, lineId: string) {
//   const query = `
//       mutation ($Id:ID!,$lineIds:[ID!]!) {
//         LinesRemove(Id:$Id,lineIds:$lineIds){
//           { id }
//         }
//       }
//     `;
//   return shopifyFetch(query, {
//     Id,
//     lineIds: [lineId],
//   });
// }
  



async function shopifyFetch(query: string, variables?: any) {
  const res = await fetch(process.env.NEXT_PUBLIC_SHOPIFY_URL!, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token":
        process.env.NEXT_PUBLIC_SHOPIFY_TOKEN!,
    },
    body: JSON.stringify({ query, variables }),
  });

  return res.json();
}

/* ---------------- CREATE  ---------------- */

export async function create() {
  const query = `
      mutation {
        Create {
           {
            id
            checkoutUrl
          }
        }
      }
    `;

  const res = await shopifyFetch(query);
  return res.data.Create.;
}

/* ---------------- ADD TO  ---------------- */

export async function addTo(
  Id: string,
  variantId: string,
  quantity: number
) {
  const query = `
      mutation ($Id: ID!, $lines: [LineInput!]!) {
        LinesAdd(Id: $Id, lines: $lines) {
           {
            id
          }
        }
      }
    `;

  return shopifyFetch(query, {
    Id,
    lines: [
      {
        merchandiseId: variantId,
        quantity,
      },
    ],
  });
}

/* ---------------- GET  ---------------- */

export async function get(Id: string) {
  const query = `
        query ($id: ID!) {
          (id: $id) {
            id
            checkoutUrl
            totalQuantity
            lines(first: 20) {
              edges {
                node {
                  id
                  quantity
                  merchandise {
                    ... on ProductVariant {
                      id
                      price {
                        amount
                        currencyCode
                      }
                      product {
                        title
                      }
                      image {
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `;
  return shopifyFetch(query, { id: Id });
}

/* ---------------- UPDATE QTY ---------------- */

export async function updateQty(Id: string, lineId: string, qty: number) {
  const query = `
        mutation ($Id:ID!,$lines:[LineUpdateInput!]!) {
          LinesUpdate(Id:$Id,lines:$lines){
            { id }
          }
        }
      `;
  return shopifyFetch(query, {
    Id,
    lines: [{ id: lineId, quantity: qty }],
  });
}

/* ---------------- REMOVE ITEM ---------------- */

export async function removeItem(Id: string, lineId: string) {
  const query = `
        mutation ($Id:ID!,$lineIds:[ID!]!) {
          LinesRemove(Id:$Id,lineIds:$lineIds){
            { id }
          }
        }
      `;
  return shopifyFetch(query, {
    Id,
    lineIds: [lineId],
  });
}
  