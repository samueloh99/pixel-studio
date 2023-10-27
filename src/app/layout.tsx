import type { Metadata } from "next";
import { Playpen_Sans as Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["800", "500", "300"],
});

export const metadata: Metadata = {
  title: "Pixel Studio",
  description: "Design & Development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
