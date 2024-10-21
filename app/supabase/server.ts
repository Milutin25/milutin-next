import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";

const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey: string = process.env.NEXT_PUBLIC_SUPABASE_KEY || "";

export function createClient() {
    const cookieStore = cookies(); 

    return createServerClient(
        supabaseUrl,
        supabaseKey,
        {
            cookies: {
              getAll() {
                return cookieStore.getAll()
              },
              setAll(cookiesToSet) {
                try {
                  cookiesToSet.forEach(({ name, value, options }) =>
                    cookieStore.set(name, value, options)
                  )
                } catch {
                  // The `setAll` method was called from a Server Component.
                  // This can be ignored if you have middleware refreshing
                  // user sessions.
                }
              },
            },
          }
        )
      }