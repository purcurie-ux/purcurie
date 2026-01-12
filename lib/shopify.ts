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

    // 👇 IMPORTANT
    cache: "no-store",
  });

  const json = await res.json();
  return json.data;
}
