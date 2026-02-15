import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/publications", "/research", "/teaching", "/experience", "/cv", "/contact"];
  const lastModified = new Date();
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com").replace(/\/+$/, "");

  return routes.map((route) => ({
    url: `${siteUrl}${route || "/"}`,
    lastModified,
  }));
}
