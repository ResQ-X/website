import "./globals.css";
import Script from "next/script";
import type { Metadata } from "next";
import ReferralPopup from "@/components/ReferralPopup";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icons/resqx_icon_orange.png" />
        <link rel="apple-touch-icon" href="/icons/resqx_icon_orange.png" />

        {/* Facebook Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '9948967765208268');
          fbq('track', 'PageView');`}
        </Script>

        {/* Google tag (gtag.js) */}
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
      <body>
        {children}
        <ReferralPopup
          referralLink="https://www.resqx.ng/waitlist"
          voucherAmount={5000}
          brandName="ResQX"
          enableExitIntent={true}
          // Welcome popup content
          welcomeContent={{
            headline: "🎉 Welcome to ResQX!",
            description: "Join thousands who trust ResQX. Get ₦5,000 to start!",
            ctaText: "🚀 Claim My Welcome Bonus",
          }}
          // Exit-intent popup content
          exitIntentContent={{
            headline: "⚠️ Wait! Don't Leave Yet",
            description: "You're about to miss ₦5,000 free credit!",
            ctaText: "⏰ Grab It Before I Leave",
            urgency: "This offer expires when you close this tab!",
          }}
        />
      </body>
    </html>
  );
}
