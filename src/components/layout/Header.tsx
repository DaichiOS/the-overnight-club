"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--header)] shadow-sm border-b border-[var(--secondary)]">
      <div className="container mx-auto px-4">
        <div className="flex h-24 items-center justify-between">
          {/* Logo and Brand Section */}
          <Link href="/" className="flex items-center">
            <div className="flex items-center">
              <div className="relative h-16 w-16 md:h-20 md:w-20 mr-4">
                <Image 
                  src="/Logo.svg" 
                  alt="The Overnight Club Logo" 
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <h1 className="font-semibold tracking-wide text-[var(--header-text)] text-xl md:text-2xl">
                  THE OVERNIGHT CLUB
                </h1>
                <p className="text-sm text-[var(--header-text)] opacity-80 font-quicksand tracking-wider">
                  PREMIUM OVERNIGHT OATS
                </p>
              </div>
            </div>
          </Link>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-7">
            <Link 
              href="/about" 
              className="font-quicksand text-[var(--header-text)] text-base hover:text-[var(--primary)] transition-colors relative hover:after:content-[''] hover:after:absolute hover:after:h-0.5 hover:after:w-1/2 hover:after:bg-[var(--primary)] hover:after:bottom-[-2px] hover:after:left-1/4"
            >
              Our Story
            </Link>
            <Link 
              href="/products" 
              className="font-quicksand text-[var(--header-text)] text-base hover:text-[var(--primary)] transition-colors relative hover:after:content-[''] hover:after:absolute hover:after:h-0.5 hover:after:w-1/2 hover:after:bg-[var(--primary)] hover:after:bottom-[-2px] hover:after:left-1/4"
            >
              Ingredients
            </Link>
            <Link 
              href="/benefits" 
              className="font-quicksand text-[var(--header-text)] text-base hover:text-[var(--primary)] transition-colors relative hover:after:content-[''] hover:after:absolute hover:after:h-0.5 hover:after:w-1/2 hover:after:bg-[var(--primary)] hover:after:bottom-[-2px] hover:after:left-1/4"
            >
              Benefits
            </Link>
            <Link 
              href="/contact" 
              className="rounded-full bg-[var(--accent)] px-5 py-2 font-quicksand text-white text-base shadow-sm hover:bg-opacity-90 transition-colors"
            >
              Join Waitlist
            </Link>
          </nav>
          
          {/* Mobile Menu Button (placeholder) */}
          <div className="flex md:hidden items-center">
            <button 
              className="rounded-full bg-[var(--secondary)] p-2 text-[var(--primary)] hover:bg-opacity-90 transition-colors"
              aria-label="Menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
} 