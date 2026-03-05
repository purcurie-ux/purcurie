import { NextRequest, NextResponse } from "next/server";
import { confirmedTokens } from "@/lib/orderStore";

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get("token");
  if (!token) return NextResponse.json({ confirmed: false });

  const confirmed = confirmedTokens.has(token);
  if (confirmed) confirmedTokens.delete(token);

  return NextResponse.json({ confirmed });
}