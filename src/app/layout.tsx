import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Stake Digital Media | Premium Out-of-Home Advertising in South Africa",
  description: "B2B out-of-home advertising solutions featuring digital screens and billboards across South Africa. Measurable, data-driven results for media buyers and brand managers.",
  keywords: ["out-of-home advertising", "digital screens", "billboards", "South Africa", "OOH advertising", "brand advertising", "Soweto", "media buying"],
  authors: [{ name: "Stake Digital Media" }],
  creator: "Stake Digital Media",
  publisher: "Stake Digital Media",
  metadataBase: new URL('https://stakee-digital-media.vercel.app'),
  
  // Open Graph metadata for social sharing
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://stakee-digital-media.vercel.app",
    title: "Stake Digital Media | Premium Out-of-Home Advertising in South Africa",
    description: "B2B out-of-home advertising solutions featuring digital screens and billboards across South Africa. Measurable, data-driven results for media buyers and brand managers.",
    siteName: "Stake Digital Media",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "Stake Digital Media - Out-of-Home Advertising",
      },
    ],
  },
  
  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "Stake Digital Media | Premium Out-of-Home Advertising",
    description: "B2B out-of-home advertising solutions featuring digital screens and billboards across South Africa.",
    images: ["/logo.svg"],
    creator: "@stakedigital",
  },
  
  // Icons
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    apple: "/logo.svg",
    shortcut: "/favicon.ico",
  },
  
  // Additional metadata
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${openSans.variable} font-sans antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
