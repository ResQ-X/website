import type { Metadata } from 'next';
import Hero from "@/components/tow-truck/Hero";
import Services from "@/components/tow-truck/Services";
import DownloadApp from '@/components/home/DownloadApp';
import FAQSection from '@/components/home/FAQSection'


export const metadata: Metadata = {
  title: 'Key Replacement Service - ResQ-X 24/7 Emergency Key Assistance',
  description: 'Lost or damaged your car keys? ResQ-X provides 24/7 emergency key replacement services to get you back on the road quickly. Call us now for fast and reliable key assistance!',
  keywords: [
    'key replacement service',
    'emergency key replacement',
    '24/7 key replacement',
    'car key replacement',
    'roadside key replacement',
    'ResQ-X key replacement',
    'emergency key assistance',
    'get a key replacement',
    'key replacement help',
    'ResQ-X roadside assistance',
  ],
  openGraph: {
    title: 'Key Replacement Service - ResQ-X 24/7 Emergency Key Assistance',
    description: 'Lost or damaged your car keys? ResQ-X provides 24/7 emergency key replacement services to get you back on the road quickly. Call us now for fast and reliable key assistance!',
    url: 'https://res-q-x.vercel.app/key-replacement',
    siteName: 'ResQ-X',
    type: 'website',
    images: [
      {
        url: '/key-replacement-og-image.jpg', // Replace with your actual OG image for the Key Replacement page
        width: 1200,
        height: 630,
        alt: 'Key Replacement Service - ResQ-X',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Key Replacement Service - ResQ-X 24/7 Emergency Key Assistance',
    description: 'Lost or damaged your car keys? ResQ-X provides 24/7 emergency key replacement services to get you back on the road quickly. Call us now for fast and reliable key assistance!',
    images: ['/key-replacement-twitter-image.jpg'], // Replace with your actual Twitter image for the Key Replacement page
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
    canonical: 'https://res-q-x.vercel.app/key-replacement',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero 
        title="Lost Your Keys? ResQ-X Has You Covered!"
        description="Lost or broken car keys don’t have to ruin your plans. ResQ-X provides fast and reliable key replacement services, helping you regain access to your vehicle without stress. Call us, and we’ll have you back on track in no time!"
        />
      <Services title={"Unlock Peace of Mind with ResQ-X"} />
      <DownloadApp />
      <FAQSection />
    </main>
  );
}