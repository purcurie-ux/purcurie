// // // // interface MoreImage {
// // // //   url: string;
// // // // }

// // // // interface ProductDetailData {
// // // //   mainImage: string;
// // // //   mainImageSrcset: string;
// // // //   moreImages: MoreImage[];
// // // //   title: string;
// // // //   price: string;
// // // //   description: string;
// // // //   category: string;
// // // //   sku: string;
// // // //   tag: string;
// // // //   skuId: string;
// // // //   productId: string;
// // // // }

// // // // interface SimilarProduct {
// // // //   id: string;
// // // //   slug: string;
// // // //   title: string;
// // // //   price: string;
// // // //   image: string;
// // // //   srcset: string;
// // // // }

// // // // interface ProductDetailProps {
// // // //   product?: ProductDetailData;
// // // //   similarProducts?: SimilarProduct[];
// // // // }

// // // // const defaultProduct: ProductDetailData = {
// // // //   mainImage:
// // // //     "https://i.postimg.cc/1RkmDS2n/Chat-GPT-Image-Jan-6-2026-12-10-48-PM.png",
// // // //   mainImageSrcset:
// // // //     "https://i.postimg.cc/W4Yjzc0D/Chat-GPT-Image-Jan-6-2026-12-09-08-PM.png",
// // // //   moreImages: [
// // // //     {
// // // //       url: "https://i.postimg.cc/W4Yjzc0D/Chat-GPT-Image-Jan-6-2026-12-09-08-PM.png",
// // // //     },
// // // //     {
// // // //       url: "https://i.postimg.cc/pXvN2L30/Chat-GPT-Image-Jan-6-2026-02-45-38-PM-(1).png",
// // // //     },
// // // //     {
// // // //       url: "https://i.postimg.cc/rpK3h0Rv/Remove-Dark-spots.png",
// // // //     },
// // // //     {
// // // //       url: "https://i.postimg.cc/cCNz4Fk0/Gemini-Generated-Image-rytbn6rytbn6rytb.png",
// // // //     },
// // // //   ],
// // // //   title: "Argan Oil Repair Shampoo",
// // // //   price: "$ 22.99 USD",
// // // //   description:
// // // //     "Revitalize your hair with Argan Oil Repair Shampoo, nourishing formula designed to restore strength, moisture, and shine. Enriched with pure argan oil, keratin, and botanical extracts, this shampoo deeply hydrates while repairing damaged strands.",
// // // //   category: "Organic Beauty",
// // // //   sku: "AORS-007",
// // // //   tag: "Strengthening",
// // // //   skuId: "6871dbd8aa48a044cd83e93b",
// // // //   productId: "6871dbd877f454c5d99bff7c",
// // // // };

// // // // const defaultSimilarProducts: SimilarProduct[] = [
// // // //   {
// // // //     id: "1",
// // // //     slug: "hydrating-rose-water-mist",
// // // //     title: "Hydrating Rose Water Mist",
// // // //     price: "$ 34.99 USD",
// // // //     image:
// // // //       "https://i.postimg.cc/1RkmDS2n/Chat-GPT-Image-Jan-6-2026-12-10-48-PM.png",
// // // //     srcset:
// // // //       "https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871da9e25286db78acd2c8f_product-thumb-08-p-500.webp 500w, https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871da9e25286db78acd2c8f_product-thumb-08-p-800.webp 800w, https://i.postimg.cc/1RkmDS2n/Chat-GPT-Image-Jan-6-2026-12-10-48-PM.png 824w",
// // // //   },
// // // //   {
// // // //     id: "2",
// // // //     slug: "euphoria-bloom-eau-de-parfum",
// // // //     title: "Euphoria Bloom Eau de Parfum",
// // // //     price: "$ 49.99 USD",
// // // //     image:
// // // //       "https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f58442182ca767d888ac_product-thumb-03.webp",
// // // //     srcset:
// // // //       "https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f58442182ca767d888ac_product-thumb-03-p-500.webp 500w, https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f58442182ca767d888ac_product-thumb-03-p-800.webp 800w, https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f58442182ca767d888ac_product-thumb-03.webp 824w",
// // // //   },
// // // //   {
// // // //     id: "3",
// // // //     slug: "vitamin-c-brightening-toner",
// // // //     title: "Vitamin C Brightening Toner",
// // // //     price: "$ 21.99 USD",
// // // //     image:
// // // //       "https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f1641bcd4ab4b5586638_product-thumb-02.webp",
// // // //     srcset:
// // // //       "https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f1641bcd4ab4b5586638_product-thumb-02-p-500.webp 500w, https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f1641bcd4ab4b5586638_product-thumb-02-p-800.webp 800w, https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f1641bcd4ab4b5586638_product-thumb-02.webp 824w",
// // // //   },
// // // // ];

// // // // function ProductDetail({
// // // //   product = defaultProduct,
// // // //   similarProducts = defaultSimilarProducts,
// // // // }: ProductDetailProps) {
// // // //   const lightboxItems = product.moreImages.map((img) => ({
// // // //     url: img.url,
// // // //     type: "image",
// // // //   }));

// // // //   return (
// // // //     <div className="page-wrap">
// // // //       <section className="product-main">
// // // //         <div className="w-layout-blockcontainer container w-container">
// // // //           <div className="product-inner">
// // // //             <div
// // // //               data-w-id="3cd436bc-9bb5-9108-0a0e-9f3b288b18d6"
              
