import WaitlistForm from "@/components/waitlist/WaitlistForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join the Waitlist | The Overnight Club",
  description: "Join our waitlist to be the first to know when we launch and receive 20% off your first order of premium overnight oats.",
};

export default function WaitlistPage() {
  return (
    <main className="py-16 sm:py-20 md:py-24 bg-[var(--background)]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--primary)] mb-4">
              Join Our Waitlist
            </h1>
            <div className="w-20 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
            <p className="text-lg text-[var(--foreground)]/80 max-w-2xl mx-auto">
              We&apos;re preparing to launch our premium overnight oats soon! Join our waitlist to be the first to know when we launch and receive 20% off your first order.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 border border-[var(--secondary)]">
            <WaitlistForm />
          </div>
          
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-[var(--secondary)]">
              <div className="w-12 h-12 rounded-full bg-[var(--accent)]/10 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--primary)] mb-2">Early Access</h3>
              <p className="text-[var(--foreground)]/70 text-sm">
                Be the first to experience our delicious overnight oats when we launch.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-[var(--secondary)]">
              <div className="w-12 h-12 rounded-full bg-[var(--accent)]/10 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--primary)] mb-2">Exclusive Discount</h3>
              <p className="text-[var(--foreground)]/70 text-sm">
                Receive a 20% discount code for your first order as a thank you.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-[var(--secondary)]">
              <div className="w-12 h-12 rounded-full bg-[var(--accent)]/10 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[var(--primary)] mb-2">Launch Updates</h3>
              <p className="text-[var(--foreground)]/70 text-sm">
                Stay informed about our launch date and be the first to know when we&apos;re ready.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 