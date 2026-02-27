import { readdirSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { relative } from "node:path";

import { parseFile as parseTest262, type Test262File } from "test262-parser";

import { describe, it, expect } from "vitest";

import { StaticJsRealm, createTimeBoundTaskRunner } from "../../src/index.js";

import test262Path from "./utils/test262-path.js";
import getFilesSync from "./utils/get-files.js";

import bootstrapTest262 from "./utils/bootstrap.js";

import getBaselineFailures from "../get-baseline-failures.js";
import { createHostApi } from "./host-api.js";

const LanguageCategories = readdirSync(test262Path("test/language"));

const baselineFailures = process.env.VITEST_COMPARE_BASELINE
  ? getBaselineFailures(fileURLToPath(import.meta.url))
  : [];

describe("test262", () => {
  describe("language", () => {
    for (const category of LanguageCategories) {
      describe(category, () => {
        describeLanguageCategory(category, ["test262", "language", category]);
      });
    }
  });
});

function describeLanguageCategory(category: string, ancestorTitles: string[]) {
  const categoryDir = test262Path("test/language", category);
  const tests = getFilesSync(categoryDir, (file) => file.endsWith(".js"));

  if (tests.length === 0) {
    it.skip("No tests found in " + categoryDir, () => {});
    return;
  }

  for (const testPath of tests) {
    const relPath = relative(categoryDir, testPath);
    const parts = relPath.split(/\/|\\/);
    const testName = parts.splice(-1, 1)[0];

    const testContents = readFileSync(testPath, "utf-8");
    const testMeta = parseTest262(testContents);

    if (!testMeta.isATest) {
      continue;
    }

    describePath(parts, () => {
      defineTest(testName, testMeta, [...ancestorTitles, ...parts]);
    });
  }
}

const testTimeout = 10000;
const scriptTimeout = 5000;

// For now.  Eventually we should cover everything.
const ignoredFeatures = [
  "generators",
  "TypedArray",
  "tail-call-optimization",
  "explicit-resource-management",
];

function defineTest(testName: string, testMeta: Test262File, ancestorTitles: string[]) {
  // if (testMeta.async) {
  //   it.skip("Ignored async test: " + testName, () => {});
  //   return;
  // }

  if (testMeta.attrs.negative?.type === "resolution") {
    it.skip("Ignored negative resolution test: " + testName, () => {});
    return;
  }

  if (testMeta.attrs.flags.module) {
    it.skip("Ignored module test: " + testName, () => {});
    return;
  }

  if (testMeta.attrs.negative?.phase === "parse") {
    it.skip("Ignored parse phase negative test: " + testName, () => {});
    return;
  }

  if (testMeta.attrs.features?.some((x) => ignoredFeatures.includes(x))) {
    it.skip("Ignored test: " + testName, () => {});
    return;
  }

  let factory: typeof it | typeof it.fails = it;

  if (containsTest([...ancestorTitles, testName], baselineFailures)) {
    factory = it.skip.bind(it);
  }

  // TODO: Run in strict and nostrict mode
  // (Unless noStrict, onlyStrict, module, raw)
  // See repo/INTERPRETING.md
  factory(
    testName,
    {
      timeout: testTimeout,
    },
    async () => {
      const realm = StaticJsRealm({
        runTask: createTimeBoundTaskRunner({ maxRunTime: scriptTimeout }),
      });
      createHostApi(realm);

      const includes = testMeta.attrs.includes;
      if (!testMeta.attrs.flags.raw) {
        includes.unshift("sta.js", "assert.js");
      }
      await bootstrapTest262(realm, includes);

      // This isn't documented in INTERPRETING.md,
      // I can only infer its extistence from CONTRIBUTING.md
      // Based on how our realm operates, this being a promise is overkill, as
      // in theory all our microtasks SHOULD complete before evaluateScript returns.
      // However, some tests do weird things with agents, which we currently don't support,
      // so we will need something like this eventually.
      let awaitPromise: Promise<void> = Promise.resolve();
      if (testMeta.async) {
        awaitPromise = new Promise((resolve, reject) => {
          realm.global.defineOwnPropertySync("$DONE", {
            writable: true,
            configurable: true,
            enumerable: false,
            value: realm.types.toStaticJsValue((err?: unknown) => {
              if (err) {
                reject(err);
              } else {
                resolve(undefined);
              }
            }),
          });
        });
      }

      let code = testMeta.contents;
      if (testMeta.attrs.flags.onlyStrict) {
        code = `"use strict";\n${code}`;
      }

      try {
        await Promise.all([realm.evaluateScript(code), awaitPromise]);

        if (testMeta.attrs.negative) {
          throw new Error("Test should have failed to run, but it did not.");
        }
      } catch (e) {
        if (e instanceof Error == false) {
          throw e;
        }

        if (testMeta.attrs.negative?.phase === "runtime") {
          expect(e.name).toBe(testMeta.attrs.negative.type);
          return;
        }

        throw e;
      }
    },
  );
}

function containsTest(testTile: string[], fullTitles: string[][]) {
  for (const titles of fullTitles) {
    if (titles.length !== testTile.length) {
      continue;
    }

    if (testTile.every((title, i) => title === titles[i])) {
      return true;
    }
  }

  return false;
}

function describePath(pathSegments: string[], body: () => void) {
  const run = (index: number) => {
    if (index >= pathSegments.length) {
      body();
      return;
    }

    const name = pathSegments[index];
    describe(name, () => run(index + 1));
  };

  run(0);
}
