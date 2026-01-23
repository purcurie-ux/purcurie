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




export function mapProductDetail(shopifyProduct: any) {
  const variant = shopifyProduct.variants.edges[0]?.node;
  const images = shopifyProduct.images.edges.map((edge: any) => edge.node);
  const collection = shopifyProduct.collections.edges[0]?.node;

  const product = {
    mainImage: images[0]?.url || "",
    mainImageSrcset: images[0]?.url || "",
    moreImages: images.map((img: any) => ({ url: img.url })),
    title: shopifyProduct.title,
    price: `₹ ${parseFloat(variant?.price.amount).toFixed(2)} ${
      variant?.price.currencyCode
    }`,
    description: shopifyProduct.description,
    descriptionHtml: shopifyProduct.descriptionHtml, // ✅ ADDED THIS LINE
    category: collection?.title || "Uncategorized",
    sku: variant?.sku || "N/A",
    tag: shopifyProduct.tags[0] || "",
    skuId: variant?.id || "",
    productId: shopifyProduct.id,
  };

  const similarProducts =
    collection?.products.edges
      .filter((edge: any) => edge.node.id !== shopifyProduct.id)
      .slice(0, 3)
      .map((edge: any, index: number) => {
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