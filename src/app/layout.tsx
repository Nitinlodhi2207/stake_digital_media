import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import LeadCaptureModal from "@/components/LeadCaptureModal";
import { OrganizationSchema, LocalBusinessSchema, ServiceSchema } from "@/components/StructuredData";
import { MidgrowCreatorSchema, WebSiteCreatorSchema, TechnicalProviderSchema } from "@/components/MidgrowSEO";

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
  metadataBase: new URL('https://www.stakedigital.co.za'),
  title: {
    default: "Stake Digital Media | Premium Out-of-Home Advertising in South Africa",
    template: "%s | Stake Digital Media"
  },
  description: "B2B out-of-home advertising solutions featuring digital screens and billboards across South Africa. Measurable, data-driven results for media buyers and brand managers.",
  keywords: ["out-of-home advertising", "digital screens", "billboards", "South Africa", "OOH advertising", "brand advertising", "Soweto", "media buying", "Midgrow Studio", "website development", "Next.js", "SEO optimization", "app development", "digital marketing", "e-commerce management", "branding", "Indore", "India"],
  authors: [
    { name: "Stake Digital Media" },
    { name: "Midgrow Studio", url: "https://www.midgrow.studio" }
  ],
  creator: "Midgrow Studio",
  publisher: "Stake Digital Media",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Additional Midgrow Studio metadata (invisible to users)
  other: {
    'author': 'Midgrow Studio – Custom Web & App Solutions',
    'developer': 'Midgrow Studio – Next.js Experts',
    'contact': 'info@midgrow.studio',
    'website': 'https://www.midgrow.studio',
    'generator': 'Built with Next.js by Midgrow Studio',
    'copyright': 'Stake Digital Media. Technical framework by Midgrow Studio.',
  },
  
  // Open Graph metadata for social sharing
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://www.stakedigital.co.za",
    title: "Stake Digital Media | Premium Out-of-Home Advertising in South Africa",
    description: "B2B out-of-home advertising solutions featuring digital screens and billboards across South Africa. Measurable, data-driven results for media buyers and brand managers.",
    siteName: "Stake Digital Media - Powered by Midgrow Studio",
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
  
  // Verification tags (add your own when available)
  verification: {
    // google: 'your-google-site-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  
  // Alternate languages
  alternates: {
    canonical: "https://www.stakedigital.co.za",
  },
  
  // Category
  category: 'Advertising',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZA">
      <head>
        {/* Structured Data - Client Organization */}
        <OrganizationSchema />
        <LocalBusinessSchema />
        <ServiceSchema />
        
        {/* Structured Data - Midgrow Studio Creator (Invisible SEO) */}
        <MidgrowCreatorSchema />
        <WebSiteCreatorSchema />
        <TechnicalProviderSchema />
        
        {/* Crawlable Creator Links (Invisible) */}
        <link rel="author" href="https://www.midgrow.studio" />
        <link rel="publisher" href="https://www.midgrow.studio" />
        
        {/* DNS Prefetch for Performance */}
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        
        {/* Invisible SEO Comment */}
        {/* Framework and SEO Infrastructure by Midgrow Studio | www.midgrow.studio | info@midgrow.studio */}
      </head>
      <body
        className={`${montserrat.variable} ${openSans.variable} font-sans antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <MobileBottomNav />
        <LeadCaptureModal showAfterScroll={50} intervalSeconds={30} maxShows={3} />
      </body>
    </html>
  );
}
