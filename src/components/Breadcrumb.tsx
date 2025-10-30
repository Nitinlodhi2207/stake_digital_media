// Breadcrumb component with structured data for SEO

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { BreadcrumbSchema } from './StructuredData';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  const baseUrl = 'https://www.stakedigital.co.za';
  
  // Always include home as first item
  const breadcrumbItems = [
    { name: 'Home', url: baseUrl },
    ...items.map(item => ({
      ...item,
      url: item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}`
    }))
  ];

  return (
    <>
      <BreadcrumbSchema items={breadcrumbItems} />
      
      <nav 
        aria-label="Breadcrumb" 
        className={`py-4 ${className}`}
      >
        <ol className="flex items-center gap-2 text-sm flex-wrap">
          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1;
            const isFirst = index === 0;

            return (
              <li key={index} className="flex items-center gap-2">
                {!isFirst && (
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                )}
                
                {isLast ? (
                  <span 
                    className="text-gray-600 font-semibold"
                    aria-current="page"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.url.replace(baseUrl, '')}
                    className="text-primary-sky hover:text-primary-deep-blue transition-colors duration-200 flex items-center gap-1.5"
                  >
                    {isFirst && <Home className="w-4 h-4" />}
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
