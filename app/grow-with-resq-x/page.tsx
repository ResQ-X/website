import type { Metadata } from 'next'
import Hero from '@/components/grow-with-resq-x/Hero'
import WhyResqX from '@/components/grow-with-resq-x/WhyResqX'
import Testimonials from '@/components/grow-with-resq-x/Testimonials'


export const metadata: Metadata = {
  title: 'ResqX - Elevate Your Service',
  description: 'Join ResqX and expand your reach as a trusted service provider. Connect with more customers, increase your job opportunities, and deliver top-notch service.',
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhyResqX />
      <Testimonials />
    </main>
  )
}