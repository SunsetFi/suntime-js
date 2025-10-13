import { readdirSync, readFileSync } from "node:fs";
import { basename } from "node:path";

import { parseFile as parseTest262 } from "test262-parser";

import { describe, it, expect } from "vitest";

import test262Path from "./utils/test262-path.js";
import getFilesSync from "./utils/get-files.js";

import bootstrapTest262 from "./utils/bootstrap.js";

import { StaticJsRealm, createTimeBoundTaskRunner } from "../../src/index.js";

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
    return;
  }

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

  if (testMeta.attrs.features?.some((x) => x.includes("generators"))) {
    it.skip("Ignored generator test: " + testName, () => {});
    return;
  }

  // TODO: Run in strict and nostrict mode
  // (Unless noStrict, onlyStrict, module, raw)
  // See repo/INTERPRETING.md
  it(testName, async () => {
    const realm = StaticJsRealm({
      runTask: createTimeBoundTaskRunner({ maxRunTime: 5000 }),
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
        realm.global.definePropertySync("$DONE", {
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

    try {
      await realm.evaluateScript(testMeta.contents);
      await Promise.race([
        awaitPromise,
        delay(5000).then(() =>
          Promise.reject(
            new Error(
              "Async test did not call $DONE within 5 seconds of completion",
            ),
          ),
        ),
      ]);

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
  const hostDefinedProperty = {
    writable: true,
    configurable: true,
    enumerable: false,
  } as const;
  realm.global.definePropertySync("print", {
    ...hostDefinedProperty,
    value: realm.types.toStaticJsValue((value: string) => console.log(value)),
  });
  realm.global.definePropertySync("$262", {
    ...hostDefinedProperty,
    value: realm.types.object({
      createRealm: {
        ...hostDefinedProperty,
        value: realm.types.toStaticJsValue(() => {
          const realm = StaticJsRealm({
            runTask: createTimeBoundTaskRunner({ maxRunTime: 5000 }),
          });
          createHostApi(realm);
        }),
      },
      detatchArrayBuffer: {
        ...hostDefinedProperty,
        value: realm.types.toStaticJsValue(() => {
          throw new Error("Not implemented: detatchArrayBuffer");
        }),
      },
      evalScript: {
        ...hostDefinedProperty,
        value: realm.types.toStaticJsValue((code: string) => {
          return realm.evaluateScriptSync(code);
        }),
      },
      gc: {
        ...hostDefinedProperty,
        value: realm.types.toStaticJsValue(() => {
          throw new Error("No garbage collection mechanism implemented");
        }),
      },
      global: {
        ...hostDefinedProperty,
        value: realm.global,
      },
    }),
  });
}

function delay(ms: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => resolve(), ms);
  });
}
