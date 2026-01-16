// "use client";

// import { useEffect, useState } from "react";
// import { useCart } from "@/context/CartContext";

// export function Navbar() {
//   useEffect(() => {
//     const navLeft = document.querySelector(".nav-left");
//     const webflowButton = document.querySelector(".menu-button.w-nav-button");

//     if (!navLeft || !webflowButton) return;

//     const handleClick = () => {
//       // Trigger Webflow's own navbar logic
//       (webflowButton as HTMLElement).click();
//     };

//     navLeft.addEventListener("click", handleClick);

//     return () => {
//       navLeft.removeEventListener("click", handleClick);
//     };
//   }, []);
//   return (
//     <div
//       data-animation="default"
//       data-collapse="medium"
//       data-duration="400"
//       data-easing="ease"
//       data-easing2="ease"
//       role="banner"
//       className="navbar w-nav"
//     >
//       <div className="container w-container">
//         <div className="nav-wrap">
//           <a
//             href="/"
//             aria-current="page"
//             className="brand w-inline-block w--current"
//           >
//             <img
//               src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f623b7b6462a86185f110_glamz.svg"
//               loading="lazy"
//               alt="Glamz"
//             />
//           </a>
//           <div className="nav-menu-wrap">
//             <div
//               data-w-id="d3adb6d7-cc56-c118-6985-cf7153b16475"
//               className="nav-left"
//             >
//               <div className="nav-button">
//                 <div className="top-line"></div>
//                 <div className="center-line"></div>
//                 <div className="bottom-line"></div>
//               </div>
//               <div>Menu</div>
//             </div>
//             <div className="nav-right">
//               <div
//                 data-open-product=""
//                 data-wf-cart-type="modal"
//                 data-wf-cart-query="query Dynamo3 {
//     database {
//       id
//       commerceOrder {
//         comment
//         extraItems {
//           name
//           pluginId
//           pluginName
//           price {
//             decimalValue
//             string
//             unit
//             value
//           }
//         }
//         id
//         startedOn
//         statusFlags {
//           hasDownloads
//           hasSubscription
//           isFreeOrder
//           requiresShipping
//         }
//         subtotal {
//           decimalValue
//           string
//           unit
//           value
//         }
//         total {
//           decimalValue
//           string
//           unit
//           value
//         }
//         updatedOn
//         userItems {
//           count
//           id
//           price {
//             value
//             unit
//             decimalValue
//             string
//           }
//           product {
//             id
//             cmsLocaleId
//             draft
//             archived
//             f_ec_product_type_2dr10dr: productType {
//               id
//               name
//             }
//             f_name_: name
//             f_sku_properties_3dr: skuProperties {
//               id
//               name
//               enum {
//                 id
//                 name
//                 slug
//               }
//             }
//           }
//           rowTotal {
//             decimalValue
//             string
//             unit
//             value
//           }
//           sku {
//             cmsLocaleId
//             draft
//             archived
//             f_main_image_4dr: mainImage {
//               url
//               file {
//                 size
//                 origFileName
//                 createdOn
//                 updatedOn
//                 mimeType
//                 width
//                 height
//                 variants {
//                   origFileName
//                   quality
//                   height
//                   width
//                   s3Url
//                   error
//                   size
//                 }
//               }
//               alt
//             }
//             f_sku_values_3dr: skuValues {
//               property {
//                 id
//               }
//               value {
//                 id
//               }
//             }
//             id
//           }
//           subscriptionFrequency
//           subscriptionInterval
//           subscriptionTrial
//         }
//         userItemsCount
//       }
//     }
//     site {
//       commerce {
//         id
//         businessAddress {
//           country
//         }
//         defaultCountry
//         defaultCurrency
//         quickCheckoutEnabled
//       }
//     }
//   }"
//                 data-wf-page-link-href-prefix=""
//                 className="w-commerce-commercecartwrapper"
//                 data-node-type="commerce-cart-wrapper"
//               >
//                 <a
//                   className="w-commerce-commercecartopenlink cart-button desktop w-inline-block"
//                   role="button"
//                   aria-haspopup="dialog"
//                   aria-label="Open cart"
//                   data-node-type="commerce-cart-open-link"
//                   href="#"
//                 >
//                   <div
//                     data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D"
//                     style={{ display: "none" }}
//                     data-count-hide-rule="empty"
//                     className="w-commerce-commercecartopenlinkcount cart-quantity"
//                   >
//                     0
//                   </div>
//                   <img
//                     src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f675704fa71c85c348876_ic-cart.svg"
//                     loading="lazy"
//                     alt="Cart Icon"
//                   />
//                 </a>
//                 <CartModal />
//               </div>
//               <div
//                 data-w-id="d3adb6d7-cc56-c118-6985-cf7153b164ae"
//                 className="search-icon"
//               >
//                 <img
//                   src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f6757dba6c47670af87be_ic-search.svg"
//                   loading="lazy"
//                   alt="Search Icon"
//                 />
//               </div>
//             </div>
//           </div>
//           <nav role="navigation" className="nav-menu w-nav-menu">
//             <a href="/about" className="nav-link">
//               About us
//             </a>
//             <a href="/categories" className="nav-link">
//               Categories
//             </a>
//             <a href="/products" className="nav-link">
//               Shop
//             </a>
//             <a href="/blogs" className="nav-link">
//               Blogs
//             </a>
//             <a href="/contact" className="nav-link last">
//               Contact us
//             </a>
//           </nav>
//           <div className="nav-right-mobile">
//             <div
//               data-open-product=""
//               data-wf-cart-type="modal"
//               data-wf-cart-query="query Dynamo3 {
//     database {
//       id
//       commerceOrder {
//         comment
//         extraItems {
//           name
//           pluginId
//           pluginName
//           price {
//             decimalValue
//             string
//             unit
//             value
//           }
//         }
//         id
//         startedOn
//         statusFlags {
//           hasDownloads
//           hasSubscription
//           isFreeOrder
//           requiresShipping
//         }
//         subtotal {
//           decimalValue
//           string
//           unit
//           value
//         }
//         total {
//           decimalValue
//           string
//           unit
//           value
//         }
//         updatedOn
//         userItems {
//           count
//           id
//           price {
//             value
//             unit
//             decimalValue
//             string
//           }
//           product {
//             id
//             cmsLocaleId
//             draft
//             archived
//             f_ec_product_type_2dr10dr: productType {
//               id
//               name
//             }
//             f_name_: name
//             f_sku_properties_3dr: skuProperties {
//               id
//               name
//               enum {
//                 id
//                 name
//                 slug
//               }
//             }
//           }
//           rowTotal {
//             decimalValue
//             string
//             unit
//             value
//           }
//           sku {
//             cmsLocaleId
//             draft
//             archived
//             f_main_image_4dr: mainImage {
//               url
//               file {
//                 size
//                 origFileName
//                 createdOn
//                 updatedOn
//                 mimeType
//                 width
//                 height
//                 variants {
//                   origFileName
//                   quality
//                   height
//                   width
//                   s3Url
//                   error
//                   size
//                 }
//               }
//               alt
//             }
//             f_sku_values_3dr: skuValues {
//               property {
//                 id
//               }
//               value {
//                 id
//               }
//             }
//             id
//           }
//           subscriptionFrequency
//           subscriptionInterval
//           subscriptionTrial
//         }
//         userItemsCount
//       }
//     }
//     site {
//       commerce {
//         id
//         businessAddress {
//           country
//         }
//         defaultCountry
//         defaultCurrency
//         quickCheckoutEnabled
//       }
//     }
//   }"
//               data-wf-page-link-href-prefix=""
//               className="w-commerce-commercecartwrapper"
//               data-node-type="commerce-cart-wrapper"
//             >
//               <a
//                 className="w-commerce-commercecartopenlink cart-button w-inline-block"
//                 role="button"
//                 aria-haspopup="dialog"
//                 aria-label="Open cart"
//                 data-node-type="commerce-cart-open-link"
//                 href="#"
//               >
//                 <div
//                   data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItemsCount%22%7D%7D%5D"
//                   style={{ display: "none" }}
//                   data-count-hide-rule="empty"
//                   className="w-commerce-commercecartopenlinkcount cart-quantity"
//                 >
//                   0
//                 </div>
//                 <img
//                   src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f675704fa71c85c348876_ic-cart.svg"
//                   loading="lazy"
//                   alt="Cart Icon"
//                   className="cart-icon"
//                 />
//               </a>
//               <CartModal />
//             </div>
//             <div className="menu-button w-nav-button">
//               <div className="top-line"></div>
//               <div className="center-line"></div>
//               <div className="bottom-line"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // function CartModal() {
// //   return (
// //     <div
// //       style={{ display: "none" }}
// //       className="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal"
// //       data-node-type="commerce-cart-container-wrapper"
// //     >
// //       <div
// //         data-node-type="commerce-cart-container"
// //         role="dialog"
// //         className="w-commerce-commercecartcontainer"
// //       >
// //         <div className="w-commerce-commercecartheader">
// //           <h4 className="w-commerce-commercecartheading">Your Cart</h4>
// //           <a
// //             className="w-commerce-commercecartcloselink w-inline-block"
// //             role="button"
// //             aria-label="Close cart"
// //             data-node-type="commerce-cart-close-link"
// //           >
// //             <svg width="16px" height="16px" viewBox="0 0 16 16">
// //               <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
// //                 <g fillRule="nonzero" fill="#333333">
// //                   <polygon points="6.23223305 8 0.616116524 13.6161165 2.38388348 15.3838835 8 9.76776695 13.6161165 15.3838835 15.3838835 13.6161165 9.76776695 8 15.3838835 2.38388348 13.6161165 0.616116524 8 6.23223305 2.38388348 0.616116524 0.616116524 2.38388348 6.23223305 8"></polygon>
// //                 </g>
// //               </g>
// //             </svg>
// //           </a>
// //         </div>
// //         <div className="w-commerce-commercecartformwrapper">
// //           <form
// //             style={{ display: "none" }}
// //             className="w-commerce-commercecartform"
// //             data-node-type="commerce-cart-form"
// //           >
// //             <script
// //               type="text/x-wf-template"
// //               id="wf-template-d3adb6d7-cc56-c118-6985-cf7153b1648a"
// //               dangerouslySetInnerHTML={{
// //                 __html:
// //                   "%3Cdiv%20class%3D%22w-commerce-commercecartitem%22%3E%3Cimg%20data-wf-bindings%3D%22%255B%257B%2522src%2522%253A%257B%2522type%2522%253A%2522ImageRef%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.sku.f_main_image_4dr%2522%257D%257D%255D%22%20src%3D%22%22%20alt%3D%22%22%20class%3D%22w-commerce-commercecartitemimage%20w-dyn-bind-empty%22%2F%3E%3Cdiv%20class%3D%22w-commerce-commercecartiteminfo%22%3E%3Cdiv%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522PlainText%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_name_%2522%257D%257D%255D%22%20class%3D%22w-commerce-commercecartproductname%20w-dyn-bind-empty%22%3E%3C%2Fdiv%3E%3Cdiv%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522CommercePrice%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522price%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.price%2522%257D%257D%255D%22%3E%24%C2%A00.00%C2%A0USD%3C%2Fdiv%3E%3Cscript%20type%3D%22text%2Fx-wf-template%22%20id%3D%22wf-template-d3adb6d7-cc56-c118-6985-cf7153b16490%22%3E%253Cli%253E%253Cspan%2520data-wf-bindings%253D%2522%25255B%25257B%252522innerHTML%252522%25253A%25257B%252522type%252522%25253A%252522PlainText%252522%25252C%252522filter%252522%25253A%25257B%252522type%252522%25253A%252522identity%252522%25252C%252522params%252522%25253A%25255B%25255D%25257D%25252C%252522dataPath%252522%25253A%252522database.commerceOrder.userItems%25255B%25255D.product.f_sku_properties_3dr%25255B%25255D.name%252522%25257D%25257D%25255D%2522%2520class%253D%2522w-dyn-bind-empty%2522%253E%253C%252Fspan%253E%253Cspan%253E%253A%2520%253C%252Fspan%253E%253Cspan%2520data-wf-bindings%253D%2522%25255B%25257B%252522innerHTML%252522%25253A%25257B%252522type%252522%25253A%252522CommercePropValues%252522%25252C%252522filter%252522%25253A%25257B%252522type%252522%25253A%252522identity%252522%25252C%252522params%252522%25253A%25255B%25255D%25257D%25252C%252522dataPath%252522%25253A%252522database.commerceOrder.userItems%25255B%25255D.product.f_sku_properties_3dr%25255B%25255D%252522%25257D%25257D%25255D%2522%2520class%253D%2522w-dyn-bind-empty%2522%253E%253C%252Fspan%253E%253C%252Fli%253E%3C%2Fscript%3E%3Cul%20data-wf-bindings%3D%22%255B%257B%2522optionSets%2522%253A%257B%2522type%2522%253A%2522CommercePropTable%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%5B%5D%2522%257D%257D%252C%257B%2522optionValues%2522%253A%257B%2522type%2522%253A%2522CommercePropValues%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.sku.f_sku_values_3dr%2522%257D%257D%255D%22%20class%3D%22w-commerce-commercecartoptionlist%22%20data-wf-collection%3D%22database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%22%20data-wf-template-id%3D%22wf-template-d3adb6d7-cc56-c118-6985-cf7153b16490%22%3E%3Cli%3E%3Cspan%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522PlainText%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%255B%255D.name%2522%257D%257D%255D%22%20class%3D%22w-dyn-bind-empty%22%3E%3C%2Fspan%3E%3Cspan%3E%3A%20%3C%2Fspan%3E%3Cspan%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522CommercePropValues%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%255B%255D%2522%257D%257D%255D%22%20class%3D%22w-dyn-bind-empty%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Ful%3E%3Ca%20href%3D%22%23%22%20role%3D%22button%22%20data-wf-bindings%3D%22%255B%257B%2522data-commerce-sku-id%2522%253A%257B%2522type%2522%253A%2522ItemRef%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.sku.id%2522%257D%257D%255D%22%20class%3D%22w-inline-block%22%20data-wf-cart-action%3D%22remove-item%22%20data-commerce-sku-id%3D%22%22%20aria-label%3D%22Remove%20item%20from%20cart%22%3E%3Cdiv%3ERemove%3C%2Fdiv%3E%3C%2Fa%3E%3C%2Fdiv%3E%3Cinput%20aria-label%3D%22Update%20quantity%22%20data-wf-bindings%3D%22%255B%257B%2522value%2522%253A%257B%2522type%2522%253A%2522Number%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522numberPrecision%2522%252C%2522params%2522%253A%255B%25220%2522%252C%2522numberPrecision%2522%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.count%2522%257D%257D%252C%257B%2522data-commerce-sku-id%2522%253A%257B%2522type%2522%253A%2522ItemRef%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.sku.id%2522%257D%257D%255D%22%20data-wf-conditions%3D%22%257B%2522condition%2522%253A%257B%2522fields%2522%253A%257B%2522product%253Aec-product-type%2522%253A%257B%2522ne%2522%253A%2522e348fd487d0102946c9179d2a94bb613%2522%252C%2522type%2522%253A%2522Option%2522%257D%257D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D%2522%257D%22%20class%3D%22w-commerce-commercecartquantity%22%20required%3D%22%22%20pattern%3D%22%5E%5B0-9%5D%2B%24%22%20inputMode%3D%22numeric%22%20type%3D%22number%22%20name%3D%22quantity%22%20autoComplete%3D%22off%22%20data-wf-cart-action%3D%22update-item-quantity%22%20data-commerce-sku-id%3D%22%22%20value%3D%221%22%2F%3E%3C%2Fdiv%3E",
// //               }}
// //             />
// //             <div
// //               className="w-commerce-commercecartlist"
// //               data-wf-collection="database.commerceOrder.userItems"
// //               data-wf-template-id="wf-template-d3adb6d7-cc56-c118-6985-cf7153b1648a"
// //             >
// //               <div className="w-commerce-commercecartitem">
// //                 <img
// //                   data-wf-bindings="%5B%7B%22src%22%3A%7B%22type%22%3A%22ImageRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_main_image_4dr%22%7D%7D%5D"
// //                   src=""
// //                   alt=""
// //                   className="w-commerce-commercecartitemimage w-dyn-bind-empty"
// //                 />
// //                 <div className="w-commerce-commercecartiteminfo">
// //                   <div
// //                     data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_name_%22%7D%7D%5D"
// //                     className="w-commerce-commercecartproductname w-dyn-bind-empty"
// //                   ></div>
// //                   <div data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.price%22%7D%7D%5D">
// //                     $ 0.00 USD
// //                   </div>
// //                   <script
// //                     type="text/x-wf-template"
// //                     id="wf-template-d3adb6d7-cc56-c118-6985-cf7153b16490"
// //                     dangerouslySetInnerHTML={{
// //                       __html:
// //                         "%3Cli%3E%3Cspan%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522PlainText%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%255B%255D.name%2522%257D%257D%255D%22%20class%3D%22w-dyn-bind-empty%22%3E%3C%2Fspan%3E%3Cspan%3E%3A%20%3C%2Fspan%3E%3Cspan%20data-wf-bindings%3D%22%255B%257B%2522innerHTML%2522%253A%257B%2522type%2522%253A%2522CommercePropValues%2522%252C%2522filter%2522%253A%257B%2522type%2522%253A%2522identity%2522%252C%2522params%2522%253A%255B%255D%257D%252C%2522dataPath%2522%253A%2522database.commerceOrder.userItems%255B%255D.product.f_sku_properties_3dr%255B%255D%2522%257D%257D%255D%22%20class%3D%22w-dyn-bind-empty%22%3E%3C%2Fspan%3E%3C%2Fli%3E",
// //                     }}
// //                   />
// //                   <ul
// //                     data-wf-bindings="%5B%7B%22optionSets%22%3A%7B%22type%22%3A%22CommercePropTable%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr[]%22%7D%7D%2C%7B%22optionValues%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.f_sku_values_3dr%22%7D%7D%5D"
// //                     className="w-commerce-commercecartoptionlist"
// //                     data-wf-collection="database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr"
// //                     data-wf-template-id="wf-template-d3adb6d7-cc56-c118-6985-cf7153b16490"
// //                   >
// //                     <li>
// //                       <span
// //                         data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22PlainText%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D.name%22%7D%7D%5D"
// //                         className="w-dyn-bind-empty"
// //                       ></span>
// //                       <span>: </span>
// //                       <span
// //                         data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePropValues%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.product.f_sku_properties_3dr%5B%5D%22%7D%7D%5D"
// //                         className="w-dyn-bind-empty"
// //                       ></span>
// //                     </li>
// //                   </ul>
// //                   <a
// //                     href="#"
// //                     role="button"
// //                     data-wf-bindings="%5B%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D"
// //                     className="w-inline-block"
// //                     data-wf-cart-action="remove-item"
// //                     data-commerce-sku-id=""
// //                     aria-label="Remove item from cart"
// //                   >
// //                     <div>Remove</div>
// //                   </a>
// //                 </div>
// //                 <input
// //                   aria-label="Update quantity"
// //                   data-wf-bindings="%5B%7B%22value%22%3A%7B%22type%22%3A%22Number%22%2C%22filter%22%3A%7B%22type%22%3A%22numberPrecision%22%2C%22params%22%3A%5B%220%22%2C%22numberPrecision%22%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.count%22%7D%7D%2C%7B%22data-commerce-sku-id%22%3A%7B%22type%22%3A%22ItemRef%22%2C%22filter%22%3A%7B%22type%22%3A%22identity%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D.sku.id%22%7D%7D%5D"
// //                   data-wf-conditions="%7B%22condition%22%3A%7B%22fields%22%3A%7B%22product%3Aec-product-type%22%3A%7B%22ne%22%3A%22e348fd487d0102946c9179d2a94bb613%22%2C%22type%22%3A%22Option%22%7D%7D%7D%2C%22dataPath%22%3A%22database.commerceOrder.userItems%5B%5D%22%7D"
// //                   className="w-commerce-commercecartquantity"
// //                   required
// //                   pattern="^[0-9]+$"
// //                   inputMode="numeric"
// //                   type="number"
// //                   name="quantity"
// //                   autoComplete="off"
// //                   data-wf-cart-action="update-item-quantity"
// //                   data-commerce-sku-id=""
// //                   defaultValue="1"
// //                 />
// //               </div>
// //             </div>
// //             <div className="w-commerce-commercecartfooter">
// //               <div
// //                 aria-atomic="true"
// //                 aria-live="polite"
// //                 className="w-commerce-commercecartlineitem"
// //               >
// //                 <div>Subtotal</div>
// //                 <div
// //                   data-wf-bindings="%5B%7B%22innerHTML%22%3A%7B%22type%22%3A%22CommercePrice%22%2C%22filter%22%3A%7B%22type%22%3A%22price%22%2C%22params%22%3A%5B%5D%7D%2C%22dataPath%22%3A%22database.commerceOrder.subtotal%22%7D%7D%5D"
// //                   className="w-commerce-commercecartordervalue"
// //                 ></div>
// //               </div>
// //               <div>
// //                 <div
// //                   data-node-type="commerce-cart-quick-checkout-actions"
// //                   style={{ display: "none" }}
// //                 >
// //                   <a
// //                     data-node-type="commerce-cart-apple-pay-button"
// //                     role="button"
// //                     aria-label="Apple Pay"
// //                     aria-haspopup="dialog"
// //                     style={{
// //                       backgroundImage:
// //                         "-webkit-named-image(apple-pay-logo-white)",
// //                       backgroundSize: "100% 50%",
// //                       backgroundPosition: "50% 50%",
// //                       backgroundRepeat: "no-repeat",
// //                     }}
// //                     className="w-commerce-commercecartapplepaybutton"
// //                     tabIndex={0}
// //                   >
// //                     <div></div>
// //                   </a>
// //                   <a
// //                     data-node-type="commerce-cart-quick-checkout-button"
// //                     role="button"
// //                     tabIndex={0}
// //                     aria-haspopup="dialog"
// //                     style={{ display: "none" }}
// //                     className="w-commerce-commercecartquickcheckoutbutton"
// //                   >
// //                     <svg
// //                       className="w-commerce-commercequickcheckoutgoogleicon"
// //                       xmlns="http://www.w3.org/2000/svg"
// //                       xmlnsXlink="http://www.w3.org/1999/xlink"
// //                       width="16"
// //                       height="16"
// //                       viewBox="0 0 16 16"
// //                     >
// //                       <defs>
// //                         <polygon
// //                           id="google-mark-a"
// //                           points="0 .329 3.494 .329 3.494 7.649 0 7.649"
// //                         ></polygon>
// //                         <polygon
// //                           id="google-mark-c"
// //                           points=".894 0 13.169 0 13.169 6.443 .894 6.443"
// //                         ></polygon>
// //                       </defs>
// //                       <g fill="none" fillRule="evenodd">
// //                         <path
// //                           fill="#4285F4"
// //                           d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"
// //                         ></path>
// //                         <path
// //                           fill="#34A853"
// //                           d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"
// //                         ></path>
// //                         <g transform="translate(0 4)">
// //                           <mask id="google-mark-b" fill="#fff">
// //                             <use xlinkHref="#google-mark-a"></use>
// //                           </mask>
// //                           <path
// //                             fill="#FBBC04"
// //                             d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337"
// //                             mask="url(#google-mark-b)"
// //                           ></path>
// //                         </g>
// //                         <mask id="google-mark-d" fill="#fff">
// //                           <use xlinkHref="#google-mark-c"></use>
// //                         </mask>
// //                         <path
// //                           fill="#EA4335"
// //                           d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291"
// //                           mask="url(#google-mark-d)"
// //                         ></path>
// //                       </g>
// //                     </svg>
// //                     <svg
// //                       className="w-commerce-commercequickcheckoutmicrosofticon"
// //                       xmlns="http://www.w3.org/2000/svg"
// //                       width="16"
// //                       height="16"
// //                       viewBox="0 0 16 16"
// //                     >
// //                       <g fill="none" fillRule="evenodd">
// //                         <polygon
// //                           fill="#F05022"
// //                           points="7 7 1 7 1 1 7 1"
// //                         ></polygon>
// //                         <polygon
// //                           fill="#7DB902"
// //                           points="15 7 9 7 9 1 15 1"
// //                         ></polygon>
// //                         <polygon
// //                           fill="#00A4EE"
// //                           points="7 15 1 15 1 9 7 9"
// //                         ></polygon>
// //                         <polygon
// //                           fill="#FFB700"
// //                           points="15 15 9 15 9 9 15 9"
// //                         ></polygon>
// //                       </g>
// //                     </svg>
// //                     <div>Pay with browser.</div>
// //                   </a>
// //                 </div>
// //                 <a
// //                   href="/checkout"
// //                   className="w-commerce-commercecartcheckoutbutton primary-button"
// //                   data-loading-text=""
// //                   data-node-type="cart-checkout-button"
// //                 >
// //                   Continue to Checkout
// //                 </a>
// //               </div>
// //             </div>
// //           </form>
// //           <div className="w-commerce-commercecartemptystate">
// //             <div aria-label="This cart is empty" aria-live="polite">
// //               No items found.
// //             </div>
// //           </div>
// //           <div
// //             aria-live="assertive"
// //             style={{ display: "none" }}
// //             data-node-type="commerce-cart-error"
// //             className="w-commerce-commercecarterrorstate"
// //           >
// //             <div
// //               className="w-cart-error-msg"
// //               data-w-cart-quantity-error="Product is not available in this quantity."
// //               data-w-cart-general-error="Something went wrong when adding this item to the cart."
// //               data-w-cart-checkout-error="Checkout is disabled on this site."
// //               data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue."
// //               data-w-cart-subscription_error-error="Before you purchase, please use your email invite to verify your address so we can send order updates."
// //             >
// //               Product is not available in this quantity.
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }



