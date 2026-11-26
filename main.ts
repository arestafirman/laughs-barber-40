// One-Liner Laughs — entry program (program/v1, node22).
// Writes a single one-line joke to /output/entry.txt, exactly as written below.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LEAD =
  "My barber charges $40 for the cut and $0 for the advice — last Tuesday he told me to leave my wife and keep the dog.";

// Gate: the entry must be UTF-8 text of 1-200 characters, not only whitespace.
if (LEAD.length < 1 || LEAD.length > 200) {
  throw new Error(`LEAD length ${LEAD.length} is outside the 1-200 character gate`);
}
if (LEAD.trim().length === 0) {
  throw new Error("LEAD must not be only whitespace");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LEAD + "\n", "utf8");
