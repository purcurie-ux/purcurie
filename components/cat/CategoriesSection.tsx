import { getCategoriesWithProducts } from "@/lib/getCategoriesWithProducts";

async function CategoriesSection() {
  const categories = await getCategoriesWithProducts();
  return (
    <div className="page-wrap">
      <section className="categories">
        <div className="w-layout-blockcontainer container w-container">
          {/* <div className="category-inner">
            <div className="category-block">
              <div className="category-left">
                <img
                  src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/687484dbbc5014f327e0940f_categories-04.webp"
                  loading="lazy"
                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 852px"
                  srcSet="
                      https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/687484dbbc5014f327e0940f_categories-04-p-500.webp 500w,
                      https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/687484dbbc5014f327e0940f_categories-04-p-800.webp 800w,
                      https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/687484dbbc5014f327e0940f_categories-04.webp       852w
                    "
                  alt="Category Image"
                  className="category-image"
                />
                <div className="category-text">Skincare</div>
              </div>
              <div className="category-right">
                <div className="product-collection w-dyn-list">
                  <div role="list" className="product-list w-dyn-items">
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
                            className="product-image-02"
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
                        href="/product/mystic-oud-luxury-perfume"
                        className="product-block w-inline-block"
                      >
                        <div className="product-img">
                          <img
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871dad8d937b75cef29ee08_product-thumb-09.webp"
                            alt=""
                            sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                            srcSet="
                                https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871dad8d937b75cef29ee08_product-thumb-09-p-500.webp 500w,
                                https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871dad8d937b75cef29ee08_product-thumb-09-p-800.webp 800w,
                                https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871dad8d937b75cef29ee08_product-thumb-09.webp       824w
                              "
                            className="product-image-02"
                          />
                        </div>
                        <div className="product-bottom">
                          <h5 className="product-heading">
                            Mystic Oud Luxury Perfume
                          </h5>
                          <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">
                            $ 42.99 USD
                          </div>
                        </div>
                        <div className="cursor">
                          <div>Detail</div>
                        </div>
                      </a>
                    </div>
                    <div role="listitem" className="product-item w-dyn-item">
                      <a
                        href="/product/glossy-gel-nail-polish-set"
                        className="product-block w-inline-block"
                      >
                        <div className="product-img">
                          <img
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871d9ae2ee67c778d3dddc9_product-thumb-05.webp"
                            alt=""
                            sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                            srcSet="
                                https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871d9ae2ee67c778d3dddc9_product-thumb-05-p-500.webp 500w,
                                https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871d9ae2ee67c778d3dddc9_product-thumb-05-p-800.webp 800w,
                                https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871d9ae2ee67c778d3dddc9_product-thumb-05.webp       824w
                              "
                            className="product-image-02"
                          />
                        </div>
                        <div className="product-bottom">
                          <h5 className="product-heading">
                            Glossy Gel Nail Polish Set
                          </h5>
                          <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">
                            $ 12.99 USD
                          </div>
                        </div>
                        <div className="cursor">
                          <div>Detail</div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="w-dyn-list">
                  <div role="list" className="w-dyn-items">
                    <div role="listitem" className="w-dyn-item">
                      <a
                        href="/category/skincare"
                        data-w-id="2b9f2078-62c8-d091-5c57-ad567f73f14f"
                        style={{ opacity: 0 }}
                        className="primary-button outline w-inline-block"
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
                            src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6870e5cbc53776c9e8ba8366_ic-arrow.svg"
                            className="arrow"
                          />
                          <img
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f48e5a13bce2c1046c927_7d7f59d728541d7f09ba8bab672d5874_secondary-arrow.svg"
                            alt="Arrow"
                            className="arrow hover"
                          />
                        </div>
                        <div>view More</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="category-block">
              <div className="category-left">
                <img
                  src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/687484dbf0ae8e3f6d515858_categories-03.webp"
                  loading="lazy"
                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 852px"
                  srcSet="
                      https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/687484dbf0ae8e3f6d515858_categories-03-p-500.webp 500w,
                      https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/687484dbf0ae8e3f6d515858_categories-03-p-800.webp 800w,
                      https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/687484dbf0ae8e3f6d515858_categories-03.webp       852w
                    "
                  alt="Category Image"
                  className="category-image"
                />
                <div className="category-text">Makeup</div>
              </div>
              <div className="category-right">
                <div className="product-collection w-dyn-list">
                  <div role="list" className="product-list w-dyn-items">
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
                            className="product-image-02"
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
                            className="product-image-02"
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
                    <div role="listitem" className="product-item w-dyn-item">
                      <a
                        href="/product/herbal-scalp-treatment-serum"
                        className="product-block w-inline-block"
                      >
                        <div className="product-img">
                          <img
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871d9dcfbcaa166b443c402_product-thumb-06.webp"
                            alt=""
                            sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                            srcSet="
                                https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871d9dcfbcaa166b443c402_product-thumb-06-p-500.webp 500w,
                                https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871d9dcfbcaa166b443c402_product-thumb-06-p-800.webp 800w,
                                https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871d9dcfbcaa166b443c402_product-thumb-06.webp       824w
                              "
                            className="product-image-02"
                          />
                        </div>
                        <div className="product-bottom">
                          <h5 className="product-heading">
                            Herbal Scalp Treatment Serum
                          </h5>
                          <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">
                            $ 29.99 USD
                          </div>
                        </div>
                        <div className="cursor">
                          <div>Detail</div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="w-dyn-list">
                  <div role="list" className="w-dyn-items">
                    <div role="listitem" className="w-dyn-item">
                      <a
                        href="/category/makeup"
                        data-w-id="c9ba55e3-855d-8c21-4405-daa2269194fb"
                        style={{ opacity: 0 }}
                        className="primary-button outline w-inline-block"
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
                            src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6870e5cbc53776c9e8ba8366_ic-arrow.svg"
                            className="arrow"
                          />
                          <img
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f48e5a13bce2c1046c927_7d7f59d728541d7f09ba8bab672d5874_secondary-arrow.svg"
                            alt="Arrow"
                            className="arrow hover"
                          />
                        </div>
                        <div>view More</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="category-block">
              <div className="category-left">
                <img
                  src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/687484db0e3bdf62d399c39c_categories-02.webp"
                  loading="lazy"
                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 852px"
                  srcSet="
                      https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/687484db0e3bdf62d399c39c_categories-02-p-500.webp 500w,
                      https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/687484db0e3bdf62d399c39c_categories-02-p-800.webp 800w,
                      https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/687484db0e3bdf62d399c39c_categories-02.webp       852w
                    "
                  alt="Category Image"
                  className="category-image"
                />
                <div className="category-text">Fragrances</div>
              </div>
              <div className="category-right">
                <div className="product-collection w-dyn-list">
                  <div role="list" className="product-list w-dyn-items">
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
                            className="product-image-02"
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
                            className="product-image-02"
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
                        href="/product/radiant-glow-highlighter"
                        className="product-block w-inline-block"
                      >
                        <div className="product-img">
                          <img
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871da55dcbecd54d7f67c18_product-thumb-07.webp"
                            alt=""
                            sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                            srcSet="
                                https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871da55dcbecd54d7f67c18_product-thumb-07-p-500.webp 500w,
                                https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871da55dcbecd54d7f67c18_product-thumb-07-p-800.webp 800w,
                                https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871da55dcbecd54d7f67c18_product-thumb-07.webp       824w
                              "
                            className="product-image-02"
                          />
                        </div>
                        <div className="product-bottom">
                          <h5 className="product-heading">
                            Radiant Glow Highlighter
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
                <div className="w-dyn-list">
                  <div role="list" className="w-dyn-items">
                    <div role="listitem" className="w-dyn-item">
                      <a
                        href="/category/fragrances"
                        data-w-id="0ecf939f-5cd7-0402-ccd6-17bca5c6c8e4"
                        style={{ opacity: 0 }}
                        className="primary-button outline w-inline-block"
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
                            src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6870e5cbc53776c9e8ba8366_ic-arrow.svg"
                            className="arrow"
                          />
                          <img
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f48e5a13bce2c1046c927_7d7f59d728541d7f09ba8bab672d5874_secondary-arrow.svg"
                            alt="Arrow"
                            className="arrow hover"
                          />
                        </div>
                        <div>view More</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="category-block">
              <div className="category-left">
                <img
                  src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/687484dc5da735d72b171d2a_ac2fb3c40151f5f8b772afd82f4d6e73_categories-01.webp"
                  loading="lazy"
                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 852px"
                  srcSet="
                      https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/687484dc5da735d72b171d2a_ac2fb3c40151f5f8b772afd82f4d6e73_categories-01-p-500.webp 500w,
                      https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/687484dc5da735d72b171d2a_ac2fb3c40151f5f8b772afd82f4d6e73_categories-01-p-800.webp 800w,
                      https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/687484dc5da735d72b171d2a_ac2fb3c40151f5f8b772afd82f4d6e73_categories-01.webp       852w
                    "
                  alt="Category Image"
                  className="category-image"
                />
                <div className="category-text">Organic Beauty</div>
              </div>
              <div className="category-right">
                <div className="product-collection w-dyn-list">
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
                            className="product-image-02"
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
                        href="/product/hydrating-rose-water-mist"
                        className="product-block w-inline-block"
                      >
                        <div className="product-img">
                          <img
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871da9e25286db78acd2c8f_product-thumb-08.webp"
                            alt=""
                            sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                            srcSet="
                                https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871da9e25286db78acd2c8f_product-thumb-08-p-500.webp 500w,
                                https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871da9e25286db78acd2c8f_product-thumb-08-p-800.webp 800w,
                                https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871da9e25286db78acd2c8f_product-thumb-08.webp       824w
                              "
                            className="product-image-02"
                          />
                        </div>
                        <div className="product-bottom">
                          <h5 className="product-heading">
                            Hydrating Rose Water Mist
                          </h5>
                          <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">
                            $ 34.99 USD
                          </div>
                        </div>
                        <div className="cursor">
                          <div>Detail</div>
                        </div>
                      </a>
                    </div>
                    <div role="listitem" className="product-item w-dyn-item">
                      <a
                        href="/product/herbal-infused-night-cream"
                        className="product-block w-inline-block"
                      >
                        <div className="product-img">
                          <img
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871d93c81428b13e9e04f3a_product-thumb-04.webp"
                            alt=""
                            sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
                            srcSet="
                                https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871d93c81428b13e9e04f3a_product-thumb-04-p-500.webp 500w,
                                https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871d93c81428b13e9e04f3a_product-thumb-04-p-800.webp 800w,
                                https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871d93c81428b13e9e04f3a_product-thumb-04.webp       824w
                              "
                            className="product-image-02"
                          />
                        </div>
                        <div className="product-bottom">
                          <h5 className="product-heading">
                            Herbal Infused Night Cream
                          </h5>
                          <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">
                            $ 31.99 USD
                          </div>
                        </div>
                        <div className="cursor">
                          <div>Detail</div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="w-dyn-list">
                  <div role="list" className="w-dyn-items">
                    <div role="listitem" className="w-dyn-item">
                      <a
                        href="/category/organic-beauty"
                        data-w-id="a2d3a54a-9245-15dd-a16c-00971a00a714"
                        style={{ opacity: 0 }}
                        className="primary-button outline w-inline-block"
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
                            src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6870e5cbc53776c9e8ba8366_ic-arrow.svg"
                            className="arrow"
                          />
                          <img
                            loading="lazy"
                            src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f48e5a13bce2c1046c927_7d7f59d728541d7f09ba8bab672d5874_secondary-arrow.svg"
                            alt="Arrow"
                            className="arrow hover"
                          />
                        </div>
                        <div>view More</div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="category-inner">
            {categories.map((category: any) => (
              <div key={category.id} className="category-block">
                {/* LEFT */}
                <div className="category-left">
                  {category.image?.url && (
                    <img
                      src={category.image.url}
                      alt={category.image.altText || category.title}
                      className="category-image"
                      loading="lazy"
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
                                  <img
                                    src={image.url}
                                    alt={image.altText || product.title}
                                    className="product-image-02"
                                    loading="lazy"
                                  />
                                )}
                              </div>

                              <div className="product-bottom">
                                <h5 className="product-heading">
                                  {product.title}
                                </h5>
                                <div>
                                  $ {product.priceRange.minVariantPrice.amount}{" "}
                                  {
                                    product.priceRange.minVariantPrice
                                      .currencyCode
                                  }
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
              <img
                src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6870de521dcfdb3c101ba086_sub-title.svg"
                loading="lazy"
                alt="Sub Title Icon"
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
                <div>Are PurCurie products suitable for sensitive skin?</div>
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6870a5867e04b6e9cab6c936_faq-arrow.svg"
                  alt="Arrow"
                  className="arrow"
                />
              </a>
              <a
                data-w-tab="Tab 1"
                className="faq-wrap w-inline-block w-tab-link"
              >
                <div>How long does shipping take?</div>
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6870a5867e04b6e9cab6c936_faq-arrow.svg"
                  alt="Arrow"
                  className="arrow"
                />
              </a>
              <a
                data-w-tab="Tab 2"
                className="faq-wrap w-inline-block w-tab-link"
              >
                <div>Do you offer returns or refunds?</div>
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6870a5867e04b6e9cab6c936_faq-arrow.svg"
                  alt="Arrow"
                  className="arrow"
                />
              </a>
              <a
                data-w-tab="Tab 3"
                className="faq-wrap w-inline-block w-tab-link"
              >
                <div>How can I contact customer support?</div>
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6870a5867e04b6e9cab6c936_faq-arrow.svg"
                  alt="Arrow"
                  className="arrow"
                />
              </a>
              <a
                data-w-tab="Tab 4"
                className="faq-wrap w-inline-block w-tab-link"
              >
                <div>How can I stay updated on new launches and offers?</div>
                <img
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6870a5867e04b6e9cab6c936_faq-arrow.svg"
                  alt="Arrow"
                  className="arrow"
                />
              </a>
            </div>
            <div className="faq-right w-tab-content">
              <div data-w-tab="Tab 5" className="w-tab-pane w--tab-active">
                <p className="single-text">
                  Many of our products are formulated to be gentle and skin-friendly. 
                  We recommend checking the ingredient list on each product page and doing a patch test before full use.
                </p>
              </div>
              <div data-w-tab="Tab 1" className="w-tab-pane">
                <p className="single-text">
                  Orders are usually processed within 1–2 business days and delivered within 3–7 business days. Visit our 
                  <a href="/return-policy"> Returns &amp; Exchanges</a> page to start the process.
                   
                </p>
              </div>
              <div data-w-tab="Tab 2" className="w-tab-pane">
                <p className="single-text">
                 Yes. If you receive a damaged, defective, or incorrect product, 
                  you can request a return or refund within 48 hours of delivery. 
                  Please refer to our Refund & Return Policy for full details.
                </p>
              </div>
              <div data-w-tab="Tab 3" className="w-tab-pane">
                <p className="single-text">
                   You can reach us anytime at support@purcurie.com
                   Our team is happy to assist you with orders, product questions, or concerns.
                </p>
              </div>
              <div data-w-tab="Tab 4" className="w-tab-pane">
                <p className="single-text">
                 You can follow us on social media to receive updates about new products,
                  exclusive offers and skincare tips.
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
