import { readFileSync } from "node:fs";
import { relative } from "node:path";

import normalizeTestPathParts from "./normalize-test-path-parts.js";

function getFilepathRelativeToSelf(path: string) {
  return new URL(path, import.meta.url).pathname;
}

const baselineJson = getFilepathRelativeToSelf("./test-results-baseline.json");
const test262TestsRoot = getFilepathRelativeToSelf("./test262/tests/");

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
    testResults.flatMap((testResult) => {
      const prefix = getTestFilePrefixSegments(testResult.name);
      const isFileTarget = prefix.at(-1)?.endsWith(".js") ?? false;
      return testResult.assertionResults
        .filter((assertResult) => assertResult.status === "passed")
        .map(({ ancestorTitles, title }) => {
          if (isFileTarget) {
            return normalizeTestPathParts(prefix);
          }
          return normalizeTestPathParts([...prefix, ...ancestorTitles, title]);
        });
    }),
  );
}

function getTestFilePrefixSegments(testFilePath: string): string[] {
  const rel = relative(test262TestsRoot, testFilePath);
  const withoutExt = rel.replace(/\.test\.ts$/, "");
  return withoutExt.split("/").filter((s) => s.length > 0);
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
