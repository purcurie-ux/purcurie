import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { lineItems, discountCode } = await request.json();

    const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!;
    const token = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN!;
    const shopifyUrl = `https://${domain}/api/2024-01/graphql.json`;

    // This mutation creates a temporary cart just to calculate the final cost
    const mutation = `
      mutation cartCreate($input: CartInput!) {
        cartCreate(input: $input) {
          cart {
            cost {
              subtotalAmount { amount }
              totalAmount { amount }
            }
            discountCodes {
              applicable
              code
            }
          }
          userErrors { message }
        }
      }
    `;

    const variables: any = {
      input: {
        lines: lineItems.map((item: any) => ({
          merchandiseId: item.variantId,
          quantity: item.quantity,
        })),
      },
    };

    if (discountCode) {
      variables.input.discountCodes = [discountCode];
    }

    const response = await fetch(shopifyUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": token,
      },
      body: JSON.stringify({ query: mutation, variables }),
    });

    const data = await response.json();
    const cart = data?.data?.cartCreate?.cart;
    const discountInfo = cart?.discountCodes?.[0];

    // Check if Shopify accepted the code
    if (discountCode && !discountInfo?.applicable) {
      return NextResponse.json({ error: "Invalid discount code" }, { status: 400 });
    }

    return NextResponse.json({
      subtotal: cart.cost.subtotalAmount.amount,
      total: cart.cost.totalAmount.amount,
    });

  } catch (error) {
    return NextResponse.json({ error: "Failed to validate" }, { status: 500 });
  }
}