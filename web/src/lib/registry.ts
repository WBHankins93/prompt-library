import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export const CATEGORY_META = [
  { slug: "discovery", title: "Discovery", description: "Find the real problem before anyone scopes the answer.", track: "se" },
  { slug: "poc-design", title: "POC design", description: "Make mutual proof small, testable, and decision-worthy.", track: "se" },
  { slug: "technical-demos", title: "Technical demos", description: "Turn product behavior into credible evidence.", track: "se" },
  { slug: "stakeholder-navigation", title: "Stakeholder navigation", description: "Move technical, business, and political decisions together.", track: "se" },
  { slug: "solution-design", title: "Solution design", description: "Design for the system customers will actually operate.", track: "se" },
  { slug: "enablement", title: "Enablement", description: "Transfer the why, not only the configuration.", track: "se" },
  { slug: "objection-handling", title: "Objection handling", description: "Diagnose the concern beneath the stated objection.", track: "se" },
  { slug: "business", title: "Business", description: "Test the economics and operating model behind a plan.", track: "broader" },
  { slug: "commercial", title: "Commercial", description: "Price, position, and move work toward a durable agreement.", track: "broader" },
  { slug: "career", title: "Career", description: "Make experience legible and choose the next move.", track: "broader" },
  { slug: "product", title: "Product", description: "Frame the problem and make product bets falsifiable.", track: "broader" },
  { slug: "engineering", title: "Engineering", description: "Ship systems that remain understandable under pressure.", track: "broader" },
  { slug: "research", title: "Research", description: "Turn uncertainty into a defensible answer.", track: "broader" },
] as const;

export type CategorySlug = (typeof CATEGORY_META)[number]["slug"];

export type Skill = {
  name: string;
  title: string;
  description: string;
  category: CategorySlug;
  tags: string[];
  authorSlug: string;
  source?: string | string[];
  contributors?: string[];
  version?: string;
  updated?: string;
  difficulty?: "intermediate" | "advanced";
  body: string;
};

export type Author = {
  slug: string;
  name: string;
  title?: string;
  avatarUrl?: string;
  linkedinUrl?: string;
  companyDomain?: string;
  bio: string;
};

export type SearchSkill = Pick<
  Skill,
  "name" | "title" | "description" | "category" | "tags" | "authorSlug"
>;

function resolveSkillsRoot() {
  const candidates = [
    process.env.SKILLS_DIR,
    path.resolve(process.cwd(), "..", "skills"),
    path.resolve(process.cwd(), "skills"),
  ].filter(Boolean) as string[];
  return candidates.find((candidate) => fs.existsSync(candidate));
}

function directories(root: string) {
  return fs
    .readdirSync(root, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && !entry.name.startsWith("."))
    .map((entry) => entry.name)
    .sort();
}

function yamlDate(value: unknown) {
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return value ? String(value) : undefined;
}

export function getSkills(): Skill[] {
  const root = resolveSkillsRoot();
  if (!root) return [];
  const skills: Skill[] = [];

  for (const authorSlug of directories(root)) {
    const authorRoot = path.join(root, authorSlug);
    for (const skillSlug of directories(authorRoot)) {
      const file = path.join(authorRoot, skillSlug, "SKILL.md");
      if (!fs.existsSync(file)) continue;
      const { data, content } = matter(fs.readFileSync(file, "utf8"));
      skills.push({
        name: String(data.name ?? skillSlug),
        title: String(data.title ?? data.name ?? skillSlug),
        description: String(data.description ?? "").trim(),
        category: data.category as CategorySlug,
        tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
        authorSlug,
        source: data.source,
        contributors: data.contributors,
        version: data.version ? String(data.version) : undefined,
        updated: yamlDate(data.updated),
        difficulty: data.difficulty,
        body: content.trim(),
      });
    }
  }

  return skills.sort((a, b) => a.title.localeCompare(b.title));
}

export function getSkill(authorSlug: string, name: string) {
  return getSkills().find(
    (skill) => skill.authorSlug === authorSlug && skill.name === name,
  );
}

export function getAuthors(): Author[] {
  const root = resolveSkillsRoot();
  if (!root) return [];

  return directories(root).flatMap((slug) => {
    const file = path.join(root, slug, "author.md");
    if (!fs.existsSync(file)) return [];
    const { data, content } = matter(fs.readFileSync(file, "utf8"));
    return [{
      slug,
      name: String(data.name ?? slug),
      title: data.title ? String(data.title) : undefined,
      avatarUrl: data.avatarUrl ? String(data.avatarUrl) : undefined,
      linkedinUrl: data.linkedinUrl ? String(data.linkedinUrl) : undefined,
      companyDomain: data.companyDomain ? String(data.companyDomain) : undefined,
      bio: content.trim(),
    }];
  });
}

export function getAuthor(slug: string) {
  return getAuthors().find((author) => author.slug === slug);
}

export function getSearchIndex(): SearchSkill[] {
  return getSkills().map((skill) => ({
    name: skill.name,
    title: skill.title,
    description: skill.description,
    category: skill.category,
    tags: skill.tags,
    authorSlug: skill.authorSlug,
  }));
}

export function getCategory(slug: string) {
  return CATEGORY_META.find((category) => category.slug === slug);
}
