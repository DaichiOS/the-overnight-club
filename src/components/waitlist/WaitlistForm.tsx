"use client";

import { subscribeAction } from '@/app/actions/subscribe';
import { useState } from 'react';
import { useFormStatus } from 'react-dom';

// Submit button component with loading state
function SubmitButton() {
  const { pending } = useFormStatus();
  
  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-[var(--accent)] hover:bg-[var(--accent)]/90 transition-colors text-white rounded-md px-6 py-3.5 font-medium shadow-sm whitespace-nowrap w-full disabled:opacity-70"
    >
      {pending ? 'Joining...' : 'Join the Waitlist'}
    </button>
  );
}

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  
  const handleSubmit = async (formData: FormData) => {
    // Server action handles the submission
    const result = await subscribeAction(formData);
    
    if (result.success) {
      setSubmitted(true);
      setIsError(false);
    } else {
      setIsError(true);
    }
    
    setMessage(result.message);
    
    // Reset form after 5 seconds on success
    if (result.success) {
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
        setMessage('');
      }, 7000);
    }
  };
  
  return (
    <div>
      {!submitted ? (
        <>
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-[var(--primary)] mb-3">
              Be the First to Experience Premium Overnight Oats
            </h2>
            <p className="text-[var(--foreground)]/70">
              Join our waitlist to receive updates and get 20% off your first order when we launch.
            </p>
          </div>
          
          <form action={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label htmlFor="waitlist-email" className="block text-sm font-medium text-[var(--primary)]">
                Email Address
              </label>
              <input
                type="email"
                id="waitlist-email"
                name="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3.5 rounded-md border border-[var(--secondary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/50"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            {isError && (
              <div className="bg-red-50 border-l-4 border-red-400 p-3 rounded">
                <p className="text-sm text-red-700">{message}</p>
              </div>
            )}
            
            <SubmitButton />
            
            <p className="text-xs text-[var(--foreground)]/60 text-center">
              By joining our waitlist, you agree to receive email updates about our launch. 
              We&apos;ll never share your information, and you can unsubscribe anytime.
            </p>
          </form>
        </>
      ) : (
        <div className="text-center py-6 animate-fadeIn">
          <div className="w-16 h-16 bg-[var(--accent)]/10 rounded-full mx-auto flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-[var(--primary)] mb-3">You&apos;re on the waitlist!</h2>
          <p className="text-lg text-[var(--foreground)]/80 mb-1">
            {message || "Thanks for joining our waitlist."}
          </p>
          <p className="text-[var(--foreground)]/70">
            We&apos;ll send your 20% discount code as soon as we launch.
          </p>
        </div>
      )}
    </div>
  );
} 