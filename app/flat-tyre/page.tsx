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
        title="Flat Tyre? ResQ-X to the Rescue!"
        description='With ResQ-X, getting back on the road is quick and hassle-free. Our reliable team is just a call away, ready to provide expert tyre repair or replacement services, whenever and wherever needed.'
        />
      <Services title={"Why Choose ResQ-X for Flat Tyre Service"} />
      <DownloadApp />
      <FAQSection />
    </main>
  );
}