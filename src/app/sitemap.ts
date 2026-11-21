import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";
import { PRODUCTS } from "@/data/products";
import { JOURNAL_POSTS } from "@/data/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.siteUrl;
  const now = new Date();

  const staticRoutes = [
    "",
    "/san-pham",
    "/cau-chuyen",
    "/quy-trinh",
    "/dai-ly",
    "/chia-se",
    "/lien-he",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const productRoutes = PRODUCTS.map((p) => ({
    url: `${baseUrl}/san-pham/${p.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const postRoutes = JOURNAL_POSTS.map((p) => ({
    url: `${baseUrl}/chia-se/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...productRoutes, ...postRoutes];
}
