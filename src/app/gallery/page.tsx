import Gallery from '@/components/Gallery';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery - Stakee Digital Media',
  description: 'Explore our gallery of recent projects and see the results we deliver.',
};

const GalleryPage = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <Gallery />
    </div>
  );
};

export default GalleryPage;
