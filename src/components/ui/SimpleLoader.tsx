'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function SimpleLoader() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Fruit/nut images to cycle through
  const images = [
    '/waitlist/walnut.png',
    '/waitlist/blueberry.png',
    '/waitlist/strawberry.png',
    '/waitlist/almond.png'
  ];
  
  // Rotate through images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 800); // Change every 800ms
    
    return () => clearInterval(timer);
  }, [images.length]);
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: 'url(/backgrounds/oatbg.png)' }}
      />
      
      {/* Centered content */}
      <div className="relative animate-pulse">
        <Image
          src={images[currentImageIndex]}
          alt="Loading..."
          width={80}
          height={80}
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
} 