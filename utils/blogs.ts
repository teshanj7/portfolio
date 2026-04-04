import fs from "fs";
import path from "path";

export interface BlogMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  thumbnail: string;
}

export interface Blog extends BlogMeta {
  content: string;
}

const blogsDir = path.join(process.cwd(), "content/blogs");

function parseFrontmatter(raw: string): { data: Record<string, string>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };

  const data: Record<string, string> = {};
  match[1].split("\n").forEach((line) => {
    const colonIdx = line.indexOf(":");
    if (colonIdx === -1) return;
    const key = line.slice(0, colonIdx).trim();
    const value = line.slice(colonIdx + 1).trim().replace(/^["']|["']$/g, "");
    data[key] = value;
  });

  return { data, content: match[2] };
}

export function readingTime(content: string): string {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min read`;
}

export function getAllBlogs(): BlogMeta[] {
  const files = fs.readdirSync(blogsDir).filter((f) => f.endsWith(".md"));

  const blogs = files.map((file) => {
    const raw = fs.readFileSync(path.join(blogsDir, file), "utf-8");
    const { data } = parseFrontmatter(raw);
    return {
      slug: file.replace(/\.md$/, ""),
      title: data.title ?? "Untitled",
      description: data.description ?? "",
      date: data.date ?? "",
      thumbnail: data.thumbnail ?? "",
    };
  });

  return blogs.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getBlogBySlug(slug: string): Blog | null {
  const filePath = path.join(blogsDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = parseFrontmatter(raw);

  return {
    slug,
    title: data.title ?? "Untitled",
    description: data.description ?? "",
    date: data.date ?? "",
    thumbnail: data.thumbnail ?? "",
    content,
  };
}
