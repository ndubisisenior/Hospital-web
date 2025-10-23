import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
}

export function SEOHead({
  title = "NNPC Medical Services Limited - World-Class Healthcare in Nigeria",
  description = "NNPC Medical Services Limited (NMSL) provides world-class healthcare services across Nigeria. Expert medical professionals, state-of-the-art facilities, 24/7 emergency care.",
  keywords = "NNPC Medical Services, healthcare Nigeria, hospital Lagos, medical services, emergency care, specialist doctors, NMSL",
  ogImage = "/og-image.jpg",
  ogType = "website",
  canonical,
}: SEOHeadProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta
        name="author"
        content="NNPC Medical Services Limited"
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta
        property="og:site_name"
        content="NNPC Medical Services Limited"
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Favicon */}
      <link
        rel="icon"
        type="image/x-icon"
        href="/favicon.ico"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />

      {/* Schema.org structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Hospital",
          name: "NNPC Medical Services Limited",
          alternateName: "NMSL",
          url: "https://nmsl.ng",
          logo: "https://nmsl.ng/logo.png",
          description: description,
          telephone: "+234-1-234-5678",
          address: {
            "@type": "PostalAddress",
            addressCountry: "Nigeria",
            addressLocality: "Lagos",
          },
          openingHours: "Mo-Su 00:00-23:59",
          priceRange: "$$",
          medicalSpecialty: [
            "Cardiology",
            "Internal Medicine",
            "Surgery",
            "Pediatrics",
            "Emergency Medicine",
          ],
        })}
      </script>
    </Helmet>
  );
}