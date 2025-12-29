'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function HeroSection() {
  const router = useRouter();

  return (
  <section className="relative bg-linear-to-r from-gray-50 via-blue-50 to-gray-100 overflow-hidden pt-25 md:pt-30 pb-16 md:pb-20">
  <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between">
      <div className="absolute top-10 left-0 w-56 h-56 sm:w-64 sm:h-64 bg-blue-100 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-0 right-0 w-60 h-60 sm:w-72 sm:h-72 bg-blue-200 rounded-full blur-3xl opacity-40" />
      <div className="flex-1 z-10 text-center md:text-left space-y-6 md:space-y-16">
        <h1
          id="hero-heading"
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight"
        >
          Shop the Best Products for Your Everyday Needs
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-lg mx-auto md:mx-0 leading-relaxed">
          Explore trending collections with fast delivery, premium quality, and easy returns 
          designed to make your shopping smarter and simpler.
        </p>

        <button
          onClick={() => router.push('/products')}
          className="flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 bg-blue-600 text-white text-sm sm:text-base rounded-full hover:bg-blue-700 transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 mx-auto md:mx-0 cursor-pointer"
          aria-label="Explore our products"
        >
           Explore Now
        </button>
      </div>
      <div className="flex-1 relative flex justify-center md:justify-end mt-10 md:mt-0 z-10 w-full">
        <div className="relative w-60 sm:w-[320px] md:w-95 lg:w-110 h-55 sm:h-75 md:h-85 lg:h-96 flex items-center justify-center mr-4 mt-10">
          <Image
            src="/images/hero.webp"
            alt="Shopping cart with products"
            fill
            className="object-cover rounded-2xl shadow-xl border border-gray-200"
            priority
            quality={85}
          />
        </div>
      </div>
      </div>
    </section>
  );
}
