import fs from "fs";
import path from "path";

export interface Artifact {
  name: string;
  desc: string;
}

export interface ProjectMeta {
  slug: string;
  title: string;
  description: string;
  company: string;
  role: string;
  period: string;
  tags: string[];
  thumbnail: string;
  driveUrl?: string;
  artifacts?: Artifact[];
}

export interface Project extends ProjectMeta {
  content: string;
}

const projectsDir = path.join(process.cwd(), "content/projects");

const COMPANY_ORDER = ["Personal", "Xeynergy", "Rootcode", "LB Finance PLC"];

function parseFrontmatter(raw: string): { data: Record<string, string>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };

  const data: Record<string, string> = {};
  match[1].split("\n").forEach((line) => {
    if (line.trim().startsWith("#")) return;
    const colonIdx = line.indexOf(":");
    if (colonIdx === -1) return;
    const key = line.slice(0, colonIdx).trim();
    const value = line.slice(colonIdx + 1).trim().replace(/^["']|["']$/g, "");
    data[key] = value;
  });

  return { data, content: match[2] };
}

function extractArtifacts(data: Record<string, string>): Artifact[] {
  const artifacts: Artifact[] = [];
  let i = 0;
  while (data[`artifact_${i}`]) {
    const [name, desc] = data[`artifact_${i}`].split("|");
    if (name) artifacts.push({ name: name.trim(), desc: (desc ?? "").trim() });
    i++;
  }
  return artifacts;
}

function buildMeta(file: string, data: Record<string, string>): ProjectMeta {
  const tagsRaw = data.tags ?? "";
  const tags = tagsRaw ? tagsRaw.split(",").map((t) => t.trim()) : [];
  const artifacts = extractArtifacts(data);
  return {
    slug: file.replace(/\.md$/, ""),
    title: data.title ?? "Untitled",
    description: data.description ?? "",
    company: data.company ?? "",
    role: data.role ?? "",
    period: data.period ?? "",
    tags,
    thumbnail: data.thumbnail ?? "",
    ...(data.drive_url ? { driveUrl: data.drive_url } : {}),
    ...(artifacts.length > 0 ? { artifacts } : {}),
  };
}

export function getAllProjects(): ProjectMeta[] {
  if (!fs.existsSync(projectsDir)) return [];
  const files = fs.readdirSync(projectsDir).filter((f) => f.endsWith(".md"));

  const projects = files.map((file) => {
    const raw = fs.readFileSync(path.join(projectsDir, file), "utf-8");
    const { data } = parseFrontmatter(raw);
    return buildMeta(file, data);
  });

  return projects.sort(
    (a, b) => COMPANY_ORDER.indexOf(a.company) - COMPANY_ORDER.indexOf(b.company)
  );
}

export function getProjectBySlug(slug: string): Project | null {
  const filePath = path.join(projectsDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = parseFrontmatter(raw);

  return { ...buildMeta(slug + ".md", data), content };
}
