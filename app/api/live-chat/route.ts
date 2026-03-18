// app/api/live-chat/route.ts
import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // service role for admin ops
);

// POST /api/live-chat — create a new session
export async function POST(req: NextRequest) {
   const { initial_query, customer_name, customer_email, customer_phone } = await req.json();
  const { data, error } = await supabase
    .from("chat_sessions")
    .insert({ initial_query, customer_name, customer_email, customer_phone, status: "waiting" })
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ session: data });
}

// PATCH /api/live-chat — update session status (admin)
export async function PATCH(req: NextRequest) {
  const { session_id, status } = await req.json();

  const updates: Record<string, unknown> = { status };
  if (status === "active") updates.connected_at = new Date().toISOString();
  if (status === "closed") updates.closed_at = new Date().toISOString();

  const { data, error } = await supabase
    .from("chat_sessions")
    .update(updates)
    .eq("id", session_id)
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ session: data });
}

// GET /api/live-chat — list all sessions (admin)
export async function GET() {
  const { data, error } = await supabase
    .from("chat_sessions")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });
  return NextResponse.json({ sessions: data });
}