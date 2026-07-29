import Link from "next/link";
import { CommandPalette } from "@/components/command-palette";
import type { SearchSkill } from "@/lib/registry";

export function SiteHeader({ skills }: { skills: SearchSkill[] }) {
  return (
    <header className="site-header">
      <div className="shell nav-shell">
        <Link className="brand" href="/">
          <span className="brand-mark" aria-hidden="true" />
          Fieldskills
        </Link>
        <nav className="nav-links" aria-label="Main navigation">
          <Link href="/categories/discovery/">SE skills</Link>
          <Link href="/categories/engineering/">Broader tracks</Link>
          <CommandPalette skills={skills} />
        </nav>
      </div>
    </header>
  );
}
