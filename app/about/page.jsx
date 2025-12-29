import AboutContent from '@/components/about/About';
import ProtectedRoute from '@/components/ProtectedRoute';
export const metadata = {
  title: 'About Us | Shopping App',
  description:
    'Learn more about Shopping App our mission, values, and the people behind the best online shopping experience.',
  openGraph: {
    title: 'About Us | Shopping App',
    description:
      'Shopping App is your trusted platform for quality products and customer satisfaction.',
    url: 'https://domain.com/about',
    siteName: 'Shopping App',
    images: [
      {
        url: '/images/about.jpg',
        width: 800,
        height: 600,
        alt: 'About Shopping App',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <>
    <ProtectedRoute>
  <AboutContent />;
  </ProtectedRoute>
  </>
  )
}