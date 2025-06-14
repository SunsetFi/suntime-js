import { readdirSync, readFileSync } from "node:fs";
import { basename } from "node:path";

import { parseFile as parseTest262 } from "test262-parser";

import { describe, it, expect } from "vitest";

import test262Path from "./utils/test262-path.js";
import getFilesSync from "./utils/get-files.js";

import { evaluateScript, StaticJsRealm } from "../../src/index.js";
import bootstrapTest262 from "./utils/bootstrap.js";

// const ignoreFeatures = ["async-functions"];

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
  const testName = basename(test);
  const testContents = readFileSync(test, "utf-8");
  const testMeta = parseTest262(testContents);
  if (!testMeta.isATest) {
    it.skip("Not a test: " + test, () => {});
    return;
  }

  // if (
  //   testMeta.attrs.features?.some((feature) => ignoreFeatures.includes(feature))
  // ) {
  //   it.skip("Ignored feature: " + testName, () => {});
  //   return;
  // }

  if (testMeta.async) {
    it.skip("Ignored async test: " + testName, () => {});
    return;
  }

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

  // TODO: Run in strict and nostrict mode
  // (Unless noStrict, onlyStrict, module, raw)
  // See repo/INTERPRETING.md
  it(testName, async () => {
    const realm = StaticJsRealm();
    createHostApi(realm);

    const includes = testMeta.attrs.includes;
    if (!testMeta.attrs.flags.raw) {
      includes.unshift("sta.js", "assert.js");
    }
    await bootstrapTest262(realm, includes);

    // let compiled: StaticJsCompilation;
    // try {
    //   compiled = compileProgram(testMeta.contents);
    // } catch (e: unknown) {
    //   if (e instanceof Error == false) {
    //     throw e;
    //   }

    //   if (testMeta.attrs.negative?.phase === "parse") {
    //     expect(e.name).toBe(testMeta.attrs.negative.type);
    //     return;
    //   }

    //   throw e;
    // }

    // if (testMeta.attrs.negative?.phase === "parse") {
    //   throw new Error("Test should have failed to parse, but it did not.");
    // }

    try {
      // runTimeBound(compiled.generator({ realm }), 3000);
      await evaluateScript(testMeta.contents, { realm });
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
  });
}

function createHostApi(realm: StaticJsRealm) {
  realm.globalObject.definePropertySync("print", {
    writable: true,
    configurable: true,
    enumerable: false,
    value: realm.types.toStaticJsValue((value: string) => console.log(value)),
  });
}

// function runTimeBound<TResult>(
//   gen: Generator<void, TResult, void>,
//   timeout: number,
// ) {
//   const start = performance.now();
//   let end = start;
//   let done = false;

//   while (!done && end - start < timeout) {
//     done = gen.next().done ?? false;
//     end = performance.now();
//   }
//   if (!done) {
//     throw new Error("Test262 test timed out");
//   }

//   return end - start;
// }
