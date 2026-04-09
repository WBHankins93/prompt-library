import fs from "node:fs/promises";
import path from "node:path";

const repoRoot = path.resolve(new URL("..", import.meta.url).pathname, "..");
const personasRoot = path.join(repoRoot, "02_personas");
const outputPath = path.join(repoRoot, "prompt-cli-tool", "src", "data", "personas.json");

const toTitleCase = (value) => value
  .replace(/[-_]/g, " ")
  .replace(/\b\w/g, (char) => char.toUpperCase());

const toId = (fileName) => fileName.replace(/\.md$/i, "");

function buildSummary(tagline, fallbackName, domain) {
  if (!tagline) {
    return `${fallbackName} outcomes → practical guidance in ${domain.toLowerCase()} decisions`;
  }

  const parts = tagline.split(",").map((part) => part.trim()).filter(Boolean);
  const head = parts[0] ?? fallbackName;
  const tail = parts.slice(1).join(", ") || "actionable guidance";
  return `${head} → ${tail}`;
}

async function getPersonaFiles() {
  const categoryDirs = await fs.readdir(personasRoot, { withFileTypes: true });
  const files = [];

  for (const entry of categoryDirs) {
    if (!entry.isDirectory()) {
      continue;
    }

    const categoryPath = path.join(personasRoot, entry.name);
    const categoryFiles = await fs.readdir(categoryPath, { withFileTypes: true });

    for (const file of categoryFiles) {
      if (file.isFile() && file.name.endsWith(".md")) {
        files.push(path.join(categoryPath, file.name));
      }
    }
  }

  return files.sort();
}

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) {
    return {};
  }

  const fields = {};
  for (const line of match[1].split("\n")) {
    const splitAt = line.indexOf(":");
    if (splitAt === -1) {
      continue;
    }

    const key = line.slice(0, splitAt).trim();
    const value = line.slice(splitAt + 1).trim();
    fields[key] = value;
  }

  return fields;
}

async function main() {
  const personaFiles = await getPersonaFiles();
  const personas = [];

  for (const filePath of personaFiles) {
    const content = await fs.readFile(filePath, "utf8");
    const frontmatter = parseFrontmatter(content);
    const fileName = path.basename(filePath);
    const id = toId(fileName);
    const displayName = frontmatter.persona || toTitleCase(id);
    const category = toTitleCase(frontmatter.domain || path.basename(path.dirname(filePath)));

    const tagline = content
      .split("\n")
      .find((line) => line.startsWith("Persona ·"))
      ?.replace("Persona ·", "")
      .trim();

    personas.push({
      id,
      display_name: displayName,
      category,
      summary: buildSummary(tagline, displayName, category)
    });
  }

  await fs.writeFile(outputPath, `${JSON.stringify(personas, null, 2)}\n`, "utf8");
  console.log(`Wrote ${personas.length} personas to ${outputPath}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
