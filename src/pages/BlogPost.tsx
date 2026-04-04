import { useEffect, useState } from "react";
import { Sun, Moon, ArrowLeft } from "lucide-react";
import { Link, useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Button } from "../components/button";
import { getBlogBySlug, readingTime, type Blog } from "../utils/blogs";

interface BlogPostProps {
  dark: boolean;
  setDark: (val: boolean) => void;
}

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function BlogPost({ dark, setDark }: BlogPostProps) {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    getBlogBySlug(slug).then((b) => {
      if (!b) navigate("/blogs", { replace: true });
      setBlog(b);
      setLoading(false);
    });
  }, [slug]);

  return (
    <div
      style={{ fontFamily: "Poppins, sans-serif" }}
      className="min-h-screen bg-white text-black dark:bg-neutral-950 dark:text-neutral-100 flex flex-col"
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-950/60 border-b border-neutral-200 dark:border-neutral-800">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="font-semibold tracking-tight hover:opacity-70 transition-opacity"
          >
            Teshan Jayakody
          </Link>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={() => setDark(!dark)}
          >
            {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </Button>
        </div>
      </header>

      {/* Post content */}
      <main className="w-full max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14 flex-1">
        {/* Back link */}
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 hover:opacity-70 transition-opacity mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>

        {loading && (
          <p className="text-sm text-neutral-500 dark:text-neutral-400">Loading…</p>
        )}

        {!loading && blog && (
          <>
            {/* Meta */}
            <div className="mb-6">
              <p className="text-xs text-neutral-400 dark:text-neutral-500 mb-3">
                {formatDate(blog.date)}
                {blog.content && (
                  <span className="ml-3">{readingTime(blog.content)}</span>
                )}
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
                  src={blog.thumbnail}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <hr className="border-neutral-200 dark:border-neutral-800 mb-10" />

            {/* Markdown body */}
            <div
              className={`prose prose-neutral max-w-none
                prose-headings:font-semibold prose-headings:tracking-tight
                prose-a:text-neutral-800 prose-a:underline-offset-4
                prose-code:text-sm prose-code:bg-neutral-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                prose-pre:bg-neutral-100 prose-pre:border prose-pre:border-neutral-200
                prose-img:rounded-xl prose-img:w-full
                prose-hr:border-neutral-200
                ${dark
                  ? "dark:prose-invert dark:prose-code:bg-neutral-800 dark:prose-pre:bg-neutral-800 dark:prose-pre:border-neutral-700 dark:prose-hr:border-neutral-800"
                  : ""
                }`}
            >
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {blog.content}
              </ReactMarkdown>
            </div>

            {/* Back to top */}
            <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800 flex justify-center">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-sm text-neutral-400 dark:text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-100 transition-colors underline underline-offset-4"
              >
                Back to top
              </button>
            </div>
          </>
        )}
      </main>

      <footer className="border-t border-neutral-200 dark:border-neutral-800 mt-10">
        <div className="max-w-4xl mx-auto px-5 py-6 text-sm text-center text-neutral-400 dark:text-neutral-600">
          © {new Date().getFullYear()} Teshan Jayakody
        </div>
      </footer>
    </div>
  );
}
