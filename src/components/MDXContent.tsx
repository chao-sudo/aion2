import type { ComponentProps } from "react";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import type { Locale } from "@/i18n/config";

export default function MDXContent({
  source,
  locale,
}: {
  source: string;
  locale: Locale;
}) {
  const components = {
    a: ({ href = "", children, ...props }: ComponentProps<"a">) => {
      const internal = href.startsWith("/") && !href.startsWith("//");
      const target = internal ? `/${locale}${href}` : href;
      return (
        <a href={target} {...props}>
          {children}
        </a>
      );
    },
  };

  return <MDXRemote source={source} components={components} />;
}