// // // //               className="product-left"
// // // //             >
// // // //               <div className="product-main-img">
// // // //                 <img
// // // //                   loading="lazy"
// // // //                   data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D"
// // // //                   src={product.mainImage}
// // // //                   alt=""
// // // //                   sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
// // // //                   srcSet={product.mainImageSrcset}
// // // //                   className="product-main-image"
// // // //                 />
// // // //                 <a
// // // //                   href="#"
// // // //                   data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_more_images_4dr%22%2C%22to%22%3A%22media%22%7D%5D"
// // // //                   className="similar-icon w-inline-block w-lightbox"
// // // //                 >
// // // //                   <img
// // // //                     src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/687107bcf6bae39589bdb1ad_ic-plus.svg"
// // // //                     loading="lazy"
// // // //                     alt="Plus Icon"
// // // //                     className="ic-similar"
// // // //                   />
// // // //                   <script type="application/json" className="w-json">
// // // //                     {JSON.stringify({
// // // //                       items: lightboxItems,
// // // //                       group: "Group",
// // // //                     })}
// // // //                   </script>
// // // //                 </a>
// // // //               </div>
// // // //               <div className="more-image w-dyn-list w-dyn-items-repeater-ref">
// // // //                 <div
// // // //                   role="list"
// // // //                   className="ma-list w-dyn-items"
// // // //                   data-wf-collection="f_more_images_4dr"
// // // //                 >
// // // //                   {product.moreImages.map((image, index) => (
// // // //                     <div
// // // //                       key={index}
// // // //                       role="listitem"
// // // //                       className="ma-item w-dyn-item w-dyn-repeater-item"
// // // //                     >
// // // //                       <div className="ma-img">
// // // //                         <img
// // // //                           loading="lazy"
// // // //                           data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_more_images_4dr%5B%5D%22%2C%22to%22%3A%22src%22%7D%5D"
// // // //                           src={image.url}
// // // //                           alt=""
// // // //                           sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
// // // //                           srcSet={
// // // //                             image.url.replace(/\.webp$/, "-p-500.webp 500w, ") +
// // // //                             image.url.replace(/\.webp$/, "-p-800.webp 800w, ") +
// // // //                             image.url.replace(
// // // //                               /\.webp$/,
// // // //                               "-p-1080.webp 1080w, "
// // // //                             ) +
// // // //                             image.url +
// // // //                             " 1200w"
// // // //                           }
// // // //                           className="ma-image"
// // // //                         />
// // // //                       </div>
// // // //                     </div>
// // // //                   ))}
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //             <div className="product-right">
// // // //               <div>
// // // //                 <h2
// // // //                   data-w-id="22c33594-7c5c-0e5b-47af-9e66ffc53d83"
                  
// // // //                   className="product-main-heading"
// // // //                 >
// // // //                   {product.title}
// // // //                 </h2>
// // // //                 <div
// // // //                   data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
// // // //                   data-w-id="7e38c84b-771c-846c-8a16-f45b4de85ab0"
                  
// // // //                   className="product-price"
// // // //                 >
// // // //                   {product.price}
// // // //                 </div>
// // // //               </div>
// // // //               <div className="product-wrapper">
// // // //                 <div
// // // //                   data-w-id="4ef00176-b960-a4af-9938-34f9009aa819"
                  
// // // //                 >
// // // //                   <p className="single-text">{product.description}</p>
// // // //                   <div>
// // // //                     <form
// // // //                       data-node-type="commerce-add-to-cart-form"
// // // //                       data-commerce-sku-id={product.skuId}
// // // //                       data-loading-text="Adding to cart..."
// // // //                       data-commerce-product-id={product.productId}
// // // //                       className="w-commerce-commerceaddtocartform default-state"
// // // //                     >
// // // //                       <input
// // // //                         type="number"
// // // //                         pattern="^[0-9]+$"
// // // //                         inputMode="numeric"
// // // //                         id="quantity-77fbaac63848cb034a58c34d86a5bc79"
// // // //                         name="commerce-add-to-cart-quantity-input"
// // // //                         min="1"
// // // //                         className="w-commerce-commerceaddtocartquantityinput quantity"
// // // //                         defaultValue="1"
// // // //                       />
// // // //                       <input
// // // //                         type="submit"
// // // //                         data-node-type="commerce-add-to-cart-button"
// // // //                         data-loading-text="Add to Cart"
// // // //                         aria-busy="false"
// // // //                         aria-haspopup="dialog"
// // // //                         className="w-commerce-commerceaddtocartbutton add-to-cart-button"
// // // //                         value="Add to Cart"
// // // //                       />
// // // //                     </form>
// // // //                     <div
// // // //                       style={{ display: "none" }}
// // // //                       className="w-commerce-commerceaddtocartoutofstock empty-state"
// // // //                       tabIndex={0}
// // // //                     >
// // // //                       <div>This product is out of stock.</div>
// // // //                     </div>
// // // //                     <div
// // // //                       aria-live="assertive"
// // // //                       data-node-type="commerce-add-to-cart-error"
// // // //                       style={{ display: "none" }}
// // // //                       className="w-commerce-commerceaddtocarterror"
// // // //                     >
// // // //                       <div
// // // //                         data-node-type="commerce-add-to-cart-error"
// // // //                         data-w-add-to-cart-quantity-error="Product is not available in this quantity."
// // // //                         data-w-add-to-cart-general-error="Something went wrong when adding this item to the cart."
// // // //                         data-w-add-to-cart-mixed-cart-error="You can't purchase another product with a subscription."
// // // //                         data-w-add-to-cart-buy-now-error="Something went wrong when trying to purchase this item."
// // // //                         data-w-add-to-cart-checkout-disabled-error="Checkout is disabled on this site."
// // // //                         data-w-add-to-cart-select-all-options-error="Please select an option in each set."
// // // //                       >
// // // //                         Product is not available in this quantity.
// // // //                       </div>
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
// // // //                 <div
// // // //                   data-w-id="f53b6a83-a8a4-80bf-ef73-55de824077fc"
                  
// // // //                   className="product-main-data"
// // // //                 >
// // // //                   <div className="product-info top">
// // // //                     <div className="square"></div>
// // // //                     <div className="product-data">
// // // //                       <div className="product-text">Category:</div>
// // // //                       <div className="w-dyn-list">
// // // //                         <div role="list" className="w-dyn-items">
// // // //                           <div role="listitem" className="w-dyn-item">
// // // //                             <div>{product.category}</div>
// // // //                           </div>
// // // //                         </div>
// // // //                       </div>
// // // //                     </div>
// // // //                   </div>
// // // //                   <div className="product-info">
// // // //                     <div className="square"></div>
// // // //                     <div className="product-data">
// // // //                       <div className="product-text">SKU:</div>
// // // //                       <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_sku_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">
// // // //                         {product.sku}
// // // //                       </div>
// // // //                     </div>
// // // //                   </div>
// // // //                   <div className="product-info last">
// // // //                     <div className="square"></div>
// // // //                     <div className="product-data">
// // // //                       <div className="product-text">Tag:</div>
// // // //                       <div>{product.tag}</div>
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
// // // //                 <div
// // // //                   data-w-id="bd7992b6-d43c-9972-3e92-264b283da5b7"
                  
