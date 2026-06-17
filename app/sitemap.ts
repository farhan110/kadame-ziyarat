import { MetadataRoute } from "next";
import { allPages } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  return allPages.map((page) => ({
    url: `https://kadameziyarat.com/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: page.slug === "" ? "weekly" : "monthly",
    priority: page.slug === "" ? 1 : 0.75
  }));
}
