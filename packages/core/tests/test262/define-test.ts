import { it, expect } from "vitest";

import {
  createTimeBoundTaskRunner,
  StaticJsRealm,
  StaticJsUnhandledRejectionError,
  StaticJsRuntimeError,
} from "../../src/index.js";

import isDebuggerActive from "../env/is-debugger-active.js";

import withResolvers from "./utils/with-resolvers.js";
import delay from "./utils/delay.js";
import getPerf from "./utils/get-perf.js";

import type Test262File from "./Test262File.js";
import addTestHarness from "./add-test-harness.js";
import createHostApi from "./host-api.js";

import { ScriptTimeout, TestTimeout } from "./timeouts.js";

export default function defineTest(testName: string, test: Test262File) {
  if (test.negative?.type === "resolution") {
    it.skip("Ignored negative resolution test: " + testName, () => {});
    return;
  }

  if (test.flags.module) {
    it.skip("Ignored module test: " + testName, () => {});
    return;
  }

  if (test.negative?.phase === "parse") {
    it.skip("Ignored parse phase negative test: " + testName, () => {});
    return;
  }

  function createTestHandler(strictMode: "strict" | "non-strict") {
    return async () => {
      const perf = getPerf();

      const realm = StaticJsRealm({
        runTask: isDebuggerActive
          ? undefined
          : createTimeBoundTaskRunner({ maxRunTime: ScriptTimeout }),
      });
      createHostApi(realm);

      perf("Realm created");

      if (!test.flags.raw) {
        await addTestHarness(realm, "sta.js");
        await addTestHarness(realm, "assert.js");
        for (const include of test.includes) {
          await addTestHarness(realm, include);
        }

        perf("Test harness added");
      }

      const cleanups: BootstrapCleanup[] = [];
      if (test.flags.async) {
        const cleanup = await bootstrapAsync(realm);
        cleanups.push(cleanup);
        perf("Async test bootstrapped");
      }

      let code = test.contents;
      if (strictMode === "strict") {
        code = `"use strict";\n${code}`;
      }

      try {
        let evalFailed = true;
        try {
          await realm.evaluateScript(code, {
            sourceName: `${test.testPath}.js`,
          });

          evalFailed = false;

          perf("Test script evaluated");
        } finally {
          await Promise.all(cleanups.map((cleanup) => cleanup(evalFailed))).then(() => {});
          perf("Cleanups completed");
        }

        if (test.negative) {
          throw new Error("Test should have failed to run, but it did not.");
        }
      } catch (e) {
        if (e instanceof Error === false) {
          throw e;
        }

        if (e instanceof StaticJsUnhandledRejectionError) {
          // Apparently this isn't in the spec.  Test262 tests tend to throw these in async tests.
          console.warn(
            "Unhandled rejection in test:",
            testName,
            "with reason:",
            e.thrown.toJsSync(),
          );
          return;
        }

        if (e instanceof StaticJsRuntimeError) {
          // oxlint-disable-next-line no-ex-assign
          e = e.thrown.toJsSync();
        }

        if (test.negative?.phase === "runtime") {
          expect(e).toMatchObject({
            name: test.negative.type,
          });
          return;
        }

        throw e;
      }
    };
  }

  const testOptions = {
    timeout: TestTimeout,
  } as const;

  if (test.flags.noStrict) {
    it(testName, testOptions, createTestHandler("non-strict"));
  } else if (test.flags.onlyStrict) {
    it(testName, testOptions, createTestHandler("strict"));
  } else {
    // We should do this, but let's focus on actual features before we worry about strict vs non-strict.
    // describe(testName, () => {
    //   it("non-strict", testOptions, createTestHandler("non-strict"));
    //   it("strict", testOptions, createTestHandler("strict"));
    // });
    it(testName, testOptions, createTestHandler("strict"));
  }
}

export type BootstrapCleanup = (failed: boolean) => void | Promise<void>;
const asyncFailHeader = "Test262:AsyncTestFailure:";
const asyncCompleteHeader = "Test262:AsyncTestComplete";
async function bootstrapAsync(realm: StaticJsRealm): Promise<BootstrapCleanup> {
  const [promise, resolve, reject] = withResolvers<void>();

  function print(message: string) {
    if (message.startsWith(asyncFailHeader)) {
      const errorMessage = message.slice(asyncFailHeader.length);
      reject(new Error(errorMessage));
      return;
    }

    if (message.startsWith(asyncCompleteHeader)) {
      resolve();
      return;
    }

    reject(new Error("Unexpected print message from async test: " + message));
  }

  await realm.global.defineOwnPropertyAsync("print", {
    writable: true,
    configurable: true,
    enumerable: false,
    value: realm.types.toStaticJsValue(print),
  });

  await addTestHarness(realm, "doneprintHandle.js");

  async function cleanup(failed: boolean) {
    if (failed) {
      // Squelch unhandled rejection error, since we're already treating the test as failed.
      // There are some cases in test262 where an error occurs after a promise chain has been set up,
      // so this very well might be resolved with an error, or it may not be resolved at all.
      promise.catch(() => {});
      return;
    }

    await Promise.race([
      promise,
      delay(500).then(() => {
        throw new Error("Async test timed out");
      }),
    ]);
  }

  return cleanup;
}
