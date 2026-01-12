import { getProductByHandle } from "@/lib/getProductByHandle";
import { mapProductDetail } from "@/lib/mapProductDetail";
import ProductDetail from "@/components/detail/ProductDetail";

interface Props {
  params: { handle: string };
}

export default async function ProductPage({ params }: Props) {
  const { handle } = await params;

  const shopifyProduct = await getProductByHandle(handle);
  if (!shopifyProduct) {
    return <div className="container">Product not found</div>;
  }

  const { product, similarProducts } = mapProductDetail(shopifyProduct);

  return <ProductDetail product={product} similarProducts={similarProducts} />;
}
