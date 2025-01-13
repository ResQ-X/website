import type { Metadata } from 'next'
import Hero from '@/components/partner/Hero'
import TrustedBy from '@/components/partner/TrustedBy'
import WhyPartnerWithUs from '@/components/partner/WhyPartnerWithUs'
import HowItWorks from "@/components/partner/HowItWorks"
import APIIntegrationSection from '@/components/partner/APIIntegrationSection'
import GetAQuoteSection from '@/components/partner/GetAQuoteSection'


export const metadata: Metadata = {
  title: 'Partner with ResQ-X - Grow Your Business with Us',
  description: 'Join ResQ-X as a partner and expand your business. Connect with more customers, increase your job opportunities, and deliver top-notch roadside assistance services. Partner with us today!',
  keywords: [
    'partner with ResQ-X',
    'join ResQ-X as a partner',
    'grow your business with ResQ-X',
    'roadside assistance partners',
    'service provider partnership',
    'ResQ-X partner program',
    'increase job opportunities',
    'deliver top-notch service',
    'ResQ-X partnership benefits',
    'sign up as a partner',
  ],
  openGraph: {
    title: 'Partner with ResQ-X - Grow Your Business with Us',
    description: 'Join ResQ-X as a partner and expand your business. Connect with more customers, increase your job opportunities, and deliver top-notch roadside assistance services. Partner with us today!',
    url: 'https://res-q-x.vercel.app/partner',
    siteName: 'ResQ-X',
    type: 'website',
    images: [
      {
        url: '/partner-og-image.jpg', // Replace with your actual OG image for the Partner page
        width: 1200,
        height: 630,
        alt: 'Partner with ResQ-X - Grow Your Business with Us',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Partner with ResQ-X - Grow Your Business with Us',
    description: 'Join ResQ-X as a partner and expand your business. Connect with more customers, increase your job opportunities, and deliver top-notch roadside assistance services. Partner with us today!',
    images: ['/partner-twitter-image.jpg'], // Replace with your actual Twitter image for the Partner page
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
    canonical: 'https://res-q-x.vercel.app/partner',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustedBy />
      <WhyPartnerWithUs />
      <HowItWorks />
      <APIIntegrationSection />
      <GetAQuoteSection />
    </main>
  )
}