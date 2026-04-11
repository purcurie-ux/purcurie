import { getCollectionProducts } from "@/lib/getCollectionProducts";
import Link from "next/link";
import Image from "next/image";

interface Props {
  // ✅ FIX: params must be a Promise in Next.js 15+
  params: Promise<{ handle: string }>;
}

export default async function CategoryProductsPage({ params }: Props) {
  // ✅ FIX: Await the params before using them
  const { handle } = await params;
  const collection = await getCollectionProducts(handle);

  if (!collection) {
    return <div className="container">Collection not found</div>;
  }

  return (
    <div>
      {/* PAGE TITLE */}
      <div className="page-title">
        <div className="w-layout-blockcontainer container w-container">
          <div className="pg-inner">
            <h1 className="main-heading">{collection.title}</h1>
          </div>
        </div>
      </div>

      {/* PRODUCTS */}
      <div className="page-wrap">
        <section className="products">
          <div className="w-layout-blockcontainer container w-container">
            <div className="product-list">
              {collection.products.map((product: any) => {
                const image = product.images.edges[0]?.node;

                return (
                  <div key={product.id} className="product-item">
                    {/* ✅ OPTIMIZATION: Use Next.js Link instead of <a> */}
                    <Link
                      href={`/product/${product.handle}`}
                      className="product-block w-inline-block"
                    >
                      <div className="product-img">
                        {image && (
                          <Image
                            src={image.url}
                            alt={image.altText || product.title}
                            width={500}
                            height={500}
                            // ✅ LCP FIX: Only priority the first few items in the grid
                            priority={false} 
                            sizes="(max-width: 768px) 50vw, 33vw"
                            className="product-image"
                          />
                        )}
                      </div>

                      <div className="product-bottom">
                        <h5 className="product-heading">{product.title}</h5>
                        <div className="text-price">
                          ₹ {parseFloat(product.priceRange.minVariantPrice.amount).toFixed(0)}{" "}
                          {product.priceRange.minVariantPrice.currencyCode}
                        </div>
                      </div>

                      <div className="cursor">
                        <div>Detail</div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}