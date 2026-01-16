export function mapProducts(products: any[]) {
  return products.map((p) => {
    const image = p.images.edges[0]?.node;

    return {
      id: p.id,
      name: p.title,
      slug: p.handle,
      price: `₹ ${p.priceRange.minVariantPrice.amount} ${p.priceRange.minVariantPrice.currencyCode}`,
      image: image?.url,
      srcset: image?.url,
    };
  });
}
