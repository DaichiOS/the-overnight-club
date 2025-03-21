import Hero from '@/components/home/Hero';
import IngredientsShowcase from '@/components/home/IngredientsShowcase';
import Header from '@/components/layout/Header';
import OatDivider from '@/components/ui/OatDivider';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <OatDivider />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-4">
          Grab, Go, and Glow: Your Instant Breakfast Boost!
          </h2>
          <p className="text-lg text-center max-w-2xl mx-auto">
          Enjoy a quick, nutritious start with our overnight oats—packed with fiber, protein, and essential nutrients to keep you energized and satisfied throughout the day.
            you wholesome goodness in every spoonful.
          </p>
        </div>
      </section>

      <OatDivider />
      
      <IngredientsShowcase />
      
      <OatDivider />
    </main>
  );
}
