import 'server-only';

import type { Database } from '@theideaiq/database/types';
import { createClient as createSupabaseClient } from '@supabase/supabase-js';
import { env } from '@theideaiq/env';

/**
 * createAdminClient
 *
 * @description Standardized execution for createAdminClient.
 */
export function createAdminClient() {
  const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL;
  // Note: We use the private server-side key, NOT the public anon key
  const serviceRoleKey = env.SUPABASE_SERVICE_ROLE_KEY;

  // ⚠️ DANGER: This client bypasses all Row Level Security (RLS).
  // It must ONLY be used in secure server environments (Webhooks, API Routes, Cron Jobs).
  return createSupabaseClient<Database>(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}
