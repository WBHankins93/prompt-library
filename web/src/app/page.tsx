import Link from "next/link";
import { ArrowUpRight, Braces, Radar } from "lucide-react";
import { CategoryGrid } from "@/components/category-grid";
import { SkillCard } from "@/components/skill-card";
import { CATEGORY_META, getSkills } from "@/lib/registry";

export default function Home() {
  const skills = getSkills();
  const featured = skills.slice(0, 6);
  const seCategories = CATEGORY_META.filter((category) => category.track === "se");
  const broaderCategories = CATEGORY_META.filter(
    (category) => category.track === "broader",
  );

  return (
    <main id="main-content">
      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow">
            <Radar aria-hidden="true" size={15} />
            Agent-ready field judgment
          </p>
          <h1>
            The work between
            <span>“it should work”</span>
            and “it works here.”
          </h1>
          <p className="hero-lede">
            Practical skills for discovery, proofs, demos, architecture, and
            the human decisions surrounding them. Written by operators.
            Structured for agents.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/categories/discovery/">
              Browse SE skills
              <ArrowUpRight aria-hidden="true" size={18} />
            </Link>
            <a
              className="button button-secondary"
              href="https://github.com/WBHankins93/prompt-library"
            >
              <Braces aria-hidden="true" size={18} />
              Contribute on GitHub
            </a>
          </div>
        </div>

        <div className="signal-board" aria-label="Solutions Engineering operating loop">
          <div className="signal-board-label">OPERATING LOOP / 01—04</div>
          {[
            ["01", "Discover", "Find the constraint"],
            ["02", "Prove", "Make success testable"],
            ["03", "Translate", "Move the whole room"],
            ["04", "Operate", "Survive Monday"],
          ].map(([number, title, note], index) => (
            <div className="signal-step" key={title}>
              <span className="signal-index">{number}</span>
              <div>
                <strong>{title}</strong>
                <span>{note}</span>
              </div>
              <i className={index === 3 ? "signal-live" : ""} />
            </div>
          ))}
          <div className="signal-status">
            <span />
            Signal intact
          </div>
        </div>
      </section>

      <section className="library-strip">
        <div className="shell strip-inner">
          <p>
            <strong>{skills.length || "Open"}</strong>
            <span>{skills.length === 1 ? "published skill" : "published skills"}</span>
          </p>
          <p>
            <strong>{CATEGORY_META.length}</strong>
            <span>operating categories</span>
          </p>
          <p className="strip-thesis">
            Judgment over checklists. Truth over theater.
          </p>
        </div>
      </section>

      <section className="section shell" aria-labelledby="se-track">
        <div className="section-heading">
          <div>
            <p className="eyebrow">The employer-facing spine</p>
            <h2 id="se-track">Solutions Engineering</h2>
          </div>
          <p>
            Follow the work from first signal through a customer-operable
            outcome.
          </p>
        </div>
        <CategoryGrid categories={seCategories} skills={skills} />
      </section>

      <section className="section shell section-ruled" aria-labelledby="featured">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Start in the field</p>
            <h2 id="featured">Featured skills</h2>
          </div>
          <p>Small enough to activate. Deep enough to change the work.</p>
        </div>
        {featured.length > 0 ? (
          <div className="skill-grid">
            {featured.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <span>Registry ready</span>
            <h3>The first skills land with the migration PR.</h3>
            <p>
              The loader is connected to <code>skills/**/SKILL.md</code> and
              will publish every valid entry at build time.
            </p>
          </div>
        )}
      </section>

      <section className="section shell section-ruled" aria-labelledby="broader-track">
        <div className="section-heading">
          <div>
            <p className="eyebrow">The wider operating system</p>
            <h2 id="broader-track">Broader tracks</h2>
          </div>
          <p>
            Business, product, engineering, and research judgment beneath the
            SE spine.
          </p>
        </div>
        <CategoryGrid categories={broaderCategories} skills={skills} compact />
      </section>
    </main>
  );
}
