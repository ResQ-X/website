import type { Metadata } from "next";
import Hero from "@/components/tow-truck/Hero";
import Services from "@/components/tow-truck/Services";
import DownloadApp from "@/components/home/DownloadApp";
import FAQSection from "@/components/home/FAQSection";

export const metadata: Metadata = {
  title: "Vehicle Health Check - ResQ-X Comprehensive Diagnostics",
  description:
    "Ensure your vehicle is in top condition with ResQ-X’s comprehensive vehicle health check services. Our expert diagnostics help you avoid breakdowns and maintain peak performance. Schedule now!",
  keywords: [
    "vehicle health check",
    "car diagnostics",
    "comprehensive vehicle inspection",
    "car maintenance check",
    "ResQ-X health check",
    "vehicle performance diagnostics",
    "avoid car breakdowns",
    "car health assessment",
    "schedule vehicle check",
    "ResQ-X car services",
    "rescue",
    "rescue company",
    "rescue company in lagos",
  ],
  openGraph: {
    title: "Vehicle Health Check - ResQ-X Comprehensive Diagnostics",
    description:
      "Ensure your vehicle is in top condition with ResQ-X’s comprehensive vehicle health check services. Our expert diagnostics help you avoid breakdowns and maintain peak performance. Schedule now!",
    url: "https://resqx.ng/health-check",
    siteName: "ResQ-X",
    type: "website",
    images: [
      {
        url: "/health-check-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vehicle Health Check - ResQ-X",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vehicle Health Check - ResQ-X Comprehensive Diagnostics",
    description:
      "Ensure your vehicle is in top condition with ResQ-X’s comprehensive vehicle health check services. Our expert diagnostics help you avoid breakdowns and maintain peak performance. Schedule now!",
    images: ["/health-check-twitter-image.jpg"],
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
    canonical: "https://resqx.ng/health-check",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Keep Your Car in Check with ResQ-X!"
        description="A well-maintained car means a safer, smoother ride. With ResQ-X health check services, we ensure your vehicle is in top condition by performing thorough diagnostics and maintenance checks. "
      />
      <Services title={"Stay on the Move with Expert Tyre Assistance"} />
      <DownloadApp />
      <FAQSection />
    </main>
  );
}
