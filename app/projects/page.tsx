import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Card, CardContent } from "@/components/card";
import { getAllProjects, type ProjectMeta } from "@/utils/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "A look at the products and systems I've contributed to across business analysis, product ownership, and software engineering.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects — Teshan Jayakody",
    description: "A look at the products and systems I've contributed to across business analysis, product ownership, and software engineering.",
    url: "/projects",
  },
  twitter: {
    title: "Projects — Teshan Jayakody",
    description: "A look at the products and systems I've contributed to across business analysis, product ownership, and software engineering.",
  },
};

const COMPANY_ORDER = ["Personal", "Xeynergy", "Rootcode", "LB Finance PLC"];

function groupByCompany(projects: ProjectMeta[]): Map<string, ProjectMeta[]> {
  const map = new Map<string, ProjectMeta[]>();
  for (const company of COMPANY_ORDER) {
    const group = projects.filter((p) => p.company === company);
    if (group.length > 0) map.set(company, group);
  }
  return map;
}

export default function ProjectsPage() {
  const projects = getAllProjects();
  const grouped = groupByCompany(projects);

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

      {/* Content */}
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14 flex-1">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2">Projects</h2>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-10">
          Some insights on work I&apos;ve contributed to across business analysis, product ownership, and software engineering.
        </p>

        {projects.length === 0 && (
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Nothing here yet — check back soon.
          </p>
        )}

        <div className="space-y-12">
          {Array.from(grouped.entries()).map(([company, items]) => (
            <div key={company}>
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-lg font-semibold tracking-tight">{company}</h3>
                <div className="flex-1 h-px bg-neutral-200 dark:bg-neutral-800" />
              </div>
              <div className="space-y-3">
                {items.map((project) => (
                  <Link
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    className="block group"
                  >
                    <Card className="border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors">
                      <CardContent className="p-5">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            <span className="text-xs text-neutral-400 dark:text-neutral-500 block mb-1.5">
                              {project.period}
                            </span>
                            <h4 className="font-semibold text-base leading-snug mb-1.5 group-hover:opacity-80 transition-opacity">
                              {project.title}
                            </h4>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 mb-3">
                              {project.description}
                            </p>
                            {project.tags.length > 0 && (
                              <div className="flex flex-wrap gap-1.5">
                                {project.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    className="text-xs px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                          <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors mt-1 shrink-0" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="border-t border-neutral-200 dark:border-neutral-800 mt-10">
        <div className="max-w-4xl mx-auto px-5 py-6 text-sm text-center text-neutral-400 dark:text-neutral-600">
          © {new Date().getFullYear()} Teshan Jayakody
        </div>
      </footer>
    </div>
  );
}
