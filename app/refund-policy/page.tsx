import { Metadata } from "next";
import { MarkdownComponent } from "@/components/MarkdownComponent";


export const metadata: Metadata = {
  title: 'Refund Policy - ResQ-X | Fast, Reliable, and Affordable Roadside Assistance',
  description: 'Read ResQ-X’s Refund Policy to understand our terms and conditions for refunds. We aim to provide fair and transparent refund processes for our customers.',
  keywords: [
    'refund policy',
    'ResQ-X refund policy',
    'roadside assistance refund',
    'refund terms and conditions',
    'ResQ-X refund process',
    'customer refunds',
    'refund eligibility',
    'ResQ-X terms of service',
    'refund request',
    'ResQ-X customer support',
  ],
  openGraph: {
    title: 'Refund Policy - ResQ-X | Fast, Reliable, and Affordable Roadside Assistance',
    description: 'Read ResQ-X’s Refund Policy to understand our terms and conditions for refunds. We aim to provide fair and transparent refund processes for our customers.',
    url: 'https://resqx.net/refund-policy',
    siteName: 'ResQ-X',
    type: 'website',
    images: [
      {
        url: '/refund-policy-og-image.jpg', // Replace with your actual OG image for the Refund Policy page
        width: 1200,
        height: 630,
        alt: 'Refund Policy - ResQ-X',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Refund Policy - ResQ-X | Fast, Reliable, and Affordable Roadside Assistance',
    description: 'Read ResQ-X’s Refund Policy to understand our terms and conditions for refunds. We aim to provide fair and transparent refund processes for our customers.',
    images: ['/refund-policy-twitter-image.jpg'], // Replace with your actual Twitter image for the Refund Policy page
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://resqx.net/refund-policy',
  },
};

export default function Page() {
  return (
    <div className="mt-[100px] pt-[100px]">
      <MarkdownComponent filePath="/files/refund-policy.md" />
    </div>
  );
}
