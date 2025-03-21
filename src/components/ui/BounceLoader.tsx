'use client';

import Image from 'next/image';

export default function BounceLoader() {
  // Fruit/nut images to display
  const images = [
    '/waitlist/walnut.png',
    '/waitlist/blueberry.png',
    '/waitlist/strawberry.png',
    '/waitlist/almond.png'
  ];
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: 'url(/backgrounds/oatbg.png)' }}
      />
      
      {/* Centered content */}
      <div className="relative flex items-center justify-center gap-4">
        {images.map((src, index) => (
          <div 
            key={src}
            className="staggered-item animate-bounce-custom"
            style={{ 
              animationDuration: `${1 + (index * 0.1)}s` 
            }}
          >
            <Image
              src={src}
              alt={`Loading ${index + 1}`}
              width={70}
              height={70}
              className="object-contain drop-shadow-md"
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
} 