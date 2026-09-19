import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/content/services";
import { INDUSTRIES } from "@/content/industries";
import { SIGNAL_SPRINT } from "@/content/signal-sprint";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    `/${SIGNAL_SPRINT.slug}`,
    "/first-steps",
    "/industries",
    "/market-intelligence",
    "/about",
    "/contact",
    "/faq",
    "/legal-notice",
    "/privacy-policy",
  ];

  const entries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === `/${SIGNAL_SPRINT.slug}` ? 0.9 : 0.7,
  }));

  SERVICES.forEach((s) => {
    entries.push({
      url: `${SITE.url}/services/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    });
  });

  INDUSTRIES.forEach((i) => {
    entries.push({
      url: `${SITE.url}/industries/${i.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    });
  });

  return entries;
}
