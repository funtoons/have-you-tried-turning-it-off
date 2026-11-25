import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one funny line a hopeless tech support agent says to a
// desperate customer. Fixed text, written by the builder — no random,
// no network, no clock, so every run writes the exact same bytes.
const ENTRY =
  "I found the problem, sir — it's update 4.2.1, which I pushed this morning. I am the bug. Please hold while I report myself.";

// The gate requires 1-199 characters of non-blank text; refuse to write
// anything outside it rather than emit an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 199 || ENTRY.trim().length === 0) {
  throw new Error(`entry length ${ENTRY.length} is outside 1-199 characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
