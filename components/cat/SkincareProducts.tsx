import { getCollectionProducts } from "@/lib/getCollectionProducts";
import Link from "next/link";
import Image from "next/image";

interface Props {
  params: { handle: string };
}

export default async function CategoryProductsPage({ params }: Props) {
  const collection = await getCollectionProducts(params.handle);

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
                    <a
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
      sizes="(max-width: 768px) 100vw, 500px"
      className="product-image"
    />
  )}
</div>

                      <div className="product-bottom">
                        <h5 className="product-heading">{product.title}</h5>
                        <div>
                          ₹ {product.priceRange.minVariantPrice.amount}{" "}
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
        </section>
      </div>
    </div>
  );
}
