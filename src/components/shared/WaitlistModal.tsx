"use client";

import { subscribeAction } from '@/app/actions/subscribe';
import { useEffect, useState } from 'react';
import { useFormStatus } from 'react-dom';

// Submit button component with loading state
function SubmitButton() {
  const { pending } = useFormStatus();
  
  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-[var(--accent)] hover:bg-[var(--accent)]/90 transition-colors text-white rounded-md px-6 py-3 font-medium shadow-sm whitespace-nowrap w-full disabled:opacity-70"
    >
      {pending ? 'Joining...' : 'Join Waitlist'}
    </button>
  );
}

export interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Handle animation states
  useEffect(() => {
    if (isOpen) {
      // Small delay to allow CSS transition to work
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);
  
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

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
    
    // Close modal after 3 seconds on success
    if (result.success) {
      setTimeout(() => {
        onClose();
        // Reset state after closing
        setTimeout(() => {
          setSubmitted(false);
          setEmail('');
          setMessage('');
          setIsError(false);
        }, 300);
      }, 3000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black transition-opacity duration-300 ease-in-out ${
          isVisible ? 'opacity-70' : 'opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      ></div>
      
      {/* Modal */}
      <div 
        className={`bg-white rounded-lg shadow-xl w-full max-w-md relative z-10 transform transition-all duration-300 ease-in-out ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <div className="p-6">
          {!submitted ? (
            <>
              <div className="text-center mb-6">
                <div className="w-12 h-12 rounded-full bg-[var(--accent)]/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-[var(--accent)] font-bold text-xl">%</span>
                </div>
                <h3 className="text-2xl font-bold text-[var(--primary)]">Join Our Waitlist</h3>
                <p className="text-[var(--foreground)]/80 mt-2">
                  Be the first to know when we launch and receive 20% off your first order!
                </p>
              </div>
              
              <form action={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--primary)]">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    className="mt-1 w-full px-4 py-3 rounded-md border border-[var(--primary)]/20 focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/50"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                {isError && (
                  <p className="text-sm text-red-500">{message}</p>
                )}
                
                <SubmitButton />
                
                <p className="text-xs text-[var(--foreground)]/60 text-center mt-3">
                  We&apos;ll only use your email to notify you about our launch and provide your 20% discount code.
                </p>
              </form>
            </>
          ) : (
            <div className="text-center py-6 animate-fadeIn">
              <div className="w-16 h-16 bg-[var(--accent)]/10 rounded-full mx-auto flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-[var(--primary)] mb-2">You&apos;re on the waitlist!</h4>
              <p className="text-[var(--foreground)]/80">
                {message || "Thanks for joining. We&apos;ll send your 20% discount code when we launch."}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 