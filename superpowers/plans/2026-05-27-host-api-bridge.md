# Host API Bridge Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the hand-rolled `staticjs-api.ts` with an automated bridge that scans host object prototype chains and produces outer-realm `StaticJsValue` wrappers, scalable to the full `@suntime-js/core` public API.

**Architecture:** A `BridgeContext` is created per `createStaticJsRealmApi` call and holds a per-realm prototype cache plus `spawnOpts`. At wrap time, the bridge walks the host object's prototype chain (stopping before `Object.prototype`), auto-generates `realm.types.function(...)` wrappers for every method and getter, and caches the result keyed on `Symbol.toStringTag`. Instance wrappers are `realm.types.object({}, sandboxProto)` — writes from user code land on own properties, never on the host. A module-level override registry handles methods that need custom behavior.

**Tech Stack:** TypeScript, `@suntime-js/core`, Vitest (already configured in `@suntime-js/docs`).

**Test runner:** `pnpm --filter @suntime-js/docs test`

---

## File Map

| File | Action | Responsibility |
|---|---|---|
| `docs/src/code-runtime/host-bridge.ts` | **Create** | `BridgeContext`, backing WeakMap, classification, `wrapValue`, `unwrapArg`, `clonePojo`, prototype scanning, `wrapClassBacked`, override registry |
| `docs/src/code-runtime/host-bridge.test.ts` | **Create** | Unit + integration tests for bridge machinery |
| `docs/src/code-runtime/staticjs-api.ts` | **Rewrite** | `createStaticJsRealmApi` — registers overrides, builds `StaticJsRealm` factory and `is*` guards using the bridge |

---

## Task 1: Test file skeleton + `BridgeContext`

**Files:**
- Create: `docs/src/code-runtime/host-bridge.ts`
- Create: `docs/src/code-runtime/host-bridge.test.ts`

- [ ] **Step 1: Create `host-bridge.ts` with `BridgeContext` and backing map**

```ts
import {
  isStaticJsScalar,
  isStaticJsValue,
  StaticJsNull,
  StaticJsObject,
  StaticJsPropertyDescriptorRecord,
  StaticJsValue,
} from "@suntime-js/core";

import type { CodeRuntimeSpawnOptions } from "./CodeRuntime";

export type OverrideImpl = (
  this: StaticJsValue,
  hostThis: unknown,
  sandboxArgs: StaticJsValue[],
  ctx: BridgeContext,
) => Generator<unknown, StaticJsValue, unknown>;

const overrideRegistry = new Map<string, OverrideImpl>();

export function registerOverride(
  toStringTag: string,
  methodName: string,
  impl: OverrideImpl,
): void {
  overrideRegistry.set(`${toStringTag}::${methodName}`, impl);
}

function getOverride(toStringTag: string, methodName: string): OverrideImpl | undefined {
  return overrideRegistry.get(`${toStringTag}::${methodName}`);
}

// Maps each sandbox wrapper back to its host object.
const backingMap = new WeakMap<object, unknown>();

export interface BridgeContext {
  spawnOpts: CodeRuntimeSpawnOptions;
  protoCache: Map<string, StaticJsObject>;
}

export function createBridgeContext(spawnOpts: CodeRuntimeSpawnOptions): BridgeContext {
  return { spawnOpts, protoCache: new Map() };
}

export function getHostObject(sandboxObj: unknown): unknown {
  if (sandboxObj == null || (typeof sandboxObj !== "object" && typeof sandboxObj !== "function")) {
    return undefined;
  }
  return backingMap.get(sandboxObj as object);
}
```

- [ ] **Step 2: Create `host-bridge.test.ts` with imports and the `makeSpawnOpts` helper**

