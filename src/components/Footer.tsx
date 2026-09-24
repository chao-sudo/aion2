import Link from "next/link";
import { getDictionary } from "@/i18n/dictionaries";
import { getClasses } from "@/lib/classes";
import type { Locale } from "@/i18n/config";
import { STEAM_URL } from "@/components/Header";

function l(locale: Locale, href: string) {
  return `/${locale}${href}`;
}

export default function Footer({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);
  const classes = getClasses(locale);
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 border-t border-line">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(800px_400px_at_50%_100%,rgba(37,99,235,0.12),transparent_70%)]" />
      <div className="mx-auto max-w-content px-6 md:px-10 lg:px-16 py-14 text-sm text-muted">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt={d.siteName}
                loading="lazy"
                width={36}
                height={36}
                decoding="async"
                className="rounded-md ring-1 ring-gold/40"
                src="/icon.png"
              />
              <div>
                <div className="font-display text-xl text-gold tracking-[0.05em]">{d.siteName}</div>
                <div className="text-[10px] uppercase tracking-[0.4em] text-muted">Wiki · {year}</div>
              </div>
            </div>
            <p className="mt-4 text-[13px] leading-relaxed">{d.footer.about}</p>
          </div>

          <div>
            <div className="text-gold2 uppercase tracking-[0.2em] mb-3 font-display text-xs">{d.footer.guidesTitle}</div>
            <ul className="space-y-2">
              {d.footer.guides.map((item) => (
                <li key={item.href}>
                  <Link href={l(locale, item.href)} className="hover:text-gold2 transition">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-gold2 uppercase tracking-[0.2em] mb-3 font-display text-xs">{d.footer.classesTitle}</div>
            <ul className="space-y-2">
              {classes.map((c) => (
                <li key={c.slug}>
                  <Link href={l(locale, `/classes/${c.slug}`)} className="hover:text-gold2 transition">{c.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-gold2 uppercase tracking-[0.2em] mb-3 font-display text-xs">{d.footer.classesTitle}</div>
            <ul className="space-y-2">
              {classes.slice(4).map((c) => (
                <li key={c.slug}>
                  <Link href={l(locale, `/classes/${c.slug}`)} className="hover:text-gold2 transition">{c.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-gold2 uppercase tracking-[0.2em] mb-3 font-display text-xs">{d.footer.resourcesTitle}</div>
            <ul className="space-y-2">
              {d.footer.resources.map((item) => (
                <li key={item.href}>
                  <Link href={l(locale, item.href)} className="hover:text-gold2 transition">{item.label}</Link>
                </li>
              ))}
              {d.footer.official.map((item) => (
                <li key={item.url}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:text-gold2 transition">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-line">
          <div className="text-gold2 uppercase tracking-[0.2em] mb-3 font-display text-xs">{d.languagesTitle}</div>
          <ul className="flex flex-wrap gap-4 text-sm">
            {d.languages.map((lang) => (
              <li key={lang.code}>
                <Link href={lang.href} className="hover:text-gold2 transition">
                  {lang.flag} {lang.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="ornament">
          <span className="diamond" />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.2em]">
          <div>© {year} {d.footer.copyright}</div>
          <div className="flex items-center gap-4">
            <Link href={l(locale, d.footer.legal.privacy.href)} className="text-muted hover:text-gold2">
              {d.footer.legal.privacy.label}
            </Link>
            <Link href={l(locale, d.footer.legal.terms.href)} className="text-muted hover:text-gold2">
              {d.footer.legal.terms.label}
            </Link>
            <a href={STEAM_URL} target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold2">
              {d.footer.buyOnSteam}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
