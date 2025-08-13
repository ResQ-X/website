import type { Metadata } from "next";
import Image from "next/image";
import { Raleway } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Script from "next/script";
import { ConditionalLayout } from "@/components/ConditionalLayout";

// Font optimization
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-raleway",
  display: "swap",
  preload: true,
  fallback: [
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Arial",
    "sans-serif",
  ],
  adjustFontFallback: true,
});

// SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://resqx.ng"),
  title: {
    template: "%s | ResQ-X - 24/7 Roadside Assistance",
    default: "ResQ-X - Fast & Reliable Roadside Assistance Services",
  },
  description:
    "ResQ-X provides 24/7 emergency roadside assistance including jump starts, fuel delivery, flat tire changes, and towing services. Get immediate help with our mobile app.",
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
    title: "ResQ-X - 24/7 Roadside Assistance",
    description:
      "Get immediate roadside assistance with ResQ-X. Available 24/7 for jump starts, fuel delivery, tire changes & more.",
    url: "https://resqx.ng",
    siteName: "ResQ-X",
    type: "website",
    images: [
      {
        url: "/icons/resqx_icon_orange.png",
        width: 1200,
        height: 630,
        alt: "ResQ-X Roadside Assistance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ResQ-X - 24/7 Roadside Assistance",
    description: "Fast & reliable roadside assistance when you need it most.",
    images: ["/icons/resqx_icon_orange.png"],
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
  verification: {
    google: "2y-F1BcRMBbF7tum2kv_EJqBbh6uXHbELzjR9Dt11ho",
  },
  alternates: {
    canonical: "https://resqx.ng",
    languages: {
      "en-NG": "https://resqx.ng/",
    },
  },
};

// JSON-LD Schema
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "ResQ-X",
  url: "https://resqx.ng",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://resqx.ng/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${raleway.variable}`} suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icons/resqx_icon_orange.png" />
        <link rel="apple-touch-icon" href="/icons/resqx_icon_orange.png" />

        {/* Preconnect to critical third-party domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '9948967765208268');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <Image
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=9948967765208268&ev=PageView&noscript=1"
            alt="Facebook Pixel"
          />
        </noscript>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-966TDL1C6V"
          strategy="afterInteractive"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-966TDL1C6V');
            `,
          }}
        />

        {/* Google Ads Conversion Tracking */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16858022239"
          strategy="afterInteractive"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16858022239');
            `,
          }}
        />
      </head>

      <body className="antialiased overflow-x-hidden min-h-screen flex flex-col">
        <ConditionalLayout>{children}</ConditionalLayout>

        {/* Performance monitoring */}
        {process.env.NODE_ENV === "production" && (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        )}

        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:bg-white focus:p-4"
        >
          Skip to main content
        </a>
      </body>
    </html>
  );
}