// // // //                   className="product-info-wrap"
// // // //                 >
// // // //                   <div className="product-main-info">
// // // //                     <img
// // // //                       src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6870fe6af03206a5a7c515db_ic-High-Quality.svg"
// // // //                       loading="lazy"
// // // //                       alt="Product Icon"
// // // //                     />
// // // //                     <div>High-Quality Beauty</div>
// // // //                   </div>
// // // //                   <div className="product-main-info">
// // // //                     <img
// // // //                       src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6870fe6a8ab8d2f71e537086_ic-Exclusive%20Launches.svg"
// // // //                       loading="lazy"
// // // //                       alt="Product Icon"
// // // //                     />
// // // //                     <div>Exclusive Launches</div>
// // // //                   </div>
// // // //                   <div className="product-main-info">
// // // //                     <img
// // // //                       src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6870fe6a987d45a34788597c_ic-Easy%20Shopping.svg"
// // // //                       loading="lazy"
// // // //                       alt="Product Icon"
// // // //                     />
// // // //                     <div>Easy Shopping</div>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </section>
// // // //       <section className="products">
// // // //         <div className="w-layout-blockcontainer container w-container">
// // // //           <div className="section-title">
// // // //             <div className="sub-title">
// // // //               <img
// // // //                 src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6870de521dcfdb3c101ba086_sub-title.svg"
// // // //                 loading="lazy"
// // // //                 alt="Sub Title Icon"
// // // //               />
// // // //               <div>Similar Products</div>
// // // //             </div>
// // // //             <h2
// // // //               style={{
// // // //                 WebkitTransform:
// // // //                   "translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(-5deg, 0)",
// // // //                 MozTransform:
// // // //                   "translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(-5deg, 0)",
// // // //                 msTransform:
// // // //                   "translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(-5deg, 0)",
// // // //                 transform:
// // // //                   "translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(-5deg, 0)",
// // // //               }}
// // // //               className="section-heading"
// // // //             >
// // // //               Explore arrivals crafted to elevate your makeup and skincare game.
// // // //             </h2>
// // // //           </div>
// // // //           <div className="w-dyn-list">
// // // //             <div role="list" className="product-list w-dyn-items">
// // // //               {similarProducts.map((product) => (
// // // //                 <div
// // // //                   role="listitem"
// // // //                   className="product-item w-dyn-item"
// // // //                   key={product.id}
// // // //                 >
// // // //                   <a
// // // //                     href={`/product/${product.slug}`}
// // // //                     className="product-block w-inline-block"
// // // //                   >
// // // //                     <div className="product-img">
// // // //                       <img
// // // //                         loading="lazy"
// // // //                         src={product.image}
// // // //                         alt=""
// // // //                         sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
// // // //                         srcSet={product.srcset}
// // // //                         className="product-image"
// // // //                       />
// // // //                     </div>
// // // //                     <div className="product-bottom">
// // // //                       <h5 className="product-heading">{product.title}</h5>
// // // //                       <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">
// // // //                         {product.price}
// // // //                       </div>
// // // //                     </div>
// // // //                     <div className="cursor">
// // // //                       <div>Detail</div>
// // // //                     </div>
// // // //                   </a>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </section>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default ProductDetail;



// // // "use client";

// // // import { useCart } from "@/context/CartContext";

// // // interface MoreImage {
// // //   url: string;
// // // }

// // // interface ProductDetailData {
// // //   mainImage: string;
// // //   mainImageSrcset: string;
// // //   moreImages: MoreImage[];
// // //   title: string;
// // //   price: string;
// // //   description: string;
// // //   category: string;
// // //   sku: string;
// // //   tag: string;
// // //   skuId: string;
// // //   productId: string;
// // // }

// // // interface SimilarProduct {
// // //   id: string;
// // //   slug: string;
// // //   title: string;
// // //   price: string;
// // //   image: string;
// // //   srcset: string;
// // // }

// // // interface ProductDetailProps {
// // //   product?: ProductDetailData;
// // //   similarProducts?: SimilarProduct[];
// // // }

// // // const defaultProduct: ProductDetailData = {
// // //   mainImage:
// // //     "https://i.postimg.cc/1RkmDS2n/Chat-GPT-Image-Jan-6-2026-12-10-48-PM.png",
// // //   mainImageSrcset:
// // //     "https://i.postimg.cc/W4Yjzc0D/Chat-GPT-Image-Jan-6-2026-12-09-08-PM.png",
// // //   moreImages: [
// // //     {
// // //       url: "https://i.postimg.cc/W4Yjzc0D/Chat-GPT-Image-Jan-6-2026-12-09-08-PM.png",
// // //     },
// // //     {
// // //       url: "https://i.postimg.cc/pXvN2L30/Chat-GPT-Image-Jan-6-2026-02-45-38-PM-(1).png",
// // //     },
// // //     {
// // //       url: "https://i.postimg.cc/rpK3h0Rv/Remove-Dark-spots.png",
// // //     },
// // //     {
// // //       url: "https://i.postimg.cc/cCNz4Fk0/Gemini-Generated-Image-rytbn6rytbn6rytb.png",
// // //     },
// // //   ],
// // //   title: "Argan Oil Repair Shampoo",
// // //   price: "$ 22.99 USD",
// // //   description:
// // //     "Revitalize your hair with Argan Oil Repair Shampoo, nourishing formula designed to restore strength, moisture, and shine. Enriched with pure argan oil, keratin, and botanical extracts, this shampoo deeply hydrates while repairing damaged strands.",
// // //   category: "Organic Beauty",
// // //   sku: "AORS-007",
// // //   tag: "Strengthening",
// // //   skuId: "6871dbd8aa48a044cd83e93b",
// // //   productId: "6871dbd877f454c5d99bff7c",
// // // };

// // // const defaultSimilarProducts: SimilarProduct[] = [
// // //   {
// // //     id: "1",
// // //     slug: "hydrating-rose-water-mist",
// // //     title: "Hydrating Rose Water Mist",
// // //     price: "$ 34.99 USD",
// // //     image:
// // //       "https://i.postimg.cc/1RkmDS2n/Chat-GPT-Image-Jan-6-2026-12-10-48-PM.png",
// // //     srcset:
// // //       "https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871da9e25286db78acd2c8f_product-thumb-08-p-500.webp 500w, https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871da9e25286db78acd2c8f_product-thumb-08-p-800.webp 800w, https://i.postimg.cc/1RkmDS2n/Chat-GPT-Image-Jan-6-2026-12-10-48-PM.png 824w",
// // //   },
// // //   {
// // //     id: "2",
// // //     slug: "euphoria-bloom-eau-de-parfum",
// // //     title: "Euphoria Bloom Eau de Parfum",
// // //     price: "$ 49.99 USD",
// // //     image:
// // //       "https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f58442182ca767d888ac_product-thumb-03.webp",
// // //     srcset:
// // //       "https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f58442182ca767d888ac_product-thumb-03-p-500.webp 500w, https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f58442182ca767d888ac_product-thumb-03-p-800.webp 800w, https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f58442182ca767d888ac_product-thumb-03.webp 824w",
// // //   },
// // //   {
// // //     id: "3",
// // //     slug: "vitamin-c-brightening-toner",
// // //     title: "Vitamin C Brightening Toner",
// // //     price: "$ 21.99 USD",
// // //     image:
// // //       "https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f1641bcd4ab4b5586638_product-thumb-02.webp",
// // //     srcset:
// // //       "https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f1641bcd4ab4b5586638_product-thumb-02-p-500.webp 500w, https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f1641bcd4ab4b5586638_product-thumb-02-p-800.webp 800w, https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f1641bcd4ab4b5586638_product-thumb-02.webp 824w",
// // //   },
// // // ];

