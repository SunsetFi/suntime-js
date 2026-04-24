import { readdirSync, statSync } from "node:fs";
import { relative, resolve } from "node:path";

import getTest262Path from "../utils/get-test262-path.js";

const test262Dir = getTest262Path("test");

export function* getTestPaths(currentPath = test262Dir): Generator<string> {
  currentPath = resolve(currentPath);

  const entries = readdirSync(currentPath);

  for (const entry of entries) {
    if (entry.includes("_FIXTURE")) {
      continue;
    }

    const entryPath = `${currentPath}/${entry}`;
    const stats = statSync(entryPath);
    if (!stats.isDirectory()) {
      if (entry.endsWith(".js")) {
        yield relative(test262Dir, entryPath);
      }
      continue;
    }

    yield* getTestPaths(entryPath);
  }
}
