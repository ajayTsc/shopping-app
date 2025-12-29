'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function AboutContent() {
  const router = useRouter();

  return (
    <main className="pt-28 pb-20 px-6 md:px-12 lg:px-20 bg-linear-to-b from-white to-blue-50 min-h-screen">
      <section className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 animate-fadeIn">
          About Shopping App
        </h1>
        <p className="text-gray-700 text-base md:text-xl max-w-3xl mx-auto leading-relaxed">
          We're on a mission to make online shopping effortless and
          trustworthy for everyone.
        </p>
      </section>

      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
        <div className="overflow-hidden rounded-xl shadow-lg">
          <Image
            src="/images/about.webp"
            alt="About Shopping App"
            width={500}
            height={380}
            className="rounded-xl object-cover w-full h-full"
          />
        </div>
        <div className="space-y-8">
          <h2 className="text-xl md:text-2xl font-semibold">
            Who We Are
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Shopping App was founded with a simple vision — to make online
            shopping accessible, secure, and fast. From trendy fashion to
            high-tech gadgets, we connect customers with top-quality products
            that meet everyday needs.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            Our platform is designed for convenience, trust, and satisfaction.
            With thousands of verified products, user-friendly navigation, and
            seamless checkout, Shopping App redefines e-commerce excellence.
          </p>
        </div>
      </section>

      <section className="mt-20 bg-blue-600 text-white text-center py-16 rounded-2xl max-w-6xl mx-auto shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-700 opacity-20 -z-10 rounded-2xl"></div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fadeIn">
          Join Us in Shaping the Future of Online Shopping
        </h2>
        <p className="text-white/90 mb-8 md:mb-10 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
          Explore our wide range of products, discover new collections, and
          experience the joy of seamless shopping.
        </p>
        <button
          onClick={() => router.push('/products')}
          className="bg-white text-blue-700 font-semibold px-8 py-4 rounded-lg hover:bg-gray-200 transition transform hover:scale-105"
        >
          Explore Products
        </button>
      </section>
    </main>
  );
}