```ts
import {
  createTimeBoundTaskRunner,
  isStaticJsBoolean,
  isStaticJsNumber,
  isStaticJsObject,
  isStaticJsString,
  isStaticJsValue,
  StaticJsNumber,
  StaticJsRealm,
} from "@suntime-js/core";
import { describe, expect, it, vi } from "vitest";

import {
  createBridgeContext,
  getHostObject,
  registerOverride,
  unwrapArg,
  wrapClassBacked,
  wrapValue,
} from "./host-bridge";
import { createStaticJsRealmApi } from "./staticjs-api";

// Builds a minimal spawnOpts backed by a real StaticJsRealm.
function makeSpawnOpts(realm: ReturnType<typeof StaticJsRealm>) {
  return {
    realm,
    registerSubTask: vi.fn(),
    addLog: vi.fn(),
  };
}

// Builds an outer realm with the full API injected into its global scope.
// `runTaskSync` is required for evaluateScriptSync inside the sandbox.
function makeApiRealm() {
  const realm = StaticJsRealm({
    runTaskSync: createTimeBoundTaskRunner({ maxRunTime: 5_000 }),
  });
  const spawnOpts = makeSpawnOpts(realm);
  const api = createStaticJsRealmApi(spawnOpts);
  for (const [key, value] of Object.entries(api)) {
    realm.global.setSync(key, value);
  }
  return realm;
}
```

- [ ] **Step 3: Run tests to confirm the file compiles (zero tests = zero failures)**

```
pnpm --filter @suntime-js/docs test
```

Expected: 0 tests run, 0 failures.

---

## Task 2: `needsClassWrapping`, `clonePojo`, and primitive `wrapValue`

**Files:**
- Modify: `docs/src/code-runtime/host-bridge.ts`
- Modify: `docs/src/code-runtime/host-bridge.test.ts`

- [ ] **Step 1: Write failing tests for `wrapValue` primitive and POJO cases**

Add inside `host-bridge.test.ts`:

```ts
describe("wrapValue — primitives and POJOs", () => {
  function makeCtx() {
    const realm = StaticJsRealm();
    return { ctx: createBridgeContext(makeSpawnOpts(realm)), realm };
  }

  it("wraps a JS number as a sandbox number", () => {
    const { ctx } = makeCtx();
    const result = wrapValue(42, ctx);
    expect(isStaticJsNumber(result)).toBe(true);
    expect((result as StaticJsNumber).value).toBe(42);
  });

  it("wraps null as sandbox null", () => {
    const { ctx, realm } = makeCtx();
    const result = wrapValue(null, ctx);
    expect(result).toBe(realm.types.null);
  });

  it("re-wraps a StaticJsScalar from another realm using .value", () => {
    const outerRealm = StaticJsRealm();
    const innerRealm = StaticJsRealm();
    const ctx = createBridgeContext(makeSpawnOpts(outerRealm));
    const innerNum = innerRealm.types.number(99);
    const result = wrapValue(innerNum, ctx);
    expect(isStaticJsNumber(result)).toBe(true);
    expect((result as StaticJsNumber).value).toBe(99);
  });

  it("plain-clones a POJO with recursive property wrapping", () => {
    const { ctx } = makeCtx();
    const result = wrapValue({ x: 1, y: "hello" }, ctx);
    expect(isStaticJsObject(result)).toBe(true);
    expect(result.getSync("x")?.toNative()).toBe(1);
    expect(result.getSync("y")?.toNative()).toBe("hello");
  });
});
```

- [ ] **Step 2: Run tests — confirm they fail**

```
pnpm --filter @suntime-js/docs test
```

Expected: 4 failures — `wrapValue` does not exist.

- [ ] **Step 3: Implement `needsClassWrapping`, `clonePojo`, and `wrapValue` in `host-bridge.ts`**

Add after `getHostObject`:

