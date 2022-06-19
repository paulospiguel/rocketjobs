import { createClient, AuthUser, SupabaseClient } from "@supabase/supabase-js";

import config from "../_config";

const supabaseUrl = config.supabase.url as string;
const supabaseKey = config.supabase.key as string;

export function getSupabase() {
  if (!supabaseUrl || !supabaseKey) {
    throw new Error(
      "Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_KEY env variables"
    );
  }
  return createClient(supabaseUrl, supabaseKey);
}

export const supabase = getSupabase();

export type AuthUserProps = AuthUser;

export type SupabaseClientProps = SupabaseClient;
