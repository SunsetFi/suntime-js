import { readdirSync, readFileSync } from "node:fs";
import { basename } from "node:path";

import { parseFile as parseTest262 } from "test262-parser";

import { describe, it } from "vitest";
import test262Path from "./utils/test262-path";
import getFilesSync from "./utils/get-files";

import { compileProgram, StaticJsRealm } from "../../src/index.js";
import bootstrapTest262 from "./utils/bootstrap";

const ignoreFeatures = ["async-functions"];

const LanguageCategories = readdirSync(test262Path("test/language"));

describe("Test262", () => {
  describe("Language", () => {
    for (const category of LanguageCategories) {
      describe(category, () => {
        describeCategory(category);
      });
    }
  });
});

function describeCategory(category: string) {
  const categoryDir = test262Path("test/language", category);
  const tests = getFilesSync(categoryDir, (file) => file.endsWith(".js"));

  if (tests.length === 0) {
    it.skip("No tests found in " + categoryDir, () => {});
    return;
  }

  for (const test of tests) {
    defineTest(test);
  }
}

function defineTest(test: string) {
  const testContents = readFileSync(test, "utf-8");
  const testMeta = parseTest262(testContents);
  if (!testMeta.isATest) {
    it.skip("Not a test: " + test, () => {});
    return;
  }

  if (
    testMeta.attrs.features?.some((feature) => ignoreFeatures.includes(feature))
  ) {
    it.skip("Ignored feature: " + test, () => {});
    return;
  }

  if (testMeta.async) {
    it.skip("Ignored async test: " + test, () => {});
    return;
  }

  it(basename(test), () => {
    const realm = StaticJsRealm();
    bootstrapTest262(realm);

    try {
      const compiled = compileProgram(testMeta.contents);
      runTimeBound(compiled.generator(realm), 3000);
      if (testMeta.attrs.negative) {
        throw new Error("Test should have failed");
      }
    } catch (e) {
      if (testMeta.attrs.negative) {
        return;
      }
      throw e;
    }
  });
}

function runTimeBound<TResult>(
  gen: Generator<void, TResult, void>,
  timeout: number,
) {
  const start = performance.now();
  let end = start;
  let done = false;

  while (!done && end - start < timeout) {
    done = gen.next().done ?? false;
    end = performance.now();
  }
  if (!done) {
    throw new Error("Test262 test timed out");
  }

  return end - start;
}
