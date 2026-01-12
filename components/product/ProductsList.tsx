// // // interface Product {
// // //   id: string;
// // //   name: string;
// // //   price: string;
// // //   image: string;
// // //   slug: string;
// // //   srcset: string;
// // // }

// // // interface ProductsListProps {
// // //   products?: Product[];
// // //   currentPage?: number;
// // //   hasNextPage?: boolean;
// // // }

// // // const defaultProducts: Product[] = [
// // //   {
// // //     id: "1",
// // //     name: "Argan Oil Repair Shampoo",
// // //     price: "$ 22.99 USD",
// // //     slug: "argan-oil-repair-shampoo",
// // //     image:
// // //       "https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871dbc93c8cc2c16ed08a03_product-thumb-12.webp",
// // //     srcset:
// // //       "https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871dbc93c8cc2c16ed08a03_product-thumb-12-p-500.webp 500w, https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871dbc93c8cc2c16ed08a03_product-thumb-12-p-800.webp 800w, https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871dbc93c8cc2c16ed08a03_product-thumb-12.webp 824w",
// // //   },
// // //   {
// // //     id: "2",
// // //     name: "Euphoria Bloom Eau de Parfum",
// // //     price: "$ 49.99 USD",
// // //     slug: "euphoria-bloom-eau-de-parfum",
// // //     image:
// // //       "https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f58442182ca767d888ac_product-thumb-03.webp",
// // //     srcset:
// // //       "https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f58442182ca767d888ac_product-thumb-03-p-500.webp 500w, https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f58442182ca767d888ac_product-thumb-03-p-800.webp 800w, https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f58442182ca767d888ac_product-thumb-03.webp 824w",
// // //   },
// // //   {
// // //     id: "3",
// // //     name: "Vitamin C Brightening Toner",
// // //     price: "$ 21.99 USD",
// // //     slug: "vitamin-c-brightening-toner",
// // //     image:
// // //       "https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f1641bcd4ab4b5586638_product-thumb-02.webp",
// // //     srcset:
// // //       "https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f1641bcd4ab4b5586638_product-thumb-02-p-500.webp 500w, https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f1641bcd4ab4b5586638_product-thumb-02-p-800.webp 800w, https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f1641bcd4ab4b5586638_product-thumb-02.webp 824w",
// // //   },
// // //   {
// // //     id: "4",
// // //     name: "Glow Perfection Foundation",
// // //     price: "$ 18.99 USD",
// // //     slug: "glow-perfection-foundation",
// // //     image:
// // //       "https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f11828ba6c1d3dcc4571_product-thumb-01.webp",
// // //     srcset:
// // //       "https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f11828ba6c1d3dcc4571_product-thumb-01-p-500.webp 500w, https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f11828ba6c1d3dcc4571_product-thumb-01-p-800.webp 800w, https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6870f11828ba6c1d3dcc4571_product-thumb-01.webp 824w",
// // //   },
// // //   {
// // //     id: "5",
// // //     name: "Long-Wear Matte Nail Polish",
// // //     price: "$ 20.99 USD",
// // //     slug: "long-wear-matte-nail-polish",
// // //     image:
// // //       "https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871db6e33f1b4adf839428e_product-thumb-11.webp",
// // //     srcset:
// // //       "https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871db6e33f1b4adf839428e_product-thumb-11-p-500.webp 500w, https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871db6e33f1b4adf839428e_product-thumb-11-p-800.webp 800w, https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871db6e33f1b4adf839428e_product-thumb-11.webp 824w",
// // //   },
// // //   {
// // //     id: "6",
// // //     name: "Eco-Friendly Tinted Moisturizer",
// // //     price: "$ 28.99 USD",
// // //     slug: "eco-friendly-tinted-moisturizer",
// // //     image:
// // //       "https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871db031048141aca392142_product-thumb-10.webp",
// // //     srcset:
// // //       "https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871db031048141aca392142_product-thumb-10-p-500.webp 500w, https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871db031048141aca392142_product-thumb-10-p-800.webp 800w, https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871db031048141aca392142_product-thumb-10.webp 824w",
// // //   },
// // //   {
// // //     id: "7",
// // //     name: "Mystic Oud Luxury Perfume",
// // //     price: "$ 42.99 USD",
// // //     slug: "mystic-oud-luxury-perfume",
// // //     image:
// // //       "https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871dad8d937b75cef29ee08_product-thumb-09.webp",
// // //     srcset:
// // //       "https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871dad8d937b75cef29ee08_product-thumb-09-p-500.webp 500w, https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871dad8d937b75cef29ee08_product-thumb-09-p-800.webp 800w, https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871dad8d937b75cef29ee08_product-thumb-09.webp 824w",
// // //   },
// // //   {
// // //     id: "8",
// // //     name: "Hydrating Rose Water Mist",
// // //     price: "$ 34.99 USD",
// // //     slug: "hydrating-rose-water-mist",
// // //     image:
// // //       "https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871da9e25286db78acd2c8f_product-thumb-08.webp",
// // //     srcset:
// // //       "https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871da9e25286db78acd2c8f_product-thumb-08-p-500.webp 500w, https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871da9e25286db78acd2c8f_product-thumb-08-p-800.webp 800w, https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871da9e25286db78acd2c8f_product-thumb-08.webp 824w",
// // //   },
// // //   {
// // //     id: "9",
// // //     name: "Radiant Glow Highlighter",
// // //     price: "$ 22.99 USD",
// // //     slug: "radiant-glow-highlighter",
// // //     image:
// // //       "https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871da55dcbecd54d7f67c18_product-thumb-07.webp",
// // //     srcset:
// // //       "https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871da55dcbecd54d7f67c18_product-thumb-07-p-500.webp 500w, https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871da55dcbecd54d7f67c18_product-thumb-07-p-800.webp 800w, https://cdn.prod.website-files.com/686f838d338fa886aea111c4/6871da55dcbecd54d7f67c18_product-thumb-07.webp 824w",
// // //   },
// // // ];

