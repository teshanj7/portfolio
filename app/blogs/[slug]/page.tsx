import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ThemeToggle } from "@/components/ThemeToggle";
import { BackToTop } from "@/components/BackToTop";
import { getAllBlogs, getBlogBySlug, readingTime } from "@/utils/blogs";
import { assetPath } from "@/utils/asset";
import { siteConfig } from "@/utils/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogs().map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) return {};
  return {
    title: blog.title,
    description: blog.description,
    alternates: { canonical: `/blogs/${slug}` },
    openGraph: {
      type: "article",
      title: blog.title,
      description: blog.description,
      url: `/blogs/${slug}`,
      publishedTime: blog.date,
      authors: ["Teshan Jayakody"],
      images: blog.thumbnail ? [{ url: blog.thumbnail }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: blog.thumbnail ? [blog.thumbnail] : [],
    },
  };
}

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description: blog.description,
    datePublished: blog.date,
    dateModified: blog.date,
    image: blog.thumbnail ? `${siteConfig.url}${blog.thumbnail}` : `${siteConfig.url}/avatar-dark.png`,
    url: `${siteConfig.url}/blogs/${blog.slug}`,
    author: {
      "@type": "Person",
      name: "Teshan Jayakody",
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Person",
      name: "Teshan Jayakody",
    },
  };

  return (
    <div
      style={{ fontFamily: "Poppins, sans-serif" }}
      className="min-h-screen bg-white text-black dark:bg-neutral-950 dark:text-neutral-100 flex flex-col"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
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

      {/* Post content */}
      <main className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14 flex-1">
        {/* Back link */}
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 hover:opacity-70 transition-opacity mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>

        {/* Meta */}
        <div className="mb-6">
          <p className="text-xs text-neutral-400 dark:text-neutral-500 mb-3">
            {formatDate(blog.date)}
            <span className="ml-3">{readingTime(blog.content)}</span>
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight tracking-tight mb-3">
            {blog.title}
          </h1>
          {blog.description && (
            <p className="text-base text-neutral-500 dark:text-neutral-400">
              {blog.description}
            </p>
          )}
        </div>

        {/* Thumbnail */}
        {blog.thumbnail && (
          <div className="w-full rounded-xl overflow-hidden mb-10 aspect-video">
            <img
              src={assetPath(blog.thumbnail)}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <hr className="border-neutral-200 dark:border-neutral-800 mb-10" />

        {/* Markdown body */}
        <div className="prose prose-neutral max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-neutral-800 dark:prose-a:text-neutral-200 prose-a:underline-offset-4 prose-code:text-sm prose-code:bg-neutral-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-neutral-100 prose-pre:border prose-pre:border-neutral-200 prose-img:rounded-xl prose-img:w-full prose-hr:border-neutral-200 dark:prose-invert dark:prose-code:bg-neutral-800 dark:prose-pre:bg-neutral-800 dark:prose-pre:border-neutral-700 dark:prose-hr:border-neutral-800">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              img: ({ src, alt }) => (
                <img src={assetPath(typeof src === "string" ? src : "")} alt={alt ?? ""} className="rounded-xl w-full" />
              ),
            }}
          >
            {blog.content}
          </ReactMarkdown>
        </div>

        <BackToTop />
      </main>

      <footer className="border-t border-neutral-200 dark:border-neutral-800 mt-10">
        <div className="max-w-4xl mx-auto px-5 py-6 text-sm text-center text-neutral-400 dark:text-neutral-600">
          © {new Date().getFullYear()} Teshan Jayakody
        </div>
      </footer>
    </div>
  );
}
