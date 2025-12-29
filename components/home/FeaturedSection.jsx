'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function FeaturedSection() {
  const router = useRouter();

  const featuredItems = [
    {
      id: 1,
      title: 'Electronics',
      image: '/images/ele.jpg',
      description: 'Smartphones, headphones & latest tech',
    },
    {
      id: 2,
      title: 'Fashion',
      image: '/images/Fashion.webp',
      description: 'Trendy outfits, T-shirt & accessories',
    },
    {
      id: 3,
      title: 'Jewellery',
      image: '/images/jewellery.webp',
      description: 'Elegant rings, necklaces & timeless accessories',
    },
    {
      id: 4,
      title: 'Accessories',
      image: '/images/watch.webp',
      description: 'Bags, watches & premium gear',
    },
    {
      id: 5,
      title: 'Beauty & Health',
      image: '/images/Beauty.webp',
      description: 'Skincare, makeup & wellness essentials',
    },
    {
      id: 6,
      title: 'Sports & Fitness',
      image: '/images/sports.avif',
      description: 'Gym wear, equipment & outdoor gear',
    },
  ];

  const handleCategoryClick = (category) => {
    router.push(`/products?category=${category.toLowerCase()}`);
  };

  return (
    <section
      className="relative bg-linear-to-b from-white to-blue-50 py-20"
      aria-labelledby="featured-heading"
    >
      <div className="absolute -top-10 right-20 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-40" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <h2
          id="featured-heading"
          className="text-3xl md:text-5xl font-bold mb-14 text-center text-gray-900"
        >
          Featured Categories
        </h2>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          role="list"
        >
          {featuredItems.map((item) => (
            <article
              key={item.id}
              role="listitem"
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-transform duration-500 transform hover:-translate-y-1 hover:scale-105 group relative"
            >
              <div className="relative w-full aspect-4/3 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-fit"
                  quality={85}
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-xl text-gray-900 group-hover:text-blue-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  {item.description}
                </p>
                <button
                  onClick={() => handleCategoryClick(item.title)}
                  className="mt-4 px-5 py-2 bg-blue-600 text-white font-medium rounded-lg border border-blue-700 hover:bg-blue-600 hover:text-white hover:border-blue-700 transition-colors cursor-pointer"
                >
                  Explore
                </button>
              </div>
            </article>

          ))}
        </div>
      </div>
    </section>
  );
}
