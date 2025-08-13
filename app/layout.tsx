import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ResQ-X - Fast & Reliable Roadside Assistance Services",
  description:
    "ResQ-X provides 24/7 emergency roadside assistance including jump starts, fuel delivery, flat tire changes, and towing services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={raleway.variable}>
      <body className="antialiased overflow-x-hidden min-h-screen">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
