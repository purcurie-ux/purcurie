import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const handle = searchParams.get("handle");

  if (!handle) return NextResponse.json({ error: "Missing handle" }, { status: 400 });

  const shop = process.env.NEXT_PUBLIC_JUDGEME_SHOP_DOMAIN;
  const apiKey = process.env.JUDGEME_PRIVATE_KEY;

  const res = await fetch(
    `https://judge.me/api/v1/reviews?api_token=${apiKey}&shop_domain=${shop}&product_handle=${handle}&per_page=20`,
    { next: { revalidate: 60 } }
  );

  const data = await res.json();
  return NextResponse.json(data);
}