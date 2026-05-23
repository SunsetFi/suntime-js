# StaticJsArray

A sandboxed array value.

**Import**

```ts
import { type StaticJsArray, isStaticJsArray } from "@suntime-js/core";
```

---

## Extends

[`StaticJsObject`](./object.md) → [`StaticJsPrimitive`](./primitive.md)

## Factory

[`realm.types.array(itemsOrLength?)`](../type-factory.md#arrayitemsorlength)

---

## Overview

`StaticJsArray` is an object-like sandbox value with array semantics. It inherits the full [`StaticJsObject`](./object.md) property API. Use `getAsync`/`setAsync` to read and write elements by index string (e.g. `"0"`, `"1"`) or access `"length"`.

```ts
const arr = realm.types.array([realm.types.number(10), realm.types.number(20)]);

const len = await arr.getAsync("length"); // StaticJsNumber(2)
const first = await arr.getAsync("0"); // StaticJsNumber(10)
```

Arrays behave mostly as plain objects, but their `length` property has special semantics. Trimming `length` removes elements, and setting beyond `length` extends the array.

---

## Properties

Inherits all properties from [`StaticJsObject`](./object.md).

### typeOf

`"object"`

### runtimeTypeOf

`"array"`

---

## Methods

Inherits all methods from [`StaticJsObject`](./object.md).

### toNative()

```ts
toNative(): object
```

Returns a host-side proxy backed by this sandbox array. Index reads, length access, and method calls on the returned object all synchronously invoke sandboxed code.

:::danger[Synchronous code invocation]
Do not call `toNative()` on sandbox arrays unless a time-bounded [`runTaskSync`](../realm.md#runtasksync) is configured. Sandboxed getters or overridden `Array.prototype` methods that loop will deadlock the host.

Prefer the [`StaticJsObject`](./object.md) API (`getAsync("0")`, `getAsync("length")`, etc.) for direct element access.
:::

See [Type Coercion](../../04-type-coercion.md) for the complete coercion rules.

---

## Type guard

### isStaticJsArray(value)

```ts
isStaticJsArray(value: unknown): value is StaticJsArray
```
