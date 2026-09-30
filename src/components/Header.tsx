"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { Icon } from "@/components/icons";

export const STEAM_URL = "https://store.steampowered.com/app/3393110/AION_2/";
export const OFFICIAL_URL = "https://aion2.plaync.com/en-us/";
export const DISCORD_URL = "https://discord.gg/aion2official";
export const YOUTUBE_URL = "https://www.youtube.com/@Aion2Official";

function l(locale: Locale, href: string) {
  if (locale === "en") return href;
  return `/${locale}${href}`;
}

export default function Header({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="absolute inset-0 backdrop-blur-xl bg-[rgba(5,10,18,0.65)] border-b border-line" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

      <div className="relative mx-auto max-w-content px-6 md:px-10 lg:px-16 h-20 flex items-center justify-between">
        <Link href={l(locale, "/")} className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-gold/30 blur-md rounded-full group-hover:bg-gold/60 transition" />
            <Image
              alt={d.siteName}
              src="/icon.png"
              width={42}
              height={42}
              className="relative rounded-md ring-1 ring-gold/40 group-hover:ring-gold transition"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-2xl tracking-[0.05em] text-ink group-hover:text-gold2 transition">
              {d.siteName}
            </span>
            <span className="hidden md:inline text-[10px] uppercase tracking-[0.4em] text-gold mt-1">
              {d.tagline}
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {d.primaryNav.map((item) => (
            <Link
              key={item.href}
              href={l(locale, item.href)}
              className="relative px-4 py-2 text-[15px] uppercase tracking-[0.18em] text-ink/85 hover:text-gold2 transition group whitespace-nowrap"
            >
              {item.label}
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-px bg-gold group-hover:w-3/4 transition-all duration-300" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={STEAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex btn-primary !px-4 !py-2 !text-[11px]"
          >
            {d.playOnSteam}
          </a>
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-gold/30 text-gold2"
          >
            <Icon name={open ? "chevron-down" : "menu"} width={22} height={22} />
          </button>
        </div>
      </div>

      <div className="relative hidden lg:block border-t border-gold/10">
        <div className="mx-auto max-w-content px-6 md:px-10 lg:px-16 h-12 flex items-center justify-center gap-0">
          {d.secondaryNav.map((item) => (
            <Link
              key={item.href}
              href={l(locale, item.href)}
              className="relative px-3 py-2 text-[13px] uppercase tracking-[0.16em] text-muted hover:text-gold2 transition group whitespace-nowrap"
            >
              {item.label}
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0.5 w-0 h-px bg-gold group-hover:w-3/4 transition-all duration-300" />
            </Link>
          ))}
        </div>
      </div>

      {open && (
        <nav className="lg:hidden relative flex flex-wrap gap-x-4 gap-y-1.5 px-6 pb-4 pt-2 text-[12px] uppercase tracking-[0.18em] bg-[rgba(5,10,18,0.95)] border-t border-line">
          {[...d.primaryNav, ...d.secondaryNav].map((item) => (
            <Link
              key={item.href}
              href={l(locale, item.href)}
              onClick={() => setOpen(false)}
              className="text-muted hover:text-gold2"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
