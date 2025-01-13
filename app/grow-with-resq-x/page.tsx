import type { Metadata } from 'next'
import Hero from '@/components/grow-with-resq-x/Hero'
import WhyResqX from '@/components/grow-with-resq-x/WhyResqX'
import Testimonials from '@/components/grow-with-resq-x/Testimonials'


export const metadata: Metadata = {
  title: 'Grow with ResQ-X - Expand Your Service Business',
  description: 'Join ResQ-X and elevate your service business. Connect with more customers, increase your job opportunities, and deliver top-notch roadside assistance services. Sign up today!',
  keywords: [
    'grow with ResQ-X',
    'join ResQ-X as a service provider',
    'expand your service business',
    'roadside assistance service providers',
    'increase job opportunities',
    'ResQ-X partner program',
    'service provider network',
    'deliver top-notch service',
    'ResQ-X growth opportunities',
    'sign up as a service provider',
  ],
  openGraph: {
    title: 'Grow with ResQ-X - Expand Your Service Business',
    description: 'Join ResQ-X and elevate your service business. Connect with more customers, increase your job opportunities, and deliver top-notch roadside assistance services. Sign up today!',
    url: 'https://res-q-x.vercel.app/grow-with-resq-x',
    siteName: 'ResQ-X',
    type: 'website',
    images: [
      {
        url: '/grow-with-resqx-og-image.jpg', // Replace with your actual OG image for the Grow with ResQ-X page
        width: 1200,
        height: 630,
        alt: 'Grow with ResQ-X - Expand Your Service Business',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grow with ResQ-X - Expand Your Service Business',
    description: 'Join ResQ-X and elevate your service business. Connect with more customers, increase your job opportunities, and deliver top-notch roadside assistance services. Sign up today!',
    images: ['/grow-with-resqx-twitter-image.jpg'], // Replace with your actual Twitter image for the Grow with ResQ-X page
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
    canonical: 'https://res-q-x.vercel.app/grow-with-resq-x',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Hero />
      <WhyResqX />
      <Testimonials />
    </main>
  )
}