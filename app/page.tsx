import type { Metadata } from 'next';
import Hero from '@/components/home/Hero';
import TrustedBy from '@/components/home/TrustedBy';
import Services from '@/components/home/Services';
import MobileAppSection from '@/components/home/MobileAppSection';
import BusinessSection from '@/components/home/BusinessSection';
import { HomeBlogSection } from '@/components/home/HomeBlogSection'
import Testimonials from '@/components/home/Testimonials'
import DownloadApp from '@/components/home/DownloadApp';
import FAQSection from '@/components/home/FAQSection'

export const metadata: Metadata = {
  title: 'Resqx',
  description: 'Your site description goes here',
  keywords: ['keyword1', 'keyword2'],
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustedBy />
      <Services />
      <MobileAppSection />
      <BusinessSection />
      <HomeBlogSection />
      <Testimonials />
      <DownloadApp />
      <FAQSection />
    </main>
  );
}