import type { Metadata } from "next";
import Image from "next/image";
import { Raleway } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import "./globals.css";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import Script from "next/script";

// Components
const Navbar = dynamic(() => import("@/components/navbar/Navbar"), {
  ssr: true,
  loading: () => <div className="h-[100px] bg-white animate-pulse" />,
});

const Footer = dynamic(() => import("@/components/footer/Footer"), {
  ssr: true,
  loading: () => <div className="h-[200px] bg-gray-100 animate-pulse" />,
});

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
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={raleway.variable} suppressHydrationWarning>
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
        <Script
          id="ld-json"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        {/* Load gtag once, configure both GA4 + Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-966TDL1C6V"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            // GA4
            gtag('config', 'G-966TDL1C6V', { anonymize_ip: true });
            // Google Ads (Conversion ID)
            gtag('config', 'AW-16858022239');
          `,
          }}
        />

        {/* Meta Pixel (Facebook) */}
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
            (window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
            try {
              fbq('init', '9948967765208268');
              fbq('track', 'PageView');
            } catch (e) { console.error('FB Pixel init error', e); }
          `,
          }}
        />
      </head>

      <body className="antialiased overflow-x-hidden min-h-screen flex flex-col">
        {/* Meta Pixel noscript fallback (must be in body) */}
        <noscript>
          <Image
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=9948967765208268&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* Top-level boundaries / effects */}
        <ErrorBoundary
          fallback={<div>Something went wrong with the navigation</div>}
        >
          <Suspense
            fallback={<div className="h-[100px] bg-white animate-pulse" />}
          >
            {/* <CustomCursor /> */}
          </Suspense>
        </ErrorBoundary>

        <ErrorBoundary
          fallback={<div>Something went wrong with the navigation</div>}
        >
          <Suspense
            fallback={<div className="h-[100px] bg-white animate-pulse" />}
          >
            {/* <DarkParticles /> */}
          </Suspense>
        </ErrorBoundary>

        {/* Navbar */}
        <ErrorBoundary
          fallback={<div>Something went wrong with the navigation</div>}
        >
          <Suspense
            fallback={<div className="h-[100px] bg-white animate-pulse" />}
          >
            <Navbar />
          </Suspense>
        </ErrorBoundary>

        {/* Main content */}
        <main id="main-content" className="flex-grow relative z-0 mt-[-100px]">
          <ErrorBoundary
            fallback={<div>Something went wrong with the main content</div>}
          >
            {children}
          </ErrorBoundary>
        </main>

        {/* Footer */}
        <ErrorBoundary
          fallback={<div>Something went wrong with the footer</div>}
        >
          <Suspense
            fallback={<div className="h-[200px] bg-gray-100 animate-pulse" />}
          >
            <Footer />
          </Suspense>
        </ErrorBoundary>

        {/* Performance monitoring (prod only) */}
        {process.env.NODE_ENV === "production" && (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        )}

        {/* Accessibility: Skip to main content */}
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
