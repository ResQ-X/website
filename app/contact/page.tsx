import type { Metadata } from 'next';
import ContactHero from '@/components/contact/ContactHero';
import GetInTouch from "@/components/contact/GetInTouch"
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
      <ContactHero />
      <GetInTouch />
      <DownloadApp />
      <FAQSection />
    </main>
  );
}