'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

/**
 * Simple loading component for page transitions
 * To use this, create a loading.tsx file in your app directory
 */
export default function PageLoading() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Images to show during loading
  const images = [
    '/waitlist/walnut.png',
    '/waitlist/blueberry.png',
    '/waitlist/strawberry.png',
    '/waitlist/almond.png'
  ];
  
  // Cycle through images
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 600);
    
    return () => clearInterval(interval);
  }, [images.length]);
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: 'url(/backgrounds/oatbg.png)' }}
      />
      
      <div className="flex items-center justify-center space-x-4 relative">
        {images.map((src, index) => (
          <div 
            key={src}
            className={`transition-all duration-300 transform ${
              index === activeIndex ? 'scale-125 opacity-100' : 'scale-100 opacity-60'
            }`}
          >
            <Image 
              src={src} 
              alt="Loading" 
              width={60} 
              height={60}
              className="object-contain"
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
} 