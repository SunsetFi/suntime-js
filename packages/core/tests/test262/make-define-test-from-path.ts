import { statSync } from "node:fs";
import { join } from "node:path";
import { describe, it } from "vitest";

import defineTest from "./define-test.js";
import Test262File from "./Test262File.js";
import getFilesSync from "./utils/get-files.js";
import getPerf from "./utils/get-perf.js";
import getTest262Path from "./utils/get-test262-path.js";

const testsRoot = getTest262Path("test");

export default function makeDefineTestFromPath(
  isTestEnabled: (test: Test262File) => boolean,
): (relativeTestPath: string) => void {
  return function defineTestFromPath(relativeTestPath: string) {
    const perf = getPerf();

    const testPath = join(testsRoot, relativeTestPath);
    const tests = getTestsFromPath(testPath);
    perf(`Found ${tests.length} tests in ${relativeTestPath}`);

    if (tests.length === 0) {
      throw new Error("No tests found for " + relativeTestPath);
    }

    const relativeTestPathParts = relativeTestPath.split("/");
    const prefixLength = relativeTestPathParts.filter((x) => x.length > 0).length;

    const pathRoot: PathTree = {
      pathElement: null,
      tests: [],
      children: [],
    };

    function addToPathTree(testPath: string[], test: Test262File) {
      let currentRoot = pathRoot;
      for (const pathElement of testPath) {
        let node = currentRoot.children.find((r) => r.pathElement === pathElement);
        if (!node) {
          node = { pathElement, tests: [], children: [] };
          currentRoot.children.push(node);
        }
        currentRoot = node;
      }
      currentRoot.tests.push(test);
    }

    for (const sourceFile of tests) {
      if (sourceFile.includes("_FIXTURE")) {
        continue;
      }

      const test = Test262File.fromFile(sourceFile);

      if (!isTestEnabled(test)) {
        it.skip(test.testName);
        continue;
      }

      const path = test.testPathParts.slice(prefixLength, -1);
      addToPathTree(path, test);
    }

    perf(`Sorted tests`);

    function defineTree(tree: PathTree) {
      function defineChildren() {
        for (const child of tree.children) {
          defineTree(child);
        }
        for (const test of tree.tests) {
          defineTest(test.testName, test);
        }
      }

      if (tree.pathElement) {
        describe(tree.pathElement, () => {
          defineChildren();
        });
      } else {
        defineChildren();
      }
    }

    defineTree(pathRoot);

    perf(`Defined tests`);
  };
}

interface PathTree {
  pathElement: string | null;
  tests: Test262File[];
  children: PathTree[];
}

function getTestsFromPath(testPath: string) {
  const stats = statSync(testPath);
  if (!stats.isDirectory()) {
    if (!testPath.endsWith(".js")) {
      return [];
    }
    return [testPath];
  }
  return getFilesSync(testPath, (file) => file.endsWith(".js"));
}
