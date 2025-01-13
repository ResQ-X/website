import type { Metadata } from 'next';
import AboutHero from '@/components/about/Hero';
import WhoWeAre from '@/components/about/WhoWeAre';
import Services from '@/components/home/Services';
import Team from '@/components/about/Team';
import YouTubeVideoPlayer from '@/components/about/YoutubeVideoPlayer';
import DownloadApp from '@/components/home/DownloadApp';
import FAQSection from '@/components/home/FAQSection'


export const metadata: Metadata = {
  title: {
    template: 'About | ResQ-X - 24/7 Roadside Assistance',
    default: 'About - ResQ-X - Fast & Reliable Roadside Assistance Services'
  },
  description: 'ResQ-X provides 24/7 emergency roadside assistance including jump starts, fuel delivery, flat tire changes, and towing services. Get immediate help with our mobile app.',
  keywords: ['roadside assistance', 'towing service', 'jump start', 'fuel delivery', 'flat tire', 'emergency car service'],
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <WhoWeAre />
      <Services />
      <Team />
      <YouTubeVideoPlayer />
      <DownloadApp />
      <FAQSection />
    </main>
  );
}