```ts
function needsClassWrapping(value: unknown): boolean {
  if (value === null || value === undefined) return false;
  if (typeof value !== "object" && typeof value !== "function") return false;
  const proto = Object.getPrototypeOf(value as object);
  return proto !== Object.prototype && proto !== null;
}

function clonePojo(obj: object, ctx: BridgeContext): StaticJsValue {
  const { realm } = ctx.spawnOpts;
  const props: Record<string, { value: StaticJsValue; enumerable: boolean; writable: boolean; configurable: boolean }> = {};
  for (const key of Object.keys(obj)) {
    props[key] = {
      value: wrapValue((obj as Record<string, unknown>)[key], ctx),
      enumerable: true,
      writable: true,
      configurable: true,
    };
  }
  return realm.types.object(props);
}

export function wrapValue(value: unknown, ctx: BridgeContext): StaticJsValue {
  const { realm } = ctx.spawnOpts;

  if (
    value === null ||
    value === undefined ||
    (typeof value !== "object" && typeof value !== "function")
  ) {
    return realm.types.toStaticJsValue(value);
  }

  if (isStaticJsScalar(value)) {
    return realm.types.toStaticJsValue(value.value);
  }

  if (isStaticJsValue(value) || needsClassWrapping(value)) {
    return wrapClassBacked(value as object, ctx);
  }

  return clonePojo(value as object, ctx);
}
```

Note: `wrapClassBacked` is referenced but defined in Task 4. TypeScript will resolve this at runtime since they are in the same module. The typecheck step will surface any issue before the build.

- [ ] **Step 4: Run tests — confirm the 4 primitive/POJO tests pass**

```
pnpm --filter @suntime-js/docs test
```

Expected: 4 tests pass. (Tests involving `wrapClassBacked` will still fail — those come in Task 4.)

---

## Task 3: `unwrapArg`

**Files:**
- Modify: `docs/src/code-runtime/host-bridge.ts`
- Modify: `docs/src/code-runtime/host-bridge.test.ts`

- [ ] **Step 1: Write failing tests for `unwrapArg`**

Add inside `host-bridge.test.ts`:

```ts
describe("unwrapArg", () => {
  const realm = StaticJsRealm();
  const ctx = createBridgeContext(makeSpawnOpts(realm));

  it("extracts .value from a sandbox scalar", () => {
    const sandboxNum = realm.types.number(7);
    expect(unwrapArg(sandboxNum)).toBe(7);
  });

  it("calls .toNative() on a plain sandbox object", () => {
    const obj = realm.types.object({
      a: { value: realm.types.number(1), enumerable: true, writable: true, configurable: true },
    });
    const result = unwrapArg(obj) as Record<string, unknown>;
    expect(result.a).toBe(1);
  });

  it("returns the backing host object for a class-backed wrapper", () => {
    const innerRealm = StaticJsRealm();
    const wrapper = wrapClassBacked(innerRealm as unknown as object, ctx);
    expect(unwrapArg(wrapper)).toBe(innerRealm);
  });
});
```

- [ ] **Step 2: Run tests — confirm they fail**

```
pnpm --filter @suntime-js/docs test
```

Expected: the 3 `unwrapArg` tests fail.

- [ ] **Step 3: Implement `unwrapArg` in `host-bridge.ts`** (add after `getHostObject`)

```ts
export function unwrapArg(sandboxArg: StaticJsValue): unknown {
  const backing = backingMap.get(sandboxArg as unknown as object);
  if (backing !== undefined) return backing;
  if (isStaticJsScalar(sandboxArg)) return sandboxArg.value;
  return sandboxArg.toNative();
}
```

- [ ] **Step 4: Run tests — confirm `unwrapArg` tests pass**

```
pnpm --filter @suntime-js/docs test
```

Expected: all 7 tests pass so far.

---

## Task 4: Prototype scanning (`buildSandboxPrototype`) and `wrapClassBacked`

**Files:**
- Modify: `docs/src/code-runtime/host-bridge.ts`
- Modify: `docs/src/code-runtime/host-bridge.test.ts`

- [ ] **Step 1: Write failing tests for `wrapClassBacked`**

Add inside `host-bridge.test.ts`:

