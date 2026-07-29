import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-shell">
        <div>
          <Link className="brand" href="/">
            <span className="brand-mark" aria-hidden="true" />
            Fieldskills
          </Link>
          <p>
            Open, agent-readable operating judgment. Solutions Engineering
            first; the disciplines around it underneath.
          </p>
        </div>
        <div className="footer-links">
          <a href="https://github.com/WBHankins93/prompt-library">GitHub</a>
          <a href="https://github.com/WBHankins93/prompt-library/blob/main/docs/skill-spec.md">
            Skill spec
          </a>
        </div>
      </div>
    </footer>
  );
}
