import fs from "node:fs/promises";
import path from "node:path";
import inquirer from "inquirer";
import type { Skill, SkillsConfig } from "../types.js";

interface InitOptions {
  writeConfig?: boolean;
}

function parseFrontmatter(content: string): Record<string, string> {
  const lines = content.split(/\r?\n/);
  if (lines[0]?.trim() !== "---") {
    return {};
  }

  const values: Record<string, string> = {};
  for (let index = 1; index < lines.length; index += 1) {
    const line = lines[index] ?? "";
    if (line.trim() === "---") {
      break;
    }

    const match = line.match(/^([A-Za-z][A-Za-z0-9_-]*):\s*(.*)$/);
    if (!match) {
      continue;
    }

    const [, key, rawValue = ""] = match;
    if (rawValue === ">" || rawValue === "|") {
      const folded: string[] = [];
      while (index + 1 < lines.length && /^\s+/.test(lines[index + 1] ?? "")) {
        index += 1;
        folded.push((lines[index] ?? "").trim());
      }
      values[key] = folded.join(" ").trim();
    } else {
      values[key] = rawValue.replace(/^["']|["']$/g, "").trim();
    }
  }

  return values;
}

function parseTags(rawTags: string): string[] {
  const trimmed = rawTags.trim();
  if (!trimmed.startsWith("[") || !trimmed.endsWith("]")) {
    return [];
  }

  return trimmed
    .slice(1, -1)
    .split(",")
    .map((tag) => tag.trim().replace(/^["']|["']$/g, ""))
    .filter(Boolean);
}

async function loadSkills(repoRoot: string): Promise<Skill[]> {
  const skillsRoot = path.join(repoRoot, "skills");
  let authors;

  try {
    authors = await fs.readdir(skillsRoot, { withFileTypes: true });
  } catch {
    throw new Error(`No skills registry found at ${skillsRoot}. Run fieldskills from the repository root.`);
  }

  const skills: Skill[] = [];
  for (const authorEntry of authors.filter((entry) => entry.isDirectory())) {
    const author = authorEntry.name;
    const authorRoot = path.join(skillsRoot, author);
    const entries = await fs.readdir(authorRoot, { withFileTypes: true });

    for (const entry of entries.filter((candidate) => candidate.isDirectory())) {
      const skillPath = path.join(authorRoot, entry.name, "SKILL.md");
      let content: string;

      try {
        content = await fs.readFile(skillPath, "utf8");
      } catch {
        continue;
      }

      const metadata = parseFrontmatter(content);
      const name = metadata.name ?? entry.name;
      skills.push({
        id: `${author}/${name}`,
        name,
        title: metadata.title ?? name,
        category: metadata.category ?? "uncategorized",
        description: metadata.description ?? "",
        tags: parseTags(metadata.tags ?? "[]"),
        author,
        path: path.relative(repoRoot, skillPath).replaceAll("\\", "/")
      });
    }
  }

  return skills.sort((a, b) =>
    a.category.localeCompare(b.category) || a.title.localeCompare(b.title)
  );
}

function groupByCategory(skills: Skill[]): Map<string, Skill[]> {
  const grouped = new Map<string, Skill[]>();

  for (const skill of skills) {
    const group = grouped.get(skill.category) ?? [];
    group.push(skill);
    grouped.set(skill.category, group);
  }

  return grouped;
}

function summarize(description: string, width = 76): string {
  const normalized = description.replace(/\s+/g, " ").trim();
  return normalized.length <= width ? normalized : `${normalized.slice(0, width - 1).trimEnd()}…`;
}

async function selectSkills(skills: Skill[]): Promise<string[]> {
  const groups = groupByCategory(skills);
  const widestTitle = Math.max(...skills.map((skill) => skill.title.length));
  const choices = Array.from(groups.entries()).flatMap(([category, group]) => [
    new inquirer.Separator(category),
    ...group.map((skill) => ({
      name: `${skill.title.padEnd(widestTitle, " ")}  ${summarize(skill.description)}`,
      value: skill.id
    })),
    new inquirer.Separator("")
  ]);

  const answers = await inquirer.prompt<{ skills: string[] }>([
    {
      type: "checkbox",
      name: "skills",
      message: "Select skills for this project",
      pageSize: 20,
      choices,
      loop: false
    }
  ]);

  return answers.skills;
}

async function writeSkillsConfig(config: SkillsConfig): Promise<string> {
  const configPath = path.resolve(process.cwd(), "skills-config.json");
  await fs.writeFile(configPath, `${JSON.stringify(config, null, 2)}\n`, "utf8");
  return configPath;
}

export async function runInit(options: InitOptions = {}): Promise<void> {
  const repoRoot = path.resolve(process.cwd());
  const skills = await loadSkills(repoRoot);
  if (skills.length === 0) {
    throw new Error(`No SKILL.md files found beneath ${path.join(repoRoot, "skills")}.`);
  }

  const selectedSkillIds = await selectSkills(skills);
  const config: SkillsConfig = { skills: selectedSkillIds };

  console.log("\nSelected skills:");
  if (config.skills.length === 0) {
    console.log("(none)");
  } else {
    for (const skillId of config.skills) {
      console.log(`- ${skillId}`);
    }
  }

  if (options.writeConfig ?? true) {
    const configPath = await writeSkillsConfig(config);
    console.log(`\nWrote ${path.basename(configPath)} at ${configPath}`);
  }
}