```ts
describe("wrapClassBacked", () => {
  const outerRealm = StaticJsRealm();
  const ctx = createBridgeContext(makeSpawnOpts(outerRealm));

  it("returns a sandbox object", () => {
    const innerRealm = StaticJsRealm();
    const wrapper = wrapClassBacked(innerRealm as unknown as object, ctx);
    expect(isStaticJsObject(wrapper)).toBe(true);
  });

  it("backing map links wrapper back to host object", () => {
    const innerRealm = StaticJsRealm();
    const wrapper = wrapClassBacked(innerRealm as unknown as object, ctx);
    expect(getHostObject(wrapper)).toBe(innerRealm);
  });

  it("exposes prototype methods as sandbox functions", () => {
    const innerRealm = StaticJsRealm();
    const wrapper = wrapClassBacked(innerRealm as unknown as object, ctx);
    // evaluateScriptSync is a method on StaticJsRealm — it should be on the prototype
    const fn = wrapper.getSync("evaluateScriptSync");
    expect(fn).toBeDefined();
  });

  it("writes to the wrapper do not reach the host object", () => {
    const innerRealm = StaticJsRealm();
    const wrapper = wrapClassBacked(innerRealm as unknown as object, ctx);
    wrapper.setSync("evaluateScriptSync", outerRealm.types.null);
    // The host object is unaffected
    expect(typeof (innerRealm as unknown as Record<string, unknown>).evaluateScriptSync).toBe("function");
    // The method is still accessible via the prototype on the wrapper
    const fromProto = wrapper.getSync("evaluateScriptSync");
    expect(fromProto).toBeDefined();
  });
});
```

- [ ] **Step 2: Run tests — confirm they fail**

```
pnpm --filter @suntime-js/docs test
```

Expected: the 4 `wrapClassBacked` tests fail.

- [ ] **Step 3: Implement `getToStringTag` and `buildSandboxPrototype` in `host-bridge.ts`**

Add after `getOverride`:

```ts
function getToStringTag(proto: object): string | undefined {
  let walk: object | null = proto;
  while (walk !== null && walk !== Object.prototype) {
    const tag = (walk as Record<symbol, unknown>)[Symbol.toStringTag];
    if (typeof tag === "string") return tag;
    walk = Object.getPrototypeOf(walk) as object | null;
  }
  return undefined;
}

function buildSandboxPrototype(hostObj: object, ctx: BridgeContext): StaticJsObject {
  const { spawnOpts, protoCache } = ctx;
  const { realm } = spawnOpts;

  const rootProto = Object.getPrototypeOf(hostObj) as object | null;
  if (rootProto === null || rootProto === Object.prototype) {
    return realm.types.object({}) as StaticJsObject;
  }

  const tag = getToStringTag(rootProto);

  if (tag && protoCache.has(tag)) {
    return protoCache.get(tag)!;
  }

  type Entry =
    | { kind: "method"; fn: Function }
    | { kind: "getter"; get: Function; set?: Function };
  const entries = new Map<string, Entry>();

  let walk: object | null = rootProto;
  while (walk !== null && walk !== Object.prototype) {
    for (const key of Object.getOwnPropertyNames(walk)) {
      if (key === "constructor") continue;
      if (entries.has(key)) continue;
      const desc = Object.getOwnPropertyDescriptor(walk, key);
      if (!desc) continue;
      if (typeof desc.value === "function") {
        entries.set(key, { kind: "method", fn: desc.value });
      } else if (typeof desc.get === "function") {
        entries.set(key, { kind: "getter", get: desc.get, set: desc.set });
      }
    }
    walk = Object.getPrototypeOf(walk) as object | null;
  }

  const props: Record<string, StaticJsPropertyDescriptorRecord> = {};

  for (const [name, entry] of entries) {
    if (entry.kind === "method") {
      const override = tag ? getOverride(tag, name) : undefined;
      if (override) {
        props[name] = {
          value: realm.types.function(name, function* (this: StaticJsValue, ...args: StaticJsValue[]) {
            const hostThis = backingMap.get(this as unknown as object);
            return yield* override.call(this, hostThis, args, ctx);
          }),
          enumerable: false,
          writable: false,
          configurable: false,
        };
      } else {
        props[name] = {
          value: realm.types.function(name, function* (this: StaticJsValue, ...args: StaticJsValue[]) {
            const hostThis = backingMap.get(this as unknown as object) as Record<string, Function>;
            const hostArgs = args.map(unwrapArg);
            const result: unknown = hostThis[name](...hostArgs);
            return wrapValue(result, ctx);
          }),
          enumerable: false,
          writable: false,
          configurable: false,
        };
      }
    } else {
      const { get, set } = entry;
      const accessorDesc: Record<string, unknown> = {
        get: realm.types.function(`get ${name}`, function* (this: StaticJsValue) {
          const hostThis = backingMap.get(this as unknown as object) as object;
          const result: unknown = get.call(hostThis);
          return wrapValue(result, ctx);
        }),
        enumerable: false,
        configurable: false,
      };
      if (set) {
        accessorDesc.set = realm.types.function(`set ${name}`, function* (this: StaticJsValue, newVal: StaticJsValue) {
          const hostThis = backingMap.get(this as unknown as object) as object;
          set.call(hostThis, unwrapArg(newVal));
          return realm.types.undefined;
        });
      }
      props[name] = accessorDesc;
    }
  }

  const sandboxProto = realm.types.object(props) as StaticJsObject;

  if (tag) protoCache.set(tag, sandboxProto);
  return sandboxProto;
}
```

