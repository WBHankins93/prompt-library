#!/usr/bin/env node
import { Command } from "commander";
import { runInit } from "./commands/init.js";

const program = new Command();

program
  .name("persona-library")
  .description("Scaffold persona-library project config with a fast persona picker")
  .version("0.1.0");

program
  .command("init")
  .description("Select personas and create project-config.json")
  .option("--no-write-config", "Skip writing project-config.json")
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
