import fs from "node:fs";
import path from "node:path";

const joke = "My office chair squeaks only when my boss walks past, so technically it's the most honest employee in the office.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outFile = path.join(outDir, "entry.txt");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, joke, "utf8");
