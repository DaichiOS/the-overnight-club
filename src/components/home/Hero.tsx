"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-130px)] pt-10 pb-12 sm:pt-16 sm:pb-16 md:pt-20 md:pb-20 overflow-hidden bg-white flex flex-col justify-center">
      {/* Contrast background element */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gray-50 -z-10 transform skew-x-6"></div>
      
      <div className="container mx-auto px-4 flex-grow flex flex-col justify-center">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Content side with sharper typography */}
          <div className="flex-1 max-w-xl text-center md:text-left">
            <div className="relative mb-6 sm:mb-8">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight">
                THE<br/>
                OVERNIGHT<br/>
                <span className="relative text-[#c1813a]">
                  CLASSICS
                  <div className="absolute -bottom-2 left-0 right-0 md:right-auto md:w-32 h-1.5 bg-[#c1813a] mx-auto md:mx-0"></div>
                </span>
              </h1>
            </div>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 sm:mb-10 leading-relaxed font-medium">
              Premium overnight oats crafted with wholesome ingredients. 
              Wake up to a delicious, nutritious breakfast that&apos;s ready when you are.
            </p>
            
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
              <Link 
                href="/our-story" 
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-[#1a212c] text-white font-semibold rounded-none hover:bg-black transition-all text-sm sm:text-base"
              >
                Our Story
              </Link>
              <Link 
                href="/menu" 
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-[#c1813a] text-white font-semibold rounded-none border-2 border-[#c1813a] hover:bg-white hover:text-[#c1813a] transition-all text-sm sm:text-base"
              >
                See Menu
              </Link>
            </div>
          </div>
          
          {/* Image side with enhanced contrast - Fixed for mobile */}
          <div className="w-full flex-1 md:flex-[1.3] relative mt-8 md:mt-0">
            <div className="relative mx-auto w-[280px] h-[280px] sm:w-full sm:h-[350px] md:h-[500px] lg:h-[600px] md:ml-8 md:-mr-12 group">
              {/* Product image with enhanced shadow for more definition */}
              <div className="absolute inset-0 w-full h-full">
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-4/5 h-4 bg-black/10 blur-md rounded-full transition-all duration-500 ease-in-out group-hover:w-[85%] group-hover:h-5 group-hover:bg-black/15"></div>
                <Image
                  src="/Hero.png"
                  alt="Delicious overnight oats with fruits and toppings"
                  fill
                  priority
                  className="object-contain scale-105 md:scale-110 drop-shadow-xl transition-all duration-500 ease-in-out group-hover:scale-[1.12] md:group-hover:scale-[1.15] group-hover:drop-shadow-2xl group-hover:-translate-y-2"
                  sizes="(max-width: 640px) 280px, (max-width: 768px) 100vw, 600px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 