import { getProductByHandle } from "@/lib/getProductByHandle";
import { mapProductDetail } from "@/lib/mapProductDetail";
import ProductDetail from "@/components/detail/ProductDetail";

interface Props {
  params: { handle: string };
}

export default async function ProductPage({ params }: Props) {
  const { handle } = await params;

  // 1. Fetch raw data from Shopify
  const shopifyProduct = await getProductByHandle(handle);
  
  if (!shopifyProduct) {
    return <div className="container">Product not found</div>;
  }

  // ✅ 2. FIX: Extract the variables 'product' and 'similarProducts' 
  // by passing the raw data through your mapper function.
  const { product, similarProducts } = mapProductDetail(shopifyProduct);

  // 3. Now the variables exist and can be passed down
  return <ProductDetail product={product} similarProducts={similarProducts} />;
}