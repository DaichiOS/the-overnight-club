import Hero from '@/components/home/Hero';
import IngredientsShowcase from '@/components/home/IngredientsShowcase';
import IntroSection from '@/components/home/IntroSection';
import NutritionHighlights from '@/components/home/NutritionHighlights';
import Header from '@/components/layout/Header';
import OatDivider from '@/components/ui/OatDivider';

export default function Home() {
  return (
    <main>
      <Header />
      <OatDivider />
      <Hero />
      <OatDivider />
      
      <IntroSection />

      <OatDivider />
      
      <IngredientsShowcase />
      
      <OatDivider />
      
      <NutritionHighlights />
      
      <OatDivider />
    </main>
  );
}
