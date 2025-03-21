"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
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
              <div className="hidden sm:flex flex-col">
                <h1 className="font-semibold tracking-wide text-[var(--header-text)] text-xl md:text-2xl">
                  THE OVERNIGHT OATS CLUB
                </h1>
                <p className="text-sm text-[var(--header-text)] opacity-80 font-quicksand tracking-wider">
                  PREMIUM OVERNIGHT OATS
                </p>
              </div>
              <div className="flex sm:hidden flex-col">
                <h1 className="font-semibold tracking-wide text-[var(--header-text)] text-lg">
                  OVERNIGHT CLUB
                </h1>
              </div>
            </div>
          </Link>
          
          {/* Navigation - Desktop */}
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
              className="relative group bg-transparent border border-[var(--accent)] text-[var(--accent)] px-6 py-2.5 rounded-none hover:text-white transition-all duration-300 overflow-hidden font-medium tracking-wide"
            >
              <span className="relative z-10">Oats Are Coming — Stay in the Loop</span>
              <div className="absolute inset-0 bg-[var(--accent)] w-0 group-hover:w-full transition-all duration-300 ease-in-out"></div>
            </Link>
          </nav>
          
          {/* Mobile Actions */}
          <div className="flex md:hidden items-center space-x-3">
            {/* Mobile CTA */}
            <Link
              href="/contact"
              className="border border-[var(--accent)] bg-transparent text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition-all duration-300 px-3 py-1.5 text-sm font-medium tracking-wide"
            >
              Join Waitlist
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              className="rounded-none border border-[var(--secondary)] p-2 text-[var(--primary)] hover:bg-[var(--secondary)]/10 transition-colors"
              aria-label="Menu"
              onClick={toggleMobileMenu}
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
      
      {/* Mobile Menu - Slide down when active */}
      <div 
        className={`absolute top-[96px] left-0 right-0 bg-[var(--header)] shadow-md px-4 py-5 transform transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ zIndex: 40 }}
      >
        <nav className="flex flex-col space-y-5">
          <Link 
            href="/about" 
            className="font-quicksand text-[var(--header-text)] text-base py-2 border-b border-[var(--secondary)]/20 hover:text-[var(--primary)] transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Our Story
          </Link>
          <Link 
            href="/products" 
            className="font-quicksand text-[var(--header-text)] text-base py-2 border-b border-[var(--secondary)]/20 hover:text-[var(--primary)] transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Ingredients
          </Link>
          <Link 
            href="/benefits" 
            className="font-quicksand text-[var(--header-text)] text-base py-2 border-b border-[var(--secondary)]/20 hover:text-[var(--primary)] transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Benefits
          </Link>
          <Link 
            href="/contact" 
            className="w-full text-center bg-[var(--accent)] text-white py-3 font-medium mt-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Join Our Waitlist for 20% off!
          </Link>
        </nav>
      </div>
    </header>
  );
} 