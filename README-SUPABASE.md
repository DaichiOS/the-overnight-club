# Supabase Integration Guide for The Overnight Club

This guide will help you set up Supabase for email waitlist functionality.

## Prerequisites

1. A Supabase account and project with an existing `waitlist` table
2. The `waitlist` table should have the following structure:
   - `id` (bigint)
   - `created_at` (timestamp with time zone)
   - `email` (text)

## Setup Steps

### 1. Get Your Supabase Credentials

1. In your Supabase dashboard, go to Project Settings > API
2. Copy the Project URL and public anon key
3. Update your `.env.local` file with these values:

```
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### 2. Test the Integration

1. Start your Next.js development server:

```
npm run dev
```

2. Navigate to the homepage and test the email waitlist form
3. Verify in your Supabase dashboard that new emails are being added to the waitlist table

## Security Considerations

- Ensure your `waitlist` table has appropriate Row Level Security (RLS) policies
- Consider adding the following if not already present:
  - Only anonymous insertions should be allowed through the public API
  - Reading waitlist data should require authentication

## Troubleshooting

If you encounter any issues with the Supabase integration:

1. Check your Supabase credentials in the `.env.local` file
2. Verify that the waitlist table is accessible from your application
3. Check the browser console and server logs for any errors
4. Make sure your Supabase project is active and running
