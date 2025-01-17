import { Metadata } from "next";
import HeroSection from "@/components/emergency/HeroSection";
import TabsSection from "@/components/emergency/TabSection";
import DownloadApp from '@/components/home/DownloadApp';
import FAQSection from '@/components/home/FAQSection'
// import { AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: 'Rescue Me - ResQ-X | Fast, Reliable, and Affordable Roadside Assistance Near You',
  description: 'Need emergency roadside assistance? ResQ-X is here to help! Get fast, reliable, and affordable services like jump starts, fuel delivery, flat tyre changes, and more. Call us now!',
  keywords: [
    'rescue me',
    'emergency roadside assistance',
    '24/7 roadside help',
    'jump start service',
    'fuel delivery service',
    'flat tyre assistance',
    'ResQ-X rescue services',
    'roadside assistance near me',
    'emergency car help',
    'ResQ-X contact',
  ],
  openGraph: {
    title: 'Rescue Me - ResQ-X | Fast, Reliable, and Affordable Roadside Assistance Near You',
    description: 'Need emergency roadside assistance? ResQ-X is here to help! Get fast, reliable, and affordable services like jump starts, fuel delivery, flat tyre changes, and more. Call us now!',
    url: 'https://resqx.net/rescue',
    siteName: 'ResQ-X',
    type: 'website',
    images: [
      {
        url: '/rescue-og-image.jpg', // Replace with your actual OG image for the Rescue page
        width: 1200,
        height: 630,
        alt: 'Rescue Me - ResQ-X',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rescue Me - ResQ-X | Fast, Reliable, and Affordable Roadside Assistance Near You',
    description: 'Need emergency roadside assistance? ResQ-X is here to help! Get fast, reliable, and affordable services like jump starts, fuel delivery, flat tyre changes, and more. Call us now!',
    images: ['/rescue-twitter-image.jpg'], // Replace with your actual Twitter image for the Rescue page
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
    canonical: 'https://resqx.net/rescue',
  },
};
export default function RescueMe() {


  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
      {/* Hero Section */}
      <HeroSection />
      {/* Tabs Section */}
      <TabsSection />
      <DownloadApp />
      <FAQSection />
    </div>
  );
}

