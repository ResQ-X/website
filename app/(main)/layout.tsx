import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Suspense } from "react";
import dynamic from "next/dynamic";
// import "./globals.css";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import ReferralPopup from "@/components/ReferralPopup";
// import CustomCursor from "@/components/CustomCursor";
// import DarkParticles from "@/components/FloatingParticles";
import Script from "next/script";
// import { FacebookPixel } from "@/utils/facebookPixels";

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

        {/* Google Analytics for main website */}
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

        {/* Facebook Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '993247069587405');
          fbq('track', 'PageView');`}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "t1uehtpfy7");
          `}
        </Script>
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
            {/* <DarkParticles
  particleCount={500}  // 200-300 recommended
  proximity={180}      // Mouse interaction range
  baseSpeed={0.2}     // Slower, more elegant movement
/> */}
          </Suspense>
        </ErrorBoundary>
        {/* Error Boundary for Navbar */}
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
        <main className="flex-grow relative z-0 mt-[-100px]">
          <ErrorBoundary
            fallback={<div>Something went wrong with the main content</div>}
          >
            {children}
          </ErrorBoundary>
        </main>

        {/* Error Boundary for Footer */}
        <ErrorBoundary
          fallback={<div>Something went wrong with the footer</div>}
        >
          <Suspense
            fallback={<div className="h-[200px] bg-gray-100 animate-pulse" />}
          >
            <Footer />
          </Suspense>
        </ErrorBoundary>

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

        <ReferralPopup
          referralLink="https://www.resqx.ng/waitlist"
          voucherAmount={5000}
          brandName="ResQX"
          enableExitIntent={true}
          // Welcome popup content
          welcomeContent={{
            headline: "Welcome to",
            description: "Join thousands who trust ResQX. Get ₦5,000 to start!",
            ctaText: "Join the waitlist Now",
          }}
          // Exit-intent popup content
          exitIntentContent={{
            headline: "Wait! Don't Leave Yet",
            description: "You're about to miss ₦5,000 free credit!",
            ctaText: "Grab It Before I Leave",
            urgency: "This offer expires when you close this tab!",
          }}
        />
      </body>

      {/* welcomeContent={{
            headline: "Get free fuel worth up to ₦5,000!",
            description:
              "Join the Refuel by ResQX waitlist today and unlock a #5,000 fuel voucher to try out the product. With Refuel by ResQX, The fuel comes to you wherever you are.",
            ctaText: "Join the waitlist Now",
          }} */}
    </html>
  );
}
