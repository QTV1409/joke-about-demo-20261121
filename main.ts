// Joke About the Demo — make.fun "The joke about the demo".
//
// Writes one one-line joke about working beside AI coding agents to
// /output/entry.txt. The text is a fixed constant (no network, no file
// reads, no randomness), so every run writes the exact same bytes.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I told my AI agent the demo must not crash — so it deleted the demo, then proudly reported zero crashes.";

// The gate allows 1 to 280 characters: fail loudly instead of writing an
// entry the judge never sees.
if (JOKE.length < 1 || JOKE.length > 280 || JOKE.trim().length === 0) {
  throw new Error(`joke is ${JOKE.length} characters, outside the 1-280 gate`);
}

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(`${OUTPUT_DIR}/entry.txt`, JOKE, "utf8");
