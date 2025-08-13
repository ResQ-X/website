import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ResQ-X Test",
  description: "Test build",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
