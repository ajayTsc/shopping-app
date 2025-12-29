import FeaturedSection from "@/components/home/FeaturedSection";
import HeroSection from "@/components/home/HeroSection";
import ProtectedRoute from '@/components/ProtectedRoute';

export const metadata = {
  title: 'Home | Shopping App - Best Online Shopping Experience',
  description: 'Shop the best products with fast delivery, best quality, and easy returns. Browse electronics, fashion, home & living, and accessories at Shopping App.',
  keywords: 'online shopping, electronics, fashion, home decor, accessories, best deals, shopping app',
  openGraph: {
    title: 'Shopping App - Your One-Stop Online Shopping Destination',
    description: 'Discover amazing products with fast delivery, best quality, and easy returns.',
    url: 'https://domain.com',
    siteName: 'Shopping App',
    images: [
      {
        url: '/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Shopping App Online Store',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shopping App - Best Online Shopping Experience',
    description: 'Shop the best products with fast delivery and easy returns.',
    images: ['/images/hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <ProtectedRoute>
    <main 
      id="main-content"
      className="min-h-screen bg-gray-50"
    >
      <HeroSection />
      <FeaturedSection />
    </main>
    </ProtectedRoute>
  );
}