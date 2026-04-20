import compareBaseline from "../env/compare-baseline.js";
import getBaseline from "../get-baseline.js";
import normalizeTestPathParts from "../normalize-test-path-parts.js";

import Test262File from "./Test262File.js";
import arrayStartsWith from "./utils/array-starts-with.js";

// For now.  Eventually we should cover everything.
const ignoredFeatures = ["TypedArray", "tail-call-optimization", "explicit-resource-management"];
const ignoredTestPaths: string[][] = [
  // Tests 65535 comment variations, none of which will confuse babel.
  ["language", "comments", "S7.4_A5.js"],
];
const baselineTests = compareBaseline ? getBaseline() : undefined;

export default function isTestEnabled(test: Test262File) {
  if (test.features.some((x) => ignoredFeatures.includes(x))) {
    return false;
  }

  if (
    compareBaseline &&
    baselineTests &&
    !baselineTests.has(normalizeTestPathParts(test.testPathParts))
  ) {
    return false;
  }

  if (ignoredTestPaths.some((path) => arrayStartsWith(test.testPathParts, path))) {
    return false;
  }

  return true;
}
