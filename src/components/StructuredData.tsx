// Structured Data (JSON-LD) components for SEO

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Stake Digital Media",
    "alternateName": "Stake Digital",
    "url": "https://www.stakedigital.co.za",
    "logo": "https://www.stakedigital.co.za/logo.svg",
    "description": "Premium Out-of-Home advertising solutions featuring digital screens and billboards across South Africa. Measurable, data-driven results for media buyers and brand managers.",
    "email": "info@stakedigital.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ZA",
      "addressRegion": "Gauteng"
    },
    "sameAs": [
      "https://twitter.com/stakedigital",
      "https://www.facebook.com/stakedigital",
      "https://www.linkedin.com/company/stakedigital",
      "https://www.instagram.com/stakedigital"
    ],
    "areaServed": [
      {
        "@type": "Country",
        "name": "South Africa"
      }
    ],
    "serviceType": [
      "Out-of-Home Advertising",
      "Digital Screen Advertising",
      "Billboard Advertising",
      "Outdoor Media"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Stake Digital Media",
    "image": "https://www.stakedigital.co.za/logo.svg",
    "url": "https://www.stakedigital.co.za",
    "telephone": "+27-XX-XXX-XXXX",
    "email": "info@stakedigital.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ZA",
      "addressRegion": "Gauteng"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -26.2041,
      "longitude": 28.0473
    },
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "17:00"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Out-of-Home Advertising",
    "provider": {
      "@type": "Organization",
      "name": "Stake Digital Media",
      "url": "https://www.stakedigital.co.za"
    },
    "areaServed": {
      "@type": "Country",
      "name": "South Africa"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "OOH Advertising Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Screen Advertising",
            "description": "High-definition digital screens in high-traffic venues with 30+ minute dwell times",
            "url": "https://www.stakedigital.co.za/services/digital-screens"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Billboard Advertising",
            "description": "Strategic billboard placements on major commuter routes across South Africa",
            "url": "https://www.stakedigital.co.za/services/billboards"
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebPageSchema({ 
  name, 
  description, 
  url 
}: { 
  name: string; 
  description: string; 
  url: string; 
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": name,
    "description": description,
    "url": url,
    "publisher": {
      "@type": "Organization",
      "name": "Stake Digital Media",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.stakedigital.co.za/logo.svg"
      }
    },
    "inLanguage": "en-ZA",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Stake Digital Media",
      "url": "https://www.stakedigital.co.za"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ProductSchema({
  name,
  description,
  image,
  url,
  price
}: {
  name: string;
  description: string;
  image: string;
  url: string;
  price?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": name,
    "description": description,
    "image": image,
    "url": url,
    "brand": {
      "@type": "Brand",
      "name": "Stake Digital Media"
    },
    ...(price && {
      "offers": {
        "@type": "Offer",
        "price": price,
        "priceCurrency": "ZAR",
        "availability": "https://schema.org/InStock"
      }
    })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
