import type { Metadata } from 'next';
import Hero from '@/components/membership/Hero';
import Pricing from '@/components/membership/Pricing';
import AdditionalServices from '@/components/membership/AdditionalServices';
import FAQSection from '../../components/home/FAQSection';

export const metadata: Metadata = {
  title: 'Membership Plans - ResQ-X Roadside Assistance Subscription',
  description: 'Join ResQ-X membership plans for 24/7 roadside assistance coverage. Enjoy peace of mind with our affordable and reliable subscription services. Sign up today!',
  keywords: [
    'membership plans',
    'roadside assistance membership',
    'ResQ-X subscription',
    '24/7 roadside assistance',
    'affordable membership',
    'roadside assistance coverage',
    'ResQ-X membership benefits',
    'sign up for membership',
    'roadside assistance plans',
    'ResQ-X subscription services',
  ],
  openGraph: {
    title: 'Membership Plans - ResQ-X Roadside Assistance Subscription',
    description: 'Join ResQ-X membership plans for 24/7 roadside assistance coverage. Enjoy peace of mind with our affordable and reliable subscription services. Sign up today!',
    url: 'https://resqx.net/membership',
    siteName: 'ResQ-X',
    type: 'website',
    images: [
      {
        url: '/membership-og-image.jpg', // Replace with your actual OG image for the Membership page
        width: 1200,
        height: 630,
        alt: 'Membership Plans - ResQ-X',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Membership Plans - ResQ-X Roadside Assistance Subscription',
    description: 'Join ResQ-X membership plans for 24/7 roadside assistance coverage. Enjoy peace of mind with our affordable and reliable subscription services. Sign up today!',
    images: ['/membership-twitter-image.jpg'], // Replace with your actual Twitter image for the Membership page
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://resqx.net/membership',
  },
};

export default function Membership() {
  return (
    <div className='min-h-screen overflow-x-hidden'>
      <Hero />
      <Pricing />
      <AdditionalServices />
      <FAQSection />
    </div>
  );
}