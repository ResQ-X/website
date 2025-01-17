import type { Metadata } from 'next';
import Hero from "@/components/tow-truck/Hero";
import Services from "@/components/tow-truck/Services";
import DownloadApp from '@/components/home/DownloadApp';
import FAQSection from '@/components/home/FAQSection'


export const metadata: Metadata = {
  title: 'Fuel Delivery Service - ResQ-X 24/7 Emergency Fuel Assistance',
  description: 'Need fuel delivery? ResQ-X provides 24/7 emergency fuel delivery services to get you back on the road quickly. Call us now for fast and reliable fuel assistance!',
  keywords: [
    'fuel delivery service',
    'emergency fuel delivery',
    '24/7 fuel delivery',
    'fuel delivery near me',
    'roadside fuel delivery',
    'ResQ-X fuel delivery',
    'emergency fuel assistance',
    'get fuel delivered',
    'fuel delivery help',
    'ResQ-X roadside assistance',
  ],
  openGraph: {
    title: 'Fuel Delivery Service - ResQ-X 24/7 Emergency Fuel Assistance',
    description: 'Need fuel delivery? ResQ-X provides 24/7 emergency fuel delivery services to get you back on the road quickly. Call us now for fast and reliable fuel assistance!',
    url: 'https://resqx.net/fuel-delivery',
    siteName: 'ResQ-X',
    type: 'website',
    images: [
      {
        url: '/fuel-delivery-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Fuel Delivery Service - ResQ-X',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fuel Delivery Service - ResQ-X 24/7 Emergency Fuel Assistance',
    description: 'Need fuel delivery? ResQ-X provides 24/7 emergency fuel delivery services to get you back on the road quickly. Call us now for fast and reliable fuel assistance!',
    images: ['/fuel-delivery-twitter-image.jpg'],
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
    canonical: 'https://resqx.net/fuel-delivery',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero 
        title="Out of Fuel? ResQ-X Delivers What You Need!"
        description="Running low on fuel? Don’t let it stop you. ResQ-X brings the fuel directly to your location, so you never have to worry about running on empty."
        />
      <Services title={"Fuel Delivery Made Easy and Fast"} />
      <DownloadApp />
      <FAQSection />
    </main>
  );
}