// // function CartModal() {
// //   const {
// //     items,
// //     isOpen,
// //     closeCart,
// //     removeFromCart,
// //     updateQuantity,
// //     subtotal,
// //     createCheckout,
// //   } = useCart();

// //   return (
// //     <div
// //       style={{ display: isOpen ? "flex" : "none" }}
// //       className="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal"
// //       data-node-type="commerce-cart-container-wrapper"
// //     >
// //       <div
// //         data-node-type="commerce-cart-container"
// //         role="dialog"
// //         className="w-commerce-commercecartcontainer"
// //       >
// //         <div className="w-commerce-commercecartheader">
// //           <h4 className="w-commerce-commercecartheading">Your Cart</h4>
// //           <a
// //             className="w-commerce-commercecartcloselink w-inline-block"
// //             role="button"
// //             aria-label="Close cart"
// //             data-node-type="commerce-cart-close-link"
// //             onClick={closeCart}
// //           >
// //             <svg width="16px" height="16px" viewBox="0 0 16 16">
// //               <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
// //                 <g fillRule="nonzero" fill="#333333">
// //                   <polygon points="6.23223305 8 0.616116524 13.6161165 2.38388348 15.3838835 8 9.76776695 13.6161165 15.3838835 15.3838835 13.6161165 9.76776695 8 15.3838835 2.38388348 13.6161165 0.616116524 8 6.23223305 2.38388348 0.616116524 0.616116524 2.38388348 6.23223305 8"></polygon>
// //                 </g>
// //               </g>
// //             </svg>
// //           </a>
// //         </div>
// //         <div className="w-commerce-commercecartformwrapper">
// //           {items.length > 0 ? (
// //             <form
// //               className="w-commerce-commercecartform"
// //               data-node-type="commerce-cart-form"
// //             >
// //               <div
// //                 className="w-commerce-commercecartlist"
// //                 data-wf-collection="database.commerceOrder.userItems"
// //                 data-wf-template-id="wf-template-d3adb6d7-cc56-c118-6985-cf7153b1648a"
// //               >
// //                 {items.map((item) => (
// //                   <div
// //                     key={item.variantId}
// //                     className="w-commerce-commercecartitem"
// //                   >
// //                     <img
// //                       src={item.image}
// //                       alt={item.title}
// //                       className="w-commerce-commercecartitemimage"
// //                     />
// //                     <div className="w-commerce-commercecartiteminfo">
// //                       <div className="w-commerce-commercecartproductname">
// //                         {item.title}
// //                       </div>
// //                       <div>{item.price}</div>
// //                       <ul className="w-commerce-commercecartoptionlist">
// //                         <li>
// //                           <span>SKU</span>
// //                           <span>: </span>
// //                           <span>{item.sku}</span>
// //                         </li>
// //                       </ul>
// //                       <a
// //                         href="#"
// //                         role="button"
// //                         className="w-inline-block"
// //                         data-wf-cart-action="remove-item"
// //                         data-commerce-sku-id={item.variantId}
// //                         aria-label="Remove item from cart"
// //                         onClick={(e) => {
// //                           e.preventDefault();
// //                           removeFromCart(item.variantId);
// //                         }}
// //                       >
// //                         <div>Remove</div>
// //                       </a>
// //                     </div>
// //                     <input
// //                       aria-label="Update quantity"
// //                       className="w-commerce-commercecartquantity"
// //                       required
// //                       pattern="^[0-9]+$"
// //                       inputMode="numeric"
// //                       type="number"
// //                       name="quantity"
// //                       autoComplete="off"
// //                       data-wf-cart-action="update-item-quantity"
// //                       data-commerce-sku-id={item.variantId}
// //                       value={item.quantity}
// //                       onChange={(e) => {
// //                         const newQuantity = parseInt(e.target.value);
// //                         if (!isNaN(newQuantity) && newQuantity >= 0) {
// //                           updateQuantity(item.variantId, newQuantity);
// //                         }
// //                       }}
// //                     />
// //                   </div>
// //                 ))}
// //               </div>
// //               <div className="w-commerce-commercecartfooter">
// //                 <div
// //                   aria-atomic="true"
// //                   aria-live="polite"
// //                   className="w-commerce-commercecartlineitem"
// //                 >
// //                   <div>Subtotal</div>
// //                   <div className="w-commerce-commercecartordervalue">
// //                     $ {subtotal} USD
// //                   </div>
// //                 </div>
// //                 <div>
// //                   <div
// //                     data-node-type="commerce-cart-quick-checkout-actions"
// //                     style={{ display: "none" }}
// //                   >
// //                     <a
// //                       data-node-type="commerce-cart-apple-pay-button"
// //                       role="button"
// //                       aria-label="Apple Pay"
// //                       aria-haspopup="dialog"
// //                       style={{
// //                         backgroundImage:
// //                           "-webkit-named-image(apple-pay-logo-white)",
// //                         backgroundSize: "100% 50%",
// //                         backgroundPosition: "50% 50%",
// //                         backgroundRepeat: "no-repeat",
// //                       }}
// //                       className="w-commerce-commercecartapplepaybutton"
// //                       tabIndex={0}
// //                     >
// //                       <div></div>
// //                     </a>
// //                     <a
// //                       data-node-type="commerce-cart-quick-checkout-button"
// //                       role="button"
// //                       tabIndex={0}
// //                       aria-haspopup="dialog"
// //                       style={{ display: "none" }}
// //                       className="w-commerce-commercecartquickcheckoutbutton"
// //                     >
// //                       <svg
// //                         className="w-commerce-commercequickcheckoutgoogleicon"
// //                         xmlns="http://www.w3.org/2000/svg"
// //                         xmlnsXlink="http://www.w3.org/1999/xlink"
// //                         width="16"
// //                         height="16"
// //                         viewBox="0 0 16 16"
// //                       >
// //                         <defs>
// //                           <polygon
// //                             id="google-mark-a"
// //                             points="0 .329 3.494 .329 3.494 7.649 0 7.649"
// //                           ></polygon>
// //                           <polygon
// //                             id="google-mark-c"
// //                             points=".894 0 13.169 0 13.169 6.443 .894 6.443"
// //                           ></polygon>
// //                         </defs>
// //                         <g fill="none" fillRule="evenodd">
// //                           <path
// //                             fill="#4285F4"
// //                             d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"
// //                           ></path>
// //                           <path
// //                             fill="#34A853"
// //                             d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"
// //                           ></path>
// //                           <g transform="translate(0 4)">
// //                             <mask id="google-mark-b" fill="#fff">
// //                               <use xlinkHref="#google-mark-a"></use>
// //                             </mask>
// //                             <path
// //                               fill="#FBBC04"
// //                               d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337"
// //                               mask="url(#google-mark-b)"
// //                             ></path>
// //                           </g>
// //                           <mask id="google-mark-d" fill="#fff">
// //                             <use xlinkHref="#google-mark-c"></use>
// //                           </mask>
// //                           <path
// //                             fill="#EA4335"
// //                             d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291"
// //                             mask="url(#google-mark-d)"
// //                           ></path>
// //                         </g>
// //                       </svg>
// //                       <svg
// //                         className="w-commerce-commercequickcheckoutmicrosofticon"
// //                         xmlns="http://www.w3.org/2000/svg"
// //                         width="16"
// //                         height="16"
// //                         viewBox="0 0 16 16"
// //                       >
// //                         <g fill="none" fillRule="evenodd">
// //                           <polygon
// //                             fill="#F05022"
// //                             points="7 7 1 7 1 1 7 1"
// //                           ></polygon>
// //                           <polygon
// //                             fill="#7DB902"
// //                             points="15 7 9 7 9 1 15 1"
// //                           ></polygon>
// //                           <polygon
// //                             fill="#00A4EE"
// //                             points="7 15 1 15 1 9 7 9"
// //                           ></polygon>
// //                           <polygon
// //                             fill="#FFB700"
// //                             points="15 15 9 15 9 9 15 9"
// //                           ></polygon>
// //                         </g>
// //                       </svg>
// //                       <div>Pay with browser.</div>
// //                     </a>
// //                   </div>
// //                   <a
// //                     href="#"
// //                     className="w-commerce-commercecartcheckoutbutton primary-button"
// //                     data-loading-text=""
// //                     data-node-type="cart-checkout-button"
// //                     onClick={(e) => {
// //                       e.preventDefault();
// //                       createCheckout();
// //                     }}
// //                   >
// //                     Continue to Checkout
// //                   </a>
// //                 </div>
// //               </div>
// //             </form>
// //           ) : (
// //             <div className="w-commerce-commercecartemptystate">
// //               <div aria-label="This cart is empty" aria-live="polite">
// //                 No items found.
// //               </div>
// //             </div>
// //           )}
// //           <div
// //             aria-live="assertive"
// //             style={{ display: "none" }}
// //             data-node-type="commerce-cart-error"
// //             className="w-commerce-commercecarterrorstate"
// //           >
// //             <div
// //               className="w-cart-error-msg"
// //               data-w-cart-quantity-error="Product is not available in this quantity."
// //               data-w-cart-general-error="Something went wrong when adding this item to the cart."
// //               data-w-cart-checkout-error="Checkout is disabled on this site."
// //               data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue."
// //               data-w-cart-subscription_error-error="Before you purchase, please use your email invite to verify your address so we can send order updates."
// //             >
// //               Product is not available in this quantity.
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default CartModal;




