import BlogPageClient from "./BlogPageClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - ResQ-X | Roadside Assistance Insights",
  description:
    "Discover expert tips, stories, and insights about roadside assistance",
  keywords: [
    "roadside assistance",
    "towing service",
    "jump start",
    "fuel delivery",
    "flat tire",
    "emergency car service",
    "rescue",
    "rescue company",
    "rescue company in lagos",
  ],
  openGraph: {
    title: "Blog - ResQ-X | Roadside Assistance Insights",
    description:
      "Discover expert tips, stories, and insights about roadside assistance",
    url: "https://resqx.ng/blog", // Replace with the actual URL of your blog page
    siteName: "ResQ-X",
    type: "website",
    images: [
      {
        url: "/blog-og-image.jpg", // Replace with your actual OG image for the blog page
        width: 1200,
        height: 630,
        alt: "Blog - ResQ-X | Roadside Assistance Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - ResQ-X | Roadside Assistance Insights",
    description:
      "Discover expert tips, stories, and insights about roadside assistance",
    images: ["/blog-twitter-image.jpg"], // Replace with your actual Twitter image for the blog page
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
    canonical: "https://resqx.ng/blog", // Replace with the canonical URL of your blog page
  },
};

export default function BlogPage() {
  return (
    <div>
      <BlogPageClient />
    </div>
  );
}
