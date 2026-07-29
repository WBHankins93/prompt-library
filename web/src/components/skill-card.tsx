import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Skill } from "@/lib/registry";

export function SkillCard({ skill }: { skill: Skill }) {
  return (
    <Link className="skill-card" href={`/skills/${skill.authorSlug}/${skill.name}/`}>
      <div>
        <div className="skill-card-meta">
          <span>{skill.category}</span>
          {skill.difficulty ? <span>· {skill.difficulty}</span> : null}
        </div>
        <h3>{skill.title}</h3>
        <p>{skill.description}</p>
      </div>
      <div className="skill-card-bottom">
        <div className="tag-row">
          {skill.tags.slice(0, 2).map((tag) => (
            <span className="tag" key={tag}>{tag}</span>
          ))}
        </div>
        <ArrowUpRight aria-hidden="true" size={17} />
      </div>
    </Link>
  );
}