// // function CartModal() {
// //   const {
// //     items,
// //     isOpen,
// //     closeCart,
// //     removeFromCart,
// //     updateQuantity,
// //     subtotal,
// //     createCheckout,
// //   } = useCart();

// //   const handleQuantityChange = (variantId: string, newValue: string) => {
// //     const quantity = parseInt(newValue);
// //     if (!isNaN(quantity) && quantity >= 0) {
// //       updateQuantity(variantId, quantity);
// //     }
// //   };

// //   return (
// //     <div
// //       style={{ display: isOpen ? "flex" : "none" }}
// //       className="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal"
// //       data-node-type="commerce-cart-container-wrapper"
// //     >
// //       <div
// //         data-node-type="commerce-cart-container"
// //         role="dialog"
// //         className="w-commerce-commercecartcontainer"
// //       >
// //         <div className="w-commerce-commercecartheader">
// //           <h4 className="w-commerce-commercecartheading">Your Cart</h4>
// //           <a
// //             className="w-commerce-commercecartcloselink w-inline-block"
// //             role="button"
// //             aria-label="Close cart"
// //             data-node-type="commerce-cart-close-link"
// //             onClick={closeCart}
// //             style={{ cursor: "pointer" }}
// //           >
// //             <svg width="16px" height="16px" viewBox="0 0 16 16">
// //               <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
// //                 <g fillRule="nonzero" fill="#333333">
// //                   <polygon points="6.23223305 8 0.616116524 13.6161165 2.38388348 15.3838835 8 9.76776695 13.6161165 15.3838835 15.3838835 13.6161165 9.76776695 8 15.3838835 2.38388348 13.6161165 0.616116524 8 6.23223305 2.38388348 0.616116524 0.616116524 2.38388348 6.23223305 8"></polygon>
// //                 </g>
// //               </g>
// //             </svg>
// //           </a>
// //         </div>
// //         <div className="w-commerce-commercecartformwrapper">
// //           {items.length > 0 ? (
// //             <form
// //               className="w-commerce-commercecartform"
// //               data-node-type="commerce-cart-form"
// //               onSubmit={(e) => e.preventDefault()}
// //             >
// //               <div
// //                 className="w-commerce-commercecartlist"
// //                 data-wf-collection="database.commerceOrder.userItems"
// //                 data-wf-template-id="wf-template-d3adb6d7-cc56-c118-6985-cf7153b1648a"
// //               >
// //                 {items.map((item) => (
// //                   <div
// //                     key={item.variantId}
// //                     className="w-commerce-commercecartitem"
// //                   >
// //                     <img
// //                       src={item.image}
// //                       alt={item.title}
// //                       className="w-commerce-commercecartitemimage"
// //                     />
// //                     <div className="w-commerce-commercecartiteminfo">
// //                       <div className="w-commerce-commercecartproductname">
// //                         {item.title}
// //                       </div>
// //                       <div>{item.price}</div>
// //                       <ul className="w-commerce-commercecartoptionlist">
// //                         <li>
// //                           <span>SKU</span>
// //                           <span>: </span>
// //                           <span>{item.sku}</span>
// //                         </li>
// //                       </ul>
// //                       <a
// //                         href="#"
// //                         role="button"
// //                         className="w-inline-block"
// //                         data-wf-cart-action="remove-item"
// //                         data-commerce-sku-id={item.variantId}
// //                         aria-label="Remove item from cart"
// //                         style={{ cursor: "pointer" }}
// //                         onClick={(e) => {
// //                           e.preventDefault();
// //                           removeFromCart(item.variantId);
// //                         }}
// //                       >
// //                         <div>Remove</div>
// //                       </a>
// //                     </div>
// //                     <input
// //                       aria-label="Update quantity"
// //                       className="w-commerce-commercecartquantity"
// //                       required
// //                       pattern="^[0-9]+$"
// //                       inputMode="numeric"
// //                       type="number"
// //                       name="quantity"
// //                       autoComplete="off"
// //                       data-wf-cart-action="update-item-quantity"
// //                       data-commerce-sku-id={item.variantId}
// //                       value={item.quantity}
// //                       min="0"
// //                       onChange={(e) => {
// //                         handleQuantityChange(item.variantId, e.target.value);
// //                       }}
// //                     />
// //                   </div>
// //                 ))}
// //               </div>
// //               <div className="w-commerce-commercecartfooter">
// //                 <div
// //                   aria-atomic="true"
// //                   aria-live="polite"
// //                   className="w-commerce-commercecartlineitem"
// //                 >
// //                   <div>Subtotal</div>
// //                   <div className="w-commerce-commercecartordervalue">
// //                     $ {subtotal} USD
// //                   </div>
// //                 </div>
// //                 <div>
// //                   <div
// //                     data-node-type="commerce-cart-quick-checkout-actions"
// //                     style={{ display: "none" }}
// //                   >
// //                     <a
// //                       data-node-type="commerce-cart-apple-pay-button"
// //                       role="button"
// //                       aria-label="Apple Pay"
// //                       aria-haspopup="dialog"
// //                       style={{
// //                         backgroundImage:
// //                           "-webkit-named-image(apple-pay-logo-white)",
// //                         backgroundSize: "100% 50%",
// //                         backgroundPosition: "50% 50%",
// //                         backgroundRepeat: "no-repeat",
// //                       }}
// //                       className="w-commerce-commercecartapplepaybutton"
// //                       tabIndex={0}
// //                     >
// //                       <div></div>
// //                     </a>
// //                     <a
// //                       data-node-type="commerce-cart-quick-checkout-button"
// //                       role="button"
// //                       tabIndex={0}
// //                       aria-haspopup="dialog"
// //                       style={{ display: "none" }}
// //                       className="w-commerce-commercecartquickcheckoutbutton"
// //                     >
// //                       <svg
// //                         className="w-commerce-commercequickcheckoutgoogleicon"
// //                         xmlns="http://www.w3.org/2000/svg"
// //                         xmlnsXlink="http://www.w3.org/1999/xlink"
// //                         width="16"
// //                         height="16"
// //                         viewBox="0 0 16 16"
// //                       >
// //                         <defs>
// //                           <polygon
// //                             id="google-mark-a"
// //                             points="0 .329 3.494 .329 3.494 7.649 0 7.649"
// //                           ></polygon>
// //                           <polygon
// //                             id="google-mark-c"
// //                             points=".894 0 13.169 0 13.169 6.443 .894 6.443"
// //                           ></polygon>
// //                         </defs>
// //                         <g fill="none" fillRule="evenodd">
// //                           <path
// //                             fill="#4285F4"
// //                             d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"
// //                           ></path>
// //                           <path
// //                             fill="#34A853"
// //                             d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"
// //                           ></path>
// //                           <g transform="translate(0 4)">
// //                             <mask id="google-mark-b" fill="#fff">
// //                               <use xlinkHref="#google-mark-a"></use>
// //                             </mask>
// //                             <path
// //                               fill="#FBBC04"
// //                               d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337"
// //                               mask="url(#google-mark-b)"
// //                             ></path>
// //                           </g>
// //                           <mask id="google-mark-d" fill="#fff">
// //                             <use xlinkHref="#google-mark-c"></use>
// //                           </mask>
// //                           <path
// //                             fill="#EA4335"
// //                             d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291"
// //                             mask="url(#google-mark-d)"
// //                           ></path>
// //                         </g>
// //                       </svg>
// //                       <svg
// //                         className="w-commerce-commercequickcheckoutmicrosofticon"
// //                         xmlns="http://www.w3.org/2000/svg"
// //                         width="16"
// //                         height="16"
// //                         viewBox="0 0 16 16"
// //                       >
// //                         <g fill="none" fillRule="evenodd">
// //                           <polygon
// //                             fill="#F05022"
// //                             points="7 7 1 7 1 1 7 1"
// //                           ></polygon>
// //                           <polygon
// //                             fill="#7DB902"
// //                             points="15 7 9 7 9 1 15 1"
// //                           ></polygon>
// //                           <polygon
// //                             fill="#00A4EE"
// //                             points="7 15 1 15 1 9 7 9"
// //                           ></polygon>
// //                           <polygon
// //                             fill="#FFB700"
// //                             points="15 15 9 15 9 9 15 9"
// //                           ></polygon>
// //                         </g>
// //                       </svg>
// //                       <div>Pay with browser.</div>
// //                     </a>
// //                   </div>
// //                   <a
// //                     href="#"
// //                     className="w-commerce-commercecartcheckoutbutton primary-button"
// //                     data-loading-text=""
// //                     data-node-type="cart-checkout-button"
// //                     style={{ cursor: "pointer" }}
// //                     onClick={(e) => {
// //                       e.preventDefault();
// //                       createCheckout();
// //                     }}
// //                   >
// //                     Continue to Checkout
// //                   </a>
// //                 </div>
// //               </div>
// //             </form>
// //           ) : (
// //             <div className="w-commerce-commercecartemptystate">
// //               <div aria-label="This cart is empty" aria-live="polite">
// //                 No items found.
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default CartModal;




