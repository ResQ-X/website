import type { Metadata } from 'next';
import Hero from "@/components/tow-truck/Hero";
import Services from "@/components/tow-truck/Services";
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
      <Hero 
        title="BYE-BYE BREAKDOWNS, HELLO RESQ-X!"
        description="Stuck on the road? Don't worry, we've got you covered! ResQ-X tow truck services are just a call away to get you back on track, fast and hassle-free."
        />
      <Services title={"Breakdowns Happen, ResQ-X is Here!"} />
      <DownloadApp />
      <FAQSection />
    </main>
  );
}