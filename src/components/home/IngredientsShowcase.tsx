"use client";

import Image from 'next/image';
import { useState } from 'react';

type Ingredient = {
  id: string;
  name: string;
  description: string;
  imageSrc: string;
  x: number;
  y: number;
  width: number;
  height: number;
  tooltipX: number;
  tooltipY: number;
  tooltipSide: 'top' | 'right' | 'bottom' | 'left';
  color?: string;
};

const ingredients: Ingredient[] = [
  {
    id: 'milk',
    name: 'Milk',
    description: 'Your choice of full-cream, almond, oat, or coconut milk for the perfect creamy consistency that complements all the other ingredients.',
    imageSrc: '/milk.png',
    x: 2,
    y: 90,
    width: 150,
    height: 150,
    tooltipX: 50,
    tooltipY: 0,
    tooltipSide: 'left',
    color: '#a8d1f7'
  },
  {
    id: 'yogurt',
    name: 'Greek Yogurt',
    description: 'Smooth, protein-rich Greek yogurt for creaminess and probiotic benefits that enhance digestive health.',
    imageSrc: '/greekyoghurt.png',
    x: -6,
    y: 60,
    width: 150,
    height: 150,
    tooltipX: 45,
    tooltipY: 5,
    tooltipSide: 'left',
    color: '#e6d2c0'
  },
  {
    id: 'peanut-butter',
    name: 'Peanut Butter',
    description: 'Creamy, all-natural peanut butter adding protein and rich flavor to every bite, making it more satisfying.',
    imageSrc: '/peanutbutter.png',
    x: -5,
    y: 25,
    width: 150,
    height: 150,
    tooltipX: 50,
    tooltipY: -10,
    tooltipSide: 'left',
    color: '#e8b270'
  },
  {
    id: 'chiaseed',
    name: 'Chia Seeds',
    description: 'Superfood packed with omega-3 fatty acids, fiber, and antioxidants that create a delightful texture.',
    imageSrc: '/chiaseed.png',
    x: 102,
    y: 14,
    width: 185,
    height: 185,
    tooltipX: 50,
    tooltipY: 10,
    tooltipSide: 'right',
    color: '#8d4925'
  },
  {
    id: 'flaxseed',
    name: 'Flaxseed',
    description: 'Rich in omega-3 fatty acids and fiber, flaxseeds add a nutritional boost and subtle nutty flavor.',
    imageSrc: '/flaxseed.png',
    x: 105,
    y: 57,
    width: 140,
    height: 140,
    tooltipX: 80,
    tooltipY: -10,
    tooltipSide: 'right',
    color: '#bd7b4a'
  },
  {
    id: 'blueberry',
    name: 'Fresh Berries',
    description: 'Sweet, antioxidant-rich blueberries for natural sweetness and a burst of flavor in every spoonful.',
    imageSrc: '/blueberry.png',
    x: 100,
    y: 85,
    width: 150,
    height: 150,
    tooltipX: 50,
    tooltipY: 50,
    tooltipSide: 'right',
    color: '#6a79c2'
  }
];

