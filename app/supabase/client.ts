import { createBrowserClient } from "@supabase/ssr";

const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey: string = process.env.NEXT_PUBLIC_SUPABASE_KEY || "";

let supabase: any | null = null;

export function createClient() {
  if (!supabase) {
    supabase = createBrowserClient(supabaseUrl, supabaseKey);
  }
  return supabase;
}
