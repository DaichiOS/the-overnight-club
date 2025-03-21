import { createClient } from "@supabase/supabase-js";

// These will be loaded from environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Check if environment variables are properly set
const isMissingCredentials = !supabaseUrl || !supabaseAnonKey;

// Create a single supabase client for interacting with your database
export const supabase = isMissingCredentials
  ? null
  : createClient(supabaseUrl, supabaseAnonKey);

// Function to check if Supabase is properly configured
export function isSupabaseConfigured() {
  return !!supabase;
}
