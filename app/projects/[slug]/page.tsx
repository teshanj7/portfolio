import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Eye } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ThemeToggle } from "@/components/ThemeToggle";
import { BackToTop } from "@/components/BackToTop";
import { getAllProjects, getProjectBySlug } from "@/utils/projects";
import { assetPath } from "@/utils/asset";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      title: project.title,
      description: project.description,
      url: `/projects/${slug}`,
      images: project.thumbnail ? [{ url: project.thumbnail }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: project.thumbnail ? [project.thumbnail] : [],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div className="min-h-screen bg-white text-black dark:bg-neutral-950 dark:text-neutral-100 flex flex-col">
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

      <main className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14 flex-1">
        {/* Back link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400 hover:opacity-70 transition-opacity mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        {/* Meta */}
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-xs px-2.5 py-1 rounded-full border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400">
              {project.company}
            </span>
            <span className="text-xs px-2.5 py-1 rounded-full border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400">
              {project.role}
            </span>
            <span className="text-xs text-neutral-400 dark:text-neutral-500">
              {project.period}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight tracking-tight mb-3">
            {project.title}
          </h1>
          {project.description && (
            <p className="text-base text-neutral-500 dark:text-neutral-400">
              {project.description}
            </p>
          )}
          {project.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Thumbnail */}
        {project.thumbnail && (
          <div className="w-full rounded-xl overflow-hidden mb-10 aspect-video">
            <img
              src={assetPath(project.thumbnail)}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <hr className="border-neutral-200 dark:border-neutral-800 mb-10" />

        {/* Intro body */}
        <div className="prose prose-neutral max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-neutral-800 dark:prose-a:text-neutral-200 prose-a:underline-offset-4 prose-code:text-sm prose-code:bg-neutral-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-neutral-100 prose-pre:border prose-pre:border-neutral-200 prose-img:rounded-xlprose-hr:border-neutral-200 dark:prose-invert dark:prose-code:bg-neutral-800 dark:prose-pre:bg-neutral-800 dark:prose-pre:border-neutral-700 dark:prose-hr:border-neutral-800">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              img: ({ src, alt }) => (
                <img src={assetPath(typeof src === "string" ? src : "")} alt={alt ?? ""} className="rounded-xl w-full" />
              ),
            }}
          >
            {project.content}
          </ReactMarkdown>
        </div>

        {/* Artifact cards */}
        {project.artifacts && project.artifacts.length > 0 && project.driveUrl && (
          <div className="mt-10">
            <h2 className="text-lg font-semibold tracking-tight mb-4">Deliverables</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {project.artifacts.map((artifact) => (
                <div
                  key={artifact.name}
                  className="flex flex-col justify-between gap-4 p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900"
                >
                  <div>
                    <p className="font-medium text-sm mb-1">{artifact.name}</p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                      {artifact.desc}
                    </p>
                  </div>
                  <a
                    href={project.driveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    View
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

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
