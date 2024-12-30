import type { Metadata } from 'next';
import AboutHero from '@/components/about/Hero';
import WhoWeAre from '@/components/about/WhoWeAre';
import Services from '@/components/home/Services';
import Team from '@/components/about/Team';
import YouTubeVideoPlayer from '@/components/about/YoutubeVideoPlayer';
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