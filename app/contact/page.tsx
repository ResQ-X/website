import type { Metadata } from 'next';
import ContactHero from '@/components/contact/ContactHero';
import GetInTouch from "@/components/contact/GetInTouch"
import DownloadApp from '@/components/home/DownloadApp';
import FAQSection from '@/components/home/FAQSection'


export const metadata: Metadata = {
  title: 'Contact ResQ-X - Get in Touch for Roadside Assistance',
  description: 'Contact ResQ-X for 24/7 roadside assistance services. Reach out to us for jump starts, fuel delivery, flat tire changes, and more. We’re here to help!',
  keywords: [
    'contact ResQ-X',
    'roadside assistance contact',
    'emergency car service contact',
    'towing service contact',
    'fuel delivery contact',
    'flat tire assistance contact',
    'ResQ-X support',
    'ResQ-X contact info',
    'roadside assistance help',
    'get in touch with ResQ-X',
  ],
  openGraph: {
    title: 'Contact ResQ-X - Get in Touch for Roadside Assistance',
    description: 'Contact ResQ-X for 24/7 roadside assistance services. Reach out to us for jump starts, fuel delivery, flat tire changes, and more. We’re here to help!',
    url: 'https://resqx.net/contact',
    siteName: 'ResQ-X',
    type: 'website',
    images: [
      {
        url: '/contact-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact ResQ-X',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact ResQ-X - Get in Touch for Roadside Assistance',
    description: 'Contact ResQ-X for 24/7 roadside assistance services. Reach out to us for jump starts, fuel delivery, flat tire changes, and more. We’re here to help!',
    images: ['/contact-twitter-image.jpg'],
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
    canonical: 'https://resqx.net/contact',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <ContactHero />
      <GetInTouch />
      <DownloadApp />
      <FAQSection />
    </main>
  );
}