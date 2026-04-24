import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

import Test262File from "./Test262File.js";

const FLATTEN_DEPTH = 3;
const TESTS_MARKER = "test262/tests/";

type BaselineIndex = Map<string, boolean>;

let languageIndex: BaselineIndex | null = null;
let builtinsIndex: BaselineIndex | null = null;

function buildIndex(baselinePath: string): BaselineIndex {
  const data = JSON.parse(readFileSync(baselinePath, "utf-8"));
  const index: BaselineIndex = new Map();

  for (const testResult of data.testResults) {
    const markerIdx = (testResult.name as string).indexOf(TESTS_MARKER);
    if (markerIdx < 0) continue;
    const fileSuffix = (testResult.name as string).slice(markerIdx + TESTS_MARKER.length);

    for (const assertion of testResult.assertionResults) {
      const key = `${fileSuffix}|${assertion.fullName}`;
      index.set(key, assertion.status === "passed");
    }
  }

  return index;
}

function getIndex(category: "language" | "built-ins"): BaselineIndex {
  if (category === "language") {
    if (!languageIndex) {
      languageIndex = buildIndex(
        fileURLToPath(new URL("../test-results-language-baseline.json", import.meta.url)),
      );
    }
    return languageIndex;
  } else {
    if (!builtinsIndex) {
      builtinsIndex = buildIndex(
        fileURLToPath(new URL("../test-results-builtins-baseline.json", import.meta.url)),
      );
    }
    return builtinsIndex;
  }
}

export function isTestBaseline(test: Test262File): boolean {
  const { testPathParts } = test;
  const category = testPathParts[0];

  if (category !== "language" && category !== "built-ins") {
    return false;
  }

  const isShort = testPathParts.length <= FLATTEN_DEPTH;

  const fileSuffix = isShort
    ? testPathParts.join("/").replace(/\.js$/, ".test.ts")
    : testPathParts.slice(0, FLATTEN_DEPTH).join("/") + ".test.ts";

  const fullName = isShort
    ? testPathParts.at(-1)!
    : testPathParts.slice(FLATTEN_DEPTH - 1).join(" ");

  return getIndex(category).get(`${fileSuffix}|${fullName}`) === true;
}
