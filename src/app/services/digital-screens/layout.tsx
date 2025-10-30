import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Screens Advertising | Stake Digital Media - High-Dwell OOH Solutions",
  description: "Premium digital screen advertising in South Africa. 30+ minute dwell times in Supabets locations and high-traffic venues. Real-time campaign updates with measurable results.",
  keywords: ["digital screen advertising", "digital displays South Africa", "Supabets advertising", "high-dwell OOH", "digital signage", "in-venue advertising", "mall digital screens"],
  openGraph: {
    title: "Digital Screens Advertising | Stake Digital Media",
    description: "Dynamic digital screens in high-traffic venues across South Africa. Real-time updates, extended dwell times, and measurable brand engagement.",
    url: "https://www.stakedigital.co.za/services/digital-screens",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/diwa9giv2/image/upload/v1761802873/DIGITAL_SCREENS_hmuc6h.svg",
        width: 1200,
        height: 630,
        alt: "Stake Digital Media - Digital Screens",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Screens Advertising | Stake Digital Media",
    description: "Dynamic digital screens in high-traffic venues across South Africa.",
    images: ["https://res.cloudinary.com/diwa9giv2/image/upload/v1761802873/DIGITAL_SCREENS_hmuc6h.svg"],
  },
  alternates: {
    canonical: "https://www.stakedigital.co.za/services/digital-screens",
  },
};

export default function DigitalScreensLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
