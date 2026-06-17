import { faqItems, type SitePage } from "@/lib/content";

const siteUrl = "https://kadameziyarat.com";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Kadame Ziyarat",
  alternateName: "کدمِ زیارت",
  url: siteUrl,
  slogan: "Your Sacred Journey, Our Trusted Guidance",
  email: "info@kadameziyarat.com",
  areaServed: "India",
  serviceType: ["Hajj Packages", "Umrah Packages", "Iraq Ziyarat", "Islamic Tours", "Visa Services"],
  sameAs: []
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer
    }
  }))
};

export function breadcrumbSchema(page: SitePage) {
  const segments = page.slug ? page.slug.split("/") : [];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl
      },
      ...segments.map((segment, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: segment.replaceAll("-", " "),
        item: `${siteUrl}/${segments.slice(0, index + 1).join("/")}`
      }))
    ]
  };
}

export function productSchema(page: SitePage) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: page.h1,
    description: page.description,
    brand: {
      "@type": "Brand",
      name: "Kadame Ziyarat"
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
      price: page.price?.replace(/[^\d]/g, "") || undefined,
      availability: "https://schema.org/InStock",
      url: `${siteUrl}/${page.slug}`
    }
  };
}
