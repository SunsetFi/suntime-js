import { readFileSync } from "node:fs";

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

export default function getBaseline(testFile: string) {
  const testFilePath = getFilepathRelativeToSelf(testFile);
  let data: string;
  try {
    data = readFileSync(baselineJson, "utf8");
  } catch (e: unknown) {
    if ((e as { code?: string }).code === "ENOENT") {
      return [];
    }

    throw e;
  }

  const { testResults } = JSON.parse(data) as TestResultsJson;

  const target = testResults.find((result) => result.name === testFilePath);
  if (!target) {
    throw new Error(`No baseline results found for test file: ${testFile}`);
  }

  return target.assertionResults
    .filter((result) => result.status === "passed")
    .map((result) => [...result.ancestorTitles, result.title]);
}
