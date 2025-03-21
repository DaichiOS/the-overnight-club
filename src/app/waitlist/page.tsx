import WaitlistForm from "@/components/waitlist/WaitlistForm";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Join the Waitlist | The Overnight Club",
  description: "Join our waitlist to be the first to know when we launch and receive 20% off your first order of premium overnight oats.",
};

export default function WaitlistPage() {
  return (
    <main className="pt-8 sm:pt-12 pb-16 sm:pb-20 min-h-screen relative overflow-hidden bg-[#fcf7ee]">
      {/* Background image - increased opacity and z-index */}
      <div className="absolute inset-0 w-full h-full opacity-30 z-0">
        <Image
          src="/backgrounds/oatbg.png"
          alt="Oat background texture"
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 relative">
          {/* Mobile floating characters */}
          <div className="absolute top-4 left-4 w-16 h-16 transform -rotate-12 sm:hidden">
            <Image
              src="/waitlist/blueberry.png"
              alt="Cute blueberry character"
              width={60}
              height={60}
              className="drop-shadow-md"
            />
          </div>
          
          <div className="absolute top-4 right-4 w-16 h-16 transform rotate-6 sm:hidden">
            <Image
              src="/waitlist/strawberry.png"
              alt="Cute strawberry character"
              width={60}
              height={60}
              className="drop-shadow-md"
            />
          </div>
          
          {/* Desktop floating characters */}
          <div className="absolute -top-12 -left-4 md:left-0 w-24 h-24 md:w-32 md:h-32 transform -rotate-12 hidden sm:block">
            <Image
              src="/waitlist/blueberry.png"
              alt="Cute blueberry character"
              width={130}
              height={130}
              className="drop-shadow-md"
            />
          </div>
          
          <div className="absolute -top-10 -right-6 md:right-0 w-28 h-28 md:w-36 md:h-36 transform rotate-6 hidden sm:block">
            <Image
              src="/waitlist/strawberry.png"
              alt="Cute strawberry character"
              width={140}
              height={140}
              className="drop-shadow-md"
            />
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#8b5a2b] mb-4 sm:mb-6 tracking-tight relative inline-block pt-10 sm:pt-0 drop-shadow-sm">
            Join Our Tasty Crew!
            <div className="w-full h-1.5 sm:h-2 bg-[#c1813a] absolute -bottom-1 sm:-bottom-2 left-0"></div>
          </h1>
          
          {/* Added stronger background and more visibility */}
          <p className="text-base sm:text-lg md:text-xl text-[#5e4b3b] max-w-2xl mx-auto mt-4 sm:mt-6 font-medium bg-[#fcf7ee]/90 p-3 rounded-lg shadow-sm">
            We&apos;re mixing up something special! Sign up for our waitlist to be the first to enjoy our premium overnight oats and receive a sweet 20% discount on your first order.
          </p>
        </div>
        
        {/* Form Section with Friendly Nuts */}
        <div className="max-w-3xl mx-auto relative">
          {/* Mobile nuts characters - adjusted positioning */}
          <div className="absolute -top-14 -left-4 w-16 h-16 transform -rotate-6 md:hidden z-20">
            <Image
              src="/waitlist/almond.png"
              alt="Cute almond character"
              width={60}
              height={60}
              className="drop-shadow-md"
            />
            <div className="absolute -top-6 right-0 bg-[#f9e8cd] p-1 px-2 rounded-lg shadow-md transform rotate-[-5deg] whitespace-nowrap border border-[#e6d0ab]">
              <p className="text-xs font-bold text-[#8b5a2b]">Join!</p>
            </div>
          </div>
          
          <div className="absolute -top-14 -right-4 w-16 h-16 transform rotate-6 md:hidden z-20">
            <Image
              src="/waitlist/walnut.png"
              alt="Cute walnut character"
              width={60}
              height={60}
              className="drop-shadow-md"
            />
            <div className="absolute -top-6 left-0 bg-[#f9e8cd] p-1 px-2 rounded-lg shadow-md transform rotate-[5deg] whitespace-nowrap border border-[#e6d0ab]">
              <p className="text-xs font-bold text-[#8b5a2b]">20% off!</p>
            </div>
          </div>
          
          {/* Desktop side characters - improved speech bubbles */}
          <div className="absolute -left-14 md:-left-24 top-1/3 transform -translate-y-1/2 w-24 h-24 md:w-36 md:h-36 rotate-[-15deg] hidden md:block z-20">
            <Image
              src="/waitlist/almond.png"
              alt="Cute almond character"
              width={150}
              height={150}
              className="drop-shadow-md"
            />
            <div className="absolute -top-9 right-0 bg-[#f9e8cd] p-2 rounded-lg shadow-md transform rotate-[-5deg] whitespace-nowrap border-2 border-[#e6d0ab]">
              <p className="text-sm font-bold text-[#8b5a2b]">Join us!</p>
            </div>
          </div>
          
          <div className="absolute -right-14 md:-right-24 top-1/3 transform -translate-y-1/2 w-24 h-24 md:w-36 md:h-36 rotate-[15deg] hidden md:block z-20">
            <Image
              src="/waitlist/walnut.png"
              alt="Cute walnut character"
              width={150}
              height={150}
              className="drop-shadow-md"
            />
            <div className="absolute -top-9 left-0 bg-[#f9e8cd] p-2 rounded-lg shadow-md transform rotate-[5deg] whitespace-nowrap border-2 border-[#e6d0ab]">
              <p className="text-sm font-bold text-[#8b5a2b]">Get 20% off!</p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-5 sm:p-6 md:p-10 border-2 border-[#e6d0ab] relative overflow-hidden z-10">
            {/* Small decorative circles in background */}
            <div className="absolute top-0 left-0 w-20 h-20 rounded-full bg-[#f8f0e1] opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-[#f8f0e1] opacity-50"></div>
            
            <WaitlistForm />
          </div>
        </div>
        
        {/* Benefits Section */}
        <div className="mt-20 sm:mt-24 grid gap-8 max-w-4xl mx-auto px-2 sm:px-0 sm:grid-cols-2 md:grid-cols-3">
          <div className="bg-white rounded-xl shadow-md p-5 sm:p-6 border-2 border-[#e6d0ab] text-center relative transform transition-transform hover:scale-105 hover:rotate-1">
            <div className="absolute -top-8 -right-4 w-16 h-16 sm:w-20 sm:h-20">
              <Image
                src="/waitlist/blueberry.png"
                alt="Blueberry character"
                width={80}
                height={80}
              />
            </div>
            <div className="h-10 sm:h-14"></div> {/* Space for the image */}
            <h3 className="text-lg sm:text-xl font-bold text-[#8b5a2b] mb-2 sm:mb-3">Early Bird Perks</h3>
            <p className="text-sm sm:text-base text-[#5e4b3b]">
              Be among the first to wake up to our delicious overnight oats when we launch!
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-5 sm:p-6 border-2 border-[#e6d0ab] text-center relative transform transition-transform hover:scale-105 hover:rotate-1">
            <div className="absolute -top-8 -right-4 w-16 h-16 sm:w-20 sm:h-20">
              <Image
                src="/waitlist/strawberry.png"
                alt="Strawberry character"
                width={80}
                height={80}
              />
            </div>
            <div className="h-10 sm:h-14"></div> {/* Space for the image */}
            <h3 className="text-lg sm:text-xl font-bold text-[#8b5a2b] mb-2 sm:mb-3">Berry Sweet Discount</h3>
            <p className="text-sm sm:text-base text-[#5e4b3b]">
              Enjoy a juicy 20% discount on your first order as our special thank you!
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-5 sm:p-6 border-2 border-[#e6d0ab] text-center relative transform transition-transform hover:scale-105 hover:rotate-1 sm:col-span-2 md:col-span-1 sm:max-w-xs sm:mx-auto md:max-w-none">
            <div className="absolute -top-8 -right-4 w-16 h-16 sm:w-20 sm:h-20">
              <Image
                src="/waitlist/walnut.png"
                alt="Walnut character"
                width={80}
                height={80}
              />
            </div>
            <div className="h-10 sm:h-14"></div> {/* Space for the image */}
            <h3 className="text-lg sm:text-xl font-bold text-[#8b5a2b] mb-2 sm:mb-3">Nutty Updates</h3>
            <p className="text-sm sm:text-base text-[#5e4b3b]">
              Stay informed about our launch date and exciting flavors we&apos;re creating!
            </p>
          </div>
        </div>
        
        {/* More sophisticated footer */}
        <div className="text-center mt-14 sm:mt-20 relative">
          <p className="text-[#8b5a2b] font-medium text-lg">
            Breakfast is about to get a whole lot more fun!
          </p>
          <div className="w-24 h-1 bg-[#c1813a] mx-auto mt-4 mb-2 rounded-full"></div>
        </div>
      </div>
    </main>
  );
} 