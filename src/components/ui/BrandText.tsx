"use client";

interface BrandTextProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function BrandText({ size = 'md', className = '' }: BrandTextProps) {
  // Size classes for different display sizes
  const sizeClasses = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl'
  };
  
  // Apply the selected size class
  const textSize = sizeClasses[size];
  
  return (
    <div className={`${className}`}>
      <div className="flex flex-col">
        <div className="flex items-center">
          <span className={`font-bold ${textSize} tracking-[0.15em] text-[#f9f5ec]`}>
            THE OVERNIGHT
          </span>
          <span className="text-[#f8c471] mx-1 text-sm">•</span>
        </div>
        <div className="flex items-center">
          <span className={`font-extrabold ${textSize} tracking-[0.12em] text-[#f9f5ec]`}>
            CLUB
          </span>
          <div className="ml-2 h-0.5 w-12 bg-[#f8c471] rounded-full"></div>
        </div>
        <div className="font-quicksand text-[10px] tracking-[0.15em] text-[#f9f5ec]/90 mt-1.5">
          GOODNESS TO GO · WELLNESS ON THE MOVE
        </div>
      </div>
    </div>
  );
} 