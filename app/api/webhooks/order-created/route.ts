import { NextRequest, NextResponse } from "next/server";
import { markConfirmed } from "@/lib/orderStore";

export async function POST(req: NextRequest) {
  try {
    const order = await req.json();
    const checkoutToken = order?.checkout_token;

    if (checkoutToken) {
      markConfirmed(checkoutToken);
      console.log("✅ Order confirmed for token:", checkoutToken);
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    return NextResponse.json({ error: "Webhook failed" }, { status: 500 });
  }
}