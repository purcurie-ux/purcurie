// export function mapProductDetail(product: any) {
//   const images = product.images.edges.map((e: any) => e.node);

//   const mainImage = images[0];
//   const moreImages = images.slice(1).map((img: any) => ({
//     url: img.url,
//   }));

//   const variant = product.variants.edges[0]?.node;
//   const collection = product.collections.edges[0]?.node;

//   return {
//     product: {
//       mainImage: mainImage?.url,
//       mainImageSrcset: mainImage?.url,
//       moreImages,
//       title: product.title,
//       price: `$ ${variant.price.amount} ${variant.price.currencyCode}`,
//       description: product.description,
//       category: collection?.title || "",
//       sku: variant?.sku || "",
//       tag: product.tags?.[0] || "",
//       skuId: variant?.id,
//       productId: product.id,
//     },
//     similarProducts:
//       collection?.products.edges
//         .map((e: any) => e.node)
//         .filter((p: any) => p.id !== product.id)
//         .map((p: any) => ({
//           id: p.id,
//           slug: p.handle,
//           title: p.title,
//           price: `$ ${p.priceRange.minVariantPrice.amount} ${p.priceRange.minVariantPrice.currencyCode}`,
//           image: p.images.edges[0]?.node?.url,
//           srcset: p.images.edges[0]?.node?.url,
//         })) || [],
//   };
// }




// export function mapProductDetail(shopifyProduct: any) {
//   const variant = shopifyProduct.variants.edges[0]?.node;
//   const images = shopifyProduct.images.edges.map((edge: any) => edge.node);
//   const collection = shopifyProduct.collections.edges[0]?.node;

//   const product = {
//     id: shopifyProduct.id,            // ✅ ADD THIS: Components expect 'id
//     mainImage: images[0]?.url || "",
//     mainImageSrcset: images[0]?.url || "",
//     moreImages: images.map((img: any) => ({ url: img.url })),
//     title: shopifyProduct.title,
//     handle: shopifyProduct.handle,    // ✅ Ensure this is here for routing
//     price: `₹ ${parseFloat(variant?.price.amount).toFixed(2)} ${
//       variant?.price.currencyCode
//     }`,
//     description: shopifyProduct.description,
//     descriptionHtml: shopifyProduct.descriptionHtml, // ✅ ADDED THIS LINE
//     category: collection?.title || "Uncategorized",
//     sku: variant?.sku || "N/A",
//     tag: shopifyProduct.tags[0] || "",
//     skuId: variant?.id || "",
//     productId: shopifyProduct.id,
//   };

//   const similarProducts =
//     collection?.products.edges
//       .filter((edge: any) => edge.node.id !== shopifyProduct.id)
//       .slice(0, 3)
//       .map((edge: any, index: number) => {
//         const node = edge.node;
//         const img = node.images.edges[0]?.node;
//         const price = node.priceRange.minVariantPrice;

//         return {
//           id: node.id,
//           slug: node.handle,
//           title: node.title,
//           price: `₹ ${parseFloat(price.amount).toFixed(2)} ${
//             price.currencyCode
//           }`,
//           image: img?.url || "",
//           srcset: img?.url || "",
//         };
//       }) || [];

//   return { product, similarProducts };
// }

export function mapProductDetail(shopifyProduct: any) {
  const variant = shopifyProduct.variants.edges[0]?.node;
  const images = shopifyProduct.images.edges.map((edge: any) => edge.node);
  const collection = shopifyProduct.collections.edges[0]?.node;

  // ✅ Parse clinical_stats metafield (stored as JSON string in Shopify)
  let clinicalStats = null;
  try {
    const raw = shopifyProduct.clinicalStats?.value;
    if (raw) clinicalStats = JSON.parse(raw);
  } catch {
    clinicalStats = null;
  }

  // ✅ Parse editorial metafield
  let editorial = null;
  try {
    const raw = shopifyProduct.editorial?.value;
    if (raw) editorial = JSON.parse(raw);
  } catch {
    editorial = null;
  }

  // ✅ Parse editorial_reverse metafield
  let editorialReverse = null;
  try {
    const raw = shopifyProduct.editorialReverse?.value;
    if (raw) editorialReverse = JSON.parse(raw);
  } catch {
    editorialReverse = null;
  }

  // ✅ Parse key_ingredients metafield
  let keyIngredients = null;
  try {
    const raw = shopifyProduct.keyIngredients?.value;
    if (raw) keyIngredients = JSON.parse(raw);
  } catch {
    keyIngredients = null;
  }

  // ✅ Parse features_split metafield
  let featuresSplit = null;
  try {
    const raw = shopifyProduct.featuresSplit?.value;
    if (raw) featuresSplit = JSON.parse(raw);
  } catch {
    featuresSplit = null;
  }

  const product = {
    id: shopifyProduct.id,
    mainImage: images[0]?.url || "",
    mainImageSrcset: images[0]?.url || "",
    moreImages: images.map((img: any) => ({ url: img.url })),
    title: shopifyProduct.title,
    handle: shopifyProduct.handle,
    price: `₹ ${parseFloat(variant?.price.amount).toFixed(2)} ${
      variant?.price.currencyCode
    }`,
    description: shopifyProduct.description,
    descriptionHtml: shopifyProduct.descriptionHtml,
    category: collection?.title || "Uncategorized",
    sku: variant?.sku || "N/A",
    tag: shopifyProduct.tags[0] || "",
    skuId: variant?.id || "",
    productId: shopifyProduct.id,

    // ✅ Clinical stats — null if not set in Shopify
    clinicalStats: clinicalStats as {
      headingNormal: string;
      headingItalic: string;
      bodyText: string;
      stats: { value: string; description: string }[];
    } | null,

    // ✅ Editorial section — null if not set in Shopify
    editorial: editorial as {
      heading: string;
      paragraphs: string[];
      mainImage: { url: string; alt?: string };
      secondaryImages: { url: string; alt?: string }[];
    } | null,

    // ✅ Editorial Reverse section — null if not set in Shopify
    editorialReverse: editorialReverse as {
      heading: string;
      paragraph: string;
      mainImage: { url: string; alt?: string };
      stackImages: { url: string; alt?: string }[];
    } | null,

    // ✅ Key Ingredients section — null if not set in Shopify
    keyIngredients: keyIngredients as {
      label?: string;
      keywords?: string[];
      buttonText?: string;
      buttonLink?: string;
      ingredients: {
        name: string;
        description: string;
        image: { url: string; alt?: string };
      }[];
    } | null,

    // ✅ Features Split section — null if not set in Shopify
    featuresSplit: featuresSplit as {
      heading: string;
      body?: string;
      features?: string[];
      image: { url: string; alt?: string };
    } | null,
  };

  const similarProducts =
    collection?.products.edges
      .filter((edge: any) => edge.node.id !== shopifyProduct.id)
      .slice(0, 3)
      .map((edge: any) => {
        const node = edge.node;
        const img = node.images.edges[0]?.node;
        const price = node.priceRange.minVariantPrice;

        return {
          id: node.id,
          slug: node.handle,
          title: node.title,
          price: `₹ ${parseFloat(price.amount).toFixed(2)} ${
            price.currencyCode
          }`,
          image: img?.url || "",
          srcset: img?.url || "",
        };
      }) || [];

  return { product, similarProducts };
}