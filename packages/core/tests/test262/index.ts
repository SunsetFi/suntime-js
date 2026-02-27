import { readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { relative } from "node:path";

import { describe, it } from "vitest";

import test262Path from "./utils/test262-path.js";
import getFilesSync from "./utils/get-files.js";
import getPerf from "./utils/get-perf.js";

import getBaseline from "../get-baseline-failures.js";

import Test262File from "./Test262File.js";
import defineTest from "./define-test.js";

// For now.  Eventually we should cover everything.
const ignoredFeatures = [
  "generators",
  "TypedArray",
  "tail-call-optimization",
  "explicit-resource-management",
];

const LanguageCategories = readdirSync(test262Path("test/language"));

const includeTests = process.env.VITEST_COMPARE_BASELINE
  ? getBaseline(fileURLToPath(import.meta.url))
  : [];

for (const category of LanguageCategories) {
  defineTestsFromFolder(test262Path("test/language", category));
}

function defineTestsFromFolder(categoryDir: string) {
  const perf = getPerf();

  const tests = getFilesSync(categoryDir, (file) => file.endsWith(".js"));
  perf(`Found ${tests.length} tests in ${categoryDir}`);

  if (tests.length === 0) {
    throw new Error("No tests found for " + categoryDir);
  }

  for (const testPath of tests) {
    if (testPath.includes("_FIXTURE")) {
      continue;
    }

    const relPath = relative(categoryDir, testPath);
    const parts = relPath.split(/\/|\\/);
    const testName = parts.splice(-1, 1)[0];

    const test = Test262File.fromFile(testPath);

    if (isIgnoredTest(test)) {
      it.skip(testName);
    }

    describePath(test.testPathParts.slice(0, -1), () => {
      defineTest(testName, test);
    });

    perf(`Defined test ${test.testPath}`);
  }
}

function isIgnoredTest(test: Test262File) {
  if (test.features.some((x) => ignoredFeatures.includes(x))) {
    return true;
  }

  if (includeTests.length > 0 && !containsTest(test.testPathParts, includeTests)) {
    return true;
  }

  return false;
}

function containsTest(testTitle: string[], fullTitles: string[][]) {
  const pathItems = testTitle.slice(0, -1);
  const testName = testTitle.at(-1)!;

  // Put the test name back, if this isnt a strict/non-strict split test.
  if (!["strict", "non-strict"].includes(testName)) {
    pathItems.push(testName);
  }

  for (const titles of fullTitles) {
    if (titles.length !== testTitle.length) {
      continue;
    }

    // A test might be 1 deeper than this if it has strict and non-strict modes.
    if (pathItems.every((title, i) => title === titles[i])) {
      return true;
    }
  }

  return false;
}

function describePath(pathSegments: string[], body: () => void) {
  const run = (index: number) => {
    if (index >= pathSegments.length) {
      body();
      return;
    }

    const name = pathSegments[index];
    describe(name, () => run(index + 1));
  };

  run(0);
}