- [ ] **Step 4: Implement `wrapClassBacked` in `host-bridge.ts`** (add after `buildSandboxPrototype`)

```ts
export function wrapClassBacked(hostObj: object, ctx: BridgeContext): StaticJsValue {
  const { realm } = ctx.spawnOpts;
  const sandboxProto = buildSandboxPrototype(hostObj, ctx);
  const sandboxObj = realm.types.object({}, sandboxProto);
  backingMap.set(sandboxObj as unknown as object, hostObj);
  return sandboxObj;
}
```

- [ ] **Step 5: Run tests — confirm all tests pass**

```
pnpm --filter @suntime-js/docs test
```

Expected: all tests pass, including the 4 `wrapClassBacked` tests.

---

## Task 5: Rewrite `staticjs-api.ts`

**Files:**
- Modify: `docs/src/code-runtime/staticjs-api.ts`
- Modify: `docs/src/code-runtime/host-bridge.test.ts`

- [ ] **Step 1: Write failing integration tests**

Add inside `host-bridge.test.ts`:

```ts
describe("createStaticJsRealmApi — integration", () => {
  it("StaticJsRealm() factory returns a sandbox object", () => {
    const realm = makeApiRealm();
    const result = realm.evaluateScriptSync(`
      const inner = StaticJsRealm();
      typeof inner;
    `);
    expect(result.toNative()).toBe("object");
  });

  it("evaluateScriptSync on an inner realm returns a wrapped value", () => {
    const realm = makeApiRealm();
    const result = realm.evaluateScriptSync(`
      const inner = StaticJsRealm();
      const val = inner.evaluateScriptSync("1 + 1");
      typeof val;
    `);
    expect(result.toNative()).toBe("object");
  });

  it("isStaticJsValue returns true for values produced by inner realm", () => {
    const realm = makeApiRealm();
    const result = realm.evaluateScriptSync(`
      const inner = StaticJsRealm();
      const val = inner.evaluateScriptSync("1 + 1");
      isStaticJsValue(val);
    `);
    expect(result.toNative()).toBe(true);
  });

  it("isStaticJsValue returns false for plain sandbox values", () => {
    const realm = makeApiRealm();
    const result = realm.evaluateScriptSync(`isStaticJsValue(42)`);
    expect(result.toNative()).toBe(false);
  });

  it("isStaticJsNumber returns true for number results", () => {
    const realm = makeApiRealm();
    const result = realm.evaluateScriptSync(`
      const inner = StaticJsRealm();
      const val = inner.evaluateScriptSync("1 + 1");
      isStaticJsNumber(val);
    `);
    expect(result.toNative()).toBe(true);
  });

  it("isStaticJsString returns true for string results", () => {
    const realm = makeApiRealm();
    const result = realm.evaluateScriptSync(`
      const inner = StaticJsRealm();
      const val = inner.evaluateScriptSync('"hello"');
      isStaticJsString(val);
    `);
    expect(result.toNative()).toBe(true);
  });

  it("writes to realm wrapper do not affect the host realm methods", () => {
    const realm = makeApiRealm();
    const result = realm.evaluateScriptSync(`
      const inner = StaticJsRealm();
      inner.evaluateScriptSync = null;
      typeof inner.evaluateScriptSync;
    `);
    // After writing null to own property, getSync("evaluateScriptSync") returns own property.
    // The host realm's method is unaffected — this tests write isolation.
    expect(result.toNative()).toBe("object"); // null typeof is "object"
  });

  it("registerSubTask is called when evaluateScriptSync runs on an inner realm", () => {
    const realm = StaticJsRealm({
      runTaskSync: createTimeBoundTaskRunner({ maxRunTime: 5_000 }),
    });
    const spawnOpts = makeSpawnOpts(realm);
    const api = createStaticJsRealmApi(spawnOpts);
    for (const [key, value] of Object.entries(api)) {
      realm.global.setSync(key, value);
    }
    // Inner realm has no runTaskSync — falls back to the time-bound default.
    // registerSubTask is still called via the custom runTask wrapper in the override.
    realm.evaluateScriptSync(`
      const inner = StaticJsRealm();
      inner.evaluateScriptSync("1");
    `);
    expect(spawnOpts.registerSubTask).toHaveBeenCalled();
  });

  it("logs a warning when evaluateScriptSync is called with no runTaskSync on the realm and no per-call runTask", () => {
    const realm = StaticJsRealm({
      runTaskSync: createTimeBoundTaskRunner({ maxRunTime: 5_000 }),
    });
    const spawnOpts = makeSpawnOpts(realm);
    const api = createStaticJsRealmApi(spawnOpts);
    for (const [key, value] of Object.entries(api)) {
      realm.global.setSync(key, value);
    }
    // Inner realm created with no runTaskSync, no per-call runner either.
    realm.evaluateScriptSync(`
      const inner = StaticJsRealm();
      inner.evaluateScriptSync("1");
    `);
    expect(spawnOpts.addLog).toHaveBeenCalledWith(
      expect.objectContaining({ kind: "warning" }),
    );
  });
});
```

