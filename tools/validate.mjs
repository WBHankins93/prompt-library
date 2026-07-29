#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const CATEGORIES = new Set([
  "discovery",
  "poc-design",
  "technical-demos",
  "stakeholder-navigation",
  "solution-design",
  "enablement",
  "objection-handling",
  "business",
  "commercial",
  "career",
  "product",
  "engineering",
  "research",
]);

const TAGS = new Set([
  "Solutions Engineering",
  "Sales Engineering",
  "Engineering",
  "Product",
  "Business",
  "Commercial",
  "Career",
  "Research",
  "Leadership",
]);

const REQUIRED_FIELDS = ["name", "title", "description", "category", "tags"];
const ALLOWED_FIELDS = new Set([
  ...REQUIRED_FIELDS,
  "source",
  "contributors",
  "version",
  "updated",
  "difficulty",
]);
const KEBAB_CASE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function unquote(value) {
  const trimmed = value.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

function parseInlineArray(value) {
  const inner = value.slice(1, -1).trim();
  if (!inner) return [];
  return inner.split(",").map((item) => unquote(item));
}

function parseFrontmatter(text) {
  const normalized = text.replaceAll("\r\n", "\n");
  const lines = normalized.split("\n");
  if (lines[0]?.trim() !== "---") {
    throw new Error("file must begin with a YAML frontmatter delimiter (`---`)");
  }

  const closingIndex = lines.findIndex(
    (line, index) => index > 0 && line.trim() === "---",
  );
  if (closingIndex === -1) {
    throw new Error("frontmatter is missing its closing `---` delimiter");
  }

  const data = {};
  const frontmatterLines = lines.slice(1, closingIndex);
  let index = 0;

  while (index < frontmatterLines.length) {
    const line = frontmatterLines[index];
    if (!line.trim() || line.trimStart().startsWith("#")) {
      index += 1;
      continue;
    }

    const match = line.match(/^([A-Za-z][A-Za-z0-9_-]*):(?:\s*(.*))?$/);
    if (!match) {
      throw new Error(`cannot parse frontmatter line ${index + 2}: ${line}`);
    }

    const [, key, rawValue = ""] = match;
    if (Object.hasOwn(data, key)) {
      throw new Error(`frontmatter field \`${key}\` is duplicated`);
    }

    if (rawValue === ">" || rawValue === "|") {
      const block = [];
      index += 1;
      while (
        index < frontmatterLines.length &&
        (/^\s+/.test(frontmatterLines[index]) ||
          frontmatterLines[index].trim() === "")
      ) {
        block.push(frontmatterLines[index].replace(/^\s{2}/, ""));
        index += 1;
      }
      data[key] =
        rawValue === ">"
          ? block.join(" ").replace(/\s+/g, " ").trim()
          : block.join("\n").trim();
      continue;
    }

    if (!rawValue) {
      const items = [];
      index += 1;
      while (
        index < frontmatterLines.length &&
        /^\s+-\s+/.test(frontmatterLines[index])
      ) {
        items.push(
          unquote(frontmatterLines[index].replace(/^\s+-\s+/, "")),
        );
        index += 1;
      }
      data[key] = items.length > 0 ? items : "";
      continue;
    }

    data[key] =
      rawValue.startsWith("[") && rawValue.endsWith("]")
        ? parseInlineArray(rawValue)
        : unquote(rawValue);
    index += 1;
  }

  return {
    data,
    body: lines.slice(closingIndex + 1).join("\n").trim(),
  };
}

function skillFiles(skillsRoot) {
  if (!fs.existsSync(skillsRoot)) return [];
  const files = [];
  for (const author of fs.readdirSync(skillsRoot, { withFileTypes: true })) {
    if (!author.isDirectory() || author.name.startsWith(".")) continue;
    const authorRoot = path.join(skillsRoot, author.name);
    for (const skill of fs.readdirSync(authorRoot, { withFileTypes: true })) {
      if (!skill.isDirectory() || skill.name.startsWith(".")) continue;
      const file = path.join(authorRoot, skill.name, "SKILL.md");
      if (fs.existsSync(file)) files.push(file);
    }
  }
  return files.sort();
}

function bodyWordCount(body) {
  return (
    body
      .replace(/[`*_#>[\]()]/g, " ")
      .match(/\b[\p{L}\p{N}][\p{L}\p{N}'’-]*\b/gu)?.length ?? 0
  );
}

function hasReferenceMarkdown(skillRoot) {
  const references = path.join(skillRoot, "references");
  return (
    fs.existsSync(references) &&
    fs
      .readdirSync(references, { withFileTypes: true })
      .some((entry) => entry.isFile() && entry.name.endsWith(".md"))
  );
}

function validateSkill(file, repoRoot) {
  const errors = [];
  const relative = path.relative(repoRoot, file);
  const skillRoot = path.dirname(file);
  const folderName = path.basename(skillRoot);
  const authorSlug = path.basename(path.dirname(skillRoot));
  let parsed;

  try {
    parsed = parseFrontmatter(fs.readFileSync(file, "utf8"));
  } catch (error) {
    return {
      errors: [error instanceof Error ? error.message : String(error)],
      file,
      relative,
    };
  }

  const { data, body } = parsed;
  for (const field of REQUIRED_FIELDS) {
    const value = data[field];
    if (
      value === undefined ||
      value === "" ||
      (Array.isArray(value) && value.length === 0)
    ) {
      errors.push(`missing required frontmatter field \`${field}\``);
    }
  }

  for (const field of Object.keys(data)) {
    if (!ALLOWED_FIELDS.has(field)) {
      errors.push(`unsupported frontmatter field \`${field}\``);
    }
  }

  if (!KEBAB_CASE.test(authorSlug)) {
    errors.push(`author folder \`${authorSlug}\` must be kebab-case`);
  }
  if (data.name !== folderName) {
    errors.push(
      `name \`${data.name ?? ""}\` must match folder \`${folderName}\``,
    );
  }
  if (typeof data.name === "string") {
    if (!KEBAB_CASE.test(data.name)) {
      errors.push("`name` must be kebab-case");
    }
    if (data.name.length > 60) {
      errors.push("`name` must be 60 characters or fewer");
    }
  }
  if (data.category && !CATEGORIES.has(data.category)) {
    errors.push(`category \`${data.category}\` is not allowed`);
  }
  if (!Array.isArray(data.tags)) {
    errors.push("`tags` must be a non-empty YAML array");
  } else {
    const invalidTags = data.tags.filter((tag) => !TAGS.has(tag));
    if (invalidTags.length > 0) {
      errors.push(`unsupported tag(s): ${invalidTags.join(", ")}`);
    }
  }
  if (
    data.difficulty &&
    !["intermediate", "advanced"].includes(data.difficulty)
  ) {
    errors.push("`difficulty` must be `intermediate` or `advanced`");
  }
  if (data.version && !/^\d+\.\d+\.\d+$/.test(data.version)) {
    errors.push("`version` must be SemVer such as `1.0.0`");
  }
  if (data.updated && !/^\d{4}-\d{2}-\d{2}$/.test(data.updated)) {
    errors.push("`updated` must use ISO format `YYYY-MM-DD`");
  }
  if (data.contributors && !Array.isArray(data.contributors)) {
    errors.push("`contributors` must be a YAML array");
  }

  const whenIndex = body.indexOf("**When to use this skill:**");
  const producesIndex = body.indexOf("**What it produces:**");
  const goodMatch = /^## What good looks like\s*$/m.exec(body);
  const rulesMatch = /^## Hard rules\s*$/m.exec(body);
  const headings = [...body.matchAll(/^## (.+)\s*$/gm)];
  const procedureHeadings = headings.filter(
    (match) =>
      match[1].trim() !== "What good looks like" &&
      match[1].trim() !== "Hard rules",
  );

  if (whenIndex === -1) errors.push("missing `When to use this skill` line");
  if (producesIndex === -1) errors.push("missing `What it produces` line");
  if (procedureHeadings.length === 0) {
    errors.push("missing procedure `##` subsection");
  }
  if (!goodMatch) errors.push("missing `## What good looks like` section");
  if (!rulesMatch) errors.push("missing `## Hard rules` section");

  if (
    whenIndex !== -1 &&
    producesIndex !== -1 &&
    procedureHeadings.length > 0 &&
    goodMatch &&
    rulesMatch
  ) {
    const positions = [
      whenIndex,
      producesIndex,
      procedureHeadings[0].index,
      goodMatch.index,
      rulesMatch.index,
    ];
    if (!positions.every((position, index) => index === 0 || position > positions[index - 1])) {
      errors.push("required body sections are out of order");
    }
  }

  if (rulesMatch) {
    const rulesBody = body.slice(rulesMatch.index + rulesMatch[0].length);
    if (!/^\s*-\s+.*\b(?:MUST|NEVER|ALWAYS)\b/m.test(rulesBody)) {
      errors.push("`## Hard rules` must contain MUST, NEVER, or ALWAYS bullets");
    }
  }

  const words = bodyWordCount(body);
  if (words > 800 && !hasReferenceMarkdown(skillRoot)) {
    errors.push(
      `body is ${words} words; bodies over 800 words require a references/*.md file`,
    );
  }

  return { data, errors, file, relative, words };
}

function main() {
  const scriptRoot = path.dirname(fileURLToPath(import.meta.url));
  const rootFlag = process.argv.indexOf("--root");
  const repoRoot =
    rootFlag === -1
      ? path.resolve(scriptRoot, "..")
      : path.resolve(process.argv[rootFlag + 1] ?? "");
  const files = skillFiles(path.join(repoRoot, "skills"));

  if (files.length === 0) {
    console.error(`No SKILL.md files found under ${path.join(repoRoot, "skills")}`);
    process.exitCode = 1;
    return;
  }

  const reports = files.map((file) => validateSkill(file, repoRoot));
  const names = new Map();
  for (const report of reports) {
    const name = report.data?.name;
    if (typeof name !== "string" || !name) continue;
    const matches = names.get(name) ?? [];
    matches.push(report);
    names.set(name, matches);
  }
  for (const [name, matches] of names) {
    if (matches.length < 2) continue;
    for (const report of matches) {
      report.errors.push(`duplicate skill name \`${name}\` across the library`);
    }
  }

  let failures = 0;
  for (const report of reports) {
    if (report.errors.length === 0) {
      console.log(`✓ ${report.relative} (${report.words} body words)`);
      continue;
    }
    failures += 1;
    console.error(`✗ ${report.relative}`);
    for (const error of report.errors) console.error(`  - ${error}`);
  }

  if (failures > 0) {
    console.error(`\nValidation failed: ${failures} of ${reports.length} skill(s).`);
    process.exitCode = 1;
  } else {
    console.log(`\nValidation passed: ${reports.length} skill(s).`);
  }
}

main();
