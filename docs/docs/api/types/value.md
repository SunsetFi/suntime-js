# StaticJsValue

The union of all values that can exist inside a StaticJs sandbox.

**Import**

```ts
import { type StaticJsValue, isStaticJsValue } from "@suntime-js/core";
```

---

## Overview

`StaticJsValue` is the top-level type for anything produced or consumed by the evaluator. Every sandbox value is a `StaticJsValue`.

All values carry a [`realm`](./primitive.md#realm) reference and implement the [`StaticJsPrimitive`](./primitive.md) base interface. Object-like values additionally implement [`StaticJsObject`](./object.md).

Values created by one realm **cannot** be shared with another realm.

## Member types

| Type                                       | Description               | Type guard                                                              |
| ------------------------------------------ | ------------------------- | ----------------------------------------------------------------------- |
| [`StaticJsString`](./string.md)            | A sandboxed string        | [`isStaticJsString`](./string.md#isstaticjsstringvalue)                 |
| [`StaticJsNumber`](./number.md)            | A sandboxed number        | [`isStaticJsNumber`](./number.md#isstaticjsnumbervalue)                 |
| [`StaticJsBoolean`](./boolean.md)          | A sandboxed boolean       | [`isStaticJsBoolean`](./boolean.md#isstaticjsbooleanvalue)              |
| [`StaticJsNull`](./null.md)                | The sandboxed `null`      | [`isStaticJsNull`](./null.md#isstaticjsnullvalue)                       |
| [`StaticJsUndefined`](./undefined.md)      | The sandboxed `undefined` | [`isStaticJsUndefined`](./undefined.md#isstaticjsundefinedvalue)        |
| [`StaticJsSymbol`](./symbol.md)            | A sandboxed symbol        | [`isStaticJsSymbol`](./symbol.md#isstaticjssymbolvalue)                 |
| [`StaticJsPlainObject`](./plain-object.md) | A plain sandbox object    | [`isStaticJsPlainObject`](./plain-object.md#isstaticjsplainobjectvalue) |
| [`StaticJsArray`](./array.md)              | A sandbox array           | [`isStaticJsArray`](./array.md#isstaticjsarrayvalue)                    |
| [`StaticJsFunction`](./function.mdx)       | A sandbox function        | [`isStaticJsFunction`](./function.mdx#isstaticjsfunction)               |

Two grouping supertypes are also useful:

| Supertype                       | Covers                                           | Type guard                                              |
| ------------------------------- | ------------------------------------------------ | ------------------------------------------------------- |
| [`StaticJsScalar`](./scalar.md) | String, Number, Boolean, Null, Undefined, Symbol | [`isStaticJsScalar`](./scalar.md#isstaticjsscalarvalue) |
| [`StaticJsObject`](./object.md) | PlainObject, Array, Function, Symbol, Proxy      | [`isStaticJsObject`](./object.md#isstaticjsobjectvalue) |

Note that `StaticJsSymbol` appears in both groups: it is a scalar in JavaScript semantics but implements the full `StaticJsObject` interface internally to support `Symbol.prototype` method access.

---

## Type guard

### isStaticJsValue(value)

```ts
isStaticJsValue(value: unknown): value is StaticJsValue
```

Returns `true` if `value` is any sandbox value. Useful as a narrowing check before passing values to APIs that expect `StaticJsValue`.