- [ ] **Step 2: Run tests — confirm integration tests fail**

```
pnpm --filter @suntime-js/docs test
```

Expected: the 8 integration tests fail (imports from `staticjs-api` not yet updated).

- [ ] **Step 3: Replace the entire content of `staticjs-api.ts`**

```ts
import {
  createTimeBoundTaskRunner,
  isStaticJsBoolean,
  isStaticJsNumber,
  isStaticJsObject,
  isStaticJsScalar,
  isStaticJsString,
  isStaticJsArray,
  isStaticJsFunction,
  isStaticJsValue,
  StaticJsRealm,
  StaticJsRealmOptions,
  StaticJsTaskRunner,
  StaticJsValue,
} from "@suntime-js/core";

import { CodeRuntimeSpawnOptions } from "./CodeRuntime";
import {
  createBridgeContext,
  getHostObject,
  registerOverride,
  unwrapArg,
  wrapClassBacked,
  wrapValue,
} from "./host-bridge";

// Maps each inner realm instance to the raw (unhooked) runners the caller provided.
// Both runners are stored so they are available to any override that needs them.
// The evaluateScriptSync override uses runTaskSync; a future evaluateScript override
// will use runTask. Raw runners are stored here (not the hooked versions) so the
// override can add its own registerSubTask call without double-registering.
interface RealmRunners {
  runTask?: StaticJsTaskRunner;
  runTaskSync?: StaticJsTaskRunner;
}
const realmRunners = new WeakMap<object, RealmRunners>();

// evaluateScriptSync cannot be auto-generated because it needs:
// 1. registerSubTask called so the outer session can abort the evaluation
// 2. A task runner sourced from (in priority order):
//    a. the per-call runTask in the second sandbox argument
//    b. the realm's configured runTaskSync
//    c. a time-bound fallback (with a warning logged)
registerOverride(
  "StaticJsRealm",
  "evaluateScriptSync",
  function* (this: StaticJsValue, hostThis, sandboxArgs, ctx) {
    const { spawnOpts } = ctx;
    const realmInstance = hostThis as InstanceType<typeof StaticJsRealm>;

    const codeArg = sandboxArgs[0];
    if (!codeArg || !isStaticJsScalar(codeArg)) {
      return spawnOpts.realm.types.undefined;
    }
    const code = String(codeArg.value);

    // Extract per-call runTask from sandboxArgs[1] ({ runTask?: ... }).
    // The property value is unwrapped via the backing map to obtain the real runner.
    let callRunTask: StaticJsTaskRunner | undefined;
    const callOptsArg = sandboxArgs[1];
    if (callOptsArg && isStaticJsObject(callOptsArg)) {
      const runTaskProp = callOptsArg.getSync("runTask");
      if (runTaskProp) {
        const unwrapped = unwrapArg(runTaskProp);
        if (typeof unwrapped === "function") {
          callRunTask = unwrapped as StaticJsTaskRunner;
        }
      }
    }

    const stored = realmRunners.get(hostThis as object);
    const effectiveRunner = callRunTask ?? stored?.runTaskSync;

    if (!effectiveRunner) {
      spawnOpts.addLog({
        kind: "warning",
        text: "Detected an evaluateScriptSync call without a runTaskSync provided. Using a default. The StaticJs engine does NOT do this natively!",
      });
    }

    const runner = effectiveRunner ?? createTimeBoundTaskRunner({ maxRunTime: 5_000 });

    const result = realmInstance.evaluateScriptSync(code, {
      runTask: (task) => {
        spawnOpts.registerSubTask(task);
        runner(task);
      },
    });
    return wrapValue(result, ctx);
  },
);

export function createStaticJsRealmApi(
  spawnOpts: CodeRuntimeSpawnOptions,
): Record<string, StaticJsValue> {
  const ctx = createBridgeContext(spawnOpts);
  const { realm } = spawnOpts;

  // Prime the prototype cache by scanning a throwaway instance.
  const primeRealm = StaticJsRealm();
  wrapClassBacked(primeRealm as unknown as object, ctx);

  // StaticJsRealm is a factory/constructor — prototype scanning cannot auto-generate it.
  const staticJsRealmFactory = realm.types.function(
    "StaticJsRealm",
    function* (optsArg?: StaticJsValue) {
      const rawOpts = (optsArg != null ? unwrapArg(optsArg) : {}) as StaticJsRealmOptions;
      const resolvedOpts: StaticJsRealmOptions = { ...rawOpts };

      // Hook runners so internal realm operations (toNative, etc.) register sub-tasks.
      // The raw runners are stored separately for use by overrides.
      if (rawOpts.runTask) {
        resolvedOpts.runTask = (task) => {
          spawnOpts.registerSubTask(task);
          rawOpts.runTask!(task);
        };
      }
      if (rawOpts.runTaskSync) {
        resolvedOpts.runTaskSync = (task) => {
          spawnOpts.registerSubTask(task);
          rawOpts.runTaskSync!(task);
        };
      }

      const newRealm = StaticJsRealm(resolvedOpts);

      // Store both raw runners. The evaluateScriptSync override reads runTaskSync;
      // a future evaluateScript override will read runTask.
      realmRunners.set(newRealm as unknown as object, {
        runTask: rawOpts.runTask,
        runTaskSync: rawOpts.runTaskSync,
      });

      return wrapClassBacked(newRealm as unknown as object, ctx);
    },
  );

  function makeTypeGuard(guard: (value: unknown) => boolean): StaticJsValue {
    return realm.types.function(guard.name, function* (value?: StaticJsValue) {
      const hostValue =
        value != null
          ? (getHostObject(value) ?? (isStaticJsScalar(value) ? value.value : value.toNative()))
          : undefined;
      return realm.types.toStaticJsValue(guard(hostValue));
    });
  }

  return {
    StaticJsRealm: staticJsRealmFactory,
    isStaticJsValue: makeTypeGuard(isStaticJsValue),
    isStaticJsScalar: makeTypeGuard(isStaticJsScalar),
    isStaticJsNumber: makeTypeGuard(isStaticJsNumber),
    isStaticJsBoolean: makeTypeGuard(isStaticJsBoolean),
    isStaticJsString: makeTypeGuard(isStaticJsString),
    isStaticJsObject: makeTypeGuard(isStaticJsObject),
    isStaticJsArray: makeTypeGuard(isStaticJsArray),
    isStaticJsFunction: makeTypeGuard(isStaticJsFunction),
  };
}
```

