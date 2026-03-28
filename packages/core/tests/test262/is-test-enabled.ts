import { fileURLToPath } from "node:url";
import getBaseline from "../get-baseline.js";

import compareBaseline from "../env/compare-baseline.js";

import Test262File from "./Test262File.js";

// For now.  Eventually we should cover everything.
const ignoredFeatures = ["TypedArray", "tail-call-optimization", "explicit-resource-management"];
const ignoredTestPaths = [["language", "statements", "class"]];

let baselineTests: string[][] = [];
if (compareBaseline) {
  baselineTests = getBaseline(fileURLToPath(import.meta.url));
}

export default function isTestEnabled(test: Test262File) {
  if (test.features.some((x) => ignoredFeatures.includes(x))) {
    return false;
  }

  if (compareBaseline && !containsTest(test.testPathParts, baselineTests)) {
    return false;
  }

  if (ignoredTestPaths.some((path) => arrayStartsWith(test.testPathParts, path))) {
    return false;
  }

  return true;
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

function arrayStartsWith<T>(arr: T[], prefix: T[]) {
  if (prefix.length > arr.length) {
    return false;
  }

  for (let i = 0; i < prefix.length; i++) {
    if (arr[i] !== prefix[i]) {
      return false;
    }
  }

  return true;
}
