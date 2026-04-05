 import Image from "next/image";
 
interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  slug: string;
  srcset: string;
}

interface ProductsListProps {
  products?: Product[];
  hasNextPage?: boolean;
  nextCursor?: string;
  hasPrevPage?: boolean;
  prevCursor?: string;
}

function ProductsList({
  products = [],
  hasNextPage = false,
  nextCursor,
  hasPrevPage = false,
  prevCursor,
}: ProductsListProps) {
  return (
    <div className="page-wrap">
       {/* Junip Store Key */}
      <span
        className="junip-store-key"
        data-store-key={process.env.NEXT_PUBLIC_JUNIP_STORE_KEY}
        style={{ display: "none" }}
      ></span>
      <section className="products">
        <div className="w-layout-blockcontainer container w-container">
          <div className="w-dyn-list">
            <div role="list" className="product-list w-dyn-items">
              {products.map((product) => (
                <div
                  role="listitem"
                  className="product-item w-dyn-item"
                  key={product.id}
                >
                  <a
                    href={`/product/${product.slug}`}
                    className="product-block w-inline-block"
                  >
                    <div className="product-img">
                      <Image
                      src={product.image}
                      alt=""
                      width={500}
                      height={500}
                      sizes="(max-width: 768px) 100vw, 500px"
                      className="product-image"
                    />
                    </div>

                    <div className="product-bottom">
                    <h5 className="product-heading">{product.name}</h5>
                    {/* Junip Star Rating */}
                    <span
                      className="junip-product-summary"
                      data-product-id={product.id.split('/').pop()}
                      style={{ display: "block", marginBottom: "4px" }}
                    ></span>
                    <div>{product.price}</div>
                  </div>

                    <div className="cursor">
                      <div>Detail</div>
                    </div>
                  </a>
                </div>
              ))}
            </div>

            <div
              role="navigation"
              aria-label="List"
              className="w-pagination-wrapper pagination"
            >
              {/* PREV */}
              {hasPrevPage && prevCursor && (
                <a
                  href={`?cursor=${prevCursor}&direction=prev`}
                  aria-label="Previous Page"
                  className="w-pagination-next primary-button outline"
                >
                  <div className="w-inline-block">Prev</div>
                </a>
              )}

              {/* NEXT */}
              {hasNextPage && nextCursor && (
                <a
                  href={`?cursor=${nextCursor}&direction=next`}
                  aria-label="Next Page"
                  className="w-pagination-next primary-button outline"
                >
                  <div className="w-inline-block">Next</div>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductsList;
