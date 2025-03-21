"use client";

import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function NutritionHighlights() {
  const contentRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  
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
    
    const benefits = benefitsRef.current;
    if (benefits) {
      observer.observe(benefits);
    }
    
    return () => {
      if (content) {
        observer.unobserve(content);
      }
      if (benefits) {
        observer.unobserve(benefits);
      }
    };
  }, []);
  
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-light text-primary mb-4 text-center">
            Nutrient-<span className="font-medium">Packed</span> Goodness
          </h2>
          <div className="w-16 h-0.5 bg-accent/40 mx-auto mb-5"></div>
          <p className="text-base text-center text-foreground/70">
            Every jar delivers the perfect balance of macronutrients and essential vitamins 
            to fuel your day with natural, wholesome nutrition.
          </p>
        </div>
        
        {/* Product image and nutrition facts */}
        <div 
          ref={contentRef}
          className="max-w-5xl mx-auto opacity-0 transform translate-y-4 transition-all duration-700"
        >
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            {/* Product Image */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] drop-shadow-xl transition-transform duration-700 hover:scale-105">
                <Image 
                  src="/Jar1.png" 
                  alt="Overnight oats in a mason jar with fresh strawberries and bananas" 
                  width={1800} 
                  height={1800}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            
            {/* Nutrition Facts */}
            <div className="w-full md:w-1/2 bg-white rounded-lg border border-neutral-300 shadow-sm overflow-hidden">
              <div className="px-4 py-2">
                <h3 className="text-2xl font-bold tracking-tight text-black">Nutrition Facts</h3>
                <p className="text-sm text-black">1 serving per container</p>
                <div className="flex justify-between border-b-8 border-black py-1 mt-1">
                  <p className="font-bold text-black">Serving size</p>
                  <p className="font-bold text-black">1 Jar (250g)</p>
                </div>
                
                <div className="py-2 border-b-4 border-black">
                  <div className="flex justify-between items-baseline">
                    <p className="text-sm font-bold text-black">Amount Per Serving</p>
                    <p className="text-3xl font-bold text-black">Calories</p>
                    <p className="text-3xl font-bold text-black">300</p>
                  </div>
                </div>
                
                <div className="text-right text-xs font-bold py-1 border-b border-black">
                  <p className="text-black">% Daily Value*</p>
                </div>
                
                {/* Nutrient rows */}
                <div className="border-b border-black">
                  <div className="flex justify-between py-1">
                    <p className="text-sm font-bold text-black">Total Fat 7g</p>
                    <p className="text-sm font-bold text-black">9%</p>
                  </div>
                  <div className="flex justify-between py-1 pl-4 border-b border-black border-dashed">
                    <p className="text-sm text-black">Saturated Fat 1.5g</p>
                    <p className="text-sm font-bold text-black">8%</p>
                  </div>
                  <div className="flex justify-between py-1 pl-4">
                    <p className="text-sm italic text-black">Trans Fat 0g</p>
                  </div>
                </div>
                
                <div className="flex justify-between py-1 border-b border-black">
                  <p className="text-sm font-bold text-black">Cholesterol 0mg</p>
                  <p className="text-sm font-bold text-black">0%</p>
                </div>
                
                <div className="flex justify-between py-1 border-b border-black">
                  <p className="text-sm font-bold text-black">Sodium 60mg</p>
                  <p className="text-sm font-bold text-black">3%</p>
                </div>
                
                <div className="border-b border-black">
                  <div className="flex justify-between py-1">
                    <p className="text-sm font-bold text-black">Total Carbohydrate 38g</p>
                    <p className="text-sm font-bold text-black">14%</p>
                  </div>
                  <div className="flex justify-between py-1 pl-4 border-b border-black border-dashed">
                    <p className="text-sm text-black">Dietary Fibre 7g</p>
                    <p className="text-sm font-bold text-black">25%</p>
                  </div>
                  <div className="flex justify-between py-1 pl-4">
                    <p className="text-sm text-black">Total Sugars 9g</p>
                  </div>
                  <div className="flex justify-between py-1 pl-8">
                    <p className="text-sm text-black">Includes 4g Added Sugars</p>
                    <p className="text-sm font-bold text-black">8%</p>
                  </div>
                </div>
                
                <div className="flex justify-between py-1 border-b-8 border-black">
                  <p className="text-sm font-bold text-black">Protein 22g</p>
                  <p className="text-sm font-bold text-black">44%</p>
                </div>
                
                <div className="py-1 border-b border-black">
                  <div className="flex justify-between">
                    <p className="text-sm text-black">Vitamin D 0mcg</p>
                    <p className="text-sm text-black">0%</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-sm text-black">Calcium 180mg</p>
                    <p className="text-sm text-black">15%</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-sm text-black">Iron 2.8mg</p>
                    <p className="text-sm text-black">15%</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-sm text-black">Potassium 270mg</p>
                    <p className="text-sm text-black">6%</p>
                  </div>
                </div>
                
                <p className="text-xs text-black pt-2 pb-4">
                  *The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.
                </p>
              </div>
              <div className="bg-neutral-100 px-4 py-3">
                <p className="text-xs font-bold text-black">INGREDIENTS:</p>
                <p className="text-xs text-black">
                  WHOLE GRAIN ROLLED OATS, GREEK YOGHURT, CHIA SEEDS, MILK, , HONEY, BLUEBERRIES, WALNUTS.
                </p>
                
                <p className="text-xs font-bold text-black mt-2">CONTAINS: MILK, WHEAT, SOY</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Benefits section - Completely redesigned */}
        <div 
          ref={benefitsRef}
          className="max-w-5xl mx-auto mt-24 opacity-0 transform translate-y-4 transition-all duration-700"
        >
          <h2 className="text-2xl md:text-4xl font-light text-center mb-14">
            What <span className="font-medium text-primary">Powers</span> Your Breakfast
          </h2>
          
          <div className="grid md:grid-cols-3 gap-y-16 md:gap-x-8">
            {/* Wheat & Oats Section */}
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-full border-8 border-white shadow-xl mb-6 mx-auto" style={{ maxWidth: '240px' }}>
                <Image 
                  src="/wheat.png" 
                  alt="Wheat grains" 
                  width={400} 
                  height={400}
                  className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-medium text-center mb-2">Complex Carbs</h3>
              <div className="w-12 h-0.5 bg-[#e8b270] mx-auto mb-4"></div>
              <p className="text-center text-foreground/70 px-4">
                Whole grain oats provide steady energy release, keeping you fuller longer and helping maintain stable blood sugar levels.
              </p>
              <div className="absolute top-0 right-4 md:right-8 bg-[#e8b270]/10 rounded-full h-16 w-16 flex items-center justify-center transform -translate-y-1/4">
                <div className="text-center">
                  <p className="font-bold text-[#e8b270] text-lg">38g</p>
                  <p className="text-[#e8b270] text-xs">carbs</p>
                </div>
              </div>
            </div>
            
            {/* Greek Yogurt Section */}
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-full border-8 border-white shadow-xl mb-6 mx-auto" style={{ maxWidth: '240px' }}>
                <Image 
                  src="/greekyoghurt2.png" 
                  alt="Greek yogurt" 
                  width={400} 
                  height={400}
                  className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-medium text-center mb-2">Protein-Rich</h3>
              <div className="w-12 h-0.5 bg-[#5e9c5e] mx-auto mb-4"></div>
              <p className="text-center text-foreground/70 px-4">
                Greek yogurt adds creaminess and protein that supports muscle recovery and promotes satiety throughout the day.
              </p>
              <div className="absolute top-0 right-4 md:right-8 bg-[#5e9c5e]/10 rounded-full h-16 w-16 flex items-center justify-center transform -translate-y-1/4">
                <div className="text-center">
                  <p className="font-bold text-[#5e9c5e] text-lg">22g</p>
                  <p className="text-[#5e9c5e] text-xs">protein</p>
                </div>
              </div>
            </div>
            
            {/* Chia Seeds Section */}
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-full border-8 border-white shadow-xl mb-6 mx-auto" style={{ maxWidth: '240px' }}>
                <Image 
                  src="/chiaseeds2.png" 
                  alt="Chia seeds" 
                  width={400} 
                  height={400}
                  className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-medium text-center mb-2">Omega-3 Rich</h3>
              <div className="w-12 h-0.5 bg-[#6a79c2] mx-auto mb-4"></div>
              <p className="text-center text-foreground/70 px-4">
                Tiny but mighty chia seeds pack essential fatty acids that support brain function and reduce inflammation.
              </p>
              <div className="absolute top-0 right-4 md:right-8 bg-[#6a79c2]/10 rounded-full h-16 w-16 flex items-center justify-center transform -translate-y-1/4">
                <div className="text-center">
                  <p className="font-bold text-[#6a79c2] text-lg">850</p>
                  <p className="text-[#6a79c2] text-xs">mg omega-3</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16 max-w-3xl mx-auto px-6">
            <p className="text-foreground/60 text-sm italic">
              Our overnight oats are thoughtfully crafted using only premium ingredients and never any artificial preservatives, colors, or flavors. Just wholesome goodness in every bite.
            </p>
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