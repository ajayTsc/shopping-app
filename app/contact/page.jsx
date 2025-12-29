import ContactForm from '@/components/contact/ContactForm';
import ProtectedRoute from '@/components/ProtectedRoute';

export const metadata = {
  title: 'Contact Us | Shopping App',
  description:
    'Get in touch with the Shopping App team for inquiries, support, or feedback. Were happy to hear from you!',
  openGraph: {
    title: 'Contact Us | Shopping App',
    description:
      'Reach out to Shopping App for assistance or queries about our services and products.',
    url: 'https://domain.com/contact',
    siteName: 'Shopping App',
    images: [
      {
        url: '/images/contact.jpg',
        width: 800,
        height: 600,
        alt: 'Contact Shopping App',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function ContactPage() {
  return(
  <>
  <ProtectedRoute>
   <ContactForm />;
   </ProtectedRoute>
   </>
  )
}