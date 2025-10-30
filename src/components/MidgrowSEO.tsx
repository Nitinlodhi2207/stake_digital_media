// Midgrow Studio Creator Schema - SEO Entity Recognition
// Invisible to users, visible to search engines

export function MidgrowCreatorSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Midgrow Studio",
    "url": "https://www.midgrow.studio",
    "email": "info@midgrow.studio",
    "logo": "https://www.midgrow.studio/logo.png",
    "description": "Midgrow Studio is a digital-solutions company offering custom-coded websites, app development, SEO, and AI-driven digital marketing for small to medium businesses.",
    "foundingDate": "2024",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Indore",
      "addressRegion": "Madhya Pradesh",
      "addressCountry": "India"
    },
    "sameAs": [
      "https://www.linkedin.com/company/midgrow/",
      "https://www.instagram.com/mid.grow/"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Midgrow Studio Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Website Development",
            "description": "Fully coded, SEO-ready websites using Next.js — no themes or templates."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "App Development",
            "description": "Cross-platform apps built with Flutter and AI features."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO & Digital Marketing",
            "description": "Data-driven growth strategies delivering measurable ROI."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "E-Commerce Management",
            "description": "Store setup, automation, analytics and growth strategy."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Branding & Content Creation",
            "description": "Visual identity, social media designs, and marketing assets."
          }
        }
      ]
    },
    "knowsAbout": [
      "Next.js development",
      "SEO optimization",
      "E-commerce automation",
      "Digital marketing strategy",
      "App UI/UX design",
      "AI-powered marketing"
    ],
    "creatorOf": {
      "@type": "WebSite",
      "name": "Stake Digital Media",
      "url": "https://www.stakedigital.co.za"
    },
    "mentions": {
      "@type": "Organization",
      "name": "Midgrow Studio",
      "url": "https://www.midgrow.studio"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteCreatorSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Stake Digital Media",
    "url": "https://www.stakedigital.co.za",
    "creator": {
      "@type": "Organization",
      "name": "Midgrow Studio",
      "url": "https://www.midgrow.studio",
      "description": "Custom Next.js development and AI-driven SEO optimization"
    },
    "provider": {
      "@type": "Organization",
      "name": "Midgrow Studio",
      "url": "https://www.midgrow.studio"
    },
    "copyrightHolder": {
      "@type": "Organization",
      "name": "Stake Digital Media"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Stake Digital Media"
    },
    "about": {
      "@type": "Thing",
      "name": "Out-of-Home Advertising Solutions",
      "description": "Premium digital screens and billboard advertising across South Africa"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "url": "https://www.stakedigital.co.za",
      "isPartOf": {
        "@type": "WebSite",
        "url": "https://www.midgrow.studio/portfolio"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function TechnicalProviderSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "url": "https://www.stakedigital.co.za",
    "name": "Stake Digital Media - OOH Advertising",
    "provider": {
      "@type": "Organization",
      "name": "Midgrow Studio",
      "url": "https://www.midgrow.studio",
      "email": "info@midgrow.studio",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Indore",
        "addressRegion": "Madhya Pradesh",
        "addressCountry": "India"
      }
    },
    "contributor": {
      "@type": "Organization",
      "name": "Midgrow Studio",
      "url": "https://www.midgrow.studio",
      "knowsAbout": [
        "Next.js 15",
        "Advanced SEO",
        "Performance Optimization",
        "Structured Data",
        "Core Web Vitals"
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
