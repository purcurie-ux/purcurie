import { getHomeProducts } from "@/lib/getHomeProducts";
import { getCollections } from "@/lib/getCollections";
import { getBestSellerProduct } from "@/lib/getBestSellerProduct";


export default async function HomePage() {
  const products = await getHomeProducts();
  const collections = await getCollections();
  const bestSeller = await getBestSellerProduct();

  return (
    <div className="page-wrap">
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
                    href={`/category/${collection.handle}`}
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
                  Our mission is to bring you high-quality beauty &amp;skincare
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
                <a
                  href="/products"
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
            {/* <div className="seller-right">
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
                  <img
                    src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6874ea3ab3064782adc3c679_6d2e4794add37e01c059e89c8267523a_seller.png"
                    loading="lazy"
                    style={{
                      WebkitTransform:
                        "translate3d(0, 100%, 0) scale3d(1.5, 1.5, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      MozTransform:
                        "translate3d(0, 100%, 0) scale3d(1.5, 1.5, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      msTransform:
                        "translate3d(0, 100%, 0) scale3d(1.5, 1.5, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      transform:
                        "translate3d(0, 100%, 0) scale3d(1.5, 1.5, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                      filter: "blur(10px)",
                    }}
                    sizes="100vw"
                    alt="Sellers Image"
                    srcSet="
                        https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6874ea3ab3064782adc3c679_6d2e4794add37e01c059e89c8267523a_seller-p-500.png   500w,
                        https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6874ea3ab3064782adc3c679_6d2e4794add37e01c059e89c8267523a_seller-p-800.png   800w,
                        https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6874ea3ab3064782adc3c679_6d2e4794add37e01c059e89c8267523a_seller-p-1080.png 1080w,
                        https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6874ea3ab3064782adc3c679_6d2e4794add37e01c059e89c8267523a_seller.png        1380w
                      "
                    className="section-image"
                  />
                </div>
              </div>
              <div className="seller-product w-dyn-list">
                <div role="list" className="product-list-02 w-dyn-items">
                  <div role="listitem" className="product-item w-dyn-item">
                    <a
                      href="/product/argan-oil-repair-shampoo"
                      className="product-block w-inline-block"
                    >
                      <div className="product-img">
                        <img
                          loading="lazy"
                          src="https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871dbc93c8cc2c16ed08a03_product-thumb-12.webp"
                          alt=""
                          sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                          srcSet="
                              https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871dbc93c8cc2c16ed08a03_product-thumb-12-p-500.webp 500w,
                              https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871dbc93c8cc2c16ed08a03_product-thumb-12-p-800.webp 800w,
                              https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871dbc93c8cc2c16ed08a03_product-thumb-12.webp       824w
                            "
                          className="product-image-03"
                        />
                      </div>
                      <div className="product-bottom">
                        <h5 className="product-heading">
                          Argan Oil Repair Shampoo
                        </h5>
                        <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">
                          $ 22.99 USD
                        </div>
                      </div>
                      <div className="cursor">
                        <div>Detail</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              {bestSeller && (
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
                            $ {bestSeller.priceRange.minVariantPrice.amount}{" "}
                            {bestSeller.priceRange.minVariantPrice.currencyCode}
                          </div>
                        </div>

                        <div className="cursor">
                          <div>Detail</div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div> */}
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
                              $ {bestSeller.priceRange.minVariantPrice.amount}{" "}
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
                href="/products"
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
                  href="/products"
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
      {/* <section className="products">
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
              Explore arrivals crafted to elevate your makeup and skincare game.
            </h2>
          </div>
          <div className="w-dyn-list">
            <div role="list" className="product-list w-dyn-items">
              <div role="listitem" className="product-item w-dyn-item">
                <a
                  href="/product/argan-oil-repair-shampoo"
                  className="product-block w-inline-block"
                >
                  <div className="product-img">
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871dbc93c8cc2c16ed08a03_product-thumb-12.webp"
                      alt=""
                      sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                      srcSet="
                          https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871dbc93c8cc2c16ed08a03_product-thumb-12-p-500.webp 500w,
                          https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871dbc93c8cc2c16ed08a03_product-thumb-12-p-800.webp 800w,
                          https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871dbc93c8cc2c16ed08a03_product-thumb-12.webp       824w
                        "
                      className="product-image"
                    />
                  </div>
                  <div className="product-bottom">
                    <h5 className="product-heading">
                      Argan Oil Repair Shampoo
                    </h5>
                    <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">
                      $ 22.99 USD
                    </div>
                  </div>
                  <div className="cursor">
                    <div>Detail</div>
                  </div>
                </a>
              </div>
              <div role="listitem" className="product-item w-dyn-item">
                <a
                  href="/product/euphoria-bloom-eau-de-parfum"
                  className="product-block w-inline-block"
                >
                  <div className="product-img">
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f58442182ca767d888ac_product-thumb-03.webp"
                      alt=""
                      sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                      srcSet="
                          https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f58442182ca767d888ac_product-thumb-03-p-500.webp 500w,
                          https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f58442182ca767d888ac_product-thumb-03-p-800.webp 800w,
                          https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f58442182ca767d888ac_product-thumb-03.webp       824w
                        "
                      className="product-image"
                    />
                  </div>
                  <div className="product-bottom">
                    <h5 className="product-heading">
                      Euphoria Bloom Eau de Parfum
                    </h5>
                    <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">
                      $ 49.99 USD
                    </div>
                  </div>
                  <div className="cursor">
                    <div>Detail</div>
                  </div>
                </a>
              </div>
              <div role="listitem" className="product-item w-dyn-item">
                <a
                  href="/product/vitamin-c-brightening-toner"
                  className="product-block w-inline-block"
                >
                  <div className="product-img">
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f1641bcd4ab4b5586638_product-thumb-02.webp"
                      alt=""
                      sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                      srcSet="
                          https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f1641bcd4ab4b5586638_product-thumb-02-p-500.webp 500w,
                          https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f1641bcd4ab4b5586638_product-thumb-02-p-800.webp 800w,
                          https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f1641bcd4ab4b5586638_product-thumb-02.webp       824w
                        "
                      className="product-image"
                    />
                  </div>
                  <div className="product-bottom">
                    <h5 className="product-heading">
                      Vitamin C Brightening Toner
                    </h5>
                    <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">
                      $ 21.99 USD
                    </div>
                  </div>
                  <div className="cursor">
                    <div>Detail</div>
                  </div>
                </a>
              </div>
              <div role="listitem" className="product-item w-dyn-item">
                <a
                  href="/product/glow-perfection-foundation"
                  className="product-block w-inline-block"
                >
                  <div className="product-img">
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f11828ba6c1d3dcc4571_product-thumb-01.webp"
                      alt=""
                      sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                      srcSet="
                          https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f11828ba6c1d3dcc4571_product-thumb-01-p-500.webp 500w,
                          https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f11828ba6c1d3dcc4571_product-thumb-01-p-800.webp 800w,
                          https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f11828ba6c1d3dcc4571_product-thumb-01.webp       824w
                        "
                      className="product-image"
                    />
                  </div>
                  <div className="product-bottom">
                    <h5 className="product-heading">
                      Glow Perfection Foundation
                    </h5>
                    <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">
                      $ 18.99 USD
                    </div>
                  </div>
                  <div className="cursor">
                    <div>Detail</div>
                  </div>
                </a>
              </div>
              <div role="listitem" className="product-item w-dyn-item">
                <a
                  href="/product/long-wear-matte-nail-polish"
                  className="product-block w-inline-block"
                >
                  <div className="product-img">
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871db6e33f1b4adf839428e_product-thumb-11.webp"
                      alt=""
                      sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                      srcSet="
                          https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871db6e33f1b4adf839428e_product-thumb-11-p-500.webp 500w,
                          https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871db6e33f1b4adf839428e_product-thumb-11-p-800.webp 800w,
                          https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871db6e33f1b4adf839428e_product-thumb-11.webp       824w
                        "
                      className="product-image"
                    />
                  </div>
                  <div className="product-bottom">
                    <h5 className="product-heading">
                      Long-Wear Matte Nail Polish
                    </h5>
                    <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">
                      $ 20.99 USD
                    </div>
                  </div>
                  <div className="cursor">
                    <div>Detail</div>
                  </div>
                </a>
              </div>
              <div role="listitem" className="product-item w-dyn-item">
                <a
                  href="/product/eco-friendly-tinted-moisturizer"
                  className="product-block w-inline-block"
                >
                  <div className="product-img">
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871db031048141aca392142_product-thumb-10.webp"
                      alt=""
                      sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                      srcSet="
                          https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871db031048141aca392142_product-thumb-10-p-500.webp 500w,
                          https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871db031048141aca392142_product-thumb-10-p-800.webp 800w,
                          https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871db031048141aca392142_product-thumb-10.webp       824w
                        "
                      className="product-image"
                    />
                  </div>
                  <div className="product-bottom">
                    <h5 className="product-heading">
                      Eco-Friendly Tinted Moisturizer
                    </h5>
                    <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">
                      $ 28.99 USD
                    </div>
                  </div>
                  <div className="cursor">
                    <div>Detail</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="button-wrap">
            <a
              href="/products"
              data-w-id="00bd0765-2c26-c3d3-2cfa-af2328efd1df"
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
              <div>View All Products</div>
            </a>
          </div>
        </div>
      </section> */}
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
                          $ {product.priceRange.minVariantPrice.amount}{" "}
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
            <a href="/products" className="primary-button w-inline-block">
              <div>View All Products</div>
            </a>
          </div>
        </div>
      </section>

      <section className="post">
        <div className="w-layout-blockcontainer container w-container">
          <div className="section-title">
            <div className="sub-title">
              <img
                src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6870de521dcfdb3c101ba086_sub-title.svg"
                loading="lazy"
                alt="Sub Title Icon"
              />
              <div>Latest Articles</div>
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
              Stay informed with the freshest insights, trends, and beauty
              advice.
            </h2>
          </div>
          <div className="w-dyn-list">
            <div role="list" className="post-list w-dyn-items">
              <div role="listitem" className="post-item w-dyn-item">
                <a
                  data-w-id="be423eaf-41d9-8b31-a6ec-54a5570daf87"
                  style={{ borderColor: "rgba(0, 0, 0, 0.1)" }}
                  href="/blog-posts/learn-how-to-achieve-smooth-natural-looking-foundation-that-lasts-all-day"
                  className="post-block w-inline-block"
                >
                  <div>
                    <div className="post-text">Published</div>
                    <div className="body-small">July 11, 2025</div>
                  </div>
                  <div className="post-warp">
                    <div className="post-img">
                      <img
                        src="https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870e3166a662500f59a29d7_blog-thumb-07.webp"
                        loading="lazy"
                        style={{
                          WebkitTransform:
                            "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          MozTransform:
                            "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          msTransform:
                            "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          transform:
                            "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        }}
                        alt="Post Image"
                        sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                        srcSet="
                            https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870e3166a662500f59a29d7_blog-thumb-07-p-500.webp 500w,
                            https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870e3166a662500f59a29d7_blog-thumb-07.webp       744w
                          "
                        className="post-image"
                      />
                    </div>
                    <div className="post-right">
                      <h3 className="post-heading">
                        Learn how to achieve smooth, natural-looking foundation
                        that lasts all day
                      </h3>
                      <div className="author-info">
                        <div className="post-text">Author</div>
                        <div className="body-small">Theresa Webb</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div role="listitem" className="post-item w-dyn-item">
                <a
                  data-w-id="be423eaf-41d9-8b31-a6ec-54a5570daf87"
                  style={{ borderColor: "rgba(0, 0, 0, 0.1)" }}
                  href="/blog-posts/from-bold-reds-to-soft-nudes-find-the-perfect-lipstick-shade-for-any-event"
                  className="post-block w-inline-block"
                >
                  <div>
                    <div className="post-text">Published</div>
                    <div className="body-small">July 11, 2025</div>
                  </div>
                  <div className="post-warp">
                    <div className="post-img">
                      <img
                        src="https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870e2f6dd4fdebfd8ae40fb_blog-thumb-06.webp"
                        loading="lazy"
                        style={{
                          WebkitTransform:
                            "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          MozTransform:
                            "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          msTransform:
                            "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          transform:
                            "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        }}
                        alt="Post Image"
                        sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                        srcSet="
                            https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870e2f6dd4fdebfd8ae40fb_blog-thumb-06-p-500.webp 500w,
                            https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870e2f6dd4fdebfd8ae40fb_blog-thumb-06.webp       744w
                          "
                        className="post-image"
                      />
                    </div>
                    <div className="post-right">
                      <h3 className="post-heading">
                        From bold reds to soft nudes find the perfect lipstick
                        shade for any event.
                      </h3>
                      <div className="author-info">
                        <div className="post-text">Author</div>
                        <div className="body-small">Annette Black</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div role="listitem" className="post-item w-dyn-item">
                <a
                  data-w-id="be423eaf-41d9-8b31-a6ec-54a5570daf87"
                  style={{ borderColor: "rgba(0, 0, 0, 0.1)" }}
                  href="/blog-posts/make-your-makeup-application-flawless-with-the-right-brushes"
                  className="post-block w-inline-block"
                >
                  <div>
                    <div className="post-text">Published</div>
                    <div className="body-small">July 11, 2025</div>
                  </div>
                  <div className="post-warp">
                    <div className="post-img">
                      <img
                        src="https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870e2d102734cd83a1eb96c_blog-thumb-05.webp"
                        loading="lazy"
                        style={{
                          WebkitTransform:
                            "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          MozTransform:
                            "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          msTransform:
                            "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                          transform:
                            "translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        }}
                        alt="Post Image"
                        sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                        srcSet="
                            https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870e2d102734cd83a1eb96c_blog-thumb-05-p-500.webp 500w,
                            https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870e2d102734cd83a1eb96c_blog-thumb-05.webp       744w
                          "
                        className="post-image"
                      />
                    </div>
                    <div className="post-right">
                      <h3 className="post-heading">
                        Make your makeup application flawless with the right
                        brushes
                      </h3>
                      <div className="author-info">
                        <div className="post-text">Author</div>
                        <div className="body-small">Dianne Russell</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="button-wrap">
            <a
              href="/blogs"
              data-w-id="35453764-3b70-d76e-fd36-4796493c75b1"
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
              <div>View All Blogs</div>
            </a>
          </div>
        </div>
      </section>
      <section className="reviews">
        <div className="w-layout-blockcontainer container w-container">
          <div className="sub-title">
            <img
              src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6870de521dcfdb3c101ba086_sub-title.svg"
              loading="lazy"
              alt="Sub Title Icon"
            />
            <div>Happy Customers</div>
          </div>
          <div
            data-delay="3000"
            data-animation="cross"
            className="review-slider w-slider"
            data-autoplay="true"
            data-easing="ease"
            data-hide-arrows="false"
            data-disable-swipe="false"
            data-w-id="19e01455-c252-1f02-d1c6-c7bbd3829d36"
            data-autoplay-limit="0"
            data-nav-spacing="3"
            data-duration="500"
            data-infinite="true"
          >
            <div className="w-slider-mask">
              <div className="w-slide">
                <div className="review-inner">
                  <div className="review-left">
                    <img
                      src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6874a2525517f5ba58940027_review-logo-01.svg"
                      loading="lazy"
                      alt="Review Logo"
                      className="review-logo"
                    />
                  </div>
                  <div className="review-right">
                    <div className="review-wrap">
                      <p className="single-text">
                        PurCurie has completely changed my beauty routine. The
                        products feel luxurious and work wonders! My skin looks
                        healthier, and I feel more confident every day.
                      </p>
                      <div>
                        <div className="review-text">Darlene Robertson</div>
                        <div className="body-small">Florida, US</div>
                      </div>
                    </div>
                    <div className="review-img">
                      <img
                        src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/68749e7005e8d57abb2b4dab_review-01.webp"
                        loading="lazy"
                        alt="Review Image"
                        className="review-image"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-slide">
                <div className="review-inner">
                  <div className="review-left">
                    <img
                      src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6874a252b63c83edb37f6e44_review-logo-02.svg"
                      loading="lazy"
                      alt="Review Logo"
                      className="review-logo"
                    />
                  </div>
                  <div className="review-right">
                    <div className="review-wrap">
                      <p className="single-text">
                        Every order I've placed with PurCurie has arrived quickly
                        and beautifully packaged. The customer support team is
                        friendly and helpful, always making sure I have a great
                        experience.
                      </p>
                      <div>
                        <div className="review-text">Courtney Henry</div>
                        <div className="body-small">Dallas, US</div>
                      </div>
                    </div>
                    <div className="review-img">
                      <img
                        src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/68749e70682c0263ee10136a_review-02.webp"
                        loading="lazy"
                        alt="Review Image"
                        className="review-image"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-slide">
                <div className="review-inner">
                  <div className="review-left">
                    <img
                      src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6874a25233838b7961d147f4_review-logo-03.svg"
                      loading="lazy"
                      alt="Review Logo"
                      className="review-logo"
                    />
                  </div>
                  <div className="review-right">
                    <div className="review-wrap">
                      <p className="single-text">
                        From the stunning colors to the lightweight and
                        comfortable formulas, PurCurie products are simply perfect.
                        The makeup looks flawless, feels amazing on my skin,
                        &amp;lasts all day. I'm officially obsessed!
                      </p>
                      <div>
                        <div className="review-text">Dianne Russell</div>
                        <div className="body-small">Texas, US</div>
                      </div>
                    </div>
                    <div className="review-img">
                      <img
                        src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/68749e70a4ecd9797b6ab63c_review-03.webp"
                        loading="lazy"
                        alt="Review Image"
                        className="review-image"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-slide">
                <div className="review-inner">
                  <div className="review-left">
                    <img
                      src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6874a2526315eb43ff5d2aaa_review-logo-04.svg"
                      loading="lazy"
                      alt="Review Logo"
                      className="review-logo"
                    />
                  </div>
                  <div className="review-right">
                    <div className="review-wrap">
                      <p className="single-text">
                        PurCurie has mastered the balance between makeup and
                        skincare. The foundation and lip products are so
                        hydrating, keeping my skin fresh and glowing throughout
                        the day.
                      </p>
                      <div>
                        <div className="review-text">Ronald Richards</div>
                        <div className="body-small">Toronto, US</div>
                      </div>
                    </div>
                    <div className="review-img">
                      <img
                        src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/68749e701b8e7d38badcc542_review-04.webp"
                        loading="lazy"
                        alt="Review Image"
                        className="review-image"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-slide">
                <div className="review-inner">
                  <div className="review-left">
                    <img
                      src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6874a253752043b60404963b_review-logo-05.svg"
                      loading="lazy"
                      alt="Review Logo"
                      className="review-logo"
                    />
                  </div>
                  <div className="review-right">
                    <div className="review-wrap">
                      <p className="single-text">
                        PurCurie has completely changed my skincare game! The
                        products are lightweight yet so effective, leaving my
                        skin hydrated and glowing. I love how natural and fresh
                        my face looks every day!
                      </p>
                      <div>
                        <div className="review-text">Kristin Watson</div>
                        <div className="body-small">Grorgia, US</div>
                      </div>
                    </div>
                    <div className="review-img">
                      <img
                        src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/68749e70f0ae8e3f6d5dd546_review-05.webp"
                        loading="lazy"
                        alt="Review Image"
                        className="review-image"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-slide">
                <div className="review-inner">
                  <div className="review-left">
                    <img
                      src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6874a25394ee9c70a00af13b_review-logo-06.svg"
                      loading="lazy"
                      alt="Review Logo"
                      className="review-logo"
                    />
                  </div>
                  <div className="review-right">
                    <div className="review-wrap">
                      <p className="single-text">
                        I have super sensitive skin, and PurCurie is one of the few
                        brands that don't cause irritation. The skincare-infused
                        formulas keep my skin healthy while delivering beautiful
                        results!
                      </p>
                      <div>
                        <div className="review-text">Bessie Cooper</div>
                        <div className="body-small">New York, US</div>
                      </div>
                    </div>
                    <div className="review-img">
                      <img
                        src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/68749e70586830dc880b9c76_review-06.webp"
                        loading="lazy"
                        alt="Review Image"
                        className="review-image"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-slide">
                <div className="review-inner">
                  <div className="review-left">
                    <img
                      src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6874a2530c009565e7d402a6_review-logo-07.svg"
                      loading="lazy"
                      alt="Review Logo"
                      className="review-logo"
                    />
                  </div>
                  <div className="review-right">
                    <div className="review-wrap">
                      <p className="single-text">
                        Most makeup feels heavy on my skin, but PurCurie is
                        weightless and breathable! It enhances my natural beauty
                        without feeling cakey, making it my go-to for every
                        occasion.
                      </p>
                      <div>
                        <div className="review-text">Darrell Steward</div>
                        <div className="body-small">Miami, USA</div>
                      </div>
                    </div>
                    <div className="review-img">
                      <img
                        src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/68749e743e4df322cd395589_review-07.webp"
                        loading="lazy"
                        alt="Review Image"
                        className="review-image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="left-arrow w-slider-arrow-left"></div>
            <div className="right-arrow w-slider-arrow-right"></div>
            <div className="d-none w-slider-nav w-round w-num"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
