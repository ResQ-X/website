import { inter } from '@/ui/fonts/fonts';
import { Metadata } from 'next';
import { AuthProvider } from '../lib/contexts/auth.context';
import "@/ui/styles/global.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
 
export const metadata: Metadata = {
  title: {
    template: '%s | Resq-X',
    default: 'Resq-X',
  },
  description: 'Resq-X Website',
  //metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <body className={'${inter.className} antialiased'}> */}
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
      <AuthProvider>
          {children}
      </AuthProvider>
      </body>
    </html>
  );
}
