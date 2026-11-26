// Five Seconds to Explain the Glass — make.fun bounty entry.
// SPDX-License-Identifier: MIT
// A program/v1 entry: writes one sentence to /output/entry.txt.
// No network, no model calls, no randomness, no clock: the text is fixed
// and deterministic, so every run (and every replay) produces the same entry.

import { mkdirSync, writeFileSync } from "node:fs";

// The cat's defence: territorial, unrepentant, spoken in five seconds.
// Fresh angle — the glass squatted in the cat's sunbeam like it paid rent —
// instead of the obvious gravity / slippery-edge / it-was-already-falling lines.
// No apology, no confession: an eviction notice, not a regret.
const ENTRY =
  "In my defence, that glass was squatting in my sunbeam like it paid rent, so I evicted it — the floor is its new address now.";

// Gate: the entry must be UTF-8 text of 1 to 200 characters, not only whitespace.
const chars = [...ENTRY];
if (chars.length < 1 || chars.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${chars.length} characters, outside the 1-200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${chars.length} characters)`);


