import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, rating, title, reviewBody, productId } = body;

    // Clean the Shopify ID (removes 'gid://shopify/Product/')
    const numericId = productId.split("/").pop();

    const response = await fetch("https://judge.me/api/v1/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        shop_domain: process.env.NEXT_PUBLIC_JUDGEME_SHOP_DOMAIN,
        platform: "shopify",
        id: numericId,
        name,
        email,
        rating,
        title,
        body: reviewBody,
      }),
    });

    if (!response.ok) throw new Error("Judge.me API error");

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 });
  }
}