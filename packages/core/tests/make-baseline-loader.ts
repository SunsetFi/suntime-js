import { readFileSync } from "node:fs";
import { relative } from "node:path";

import normalizeTestPathParts from "./normalize-test-path-parts.js";

const test262TestsRoot = new URL("./test262/tests/", import.meta.url).pathname;

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

export default function makeBaselineLoader(baselineJsonPath: string): () => Set<string> {
  let cached: TestResultsJson | undefined;

  function load(): TestResultsJson {
    if (cached) return cached;

    let data: string;
    try {
      data = readFileSync(baselineJsonPath, "utf8");
    } catch (e: unknown) {
      if ((e as { code?: string }).code === "ENOENT") {
        cached = { testResults: [] };
        return cached;
      }
      throw e;
    }

    cached = JSON.parse(data) as TestResultsJson;
    return cached;
  }

  return function getBaseline(): Set<string> {
    const { testResults } = load();

    return new Set(
      testResults.flatMap((testResult) => {
        const prefix = getTestFilePrefixSegments(testResult.name);
        const isFileTarget = prefix.at(-1)?.endsWith(".js") ?? false;
        return testResult.assertionResults
          .filter((r) => r.status === "passed")
          .map(({ ancestorTitles, title }) => {
            if (isFileTarget) {
              return normalizeTestPathParts(prefix);
            }
            return normalizeTestPathParts([...prefix, ...ancestorTitles, title]);
          });
      }),
    );
  };
}

function getTestFilePrefixSegments(testFilePath: string): string[] {
  const rel = relative(test262TestsRoot, testFilePath);
  const withoutExt = rel.replace(/\.test\.ts$/, "");
  return withoutExt.split("/").filter((s) => s.length > 0);
}
