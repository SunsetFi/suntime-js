import normalizeTestPathParts from "../normalize-test-path-parts.js";

import type Test262File from "./Test262File.js";
import arrayStartsWith from "./utils/array-starts-with.js";

// For now.  Eventually we should cover everything.
const ignoredFeatures = [
  "TypedArray",
  "tail-call-optimization",
  "explicit-resource-management",
  "resizable-arraybuffer",
  "dynamic-import",
  // This is something we can probably implement without much trouble.
  // Maybe wait for real stack traces.
  "caller",
];

export interface IsTestEnabledOptions {
  baselineTests?: Set<string>;
  ignoredTestPaths?: string[][];
}

export default function makeIsTestEnabled(
  options: IsTestEnabledOptions = {},
): (test: Test262File) => boolean {
  const { baselineTests, ignoredTestPaths = [] } = options;

  return function isTestEnabled(test: Test262File) {
    if (test.features.some((x) => ignoredFeatures.includes(x))) {
      return false;
    }

    if (baselineTests && !baselineTests.has(normalizeTestPathParts(test.testPathParts))) {
      return false;
    }

    if (ignoredTestPaths.some((path) => arrayStartsWith(test.testPathParts, path))) {
      return false;
    }

    return true;
  };
}