// // // function ProductDetail({
// // //   product = defaultProduct,
// // //   similarProducts = defaultSimilarProducts,
// // // }: ProductDetailProps) {
// // //   const { addToCart } = useCart();

// // //   const handleAddToCart = () => {
// // //     addToCart({
// // //       variantId: product.skuId,
// // //       productId: product.productId,
// // //       title: product.title,
// // //       price: product.price,
// // //       image: product.mainImage,
// // //       sku: product.sku,
// // //     });
// // //   };

// // //   const lightboxItems = product.moreImages.map((img) => ({
// // //     url: img.url,
// // //     type: "image",
// // //   }));

// // //   return (
// // //     <div>
// // //       <div>
// // //         {product.moreImages.map((image, index) => (
// // //           <div key={index}>
// // //             <img src={image.url} alt="" />
// // //           </div>
// // //         ))}
// // //       </div>
// // //       <div>
// // //         <h1>{product.title}</h1>
// // //         <div>{product.price}</div>
// // //         <p>{product.description}</p>
// // //         <form>
// // //           <button type="button" onClick={handleAddToCart}>
// // //             Add To Cart
// // //           </button>
// // //           <div style={{ display: "none" }}>This product is out of stock.</div>
// // //           <div style={{ display: "none" }}>
// // //             Product is not available in this quantity.
// // //           </div>
// // //         </form>
// // //         <div>
// // //           <div>
// // //             Category:
// // //             <span>{product.category}</span>
// // //           </div>
// // //           <div>
// // //             SKU:
// // //             <span> {product.sku}</span>
// // //           </div>
// // //           <div>
// // //             Tag:
// // //             <span>{product.tag}</span>
// // //           </div>
// // //         </div>
// // //       </div>
// // //       <div>
// // //         <div>High-Quality Beauty</div>
// // //         <div>Exclusive Launches</div>
// // //         <div>Easy Shopping</div>
// // //       </div>
// // //       <div>
// // //         <h2>Similar Products</h2>
// // //         <p>
// // //           Explore arrivals crafted to elevate your makeup and skincare game.
// // //         </p>
// // //         <div>
// // //           {similarProducts.map((product) => (
// // //             <div key={product.id}>
// // //               <a href={`/products/${product.slug}`}>
// // //                 <img src={product.image} alt={product.title} />
// // //               </a>
// // //               <div>
// // //                 <a href={`/products/${product.slug}`}>{product.title}</a>
// // //                 <div>{product.price}</div>
// // //                 <a href={`/products/${product.slug}`}>Detail</a>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // export default ProductDetail;



// // "use client";

// // import { useCart } from "@/context/CartContext";

// // interface MoreImage {
// //   url: string;
// // }

// // interface ProductDetailData {
// //   mainImage: string;
// //   mainImageSrcset: string;
// //   moreImages: MoreImage[];
// //   title: string;
// //   price: string;
// //   description: string;
// //   category: string;
// //   sku: string;
// //   tag: string;
// //   skuId: string;
// //   productId: string;
// // }

// // interface SimilarProduct {
// //   id: string;
// //   slug: string;
// //   title: string;
// //   price: string;
// //   image: string;
// //   srcset: string;
// // }

// // interface ProductDetailProps {
// //   product?: ProductDetailData;
// //   similarProducts?: SimilarProduct[];
// // }

// // const defaultProduct: ProductDetailData = {
// //   mainImage:
// //     "https://i.postimg.cc/1RkmDS2n/Chat-GPT-Image-Jan-6-2026-12-10-48-PM.png",
// //   mainImageSrcset:
// //     "https://i.postimg.cc/W4Yjzc0D/Chat-GPT-Image-Jan-6-2026-12-09-08-PM.png",
// //   moreImages: [
// //     {
// //       url: "https://i.postimg.cc/W4Yjzc0D/Chat-GPT-Image-Jan-6-2026-12-09-08-PM.png",
// //     },
// //     {
// //       url: "https://i.postimg.cc/pXvN2L30/Chat-GPT-Image-Jan-6-2026-02-45-38-PM-(1).png",
// //     },
// //     {
// //       url: "https://i.postimg.cc/rpK3h0Rv/Remove-Dark-spots.png",
// //     },
// //     {
// //       url: "https://i.postimg.cc/cCNz4Fk0/Gemini-Generated-Image-rytbn6rytbn6rytb.png",
// //     },
// //   ],
// //   title: "Argan Oil Repair Shampoo",
// //   price: "$ 22.99 USD",
// //   description:
// //     "Revitalize your hair with Argan Oil Repair Shampoo, nourishing formula designed to restore strength, moisture, and shine. Enriched with pure argan oil, keratin, and botanical extracts, this shampoo deeply hydrates while repairing damaged strands.",
// //   category: "Organic Beauty",
// //   sku: "AORS-007",
// //   tag: "Strengthening",
// //   skuId: "6871dbd8aa48a044cd83e93b",
// //   productId: "6871dbd877f454c5d99bff7c",
// // };

