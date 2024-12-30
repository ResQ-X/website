import type { Metadata } from 'next';
import Hero from '@/components/membership/Hero';
import Pricing from '@/components/membership/Pricing';
import AdditionalServices from '@/components/membership/AdditionalServices';
import FAQSection from '../../components/home/FAQSection';

export const metadata: Metadata = {
  title: 'Resqx',
  description: 'Your site description goes here',
  keywords: ['keyword1', 'keyword2'],
};
export default function Membership() {
  return (
    <div className='min-h-screen'>
      <Hero />
      <Pricing />
      <AdditionalServices />
      <FAQSection />
    </div>
  );
}