import { inter } from "@/ui/fonts/fonts";
import { Metadata } from "next";
import "@/ui/styles/global.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { NavBar } from "@/components/navbar/NavBar";
import { Footer } from "@/components/footer/Footer";
import { TawkMessenger } from "@/components/tawk/TawkMessenger";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Resq-X",
    default: "Resq-X",
  },
  description: "Resq-X Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head></head>
      <body
        className={cn(
          "min-h-screen bg-white font-sans antialiased",
          // fontSans.variable,
        )}
      >
        <NavBar />
        {children}
        <TawkMessenger />
        <Footer />
      </body>
    </html>
  );
}
