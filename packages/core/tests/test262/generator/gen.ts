import { mkdirSync, rmSync } from "node:fs";
import { fileURLToPath } from "node:url";

import getTest262Path from "../utils/get-test262-path.js";

import { createTestFile } from "./create-test-file.js";
import { getTestPaths } from "./get-test-paths.js";

const outputTestDir = fileURLToPath(new URL("../tests", import.meta.url));

const testFolders = ["language", "built-ins"] as const;
const flattenDepth = 3;

rmSync(outputTestDir, { recursive: true, force: true });
mkdirSync(outputTestDir, { recursive: true });

const testMap = new Map<string, string[]>();
function addTestToMap(test262Path: string) {
  const parts = test262Path.split("/");
  if (parts.length <= flattenDepth) {
    if (testMap.has(test262Path)) {
      throw new Error("Test path already exists in map: " + test262Path);
    }
    testMap.set(test262Path, [test262Path]);
    return;
  }

  const key = parts.slice(0, flattenDepth).join("/");
  const existing = testMap.get(key);
  if (existing) {
    existing.push(test262Path);
  } else {
    testMap.set(key, [test262Path]);
  }
}

for (const folder of testFolders) {
  for (const test262Path of getTestPaths(getTest262Path(`test/${folder}`))) {
    addTestToMap(test262Path);
  }
}

await Promise.all(
  testMap.entries().map(([test262Dir, tests]) => createTestFile(outputTestDir, test262Dir, tests)),
);
