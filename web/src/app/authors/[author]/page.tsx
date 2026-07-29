import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SkillCard } from "@/components/skill-card";
import { getAuthor, getAuthors, getSkills } from "@/lib/registry";

export const dynamicParams = false;

export function generateStaticParams() {
  const authors = getAuthors();
  return authors.length > 0
    ? authors.map((author) => ({ author: author.slug }))
    : [{ author: "__placeholder__" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ author: string }>;
}): Promise<Metadata> {
  const { author: slug } = await params;
  const author = getAuthor(slug);
  return author
    ? { title: author.name, description: author.bio }
    : { title: "Author" };
}

export default async function AuthorPage({
  params,
}: {
  params: Promise<{ author: string }>;
}) {
  const { author: slug } = await params;
  const author = getAuthor(slug);
  if (!author) notFound();
  const skills = getSkills().filter((skill) => skill.authorSlug === slug);
  const initials = author.name.split(/\s+/).map((part) => part[0]).join("").slice(0, 2);

  return (
    <main id="main-content">
      <header className="page-hero shell">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Library</Link><span>/</span><span>Authors</span>
        </nav>
        <p className="eyebrow">Contributor profile</p>
        <h1 className="page-title">{author.name}</h1>
      </header>
      <section className="shell author-card">
        <div className="author-avatar" aria-hidden="true">{initials}</div>
        <div>
          <h2>{author.title ?? "Skill author"}</h2>
          <p>{author.bio}</p>
          <div className="tag-row">
            {author.linkedinUrl ? <a className="tag" href={author.linkedinUrl}>LinkedIn</a> : null}
            {author.companyDomain ? <span className="tag">{author.companyDomain}</span> : null}
          </div>
        </div>
      </section>
      <section className="section shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{skills.length.toString().padStart(2, "0")} published</p>
            <h2>Skills by {author.name}</h2>
          </div>
        </div>
        <div className="skill-grid">
          {skills.map((skill) => <SkillCard key={skill.name} skill={skill} />)}
        </div>
      </section>
    </main>
  );
}
