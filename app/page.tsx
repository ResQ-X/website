import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import TrustedBy from '@/components/home/TrustedBy';
import Services from '@/components/home/Services';
import MobileAppSection from '@/components/home/MobileAppSection';
import BusinessSection from '@/components/home/BusinessSection';
import { HomeBlogSection } from '@/components/home/HomeBlogSection'
import Testimonials from '@/components/home/Testimonials'
import DownloadApp from '@/components/home/DownloadApp';
import FAQSection from '@/components/home/FAQSection'
import FeaturedIn from '@/components/home/FeaturedIn';

export const metadata: Metadata = {
  title: 'ResQ-X | Fast, Reliable, and Affordable Roadside Assistance Near You',
  description: 'ResQ-X provides 24/7 roadside assistance services, including jump starts, fuel delivery, flat tyre changes, and towing. Get fast, reliable, and affordable help when you need it most.',
  keywords: [
    'roadside assistance',
    '24/7 roadside help',
    'jump start service',
    'fuel delivery service',
    'flat tyre assistance',
    'towing service',
    'emergency car help',
    'ResQ-X services',
    'affordable roadside assistance',
    'roadside assistance near me',
  ],
  openGraph: {
    title: 'ResQ-X | Fast, Reliable, and Affordable Roadside Assistance Near You',
    description: 'ResQ-X provides 24/7 roadside assistance services, including jump starts, fuel delivery, flat tyre changes, and towing. Get fast, reliable, and affordable help when you need it most.',
    url: 'https://resqx.ng',
    siteName: 'ResQ-X',
    type: 'website',
    images: [
      {
        url: '/home-og-image.jpg', // Replace with your actual OG image for the Home page
        width: 1200,
        height: 630,
        alt: 'ResQ-X | Fast, Reliable, and Affordable Roadside Assistance',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ResQ-X | Fast, Reliable, and Affordable Roadside Assistance Near You',
    description: 'ResQ-X provides 24/7 roadside assistance services, including jump starts, fuel delivery, flat tyre changes, and towing. Get fast, reliable, and affordable help when you need it most.',
    images: ['/home-twitter-image.jpg'], // Replace with your actual Twitter image for the Home page
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
    canonical: 'https://resqx.ng',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Hero />
      <TrustedBy />
      <Services />
      <MobileAppSection />
      <div className="px-2 lg:px-0">
        <BusinessSection />
      </div>
      <FeaturedIn />
      <HomeBlogSection />
      <Testimonials />
      <DownloadApp />
      <FAQSection />
    </main>
  );
}