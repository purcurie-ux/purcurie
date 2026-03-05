// app/api/check-order/route.ts
import { NextRequest, NextResponse } from "next/server";

const SHOPIFY_STORE = process.env.SHOPIFY_STORE_DOMAIN!;
const SHOPIFY_TOKEN = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN!;

export async function POST(req: NextRequest) {
  const { checkoutId } = await req.json();

  if (!checkoutId) {
    return NextResponse.json({ completed: false });
  }

  const query = `
    query getCheckout($id: ID!) {
      node(id: $id) {
        ... on Checkout {
          completedAt
          order {
            id
          }
        }
      }
    }
  `;

  try {
    const res = await fetch(
      `https://${SHOPIFY_STORE}/api/2024-01/graphql.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Storefront-Access-Token": SHOPIFY_TOKEN,
        },
        body: JSON.stringify({ query, variables: { id: checkoutId } }),
      }
    );

    const data = await res.json();
    const checkout = data?.data?.node;

    // completedAt is set when payment is confirmed
    const completed = !!checkout?.completedAt;
    return NextResponse.json({ completed });
  } catch (err) {
    console.error("check-order error:", err);
    return NextResponse.json({ completed: false });
  }
}