import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const waybill = searchParams.get("waybill");

  // 1. Verify we have an AWB number
  if (!waybill) {
    return NextResponse.json({ error: "Tracking ID (AWB) is required" }, { status: 400 });
  }

  // 2. Get the secret token
  const token = process.env.DELHIVERY_API_KEY;
  if (!token) {
    return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
  }

  try {
    // 3. Call Delhivery's Tracking API
    const url = `https://track.delhivery.com/api/v1/packages/json/?waybill=${waybill}`;
    
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Authorization": `Token ${token}`,
        "Content-Type": "application/json",
      },
      // Ensure we don't cache this so users always see live data
      cache: "no-store" 
    });

    const data = await response.json();
    return NextResponse.json(data);

  } catch (error) {
    console.error("Delhivery Tracking Error:", error);
    return NextResponse.json({ error: "Failed to fetch tracking data" }, { status: 500 });
  }
}