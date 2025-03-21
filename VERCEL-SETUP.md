# Vercel Environment Setup

This document explains how to set up the required environment variables for the project on Vercel.

## Required Environment Variables

The application requires the following environment variables to be set in your Vercel project:

1. `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
2. `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anonymous key

## Setting Up Environment Variables in Vercel

1. Log in to your [Vercel dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to the "Settings" tab
4. Click on "Environment Variables" in the left sidebar
5. Add the environment variables listed above:
   - Enter `NEXT_PUBLIC_SUPABASE_URL` as the key and your Supabase URL as the value
   - Enter `NEXT_PUBLIC_SUPABASE_ANON_KEY` as the key and your Supabase anonymous key as the value
6. Click "Save" to save your environment variables

## Existing Values

If you need the existing values for these environment variables, you can find them in your local `.env.local` file:

```
NEXT_PUBLIC_SUPABASE_URL=https://bxdauyiauhwadwdvhtor.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ4ZGF1eWlhdWh3YWR3ZHZodG9yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg3MTcyMTgsImV4cCI6MjA1NDI5MzIxOH0.PpksSzwVTr0htzQuviZmx2ptR5v21RUj5jhLJogKeyA
```

## After Deployment

After setting up the environment variables and redeploying your project, the waitlist form should work correctly. If you still experience issues, please check the Vercel logs for more information.
