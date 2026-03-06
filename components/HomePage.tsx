import { getHomeProducts } from "@/lib/getHomeProducts";
import { getCollections } from "@/lib/getCollections";
import { getBestSellerProduct } from "@/lib/getBestSellerProduct";


export default async function HomePage() {
  const products = await getHomeProducts();
  const collections = await getCollections();
  const bestSeller = await getBestSellerProduct();

  return (
    <div className="page-wrap">
      {/* Categories Section */}
      <section className="categories">
        <div className="w-layout-blockcontainer container w-container">
          <div className="section-title">
            <div className="sub-title">
              <img
                src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6870de521dcfdb3c101ba086_sub-title.svg"
                loading="lazy"
                alt="Sub Title Icon"
              />
              <div>Beauty Collections</div>
            </div>
            <h2
              style={{
                WebkitTransform:
                  "translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(-5deg, 0)",
                MozTransform:
                  "translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(-5deg, 0)",
                msTransform:
                  "translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(-5deg, 0)",
                transform:
                  "translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(-5deg, 0)",
              }}
              className="section-heading"
            >
              Explore curated beauty collections made enhance every look.
            </h2>
          </div>
          <div className="category-collection w-dyn-list">
            {/* <div role="list" className="category-list w-dyn-items">
              <div role="listitem" className="category-item w-dyn-item">
                <a
                  data-w-id="4c05280d-cb3d-9ac0-85bf-9e5b0caedec9"
                  style={{ opacity: 0 }}
                  href="/category/organic-beauty"
                  className="category-box w-inline-block"
                >
                  <div className="category-img">
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/686f838d338fa886aea111c4/687dd71268774c56f9297c32_categories-01.webp"
                      alt="Category Image"
                      sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                      srcSet="
                          https://cdn.prod.website-files.com/686f838d338fa886aea111c4/687dd71268774c56f9297c32_categories-01-p-500.webp 500w,
                          https://cdn.prod.website-files.com/686f838d338fa886aea111c4/687dd71268774c56f9297c32_categories-01-p-800.webp 800w,
                          https://cdn.prod.website-files.com/686f838d338fa886aea111c4/687dd71268774c56f9297c32_categories-01.webp       852w
                        "
                      className="category-image-02"
                    />
                  </div>
                  <div className="category-bottom">
                    <h3 className="category-heading">Organic Beauty</h3>
                    <img
                      src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f48e5a13bce2c1046c937_a5ff82f93c5b6280e1699b577954124a_link-arrow.svg"
                      loading="lazy"
                      alt="Arrow"
                    />
                  </div>
                </a>
              </div>
              <div role="listitem" className="category-item w-dyn-item">
                <a
                  data-w-id="4c05280d-cb3d-9ac0-85bf-9e5b0caedec9"
                  style={{ opacity: 0 }}
                  href="/category/fragrances"
                  className="category-box w-inline-block"
                >
                  <div className="category-img">
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870efbb10298698bc53fc2e_categories-02.webp"
                      alt="Category Image"
                      sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                      srcSet="
                          https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870efbb10298698bc53fc2e_categories-02-p-500.webp 500w,
                          https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870efbb10298698bc53fc2e_categories-02-p-800.webp 800w,
                          https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870efbb10298698bc53fc2e_categories-02.webp       852w
                        "
                      className="category-image-02"
                    />
                  </div>
                  <div className="category-bottom">
                    <h3 className="category-heading">Fragrances</h3>
                    <img
                      src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f48e5a13bce2c1046c937_a5ff82f93c5b6280e1699b577954124a_link-arrow.svg"
                      loading="lazy"
                      alt="Arrow"
                    />
                  </div>
                </a>
              </div>
              <div role="listitem" className="category-item w-dyn-item">
                <a
                  data-w-id="4c05280d-cb3d-9ac0-85bf-9e5b0caedec9"
                  style={{ opacity: 0 }}
                  href="/category/makeup"
                  className="category-box w-inline-block"
                >
                  <div className="category-img">
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870efa53c217f84434bce3e_categories-03.webp"
                      alt="Category Image"
                      sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                      srcSet="
                          https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870efa53c217f84434bce3e_categories-03-p-500.webp 500w,
                          https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870efa53c217f84434bce3e_categories-03-p-800.webp 800w,
                          https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870efa53c217f84434bce3e_categories-03.webp       852w
                        "
                      className="category-image-02"
                    />
                  </div>
                  <div className="category-bottom">
                    <h3 className="category-heading">Makeup</h3>
                    <img
                      src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f48e5a13bce2c1046c937_a5ff82f93c5b6280e1699b577954124a_link-arrow.svg"
                      loading="lazy"
                      alt="Arrow"
                    />
                  </div>
                </a>
              </div>
            </div> */}
            <div role="list" className="category-list w-dyn-items">
              {collections.map((collection: any) => (
                <div
                  key={collection.id}
                  role="listitem"
                  className="category-item w-dyn-item"
                >
                  <a
                    href={`/categories/${collection.handle}`}
                    className="category-box w-inline-block"
                  >
                    <div className="category-img">
                      {collection.image?.url && (
                        <img
                          loading="lazy"
                          src={collection.image.url}
                          alt={collection.image.altText || collection.title}
                          className="category-image-02"
                        />
                      )}
                    </div>

                    <div className="category-bottom">
                      <h3 className="category-heading">{collection.title}</h3>

                      <img
                        src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f48e5a13bce2c1046c937_a5ff82f93c5b6280e1699b577954124a_link-arrow.svg"
                        loading="lazy"
                        alt="Arrow"
                      />
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Best Sellers Section */}
      <section className="best-sellers">
        <div className="w-layout-blockcontainer container w-container">
          <div className="seller-inner">
            <div
              data-w-id="153362f3-840f-4c70-c60c-54540c5753b0"
              style={{ opacity: 0 }}
              className="seller-left"
            >
              <div className="sub-title">
                <img
                  src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6870de521dcfdb3c101ba086_sub-title.svg"
                  loading="lazy"
                  alt="Sub Title Icon"
                />
                <div>Best Sellers</div>
              </div>
              <div className="seller-bottom">
                <p className="single-text">
                  Shop our most popular products, trusted by beauty lovers
                  everywhere.
                </p>
                <a href="/product"
                  data-w-id="5ad1bb13-0115-b5a0-2487-66b7423c2b63"
                  className="primary-button desktop w-inline-block"
                >
                  <div className="arrow-wrap">
                    <img
                      style={{
                        WebkitTransform:
                          "translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        MozTransform:
                          "translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        msTransform:
                          "translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        transform:
                          "translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      }}
                      loading="lazy"
                      alt="Arrow"
                      src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f48e5a13bce2c1046c927_7d7f59d728541d7f09ba8bab672d5874_secondary-arrow.svg"
                      className="arrow"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f48e5a13bce2c1046c927_7d7f59d728541d7f09ba8bab672d5874_secondary-arrow.svg"
                      alt="Arrow"
                      className="arrow hover"
                    />
                  </div>
                  <div>View All Products</div>
                </a>
              </div>
            </div>
          
            <div className="seller-right">
              {bestSeller && (
                <>
                  {/* BIG HERO IMAGE (Image 0) */}
                  <div
                    data-w-id="d63da87d-6772-8348-f91e-c899fc37aee7"
                    className="seller-main-img"
                  >
                    <div
                      style={{
                        WebkitTransform:
                          "translate3d(0, -110%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        MozTransform:
                          "translate3d(0, -110%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        msTransform:
                          "translate3d(0, -110%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        transform:
                          "translate3d(0, -110%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      }}
                      className="section-img"
                    >
                      {bestSeller.images.edges[0]?.node?.url && (
                        <img
                          src={bestSeller.images.edges[0].node.url}
                          loading="lazy"
                          alt={
                            bestSeller.images.edges[0].node.altText ||
                            bestSeller.title
                          }
                          className="section-image"
                          style={{
                            WebkitTransform:
                              "translate3d(0, 100%, 0) scale3d(1.5, 1.5, 1)",
                            transform:
                              "translate3d(0, 100%, 0) scale3d(1.5, 1.5, 1)",
                            filter: "blur(10px)",
                          }}
                        />
                      )}
                    </div>
                  </div>

                  {/* SIDE PRODUCT CARD (Image 1) */}
                  <div className="seller-product w-dyn-list">
                    <div role="list" className="product-list-02 w-dyn-items">
                      <div role="listitem" className="product-item w-dyn-item">
                        <a
                          href={`/product/${bestSeller.handle}`}
                          className="product-block w-inline-block"
                        >
                          <div className="product-img">
                            {bestSeller.images.edges[1]?.node?.url && (
                              <img
                                loading="lazy"
                                src={bestSeller.images.edges[1].node.url}
                                alt={
                                  bestSeller.images.edges[1].node.altText ||
                                  bestSeller.title
                                }
                                className="product-image-03"
                              />
                            )}
                          </div>

                          <div className="product-bottom">
                            <h5 className="product-heading">
                              {bestSeller.title}
                            </h5>
                            <div>
                              ₹ {bestSeller.priceRange.minVariantPrice.amount}{" "}
                              {
                                bestSeller.priceRange.minVariantPrice
                                  .currencyCode
                              }
                            </div>
                          </div>

                          <div className="cursor">
                            <div>Detail</div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="button-wrap left">
              <a
                href="/product"
                data-w-id="476cc226-a2cb-7bf5-6102-8bb9db03a2c0"
                className="primary-button mobile w-inline-block"
              >
                <div className="arrow-wrap">
                  <img
                    style={{
                      WebkitTransform:
                        "translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      MozTransform:
                        "translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      msTransform:
                        "translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      transform:
                        "translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    }}
                    loading="lazy"
                    alt="Arrow"
                    src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f48e5a13bce2c1046c927_7d7f59d728541d7f09ba8bab672d5874_secondary-arrow.svg"
                    className="arrow"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f48e5a13bce2c1046c927_7d7f59d728541d7f09ba8bab672d5874_secondary-arrow.svg"
                    alt="Arrow"
                    className="arrow hover"
                  />
                </div>
                <div>View All Products</div>
              </a>
            </div>
          </div>
        </div>
      </section>
     
 {/* Categories Section */}
      <section className="services">
        <div className="w-layout-blockcontainer container w-container">
          <div className="service-inner">
            <div
              data-w-id="dd3545e4-e98e-db3e-147a-5d91e2dcf005"
              className="service-block"
            >
              <img
                src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6874a90cb0afbc25764645d2_ic-service%20-02.svg"
                loading="lazy"
                alt="Service Iocn"
                className="service-icon"
              />
              <div>
                <h5 className="service-heading">Curated Skincare</h5>
                <p className="single-text">
                  Carefully selected products from trusted beauty and skincare brands
                </p>
              </div>
            </div>
            <div
              data-w-id="dd3545e4-e98e-db3e-147a-5d91e2dcf00c"
              className="service-block"
            >
              <img
                src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6874a90ca4ecd9797b70a74e_ic-service%20-01.svg"
                loading="lazy"
                alt="Service Iocn"
                className="service-icon"
              />
              <div>
                <h5 className="service-heading">Self-Care Essentials</h5>
                <p className="single-text">
                 Everyday skincare and personal care products for healthy-looking skin
                </p>
              </div>
            </div>
            <div
              data-w-id="dd3545e4-e98e-db3e-147a-5d91e2dcf013"
              className="service-block"
            >
              <img
                src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6874a90c7186f18bd7003e8a_ic-service%20-03.svg"
                loading="lazy"
                alt="Service Iocn"
                className="service-icon"
              />
              <div>
                <h5 className="service-heading">Targeted Solutions</h5>
                <p className="single-text">
                  Products designed to support different skin types and concerns
                </p>
              </div>
            </div>
            <div
              data-w-id="dd3545e4-e98e-db3e-147a-5d91e2dcf01a"
              className="service-block"
            >
              <img
                src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6874a90c7d199e1c99310909_ic-service%20-04.svg"
                loading="lazy"
                alt="Service Iocn"
                className="service-icon"
              />
              <div>
                <h5 className="service-heading">New Arrivals</h5>
                <p className="single-text">
                  Discover the latest skincare and beauty products added to our store
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

         <section className="products">
        <div className="w-layout-blockcontainer container w-container">
          <div className="section-title">
            <div className="sub-title">
              <img
                src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6870de521dcfdb3c101ba086_sub-title.svg"
                loading="lazy"
                alt="Sub Title Icon"
              />
              <div>New Arrivals</div>
            </div>
            <h2 className="section-heading">
              Explore our newest skincare <br/> and beauty essentials.
            </h2>
          </div>

          <div className="w-dyn-list">
            <div role="list" className="product-list w-dyn-items">
              {products.map((product: any) => {
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
                          <img
                            loading="lazy"
                            src={image.url}
                            alt={image.altText || product.title}
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

          <div className="button-wrap">
            <a href="/product" className="primary-button w-inline-block">
              <div>View All Products</div>
            </a>
          </div>
        </div>
      </section>
     
      <section className="benefits">
        <div className="benefits-bg">
          <div className="w-layout-blockcontainer container w-container">
            <div className="benefits-inner">
              <div
                data-w-id="35f4e4a0-892e-1ac2-e883-ed23565d72e7"
                className="benefits-img"
              >
                <div
                  style={{
                    WebkitTransform:
                      "translate3d(0, 110%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 110%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, 110%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 110%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  }}
                  className="section-img"
                >
                  <img
                    src="https://cdn.shopify.com/s/files/1/0984/6843/0146/files/anthony-tran-Sd9A6NVHsd4-unsplash.jpg?v=1768094481"
                    loading="lazy"
                    style={{
                      WebkitTransform:
                        "translate3d(0, -100%, 0) scale3d(1.5, 1.5, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      MozTransform:
                        "translate3d(0, -100%, 0) scale3d(1.5, 1.5, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      msTransform:
                        "translate3d(0, -100%, 0) scale3d(1.5, 1.5, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      transform:
                        "translate3d(0, -100%, 0) scale3d(1.5, 1.5, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      filter: "blur(10px)",
                    }}
                    sizes="100vw"
                    alt="Benefits Image"
                    srcSet="
                        https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/687613b1bb70047a940a3d18_benefits-p-500.webp  500w,
                        https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/687613b1bb70047a940a3d18_benefits-p-800.webp  800w,
                        https://cdn.shopify.com/s/files/1/0984/6843/0146/files/anthony-tran-Sd9A6NVHsd4-unsplash.jpg?v=1768094481       1052w
                      "
                    className="section-image"
                  />
                </div>
              </div>
              <div className="benefit-wrap">
                <h2
                  data-w-id="eab35e5b-0f1e-de89-2044-b4093a807120"
                  style={{
                    WebkitTransform:
                      "translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(-5deg, 0)",
                    MozTransform:
                      "translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(-5deg, 0)",
                    msTransform:
                      "translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(-5deg, 0)",
                    transform:
                      "translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(-5deg, 0)",
                  }}
                  className="benefits-heading"
                >
                  A curated selection designed to feel elegant and effortless
                </h2>
              </div>
              <div className="benefits-wrap">
                <div>
                  <div
                    data-w-id="0589b31e-084c-ff63-83a5-309a37fa2462"
                    style={{ opacity: 0 }}
                    className="benefits-block top"
                  >
                    <div className="benefits-info">
                      <img
                        src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6876144ba66753927f426def_ic-benefits-01.svg"
                        loading="lazy"
                        alt="Benefits Icon"
                        className="benefits-icon"
                      />
                      <h5 className="benefits-title">Refined Quality</h5>
                    </div>
                    <div>
                      <p className="single-text">
                        Each product is selected for its formulation, finish, and overall skincare experience.
                      </p>
                    </div>
                  </div>
                  <div
                    data-w-id="ed03dd17-22b6-9ac9-b990-b4d9e4a762f6"
                    style={{ opacity: 0 }}
                    className="benefits-block"
                  >
                    <div className="benefits-info">
                      <img
                        src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6876144b6340d8d1286725e8_ic-benefits-02.svg"
                        loading="lazy"
                        alt="Benefits Icon"
                        className="benefits-icon"
                      />
                      <h5 className="benefits-title">Beauty Solutions</h5>
                    </div>
                    <div>
                      <p className="single-text">
                        We bring the latest beauty trends &amp;innovations to
                        your fingertips.
                      </p>
                    </div>
                  </div>
                  <div
                    data-w-id="5901ed8e-a5a3-e605-846c-5fe259cbd8d5"
                    style={{ opacity: 0 }}
                    className="benefits-block"
                  >
                    <div className="benefits-info">
                      <img
                        src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6876144b91f11467eb629556_ic-benefits-03.svg"
                        loading="lazy"
                        alt="Benefits Icon"
                        className="benefits-icon"
                      />
                      <h5 className="benefits-title">For Every Skin Type</h5>
                    </div>
                    <div>
                      <p className="single-text">
                        A diverse range of shades and formulas suitable for all
                        skin tones and types.
                      </p>
                    </div>
                  </div>
                </div>
                <a
                  href="/product"
                  data-w-id="1efa7086-69b7-8580-2345-19c304d2671f"
                  style={{ opacity: 0 }}
                  className="primary-button w-inline-block"
                >
                  <div className="arrow-wrap">
                    <img
                      style={{
                        WebkitTransform:
                          "translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        MozTransform:
                          "translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        msTransform:
                          "translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        transform:
                          "translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      }}
                      loading="lazy"
                      alt="Arrow"
                      src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f48e5a13bce2c1046c927_7d7f59d728541d7f09ba8bab672d5874_secondary-arrow.svg"
                      className="arrow"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f48e5a13bce2c1046c927_7d7f59d728541d7f09ba8bab672d5874_secondary-arrow.svg"
                      alt="Arrow"
                      className="arrow hover"
                    />
                  </div>
                  <div>Shop Now</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <section className="story">
        <div className="w-layout-blockcontainer container w-container">
          <div className="story-inner">
            <div
              data-w-id="63adf2c9-fed6-6a95-bd2f-30da97790ea2"
              className="story-left"
            >
              <div
                style={{
                  WebkitTransform:
                    "translate3d(0, 110%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  MozTransform:
                    "translate3d(0, 110%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  msTransform:
                    "translate3d(0, 110%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  transform:
                    "translate3d(0, 110%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                }}
                className="section-img"
              >
                <img
                  src="https://cdn.shopify.com/s/files/1/0984/6843/0146/files/pexels-monirathnak-30797181.jpg?v=1768093574"
                  loading="lazy"
                  style={{
                    WebkitTransform:
                      "translate3d(0, -100%, 0) scale3d(1.5, 1.5, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, -100%, 0) scale3d(1.5, 1.5, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, -100%, 0) scale3d(1.5, 1.5, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, -100%, 0) scale3d(1.5, 1.5, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    filter: "blur(10px)",
                  }}
                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                  alt="Story Image"
                  srcSet="
                      https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6874ef0ed180d96e9c50895a_story-01-p-500.webp   500w,
                      https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6874ef0ed180d96e9c50895a_story-01-p-800.webp   800w,
                      https://cdn.shopify.com/s/files/1/0984/6843/0146/files/pexels-monirathnak-30797181.jpg?v=1768093574  1080w,
                     https://cdn.shopify.com/s/files/1/0984/6843/0146/files/pexels-monirathnak-30797181.jpg?v=1768093574        1388w
                    "
                  className="section-image"
                />
              </div>
            </div>
            <div className="story-right">
              <div className="overflow-hidden">
                <h3
                  data-w-id="d9e775bf-1ecb-942b-206e-c02a57c2a546"
                  style={{ opacity: 0 }}
                  className="story-heading"
                >
                  Our mission is to bring you high-quality beauty &amp; skincare
                  solutions enhance your natural radiance.
                </h3>
              </div>
              <div className="story-img">
                <img
                  className="story-image"
                  src="https://cdn.shopify.com/s/files/1/0984/6843/0146/files/pexels-ron-lach-8140908.jpg?v=1768094254"
                  alt="Story Image"
                  style={{ opacity: 0 }}
                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                  data-w-id="d320c2db-e691-2ddb-25c7-615332e021e3"
                  loading="lazy"
                  srcSet="
                      https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6874ef0d51ee2a9d7c6939b9_story-02-p-500.webp  500w,
                      https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6874ef0d51ee2a9d7c6939b9_story-02-p-800.webp  800w,
                      https://cdn.shopify.com/s/files/1/0984/6843/0146/files/pexels-ron-lach-8140908.jpg?v=1768094254       1024w
                    "
                />
              </div>
              <div
                data-w-id="488a3b3a-7cca-0f7d-7f3b-4b061017c0e4"
                style={{ opacity: 0 }}
                className="story-bottom"
              >
                <p className="single-text">
                 Each product is chosen with intention guided by quality, aesthetic, and performance so your skincare experience feels refined, effortless, and quietly luxurious.
                </p>
                <a
                  href="/about"
                  data-w-id="bc6d7e5f-c267-6747-a6fe-b15d24d4f1d5"
                  className="primary-button w-inline-block"
                >
                  <div className="arrow-wrap">
                    <img
                      style={{
                        WebkitTransform:
                          "translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        MozTransform:
                          "translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        msTransform:
                          "translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        transform:
                          "translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      }}
                      loading="lazy"
                      alt="Arrow"
                      src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f48e5a13bce2c1046c927_7d7f59d728541d7f09ba8bab672d5874_secondary-arrow.svg"
                      className="arrow"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f48e5a13bce2c1046c927_7d7f59d728541d7f09ba8bab672d5874_secondary-arrow.svg"
                      alt="Arrow"
                      className="arrow hover"
                    />
                  </div>
                  <div>About us</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
