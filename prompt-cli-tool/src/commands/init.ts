import fs from "node:fs/promises";
import path from "node:path";
import inquirer, { Separator } from "inquirer";
import personasData from "../data/personas.json" with { type: "json" };
import type { Persona, ProjectConfig, TaskItem } from "../types.js";

interface InitOptions {
  writeConfig?: boolean;
}

function groupByCategory<T extends { category: string }>(items: T[]): Map<string, T[]> {
  const grouped = new Map<string, T[]>();

  for (const item of items) {
    const group = grouped.get(item.category) ?? [];
    group.push(item);
    grouped.set(item.category, group);
  }

  return grouped;
}

function formatLabel(name: string, summary: string, width: number): string {
  const paddedName = name.padEnd(width, " ");
  return `${paddedName}  ${summary}`;
}

async function listMarkdownFiles(dirPath: string): Promise<string[]> {
  try {
    const entries = await fs.readdir(dirPath, { withFileTypes: true });
    const files = await Promise.all(entries.map(async (entry) => {
      const fullPath = path.join(dirPath, entry.name);
      if (entry.isDirectory()) {
        return listMarkdownFiles(fullPath);
      }

      return entry.isFile() && entry.name.endsWith(".md")
        ? [fullPath]
        : [];
    }));

    return files.flat().sort();
  } catch {
    return [];
  }
}

function relativeToRepo(repoRoot: string, fullPath: string): string {
  return path.relative(repoRoot, fullPath).replaceAll("\\", "/");
}

function toDisplay(value: string): string {
  return value
    .replace(/\.md$/i, "")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function describeTask(taskPath: string): TaskItem {
  const normalized = taskPath.replaceAll("\\", "/");
  const parts = normalized.split("/");
  const category = toDisplay(parts[1] ?? "general");
  const fileName = parts.at(-1) ?? taskPath;
  const name = toDisplay(fileName);
  const summary = `Prompt template → ${category.toLowerCase()} execution`;

  return {
    id: normalized,
    name,
    category,
    summary
  };
}

async function buildProjectConfig(selectedPersonaIds: string[], selectedTaskIds: string[]): Promise<ProjectConfig> {
  const repoRoot = path.resolve(process.cwd());
  const [foundationFiles, responseStandardFiles] = await Promise.all([
    listMarkdownFiles(path.join(repoRoot, "00_foundation")),
    listMarkdownFiles(path.join(repoRoot, "01_response-standards"))
  ]);

  return {
    personas: selectedPersonaIds,
    tasks: selectedTaskIds,
    foundation: foundationFiles.map((file) => relativeToRepo(repoRoot, file)),
    response_standards: responseStandardFiles.map((file) => relativeToRepo(repoRoot, file))
  };
}

async function writeProjectConfig(config: ProjectConfig): Promise<string> {
  const configPath = path.resolve(process.cwd(), "project-config.json");
  await fs.writeFile(configPath, `${JSON.stringify(config, null, 2)}\n`, "utf8");
  return configPath;
}

async function selectPersonas(personas: Persona[]): Promise<string[]> {
  const groups = groupByCategory(personas);
  const widestName = Math.max(...personas.map((persona) => persona.display_name.length));

  const choices = Array.from(groups.entries()).flatMap(([category, group]) => {
    const header = new Separator(category);
    const categoryChoices = group.map((persona) => ({
      name: formatLabel(persona.display_name, persona.summary, widestName),
      value: persona.id
    }));

    return [header, ...categoryChoices, new Separator("")];
  });

  const answers = await inquirer.prompt<{ personas: string[] }>([
    {
      type: "checkbox",
      name: "personas",
      message: "Select personas for this project",
      pageSize: 20,
      choices,
      loop: false
    }
  ]);

  return answers.personas;
}

async function selectTasks(taskFiles: string[], repoRoot: string): Promise<string[]> {
  const taskItems = taskFiles
    .filter((file) => !file.endsWith("/README.md"))
    .map((file) => describeTask(relativeToRepo(repoRoot, file)))
    .sort((a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name));

  const groups = groupByCategory(taskItems);
  const widestName = Math.max(...taskItems.map((task) => task.name.length));

  const choices = Array.from(groups.entries()).flatMap(([category, group]) => {
    const header = new Separator(category);
    const categoryChoices = group.map((task) => ({
      name: formatLabel(task.name, task.summary, widestName),
      value: task.id
    }));

    return [header, ...categoryChoices, new Separator("")];
  });

  const answers = await inquirer.prompt<{ tasks: string[] }>([
    {
      type: "checkbox",
      name: "tasks",
      message: "Select tasks for this project",
      pageSize: 20,
      choices,
      loop: false
    }
  ]);

  return answers.tasks;
}

export async function runInit(options: InitOptions = {}): Promise<void> {
  const repoRoot = path.resolve(process.cwd());
  const personas = (personasData as Persona[])
    .slice()
    .sort((a, b) => a.category.localeCompare(b.category) || a.display_name.localeCompare(b.display_name));

  const selectedPersonaIds = await selectPersonas(personas);
  const taskFiles = await listMarkdownFiles(path.join(repoRoot, "03_tasks"));
  const selectedTaskIds = await selectTasks(taskFiles, repoRoot);
  const config = await buildProjectConfig(selectedPersonaIds, selectedTaskIds);

  console.log("\nSelected personas:");
  if (config.personas.length === 0) {
    console.log("(none)");
  } else {
    for (const personaId of config.personas) {
      console.log(`- ${personaId}`);
    }
  }

  console.log("\nSelected tasks:");
  if (config.tasks.length === 0) {
    console.log("(none)");
  } else {
    for (const taskId of config.tasks) {
      console.log(`- ${taskId}`);
    }
  }

  console.log("\nAutomatically included resources:");
  console.log(`- foundation: ${config.foundation.length}`);
  console.log(`- response standards: ${config.response_standards.length}`);

  if (options.writeConfig ?? true) {
    const configPath = await writeProjectConfig(config);
    console.log(`\nWrote ${path.basename(configPath)} at ${configPath}`);
  }
}