- [ ] **Step 4: Run all tests**

```
pnpm --filter @suntime-js/docs test
```

Expected: all tests pass. If any integration test fails, check the error output and fix before proceeding.

---

## Task 6: Fix type errors and verify build

**Files:**
- Modify: `docs/src/code-runtime/host-bridge.ts` (type fixes as needed)
- Modify: `docs/src/code-runtime/staticjs-api.ts` (type fixes as needed)

- [ ] **Step 1: Run typecheck**

```
pnpm --filter @suntime-js/docs check
```

- [ ] **Step 2: Fix any type errors in `host-bridge.ts`**

Common issues to resolve:

- `realm.types.object(props)` — `props` must match `Record<string, StaticJsPropertyDescriptorRecord> | Map<...>`. The `StaticJsPropertyDescriptorRecord` is a union of data and accessor shapes. Cast `props` as `Parameters<typeof realm.types.object>[0]` if inference fails.
- `backingMap.get(this as unknown as object)` — if TypeScript rejects the `StaticJsValue` → `object` cast, use `this as object & StaticJsValue`.
- `realm.types.object({}, sandboxProto)` — the second argument expects `StaticJsObject | StaticJsNull | null`. `buildSandboxPrototype` returns `StaticJsObject`, so this should satisfy the constraint; cast if needed.