// // const defaultSimilarProducts: SimilarProduct[] = [
// //   {
// //     id: "1",
// //     slug: "hydrating-rose-water-mist",
// //     title: "Hydrating Rose Water Mist",
// //     price: "$ 34.99 USD",
// //     image:
// //       "https://i.postimg.cc/1RkmDS2n/Chat-GPT-Image-Jan-6-2026-12-10-48-PM.png",
// //     srcset:
// //       "https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871da9e25286db78acd2c8f_product-thumb-08-p-500.webp 500w, https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871da9e25286db78acd2c8f_product-thumb-08-p-800.webp 800w, https://i.postimg.cc/1RkmDS2n/Chat-GPT-Image-Jan-6-2026-12-10-48-PM.png 824w",
// //   },
// //   {
// //     id: "2",
// //     slug: "euphoria-bloom-eau-de-parfum",
// //     title: "Euphoria Bloom Eau de Parfum",
// //     price: "$ 49.99 USD",
// //     image:
// //       "https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f58442182ca767d888ac_product-thumb-03.webp",
// //     srcset:
// //       "https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f58442182ca767d888ac_product-thumb-03-p-500.webp 500w, https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f58442182ca767d888ac_product-thumb-03-p-800.webp 800w, https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f58442182ca767d888ac_product-thumb-03.webp 824w",
// //   },
// //   {
// //     id: "3",
// //     slug: "vitamin-c-brightening-toner",
// //     title: "Vitamin C Brightening Toner",
// //     price: "$ 21.99 USD",
// //     image:
// //       "https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f1641bcd4ab4b5586638_product-thumb-02.webp",
// //     srcset:
// //       "https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f1641bcd4ab4b5586638_product-thumb-02-p-500.webp 500w, https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f1641bcd4ab4b5586638_product-thumb-02-p-800.webp 800w, https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f1641bcd4ab4b5586638_product-thumb-02.webp 824w",
// //   },
// // ];

// // function ProductDetail({
// //   product = defaultProduct,
// //   similarProducts = defaultSimilarProducts,
// // }: ProductDetailProps) {
// //   const { addToCart } = useCart();

// //   const handleAddToCart = (e: React.FormEvent) => {
// //     e.preventDefault();

// //     addToCart({
// //       variantId: product.skuId,
// //       productId: product.productId,
// //       title: product.title,
// //       price: product.price,
// //       image: product.mainImage,
// //       sku: product.sku,
// //     });
// //   };

// //   const lightboxItems = product.moreImages.map((img) => ({
// //     url: img.url,
// //     type: "image",
// //   }));

// //   return (
// //     <div className="page-wrap">
// //       <section className="product-main">
// //         <div className="w-layout-blockcontainer container w-container">
// //           <div className="product-inner">
// //             {/* LEFT */}
// //             <div
// //               data-w-id="3cd436bc-9bb5-9108-0a0e-9f3b288b18d6"
// //               className="product-left"
// //             >
// //               <div className="product-main-img">
// //                 <img
// //                   loading="lazy"
// //                   src={product.mainImage}
// //                   srcSet={product.mainImageSrcset}
// //                   className="product-main-image"
// //                   alt=""
// //                 />

// //                 <a href="#" className="similar-icon w-inline-block w-lightbox">
// //                   <img
// //                     src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/687107bcf6bae39589bdb1ad_ic-plus.svg"
// //                     loading="lazy"
// //                     alt="Plus Icon"
// //                     className="ic-similar"
// //                   />

// //                   <script type="application/json" className="w-json">
// //                     {JSON.stringify({
// //                       items: lightboxItems,
// //                       group: "Group",
// //                     })}
// //                   </script>
// //                 </a>
// //               </div>

// //               <div className="more-image w-dyn-list">
// //                 <div role="list" className="ma-list w-dyn-items">
// //                   {product.moreImages.map((image, index) => (
// //                     <div
// //                       key={index}
// //                       role="listitem"
// //                       className="ma-item w-dyn-item"
// //                     >
// //                       <div className="ma-img">
// //                         <img
// //                           loading="lazy"
// //                           src={image.url}
// //                           className="ma-image"
// //                           alt=""
// //                         />
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
// //             </div>

// //             {/* RIGHT */}
// //             <div className="product-right">
// //               <div>
// //                 <h2 className="product-main-heading">{product.title}</h2>

// //                 <div className="product-price">{product.price}</div>
// //               </div>

// //               <div className="product-wrapper">
// //                 <p className="single-text">{product.description}</p>

// //                 {/* ADD TO CART FORM (LOGIC UPDATED) */}
// //                 <form
// //                   className="w-commerce-commerceaddtocartform default-state"
// //                   onSubmit={handleAddToCart}
// //                 >
// //                   <input
// //                     type="number"
// //                     min="1"
// //                     defaultValue="1"
// //                     className="w-commerce-commerceaddtocartquantityinput quantity"
// //                   />

// //                   <input
// //                     type="submit"
// //                     value="Add to Cart"
// //                     className="w-commerce-commerceaddtocartbutton add-to-cart-button"
// //                   />
// //                 </form>

// //                 {/* INFO */}
// //                 <div className="product-main-data">
// //                   <div className="product-info top">
// //                     <div className="square"></div>
// //                     <div className="product-data">
// //                       <div className="product-text">Category:</div>
// //                       <div>{product.category}</div>
// //                     </div>
// //                   </div>

// //                   <div className="product-info">
// //                     <div className="square"></div>
// //                     <div className="product-data">
// //                       <div className="product-text">SKU:</div>
// //                       <div>{product.sku}</div>
// //                     </div>
// //                   </div>

// //                   <div className="product-info last">
// //                     <div className="square"></div>
// //                     <div className="product-data">
// //                       <div className="product-text">Tag:</div>
// //                       <div>{product.tag}</div>
// //                     </div>
// //                   </div>
// //                 </div>

// //                 {/* BADGES */}
// //                 <div className="product-info-wrap">
// //                   <div className="product-main-info">
// //                     <div>High-Quality Beauty</div>
// //                   </div>
// //                   <div className="product-main-info">
// //                     <div>Exclusive Launches</div>
// //                   </div>
// //                   <div className="product-main-info">
// //                     <div>Easy Shopping</div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* SIMILAR PRODUCTS */}
// //       <section className="products">
// //         <div className="w-layout-blockcontainer container w-container">
// //           <h2>Similar Products</h2>

// //           <div className="product-list">
// //             {similarProducts.map((product) => (
// //               <div className="product-item" key={product.id}>
// //                 <a href={`/product/${product.slug}`} className="product-block">
// //                   <img
// //                     src={product.image}
// //                     alt={product.title}
// //                     className="product-image"
// //                   />

// //                   <h5>{product.title}</h5>
// //                   <div>{product.price}</div>
// //                 </a>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }

// // export default ProductDetail;





// "use client";

// import { useState } from "react";
// import { useCart } from "@/context/CartContext";

// interface MoreImage {
//   url: string;
// }

// interface ProductDetailData {
//   mainImage: string;
//   mainImageSrcset: string;
//   moreImages: MoreImage[];
//   title: string;
//   price: string;
//   description: string;
//   category: string;
//   sku: string;
//   tag: string;
//   skuId: string;
//   productId: string;
// }

