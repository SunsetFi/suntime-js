import { createTimeBoundTaskRunner, StaticJsRealm } from "@suntime-js/core";
import { it, expect, vi } from "vitest";

import isDebuggerActive from "../env/is-debugger-active";
import { createStaticJsRealmApi } from "./staticjs-api";

// Builds an outer realm with the full API injected into its global scope.
// `runTaskSync` is required for evaluateScriptSync inside the sandbox.
// Returns both the realm and the spawnOpts so tests can assert on mocks.
function makeApiRealm() {
  const realm = StaticJsRealm({
    runTaskSync: isDebuggerActive ? undefined : createTimeBoundTaskRunner({ maxRunTime: 5_000 }),
  });
  const spawnOpts = {
    realm,
    registerSubTask: vi.fn(),
    addLog: vi.fn(),
  };
  const api = createStaticJsRealmApi(spawnOpts);
  for (const [key, value] of Object.entries(api)) {
    realm.global.setSync(key, value);
  }
  return { realm, spawnOpts };
}

it("StaticJsRealm() factory returns a sandbox object", () => {
  const { realm } = makeApiRealm();
  const result = realm.evaluateScriptSync(`
      const inner = StaticJsRealm();
      typeof inner;
    `);
  expect(result.toNative()).toBe("object");
});

it("evaluateScriptSync on an inner realm returns a wrapped value", () => {
  const { realm } = makeApiRealm();
  const result = realm.evaluateScriptSync(`
      const inner = StaticJsRealm();
      const val = inner.evaluateScriptSync("1 + 1");
      typeof val;
    `);
  expect(result.toNative()).toBe("object");
});

it("isStaticJsValue returns true for values produced by inner realm", () => {
  const { realm } = makeApiRealm();
  const result = realm.evaluateScriptSync(`
      const inner = StaticJsRealm();
      const val = inner.evaluateScriptSync("1 + 1");
      isStaticJsValue(val);
    `);
  expect(result.toNative()).toBe(true);
});

it("isStaticJsValue returns false for plain sandbox values", () => {
  const { realm } = makeApiRealm();
  const result = realm.evaluateScriptSync(`isStaticJsValue(42)`);
  expect(result.toNative()).toBe(false);
});

it("isStaticJsNumber returns true for number results", () => {
  const { realm } = makeApiRealm();
  const result = realm.evaluateScriptSync(`
      const inner = StaticJsRealm();
      const val = inner.evaluateScriptSync("1 + 1");
      isStaticJsNumber(val);
    `);
  expect(result.toNative()).toBe(true);
});

it("isStaticJsString returns true for string results", () => {
  const { realm } = makeApiRealm();
  const result = realm.evaluateScriptSync(`
      const inner = StaticJsRealm();
      const val = inner.evaluateScriptSync('"hello"');
      isStaticJsString(val);
    `);
  expect(result.toNative()).toBe(true);
});

it("writes to realm wrapper do not affect the host realm methods", () => {
  const { realm } = makeApiRealm();
  const result = realm.evaluateScriptSync(`
      const inner = StaticJsRealm();
      inner.evaluateScriptSync = null;
      typeof inner.evaluateScriptSync;
    `);
  expect(realm.evaluateScriptSync).toBeTypeOf("function");
  expect(result.toNative()).toBe("object"); // null typeof is "object"
});

// it("registerSubTask is called when evaluateScriptSync runs on an inner realm", () => {
//   const { realm, spawnOpts } = makeApiRealm();
//   realm.evaluateScriptSync(`
//       const inner = StaticJsRealm();
//       inner.evaluateScriptSync("1");
//     `);
//   expect(spawnOpts.registerSubTask).toHaveBeenCalled();
// });

// it("logs a warning when evaluateScriptSync is called with no runTaskSync on the realm and no per-call runTask", () => {
//   const { realm, spawnOpts } = makeApiRealm();
//   realm.evaluateScriptSync(`
//       const inner = StaticJsRealm();
//       inner.evaluateScriptSync("1");
//     `);
//   expect(spawnOpts.addLog).toHaveBeenCalledWith(expect.objectContaining({ kind: "warning" }));
// });

// it("does not log a warning when evaluateScriptSync is called with a realm runTaskSync", () => {
//   const { realm, spawnOpts } = makeApiRealm();
//   realm.evaluateScriptSync(`
//       const inner = StaticJsRealm({
//         runTaskSync: task => { while(!task.done) { task.next(); } },
//       });
//       inner.evaluateScriptSync("1");
//     `);
//   expect(spawnOpts.addLog).not.toHaveBeenCalledWith(expect.objectContaining({ kind: "warning" }));
// });

// it("does not log a warning when evaluateScriptSync is called with a runTaskSync", () => {
//   const { realm, spawnOpts } = makeApiRealm();
//   realm.evaluateScriptSync(`
//       const inner = StaticJsRealm();
//       inner.evaluateScriptSync("1", {
//         runTask: task => { while(!task.done) { task.next(); } },
//       });
//     `);
//   expect(spawnOpts.addLog).not.toHaveBeenCalledWith(expect.objectContaining({ kind: "warning" }));
// });

it("can create type factory scalars", () => {
  const { realm } = makeApiRealm();
  const result = realm.evaluateScriptSync(`
      const inner = StaticJsRealm();
      const num = inner.types.number(42);
      const str = inner.types.string("hello");
      const bool = inner.types.boolean(true);
      [
        [isStaticJsNumber(num), num.value],
        [isStaticJsString(str), str.value],
        [isStaticJsBoolean(bool), bool.value],
      ]
    `);
  expect(result.toNative()).toEqual([
    [true, 42],
    [true, "hello"],
    [true, true],
  ]);
});

it("can create type factory objects", () => {
  const { realm } = makeApiRealm();
  const result = realm.evaluateScriptSync(`
      const inner = StaticJsRealm();
      const obj = inner.types.object({
        a: {
          value: inner.types.number(1)
        },
        b: {
          value: inner.types.string("x")
        }
      });

      const a = obj.getSync("a");
      const b = obj.getSync("b");
      [
        isStaticJsObject(obj),
        a.value,
        b.value,
      ]
    `);
  expect(result.toNative()).toEqual([true, 1, "x"]);
});

it("can create function objects", () => {
  const { realm } = makeApiRealm();
  const result = realm.evaluateScriptSync(`
      const inner = StaticJsRealm();
      const fn = inner.types.function("hello", function thisIsHelloFunc(val) {
        return inner.types.string("hello " + val.value);
      });
      [isStaticJsFunction(fn), fn.callSync(inner.types.undefined, [inner.types.string("world")]).toNative()];
    `);
  expect(result.toNative()).toEqual([true, "hello world"]);
});

it("can intercept task abort errors", () => {
  const { realm } = makeApiRealm();
  const result = realm.evaluateScriptSync(`
      const inner = StaticJsRealm({
        runTaskSync: task => {
          task.abort();
        },
      });
      try {
        inner.evaluateScriptSync("while(true) {}");
        "no error";
      } catch (e) {
        e instanceof StaticJsTaskAbortedError;
      }
    `);
  expect(result.toNative()).toBe(true);
});
