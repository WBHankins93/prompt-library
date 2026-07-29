import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SkillCard } from "@/components/skill-card";
import { CATEGORY_META, getCategory, getSkills } from "@/lib/registry";

export const dynamicParams = false;

export function generateStaticParams() {
  return CATEGORY_META.map(({ slug }) => ({ category: slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const meta = getCategory(category);
  return meta
    ? { title: meta.title, description: meta.description }
    : { title: "Category" };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const meta = getCategory(category);
  if (!meta) notFound();
  const skills = getSkills().filter((skill) => skill.category === category);

  return (
    <main id="main-content">
      <header className="page-hero shell">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Library</Link>
          <span>/</span>
          <span>{meta.track === "se" ? "Solutions Engineering" : "Broader tracks"}</span>
        </nav>
        <p className="eyebrow">
          {skills.length.toString().padStart(2, "0")} published skills
        </p>
        <h1 className="page-title">{meta.title}</h1>
        <p>{meta.description}</p>
      </header>
      <section className="section shell section-ruled">
        {skills.length > 0 ? (
          <div className="skill-grid">
            {skills.map((skill) => <SkillCard skill={skill} key={skill.name} />)}
          </div>
        ) : (
          <div className="empty-state">
            <span>Category open</span>
            <h3>No skills published here yet.</h3>
            <p>
              This track is part of the permanent information architecture.
              Contributions arrive through the repository skill spec.
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
