import type { Metadata } from "next";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Card, CardContent } from "@/components/card";
import { getAllBlogs } from "@/utils/blogs";
import { assetPath } from "@/utils/asset";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Thoughts on business analysis, product, and the space where people and technology meet.",
  alternates: { canonical: "/blogs" },
  openGraph: {
    title: "Blogs — Teshan Jayakody",
    description: "Thoughts on business analysis, product, and the space where people and technology meet.",
    url: "/blogs",
  },
  twitter: {
    title: "Blogs — Teshan Jayakody",
    description: "Thoughts on business analysis, product, and the space where people and technology meet.",
  },
};

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogsPage() {
  const blogs = getAllBlogs();

  return (
    <div
      style={{ fontFamily: "Poppins, sans-serif" }}
      className="min-h-screen bg-white text-black dark:bg-neutral-950 dark:text-neutral-100 flex flex-col"
    >
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-950/60 border-b border-neutral-200 dark:border-neutral-800">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="font-semibold tracking-tight hover:opacity-70 transition-opacity"
          >
            Teshan Jayakody
          </Link>
          <ThemeToggle />
        </div>
      </header>

      {/* Content */}
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14 flex-1">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2">Blogs</h2>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-8">
          A space where I write about things I find interesting — work, experiences, and everything in between.
        </p>

        {blogs.length === 0 && (
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Nothing here yet — check back soon.
          </p>
        )}

        {blogs.length > 0 && (
          <div className="space-y-4">
            {blogs.map((blog) => (
              <Link key={blog.slug} href={`/blogs/${blog.slug}`} className="block group">
                <Card className="overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                  <CardContent className="p-0">
                    <div className="flex flex-col sm:flex-row">
                      {blog.thumbnail && (
                        <div className="sm:w-44 sm:shrink-0 h-40 sm:h-auto">
                          <img
                            src={assetPath(blog.thumbnail)}
                            alt={blog.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="flex flex-col justify-center gap-1.5 p-5">
                        <span className="text-xs text-neutral-400 dark:text-neutral-500">
                          {formatDate(blog.date)}
                        </span>
                        <h3 className="font-semibold text-base leading-snug group-hover:opacity-80 transition-opacity">
                          {blog.title}
                        </h3>
                        {blog.description && (
                          <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
                            {blog.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>

      <footer className="border-t border-neutral-200 dark:border-neutral-800">
        <div className="max-w-4xl mx-auto px-5 py-6 text-sm text-center text-neutral-400 dark:text-neutral-600">
          © {new Date().getFullYear()} Teshan Jayakody
        </div>
      </footer>
    </div>
  );
}
