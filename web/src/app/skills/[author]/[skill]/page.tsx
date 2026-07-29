import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAuthor, getCategory, getSkill, getSkills } from "@/lib/registry";

export const dynamicParams = false;

export function generateStaticParams() {
  const skills = getSkills();
  return skills.length > 0
    ? skills.map((skill) => ({
        author: skill.authorSlug,
        skill: skill.name,
      }))
    : [{ author: "__placeholder__", skill: "__placeholder__" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ author: string; skill: string }>;
}): Promise<Metadata> {
  const { author, skill: name } = await params;
  const skill = getSkill(author, name);
  return skill
    ? { title: skill.title, description: skill.description }
    : { title: "Skill" };
}

export default async function SkillPage({
  params,
}: {
  params: Promise<{ author: string; skill: string }>;
}) {
  const { author: authorSlug, skill: name } = await params;
  const skill = getSkill(authorSlug, name);
  if (!skill) notFound();
  const author = getAuthor(authorSlug);
  const category = getCategory(skill.category);
  const sources = Array.isArray(skill.source)
    ? skill.source
    : skill.source
      ? [skill.source]
      : [];

  return (
    <main id="main-content">
      <header className="page-hero shell">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Library</Link>
          <span>/</span>
          <Link href={`/categories/${skill.category}/`}>
            {category?.title ?? skill.category}
          </Link>
          <span>/</span>
          <span>{skill.title}</span>
        </nav>
        <div className="skill-detail-meta">
          <span>{skill.category}</span>
          {skill.version ? <span>· v{skill.version}</span> : null}
          {skill.difficulty ? <span>· {skill.difficulty}</span> : null}
        </div>
        <h1 className="page-title">{skill.title}</h1>
        <p>{skill.description}</p>
      </header>
      <div className="skill-detail shell">
        <article className="prose">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{skill.body}</ReactMarkdown>
        </article>
        <aside className="detail-sidebar">
          <dl>
            <div className="detail-row">
              <dt>Author</dt>
              <dd>
                <Link href={`/authors/${authorSlug}/`}>{author?.name ?? authorSlug}</Link>
              </dd>
            </div>
            <div className="detail-row">
              <dt>Tags</dt>
              <dd className="tag-row">
                {skill.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
              </dd>
            </div>
            {skill.updated ? (
              <div className="detail-row"><dt>Updated</dt><dd>{skill.updated}</dd></div>
            ) : null}
            {sources.length > 0 ? (
              <div className="detail-row">
                <dt>Source lineage</dt>
                <dd>
                  {sources.map((source) => <div key={source}><code>{source}</code></div>)}
                </dd>
              </div>
            ) : null}
          </dl>
        </aside>
      </div>
    </main>
  );
}
