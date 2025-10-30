import { MetadataRoute } from 'next';

// Managed and optimized by Midgrow Studio

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.stakedigital.co.za';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
