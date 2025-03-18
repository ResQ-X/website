import type { Metadata } from 'next';
import Hero from "@/components/tow-truck/Hero";
import Services from "@/components/tow-truck/Services";
import DownloadApp from '@/components/home/DownloadApp';
import FAQSection from '@/components/home/FAQSection'


export const metadata: Metadata = {
  title: 'Jump Start Service - ResQ-X 24/7 Emergency Battery Assistance',
  description: 'Need a jump start? ResQ-X provides 24/7 emergency jump start services to get your vehicle running again. Call us now for fast and reliable battery assistance!',
  keywords: [
    'jump start service',
    'emergency jump start',
    '24/7 jump start',
    'car battery jump start',
    'roadside jump start',
    'ResQ-X jump start',
    'emergency battery assistance',
    'get a jump start',
    'jump start help',
    'ResQ-X roadside assistance',
  ],
  openGraph: {
    title: 'Jump Start Service - ResQ-X 24/7 Emergency Battery Assistance',
    description: 'Need a jump start? ResQ-X provides 24/7 emergency jump start services to get your vehicle running again. Call us now for fast and reliable battery assistance!',
    url: 'https://resqx.ng/jump-start',
    siteName: 'ResQ-X',
    type: 'website',
    images: [
      {
        url: '/jump-start-og-image.jpg', // Replace with your actual OG image for the Jump Start page
        width: 1200,
        height: 630,
        alt: 'Jump Start Service - ResQ-X',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jump Start Service - ResQ-X 24/7 Emergency Battery Assistance',
    description: 'Need a jump start? ResQ-X provides 24/7 emergency jump start services to get your vehicle running again. Call us now for fast and reliable battery assistance!',
    images: ['/jump-start-twitter-image.jpg'], // Replace with your actual Twitter image for the Jump Start page
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
    canonical: 'https://resqx.ng/jump-start',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero 
        title="Dead Battery? ResQ-X Gets You Going!"
        description="Don’t let a dead battery slow you down. ResQ-X offers fast, safe jump start services to get you back on the road."
        />
      <Services title={"Why Drivers Rely on ResQ-X "} />
      <DownloadApp />
      <FAQSection />
    </main>
  );
}