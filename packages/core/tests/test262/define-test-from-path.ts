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

  for (const sourceFile of tests) {
    if (sourceFile.includes("_FIXTURE")) {
      continue;
    }

    const test = Test262File.fromFile(sourceFile);

    if (!isTestEnabled(test)) {
      it.skip(test.testName);
      continue;
    }

    // FIXME: This is gross in the test explorer. Strip out paths up to this file.
    // This will have consiquences for isTestEnabled and baseline storage.
    // const path = test.testPathParts.slice(relativeTestPath.split("/").length, -1);
    const path = test.testPathParts;
    describePath(path, () => {
      defineTest(test.testName, test);
    });

    perf(`Defined test ${test.testPath}`);
  }
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
