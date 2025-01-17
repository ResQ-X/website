import type { Metadata } from "next";
import { Raleway } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import "./globals.css";
import { ErrorBoundary } from "@/components/ErrorBoundary";
// import { FacebookPixel } from "@/utils/facebookPixels";

// Components
const Navbar = dynamic(() => import("@/components/navbar/Navbar"), {
  ssr: true,
  loading: () => <div className="h-[100px] bg-white animate-pulse" />
});

const Footer = dynamic(() => import("@/components/footer/Footer"), {
  ssr: true,
  loading: () => <div className="h-[200px] bg-gray-100 animate-pulse" />
});

// Font optimization
const raleway = Raleway({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-raleway',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
  adjustFontFallback: true,
});

// SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://resqx.net'),
  title: {
    template: '%s | ResQ-X - 24/7 Roadside Assistance',
    default: 'ResQ-X - Fast & Reliable Roadside Assistance Services'
  },
  description: 'ResQ-X provides 24/7 emergency roadside assistance including jump starts, fuel delivery, flat tire changes, and towing services. Get immediate help with our mobile app.',
  keywords: ['roadside assistance', 'towing service', 'jump start', 'fuel delivery', 'flat tire', 'emergency car service'],
  openGraph: {
    title: 'ResQ-X - 24/7 Roadside Assistance',
    description: 'Get immediate roadside assistance with ResQ-X. Available 24/7 for jump starts, fuel delivery, tire changes & more.',
    url: 'https://resqx.net',
    siteName: 'ResQ-X',
    type: 'website',
    images: [
      {
        url: '/icons/resqx_icon_orange.png',
        width: 1200,
        height: 630,
        alt: 'ResQ-X Roadside Assistance'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ResQ-X - 24/7 Roadside Assistance',
    description: 'Fast & reliable roadside assistance when you need it most.',
    images: ['/icons/resqx_icon_orange.png']
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
  verification: {
    google: '2y-F1BcRMBbF7tum2kv_EJqBbh6uXHbELzjR9Dt11ho',
  },
  alternates: {
    canonical: 'https://new.resqx.net',
    languages: {
      'en-NG': 'https://new.resqx.net/',
    },
  },
};

// JSON-LD Schema
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'ResQ-X',
  url: 'https://new.resqx.net',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://new.resqx.net/search?q={search_term_string}',
    'query-input': 'required name=search_term_string'
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      className={`${raleway.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icons/resqx_icon_orange.png" />
        <link rel="apple-touch-icon" href="/icons/resqx_icon_orange.png" />
        
        {/* Preconnect to critical third-party domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* JSON-LD Schema */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      
      <body 
        className={`
          antialiased 
          overflow-x-hidden 
          min-h-screen 
          flex 
          flex-col
        `}
      >
        {/* Error Boundary for Navbar */}
        <ErrorBoundary fallback={<div>Something went wrong with the navigation</div>}>
          <Suspense fallback={<div className="h-[100px] bg-white animate-pulse" />}>
            <Navbar />
          </Suspense>
        </ErrorBoundary>

        {/* Main content */}
        <main className="flex-grow relative z-0 mt-[-100px]">
          <ErrorBoundary fallback={<div>Something went wrong with the main content</div>}>
            {children}
          </ErrorBoundary>
        </main>

        {/* Error Boundary for Footer */}
        <ErrorBoundary fallback={<div>Something went wrong with the footer</div>}>
          <Suspense fallback={<div className="h-[200px] bg-gray-100 animate-pulse" />}>
            <Footer />
          </Suspense>
        </ErrorBoundary>

        {/* Performance monitoring */}
        {process.env.NODE_ENV === 'production' && (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        )}

        {/* Skip to main content link for accessibility */}
        <a 
          href="#main-content" 
          className="
            sr-only 
            focus:not-sr-only 
            focus:absolute 
            focus:top-0 
            focus:left-0 
            focus:z-50 
            focus:bg-white 
            focus:p-4
          "
        >
          Skip to main content
        </a>
      </body>
    </html>
  );
}

// components/ErrorBoundary.tsx