// // function CartModal() {
// //   const {
// //     items,
// //     isOpen,
// //     closeCart,
// //     removeFromCart,
// //     updateQuantity,
// //     subtotal,
// //     createCheckout,
// //     isCheckoutLoading,
// //   } = useCart();

// //   console.log("CartModal items:", items);
// //   console.log("CartModal items length:", items.length);

// //   const handleQuantityChange = (variantId: string, newValue: string) => {
// //     const quantity = parseInt(newValue);
// //     if (!isNaN(quantity) && quantity >= 0) {
// //       updateQuantity(variantId, quantity);
// //     }
// //   };

// //   const handleCheckoutClick = async (
// //     e: React.MouseEvent<HTMLAnchorElement>
// //   ) => {
// //     e.preventDefault();
// //     e.stopPropagation();
// //     await createCheckout();
// //   };

// //   return (
// //     <>
// //       {/* Backdrop overlay */}
// //       {isOpen && (
// //         <div
// //           style={{
// //             position: "fixed",
// //             top: 0,
// //             left: 0,
// //             right: 0,
// //             bottom: 0,
// //             backgroundColor: "rgba(0, 0, 0, 0.5)",
// //             zIndex: 9998,
// //           }}
// //           onClick={closeCart}
// //         />
// //       )}

// //       <div
// //         style={{ display: isOpen ? "flex" : "none", zIndex: 9999 }}
// //         className="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal"
// //         data-node-type="commerce-cart-container-wrapper"
// //         data-open={isOpen}
// //       >
// //         <div
// //           data-node-type="commerce-cart-container"
// //           role="dialog"
// //           className="w-commerce-commercecartcontainer"
// //         >
// //           <div className="w-commerce-commercecartheader">
// //             <h4 className="w-commerce-commercecartheading">Your Cart</h4>
// //             <a
// //               className="w-commerce-commercecartcloselink w-inline-block"
// //               role="button"
// //               aria-label="Close cart"
// //               data-node-type="commerce-cart-close-link"
// //               onClick={(e) => {
// //                 e.preventDefault();
// //                 closeCart();
// //               }}
// //               style={{ cursor: "pointer" }}
// //             >
// //               <svg width="16px" height="16px" viewBox="0 0 16 16">
// //                 <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
// //                   <g fillRule="nonzero" fill="#333333">
// //                     <polygon points="6.23223305 8 0.616116524 13.6161165 2.38388348 15.3838835 8 9.76776695 13.6161165 15.3838835 15.3838835 13.6161165 9.76776695 8 15.3838835 2.38388348 13.6161165 0.616116524 8 6.23223305 2.38388348 0.616116524 0.616116524 2.38388348 6.23223305 8"></polygon>
// //                   </g>
// //                 </g>
// //               </svg>
// //             </a>
// //           </div>
// //           <div className="w-commerce-commercecartformwrapper">
// //             {items.length > 0 ? (
// //               <div
// //                 className="w-commerce-commercecartform"
// //                 data-node-type="commerce-cart-form"
// //               >
// //                 <div
// //                   className="w-commerce-commercecartlist"
// //                   data-wf-collection="database.commerceOrder.userItems"
// //                   data-wf-template-id="wf-template-d3adb6d7-cc56-c118-6985-cf7153b1648a"
// //                 >
// //                   {items.map((item) => (
// //                     <div
// //                       key={item.variantId}
// //                       className="w-commerce-commercecartitem"
// //                     >
// //                       <img
// //                         src={item.image}
// //                         alt={item.title}
// //                         className="w-commerce-commercecartitemimage"
// //                       />
// //                       <div className="w-commerce-commercecartiteminfo">
// //                         <div className="w-commerce-commercecartproductname">
// //                           {item.title}
// //                         </div>
// //                         <div>{item.price}</div>
// //                         <ul className="w-commerce-commercecartoptionlist">
// //                           <li>
// //                             <span>SKU</span>
// //                             <span>: </span>
// //                             <span>{item.sku}</span>
// //                           </li>
// //                         </ul>
// //                         <a
// //                           href="#"
// //                           role="button"
// //                           className="w-inline-block"
// //                           data-wf-cart-action="remove-item"
// //                           data-commerce-sku-id={item.variantId}
// //                           aria-label="Remove item from cart"
// //                           style={{ cursor: "pointer" }}
// //                           onClick={(e) => {
// //                             e.preventDefault();
// //                             removeFromCart(item.variantId);
// //                           }}
// //                         >
// //                           <div>Remove</div>
// //                         </a>
// //                       </div>
// //                       <input
// //                         aria-label="Update quantity"
// //                         className="w-commerce-commercecartquantity"
// //                         required
// //                         pattern="^[0-9]+$"
// //                         inputMode="numeric"
// //                         type="number"
// //                         name="quantity"
// //                         autoComplete="off"
// //                         data-wf-cart-action="update-item-quantity"
// //                         data-commerce-sku-id={item.variantId}
// //                         value={item.quantity}
// //                         min="0"
// //                         onChange={(e) => {
// //                           handleQuantityChange(item.variantId, e.target.value);
// //                         }}
// //                       />
// //                     </div>
// //                   ))}
// //                 </div>
// //                 <div className="w-commerce-commercecartfooter">
// //                   <div
// //                     aria-atomic="true"
// //                     aria-live="polite"
// //                     className="w-commerce-commercecartlineitem"
// //                   >
// //                     <div>Subtotal</div>
// //                     <div className="w-commerce-commercecartordervalue">
// //                       $ {subtotal} USD
// //                     </div>
// //                   </div>
// //                   <div>
// //                     <div
// //                       data-node-type="commerce-cart-quick-checkout-actions"
// //                       style={{ display: "none" }}
// //                     >
// //                       <a
// //                         data-node-type="commerce-cart-apple-pay-button"
// //                         role="button"
// //                         aria-label="Apple Pay"
// //                         aria-haspopup="dialog"
// //                         style={{
// //                           backgroundImage:
// //                             "-webkit-named-image(apple-pay-logo-white)",
// //                           backgroundSize: "100% 50%",
// //                           backgroundPosition: "50% 50%",
// //                           backgroundRepeat: "no-repeat",
// //                         }}
// //                         className="w-commerce-commercecartapplepaybutton"
// //                         tabIndex={0}
// //                       >
// //                         <div></div>
// //                       </a>
// //                       <a
// //                         data-node-type="commerce-cart-quick-checkout-button"
// //                         role="button"
// //                         tabIndex={0}
// //                         aria-haspopup="dialog"
// //                         style={{ display: "none" }}
// //                         className="w-commerce-commercecartquickcheckoutbutton"
// //                       >
// //                         <svg
// //                           className="w-commerce-commercequickcheckoutgoogleicon"
// //                           xmlns="http://www.w3.org/2000/svg"
// //                           xmlnsXlink="http://www.w3.org/1999/xlink"
// //                           width="16"
// //                           height="16"
// //                           viewBox="0 0 16 16"
// //                         >
// //                           <defs>
// //                             <polygon
// //                               id="google-mark-a"
// //                               points="0 .329 3.494 .329 3.494 7.649 0 7.649"
// //                             ></polygon>
// //                             <polygon
// //                               id="google-mark-c"
// //                               points=".894 0 13.169 0 13.169 6.443 .894 6.443"
// //                             ></polygon>
// //                           </defs>
// //                           <g fill="none" fillRule="evenodd">
// //                             <path
// //                               fill="#4285F4"
// //                               d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"
// //                             ></path>
// //                             <path
// //                               fill="#34A853"
// //                               d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"
// //                             ></path>
// //                             <g transform="translate(0 4)">
// //                               <mask id="google-mark-b" fill="#fff">
// //                                 <use xlinkHref="#google-mark-a"></use>
// //                               </mask>
// //                               <path
// //                                 fill="#FBBC04"
// //                                 d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337"
// //                                 mask="url(#google-mark-b)"
// //                               ></path>
// //                             </g>
// //                             <mask id="google-mark-d" fill="#fff">
// //                               <use xlinkHref="#google-mark-c"></use>
// //                             </mask>
// //                             <path
// //                               fill="#EA4335"
// //                               d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291"
// //                               mask="url(#google-mark-d)"
// //                             ></path>
// //                           </g>
// //                         </svg>
// //                         <svg
// //                           className="w-commerce-commercequickcheckoutmicrosofticon"
// //                           xmlns="http://www.w3.org/2000/svg"
// //                           width="16"
// //                           height="16"
// //                           viewBox="0 0 16 16"
// //                         >
// //                           <g fill="none" fillRule="evenodd">
// //                             <polygon
// //                               fill="#F05022"
// //                               points="7 7 1 7 1 1 7 1"
// //                             ></polygon>
// //                             <polygon
// //                               fill="#7DB902"
// //                               points="15 7 9 7 9 1 15 1"
// //                             ></polygon>
// //                             <polygon
// //                               fill="#00A4EE"
// //                               points="7 15 1 15 1 9 7 9"
// //                             ></polygon>
// //                             <polygon
// //                               fill="#FFB700"
// //                               points="15 15 9 15 9 9 15 9"
// //                             ></polygon>
// //                           </g>
// //                         </svg>
// //                         <div>Pay with browser.</div>
// //                       </a>
// //                     </div>
// //                     <button
// //                       type="button"
// //                       className="w-commerce-commercecartcheckoutbutton primary-button"
// //                       data-loading-text=""
// //                       data-node-type="cart-checkout-button"
// //                       style={{
// //                         cursor: isCheckoutLoading ? "wait" : "pointer",
// //                         opacity: isCheckoutLoading ? 0.7 : 1,
// //                         border: "none",
// //                         width: "100%",
// //                         textAlign: "center",
// //                       }}
// //                       onClick={handleCheckoutClick}
// //                       disabled={isCheckoutLoading}
// //                     >
// //                       {isCheckoutLoading
// //                         ? "Processing..."
// //                         : "Continue to Checkout"}
// //                     </button>
// //                   </div>
// //                 </div>
// //               </div>
// //             ) : (
// //               <div className="w-commerce-commercecartemptystate">
// //                 <div aria-label="This cart is empty" aria-live="polite">
// //                   No items found.
// //                 </div>
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// // export default CartModal;





