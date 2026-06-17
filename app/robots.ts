import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/staging"]
      }
    ],
    sitemap: "https://kadameziyarat.com/sitemap.xml"
  };
}
