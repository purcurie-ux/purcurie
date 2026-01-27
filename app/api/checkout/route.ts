// // app/api/checkout/route.ts

// import { NextResponse } from "next/server";
// import { shopifyFetch } from "@/lib/shopify";

// export async function POST(request: Request) {
//   try {
//     const { lineItems } = await request.json();

//     const mutation = `
//       mutation checkoutCreate($input: CheckoutCreateInput!) {
//         checkoutCreate(input: $input) {
//           checkout {
//             id
//             webUrl
//           }
//           checkoutUserErrors {
//             code
//             field
//             message
//           }
//         }
//       }
//     `;

//     const variables = {
//       input: {
//         lineItems: lineItems.map((item: any) => ({
//           variantId: item.variantId,
//           quantity: item.quantity,
//         })),
//       },
//     };

//     const data = await shopifyFetch(mutation, variables);

//     if (data?.checkoutCreate?.checkoutUserErrors?.length > 0) {
//       return NextResponse.json(
//         { error: data.checkoutCreate.checkoutUserErrors[0].message },
//         { status: 400 }
//       );
//     }

//     return NextResponse.json({
//       checkoutUrl: data?.checkoutCreate?.checkout?.webUrl,
//     });
//   } catch (error) {
//     console.error("Checkout error:", error);
//     return NextResponse.json(
//       { error: "Failed to create checkout" },
//       { status: 500 }
//     );
//   }
// }






// app/api/checkout/route.ts

// import { NextResponse } from "next/server";

// export async function POST(request: Request) {
//   try {
//     const { lineItems } = await request.json();

//     // Check if Shopify credentials are configured
//     const shopifyUrl = process.env.NEXT_PUBLIC_SHOPIFY_URL;
//     const shopifyToken = process.env.NEXT_PUBLIC_SHOPIFY_TOKEN;

//     if (!shopifyUrl || !shopifyToken) {
//       console.error("Shopify credentials not configured");
//       return NextResponse.json(
//         { 
//           error: "Store configuration error. Please contact support.",
//           details: "Shopify credentials are missing"
//         },
//         { status: 500 }
//       );
//     }

//     const mutation = `
//       mutation checkoutCreate($input: CheckoutCreateInput!) {
//         checkoutCreate(input: $input) {
//           checkout {
//             id
//             webUrl
//           }
//           checkoutUserErrors {
//             code
//             field
//             message
//           }
//         }
//       }
//     `;

//     const variables = {
//       input: {
//         lineItems: lineItems.map((item: any) => ({
//           variantId: item.variantId,
//           quantity: item.quantity,
//         })),
//       },
//     };

//     const response = await fetch(shopifyUrl, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "X-Shopify-Storefront-Access-Token": shopifyToken,
//       },
//       body: JSON.stringify({ query: mutation, variables }),
//     });

//     if (!response.ok) {
//       throw new Error(`Shopify API error: ${response.status}`);
//     }

//     const data = await response.json();

//     if (data?.errors) {
//       console.error("GraphQL errors:", data.errors);
//       return NextResponse.json(
//         { error: "Failed to create checkout", details: data.errors },
//         { status: 400 }
//       );
//     }

//     if (data?.data?.checkoutCreate?.checkoutUserErrors?.length > 0) {
//       const errorMessage = data.data.checkoutCreate.checkoutUserErrors[0].message;
//       console.error("Checkout user errors:", errorMessage);
//       return NextResponse.json(
//         { error: errorMessage },
//         { status: 400 }
//       );
//     }

//     const checkoutUrl = data?.data?.checkoutCreate?.checkout?.webUrl;

//     if (!checkoutUrl) {
//       return NextResponse.json(
//         { error: "Checkout URL not returned from Shopify" },
//         { status: 500 }
//       );
//     }

//     return NextResponse.json({
//       checkoutUrl: checkoutUrl,
//     });
//   } catch (error) {
//     console.error("Checkout error:", error);
//     return NextResponse.json(
//       { 
//         error: "Failed to create checkout",
//         details: error instanceof Error ? error.message : "Unknown error"
//       },
//       { status: 500 }
//     );
//   }
// }

// app/api/checkout/route.ts

// app/api/checkout/route.ts

// import { NextResponse } from "next/server";