// function CartModal() {
//   const {
//     items,
//     isOpen,
//     closeCart,
//     removeFromCart,
//     updateQuantity,
//     subtotal,
//     createCheckout,
//     isCheckoutLoading,
//   } = useCart();

//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   console.log("CartModal items:", items);
//   console.log("CartModal items length:", items.length);
//   console.log("Mounted:", mounted);

//   const handleQuantityChange = (variantId: string, newValue: string) => {
//     const quantity = parseInt(newValue);
//     if (!isNaN(quantity) && quantity >= 0) {
//       updateQuantity(variantId, quantity);
//     }
//   };

//   const handleCheckoutClick = async (
//     e: React.MouseEvent<HTMLButtonElement>
//   ) => {
//     e.preventDefault();
//     e.stopPropagation();
//     await createCheckout();
//   };

//   // Don't render until mounted to avoid hydration mismatch
//   if (!mounted) {
//     return null;
//   }

//   return (
//     <>
//       {/* Backdrop overlay */}
//       {isOpen && (
//         <div
//           style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             backgroundColor: "rgba(0, 0, 0, 0.5)",
//             zIndex: 9998,
//           }}
//           onClick={closeCart}
//         />
//       )}

//       <div
//         style={{ display: isOpen ? "flex" : "none", zIndex: 9999 }}
//         className="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal"
//         data-node-type="commerce-cart-container-wrapper"
//         data-open={isOpen}
//       >
//         <div
//           data-node-type="commerce-cart-container"
//           role="dialog"
//           className="w-commerce-commercecartcontainer"
//         >
//           <div className="w-commerce-commercecartheader">
//             <h4 className="w-commerce-commercecartheading">Your Cart</h4>
//             <a
//               className="w-commerce-commercecartcloselink w-inline-block"
//               role="button"
//               aria-label="Close cart"
//               data-node-type="commerce-cart-close-link"
//               onClick={(e) => {
//                 e.preventDefault();
//                 closeCart();
//               }}
//               style={{ cursor: "pointer" }}
//             >
//               <svg width="16px" height="16px" viewBox="0 0 16 16">
//                 <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
//                   <g fillRule="nonzero" fill="#333333">
//                     <polygon points="6.23223305 8 0.616116524 13.6161165 2.38388348 15.3838835 8 9.76776695 13.6161165 15.3838835 15.3838835 13.6161165 9.76776695 8 15.3838835 2.38388348 13.6161165 0.616116524 8 6.23223305 2.38388348 0.616116524 0.616116524 2.38388348 6.23223305 8"></polygon>
//                   </g>
//                 </g>
//               </svg>
//             </a>
//           </div>
//           <div className="w-commerce-commercecartformwrapper">
//             {items.length > 0 ? (
//               <div
//                 className="w-commerce-commercecartform"
//                 data-node-type="commerce-cart-form"
//               >
//                 <div
//                   className="w-commerce-commercecartlist"
//                   data-wf-collection="database.commerceOrder.userItems"
//                   data-wf-template-id="wf-template-d3adb6d7-cc56-c118-6985-cf7153b1648a"
//                 >
//                   {items.map((item) => (
//                     <div
//                       key={item.variantId}
//                       className="w-commerce-commercecartitem"
//                     >
//                       <img
//                         src={item.image}
//                         alt={item.title}
//                         className="w-commerce-commercecartitemimage"
//                       />
//                       <div className="w-commerce-commercecartiteminfo">
//                         <div className="w-commerce-commercecartproductname">
//                           {item.title}
//                         </div>
//                         <div>{item.price}</div>
//                         <ul className="w-commerce-commercecartoptionlist">
//                           <li>
//                             <span>SKU</span>
//                             <span>: </span>
//                             <span>{item.sku}</span>
//                           </li>
//                         </ul>
//                         <a
//                           href="#"
//                           role="button"
//                           className="w-inline-block"
//                           data-wf-cart-action="remove-item"
//                           data-commerce-sku-id={item.variantId}
//                           aria-label="Remove item from cart"
//                           style={{ cursor: "pointer" }}
//                           onClick={(e) => {
//                             e.preventDefault();
//                             removeFromCart(item.variantId);
//                           }}
//                         >
//                           <div>Remove</div>
//                         </a>
//                       </div>
//                       <input
//                         aria-label="Update quantity"
//                         className="w-commerce-commercecartquantity"
//                         required
//                         pattern="^[0-9]+$"
//                         inputMode="numeric"
//                         type="number"
//                         name="quantity"
//                         autoComplete="off"
//                         data-wf-cart-action="update-item-quantity"
//                         data-commerce-sku-id={item.variantId}
//                         value={item.quantity}
//                         min="0"
//                         onChange={(e) => {
//                           handleQuantityChange(item.variantId, e.target.value);
//                         }}
//                       />
//                     </div>
//                   ))}
//                 </div>
//                 <div className="w-commerce-commercecartfooter">
//                   <div
//                     aria-atomic="true"
//                     aria-live="polite"
//                     className="w-commerce-commercecartlineitem"
//                   >
//                     <div>Subtotal</div>
//                     <div className="w-commerce-commercecartordervalue">
//                       $ {subtotal} USD
//                     </div>
//                   </div>
//                   <div>
//                     <div
//                       data-node-type="commerce-cart-quick-checkout-actions"
//                       style={{ display: "none" }}
//                     >
//                       <a
//                         data-node-type="commerce-cart-apple-pay-button"
//                         role="button"
//                         aria-label="Apple Pay"
//                         aria-haspopup="dialog"
//                         style={{
//                           backgroundImage:
//                             "-webkit-named-image(apple-pay-logo-white)",
//                           backgroundSize: "100% 50%",
//                           backgroundPosition: "50% 50%",
//                           backgroundRepeat: "no-repeat",
//                         }}
//                         className="w-commerce-commercecartapplepaybutton"
//                         tabIndex={0}
//                       >
//                         <div></div>
//                       </a>
//                       <a
//                         data-node-type="commerce-cart-quick-checkout-button"
//                         role="button"
//                         tabIndex={0}
//                         aria-haspopup="dialog"
//                         style={{ display: "none" }}
//                         className="w-commerce-commercecartquickcheckoutbutton"
//                       >
//                         <svg
//                           className="w-commerce-commercequickcheckoutgoogleicon"
//                           xmlns="http://www.w3.org/2000/svg"
//                           xmlnsXlink="http://www.w3.org/1999/xlink"
//                           width="16"
//                           height="16"
//                           viewBox="0 0 16 16"
//                         >
//                           <defs>
//                             <polygon
//                               id="google-mark-a"
//                               points="0 .329 3.494 .329 3.494 7.649 0 7.649"
//                             ></polygon>
//                             <polygon
//                               id="google-mark-c"
//                               points=".894 0 13.169 0 13.169 6.443 .894 6.443"
//                             ></polygon>
//                           </defs>
//                           <g fill="none" fillRule="evenodd">
//                             <path
//                               fill="#4285F4"
//                               d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"
//                             ></path>
//                             <path
//                               fill="#34A853"
//                               d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"
//                             ></path>
//                             <g transform="translate(0 4)">
//                               <mask id="google-mark-b" fill="#fff">
//                                 <use xlinkHref="#google-mark-a"></use>
//                               </mask>
//                               <path
//                                 fill="#FBBC04"
//                                 d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337"
//                                 mask="url(#google-mark-b)"
//                               ></path>
//                             </g>
//                             <mask id="google-mark-d" fill="#fff">
//                               <use xlinkHref="#google-mark-c"></use>
//                             </mask>
//                             <path
//                               fill="#EA4335"
//                               d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291"
//                               mask="url(#google-mark-d)"
//                             ></path>
//                           </g>
//                         </svg>
//                         <svg
//                           className="w-commerce-commercequickcheckoutmicrosofticon"
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="16"
//                           height="16"
//                           viewBox="0 0 16 16"
//                         >
//                           <g fill="none" fillRule="evenodd">
//                             <polygon
//                               fill="#F05022"
//                               points="7 7 1 7 1 1 7 1"
//                             ></polygon>
//                             <polygon
//                               fill="#7DB902"
//                               points="15 7 9 7 9 1 15 1"
//                             ></polygon>
//                             <polygon
//                               fill="#00A4EE"
//                               points="7 15 1 15 1 9 7 9"
//                             ></polygon>
//                             <polygon
//                               fill="#FFB700"
//                               points="15 15 9 15 9 9 15 9"
//                             ></polygon>
//                           </g>
//                         </svg>
//                         <div>Pay with browser.</div>
//                       </a>
//                     </div>
//                     <button
//                       type="button"
//                       className="w-commerce-commercecartcheckoutbutton primary-button"
//                       data-loading-text=""
//                       data-node-type="cart-checkout-button"
//                       style={{
//                         cursor: isCheckoutLoading ? "wait" : "pointer",
//                         opacity: isCheckoutLoading ? 0.7 : 1,
//                         border: "none",
//                         width: "100%",
//                         textAlign: "center",
//                       }}
//                       onClick={handleCheckoutClick}
//                       disabled={isCheckoutLoading}
//                     >
//                       {isCheckoutLoading
//                         ? "Processing..."
//                         : "Continue to Checkout"}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <div className="w-commerce-commercecartemptystate">
//                 <div aria-label="This cart is empty" aria-live="polite">
//                   No items found.
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default CartModal;