// interface SimilarProduct {
//   id: string;
//   slug: string;
//   title: string;
//   price: string;
//   image: string;
//   srcset: string;
// }

// interface ProductDetailProps {
//   product?: ProductDetailData;
//   similarProducts?: SimilarProduct[];
// }

// const defaultProduct: ProductDetailData = {
//   mainImage:
//     "https://i.postimg.cc/1RkmDS2n/Chat-GPT-Image-Jan-6-2026-12-10-48-PM.png",
//   mainImageSrcset:
//     "https://i.postimg.cc/W4Yjzc0D/Chat-GPT-Image-Jan-6-2026-12-09-08-PM.png",
//   moreImages: [
//     {
//       url: "https://i.postimg.cc/W4Yjzc0D/Chat-GPT-Image-Jan-6-2026-12-09-08-PM.png",
//     },
//     {
//       url: "https://i.postimg.cc/pXvN2L30/Chat-GPT-Image-Jan-6-2026-02-45-38-PM-(1).png",
//     },
//     {
//       url: "https://i.postimg.cc/rpK3h0Rv/Remove-Dark-spots.png",
//     },
//     {
//       url: "https://i.postimg.cc/cCNz4Fk0/Gemini-Generated-Image-rytbn6rytbn6rytb.png",
//     },
//   ],
//   title: "Argan Oil Repair Shampoo",
//   price: "$ 22.99 USD",
//   description:
//     "Revitalize your hair with Argan Oil Repair Shampoo, nourishing formula designed to restore strength, moisture, and shine. Enriched with pure argan oil, keratin, and botanical extracts, this shampoo deeply hydrates while repairing damaged strands.",
//   category: "Organic Beauty",
//   sku: "AORS-007",
//   tag: "Strengthening",
//   skuId: "6871dbd8aa48a044cd83e93b",
//   productId: "6871dbd877f454c5d99bff7c",
// };

// const defaultSimilarProducts: SimilarProduct[] = [
//   {
//     id: "1",
//     slug: "hydrating-rose-water-mist",
//     title: "Hydrating Rose Water Mist",
//     price: "$ 34.99 USD",
//     image:
//       "https://i.postimg.cc/1RkmDS2n/Chat-GPT-Image-Jan-6-2026-12-10-48-PM.png",
//     srcset:
//       "https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871da9e25286db78acd2c8f_product-thumb-08-p-500.webp 500w, https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871da9e25286db78acd2c8f_product-thumb-08-p-800.webp 800w, https://i.postimg.cc/1RkmDS2n/Chat-GPT-Image-Jan-6-2026-12-10-48-PM.png 824w",
//   },
//   {
//     id: "2",
//     slug: "euphoria-bloom-eau-de-parfum",
//     title: "Euphoria Bloom Eau de Parfum",
//     price: "$ 49.99 USD",
//     image:
//       "https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f58442182ca767d888ac_product-thumb-03.webp",
//     srcset:
//       "https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f58442182ca767d888ac_product-thumb-03-p-500.webp 500w, https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f58442182ca767d888ac_product-thumb-03-p-800.webp 800w, https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f58442182ca767d888ac_product-thumb-03.webp 824w",
//   },
//   {
//     id: "3",
//     slug: "vitamin-c-brightening-toner",
//     title: "Vitamin C Brightening Toner",
//     price: "$ 21.99 USD",
//     image:
//       "https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f1641bcd4ab4b5586638_product-thumb-02.webp",
//     srcset:
//       "https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f1641bcd4ab4b5586638_product-thumb-02-p-500.webp 500w, https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f1641bcd4ab4b5586638_product-thumb-02-p-800.webp 800w, https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f1641bcd4ab4b5586638_product-thumb-02.webp 824w",
//   },
// ];

// function ProductDetail({
//   product = defaultProduct,
//   similarProducts = defaultSimilarProducts,
// }: ProductDetailProps) {
//   const { addToCart } = useCart();
//   const [quantity, setQuantity] = useState(1);

//   const handleAddToCart = (e: React.FormEvent) => {
//     e.preventDefault();

//     // Add the item to cart with the selected quantity
//     for (let i = 0; i < quantity; i++) {
//       addToCart({
//         variantId: product.skuId,
//         productId: product.productId,
//         title: product.title,
//         price: product.price,
//         image: product.mainImage,
//         sku: product.sku,
//       });
//     }

//     // Reset quantity after adding
//     setQuantity(1);
//   };

//   const lightboxItems = product.moreImages.map((img) => ({
//     url: img.url,
//     type: "image",
//   }));

//   console.log(product, 'this is product')

//   return (
//     <div className="page-wrap">
//       <section className="product-main">
//         <div className="w-layout-blockcontainer container w-container">
//           <div className="product-inner">
//             {/* LEFT */}
//             <div
//               data-w-id="3cd436bc-9bb5-9108-0a0e-9f3b288b18d6"
//               className="product-left"
//             >
//               <div className="product-main-img">
//                 <img
//                   loading="lazy"
//                   src={product.mainImage}
//                   srcSet={product.mainImageSrcset}
//                   className="product-main-image"
//                   alt=""
//                 />

//                 <a href="#" className="similar-icon w-inline-block w-lightbox">
//                   <img
//                     src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/687107bcf6bae39589bdb1ad_ic-plus.svg"
//                     loading="lazy"
//                     alt="Plus Icon"
//                     className="ic-similar"
//                   />

//                   <script type="application/json" className="w-json">
//                     {JSON.stringify({
//                       items: lightboxItems,
//                       group: "Group",
//                     })}
//                   </script>
//                 </a>
//               </div>

//               <div className="more-image w-dyn-list">
//                 <div role="list" className="ma-list w-dyn-items">
//                   {product.moreImages.map((image, index) => (
//                     <div
//                       key={index}
//                       role="listitem"
//                       className="ma-item w-dyn-item"
//                     >
//                       <div className="ma-img">
//                         <img
//                           loading="lazy"
//                           src={image.url}
//                           className="ma-image"
//                           alt=""
//                         />
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT */}
//             <div className="product-right">
//               <div>
//                 <h2 className="product-main-heading">{product.title}</h2>

//                 <div className="product-price">{product.price}</div>
//               </div>

//               <div className="product-wrapper">
//                 <p className="single-text">{product.description}</p>

//                 {/* ADD TO CART FORM */}
//                 <form
//                   className="w-commerce-commerceaddtocartform default-state"
//                   onSubmit={handleAddToCart}
//                 >
//                   <input
//                     type="number"
//                     min="1"
//                     value={quantity}
//                     onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
//                     className="w-commerce-commerceaddtocartquantityinput quantity"
//                   />