export default function IngredientsShowcase() {
  const [activeIngredient, setActiveIngredient] = useState<string | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [hasVisitedGuide, setHasVisitedGuide] = useState(false);
  
  // Add state for mobile accordion 
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);
  
  // Focus on a single ingredient for the initial animated guide
  const featuredIngredient = 'peanut-butter';
  
  // Track user interaction
  const handleInteraction = (id: string) => {
    setActiveIngredient(id);
    // Only set as interacted if we're hovering the featured ingredient for first time
    if (!hasInteracted && id === featuredIngredient) {
      setHasInteracted(true);
    }
    // Track if user has visited the guide ingredient
    if (id === featuredIngredient) {
      setHasVisitedGuide(true);
    }
  };
  
  // Handle mobile accordion toggle
  const toggleMobileItem = (id: string) => {
    if (expandedMobileItem === id) {
      setExpandedMobileItem(null);
    } else {
      setExpandedMobileItem(id);
    }
  };
  
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-14 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-light text-accent mb-4 text-center">
            Carefully Selected <span className="font-medium">Ingredients</span>
          </h2>
          <div className="w-16 h-0.5 bg-primary/40 mx-auto mb-5"></div>
          <p className="text-base text-center text-foreground/70 italic">
            Explore our jar to discover the premium ingredients that make each spoonful special
          </p>
        </div>
        
        {/* Desktop version - Interactive hover version */}
        <div className="relative mx-auto max-w-3xl hidden md:block">
          {/* Base image */}
          <div className="relative">
            <Image 
              src="/WhatsInside.png" 
              alt="Overnight oats jar with ingredients"
              width={800}
              height={800}
              className="w-full h-auto"
              priority
            />
            
            {/* Ingredient images with hover effects */}
            {ingredients.map((ingredient) => {
              const isFeatureIngredient = ingredient.id === featuredIngredient;
              const showInitialAnimation = isFeatureIngredient && !hasInteracted;
              const isActive = activeIngredient === ingredient.id;
              
              return (
                <div 
                  key={ingredient.id}
                  className={`absolute cursor-pointer transition-all duration-500 ${
                    showInitialAnimation ? 'z-20' : ''
                  }`}
                  style={{
                    left: `${ingredient.x}%`,
                    top: `${ingredient.y}%`,
                    width: `${ingredient.width}px`,
                    height: `${ingredient.height}px`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  onMouseEnter={() => handleInteraction(ingredient.id)}
                  onMouseLeave={() => setActiveIngredient(null)}
                >
                  {/* Ingredient wrapper with synchronized animations */}
                  <div 
                    className={`
                      transition-transform duration-300 
                      ${showInitialAnimation ? 'animate-attention-pulse' : ''} 
                      ${isActive ? 'scale-110' : ''}
                    `}
                  >
                    {/* Ingredient image */}
                    <Image
                      src={ingredient.imageSrc}
                      alt={ingredient.name}
                      width={ingredient.width}
                      height={ingredient.height}
                      className="object-contain w-full h-full"
                    />
                    
                    {/* Guide hint - only for featured ingredient */}
                    {(showInitialAnimation || (isFeatureIngredient && !hasVisitedGuide)) && (
                      <div className="absolute bottom-[110%] left-1/2 transform -translate-x-1/2 bg-white py-1.5 px-3.5 rounded-full shadow-sm text-xs whitespace-nowrap opacity-95">
                        <span className="text-accent font-medium">Hover for more info</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Beautifully styled tooltip */}
                  {isActive && (
                    <div 
                      className="absolute z-30 bg-white rounded-md shadow-sm pointer-events-none animate-fadeIn"
                      style={{
                        ...(ingredient.tooltipSide === 'right' && { left: '100%', top: `${ingredient.tooltipY}%`, transform: 'translateY(-50%)', marginLeft: '20px' }),
                        ...(ingredient.tooltipSide === 'left' && { right: '100%', top: `${ingredient.tooltipY}%`, transform: 'translateY(-50%)', marginRight: '20px' }),
                        ...(ingredient.tooltipSide === 'bottom' && { top: '100%', left: `${ingredient.tooltipX}%`, transform: 'translateX(-50%)', marginTop: '20px' }),
                        ...(ingredient.tooltipSide === 'top' && { bottom: '100%', left: `${ingredient.tooltipX}%`, transform: 'translateX(-50%)', marginBottom: '20px' }),
                        width: '280px',
                        overflow: 'hidden',
                        border: '1px solid rgba(230, 225, 215, 0.6)',
                      }}
                    >
                      <div className="p-5">
                        <h3 
                          className="font-medium text-lg mb-2"
                          style={{ color: ingredient.color || 'var(--primary)' }}
                        >
                          {ingredient.name}
                        </h3>
                        <p className="text-foreground/70 leading-relaxed text-[15px] font-light">
                          {ingredient.description}
                        </p>
                      </div>
                      
                      {/* Subtle border accent */}
                      <div 
                        className="absolute top-0 left-0 w-[3px] h-full"
                        style={{ background: ingredient.color || 'var(--primary)' }}
                      ></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Mobile version - Simplified list with small images */}
        <div className="md:hidden">
          {/* Simplified jar image */}
          <div className="relative max-w-xs mx-auto mb-8">
            <Image 
              src="/WhatsInside.png" 
              alt="Overnight oats jar with ingredients"
              width={400}
              height={400}
              className="w-full h-auto"
              priority
            />
          </div>
          
          {/* Mobile-friendly ingredient list */}
          <div className="max-w-md mx-auto space-y-3">
            {ingredients.map((ingredient) => (
              <div 
                key={ingredient.id}
                className="border border-gray-100 rounded-lg overflow-hidden shadow-sm"
              >
                <div 
                  className="flex items-center p-3 cursor-pointer"
                  onClick={() => toggleMobileItem(ingredient.id)}
                  style={{ backgroundColor: `${ingredient.color}10` || '#f5f5f5' }}
                >
                  <div className="w-12 h-12 flex-shrink-0 mr-4">
                    <Image
                      src={ingredient.imageSrc}
                      alt={ingredient.name}
                      width={50}
                      height={50}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 
                      className="font-medium"
                      style={{ color: ingredient.color || 'var(--primary)' }}
                    >
                      {ingredient.name}
                    </h3>
                  </div>
                  <div className="ml-2">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className={`transition-transform duration-300 ${expandedMobileItem === ingredient.id ? 'transform rotate-180' : ''}`}
                      style={{ color: ingredient.color || 'var(--primary)' }}
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </div>
                
                {/* Expandable content */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedMobileItem === ingredient.id ? 'max-h-40' : 'max-h-0'
                  }`}
                >
                  <div className="p-4 pt-0 text-sm text-foreground/70">
                    <p>{ingredient.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add these custom animations to the global stylesheet */}
      <style jsx global>{`
        @keyframes attention-pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        
        .animate-attention-pulse {
          animation: attention-pulse 2.5s ease-in-out infinite;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>
    </section>
  );
} 