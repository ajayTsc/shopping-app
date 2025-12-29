import Careers from '@/components/careers/Careers';
import ProtectedRoute from '@/components/ProtectedRoute';

export const metadata = {
  title: 'Careers | Shopping App',
  description:
    'Join the Shopping App team and be part of an innovative, fast-growing e-commerce platform. Explore open positions and career opportunities.',
  openGraph: {
    title: 'Careers | Shopping App',
    description:
      'Shopping App offers exciting career opportunities in development, design, and marketing. Join our growing team today!',
    url: 'https://domain.com/careers',
    siteName: 'Shopping App',
    images: [
      {
        url: '/images/careers.jpg',
        width: 800,
        height: 600,
        alt: 'Careers at Shopping App',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function CareersPage() {
  return(
  <>
  <ProtectedRoute>
   <Careers />;
   </ProtectedRoute>
   </>
   )
}