- [ ] **Step 3: Re-run typecheck until clean**

```
pnpm --filter @suntime-js/docs check
```

Expected: 0 errors.

- [ ] **Step 4: Build the docs site**

```
pnpm --filter @suntime-js/docs build
```

Expected: successful build.

---

## Task 7: Manual smoke test in the docs site

- [ ] **Step 1: Start the dev server**

```
pnpm --filter @suntime-js/docs dev
```

- [ ] **Step 2: Open the Quick Start page and run this in the live code runner**

```js
const realm = StaticJsRealm();
const result = realm.evaluateScriptSync("1 + 1");
isStaticJsValue(result);
```

Expected: output panel shows `true`.

- [ ] **Step 3: Verify type guards distinguish types correctly**

```js
const realm = StaticJsRealm();
const numResult = realm.evaluateScriptSync("42");
const strResult = realm.evaluateScriptSync('"hello"');
[isStaticJsNumber(numResult), isStaticJsString(numResult), isStaticJsString(strResult)];
```

Expected: `[true, false, true]`.

- [ ] **Step 4: Verify write isolation**

```js
const realm = StaticJsRealm();
realm.evaluateScriptSync = null;
typeof realm.evaluateScriptSync;
```

Expected: `"object"` (null was written to the own property; the prototype method is unaffected in the host).

---

## Notes for implementers

- **No git commits** during implementation.
- **`Symbol.toStringTag` coverage**: `StaticJsRealmImpl` already has `[Symbol.toStringTag]()` returning `"StaticJsRealm"`. Other impl classes will need tags added as coverage expands. If a prototype has no tag, `buildSandboxPrototype` skips caching — the prototype still works, it just rebuilds per instance.
- **Two realms**: `ctx.spawnOpts.realm` is always the *outer* realm. Inner realms created by sandbox code are wrapped via `wrapClassBacked` and exist as sandbox objects in the outer realm. `wrapValue` handles the realm boundary via the `isStaticJsValue` + `isStaticJsScalar` checks.
- **Async methods**: `evaluateScript` (async) is not yet overridden. The auto-generated wrapper will call it without a task runner — add an override when needed following the same pattern as `evaluateScriptSync`.
- **Iterative expansion**: to expose more `@suntime-js/core` surface, add `Symbol.toStringTag` to the relevant impl class, then verify via `wrapClassBacked` in a test or the REPL.
