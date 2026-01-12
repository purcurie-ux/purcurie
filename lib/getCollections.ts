// import { shopifyFetch } from "./shopify";

// export async function getCollections() {
//   const query = `
//     query {
//       collections(first: 3) {
//         edges {
//           node {
//             id
//             title
//             handle
//             image {
//               url
//               altText
//             }
//           }
//         }
//       }
//     }
//   `;

//   const data = await shopifyFetch(query);
//   if (!data?.collections) return [];

//   return data.collections.edges.map((e: any) => e.node);
// }




import { shopifyFetch } from "./shopify";

export async function getCollections() {
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
          }
        }
      }
    }
  `;

  const data = await shopifyFetch(query);
  if (!data?.collections) return [];

  // 🚫 collections you want to exclude
  const excludedHandles = ["frontpage", "best-seller"];

  return data.collections.edges
    .map((e: any) => e.node)
    .filter((collection: any) => !excludedHandles.includes(collection.handle))
    .slice(0, 3); // ✅ show only first 3 categories
}
