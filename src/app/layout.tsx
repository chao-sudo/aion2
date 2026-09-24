import type { Metadata } from "next";
import Script from "next/script";
import { defaultLocale } from "@/i18n/config";
import { socialMetadata } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aion2.world"),
  title: "AION 2 Wiki — Aerial Combat MMORPG, Classes & Guides",
  description:
    "AION 2 Wiki: fan-made guides for NCSOFT's Unreal Engine 5 aerial-combat MMORPG. Classes, tier list, release date and beginner tips in 4 languages.",
  keywords: "AION 2, NCSOFT, MMORPG, classes, guides, release date, tier list, Templar",
  icons: { icon: "/icon.png", apple: "/icon.png" },
  ...socialMetadata({
    locale: defaultLocale,
    path: "/",
    title: "AION 2 Wiki — Aerial Combat MMORPG, Classes & Guides",
    description:
      "AION 2 Wiki: fan-made guides for NCSOFT's Unreal Engine 5 aerial-combat MMORPG. Classes, tier list, release date and beginner tips in 4 languages.",
  }),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-9DKHR0KMWZ" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-9DKHR0KMWZ');
        `}
      </Script>
    </html>
  );
}