// export async function POST(request: Request) {
//   try {
//     const { lineItems } = await request.json();

//     // Check if Shopify credentials are configured
//     const shopifyUrl = 'https://pur-curie.myshopify.com/api/2024-01/graphql.json';
//     const shopifyToken = process.env.NEXT_PUBLIC_SHOPIFY_TOKEN;

//     if (!shopifyUrl || !shopifyToken) {
//       console.error("Shopify credentials not configured");
//       return NextResponse.json(
//         { 
//           error: "Store configuration error. Please contact support.",
//           details: "Shopify credentials are missing"
//         },
//         { status: 500 }
//       );
//     }

//     const mutation = `
//       mutation checkoutCreate($input: CheckoutCreateInput!) {
//         checkoutCreate(input: $input) {
//           checkout {
//             id
//             webUrl
//           }
//           checkoutUserErrors {
//             code
//             field
//             message
//           }
//         }
//       }
//     `;

//     const variables = {
//       input: {
//         lineItems: lineItems.map((item: any) => ({
//           variantId: item.variantId,
//           quantity: item.quantity,
//         })),
//       },
//     };

//     const response = await fetch(shopifyUrl, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "X-Shopify-Storefront-Access-Token": shopifyToken,
//       },
//       body: JSON.stringify({ query: mutation, variables }),
//     });

//     if (!response.ok) {
//       throw new Error(`Shopify API error: ${response.status}`);
//     }

//     const data = await response.json();

//     if (data?.errors) {
//       console.error("GraphQL errors:", data.errors);
//       return NextResponse.json(
//         { error: "Failed to create checkout", details: data.errors },
//         { status: 400 }
//       );
//     }

//     if (data?.data?.checkoutCreate?.checkoutUserErrors?.length > 0) {
//       const errorMessage = data.data.checkoutCreate.checkoutUserErrors[0].message;
//       console.error("Checkout user errors:", errorMessage);
//       return NextResponse.json(
//         { error: errorMessage },
//         { status: 400 }
//       );
//     }

//     const checkoutUrl = data?.data?.checkoutCreate?.checkout?.webUrl;

//     if (!checkoutUrl) {
//       return NextResponse.json(
//         { error: "Checkout URL not returned from Shopify" },
//         { status: 500 }
//       );
//     }

//     return NextResponse.json({
//       checkoutUrl: checkoutUrl,
//     });
//   } catch (error) {
//     console.error("Checkout error:", error);
//     return NextResponse.json(
//       { 
//         error: "Failed to create checkout",
//         details: error instanceof Error ? error.message : "Unknown error"
//       },
//       { status: 500 }
//     );
//   }
// }


import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { lineItems } = await request.json();

    console.log("LINE ITEMS RECEIVED:", lineItems);

    // const domain = process.env.SHOPIFY_DOMAIN!;
    // const token = process.env.SHOPIFY_STOREFRONT_TOKEN!;
    // const version = process.env.SHOPIFY_API_VERSION!;
    const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!;
    const token = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN!;
    const version = process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION!;

    if (!domain || !token || !version) {
      return NextResponse.json(
        { error: "Shopify credentials missing" },
        { status: 500 }
      );
    }

    const shopifyUrl =
      "https://pur-curie.myshopify.com/api/2024-01/graphql.json";

    const mutation = `
      mutation cartCreate($input: CartInput!) {
        cartCreate(input: $input) {
          cart {
            id
            checkoutUrl
          }
          userErrors {
            message
          }
        }
      }
    `;

    const variables = {
      input: {
        lines: lineItems.map((item: any) => ({
          merchandiseId: item.variantId, // ✅ Variant GID
          quantity: item.quantity,
        })),
      },
    };

    const response = await fetch(shopifyUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": token,
      },
      body: JSON.stringify({
        query: mutation,
        variables,
      }),
    });

    const data = await response.json();

    if (data?.errors) {
      console.error("GraphQL errors:", data.errors);
      return NextResponse.json({ error: data.errors }, { status: 400 });
    }

    const cart = data?.data?.cartCreate?.cart;

    if (!cart?.checkoutUrl) {
      return NextResponse.json(
        { error: "Failed to create cart" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      checkoutUrl: cart.checkoutUrl,
    });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json({ error: "Checkout failed" }, { status: 500 });
  }
} 