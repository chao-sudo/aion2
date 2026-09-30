"use client";

import Script from "next/script";

const AD_KEY = "a9c97195f0e5367108d00b95528b73ea";

export default function AdsterraBanner({ className = "" }: { className?: string }) {
  return (
    <aside
      aria-label="Advertisement"
      className={`not-prose mx-auto my-12 flex w-full max-w-content justify-center px-6 md:px-10 lg:px-16 ${className}`}
    >
      <div className="relative flex min-h-[90px] w-full max-w-[728px] items-center justify-center overflow-hidden rounded-lg border border-line/60 bg-[rgba(5,10,18,0.4)]">
        <span className="pointer-events-none absolute left-3 top-1 text-[9px] uppercase tracking-[0.3em] text-muted/50">
          Ad
        </span>
        <div id={`container-${AD_KEY}`} className="w-full" />
      </div>
      <Script
        id={`adsterra-${AD_KEY}`}
        src={`https://pl31586410.profitableratecpmnetwork.com/${AD_KEY}/invoke.js`}
        data-cfasync="false"
        strategy="afterInteractive"
      />
    </aside>
  );
}
