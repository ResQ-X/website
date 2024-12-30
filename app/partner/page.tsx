import type { Metadata } from 'next'
import Hero from '@/components/partner/Hero'
import TrustedBy from '@/components/partner/TrustedBy'
import WhyPartnerWithUs from '@/components/partner/WhyPartnerWithUs'
import HowItWorks from "@/components/partner/HowItWorks"
import APIIntegrationSection from '@/components/partner/APIIntegrationSection'
import GetAQuoteSection from '@/components/partner/GetAQuoteSection'


export const metadata: Metadata = {
  title: 'ResqX - Elevate Your Service',
  description: 'Join ResqX and expand your reach as a trusted service provider. Connect with more customers, increase your job opportunities, and deliver top-notch service.',
}

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