//                   <input
//                     type="submit"
//                     value="Add to Cart"
//                     className="w-commerce-commerceaddtocartbutton add-to-cart-button"
//                   />
//                 </form>

//                 {/* INFO */}
//                 <div className="product-main-data">
//                   <div className="product-info top">
//                     <div className="square"></div>
//                     <div className="product-data">
//                       <div className="product-text">Category:</div>
//                       <div>{product.category}</div>
//                     </div>
//                   </div>

//                   <div className="product-info">
//                     <div className="square"></div>
//                     <div className="product-data">
//                       <div className="product-text">SKU:</div>
//                       <div>{product.sku}</div>
//                     </div>
//                   </div>

//                   <div className="product-info last">
//                     <div className="square"></div>
//                     <div className="product-data">
//                       <div className="product-text">Tag:</div>
//                       <div>{product.tag}</div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* BADGES */}
//                 <div className="product-info-wrap">
//                   <div className="product-main-info">
//                     <div>High-Quality Beauty</div>
//                   </div>
//                   <div className="product-main-info">
//                     <div>Exclusive Launches</div>
//                   </div>
//                   <div className="product-main-info">
//                     <div>Easy Shopping</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* SIMILAR PRODUCTS */}
//       <section className="products">
//         <div className="w-layout-blockcontainer container w-container">
//           <h2>Similar Products</h2>

//           <div className="product-list">
//             {similarProducts.map((product) => (
//               <div className="product-item" key={product.id}>
//                 <a href={`/product/${product.slug}`} className="product-block">
//                   <img
//                     src={product.image}
//                     alt={product.title}
//                     className="product-image"
//                   />

//                   <h5>{product.title}</h5>
//                   <div>{product.price}</div>
//                 </a>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default ProductDetail;








"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";

interface MoreImage {
  url: string;
}

interface ProductDetailData {
  mainImage: string;
  mainImageSrcset: string;
  moreImages: MoreImage[];
  title: string;
  price: string;
  description: string;
  category: string;
  sku: string;
  tag: string;
  skuId: string;
  productId: string;
}

interface SimilarProduct {
  id: string;
  slug: string;
  title: string;
  price: string;
  image: string;
  srcset: string;
}

interface ProductDetailProps {
  product?: ProductDetailData;
  similarProducts?: SimilarProduct[];
}

const defaultProduct: ProductDetailData = {
  mainImage:
    "https://i.postimg.cc/1RkmDS2n/Chat-GPT-Image-Jan-6-2026-12-10-48-PM.png",
  mainImageSrcset:
    "https://i.postimg.cc/W4Yjzc0D/Chat-GPT-Image-Jan-6-2026-12-09-08-PM.png",
  moreImages: [
    {
      url: "https://i.postimg.cc/W4Yjzc0D/Chat-GPT-Image-Jan-6-2026-12-09-08-PM.png",
    },
    {
      url: "https://i.postimg.cc/pXvN2L30/Chat-GPT-Image-Jan-6-2026-02-45-38-PM-(1).png",
    },
    {
      url: "https://i.postimg.cc/rpK3h0Rv/Remove-Dark-spots.png",
    },
    {
      url: "https://i.postimg.cc/cCNz4Fk0/Gemini-Generated-Image-rytbn6rytbn6rytb.png",
    },
  ],
  title: "Argan Oil Repair Shampoo",
  price: "$ 22.99 USD",
  description:
    "Revitalize your hair with Argan Oil Repair Shampoo, nourishing formula designed to restore strength, moisture, and shine. Enriched with pure argan oil, keratin, and botanical extracts, this shampoo deeply hydrates while repairing damaged strands.",
  category: "Organic Beauty",
  sku: "AORS-007",
  tag: "Strengthening",
  skuId: "6871dbd8aa48a044cd83e93b",
  productId: "6871dbd877f454c5d99bff7c",
};

const defaultSimilarProducts: SimilarProduct[] = [
  {
    id: "1",
    slug: "hydrating-rose-water-mist",
    title: "Hydrating Rose Water Mist",
    price: "$ 34.99 USD",
    image:
      "https://i.postimg.cc/1RkmDS2n/Chat-GPT-Image-Jan-6-2026-12-10-48-PM.png",
    srcset:
      "https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871da9e25286db78acd2c8f_product-thumb-08-p-500.webp 500w, https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871da9e25286db78acd2c8f_product-thumb-08-p-800.webp 800w, https://i.postimg.cc/1RkmDS2n/Chat-GPT-Image-Jan-6-2026-12-10-48-PM.png 824w",
  },
  {
    id: "2",
    slug: "euphoria-bloom-eau-de-parfum",
    title: "Euphoria Bloom Eau de Parfum",
    price: "$ 49.99 USD",
    image:
      "https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f58442182ca767d888ac_product-thumb-03.webp",
    srcset:
      "https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f58442182ca767d888ac_product-thumb-03-p-500.webp 500w, https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f58442182ca767d888ac_product-thumb-03-p-800.webp 800w, https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f58442182ca767d888ac_product-thumb-03.webp 824w",
  },
  {
    id: "3",
    slug: "vitamin-c-brightening-toner",
    title: "Vitamin C Brightening Toner",
    price: "$ 21.99 USD",
    image:
      "https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f1641bcd4ab4b5586638_product-thumb-02.webp",
    srcset:
      "https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f1641bcd4ab4b5586638_product-thumb-02-p-500.webp 500w, https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f1641bcd4ab4b5586638_product-thumb-02-p-800.webp 800w, https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f1641bcd4ab4b5586638_product-thumb-02.webp 824w",
  },
];

