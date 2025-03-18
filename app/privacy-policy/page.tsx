import { Metadata } from "next";
import { MarkdownComponent } from "@/components/MarkdownComponent";


export const metadata: Metadata = {
  title: 'Privacy Policy - ResQ-X | Fast, Reliable, and Affordable Roadside Assistance',
  description: 'Read ResQ-X’s Privacy Policy to understand how we collect, use, and protect your personal information. Your privacy is important to us.',
  keywords: [
    'privacy policy',
    'ResQ-X privacy policy',
    'data protection',
    'personal information',
    'roadside assistance privacy',
    'ResQ-X data usage',
    'privacy practices',
    'ResQ-X terms and conditions',
    'user data protection',
    'ResQ-X privacy commitment',
  ],
  openGraph: {
    title: 'Privacy Policy - ResQ-X | Fast, Reliable, and Affordable Roadside Assistance',
    description: 'Read ResQ-X’s Privacy Policy to understand how we collect, use, and protect your personal information. Your privacy is important to us.',
    url: 'https://resqx.ng/privacy-policy',
    siteName: 'ResQ-X',
    type: 'website',
    images: [
      {
        url: '/privacy-policy-og-image.jpg', // Replace with your actual OG image for the Privacy Policy page
        width: 1200,
        height: 630,
        alt: 'Privacy Policy - ResQ-X',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy - ResQ-X | Fast, Reliable, and Affordable Roadside Assistance',
    description: 'Read ResQ-X’s Privacy Policy to understand how we collect, use, and protect your personal information. Your privacy is important to us.',
    images: ['/privacy-policy-twitter-image.jpg'], // Replace with your actual Twitter image for the Privacy Policy page
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
    canonical: 'https://resqx.ng/privacy-policy',
  },
};

export default function Page() {
  return (
    <div className="mt-[100px] pt-[100px]">
      <MarkdownComponent filePath="/files/privacy-policy.md" />
    </div>
  );
}
