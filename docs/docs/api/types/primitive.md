# StaticJsPrimitive

The base interface shared by every sandbox value.

---

## Overview

`StaticJsPrimitive` is implemented by all [`StaticJsValue`](./value.md) types. It provides identity, type information, and basic coercion on every value in the sandbox.

You rarely use `StaticJsPrimitive` directly; it is a base for the more specific types. Use the concrete type guards (`isStaticJsString`, `isStaticJsObject`, etc.) to narrow to a specific type.

## Implemented by

All sandbox values implement `StaticJsPrimitive`:

- [`StaticJsString`](./string.md)
- [`StaticJsNumber`](./number.md)
- [`StaticJsBoolean`](./boolean.md)
- [`StaticJsNull`](./null.md)
- [`StaticJsUndefined`](./undefined.md)
- [`StaticJsSymbol`](./symbol.md)
- [`StaticJsObject`](./object.md) and all object-like types

---

## Properties

### realm

Type: `StaticJsRealm`

The realm that owns this value. Use `value.realm.types` to create values in the same realm.

### typeOf

Type: `string`

The result of the JavaScript `typeof` operator applied to this value. Matches host `typeof` semantics: `"string"`, `"number"`, `"boolean"`, `"undefined"`, `"symbol"`, `"function"`, or `"object"` (for objects and `null`).

### runtimeTypeOf

Type: `string`

A more precise internal type name. Unlike `typeOf`, this distinguishes between concrete runtime types such as `"array"`, `"null"`, `"proxy"`, and `"function"`.

| `runtimeTypeOf` | Sandbox value         |
| --------------- | --------------------- |
| `"string"`      | `StaticJsString`      |
| `"number"`      | `StaticJsNumber`      |
| `"boolean"`     | `StaticJsBoolean`     |
| `"null"`        | `StaticJsNull`        |
| `"undefined"`   | `StaticJsUndefined`   |
| `"symbol"`      | `StaticJsSymbol`      |
| `"object"`      | `StaticJsPlainObject` |
| `"array"`       | `StaticJsArray`       |
| `"function"`    | `StaticJsFunction`    |
| `"proxy"`       | `StaticJsProxy`       |

### runtimeTypeCode

Type: `StaticJsTypeCode`

A numeric bitmask encoding the value's type and capabilities. Used internally for type checks. Prefer the exported type-guard functions (`isStaticJsString`, `isStaticJsObject`, etc.) over inspecting this directly.

---

## Methods

### toNative()

```ts
toNative(): unknown
```

Returns a host-side representation of this value.

For **scalar values**, `toNative()` returns the unwrapped primitive (e.g., a `number`, `string`, or `boolean`). Prefer reading `.value` directly on a narrowed scalar type instead.

For **object values**, `toNative()` returns a live proxy that delegates property accesses back into the sandbox. Accessing any property on that proxy **may synchronously invoke sandboxed code**.

:::danger[Object proxies and synchronous code invocation]
Only call `toNative()` on objects when a time-bounded [`runTaskSync`](../realm.md#runtasksync) is configured. Unconstrained access can deadlock the host if sandboxed getters contain loops. Prefer the `StaticJsObject` API methods (`getAsync`, `setAsync`, etc.) for direct access.
:::

See [Type Coercion](../../04-type-coercion.md) for the complete coercion rules.

### toStringSync()

```ts
toStringSync(): string
```

Synchronously returns a native string representation of this value. Follows `toString` semantics for the sandbox type.

:::warning
`toStringSync()` may invoke sandboxed code if the value overrides `toString`. Use with a time-bounded task runner, or avoid on untrusted values.
:::

---

## Type guard

There is no type guard for StaticJsPrimitive. Use [`isStaticJsValue`](./value.md#type-guard) instead.
