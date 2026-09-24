import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Locale } from "@/i18n/config";

export type ArticleFrontmatter = {
  datePublished?: string;
  dateModified?: string;
};

export type Article = {
  frontmatter: ArticleFrontmatter;
  source: string;
  locale: Locale;
};

const contentRoot = path.join(process.cwd(), "src", "content");

export function loadArticle(
  locale: Locale,
  dir: string,
  slug: string
): Article | null {
  const candidates: Locale[] = [locale, "en"];
  const seen = new Set<string>();
  for (const l of candidates) {
    const file = path.join(contentRoot, l, dir, `${slug}.mdx`);
    const normalized = path.normalize(file);
    if (seen.has(normalized)) continue;
    seen.add(normalized);
    if (fs.existsSync(normalized)) {
      const raw = fs.readFileSync(normalized, "utf8");
      const parsed = matter(raw);
      return {
        locale: l,
        source: parsed.content,
        frontmatter: parsed.data as ArticleFrontmatter,
      };
    }
  }
  return null;
}
