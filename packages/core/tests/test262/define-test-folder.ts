import { it } from "vitest";

import isTestEnabled from "./is-test-enabled.js";
import Test262File from "./Test262File.js";
import getFilesSync from "./utils/get-files.js";
import getPerf from "./utils/get-perf.js";
import describePath from "./utils/describe-path.js";
import defineTest from "./define-test.js";

export default function defineTestFolder(categoryDir: string) {
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

    const test = Test262File.fromFile(testPath);

    if (!isTestEnabled(test)) {
      it.skip(test.testName);
      continue;
    }

    describePath(test.testPathParts.slice(0, -1), () => {
      defineTest(test.testName, test);
    });

    perf(`Defined test ${test.testPath}`);
  }
}
