#!/usr/bin/env node
import { Command } from "commander";
import { runInit } from "./commands/init.js";

const program = new Command();

program
  .name("fieldskills")
  .description("Select Agent Skills from the Fieldskills registry")
  .version("0.2.0");

program
  .command("init")
  .description("Select skills and create skills-config.json")
  .option("--no-write-config", "Skip writing skills-config.json")
  .action(async (options: { writeConfig: boolean }) => {
    await runInit({ writeConfig: options.writeConfig });
  });

program.parseAsync(process.argv).catch((error: unknown) => {
  if (error instanceof Error) {
    console.error(error.message);
  } else {
    console.error("Unknown error");
  }
  process.exitCode = 1;
});
