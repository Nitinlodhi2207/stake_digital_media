import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Stake Digital Media - Book Your OOH Advertising Campaign",
  description: "Get in touch with Stake Digital Media for premium out-of-home advertising solutions. Book digital screens or billboard campaigns across South Africa. Fast response, expert consultation.",
  keywords: ["contact stake digital", "book billboard campaign", "digital screen booking", "OOH advertising inquiry", "South Africa advertising contact", "media buying contact"],
  openGraph: {
    title: "Contact Stake Digital Media | Start Your Campaign Today",
    description: "Ready to make your brand unmissable? Contact Stake Digital Media for premium OOH advertising solutions across South Africa.",
    url: "https://www.stakedigital.co.za/contact",
    type: "website",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "Contact Stake Digital Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Stake Digital Media | Start Your Campaign",
    description: "Ready to make your brand unmissable? Get in touch for premium OOH advertising solutions.",
    images: ["/logo.svg"],
  },
  alternates: {
    canonical: "https://www.stakedigital.co.za/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
