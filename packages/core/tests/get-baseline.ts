import { readFileSync } from "node:fs";

import normalizeTestPathParts from "./normalize-test-path-parts.js";

function getFilepathRelativeToSelf(path: string) {
  return new URL(path, import.meta.url).pathname;
}

const baselineJson = getFilepathRelativeToSelf("./test-results-baseline.json");

interface TestResultsJson {
  testResults: TestResult[];
}

interface TestResult {
  name: string;
  assertionResults: AssertionResult[];
}

interface AssertionResult {
  ancestorTitles: string[];
  title: string;
  status: "passed" | "failed" | "skipped";
}

export default function getBaseline(): Set<string> {
  const { testResults } = getBaselineResults();

  return new Set(
    testResults
      .flatMap((result) => result.assertionResults)
      .filter((result) => result.status === "passed")
      .map((result) =>
        normalizeTestPathParts([...result.ancestorTitles.filter(stripTestFileName), result.title]),
      ),
  );
}

function stripTestFileName(value: string, index: number, array: string[]) {
  if (index === array.length - 1) {
    if (value.endsWith(".js")) {
      return false;
    }
  }
  return true;
}

let cachedBaselineResults: TestResultsJson | undefined;
function getBaselineResults() {
  if (cachedBaselineResults) {
    return cachedBaselineResults;
  }

  let data: string;
  try {
    data = readFileSync(baselineJson, "utf8");
  } catch (e: unknown) {
    if ((e as { code?: string }).code === "ENOENT") {
      cachedBaselineResults = { testResults: [] };
      return cachedBaselineResults;
    }

    throw e;
  }

  cachedBaselineResults = JSON.parse(data) as TestResultsJson;
  return cachedBaselineResults;
}
