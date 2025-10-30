import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Stake Digital Media - Redefining Outdoor Advertising in South Africa",
  description: "Learn about Stake Digital Media, South Africa's leading OOH advertising company. Specializing in digital screens and billboards across townships and metropolitan areas with measurable results.",
  keywords: ["about stake digital", "OOH advertising company", "South African advertising", "outdoor media", "digital screen advertising", "billboard advertising", "advertising company South Africa"],
  openGraph: {
    title: "About Stake Digital Media | Premium Out-of-Home Advertising",
    description: "Discover how Stake Digital Media is transforming outdoor advertising in South Africa with innovative digital screens and strategic billboard placements.",
    url: "https://www.stakedigital.co.za/about",
    type: "website",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "Stake Digital Media - About Us",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Stake Digital Media | Premium OOH Advertising",
    description: "Discover how Stake Digital Media is transforming outdoor advertising in South Africa.",
    images: ["/logo.svg"],
  },
  alternates: {
    canonical: "https://www.stakedigital.co.za/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
