import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              THE OVERNIGHT
              <br /> 
              CLASSICS
            </h1>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/our-story" 
                className="inline-block px-6 py-3 bg-secondary text-primary font-medium rounded-lg hover:bg-opacity-90 transition-all"
              >
                Our Story
              </Link>
              <Link 
                href="/menu" 
                className="inline-block px-6 py-3 border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-background transition-all"
              >
                See Menu
              </Link>
            </div>
          </div>
          
          <div className="flex-1 md:flex-[1.8] relative">
            <div className="aspect-[5/4] md:aspect-auto md:h-[550px] lg:h-[600px] rounded-lg overflow-visible relative bg-transparent md:-mr-16">
              <Image
                src="/Hero.png"
                alt="Delicious overnight oats with fruits and toppings"
                fill
                priority
                className="object-contain scale-100"
                sizes="(max-width: 768px) 100vw, 800px"
                style={{ 
                  background: 'transparent',
                  objectPosition: '90% center',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 