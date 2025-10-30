import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Billboard Advertising | Stake Digital Media - Premium Outdoor Billboards South Africa",
  description: "Strategic billboard placements across Soweto and South African metros. 2.5M+ monthly impressions on major commuter routes. Featured locations in Orlando West, Senaone, and CBD areas.",
  keywords: ["billboard advertising South Africa", "Soweto billboards", "outdoor advertising", "highway billboards", "commuter route advertising", "township advertising", "LED billboards"],
  openGraph: {
    title: "Billboard Advertising | Stake Digital Media",
    description: "Premium billboard placements on South Africa's busiest routes. 2.5M+ monthly impressions in strategic locations across Soweto and metropolitan areas.",
    url: "https://www.stakedigital.co.za/services/billboards",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/diwa9giv2/image/upload/v1761802746/BILLBOARDS_r9btux.svg",
        width: 1200,
        height: 630,
        alt: "Stake Digital Media - Billboards",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Billboard Advertising | Stake Digital Media",
    description: "Premium billboard placements on South Africa's busiest routes.",
    images: ["https://res.cloudinary.com/diwa9giv2/image/upload/v1761802746/BILLBOARDS_r9btux.svg"],
  },
  alternates: {
    canonical: "https://www.stakedigital.co.za/services/billboards",
  },
};

export default function BillboardsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
