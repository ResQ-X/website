import type { Metadata } from 'next';
import Hero from "@/components/tow-truck/Hero";
import Services from "@/components/tow-truck/Services";
import DownloadApp from '@/components/home/DownloadApp';
import FAQSection from '@/components/home/FAQSection'


export const metadata: Metadata = {
  title: 'Flat Tyre Assistance - ResQ-X 24/7 Emergency Help',
  description: 'Get immediate flat tyre assistance from ResQ-X. Our 24/7 emergency service ensures you’re back on the road quickly and safely. Call us now for help!',
  keywords: [
    'flat tyre assistance',
    'emergency flat tyre help',
    '24/7 flat tyre service',
    'flat tyre repair near me',
    'roadside flat tyre help',
    'ResQ-X flat tyre service',
    'emergency car tyre assistance',
    'flat tyre replacement',
    'get help with flat tyre',
    'ResQ-X roadside assistance',
  ],
  openGraph: {
    title: 'Flat Tyre Assistance - ResQ-X 24/7 Emergency Help',
    description: 'Get immediate flat tyre assistance from ResQ-X. Our 24/7 emergency service ensures you’re back on the road quickly and safely. Call us now for help!',
    url: 'https://res-q-x.vercel.app/flat-tyre',
    siteName: 'ResQ-X',
    type: 'website',
    images: [
      {
        url: '/flat-tyre-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Flat Tyre Assistance - ResQ-X',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flat Tyre Assistance - ResQ-X 24/7 Emergency Help',
    description: 'Get immediate flat tyre assistance from ResQ-X. Our 24/7 emergency service ensures you’re back on the road quickly and safely. Call us now for help!',
    images: ['/flat-tyre-twitter-image.jpg'],
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
    canonical: 'https://res-q-x.vercel.app/flat-tyre',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero 
        title="Flat Tyre? ResQ-X to the Rescue!"
        description='With ResQ-X, getting back on the road is quick and hassle-free. Our reliable team is just a call away, ready to provide expert tyre repair or replacement services, whenever and wherever needed.'
        />
      <Services title={"Why Choose ResQ-X for Flat Tyre Service"} />
      <DownloadApp />
      <FAQSection />
    </main>
  );
}