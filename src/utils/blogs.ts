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

// Simple frontmatter parser — no external dependency needed
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

// Derive slug from file path: "...blogs/my-post.md" → "my-post"
function pathToSlug(path: string): string {
  return path.split("/").pop()!.replace(/\.md$/, "");
}

// Estimate reading time (words / 200 wpm)
export function readingTime(content: string): string {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min read`;
}

// Load all blogs sorted by date descending
const modules = import.meta.glob("../content/blogs/*.md", {
  query: "?raw",
  import: "default",
});

export async function getAllBlogs(): Promise<BlogMeta[]> {
  const blogs: BlogMeta[] = [];

  for (const [path, load] of Object.entries(modules)) {
    const raw = (await load()) as string;
    const { data } = parseFrontmatter(raw);
    blogs.push({
      slug: pathToSlug(path),
      title: data.title ?? "Untitled",
      description: data.description ?? "",
      date: data.date ?? "",
      thumbnail: data.thumbnail ?? "",
    });
  }

  return blogs.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  for (const [path, load] of Object.entries(modules)) {
    if (pathToSlug(path) === slug) {
      const raw = (await load()) as string;
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
  }
  return null;
}
