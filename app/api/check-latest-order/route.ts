import { NextRequest, NextResponse } from "next/server";
import { recentOrders } from "@/lib/orderStore";

export async function GET(req: NextRequest) {
  const fiveMinutesAgo = Date.now() - 5 * 60 * 1000;
  
  // Check if any order was received in last 5 minutes
  const hasRecentOrder = recentOrders.some(
    (timestamp) => timestamp > fiveMinutesAgo
  );

  if (hasRecentOrder) {
    // Remove the oldest entry
    recentOrders.shift();
  }

  return NextResponse.json({ confirmed: hasRecentOrder });
}