// // // function ProductsList({
// // //   products = defaultProducts,
// // //   currentPage = 1,
// // //   hasNextPage = true,
// // // }: ProductsListProps) {
// // //   return (
// // //     <div className="page-wrap">
// // //       <section className="products">
// // //         <div className="w-layout-blockcontainer container w-container">
// // //           <div className="w-dyn-list">
// // //             <div role="list" className="product-list w-dyn-items">
// // //               {products.map((product) => (
// // //                 <div
// // //                   role="listitem"
// // //                   className="product-item w-dyn-item"
// // //                   key={product.id}
// // //                 >
// // //                   <a
// // //                     href={`/product/${product.slug}`}
// // //                     className="product-block w-inline-block"
// // //                   >
// // //                     <div className="product-img">
// // //                       <img
// // //                         loading="lazy"
// // //                         src={product.image}
// // //                         alt=""
// // //                         sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
// // //                         srcSet={product.srcset}
// // //                         className="product-image"
// // //                       />
// // //                     </div>
// // //                     <div className="product-bottom">
// // //                       <h5 className="product-heading">{product.name}</h5>
// // //                       <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">
// // //                         {product.price}
// // //                       </div>
// // //                     </div>
// // //                     <div className="cursor">
// // //                       <div>Detail</div>
// // //                     </div>
// // //                   </a>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //             {hasNextPage && (
// // //               <div
// // //                 role="navigation"
// // //                 aria-label="List"
// // //                 className="w-pagination-wrapper pagination"
// // //               >
// // //                 <a
// // //                   data-w-id="950e3599-536f-666e-89fe-074244e6ef0c"
// // //                   href={`?56fd2c6d_page=${currentPage + 1}`}
// // //                   aria-label="Next Page"
// // //                   className="w-pagination-next primary-button outline"
// // //                 >
// // //                   <div className="arrow-wrap">
// // //                     <img
// // //                       style={{
// // //                         WebkitTransform:
// // //                           "translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
// // //                         MozTransform:
// // //                           "translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
// // //                         msTransform:
// // //                           "translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
// // //                         transform:
// // //                           "translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
// // //                       }}
// // //                       loading="lazy"
// // //                       alt="Arrow"
// // //                       src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6870e5cbc53776c9e8ba8366_ic-arrow.svg"
// // //                       className="arrow"
// // //                     />
// // //                     <img
// // //                       loading="lazy"
// // //                       src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f48e5a13bce2c1046c927_7d7f59d728541d7f09ba8bab672d5874_secondary-arrow.svg"
// // //                       alt="Arrow"
// // //                       className="arrow hover"
// // //                     />
// // //                   </div>
// // //                   <div className="w-inline-block">Next</div>
// // //                 </a>
// // //                 <link
// // //                   rel="prerender"
// // //                   href={`?56fd2c6d_page=${currentPage + 1}`}
// // //                 />
// // //               </div>
// // //             )}
// // //           </div>
// // //         </div>
// // //       </section>
// // //     </div>
// // //   );
// // // }

// // // export default ProductsList;





// // interface Product {
// //   id: string;
// //   name: string;
// //   price: string;
// //   image: string;
// //   slug: string;
// //   srcset: string;
// // }

// // interface ProductsListProps {
// //   products?: Product[];
// //   hasNextPage?: boolean;
// //   nextCursor?: string;
// // }

// // function ProductsList({
// //   products = [],
// //   hasNextPage = false,
// //   nextCursor,
// // }: ProductsListProps) {
// //   return (
// //     <div className="page-wrap">
// //       <section className="products">
// //         <div className="w-layout-blockcontainer container w-container">
// //           <div className="w-dyn-list">
// //             <div role="list" className="product-list w-dyn-items">
// //               {products.map((product) => (
// //                 <div
// //                   role="listitem"
// //                   className="product-item w-dyn-item"
// //                   key={product.id}
// //                 >
// //                   <a
// //                     href={`/product/${product.slug}`}
// //                     className="product-block w-inline-block"
// //                   >
// //                     <div className="product-img">
// //                       {product.image && (
// //                         <img
// //                           loading="lazy"
// //                           src={product.image}
// //                           alt=""
// //                           sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
// //                           srcSet={product.srcset}
// //                           className="product-image"
// //                         />
// //                       )}
// //                     </div>

