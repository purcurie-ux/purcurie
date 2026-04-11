import { getProductByHandle } from "@/lib/getProductByHandle";
import { mapProductDetail } from "@/lib/mapProductDetail";
import ProductDetail from "@/components/detail/ProductDetail";

interface Props {
  // ✅ FIX: params must be a Promise in Next.js 15/16
  params: Promise<{ handle: string }>;
}

export default async function ProductPage({ params }: Props) {
  // ✅ FIX: Await the params promise first
  const { handle } = await params;

  // 1. Fetch raw data from Shopify
  const shopifyProduct = await getProductByHandle(handle);
  
  if (!shopifyProduct) {
    return <div className="container">Product not found</div>;
  }

  // 2. Map the raw data to your components' format
  const { product, similarProducts } = mapProductDetail(shopifyProduct);

  // 3. Pass the mapped data down
  return <ProductDetail product={product} similarProducts={similarProducts} />;
}