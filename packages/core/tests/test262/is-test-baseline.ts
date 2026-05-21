import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

import Test262File from "./Test262File.js";

const FLATTEN_DEPTH = 3;
const TESTS_MARKER = "test262/tests/";

type BaselineIndex = Map<string, boolean>;

let index: BaselineIndex | null = null;

export function parseBaselineData(data: {
  testResults: {
    name: string;
    assertionResults: { fullName: string; status: string }[];
  }[];
}): BaselineIndex {
  const result: BaselineIndex = new Map();

  for (const testResult of data.testResults) {
    const markerIdx = (testResult.name as string).indexOf(TESTS_MARKER);
    if (markerIdx < 0) continue;
    const fileSuffix = (testResult.name as string).slice(markerIdx + TESTS_MARKER.length);

    for (const assertion of testResult.assertionResults) {
      const key = `${fileSuffix}|${assertion.fullName}`;
      result.set(key, assertion.status === "passed");
    }
  }

  return result;
}

function getIndex(): BaselineIndex {
  if (!index) {
    const data = JSON.parse(
      readFileSync(
        fileURLToPath(new URL("../test-results-baseline.json", import.meta.url)),
        "utf-8",
      ),
    );
    index = parseBaselineData(data);
  }
  return index;
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

  const fullName = isShort ? testPathParts.at(-1)! : testPathParts.slice(FLATTEN_DEPTH).join(" ");

  return getIndex().get(`${fileSuffix}|${fullName}`) === true;
}
