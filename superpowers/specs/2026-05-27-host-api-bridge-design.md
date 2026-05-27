# Host API Bridge Design

**Date:** 2026-05-27
**Context:** `docs/src/code-runtime/staticjs-api.ts`

## Problem

The documentation site's live code runner exposes `@suntime-js/core` to sandboxed
user code. Currently this is fully hand-rolled: every type, method, and type-guard
gets a manually crafted `StaticJsValue` wrapper. The goal is an automated bridge
that scales to the full public surface of `@suntime-js/core` without requiring a
hand-written wrapper for every addition.

### Constraints

- All exposed values must be native to the **outer realm** (`spawnOpts.realm`).
  Values cannot cross realms — even `StaticJsValue` instances from an inner realm
  must be unwrapped and re-wrapped.
- Class-backed host objects (`StaticJsRealm`, `StaticJsTypeFactory`, `StaticJsValue`
  subtypes, etc.) must block writes from propagating to the real host object.
- `@suntime-js/core` exposes interfaces publicly, not concrete classes. Prototype
  scanning must work from instances, not constructor references.
- Some methods require custom behavior (task runner hooking, sub-task registration)
  that cannot be auto-generated.
- There are two realms in play:
  - **Outer realm** — `spawnOpts.realm`, runs the user's sandboxed code.
  - **Inner realm** — created by user code via `StaticJsRealm(...)`, fully isolated.

---

## Approach

Eager **prototype scanning** (not proxy-based). At setup time, walk the prototype
chain of each host object and build a frozen sandbox prototype object with all
methods as `realm.types.function(...)`. Instance wrappers are plain sandbox objects
whose prototype is set to the scanned prototype. Writes from user code land on the
sandbox object's own properties and never reach the host.

Chosen for debuggability over proxy-based approaches.

---

## Components

### 1. Classification — `needsClassWrapping(value)`

Determines how to wrap a host value:

```
null / undefined / JS primitive   → realm.types.toStaticJsValue(x)
Object.getPrototypeOf(x) is Object.prototype or null
                                   → plain clone (clonePojo)
otherwise                          → class-backed wrap (wrapClassBacked)
```

`StaticJsPropertyDescriptorRecord` is a POJO — its prototype is `Object.prototype`,
so it gets plain-cloned. `StaticJsRealmImpl`, `StaticJsTypeFactoryImpl`,
`StaticJsPlainObjectImpl`, etc. have deeper chains and get class-backed wrapping.

---

### 2. Prototype scanning & caching

`buildSandboxPrototype(hostObj, spawnOpts)`:

1. Walk `Object.getPrototypeOf(hostObj)` up the chain, stopping before
   `Object.prototype`.
2. Collect all own method names at each level (closer-in-chain shadows farther).
3. For each method, check the override registry first; if an override is registered
   use it, otherwise auto-generate a wrapper (see §4).
4. Build a single flat `realm.types.object({...})` as the sandbox prototype.

**Cache key:** `Symbol.toStringTag` read from the prototype chain. If absent, the
prototype is built but not cached (and a warning is emitted). Classes without a
`toStringTag` should have one added to the backing library incrementally.

**Backing object retrieval:** a module-scoped `WeakMap<StaticJsObject, unknown>`
maps each sandbox instance back to its host object. Methods close over this map.

---

### 3. Instance wrapping — `wrapClassBacked(hostObj, spawnOpts)`

```ts
const sandboxProto = buildSandboxPrototype(hostObj, spawnOpts);
const sandboxObj   = spawnOpts.realm.types.object({}, sandboxProto);
backingMap.set(sandboxObj, hostObj);
return sandboxObj;
```

User code writes hit `sandboxObj`'s own property storage. The host object is
never touched.

---

### 4. Return value dispatch — `wrapValue(value, spawnOpts)`

```
null / undefined / JS primitive   → realm.types.toStaticJsValue(value)
isStaticJsScalar(value)           → realm.types.toStaticJsValue(value.value)
                                     (unwrap .value, re-wrap in outer realm)
isStaticJsValue(value)            → wrapClassBacked(value, spawnOpts)
                                     (non-scalar StaticJsValue from inner realm)
needsClassWrapping(value)         → wrapClassBacked(value, spawnOpts)
else                              → clonePojo(value, spawnOpts)
```

