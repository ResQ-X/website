import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://resqx.ng"),
  title: {
    template: "%s | ResQ-X Waitlist",
    default: "Join the ResQ-X Waitlist",
  },
  description:
    "Be first to access ResQ-X. Join the waitlist and get notified when we launch in your area.",
  openGraph: {
    title: "Join the ResQ-X Waitlist",
    description:
      "Get early access to ResQ-X roadside assistance. Join the waitlist today.",
    url: "https://resqx.ng/waitlist",
    siteName: "ResQ-X",
    type: "website",
    images: [
      {
        url: "/icons/resqx_icon_orange.png",
        width: 1200,
        height: 630,
        alt: "ResQ-X Waitlist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Join the ResQ-X Waitlist",
    description:
      "Be first to access ResQ-X. Join the waitlist and get notified at launch.",
    images: ["/icons/resqx_icon_orange.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://resqx.ng/waitlist",
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

export default function WaitlistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icons/resqx_icon_orange.png" />
        <link rel="apple-touch-icon" href="/icons/resqx_icon_orange.png" />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        {/* Google Analytics for waitlist */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EZR18WSZN9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EZR18WSZN9');
          `}
        </Script>

        {/* Facebook Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '9948967765208268');
          fbq('track', 'PageView');`}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "sus3y913po");
          `}
        </Script>
      </head>

      {/* No Navbar / No Footer */}
      <body className="min-h-screen antialiased bg-white text-gray-900">
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
