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
        title="Lost Your Keys? ResQ-X Has You Covered!"
        description="Lost or broken car keys don’t have to ruin your plans. ResQ-X provides fast and reliable key replacement services, helping you regain access to your vehicle without stress. Call us, and we’ll have you back on track in no time!"
        />
      <Services title={"Unlock Peace of Mind with ResQ-X"} />
      <DownloadApp />
      <FAQSection />
    </main>
  );
}