**Plain clone** — `clonePojo(obj, spawnOpts)`:  
Copies own enumerable properties into `realm.types.object({...})`, calling
`wrapValue` recursively on each property value.

---

### 5. Argument unwrapping — `unwrapArg(sandboxArg)`

Direction: sandbox → host. Used inside every auto-generated method wrapper.

```
backingMap.has(sandboxArg)        → backingMap.get(sandboxArg)
                                     (class-backed wrapper → host object)
isStaticJsScalar(sandboxArg)      → sandboxArg.value
                                     (scalar → native JS primitive)
else                              → sandboxArg.toNative()
                                     (POJO-like sandbox value)
```

Example: `isStaticJsValue(myWrappedRealm)` — unwraps via WeakMap to the real
`StaticJsRealm` instance, passes it to the native guard, re-wraps the boolean result.

---

### 6. Auto-generated method wrapper

For each method `fn` found during prototype scanning (no override registered):

```ts
realm.types.function(methodName, function* (...sandboxArgs) {
  const hostThis = backingMap.get(this); // realm.types.function passes sandbox receiver as JS `this`
  const hostArgs = sandboxArgs.map(unwrapArg);
  const result   = hostThis[methodName](...hostArgs);
  return wrapValue(result, spawnOpts);
})
```

Generator functions that return a `Promise` (async host methods) are awaited and
their resolution wrapped. Methods that return `void` return `realm.types.undefined`.

---

### 7. Override registration — `registerOverride(toStringTag, methodName, impl)`

Post-processing: after a prototype is built, individual methods can be replaced.
Overrides are keyed on `(Symbol.toStringTag value, method name)`. The prototype
builder checks the registry before auto-generating a wrapper.

```ts
registerOverride("StaticJsRealm", "evaluateScriptSync",
  function* (hostThis, sandboxArgs, spawnOpts) {
    const code    = sandboxArgs[0].value; // scalar string
    const runTask = createTimeBoundTaskRunner({ maxRunTime: 5_000 });
    const result  = hostThis.evaluateScriptSync(code, { runTask });
    spawnOpts.registerSubTask(/* internal task */);
    return wrapValue(result, spawnOpts);
  }
);
```

---

### 8. Entry point — `createStaticJsRealmApi(spawnOpts)`

Returns `Record<string, StaticJsValue>` for the outer realm's global scope.

Steps:

1. Register all overrides (see §7).
2. Construct a throwaway `StaticJsRealm()` instance to prime the prototype cache
   for `StaticJsRealm`. Discard it immediately.
3. Wrap `StaticJsRealm` as a **factory function** — hand-written, since it's a
   constructor not a method:
   - Unwraps user-provided options from sandbox arg.
   - Hooks `runTask` / `runTaskSync` to call `spawnOpts.registerSubTask`.
   - Constructs the real realm.
   - Returns `wrapClassBacked(newRealm, spawnOpts)`.
4. Wrap each `is*` type guard as a `realm.types.function` that unwraps its argument
   via WeakMap, calls the native guard, and re-wraps the boolean result.
5. Return the flat record.

---

## Incremental rollout

Start with `StaticJsRealm` + type guards (current scope). Extend to
`StaticJsTypeFactory`, `StaticJsValue` subtypes, and task runner factories as
`Symbol.toStringTag` values are added to the backing library.

No new public API surface in `@suntime-js/core` is required upfront — the bridge
works from instances using only `Object.getPrototypeOf` and `Symbol.toStringTag`.

---

## Files affected

| File | Change |
|---|---|
| `docs/src/code-runtime/staticjs-api.ts` | Replace hand-rolled code with bridge |
| `docs/src/code-runtime/host-bridge.ts` | New — core bridge machinery |
| `packages/core/src/runtime/realm/implementation/StaticJsRealmImpl.ts` | Add `Symbol.toStringTag` if missing (already present per IDE context) |
| Other `*Impl.ts` files | Add `Symbol.toStringTag` incrementally as coverage expands |
