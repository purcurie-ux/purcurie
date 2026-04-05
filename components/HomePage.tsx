import { getHomeProducts } from "@/lib/getHomeProducts";
import { getCollections } from "@/lib/getCollections";
import { getBestSellerProduct } from "@/lib/getBestSellerProduct";
import Link from "next/link";
import Image from "next/image";

export default async function HomePage() {
  const products = await getHomeProducts();
  const collections = await getCollections();
  const bestSeller = await getBestSellerProduct();

  return (
    <div className="page-wrap">
       {/* Junip Store Key — required for all rating widgets */}
      <span
        className="junip-store-key"
        data-store-key={process.env.NEXT_PUBLIC_JUNIP_STORE_KEY}
        style={{ display: "none" }}
      ></span>

      {/* Categories Section */}
      <section className="categories">
        <div className="w-layout-blockcontainer container w-container">
          <div className="section-title">
            <div className="sub-title">
            <Image
            src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6870de521dcfdb3c101ba086_sub-title.svg"
            alt="Sub Title Icon"
            width={20}
            height={20}
          />
              <div>Beauty Collections</div>
            </div>
            <h2
          style={{
            transform: "translate3d(0, 100%, 0) skew(-5deg, 0)",
          }}
          className="section-heading"
        >
          Explore curated beauty collections made to enhance every look.
        </h2>
          </div>
          <div className="category-collection w-dyn-list">
            
            <div role="list" className="category-list w-dyn-items">
              {collections.map((collection: any) => (
                <div
                  key={collection.id}
                  role="listitem"
                  className="category-item w-dyn-item"
                >
                  <Link
                    href={`/categories/${collection.handle}`}
                    className="category-box w-inline-block"
                  >
                    <div className="category-img">
                      {collection.image?.url && (
                      <Image
                      src={collection.image.url}
                      alt={collection.image.altText || collection.title}
                      width={500}
                      height={500}
                      sizes="(max-width: 768px) 100vw, 500px"
                      className="category-image-02"
                    />
                      )}
                    </div>

                    <div className="category-bottom">
                      <h3 className="category-heading">{collection.title}</h3>

                      <Image
                    src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f48e5a13bce2c1046c937_a5ff82f93c5b6280e1699b577954124a_link-arrow.svg"
                    alt="Arrow"
                    width={16}
                    height={16}
                  />
                    </div>
                  </Link>
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
               <Image
              src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6870de521dcfdb3c101ba086_sub-title.svg"
              alt="Sub Title Icon"
              width={20}
              height={20}
            />
                <div>Best Sellers</div>
              </div>
              <div className="seller-bottom">
                <p className="single-text">
                 Discover our most loved cosmetics and beauty essentials.
                </p>
               <Link
                href="/product"
                data-w-id="5ad1bb13-0115-b5a0-2487-66b7423c2b63"
                className="primary-button desktop w-inline-block"
              >
                <div className="arrow-wrap">
                  <Image
                    src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f48e5a13bce2c1046c927_7d7f59d728541d7f09ba8bab672d5874_secondary-arrow.svg"
                    alt="Arrow"
                    width={16}
                    height={16}
                    className="arrow"
                  />
                  <Image
                    src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f48e5a13bce2c1046c927_7d7f59d728541d7f09ba8bab672d5874_secondary-arrow.svg"
                    alt="Arrow"
                    width={16}
                    height={16}
                    className="arrow hover"
                  />
                </div>
                <div>View All Products</div>
              </Link>
              </div>
            </div>
          
            <div className="seller-right">
              {bestSeller && (
                <>
                  {/* BIG HERO IMAGE (Image 0) */}
              {/* BIG HERO IMAGE (Image 0) - Now Clickable */}
              <Link
                href={`/product/${bestSeller.handle}`}
                className="seller-main-img w-inline-block"
                style={{ cursor: "pointer", display: "block" }}
              >
                <div data-w-id="d63da87d-6772-8348-f91e-c899fc37aee7">
                  <div
                    style={{
                      transform: "translate3d(0, -110%, 0)",
                    }}
                    className="section-img"
                  >
                    {bestSeller.images.edges[0]?.node?.url && (
                      <Image
                        src={bestSeller.images.edges[0].node.url}
                        alt={
                          bestSeller.images.edges[0].node.altText ||
                          bestSeller.title
                        }
                        width={600}
                        height={600}
                        sizes="(max-width: 768px) 100vw, 600px"
                        className="section-image"
                        style={{
                          transform: "translate3d(0, 100%, 0) scale3d(1.5, 1.5, 1)",
                          filter: "blur(10px)",
                        }}
                      />
                    )}
                  </div>
                </div>
              </Link>

                  {/* SIDE PRODUCT CARD (Image 1) */}
                  <div className="seller-product w-dyn-list">
                    <div role="list" className="product-list-02 w-dyn-items">
                      <div role="listitem" className="product-item w-dyn-item">
                        <Link
                          href={`/product/${bestSeller.handle}`}
                          className="product-block w-inline-block"
                        >
                          <div className="product-img">
                            {bestSeller.images.edges[1]?.node?.url && (
                              <Image
                                src={bestSeller.images.edges[1].node.url}
                                alt={
                                  bestSeller.images.edges[1].node.altText ||
                                  bestSeller.title
                                }
                                width={500}
                                height={500}
                                sizes="(max-width: 768px) 100vw, 500px"
                                className="product-image-03"
                              />
                            )}
                          </div>

                          <div className="product-bottom">
                        <h5 className="product-heading">
                          {bestSeller.title}
                        </h5>
                        {/* Junip Star Rating */}
                        <span
                          className="junip-product-summary"
                          data-product-id={bestSeller.id.split('/').pop()}
                          style={{ display: "block", marginBottom: "4px" }}
                        ></span>
                        <div>
                          ₹ {bestSeller.priceRange.minVariantPrice.amount}{" "}
                          {bestSeller.priceRange.minVariantPrice.currencyCode}
                        </div>
                      </div>

                          <div className="cursor">
                            <div>Detail</div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="button-wrap left">
              <Link
                href="/product"
                data-w-id="476cc226-a2cb-7bf5-6102-8bb9db03a2c0"
                className="primary-button mobile w-inline-block"
              >
                <div className="arrow-wrap">
                  <Image
                    src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f48e5a13bce2c1046c927_7d7f59d728541d7f09ba8bab672d5874_secondary-arrow.svg"
                    alt="Arrow"
                    width={16}
                    height={16}
                    className="arrow"
                  />
                  <Image
                    src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f48e5a13bce2c1046c927_7d7f59d728541d7f09ba8bab672d5874_secondary-arrow.svg"
                    alt="Arrow"
                    width={16}
                    height={16}
                    className="arrow hover"
                  />
                </div>
                <div>View All Products</div>
              </Link>
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
              <Image
              src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6874a90cb0afbc25764645d2_ic-service%20-02.svg"
              alt="Service Icon"
              width={0}
              height={0}
              sizes="100vw"
              className="service-icon"
            />
              <div>
                <h5 className="service-heading">Premium Cosmetics</h5>
                <p className="single-text">
                  Carefully selected cosmetic products designed for everyday beauty
                </p>
              </div>
            </div>
            <div
              data-w-id="dd3545e4-e98e-db3e-147a-5d91e2dcf00c"
              className="service-block"
            >
             <Image
              src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6874a90ca4ecd9797b70a74e_ic-service%20-01.svg"
              alt="Service Icon"
              width={0}
              height={0}
              sizes="100vw"
              className="service-icon"
            />
              <div>
                <h5 className="service-heading">Professional Beauty Tools</h5>
                <p className="single-text">
                 Tools designed to make application effortless.
                </p>
              </div>
            </div>
            <div
              data-w-id="dd3545e4-e98e-db3e-147a-5d91e2dcf013"
              className="service-block"
            >
             <Image
            src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6874a90c7186f18bd7003e8a_ic-service%20-03.svg"
            alt="Service Icon"
           width={0}
          height={0}
          sizes="100vw"
          className="service-icon"
          />
              <div>
                <h5 className="service-heading">Modern Beauty Essentials</h5>
                <p className="single-text">
                  Products designed to support different skin types and concerns
                </p>
              </div>
            </div>
            <div
              data-w-id="dd3545e4-e98e-db3e-147a-5d91e2dcf01a"
              className="service-block"
            >
            <Image
              src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6874a90c7d199e1c99310909_ic-service%20-04.svg"
              alt="Service Icon"
        width={0}
        height={0}
        sizes="100vw"
        className="service-icon"
            />
              <div>
                <h5 className="service-heading">New Arrivals</h5>
                <p className="single-text">
                  Discover our latest cosmetic launches.
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
            <Image
            src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6870de521dcfdb3c101ba086_sub-title.svg"
            alt="Sub Title Icon"
            width={20}
            height={20}
          />
              <div>New Arrivals</div>
            </div>
            <h2 className="section-heading">
              Explore our newest cosmetics <br/> and beauty essentials
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
                          sizes="(max-width: 768px) 100vw, 500px"
                          className="product-image"
                        />
                        )}
                      </div>

                      <div className="product-bottom">
                      <h5 className="product-heading">{product.title}</h5>
                      {/* Junip Star Rating */}
                      <span
                        className="junip-product-summary"
                        data-product-id={product.id.split('/').pop()}
                        style={{ display: "block", marginBottom: "4px" }}
                      ></span>
                      <div>
                        ₹ {product.priceRange.minVariantPrice.amount}{" "}
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

          <div className="button-wrap">
            <Link href="/product" className="primary-button w-inline-block">
              <div>View All Products</div>
            </Link>
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
              transform: "translate3d(0, 110%, 0)",
            }}
            className="section-img"
          >
                 <Image
              src="https://res.cloudinary.com/dljsgxrge/image/upload/w_1052,q_auto,f_auto/v1775337409/homepage1_dfz0v0.webp"
              alt="Benefits Image"
              width={1052}
              height={1052}
              sizes="100vw"
              style={{
                transform: "translate3d(0, -100%, 0) scale3d(1.5, 1.5, 1)",
                filter: "blur(10px)",
              }}
              className="section-image"
            />
                </div>
              </div>
             <div className="benefit-wrap">
              <h2
                data-w-id="eab35e5b-0f1e-de89-2044-b4093a807120"
                style={{
                  transform: "translate3d(0, 100%, 0) skew(-5deg, 0)",
                  fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                  maxWidth: "800px",
                  lineHeight: "1.2",
                }}
                className="benefits-heading"
              >
                  A curated collection of cosmetics designed for effortless everyday beauty.
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
                     <Image
                      src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6876144ba66753927f426def_ic-benefits-01.svg"
                      alt="Benefits Icon"
                      width={24}
                      height={24}
                      className="benefits-icon"
                    />
                      <h5 className="benefits-title">Premium Formulation</h5>
                    </div>
                    <div>
                      <p className="single-text">
                        High-quality cosmetics designed for daily wear.
                      </p>
                    </div>
                  </div>
                  <div
                    data-w-id="ed03dd17-22b6-9ac9-b990-b4d9e4a762f6"
                    style={{ opacity: 0 }}
                    className="benefits-block"
                  >
                    <div className="benefits-info">
                   <Image
                    src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6876144b6340d8d1286725e8_ic-benefits-02.svg"
                    alt="Benefits Icon"
                    width={24}
                    height={24}
                    className="benefits-icon"
                  />
                      <h5 className="benefits-title">Professional Tools</h5>
                    </div>
                    <div>
                      <p className="single-text">
                       Tools designed for smooth and effortless application.
                      </p>
                    </div>
                  </div>
                  <div
                    data-w-id="5901ed8e-a5a3-e605-846c-5fe259cbd8d5"
                    style={{ opacity: 0 }}
                    className="benefits-block"
                  >
                    <div className="benefits-info">
                      <Image
                      src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6876144b91f11467eb629556_ic-benefits-03.svg"
                      alt="Benefits Icon"
                      width={24}
                      height={24}
                      className="benefits-icon"
                    />
                      <h5 className="benefits-title">Made for Everyday Beaut</h5>
                    </div>
                    <div>
                      <p className="single-text">
                        Simple products designed for modern routines.
                      </p>
                    </div>
                  </div>
                </div>
                <Link
                  href="/product"
                  data-w-id="1efa7086-69b7-8580-2345-19c304d2671f"
                  style={{ opacity: 0 }}
                  className="primary-button w-inline-block"
                >
                  <div className="arrow-wrap">
                    <Image
                      src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f48e5a13bce2c1046c927_7d7f59d728541d7f09ba8bab672d5874_secondary-arrow.svg"
                      alt="Arrow"
                      width={16}
                      height={16}
                      className="arrow"
                    />
                    <Image
                      src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f48e5a13bce2c1046c927_7d7f59d728541d7f09ba8bab672d5874_secondary-arrow.svg"
                      alt="Arrow"
                      width={16}
                      height={16}
                      className="arrow hover"
                    />
                  </div>
                  <div>Shop Now</div>
                </Link>
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
                    transform: "translate3d(0, 110%, 0)",
                  }}
                  className="section-img"
                >
               <Image
                src="https://res.cloudinary.com/dljsgxrge/image/upload/w_940,q_auto,f_auto/v1775337653/pexels-monirathnak-30797181_2_ah2pvj.jpg"
                alt="Story Image"
                width={940}
                height={940}
                sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                style={{
                  transform: "translate3d(0, -100%, 0) scale3d(1.5, 1.5, 1)",
                  filter: "blur(10px)",
                }}
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
                  Purcurie mission is to create high-quality cosmetics and beauty tools that make everyday beauty effortless.
                </h3>
              </div>
              <div className="story-img">
               <Image
                src="https://res.cloudinary.com/dljsgxrge/image/upload/w_940,q_auto,f_auto/v1775337812/pexels-ds-stories-7256120_1_mc1xlw.jpg"
                alt="Story Image"
                width={940}
                height={940}
                sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                data-w-id="d320c2db-e691-2ddb-25c7-615332e021e3"
                style={{ opacity: 0 }}
                className="story-image"
              />
              </div>
              <div
                data-w-id="488a3b3a-7cca-0f7d-7f3b-4b061017c0e4"
                style={{ opacity: 0 }}
                className="story-bottom"
              >
                <p className="single-text">
                 Each product is chosen with intention guided by quality, aesthetic, and performance so your skin experience feels refined, effortless, and quietly luxurious.
                </p>
               <Link
                  href="/about"
                  data-w-id="bc6d7e5f-c267-6747-a6fe-b15d24d4f1d5"
                  className="primary-button w-inline-block"
                >
                  <div className="arrow-wrap">
                    <Image
                      src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f48e5a13bce2c1046c927_7d7f59d728541d7f09ba8bab672d5874_secondary-arrow.svg"
                      alt="Arrow"
                      width={16}
                      height={16}
                      className="arrow"
                    />
                    <Image
                      src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f48e5a13bce2c1046c927_7d7f59d728541d7f09ba8bab672d5874_secondary-arrow.svg"
                      alt="Arrow"
                      width={16}
                      height={16}
                      className="arrow hover"
                    />
                  </div>
                  <div>About us</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