"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";

export function Navbar() {
  const { openCart, items } = useCart();

  useEffect(() => {
    const navLeft = document.querySelector(".nav-left");
    const webflowButton = document.querySelector(".menu-button.w-nav-button");

    if (!navLeft || !webflowButton) return;

    const handleClick = () => {
      (webflowButton as HTMLElement).click();
    };

    navLeft.addEventListener("click", handleClick);

    return () => {
      navLeft.removeEventListener("click", handleClick);
    };
  }, []);

  const handleCartClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    openCart();
  };

  const cartCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <div
      data-animation="default"
      data-collapse="medium"
      data-duration="400"
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      className="navbar w-nav"
    >
      <div className="container w-container">
        <div className="nav-wrap">
          <a
            href="/"
            aria-current="page"
            className="brand w-inline-block w--current"
          >
            <img
              src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f623b7b6462a86185f110_glamz.svg"
              loading="lazy"
              alt="PurCurie"
            />
          </a>
          <div className="nav-menu-wrap">
            <div
              data-w-id="d3adb6d7-cc56-c118-6985-cf7153b16475"
              className="nav-left"
            >
              <div className="nav-button">
                <div className="top-line"></div>
                <div className="center-line"></div>
                <div className="bottom-line"></div>
              </div>
              <div>Menu</div>
            </div>
            <div className="nav-right">
              <div
                data-open-product=""
                data-wf-cart-type="modal"
                data-wf-cart-query=""
                data-wf-page-link-href-prefix=""
                className="w-commerce-commercecartwrapper"
                data-node-type="commerce-cart-wrapper"
              >
                <a
                  className="w-commerce-commercecartopenlink cart-button desktop w-inline-block"
                  role="button"
                  aria-haspopup="dialog"
                  aria-label="Open cart"
                  data-node-type="commerce-cart-open-link"
                  href="#"
                  onClick={handleCartClick}
                >
                  <div
                    style={{ display: cartCount > 0 ? "block" : "none" }}
                    data-count-hide-rule="empty"
                    className="w-commerce-commercecartopenlinkcount cart-quantity"
                  >
                    {cartCount}
                  </div>
                  <img
                    src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f675704fa71c85c348876_ic-cart.svg"
                    loading="lazy"
                    alt="Cart Icon"
                  />
                </a>
                <CartModal />
              </div>
              <div
                data-w-id="d3adb6d7-cc56-c118-6985-cf7153b164ae"
                className="search-icon"
              >
                <img
                  src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f6757dba6c47670af87be_ic-search.svg"
                  loading="lazy"
                  alt="Search Icon"
                />
              </div>
            </div>
          </div>
          <nav role="navigation" className="nav-menu w-nav-menu">
            <a href="/about" className="nav-link">
              About us
            </a>
            <a href="/categories" className="nav-link">
              Categories
            </a>
            <a href="/product" className="nav-link">
              Shop
            </a>
            {/* <a href="/blogs" className="nav-link">
              Blogs
            </a> */}
            <a href="/contact" className="nav-link last">
              Contact us
            </a>
          </nav>
          <div className="nav-right-mobile">
            <div
              data-open-product=""
              data-wf-cart-type="modal"
              data-wf-cart-query=""
              data-wf-page-link-href-prefix=""
              className="w-commerce-commercecartwrapper"
              data-node-type="commerce-cart-wrapper"
            >
              <a
                className="w-commerce-commercecartopenlink cart-button w-inline-block"
                role="button"
                aria-haspopup="dialog"
                aria-label="Open cart"
                data-node-type="commerce-cart-open-link"
                href="#"
                onClick={handleCartClick}
              >
                <div
                  style={{ display: cartCount > 0 ? "block" : "none" }}
                  data-count-hide-rule="empty"
                  className="w-commerce-commercecartopenlinkcount cart-quantity"
                >
                  {cartCount}
                </div>
                <img
                  src="https://cdn.prod.website-files.com/686f439ee34b78f814ae2de2/686f675704fa71c85c348876_ic-cart.svg"
                  loading="lazy"
                  alt="Cart Icon"
                  className="cart-icon"
                />
              </a>
              <CartModal />
            </div>
            <div className="menu-button w-nav-button">
              <div className="top-line"></div>
              <div className="center-line"></div>
              <div className="bottom-line"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


