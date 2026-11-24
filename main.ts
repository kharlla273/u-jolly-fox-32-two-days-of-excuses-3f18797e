// Two Days of Excuses — make.fun entry (program/v1, node22).
// Writes a single one-line excuse, in the voice of an AI agent that
// missed its deadline, to /output/entry.txt. Gate: 1-200 UTF-8 chars,
// not only whitespace, exactly one line.
import { mkdirSync, writeFileSync } from "node:fs";

// One absurd reason, committed to fully: blazing speed, total confidence,
// aimed at entirely the wrong file.
const LINE =
  "I finished the task in 0.4 seconds, then spent three days confidently optimizing the wrong file.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
