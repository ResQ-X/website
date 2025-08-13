import type { Metadata } from "next";
import Hero from "@/components/tow-truck/Hero";
import Services from "@/components/tow-truck/Services";
import DownloadApp from "@/components/home/DownloadApp";
import FAQSection from "@/components/home/FAQSection";

export const metadata: Metadata = {
  title:
    "Tow Truck Service - ResQ-X | Fast, Reliable, and Affordable Towing Near You",
  description:
    "Need a tow truck? ResQ-X provides 24/7 fast, reliable, and affordable towing services. Whether it’s a breakdown or an accident, we’re here to help. Call us now!",
  keywords: [
    "tow truck service",
    "emergency towing",
    "24/7 towing service",
    "car towing near me",
    "roadside towing",
    "ResQ-X towing services",
    "breakdown towing",
    "accident towing",
    "affordable towing",
    "ResQ-X tow truck",
    "rescue",
    "rescue company",
    "rescue company in lagos",
  ],
  openGraph: {
    title:
      "Tow Truck Service - ResQ-X | Fast, Reliable, and Affordable Towing Near You",
    description:
      "Need a tow truck? ResQ-X provides 24/7 fast, reliable, and affordable towing services. Whether it’s a breakdown or an accident, we’re here to help. Call us now!",
    url: "https://resqx.ng/tow-truck",
    siteName: "ResQ-X",
    type: "website",
    images: [
      {
        url: "/tow-truck-og-image.jpg", // Replace with your actual OG image for the Tow Truck page
        width: 1200,
        height: 630,
        alt: "Tow Truck Service - ResQ-X",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Tow Truck Service - ResQ-X | Fast, Reliable, and Affordable Towing Near You",
    description:
      "Need a tow truck? ResQ-X provides 24/7 fast, reliable, and affordable towing services. Whether it’s a breakdown or an accident, we’re here to help. Call us now!",
    images: ["/tow-truck-twitter-image.jpg"], // Replace with your actual Twitter image for the Tow Truck page
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://resqx.ng/tow-truck",
  },
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
