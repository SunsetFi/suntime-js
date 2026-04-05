import { join } from "node:path";
import { statSync } from "node:fs";

import { it } from "vitest";

import getPerf from "./utils/get-perf.js";
import describePath from "./utils/describe-path.js";

import defineTest from "./define-test.js";
import getTest262Path from "./utils/get-test262-path.js";
import isTestEnabled from "./is-test-enabled.js";
import Test262File from "./Test262File.js";
import getFilesSync from "./utils/get-files.js";

const testsRoot = getTest262Path("test");

export default function defineTestFromPath(relativeTestPath: string) {
  const perf = getPerf();

  const testPath = join(testsRoot, relativeTestPath);
  const tests = getTestsFromPath(testPath);
  perf(`Found ${tests.length} tests in ${relativeTestPath}`);

  if (tests.length === 0) {
    throw new Error("No tests found for " + relativeTestPath);
  }

  const pathDecls = new Map<string, { path: string[]; tests: Test262File[] }>();
  for (const sourceFile of tests) {
    if (sourceFile.includes("_FIXTURE")) {
      continue;
    }

    const test = Test262File.fromFile(sourceFile);

    if (!isTestEnabled(test)) {
      it.skip(test.testName);
      continue;
    }

    const prefixLength = relativeTestPath.split("/").filter((x) => x.length > 0).length;
    const path = test.testPathParts.slice(prefixLength, -1);
    const fullPath = path.join("/");
    let decl = pathDecls.get(fullPath);
    if (!decl) {
      decl = { path, tests: [] };
      pathDecls.set(fullPath, decl);
    }

    decl.tests.push(test);
  }

  perf(`Sorted tests`);

  for (const { path, tests } of pathDecls.values()) {
    describePath(path, () => {
      for (const test of tests) {
        defineTest(test.testName, test);
      }
    });
  }

  perf(`Defined tests`);
}

function getTestsFromPath(testPath: string) {
  const stats = statSync(testPath);
  if (!stats.isDirectory()) {
    if (!testPath.endsWith(".js")) {
      return [];
    }

    return [testPath];
  }

  return getFilesSync(testPath, (file) => file.endsWith(".js"));
}
