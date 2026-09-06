"use client";

import Link from "next/link";

export default function LandingFooter() {
  const footerLinks = [
    {
      label: "Contributing",
      href: "https://github.com/hiarun02/snippify/blob/main/CONTRIBUTING.md",
    },

    {
      label: "Report Issue",
      href: "https://github.com/hiarun02/snippify/issues",
    },
    {label: "GitHub", href: "https://github.com/hiarun02/snippify"},
  ];

  return (
    <footer className="bg-white/10 dark:bg-[#111010]/80 border-t border-white/20 dark:border-white/10 backdrop-blur-2xl">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="flex flex-col items-center justify-center gap-3 text-center">
          <div className="text-sm text-gray-700 dark:text-gray-300">
            <span className="font-semibold text-gray-900 dark:text-gray-100">
              Snippify
            </span>{" "}
            © 2026
          </div>

          <nav
            aria-label="Footer links"
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm"
          >
            {footerLinks.map((link) => {
              const isExternal = link.href.startsWith("http");

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                  className="text-gray-700 underline-offset-4 transition hover:text-gray-900 hover:underline dark:text-gray-300 dark:hover:text-white"
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <a
              href="https://www.scrolllaunch.com/products/snippify?ref=badge"
              target="_blank"
              rel="noreferrer"
              aria-label="Snippify - Featured on ScrollLaunch"
            >
              <img
                src="https://www.scrolllaunch.com/api/badge/snippify?variant=launched&theme=light"
                alt="Snippify - Featured on ScrollLaunch"
                className="h-8 w-auto"
              />
            </a>

            <a
              href="https://twelve.tools/snippify-live"
              target="_blank"
              rel="noreferrer"
              aria-label="Featured on Twelve Tools"
            >
              <img
                src="https://twelve.tools/badge0-white.svg"
                alt="Featured on Twelve Tools"
                width="148"
                height="40"
                className="h-8 w-auto"
              />
            </a>
          </div>

          <div className="text-xs text-gray-500 dark:text-gray-400">
            Built by{" "}
            <Link
              href="https://x.com/hiarun02"
              target="_blank"
              rel="noreferrer"
              className="underline-offset-4 transition hover:text-gray-700 hover:underline dark:hover:text-gray-200"
            >
              @hiarun02
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
