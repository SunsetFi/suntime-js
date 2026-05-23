# StaticJsSymbol

A sandboxed symbol value.

**Import**

```ts
import { type StaticJsSymbol, isStaticJsSymbol } from "@suntime-js/core";
```

---

## Overview

`StaticJsSymbol` is classified as a scalar in JavaScript semantics (it appears in the [`StaticJsScalar`](./scalar.md) union and `isStaticJsScalar` returns `true` for it), but its interface also extends [`StaticJsObject`](./object.md). This lets the sandbox support `Symbol.prototype` method access internally.

For most host code, treat `StaticJsSymbol` like any other scalar: read `.value` to get the native symbol, and use `isStaticJsSymbol` to narrow.

## Extends

[`StaticJsObject`](./object.md) → [`StaticJsPrimitive`](./primitive.md)

Also included in [`StaticJsScalar`](./scalar.md).

## Factory

[`realm.types.symbol(description?)`](../type-factory.md#symboldescription)

Well-known symbols: [`realm.types.symbols`](../type-factory.md#symbols)

---

## Properties

Inherits all properties from [`StaticJsPrimitive`](./primitive.md).

### value

Type: `symbol`

The native host `symbol` wrapped by this sandbox value.

### description

Type: `string | undefined`

The optional description string of the symbol, equivalent to `Symbol.prototype.description`.

### typeOf

`"symbol"`

### runtimeTypeOf

`"symbol"`

---

## Methods

Inherits all methods from [`StaticJsObject`](./object.md).

### toNative()

```ts
toNative(): symbol
```

Returns the native host `symbol`. This is Safe to call, as symbols coerce to a plain native `symbol` with no proxy indirection.

See [Type Coercion](../../04-type-coercion.md) for the complete coercion rules.

---

## Type guard

### isStaticJsSymbol(value)

```ts
isStaticJsSymbol(value: unknown): value is StaticJsSymbol
```
