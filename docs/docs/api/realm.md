---
sidebar_position: 1
---

# StaticJsRealm

The top-level construct for sandboxed JavaScript execution. Each realm has its own prototypes, globals, and task queue.

**Import**

```ts
import { StaticJsRealm } from "@suntime-js/core";
```

---

## StaticJsRealm(opts?)

Creates a new realm. Can be called with or without `new`.

```ts
const realm = StaticJsRealm();
const realm = new StaticJsRealm();
const realm = StaticJsRealm({ global: { properties: { ... } } });
```

### Options

#### globalThis

Type: `StaticJsRealmGlobalOption`

Sets the value of `globalThis` inside the sandbox. Accepts a [global option](#staticjsrealmglobaloption).

#### global

Type: `StaticJsRealmGlobalOption`

Sets the global object for the realm. Accepts a [global option](#staticjsrealmglobaloption).

The realm always installs its intrinsics onto the global object. You can override individual intrinsics after construction using `realm.global.definePropertySync(...)`.

#### modules

Type: `Record<string, StaticJsModuleResolution>`

A static map of module specifiers to module implementations. Consulted first during `import` resolution. See [StaticJsModuleResolution](#staticjsmoduleresolution).

```ts
const realm = StaticJsRealm({
  modules: {
    "my-lib": {
      exports: { add: (a, b) => a + b },
    },
  },
});
```

#### resolveImportedModule

Type: `(specifier: string, referencingModule: StaticJsModule) => Promise<StaticJsModuleResolution>`

Called for module specifiers not found in `modules`. Return a [StaticJsModuleResolution](#staticjsmoduleresolution) or a Promise that resolves to one.

#### runTask

Type: `StaticJsTaskRunner`

Default task runner used by `evaluateExpression`, `evaluateScript`, and `evaluateModule`. Overridable per-call via `opts.runTask`. See [Task Runners](../08-tasks.md).

#### runTaskSync

Type: `StaticJsTaskRunner`

Default task runner used by `evaluateExpressionSync` and `evaluateScriptSync`, and for synchronous sub-task evaluation (e.g. `StaticJsValue.toNative`, `StaticJsModule.getExportSync`). The runner **must** drive the task iterator to completion before returning. Overridable per-call via `opts.runTask`.

If the task is not completed synchronously, a [StaticJsSynchronousTaskIncompleteError](./errors/synchronous-task-incomplete-error.md) is thrown. See [Task Runners](../08-tasks.md).

#### hooks

Type: `StaticJsRealmHookOptions`

Partial overrides for engine-internal behavior. All hooks receive the realm as their first argument.

##### hooks.math

Override individual `Math.*` implementations. Useful for deterministic behavior across engines, since many `Math` functions are implementation-defined by the spec.

Signature: `(realm, ...args: number[]) => number`

Arguments are passed as native numbers coerced from sandbox values. The sandbox controls the argument count.

Supported keys: `acos`, `acosh`, `asin`, `asinh`, `atan`, `atan2`, `atanh`, `cbrt`, `cos`, `cosh`, `exp`, `expm1`, `hypot`, `log`, `log10`, `log1p`, `log2`, `random`, `sin`, `sinh`, `sqrt`, `tan`, `tanh`

```ts
const realm = StaticJsRealm({
  hooks: {
    math: {
      random: () => 0.5, // deterministic
    },
  },
});
```

---

## Properties

### types

Type: [`StaticJsTypeFactory`](./type-factory.md)

The type factory for this realm. Use it to create and coerce values.

### global

Type: `StaticJsObject`

The global object for this realm. Equivalent to `globalThis` in most host environments. You can add properties to it after construction:

```ts
realm.global.definePropertySync("myApi", {
  value: realm.types.toStaticJsValue({ greet: () => "hello" }),
});
```

### globalThis

Type: `StaticJsValue`

The value of `globalThis` as seen inside the sandbox.

### config

Type: `StaticJsConfig`

The configuration the realm was created with.

### intrinsics

Type: `Intrinsics`

The built-in objects of the realm (e.g. `Array.prototype`, `Function.prototype`).

---

## Methods

### evaluateExpression(expression, opts?)

```ts
evaluateExpression(
  expression: string,
  opts?: StaticJsRealmEvaluateSourceOptions,
): Promise<StaticJsValue>
```

Queues a JavaScript expression for evaluation. Returns a promise that resolves to the result. If the realm is idle the expression begins in the next macrotask; otherwise it runs after all queued tasks complete.

Options are documented at [StaticJsRealmEvaluateSourceOptions](#staticjsrealmevaluatesourceoptions).

### evaluateExpressionSync(expression, opts?)

```ts
evaluateExpressionSync(
  expression: string,
  opts?: StaticJsRealmEvaluateSourceOptions,
): StaticJsValue
```

Evaluates a JavaScript expression synchronously and returns the result.

Must not be called while the realm is already evaluating asynchronously, unless the call originates from within that evaluation (e.g. a host function called by sandboxed code). Violating this throws [StaticJsConcurrentEvaluationError](./errors/concurrent-evaluation-error.md).

Options are documented at [StaticJsRealmEvaluateSourceOptions](#staticjsrealmevaluatesourceoptions).

### evaluateScript(script, opts?)

```ts
evaluateScript(
  script: string,
  opts?: StaticJsRealmEvaluateScriptOptions,
): Promise<StaticJsValue>
```

Queues a script for evaluation. Returns a promise that resolves to the script's completion value.

Options are documented at [StaticJsRealmEvaluateSourceOptions](#staticjsrealmevaluatesourceoptions).

### evaluateScriptSync(script, opts?)

```ts
evaluateScriptSync(
  script: string,
  opts?: StaticJsRealmEvaluateScriptSyncOptions,
): StaticJsValue
```

Evaluates a script synchronously. Same concurrency constraints as `evaluateExpressionSync`.

Options are documented at [StaticJsRealmEvaluateSourceOptions](#staticjsrealmevaluatesourceoptions). `topLevelAwait` is not supported in the sync variant.

### evaluateModule(code, opts?)

```ts
evaluateModule(
  code: string,
  opts?: StaticJsRealmEvaluateSourceOptions,
): Promise<StaticJsModule>
```

Links and evaluates an ECMAScript module. Returns a promise that resolves to the resulting [`StaticJsModule`](../06-modules.md).

Module linking happens immediately; declaration and evaluation are queued. If the module (or any dependency) uses top-level `await`, the promise waits for the full module graph to settle before resolving.

There is no synchronous equivalent.

Options are documented at [StaticJsRealmEvaluateSourceOptions](#staticjsrealmevaluatesourceoptions).

### awaitCurrentTask()

```ts
awaitCurrentTask(): Promise<void>
```

Returns a promise that resolves when the current macrotask and all its microtasks have finished. Other queued macrotasks may still be pending.

### awaitIdle()

```ts
awaitIdle(): Promise<void>
```

Returns a promise that resolves when there are no remaining macrotasks or microtasks.

Guarantees:

- `awaitIdle` promises taken before a new task is queued resolve before that task begins.
- `awaitIdle` called after a task is queued still awaits that task, even if earlier `awaitIdle` calls are still resolving.

---

## Option types

### `StaticJsRealmGlobalOption`

Three forms are accepted for `global` and `globalThis`:

**Property declarations**

```ts
{
  properties: {
    answer: { value: 42, writable: false },
    computed: {
      get() { return Date.now(); },
    },
  },
}
```

Each property is either a data descriptor (`value`, `writable?`, `enumerable?`, `configurable?`) or an accessor descriptor (`get?`, `set?`, `enumerable?`, `configurable?`). Accessor `get`/`set` may return or be an `EvaluationGenerator`.

Values and accessors may either be [StaticJsValue](./types/value.md) instances, or native host values and functions. If native, they will be coerced according to the [Type Coercsion Rules](../04-type-coercion.md).

**Native value**

A fixed value can be specified:

```ts
{
  value: myObject;
}
```

The value is coerced to a `StaticJsObject` via [Type Coercion](../04-type-coercion.md). Must be object-like.

**Factory function**

Factory functions receive the type factory and return a `StaticJsObject`:

```ts
(types) =>
  types.object({
    myProp: {
      value: types.number(42),
    },
  });
```

### `StaticJsRunTaskOptions`

| Property  | Type                 | Description                                          |
| --------- | -------------------- | ---------------------------------------------------- |
| `runTask` | `StaticJsTaskRunner` | Override the task runner for this single invocation. |

### `StaticJsRealmEvaluateSourceOptions`

Extends `StaticJsRunTaskOptions`.

| Property     | Type     | Description                                     |
| ------------ | -------- | ----------------------------------------------- |
| `sourceName` | `string` | Name shown in stack traces and debugger output. |

### `StaticJsRealmEvaluateScriptOptions`

Extends `StaticJsRealmEvaluateSourceOptions`.

| Property        | Type                | Default | Description                                                                                                                                                                                                      |
| --------------- | ------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `topLevelAwait` | `boolean \| "auto"` | `false` | Allow `await` at the top level. `true` always returns a promise; `"auto"` returns a promise only if `await` is present; `false` throws a syntax error if `await` is used. Not available on `evaluateScriptSync`. |
| `strict`        | `boolean`           | `false` | Force strict mode regardless of `"use strict"` directives.                                                                                                                                                       |

### `StaticJsModuleResolution`

Values accepted by `modules` and returned from `resolveImportedModule`:

| Type                                   | Description                                                                                      |
| -------------------------------------- | ------------------------------------------------------------------------------------------------ |
| `{ exports: Record<string, unknown> }` | Plain object of exported values. Values are coerced via [type coercion](../04-type-coercion.md). |
| `StaticJsModule`                       | A pre-built module instance.                                                                     |
| `string`                               | Source code of an ECMAScript module to be parsed and evaluated.                                  |
