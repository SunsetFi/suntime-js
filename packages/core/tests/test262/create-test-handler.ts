import { join } from "node:path";
import { expect } from "vitest";

import {
  StaticJsRealm,
  createTimeBoundTaskRunner,
  StaticJsUnhandledRejectionError,
  StaticJsRuntimeError,
  StaticJsSyntaxError,
} from "../../src/index.js";
import isDebuggerActive from "../env/is-debugger-active.js";

import addTestHarness from "./add-test-harness.js";
import createHostApi from "./host-api.js";
import Test262File from "./Test262File.js";
import { AsyncTimeout, ScriptTimeout } from "./timeouts.js";
import delay from "./utils/delay.js";
import getPerf from "./utils/get-perf.js";
import getTest262Path from "./utils/get-test262-path.js";
import withResolvers from "./utils/with-resolvers.js";

export function createTestHandler(testRelativePath: string) {
  return async () => {
    const perf = getPerf();

    const test = Test262File.fromFile(getTest262Path(join("test", testRelativePath)));

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
    // TODO: aside from onlyStrict, we should test both modes.
    if (!test.flags.noStrict) {
      code = `"use strict";\n${code}`;
    }

    let evaluatePromise: Promise<unknown>;
    if (test.flags.module) {
      evaluatePromise = realm.evaluateModule(code, {
        sourceName: `${test.testPath}.mjs`,
      });
    } else {
      evaluatePromise = realm.evaluateScript(code, {
        sourceName: `${test.testPath}.js`,
      });
    }

    evaluatePromise = evaluatePromise.finally(() => perf("Test script evaluated"));

    const cleanupPromise = Promise.all(cleanups.map((cleanup) => cleanup())).finally(() => {
      perf("Cleanups completed");
    });

    const [evaluateResult, cleanupResult] = await Promise.allSettled([
      evaluatePromise,
      cleanupPromise,
    ]);

    let unhandledRejection: unknown = null;
    if (
      evaluateResult.status === "rejected" &&
      evaluateResult.reason instanceof StaticJsUnhandledRejectionError
    ) {
      unhandledRejection = evaluateResult.reason.thrown.toNative();
    }

    if (cleanupResult.status === "rejected") {
      handleTestError(cleanupResult.reason, test, unhandledRejection);
    } else if (evaluateResult.status === "rejected") {
      if (test.flags.async && unhandledRejection) {
        let message =
          unhandledRejection &&
          typeof unhandledRejection === "object" &&
          "message" in unhandledRejection
            ? unhandledRejection.message
            : String(unhandledRejection);
        console.warn("Unhandled rejection in test:", test.testName, "with reason:", message);
      } else {
        handleTestError(evaluateResult.reason, test);
      }
    } else {
      if (test.negative) {
        throw new Error(
          `Test was expected to fail with a ${test.negative.phase} error of type ${test.negative.type}, but it passed.`,
        );
      }
    }
  };
}

function handleTestError(e: unknown, test: Test262File, additional?: unknown) {
  if (test.negative?.phase === "parse") {
    expect(e).toBeInstanceOf(StaticJsSyntaxError);
    return;
  }

  if (e instanceof StaticJsRuntimeError) {
    // oxlint-disable-next-line no-ex-assign
    e = e.thrown.toNative();
  }

  if (test.negative?.phase === "runtime") {
    expect(e).toMatchObject({
      name: test.negative.type,
    });
    return;
  }

  if (additional) {
    throw new AggregateError([e, additional]);
  }

  throw e;
}

export type BootstrapCleanup = () => void | Promise<void>;
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

  // This may complete after the timeout, so squelch it.
  promise.catch(() => {});

  async function cleanup() {
    await Promise.race([
      promise,
      delay(AsyncTimeout).then(() => {
        throw new Error("Async test timed out");
      }),
    ]);
  }

  return cleanup;
}
