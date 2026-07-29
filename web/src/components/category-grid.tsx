import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CATEGORY_META, Skill } from "@/lib/registry";

type Category = (typeof CATEGORY_META)[number];

export function CategoryGrid({
  categories,
  skills,
  compact = false,
}: {
  categories: readonly Category[];
  skills: Skill[];
  compact?: boolean;
}) {
  return (
    <div className={`category-grid${compact ? " compact" : ""}`}>
      {categories.map((category) => {
        const count = skills.filter(
          (skill) => skill.category === category.slug,
        ).length;
        return (
          <Link
            className="category-card"
            href={`/categories/${category.slug}/`}
            key={category.slug}
          >
            <div className="category-card-top">
              <span>{count.toString().padStart(2, "0")} skills</span>
              <ArrowUpRight aria-hidden="true" size={16} />
            </div>
            <h3>{category.title}</h3>
            <p>{category.description}</p>
          </Link>
        );
      })}
    </div>
  );
}