function ProductDetail({
  product = defaultProduct,
  similarProducts = defaultSimilarProducts,
}: ProductDetailProps) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Combine main image with more images for carousel
  const allImages = [product.mainImage, ...product.moreImages.map(img => img.url)];

  const handleAddToCart = (e: React.FormEvent) => {
    e.preventDefault();

    for (let i = 0; i < quantity; i++) {
      addToCart({
        variantId: product.skuId,
        productId: product.productId,
        title: product.title,
        price: product.price,
        image: product.mainImage,
        sku: product.sku,
      });
    }

    setQuantity(1);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? allImages.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => 
      prev === allImages.length - 1 ? 0 : prev + 1
    );
  };

  const lightboxItems = product.moreImages.map((img) => ({
    url: img.url,
    type: "image",
  }));

  console.log(product, 'this is product')

  return (
    <div className="page-wrap">
      <style jsx>{`
        .carousel-container {
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        .carousel-main {
          position: relative;
          width: 100%;
          padding-bottom: 100%;
          background: #f5f5f5;
        }

        .carousel-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
        }

        .carousel-image.active {
          opacity: 1;
        }

        .carousel-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.9);
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          transition: background 0.2s;
          z-index: 2;
        }

        .carousel-nav:hover {
          background: rgba(255, 255, 255, 1);
        }

        .carousel-nav.prev {
          left: 10px;
        }

        .carousel-nav.next {
          right: 10px;
        }

        .carousel-dots {
          position: absolute;
          bottom: 15px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 8px;
          z-index: 2;
        }

        .carousel-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          border: none;
          cursor: pointer;
          transition: background 0.2s;
        }

        .carousel-dot.active {
          background: rgba(255, 255, 255, 1);
        }

        .carousel-thumbnails {
          display: flex;
          gap: 10px;
          margin-top: 15px;
          overflow-x: auto;
          padding: 5px 0;
        }

        .carousel-thumbnail {
          flex-shrink: 0;
          width: 80px;
          height: 80px;
          cursor: pointer;
          border: 2px solid transparent;
          border-radius: 4px;
          overflow: hidden;
          transition: border-color 0.2s;
        }

        .carousel-thumbnail.active {
          border-color: #333;
        }

        .carousel-thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media (max-width: 768px) {
          .carousel-nav {
            width: 35px;
            height: 35px;
            font-size: 18px;
          }

          .carousel-nav.prev {
            left: 5px;
          }

          .carousel-nav.next {
            right: 5px;
          }

          .carousel-thumbnail {
            width: 60px;
            height: 60px;
          }
        }

        @media (max-width: 480px) {
          .carousel-nav {
            width: 30px;
            height: 30px;
            font-size: 16px;
          }

          .carousel-thumbnail {
            width: 50px;
            height: 50px;
          }

          .carousel-dots {
            bottom: 10px;
          }

          .carousel-dot {
            width: 8px;
            height: 8px;
          }
        }
      `}</style>

      <section className="product-main">
        <div className="w-layout-blockcontainer container w-container">
          <div className="product-inner">
            {/* LEFT */}
            <div
              data-w-id="3cd436bc-9bb5-9108-0a0e-9f3b288b18d6"
              className="product-left"
            >
              <div className="product-main-img">
                <div className="carousel-container">
                  <div className="carousel-main">
                    {allImages.map((img, index) => (
                      <img
                        key={index}
                        loading="lazy"
                        src={img}
                        srcSet={index === 0 ? product.mainImageSrcset : undefined}
                        className={`product-main-image carousel-image ${
                          index === currentImageIndex ? 'active' : ''
                        }`}
                        alt=""
                      />
                    ))}
                    
                    {allImages.length > 1 && (
                      <>
                        <button 
                          className="carousel-nav prev" 
                          onClick={goToPrevious}
                          aria-label="Previous image"
                        >
                          ‹
                        </button>
                        <button 
                          className="carousel-nav next" 
                          onClick={goToNext}
                          aria-label="Next image"
                        >
                          ›
                        </button>

                        <div className="carousel-dots">
                          {allImages.map((_, index) => (
                            <button
                              key={index}
                              className={`carousel-dot ${
                                index === currentImageIndex ? 'active' : ''
                              }`}
                              onClick={() => setCurrentImageIndex(index)}
                              aria-label={`Go to image ${index + 1}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <a href="#" className="similar-icon w-inline-block w-lightbox">
                  <img
                    src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/687107bcf6bae39589bdb1ad_ic-plus.svg"
                    loading="lazy"
                    alt="Plus Icon"
                    className="ic-similar"
                  />

                  <script type="application/json" className="w-json">
                    {JSON.stringify({
                      items: lightboxItems,
                      group: "Group",
                    })}
                  </script>
                </a>
              </div>

              <div className="more-image w-dyn-list">
                <div role="list" className="ma-list w-dyn-items">
                  <div className="carousel-thumbnails">
                    {allImages.map((image, index) => (
                      <div
                        key={index}
                        role="listitem"
                        className="ma-item w-dyn-item"
                      >
                        <div 
                          className={`ma-img carousel-thumbnail ${
                            index === currentImageIndex ? 'active' : ''
                          }`}
                          onClick={() => setCurrentImageIndex(index)}
                        >
                          <img
                            loading="lazy"
                            src={image}
                            className="ma-image"
                            alt=""
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="product-right">
              <div>
                <h2 className="product-main-heading">{product.title}</h2>

                <div className="product-price">{product.price}</div>
              </div>

              <div className="product-wrapper">
                <p className="single-text">{product.description}</p>

                {/* ADD TO CART FORM */}
                <form
                  className="w-commerce-commerceaddtocartform default-state"
                  onSubmit={handleAddToCart}
                >
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                    className="w-commerce-commerceaddtocartquantityinput quantity"
                  />

                  <input
                    type="submit"
                    value="Add to Cart"
                    className="w-commerce-commerceaddtocartbutton add-to-cart-button"
                  />
                </form>

                {/* INFO */}
                <div className="product-main-data">
                  <div className="product-info top">
                    <div className="square"></div>
                    <div className="product-data">
                      <div className="product-text">Category:</div>
                      <div>{product.category}</div>
                    </div>
                  </div>

                  <div className="product-info">
                    <div className="square"></div>
                    <div className="product-data">
                      <div className="product-text">SKU:</div>
                      <div>{product.sku}</div>
                    </div>
                  </div>

                  <div className="product-info last">
                    <div className="square"></div>
                    <div className="product-data">
                      <div className="product-text">Tag:</div>
                      <div>{product.tag}</div>
                    </div>
                  </div>
                </div>

                {/* BADGES */}
                <div className="product-info-wrap">
                  <div className="product-main-info">
                    <div>High-Quality Beauty</div>
                  </div>
                  <div className="product-main-info">
                    <div>Exclusive Launches</div>
                  </div>
                  <div className="product-main-info">
                    <div>Easy Shopping</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIMILAR PRODUCTS */}
      <section className="products">
        <div className="w-layout-blockcontainer container w-container">
          <h2>Similar Products</h2>

          <div className="product-list">
            {similarProducts.map((product) => (
              <div className="product-item" key={product.id}>
                <a href={`/product/${product.slug}`} className="product-block">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="product-image"
                  />

                  <h5>{product.title}</h5>
                  <div>{product.price}</div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductDetail;