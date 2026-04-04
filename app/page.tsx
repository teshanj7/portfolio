import type { Metadata } from "next";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

export const metadata: Metadata = {
  title: "Teshan Jayakody",
  description: "Business Analyst at the intersection of product, UX, and engineering.",
  alternates: { canonical: "/" },
};

export default function IndexPage() {
  return (
    <div
      style={{ fontFamily: "Poppins, sans-serif" }}
      className="min-h-screen bg-white text-black dark:bg-neutral-950 dark:text-neutral-100 flex flex-col"
    >
      {/* Top-right theme toggle */}
      <div className="absolute top-4 right-4 z-10">
        <ThemeToggle />
      </div>

      {/* Centered content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-16 text-center">
        {/* Avatar — CSS-switched, no JS needed */}
        <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-neutral-200 dark:border-neutral-800 overflow-hidden mb-5 select-none">
          <img
            src="/avatar-dark.png"
            alt="Teshan Jayakody"
            className="hidden dark:block w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
          <img
            src="/avatar-light.png"
            alt="Teshan Jayakody"
            className="block dark:hidden w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Name & tagline */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-1.5">
          Teshan Jayakody
        </h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-10">
          Proud Sri Lankan.
        </p>

        {/* Navigation links */}
        <div className="flex flex-row gap-8 sm:gap-10">
          {/* About Me — mobile: tooltip above · desktop: tooltip left */}
          <div className="relative group flex flex-col items-center">
            <Link
              href="/about"
              className="text-base font-medium hover:opacity-60 transition-opacity"
            >
              About Me
            </Link>
            <span className="sm:hidden pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap rounded-md bg-neutral-900 dark:bg-neutral-100 text-white dark:text-black text-xs px-2.5 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Learn more about me.
              <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-neutral-900 dark:border-t-neutral-100" />
            </span>
            <span className="hidden sm:inline pointer-events-none absolute right-full top-1/2 -translate-y-1/2 mr-2 whitespace-nowrap rounded-md bg-neutral-900 dark:bg-neutral-100 text-white dark:text-black text-xs px-2.5 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Learn more about me.
              <span className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-neutral-900 dark:border-l-neutral-100" />
            </span>
          </div>

          {/* Blogs — mobile: tooltip above · desktop: tooltip right */}
          <div className="relative group flex flex-col items-center">
            <Link
              href="/blogs"
              className="text-base font-medium hover:opacity-60 transition-opacity"
            >
              Blogs
            </Link>
            <span className="sm:hidden pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap rounded-md bg-neutral-900 dark:bg-neutral-100 text-white dark:text-black text-xs px-2.5 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Check out my latest articles.
              <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-neutral-900 dark:border-t-neutral-100" />
            </span>
            <span className="hidden sm:inline pointer-events-none absolute left-full top-1/2 -translate-y-1/2 ml-2 whitespace-nowrap rounded-md bg-neutral-900 dark:bg-neutral-100 text-white dark:text-black text-xs px-2.5 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Check out my latest articles and insights.
              <span className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-neutral-900 dark:border-r-neutral-100" />
            </span>
          </div>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-6 mt-12">
          <a
            href="https://www.linkedin.com/in/teshanjayakody/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100 transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/teshann_/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100 transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a
            href="https://x.com/TeshTweet20"
            target="_blank"
            rel="noreferrer"
            aria-label="X (Twitter)"
            className="text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-100 transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.623L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
            </svg>
          </a>
        </div>
      </div>

      <footer className="text-center text-xs text-neutral-400 dark:text-neutral-600 py-4">
        © {new Date().getFullYear()} Teshan Jayakody
      </footer>
    </div>
  );
}
