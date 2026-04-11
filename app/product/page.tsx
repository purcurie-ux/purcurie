// // // // import PageTitle from "@/components/product/PageTitle";
// // // // import ProductsList from "@/components/product/ProductsList";


// // // // export default function Product() {
// // // //     return (
// // // //         <>
// // // //             <PageTitle />
// // // //             <ProductsList />
// // // //         </>
// // // //     )
// // // // }



// // // import PageTitle from "@/components/product/PageTitle";
// // // import ProductsList from "@/components/product/ProductsList";
// // // import { getPaginatedProducts } from "@/lib/getPaginatedProducts";

// // // interface Props {
// // //   searchParams: { cursor?: string };
// // // }

// // // export default async function Product({ searchParams }: Props) {
// // //   const cursor = searchParams.cursor;

// // //   const data = await getPaginatedProducts(9, cursor);

// // //   const products = data.edges.map((e: any) => {
// // //     const image = e.node.images.edges[0]?.node;

// // //     return {
// // //       id: e.node.id,
// // //       name: e.node.title,
// // //       slug: e.node.handle,
// // //       price: `$ ${e.node.priceRange.minVariantPrice.amount} ${e.node.priceRange.minVariantPrice.currencyCode}`,
// // //       image: image?.url || "",
// // //       srcset: image?.url || "",
// // //     };
// // //   });

// // //   return (
// // //     <>
// // //       <PageTitle />

// // //       <ProductsList
// // //         products={products}
// // //         hasNextPage={data.pageInfo.hasNextPage}
// // //         nextCursor={data.pageInfo.endCursor}
// // //       />
// // //     </>
// // //   );
// // // }





// // import PageTitle from "@/components/product/PageTitle";
// // import ProductsList from "@/components/product/ProductsList";
// // import { getPaginatedProducts } from "@/lib/getPaginatedProducts";

// // interface Props {
// //   searchParams: Promise<{ cursor?: string }>;
// // }

// // export default async function Product({ searchParams }: Props) {
// //   // 👇 REQUIRED FOR NEXT 15+
// //   const params = await searchParams;
// //   const cursor = params.cursor;

// //   const data = await getPaginatedProducts(9, cursor);

// //   const products = data.edges.map((e: any) => {
// //     const image = e.node.images.edges[0]?.node;

// //     return {
// //       id: e.node.id,
// //       name: e.node.title,
// //       slug: e.node.handle,
// //       price: `$ ${e.node.priceRange.minVariantPrice.amount} ${e.node.priceRange.minVariantPrice.currencyCode}`,
// //       image: image?.url || "",
// //       srcset: image?.url || "",
// //     };
// //   });

// //   return (
// //     <>
// //       <PageTitle />

// //       <ProductsList
// //         products={products}
// //         hasNextPage={data.pageInfo.hasNextPage}
// //         nextCursor={data.pageInfo.endCursor}
// //       />
// //     </>
// //   );
// // }





// import PageTitle from "@/components/product/PageTitle";
// import ProductsList from "@/components/product/ProductsList";
// import { getPaginatedProducts } from "@/lib/getPaginatedProducts";

// interface Props {
//   searchParams: Promise<{ cursor?: string }>;
// }

// export default async function Product({ searchParams }: Props) {
//   const params = await searchParams;
//   const cursor = params.cursor;

//   const data = await getPaginatedProducts(9, cursor);

//   const products = data.edges.map((e: any) => {
//     const image = e.node.images.edges[0]?.node;

//     return {
//       id: e.node.id,
//       name: e.node.title,
//       slug: e.node.handle,
//       price: `$ ${e.node.priceRange.minVariantPrice.amount} ${e.node.priceRange.minVariantPrice.currencyCode}`,
//       image: image?.url || "",
//       srcset: image?.url || "",
//     };
//   });

//   return (
//     <>
//       <PageTitle />

//       <ProductsList
//         products={products}
//         hasNextPage={data.pageInfo.hasNextPage}
//         nextCursor={data.pageInfo.endCursor}
//         hasPrevPage={data.pageInfo.hasPreviousPage}
//         prevCursor={data.pageInfo.startCursor}
//       />
//     </>
//   );
// }




import PageTitle from "@/components/product/PageTitle";
import ProductsList from "@/components/product/ProductsList";
import { getPaginatedProducts } from "@/lib/getPaginatedProducts";

// ✅ FIX: Added missing 'interface' and 'Props' name
interface Props {
  searchParams: Promise<{
    cursor?: string;
    direction?: "next" | "prev";
  }>;
}

export default async function Product({ searchParams }: Props) {
  // ✅ FIX: Await searchParams before accessing properties
  const params = await searchParams;

  const cursor = params.cursor;
  const direction = params.direction ?? "next";

  // Fetch 9 products based on pagination cursor
  const data = await getPaginatedProducts(9, cursor, direction);

  const products = data.edges.map((e: any) => {
    const node = e.node;
    const image = node.images.edges[0]?.node;

    return {
      id: node.id,
      name: node.title,
      slug: node.handle,
      // ✅ OPTIMIZATION: Clean up price strings (e.g., 1200 instead of 1200.0)
      price: `₹ ${parseFloat(node.priceRange.minVariantPrice.amount).toFixed(0)} ${node.priceRange.minVariantPrice.currencyCode}`,
      image: image?.url || "",
      srcset: image?.url || "",
    };
  });

  return (
    <>
      <PageTitle />

      <ProductsList
        products={products}
        hasNextPage={data.pageInfo.hasNextPage}
        hasPrevPage={data.pageInfo.hasPreviousPage}
        nextCursor={data.pageInfo.endCursor}
        prevCursor={data.pageInfo.startCursor}
      />
    </>
  );
}