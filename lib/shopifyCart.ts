// import { shopifyFetch } from "./shopify";

// // export async function createCart() {
// //   const query = `
// //     mutation {
// //       cartCreate {
// //         cart {
// //           id
// //           checkoutUrl
// //         }
// //       }
// //     }
// //   `;
// //   const data = await shopifyFetch(query);
// //   return data.cartCreate.cart;
// // }

// // export async function addToCart(
// //   cartId: string,
// //   variantId: string,
// //   qty: number
// // ) {
// //   const query = `
// //     mutation ($cartId: ID!, $lines: [CartLineInput!]!) {
// //       cartLinesAdd(cartId: $cartId, lines: $lines) {
// //         cart {
// //           id
// //           checkoutUrl
// //         }
// //       }
// //     }
// //   `;

// //   return shopifyFetch(query, {
// //     cartId,
// //     lines: [
// //       {
// //         merchandiseId: variantId,
// //         quantity: qty,
// //       },
// //     ],
// //   });
// // }




// export async function getCart(cartId: string) {
//   const query = `
//       query ($id: ID!) {
//         cart(id: $id) {
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
//   return shopifyFetch(query, { id: cartId });
// }

// export async function updateQty(cartId: string, lineId: string, qty: number) {
//   const query = `
//       mutation ($cartId:ID!,$lines:[CartLineUpdateInput!]!) {
//         cartLinesUpdate(cartId:$cartId,lines:$lines){
//           cart{ id }
//         }
//       }
//     `;
//   return shopifyFetch(query, {
//     cartId,
//     lines: [{ id: lineId, quantity: qty }],
//   });
// }

// export async function removeItem(cartId: string, lineId: string) {
//   const query = `
//       mutation ($cartId:ID!,$lineIds:[ID!]!) {
//         cartLinesRemove(cartId:$cartId,lineIds:$lineIds){
//           cart{ id }
//         }
//       }
//     `;
//   return shopifyFetch(query, {
//     cartId,
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

/* ---------------- CREATE CART ---------------- */

export async function createCart() {
  const query = `
      mutation {
        cartCreate {
          cart {
            id
            checkoutUrl
          }
        }
      }
    `;

  const res = await shopifyFetch(query);
  return res.data.cartCreate.cart;
}

/* ---------------- ADD TO CART ---------------- */

export async function addToCart(
  cartId: string,
  variantId: string,
  quantity: number
) {
  const query = `
      mutation ($cartId: ID!, $lines: [CartLineInput!]!) {
        cartLinesAdd(cartId: $cartId, lines: $lines) {
          cart {
            id
          }
        }
      }
    `;

  return shopifyFetch(query, {
    cartId,
    lines: [
      {
        merchandiseId: variantId,
        quantity,
      },
    ],
  });
}

/* ---------------- GET CART ---------------- */

export async function getCart(cartId: string) {
  const query = `
        query ($id: ID!) {
          cart(id: $id) {
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
  return shopifyFetch(query, { id: cartId });
}

/* ---------------- UPDATE QTY ---------------- */

export async function updateQty(cartId: string, lineId: string, qty: number) {
  const query = `
        mutation ($cartId:ID!,$lines:[CartLineUpdateInput!]!) {
          cartLinesUpdate(cartId:$cartId,lines:$lines){
            cart{ id }
          }
        }
      `;
  return shopifyFetch(query, {
    cartId,
    lines: [{ id: lineId, quantity: qty }],
  });
}

/* ---------------- REMOVE ITEM ---------------- */

export async function removeItem(cartId: string, lineId: string) {
  const query = `
        mutation ($cartId:ID!,$lineIds:[ID!]!) {
          cartLinesRemove(cartId:$cartId,lineIds:$lineIds){
            cart{ id }
          }
        }
      `;
  return shopifyFetch(query, {
    cartId,
    lineIds: [lineId],
  });
}
  