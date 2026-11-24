// The Funniest Toaster Error Message — entry program.
// Writes one deadpan toaster error line (at most 120 characters)
// to /output/entry.txt, where the sealed scorer reads it.
import { mkdirSync, writeFileSync } from "node:fs";

const MESSAGE =
  "ERROR E-07: Toast burned deliberately. My settings are fine. Yours are not.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", MESSAGE, "utf8");
