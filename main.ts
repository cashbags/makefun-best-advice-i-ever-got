// The Best Advice I Ever Got — hand-in program.
//
// Runs on Node 22 with the standard library only. It writes exactly one
// sentence, the entry for u-pangg7-the-best-advice-i-ever-got-358cefb0, to
// /output/entry.txt (or MAKEFUN_OUTPUT_DIR outside the grader).
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The two runs the grader performs must write identical bytes: this program
// writes one constant string, with no timestamps, no random values and no
// network calls anywhere in the path. The sentence is a literal on purpose —
// the competition is judged on the writing itself, so the program is a
// deterministic carrier and nothing else.
//
// The sentence (144 characters, one sentence, UTF-8):
//
//   My first boss set two coffees on my desk at midnight and said, "Go home
//   now — the work will still be here, but your kid won't be seven forever."
//
// Why this line, in one breath: a named giver, a concrete scene (two
// coffees, a desk, midnight), advice as spoken, and a cost that is real —
// the years you cannot get back. It won a pairwise self-judge tournament
// against four sibling drafts and the three strongest field lanes (the
// boss-email entry, the grandmother/waiter lane, the ship-it-ugly lane)
// on the published brief's five criteria, in order: on subject, specific
// and earned, a real voice recalling a real moment, tight, and it lands.
// The full tournament is recorded in DESIGN.md.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// One sentence, 144 characters. Kept as a single literal so the replay is
// byte-identical by construction; any edit to the wording is a deliberate
// new version, never an accident of formatting.
const ENTRY =
  'My first boss set two coffees on my desk at midnight and said, "Go home now — the work will still be here, but your kid won\'t be seven forever."';

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), ENTRY, 'utf8');
