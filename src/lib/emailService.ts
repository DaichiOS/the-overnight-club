import { isSupabaseConfigured, supabase } from "./supabase";

// Interface for email subscription data
export interface EmailSubscription {
  email: string;
  createdAt?: string;
}

// In-memory storage for development/fallback
const subscribedEmails = new Set<string>();

/**
 * Adds an email to the waitlist table
 * @param email The email to add to the waitlist
 * @returns Object with success flag and message or error
 */
export async function subscribeEmail(email: string) {
  try {
    // If Supabase is not configured, use in-memory storage (for dev/testing)
    if (!isSupabaseConfigured() || !supabase) {
      console.warn(
        "Supabase is not configured. Using in-memory storage for waitlist."
      );

      if (subscribedEmails.has(email)) {
        return {
          success: false,
          message: "This email is already on our waitlist.",
        };
      }

      subscribedEmails.add(email);
      return {
        success: true,
        message:
          "You're on the waitlist! You'll receive your 20% discount code when we launch.",
      };
    }

    // Supabase is configured, proceed normally
    // Check if email already exists to prevent duplicates
    const { data: existingSubscriber } = await supabase
      .from("waitlist")
      .select("email")
      .eq("email", email)
      .single();

    if (existingSubscriber) {
      return {
        success: false,
        message: "This email is already on our waitlist.",
      };
    }

    // Add email to waitlist table
    const { error } = await supabase
      .from("waitlist")
      .insert([{ email, created_at: new Date().toISOString() }]);

    if (error) throw error;

    return {
      success: true,
      message:
        "You're on the waitlist! You'll receive your 20% discount code when we launch.",
    };
  } catch (error) {
    console.error("Error adding to waitlist:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
}
