import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const pixelId = "2097988351056315";
  const accessToken = "YOUR_ACCESS_TOKEN";

  const url = `https://graph.facebook.com/v18.0/${pixelId}/events?access_token=${accessToken}`;

  const payload = {
    data: [
      {
        event_name: body.event_name,
        event_time: Math.floor(Date.now() / 1000),
        action_source: "website",
        event_source_url: body.url,
        user_data: {
          client_user_agent: req.headers.get("user-agent"),
        },
        custom_data: body.custom_data,
      },
    ],
  };

  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  return NextResponse.json({ success: true });
}