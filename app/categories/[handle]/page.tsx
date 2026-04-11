import { getCollectionProducts } from "@/lib/getCollectionProducts";
import Image from "next/image"; // ✅ Use Next.js Image for performance

interface Props {
  // ✅ FIX: params must be a Promise in Next.js 15/16
  params: Promise<{ handle: string }>;
}

export default async function CategoryProductsPage({ params }: Props) {
  // ✅ FIX: Correctly await the params promise
  const resolvedParams = await params;
  const handle = resolvedParams.handle;
  
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
            <h1 className="main-heading">
              {collection.title}
            </h1>
          </div>
        </div>
      </div>

      {/* PRODUCTS */}
      <div className="page-wrap">
        <section className="products">
          <div className="w-layout-blockcontainer container w-container">
            <div className="w-dyn-list">
              <div role="list" className="product-list w-dyn-items">
                {collection.products.map((product: any) => {
                  const image = product.images.edges[0]?.node;

                  return (
                    <div
                      key={product.id}
                      role="listitem"
                      className="product-item w-dyn-item"
                    >
                      <a
                        href={`/product/${product.handle}`}
                        className="product-block w-inline-block"
                      >
                        <div className="product-img">
                          {image && (
                            // ✅ OPTIMIZATION: Use Next.js Image component
                            // This fixes the "957 KiB image size" issue in your report
                            <Image
                              src={image.url}
                              alt={image.altText || product.title}
                              width={400}
                              height={400}
                              className="product-image"
                              sizes="(max-width: 768px) 50vw, 33vw"
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
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}