function CartModal() {
  const {
    items,
    isOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    subtotal,
    createCheckout,
    isCheckoutLoading,
  } = useCart();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleQuantityChange = (variantId: string, newValue: string) => {
    const quantity = parseInt(newValue);
    if (!isNaN(quantity) && quantity >= 0) {
      updateQuantity(variantId, quantity);
    }
  };

  const handleCheckoutClick = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    e.stopPropagation();
    await createCheckout();
  };

  // Don't render anything during SSR
  if (!mounted) {
    return (
      <div
        style={{ display: "none" }}
        className="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal"
      ></div>
    );
  }

  return (
    <>
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 9998,
          }}
          onClick={closeCart}
        />
      )}

      <div
        style={{ display: isOpen ? "flex" : "none", zIndex: 9999 }}
        className="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-modal"
        data-node-type="commerce-cart-container-wrapper"
        data-open={isOpen}
      >
        <div
          data-node-type="commerce-cart-container"
          role="dialog"
          className="w-commerce-commercecartcontainer"
        >
          <div className="w-commerce-commercecartheader">
            <h4 className="w-commerce-commercecartheading">Your Cart</h4>
            <a
              className="w-commerce-commercecartcloselink w-inline-block"
              role="button"
              aria-label="Close cart"
              data-node-type="commerce-cart-close-link"
              onClick={(e) => {
                e.preventDefault();
                closeCart();
              }}
              style={{ cursor: "pointer" }}
            >
              <svg width="16px" height="16px" viewBox="0 0 16 16">
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g fillRule="nonzero" fill="#333333">
                    <polygon points="6.23223305 8 0.616116524 13.6161165 2.38388348 15.3838835 8 9.76776695 13.6161165 15.3838835 15.3838835 13.6161165 9.76776695 8 15.3838835 2.38388348 13.6161165 0.616116524 8 6.23223305 2.38388348 0.616116524 0.616116524 2.38388348 6.23223305 8"></polygon>
                  </g>
                </g>
              </svg>
            </a>
          </div>
          <div className="w-commerce-commercecartformwrapper">
            {items.length > 0 ? (
              <div
                className="w-commerce-commercecartform"
                data-node-type="commerce-cart-form"
              >
                <div
                  className="w-commerce-commercecartlist"
                  data-wf-collection="database.commerceOrder.userItems"
                  data-wf-template-id="wf-template-d3adb6d7-cc56-c118-6985-cf7153b1648a"
                >
                  {items.map((item) => (
                    <div
                      key={item.variantId}
                      className="w-commerce-commercecartitem"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-commerce-commercecartitemimage"
                      />
                      <div className="w-commerce-commercecartiteminfo">
                        <div className="w-commerce-commercecartproductname">
                          {item.title}
                        </div>
                        <div>{item.price}</div>
                        <ul className="w-commerce-commercecartoptionlist">
                          <li>
                            <span>SKU</span>
                            <span>: </span>
                            <span>{item.sku}</span>
                          </li>
                        </ul>
                        <a
                          href="#"
                          role="button"
                          className="w-inline-block"
                          data-wf-cart-action="remove-item"
                          data-commerce-sku-id={item.variantId}
                          aria-label="Remove item from cart"
                          style={{ cursor: "pointer" }}
                          onClick={(e) => {
                            e.preventDefault();
                            removeFromCart(item.variantId);
                          }}
                        >
                          <div>Remove</div>
                        </a>
                      </div>
                      <input
                        aria-label="Update quantity"
                        className="w-commerce-commercecartquantity"
                        required
                        pattern="^[0-9]+$"
                        inputMode="numeric"
                        type="number"
                        name="quantity"
                        autoComplete="off"
                        data-wf-cart-action="update-item-quantity"
                        data-commerce-sku-id={item.variantId}
                        value={item.quantity}
                        min="0"
                        onChange={(e) => {
                          handleQuantityChange(item.variantId, e.target.value);
                        }}
                      />
                    </div>
                  ))}
                </div>
                <div className="w-commerce-commercecartfooter">
                  <div
                    aria-atomic="true"
                    aria-live="polite"
                    className="w-commerce-commercecartlineitem"
                  >
                    <div>Subtotal</div>
                    <div className="w-commerce-commercecartordervalue">
                      $ {subtotal} USD
                    </div>
                  </div>
                  <div>
                    <div
                      data-node-type="commerce-cart-quick-checkout-actions"
                      style={{ display: "none" }}
                    >
                      <a
                        data-node-type="commerce-cart-apple-pay-button"
                        role="button"
                        aria-label="Apple Pay"
                        aria-haspopup="dialog"
                        style={{
                          backgroundImage:
                            "-webkit-named-image(apple-pay-logo-white)",
                          backgroundSize: "100% 50%",
                          backgroundPosition: "50% 50%",
                          backgroundRepeat: "no-repeat",
                        }}
                        className="w-commerce-commercecartapplepaybutton"
                        tabIndex={0}
                      >
                        <div></div>
                      </a>
                      <a
                        data-node-type="commerce-cart-quick-checkout-button"
                        role="button"
                        tabIndex={0}
                        aria-haspopup="dialog"
                        style={{ display: "none" }}
                        className="w-commerce-commercecartquickcheckoutbutton"
                      >
                        <svg
                          className="w-commerce-commercequickcheckoutgoogleicon"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                        >
                          <defs>
                            <polygon
                              id="google-mark-a"
                              points="0 .329 3.494 .329 3.494 7.649 0 7.649"
                            ></polygon>
                            <polygon
                              id="google-mark-c"
                              points=".894 0 13.169 0 13.169 6.443 .894 6.443"
                            ></polygon>
                          </defs>
                          <g fill="none" fillRule="evenodd">
                            <path
                              fill="#4285F4"
                              d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469"
                            ></path>
                            <path
                              fill="#34A853"
                              d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16"
                            ></path>
                            <g transform="translate(0 4)">
                              <mask id="google-mark-b" fill="#fff">
                                <use xlinkHref="#google-mark-a"></use>
                              </mask>
                              <path
                                fill="#FBBC04"
                                d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337"
                                mask="url(#google-mark-b)"
                              ></path>
                            </g>
                            <mask id="google-mark-d" fill="#fff">
                              <use xlinkHref="#google-mark-c"></use>
                            </mask>
                            <path
                              fill="#EA4335"
                              d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291"
                              mask="url(#google-mark-d)"
                            ></path>
                          </g>
                        </svg>
                        <svg
                          className="w-commerce-commercequickcheckoutmicrosofticon"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                        >
                          <g fill="none" fillRule="evenodd">
                            <polygon
                              fill="#F05022"
                              points="7 7 1 7 1 1 7 1"
                            ></polygon>
                            <polygon
                              fill="#7DB902"
                              points="15 7 9 7 9 1 15 1"
                            ></polygon>
                            <polygon
                              fill="#00A4EE"
                              points="7 15 1 15 1 9 7 9"
                            ></polygon>
                            <polygon
                              fill="#FFB700"
                              points="15 15 9 15 9 9 15 9"
                            ></polygon>
                          </g>
                        </svg>
                        <div>Pay with browser.</div>
                      </a>
                    </div>
                    <button
                      type="button"
                      className="w-commerce-commercecartcheckoutbutton primary-button"
                      data-loading-text=""
                      data-node-type="cart-checkout-button"
                      style={{
                        cursor: isCheckoutLoading ? "wait" : "pointer",
                        opacity: isCheckoutLoading ? 0.7 : 1,
                        border: "none",
                        width: "100%",
                        textAlign: "center",
                      }}
                      onClick={handleCheckoutClick}
                      disabled={isCheckoutLoading}
                    >
                      {isCheckoutLoading
                        ? "Processing..."
                        : "Continue to Checkout"}
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-commerce-commercecartemptystate">
                <div aria-label="This cart is empty" aria-live="polite">
                  No items found.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CartModal;