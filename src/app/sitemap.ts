import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { topics } from "@/lib/topics";
import { guideSlugs } from "@/lib/guides";
import { classSlugs } from "@/lib/classes";
import { legalSlugs } from "@/lib/legal";
import { staticPageSlugs } from "@/lib/pages";

const BASE = "https://aion2.wiki";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    entries.push({ url: BASE + "/" + locale, lastModified: new Date(), changeFrequency: "weekly", priority: 1 });
    entries.push({ url: BASE + "/" + locale + "/topics", lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 });
    entries.push({ url: BASE + "/" + locale + "/classes", lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 });
    entries.push({ url: BASE + "/" + locale + "/guide", lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 });

    for (const topic of topics) {
      entries.push({ url: BASE + "/" + locale + "/topics/" + topic.slug, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 });
    }
    for (const slug of guideSlugs) {
      entries.push({ url: BASE + "/" + locale + "/guide/" + slug, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 });
    }
    for (const slug of classSlugs) {
      entries.push({ url: BASE + "/" + locale + "/classes/" + slug, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 });
    }
    for (const slug of legalSlugs) {
      entries.push({ url: BASE + "/" + locale + "/" + slug, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 });
    }
    for (const slug of staticPageSlugs) {
      entries.push({ url: BASE + "/" + locale + "/" + slug, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 });
    }
  }

  return entries;
}