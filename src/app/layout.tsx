import { inter } from "@/ui/fonts/fonts";
import { Metadata } from "next";
import "@/ui/styles/global.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";

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
      <body
        className={cn(
          "bg-background min-h-screen font-sans antialiased",
          // fontSans.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
