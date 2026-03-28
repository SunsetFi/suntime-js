import { fileURLToPath } from "node:url";
import { readdirSync, statSync, writeFileSync } from "node:fs";
import { relative, join } from "node:path";

import getTest262Path from "./utils/get-test262-path.js";

const outputTestDir = fileURLToPath(new URL("tests", import.meta.url));
const test262Dir = getTest262Path();

const flattenDepth = 1;

function* getTestDirs(depth: number = 1, currentFolder = test262Dir): Generator<string> {
  const entries = readdirSync(currentFolder);
  for (const entry of entries) {
    const entryPath = `${currentFolder}/${entry}`;
    const stats = statSync(entryPath);
    if (!stats.isDirectory()) {
      continue;
    }

    if (depth >= flattenDepth) {
      yield entryPath;
    } else {
      yield* getTestDirs(depth + 1, entryPath);
    }
  }
}

for (const targetTestDir of getTestDirs()) {
  const relativeTestDir = relative(test262Dir, targetTestDir);
  if (relativeTestDir.includes("..")) {
    throw new Error("Test dir is outside of test262: " + targetTestDir);
  }

  const outputPath = join(outputTestDir, relativeTestDir);
  const folderPath = join(outputPath, "..");
  const fileName = relativeTestDir
    .split("/")
    .filter((x) => x.length > 0)
    .at(-1);

  if (!fileName) {
    throw new Error("Could not determine file name for test dir: " + targetTestDir);
  }

  mkdirDeepSync(folderPath);
  const source = createTestFile(relativeTestDir);
  writeFileSync(join(outputPath, `${fileName}.test.ts`), source, "utf-8");
}

function mkdirDeepSync(path: string) {
  const parts = path.split("/");
  let currentPath = "";
  for (const part of parts) {
    currentPath += part + "/";
    try {
      statSync(currentPath);
    } catch (err) {
      if ((err as NodeJS.ErrnoException).code === "ENOENT") {
        // Directory doesn't exist, create it
        mkdirDeepSync(currentPath);
      } else {
        throw err;
      }
    }
  }
}

function createTestFile(path: string) {
  return `
    import defineTestFolder from "../define-test-folder.js";
    defineTestFolder(${JSON.stringify(path)});
  `.trimStart();
}