// //                     <div className="product-bottom">
// //                       <h5 className="product-heading">{product.name}</h5>
// //                       <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">
// //                         {product.price}
// //                       </div>
// //                     </div>

// //                     <div className="cursor">
// //                       <div>Detail</div>
// //                     </div>
// //                   </a>
// //                 </div>
// //               ))}
// //             </div>

// //             {hasNextPage && nextCursor && (
// //               <div
// //                 role="navigation"
// //                 aria-label="List"
// //                 className="w-pagination-wrapper pagination"
// //               >
// //                 <a
// //                   data-w-id="950e3599-536f-666e-89fe-074244e6ef0c"
// //                   href={`?cursor=${nextCursor}`}
// //                   aria-label="Next Page"
// //                   className="w-pagination-next primary-button outline"
// //                 >
// //                   <div className="arrow-wrap">
// //                     <img
// //                       loading="lazy"
// //                       alt="Arrow"
// //                       src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6870e5cbc53776c9e8ba8366_ic-arrow.svg"
// //                       className="arrow"
// //                     />
// //                     <img
// //                       loading="lazy"
// //                       src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f48e5a13bce2c1046c927_7d7f59d728541d7f09ba8bab672d5874_secondary-arrow.svg"
// //                       alt="Arrow"
// //                       className="arrow hover"
// //                     />
// //                   </div>
// //                   <div className="w-inline-block">Next</div>
// //                 </a>
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }

// // export default ProductsList;




// interface Product {
//   id: string;
//   name: string;
//   price: string;
//   image: string;
//   slug: string;
//   srcset: string;
// }

// interface ProductsListProps {
//   products?: Product[];
//   hasNextPage?: boolean;
//   nextCursor?: string;

//   // PREV
//   hasPrevPage?: boolean;
//   prevCursor?: string;
// }

// function ProductsList({
//   products = [],
//   hasNextPage = false,
//   nextCursor,

//   hasPrevPage = false,
//   prevCursor,
// }: ProductsListProps) {
//   return (
//     <div className="page-wrap">
//       <section className="products">
//         <div className="w-layout-blockcontainer container w-container">
//           <div className="w-dyn-list">
//             <div role="list" className="product-list w-dyn-items">
//               {products.map((product) => (
//                 <div
//                   role="listitem"
//                   className="product-item w-dyn-item"
//                   key={product.id}
//                 >
//                   <a
//                     href={`/product/${product.slug}`}
//                     className="product-block w-inline-block"
//                   >
//                     <div className="product-img">
//                       {product.image && (
//                         <img
//                           loading="lazy"
//                           src={product.image}
//                           alt=""
//                           sizes="(max-width: 767px) 100vw, (max-width: 991px) 728px, 940px"
//                           srcSet={product.srcset}
//                           className="product-image"
//                         />
//                       )}
//                     </div>

//                     <div className="product-bottom">
//                       <h5 className="product-heading">{product.name}</h5>
//                       <div>{product.price}</div>
//                     </div>

//                     <div className="cursor">
//                       <div>Detail</div>
//                     </div>
//                   </a>
//                 </div>
//               ))}
//             </div>

//             {/* PAGINATION */}
//             <div
//               role="navigation"
//               aria-label="List"
//               className="w-pagination-wrapper pagination"
//             >
//               {/* PREV */}
//               {hasPrevPage && prevCursor && (
//                 <a
//                   href={`?cursor=${prevCursor}`}
//                   aria-label="Previous Page"
//                   className="w-pagination-next primary-button outline"
//                 >
//                   <div className="arrow-wrap">
//                     <img
//                       loading="lazy"
//                       alt="Arrow"
//                       src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6870e5cbc53776c9e8ba8366_ic-arrow.svg"
//                       className="arrow"
//                       style={{ transform: "rotate(180deg)" }}
//                     />
//                   </div>
//                   <div className="w-inline-block">Prev</div>
//                 </a>
//               )}

//               {/* NEXT */}
//               {hasNextPage && nextCursor && (
//                 <a
//                   data-w-id="950e3599-536f-666e-89fe-074244e6ef0c"
//                   href={`?cursor=${nextCursor}`}
//                   aria-label="Next Page"
//                   className="w-pagination-next primary-button outline"
//                 >
//                   <div className="arrow-wrap">
//                     <img
//                       loading="lazy"
//                       alt="Arrow"
//                       src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/6870e5cbc53776c9e8ba8366_ic-arrow.svg"
//                       className="arrow"
//                     />
//                     <img
//                       loading="lazy"
//                       src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f48e5a13bce2c1046c927_7d7f59d728541d7f09ba8bab672d5874_secondary-arrow.svg"
//                       alt="Arrow"
//                       className="arrow hover"
//                     />
//                   </div>
//                   <div className="w-inline-block">Next</div>
//                 </a>
//               )}
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default ProductsList;



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
                      <img
                        loading="lazy"
                        src={product.image}
                        className="product-image"
                        alt=""
                      />
                    </div>

                    <div className="product-bottom">
                      <h5 className="product-heading">{product.name}</h5>
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
