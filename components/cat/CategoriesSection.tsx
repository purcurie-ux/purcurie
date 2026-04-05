import { getCategoriesWithProducts } from "@/lib/getCategoriesWithProducts";
import Link from "next/link";
import Image from "next/image";


async function CategoriesSection() {
  const categories = await getCategoriesWithProducts();
  return (
    <div className="page-wrap">
      {/* Junip Store Key */}
    <span
      className="junip-store-key"
      data-store-key={process.env.NEXT_PUBLIC_JUNIP_STORE_KEY}
      style={{ display: "none" }}
    ></span>
      <section className="categories">
        <div className="w-layout-blockcontainer container w-container">
          <div className="category-inner">
            {categories.map((category: any) => (
              <div key={category.id} className="category-block">
                {/* LEFT */}
                <div className="category-left">
                 {category.image?.url && (
                <Image
                  src={category.image.url}
                  alt={category.image.altText || category.title}
                  width={500}
                  height={500}
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="category-image"
                />
                  )}
                  <div className="category-text">{category.title}</div>
                </div>

                {/* RIGHT */}
                <div className="category-right">
                  <div className="product-collection w-dyn-list">
                    <div role="list" className="product-list w-dyn-items">
                      {category.products.edges.map((p: any) => {
                        const product = p.node;
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
                                {image?.url && (
                                  <Image
                              src={image.url}
                              alt={image.altText || product.title}
                              width={500}
                              height={500}
                              sizes="(max-width: 768px) 100vw, 500px"
                              className="product-image-02"
                            />
                                )}
                              </div>

                           <div className="product-bottom">
                          <h5 className="product-heading">
                            {product.title}
                          </h5>
                          {/* Junip Star Rating */}
                          <span
                            className="junip-product-summary"
                            data-product-id={product.id.split('/').pop()}
                            style={{ display: "block", marginBottom: "4px" }}
                          ></span>
                          <div>
                            ₹  {product.priceRange.minVariantPrice.amount}{" "}
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

                  {/* VIEW MORE */}
                  <a
                    href={`/categories/${category.handle}`}
                    className="primary-button outline w-inline-block"
                    style={{ marginTop: "20px" }}
                  >
                    <div>View More</div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="faq">
        <div className="w-layout-blockcontainer container w-container">
          <div className="overflow-hidden">
            <div className="sub-title">
              <Image
              src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6870de521dcfdb3c101ba086_sub-title.svg"
              alt="Sub Title Icon"
              width={20}
              height={20}
            />
              <div>Frequently Asked Questions</div>
            </div>
          </div>
          <div
            data-current="Tab 5"
            data-easing="ease"
            data-duration-in="300"
            data-duration-out="100"
            className="faq-inner w-tabs"
          >
            <div className="faq-left w-tab-menu">
              <a
                data-w-tab="Tab 5"
                className="faq-wrap top w-inline-block w-tab-link w--current"
              >
                <div>How can I find the right product for my skin type?</div>
            <Image
            src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6870a5867e04b6e9cab6c936_faq-arrow.svg"
            alt="Arrow"
            width={16}
            height={16}
            className="arrow"
          />
              </a>
              <a
                data-w-tab="Tab 1"
                className="faq-wrap w-inline-block w-tab-link"
              >
                <div>Are Purcurie products cruelty-free?</div>
                <Image
              src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6870a5867e04b6e9cab6c936_faq-arrow.svg"
              alt="Arrow"
              width={16}
              height={16}
              className="arrow"
            />
              </a>
              <a
                data-w-tab="Tab 2"
                className="faq-wrap w-inline-block w-tab-link"
              >
                <div>How can I stay updated on new launches and offers?</div>
               <Image
                src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6870a5867e04b6e9cab6c936_faq-arrow.svg"
                alt="Arrow"
                width={16}
                height={16}
                className="arrow"
              />
              </a>
              <a
                data-w-tab="Tab 3"
                className="faq-wrap w-inline-block w-tab-link"
              >
                <div>Are your products tested for long-lasting wear?</div>
              <Image
              src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6870a5867e04b6e9cab6c936_faq-arrow.svg"
              alt="Arrow"
              width={16}
              height={16}
              className="arrow"
            />
              </a>
              <a
                data-w-tab="Tab 4"
                className="faq-wrap w-inline-block w-tab-link"
              >
                <div>What is your return or exchange policy?</div>
               <Image
                src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6870a5867e04b6e9cab6c936_faq-arrow.svg"
                alt="Arrow"
                width={16}
                height={16}
                className="arrow"
              />
              </a>
            </div>
            <div className="faq-right w-tab-content">
              <div data-w-tab="Tab 5" className="w-tab-pane w--tab-active">
                <p className="single-text">
                  We carefully select products that meet high quality and safety standards.
                   Our goal is to provide beauty products that are responsibly formulated
                    and safe for everyday use.
                </p>
              </div>
              <div data-w-tab="Tab 1" className="w-tab-pane">
                <p className="single-text">
                 Yes, our cosmetics are designed for everyday wear, offering comfort,
                 durability, and effortless application throughout the day.
                </p>
              </div>
              <div data-w-tab="Tab 2" className="w-tab-pane">
                <p className="single-text">
                  Subscribe to our newsletter or follow us on social media to stay updated 
                  on new product launches, beauty tips, and exclusive offers.
                </p>
              </div>
              <div data-w-tab="Tab 3" className="w-tab-pane">
                <p className="single-text">
                  Yes. Our makeup products are designed to deliver long-lasting performance while
                   maintaining a comfortable and natural feel throughout the day.
                </p>
              </div>
              <div data-w-tab="Tab 4" className="w-tab-pane">
                <p className="single-text">
                   You can return or exchange products within 48 hours after delivered
                    if they are unused and in original packaging. Visit our
                  <a href="/return-policy"> Returns &amp;Exchanges</a> page to
                  start the process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CategoriesSection;
