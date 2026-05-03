import { createClient } from "@supabase/supabase-js";

/**
 * Read-only Supabase client for Server Components.
 * Uses the anon key + RLS policies. No cookie handling.
 */
export function createServerClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { auth: { persistSession: false } },
  );
}

/**
 * Privileged Supabase client for Server Actions and Route Handlers.
 * Uses the service_role key — bypasses RLS. NEVER expose to the browser.
 */
export function createAdminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } },
  );
}
