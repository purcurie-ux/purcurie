// // // import SkincareProducts from "@/components/cat/SkincareProducts";


// // // export default function CatPro() {
// // //     return (
// // //         <>
// // //             <SkincareProducts />
// // //         </>
// // //     )
// // // }



// import { getCollectionProducts } from "@/lib/getCollectionProducts";

// interface Props {
//   params: { handle: string };
// }

// // export default async function CategoryProductsPage({ params }: Props) {
// //     const collection = await getCollectionProducts(params.handle);
    
// //     console.log(collection, 'this is collection')

// //   if (!collection) {
// //     return <div className="container">Collection not found</div>;
// //   }

// //   return (
// //     <div>
// //       {/* PAGE TITLE */}
// //       <div className="page-title">
// //         <div className="w-layout-blockcontainer container w-container">
// //           <div className="pg-inner">
// //             <h1 className="main-heading">{collection.title}</h1>
// //           </div>
// //         </div>
// //       </div>

// //       {/* PRODUCTS */}
// //       <div className="page-wrap">
// //         <section className="products">
// //           <div className="w-layout-blockcontainer container w-container">
// //             <div className="product-list">
// //               {collection.products.map((product: any) => {
// //                 const image = product.images.edges[0]?.node;

// //                 return (
// //                   <div key={product.id} className="product-item">
// //                     <a
// //                       href={`/product/${product.handle}`}
// //                       className="product-block w-inline-block"
// //                     >
// //                       <div className="product-img">
// //                         {image && (
// //                           <img
// //                             src={image.url}
// //                             alt={image.altText || product.title}
// //                             className="product-image"
// //                           />
// //                         )}
// //                       </div>

// //                       <div className="product-bottom">
// //                         <h5 className="product-heading">{product.title}</h5>
// //                         <div>
// //                           ${product.priceRange.minVariantPrice.amount}{" "}
// //                           {product.priceRange.minVariantPrice.currencyCode}
// //                         </div>
// //                       </div>

// //                       <div className="cursor">
// //                         <div>Detail</div>
// //                       </div>
// //                     </a>
// //                   </div>
// //                 );
// //               })}
// //             </div>
// //           </div>
// //         </section>
// //       </div>
// //     </div>
// //   );
// // }




// export default async function CategoryProductsPage({ params }: Props) {
//   const { handle } = await params;

//   const collection = await getCollectionProducts(handle);

//   if (!collection) {
//     return <div className="container">Collection not found</div>;
//   }

//   return (
//     <div>
//       {/* PAGE TITLE */}
//       <div className="page-title">
//         <div className="container">
//           <h1 className="main-heading">{collection.title}</h1>
//         </div>
//       </div>

//       {/* PRODUCTS */}
//       <section className="products">
//         <div className="container product-list">
//           {collection.products.map((product: any) => {
//             const image = product.images.edges[0]?.node;

//             return (
//               <a
//                 key={product.id}
//                 href={`/product/${product.handle}`}
//                 className="product-block"
//               >
//                 {image && (
//                   <img
//                     src={image.url}
//                     alt={image.altText || product.title}
//                     className="product-image"
//                   />
//                 )}

//                 <h5>{product.title}</h5>
//                 <div>
//                   ${product.priceRange.minVariantPrice.amount}{" "}
//                   {product.priceRange.minVariantPrice.currencyCode}
//                 </div>
//               </a>
//             );
//           })}
//         </div>
//       </section>
//     </div>
//   );
// }
  




import { getCollectionProducts } from "@/lib/getCollectionProducts";

interface Props {
  params: { handle: string };
}

export default async function CategoryProductsPage({ params }: Props) {
  const { handle } = await params;
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
            <h1
              data-w-id="7f8ffbff-32c4-a952-109d-af7f823f9b65"
              className="main-heading"
            >
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
          </div>
        </section>
      </div>
    </div>
  );
}
