import type { Metadata } from 'next';
import CareerHero from '@/components/careers/CareerHero';
import BenefitsSection from '@/components/careers/BenefitsSection';
import CareerPage from '@/components/careers/CareerPage';
import Inquiry from '@/components/careers/Inquiry';



export const metadata: Metadata = {
  title: 'Careers at ResQ-X - Join Our Roadside Assistance Team',
  description: 'Explore exciting career opportunities at ResQ-X. Join our team of professionals dedicated to providing 24/7 roadside assistance services. Apply now!',
  keywords: [
    'careers at ResQ-X',
    'roadside assistance jobs',
    'join ResQ-X team',
    'emergency service careers',
    'towing service jobs',
    'fuel delivery careers',
    'flat tire assistance jobs',
    'work at ResQ-X',
    'ResQ-X careers',
    'roadside assistance careers',
  ],
  openGraph: {
    title: 'Careers at ResQ-X - Join Our Roadside Assistance Team',
    description: 'Explore exciting career opportunities at ResQ-X. Join our team of professionals dedicated to providing 24/7 roadside assistance services. Apply now!',
    url: 'https://resqx.ng/careers',
    siteName: 'ResQ-X',
    type: 'website',
    images: [
      {
        url: '/careers-og-image.jpg', // Replace with your actual OG image for the Careers page
        width: 1200,
        height: 630,
        alt: 'Careers at ResQ-X',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers at ResQ-X - Join Our Roadside Assistance Team',
    description: 'Explore exciting career opportunities at ResQ-X. Join our team of professionals dedicated to providing 24/7 roadside assistance services. Apply now!',
    images: ['/careers-twitter-image.jpg'], // Replace with your actual Twitter image for the Careers page
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
    canonical: 'https://resqx.ng/careers',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <CareerHero />
      <BenefitsSection />
      <CareerPage />
      <Inquiry />
    </main>
  );
}