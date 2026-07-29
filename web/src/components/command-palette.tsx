"use client";

import Link from "next/link";
import { Search, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import type { SearchSkill } from "@/lib/registry";

export function CommandPalette({ skills }: { skills: SearchSkill[] }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setQuery("");
        setOpen((current) => !current);
      }
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return skills.slice(0, 8);
    return skills
      .filter((skill) =>
        [
          skill.name,
          skill.title,
          skill.description,
          skill.category,
          ...skill.tags,
        ]
          .join(" ")
          .toLowerCase()
          .includes(needle),
      )
      .slice(0, 10);
  }, [query, skills]);

  return (
    <>
      <button
        className="search-trigger"
        type="button"
        onClick={() => {
          setQuery("");
          setOpen(true);
        }}
        aria-label="Search skills"
      >
        <span>
          <Search aria-hidden="true" size={15} />
          <span>Search skills</span>
        </span>
        <kbd>⌘K</kbd>
      </button>
      {open ? (
        <div
          className="command-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setOpen(false);
          }}
        >
          <section
            className="command"
            role="dialog"
            aria-modal="true"
            aria-label="Search the skill library"
          >
            <div className="command-input">
              <Search aria-hidden="true" size={18} />
              <input
                ref={inputRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by skill, category, or tag"
                aria-label="Search query"
              />
              <button type="button" onClick={() => setOpen(false)} aria-label="Close search">
                <X aria-hidden="true" size={18} />
              </button>
            </div>
            <div className="command-results">
              {results.length > 0 ? (
                results.map((skill) => (
                  <Link
                    className="command-result"
                    href={`/skills/${skill.authorSlug}/${skill.name}/`}
                    key={`${skill.authorSlug}/${skill.name}`}
                    onClick={() => setOpen(false)}
                  >
                    <div>
                      <strong>{skill.title}</strong>
                      <span>{skill.description}</span>
                    </div>
                    <code>{skill.category}</code>
                  </Link>
                ))
              ) : (
                <p className="command-empty">
                  No skill matches “{query}”. Try a category or job to be done.
                </p>
              )}
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
}
