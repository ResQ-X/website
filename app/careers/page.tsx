import type { Metadata } from 'next';
import CareerHero from '@/components/careers/CareerHero';
import BenefitsSection from '@/components/careers/BenefitsSection';
import CareerPage from '@/components/careers/CareerPage';
import Inquiry from '@/components/careers/Inquiry';



export const metadata: Metadata = {
  title: 'Resqx',
  description: 'Your site description goes here',
  keywords: ['keyword1', 'keyword2'],
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <CareerHero />
      <BenefitsSection />
      <CareerPage />
      <Inquiry />
    </main>
  );
}