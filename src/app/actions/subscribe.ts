"use server";

import { subscribeEmail } from "@/lib/emailService";

/**
 * Server action to handle email subscription
 * @param formData The form data containing the email
 * @returns Response with success state and message
 */
export async function subscribeAction(formData: FormData) {
  const email = formData.get("email")?.toString();

  if (!email) {
    return {
      success: false,
      message: "Email is required",
    };
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: "Please enter a valid email address",
    };
  }

  // Call the subscription service
  return await subscribeEmail(email);
}
