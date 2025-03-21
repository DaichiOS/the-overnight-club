"use client";

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function IntroSection() {
  const contentRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  // Simple animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.2 });
    
    const content = contentRef.current;
    if (content) {
      observer.observe(content);
    }
    
    return () => {
      if (content) {
        observer.unobserve(content);
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send this to your API/backend
    console.log('Email submitted:', email);
    setSubmitted(true);
    // Reset form after 5 seconds for demo purposes
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 5000);
  };
  
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Natural texture background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-[#e0c9a6]"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-[#d4b892]"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6">
        <div 
          ref={contentRef}
          className="max-w-5xl mx-auto rounded-2xl opacity-0 transform translate-y-4 transition-all duration-700"
        >
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Image column - Mason jar image - Fixed for mobile */}
            <div className="w-full md:w-2/5 flex justify-center md:justify-end md:order-none mb-6 md:mb-0">
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] drop-shadow-xl transition-transform duration-700 hover:scale-105">
                <Image 
                  src="/oatjar1.png" 
                  alt="Overnight oats in a mason jar" 
                  fill
                  className="object-contain scale-125"
                />
              </div>
            </div>
            
            {/* Content column */}
            <div className="w-full md:w-3/5 bg-[#f8f5ef] rounded-2xl p-6 sm:p-8 md:p-10 border border-primary/10 shadow-sm">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 sm:mb-6 text-center md:text-left">
                Grab, Go, and <span className="text-accent">Glow</span>
              </h2>
              
              <div className="w-16 h-0.5 bg-accent mb-4 sm:mb-6 mx-auto md:mx-0"></div>
              
              <h3 className="text-lg sm:text-xl md:text-2xl text-accent/90 font-medium mb-4 sm:mb-6 text-center md:text-left">
                Your Instant Breakfast Boost!
              </h3>
              
              <p className="text-base sm:text-lg text-foreground/80 leading-relaxed mb-6 sm:mb-8 text-center md:text-left">
                Enjoy a quick, nutritious start with our overnight oats—packed with fibre, protein, and essential nutrients to keep you energized and satisfied throughout the day.
              </p>
              
              {/* Natural food benefits */}
              <div className="space-y-3 mb-6 sm:mb-8">
                <div className="flex items-center">
                  <div className="min-w-[8px] h-2 rounded-full bg-accent mr-3"></div>
                  <p className="text-foreground/80 text-sm sm:text-base">Ready in seconds — just grab and enjoy</p>
                </div>
                <div className="flex items-center">
                  <div className="min-w-[8px] h-2 rounded-full bg-accent mr-3"></div>
                  <p className="text-foreground/80 text-sm sm:text-base">Premium ingredients for authentic flavour</p>
                </div>
                <div className="flex items-center">
                  <div className="min-w-[8px] h-2 rounded-full bg-accent mr-3"></div>
                  <p className="text-foreground/80 text-sm sm:text-base">Locally sourced, sustainable packaging</p>
                </div>
              </div>
              
              {/* Email signup with discount offer */}
              <div className="bg-white rounded-lg p-4 sm:p-5 border border-accent/20 shadow-sm">
                {!submitted ? (
                  <>
                    <div className="flex flex-col sm:flex-row items-center mb-4 text-center sm:text-left">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-2 sm:mb-0 sm:mr-3">
                        <span className="text-accent font-bold text-lg">%</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-primary">BE THE FIRST TO TRY</h4>
                        <p className="text-sm text-foreground/70">We&apos;ll let you know when we start delivering and give you 20% off your first order!</p>
                      </div>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <div className="flex flex-col sm:flex-row gap-3">
                        <input
                          type="email"
                          placeholder="Your email address"
                          className="flex-1 px-4 py-3 rounded-md border border-primary/20 focus:outline-none focus:ring-2 focus:ring-accent/50"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        <button
                          type="submit"
                          className="bg-accent hover:bg-accent/90 transition-colors text-white rounded-md px-6 py-3 font-medium shadow-sm whitespace-nowrap"
                        >
                          Join & Save 20%
                        </button>
                      </div>
                      <p className="text-xs text-foreground/60 text-center sm:text-left">
                        Be among the first to experience our delicious and nutritious overnight oats.
                        <br className="hidden sm:block" />We&apos;ll notify you at launch with your exclusive discount code.
                      </p>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-4">
                    <div className="w-16 h-16 bg-accent/10 rounded-full mx-auto flex items-center justify-center mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-primary mb-2">You&apos;re on the list!</h4>
                    <p className="text-foreground/80">
                      Thanks for joining our founding members. We&apos;ll send your 20% discount when we launch.
                    </p>
                    <p className="text-sm text-foreground/60 mt-3">
                      We can&apos;t wait to share our delicious oats with you!
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .animate-in {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
} 