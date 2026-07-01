import type { MetadataRoute } from "next";
import { cases } from "@/content/cases";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://louisbolatre.com";

  const staticRoutes = ["", "/en"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  const caseRoutes = cases.flatMap(({ slug }) => [
    { url: `${base}/case/${slug}`, lastModified: new Date() },
    { url: `${base}/en/case/${slug}`, lastModified: new Date() },
  ]);

  return [...staticRoutes, ...caseRoutes];
}
