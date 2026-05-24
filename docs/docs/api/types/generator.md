# StaticJsGenerator

A sandboxed generator object.

**Import**

:::note[Internal type]
`StaticJsGenerator` is not exported from the main `@suntime-js/core` package. It can be imported directly from its module path if needed:

```ts
import type { StaticJsGenerator } from "@suntime-js/core/runtime/types/StaticJsGenerator";
```

:::

---

## Extends

[`StaticJsObject`](./object.md) → [`StaticJsPrimitive`](./primitive.md)

---

## Overview

`StaticJsGenerator` represents the generator object returned when a sandboxed generator function is called (e.g. `function* gen() { ... }`). It implements the ECMAScript generator protocol — `next`, `return`, and `throw` — each available in three variants following the same [triplet pattern](./object.md#method-triplets) used by `StaticJsObject`.

---

## Properties

Inherits all properties from [`StaticJsObject`](./object.md).

### typeOf

`"object"`

### runtimeTypeOf

`"generator"`

---

## Methods

Inherits all methods from [`StaticJsObject`](./object.md).

The `*Sync` and `*Async` variants accept an optional [`StaticJsRunTaskOptions`](../realm.md#staticjsruntaskoptions) to override the task runner; the `*Evaluator` variants do not.

### next(value?, opts?)

```ts
nextSync(value?: StaticJsValue, opts?: StaticJsRunTaskOptions): StaticJsIteratorResult
nextAsync(value?: StaticJsValue, opts?: StaticJsRunTaskOptions): Promise<StaticJsIteratorResult>
nextEvaluator(value?: StaticJsValue): EvaluationGenerator<StaticJsIteratorResult>
```

Resumes the generator, passing `value` as the result of the current `yield` expression. Returns a [`StaticJsIteratorResult`](./iterator.md#staticjsiteratorresult) with the next yielded value and a `done` flag.

On the first call, `value` is ignored (as per the ECMAScript spec).

### return(value?, opts?)

```ts
returnSync(value?: StaticJsValue, opts?: StaticJsRunTaskOptions): StaticJsIteratorResult
returnAsync(value?: StaticJsValue, opts?: StaticJsRunTaskOptions): Promise<StaticJsIteratorResult>
returnEvaluator(value?: StaticJsValue): EvaluationGenerator<StaticJsIteratorResult>
```

Terminates the generator early, running any `finally` blocks, and returns a result record with `done: true` and the provided `value`.

### throw(value, opts?)

```ts
throwSync(value: StaticJsValue, opts?: StaticJsRunTaskOptions): StaticJsIteratorResult
throwAsync(value: StaticJsValue, opts?: StaticJsRunTaskOptions): Promise<StaticJsIteratorResult>
throwEvaluator(value: StaticJsValue): EvaluationGenerator<StaticJsIteratorResult>
```

Resumes the generator by throwing `value` at the current suspension point. If the generator handles the thrown value (via `try/catch`), iteration may continue and the return value reflects the next yield. If unhandled, the generator terminates and the error propagates as an abrupt completion.

---

## See also

- [`StaticJsIteratorResult`](./iterator.md#staticjsiteratorresult): the result record type
- [`StaticJsAsyncGenerator`](./async-generator.md): the async counterpart
