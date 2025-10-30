import Gallery from '@/components/Gallery';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | Stake Digital Media - Our Work in Action Across South Africa',
  description: 'View our portfolio of successful OOH campaigns across South Africa. Digital screens, billboards, and outdoor advertising installations in Soweto, Johannesburg, Durban, Cape Town and Pretoria.',
  keywords: ["OOH advertising gallery", "billboard portfolio South Africa", "digital screen campaigns", "outdoor advertising examples", "Soweto billboards", "advertising portfolio"],
  openGraph: {
    title: "Gallery | Stake Digital Media - Our Work in Action",
    description: "Explore our successful OOH advertising campaigns across South Africa. See premium billboard and digital screen placements in action.",
    url: "https://www.stakedigital.co.za/gallery",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/diwa9giv2/image/upload/v1761802903/Our_Network_image_ol9enz.svg",
        width: 1200,
        height: 630,
        alt: "Stake Digital Media - Gallery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery | Stake Digital Media",
    description: "Explore our successful OOH advertising campaigns across South Africa.",
    images: ["https://res.cloudinary.com/diwa9giv2/image/upload/v1761802903/Our_Network_image_ol9enz.svg"],
  },
  alternates: {
    canonical: "https://www.stakedigital.co.za/gallery",
  },
};

const GalleryPage = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <Gallery />
    </div>
  );
};

export default GalleryPage;
