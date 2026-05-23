# StaticJsPlainObject

An ordinary sandboxed object. Equivalent to `{}` or `new Object()` inside the sandbox.

**Import**

```ts
import { type StaticJsPlainObject, isStaticJsPlainObject } from "@suntime-js/core";
```

---

## Extends

[`StaticJsObject`](./object.md) → [`StaticJsPrimitive`](./primitive.md)

## Factory

[`realm.types.object(properties?, prototype?)`](../type-factory.md#objectproperties-prototype)

---

## Overview

`StaticJsPlainObject` is `StaticJsObject` narrowed to `runtimeTypeOf === "object"`. It has no additional properties or methods beyond what `StaticJsObject` provides.

Use `isStaticJsObject` when you want to match any object-like value (arrays, functions, proxies included). Use `isStaticJsPlainObject` when you specifically need a plain `{}` object.

---

## Properties

Inherits all properties from [`StaticJsObject`](./object.md).

### typeOf

`"object"`

### runtimeTypeOf

`"object"`

---

## Methods

Inherits all methods from [`StaticJsObject`](./object.md).

### toNative()

```ts
toNative(): object
```

Returns a host-side proxy backed by this sandbox object. Any property read, write, or method call on the returned object synchronously invokes sandboxed code.

:::danger[Synchronous code invocation]
Do not call `toNative()` on sandbox objects unless a time-bounded [`runTaskSync`](../realm.md#runtasksync) is configured. Sandboxed getters or Proxy traps that loop will deadlock the host.

Prefer the [`StaticJsObject`](./object.md) API (`getAsync`, `setAsync`, `defineOwnPropertyAsync`, etc.) for direct, controlled property access.
:::

See [Type Coercion](../../04-type-coercion.md) for the complete coercion rules.

---

## Type guard

### isStaticJsPlainObject(value)

```ts
isStaticJsPlainObject(value: unknown): value is StaticJsPlainObject
```
