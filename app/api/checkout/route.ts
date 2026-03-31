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

     const finalCheckoutUrl = cart.checkoutUrl.replace(
      "pur-curie.myshopify.com",
      "shop.purcurie.com"
    );

    return NextResponse.json({
      checkoutUrl: cart.checkoutUrl,
      checkoutId: cart.id, 
    });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json({ error: "Checkout failed" }, { status: 500 });
  }

  
} 