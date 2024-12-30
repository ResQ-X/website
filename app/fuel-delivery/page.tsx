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
        title="Out of Fuel? ResQ-X Delivers What You Need!"
        description="Running low on fuel? Don’t let it stop you. ResQ-X brings the fuel directly to your location, so you never have to worry about running on empty."
        />
      <Services title={"Fuel Delivery Made Easy and Fast"} />
      <DownloadApp />
      <FAQSection />
    </main>
  );
}