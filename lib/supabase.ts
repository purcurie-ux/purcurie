// lib/supabase.ts
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type ChatSession = {
  id: string;
  customer_name: string | null;
  customer_email: string | null;
  customer_phone: string | null;
  initial_query: string;
  status: "waiting" | "active" | "closed";
  created_at: string;
  connected_at: string | null;
  closed_at: string | null;
};

export type ChatMessage = {
  id: string;
  session_id: string;
  role: "customer" | "admin";
  content: string;
  created_at: string;
  media_url?: string | null;
  media_type?: string | null;
};