# StaticJsScalar

The union of all scalar (non-compound) sandbox values.

**Import**

```ts
import { type StaticJsScalar, isStaticJsScalar } from "@suntime-js/core";
```

---

## Overview

`StaticJsScalar` covers all sandbox values that carry a single primitive host value. Each scalar type exposes that value through a `.value` property.

Scalars implement [`StaticJsPrimitive`](./primitive.md) and are part of the [`StaticJsValue`](./value.md) union.

:::note[Symbols]
`StaticJsSymbol` is included in the scalar union because it is a primitive in JavaScript semantics. However, its interface also extends [`StaticJsObject`](./object.md) to support `Symbol.prototype` method access inside the sandbox.
:::

## Member types

| Type                                  | `.value` type | Type guard                                                       |
| ------------------------------------- | ------------- | ---------------------------------------------------------------- |
| [`StaticJsString`](./string.md)       | `string`      | [`isStaticJsString`](./string.md#isstaticjsstringvalue)          |
| [`StaticJsNumber`](./number.md)       | `number`      | [`isStaticJsNumber`](./number.md#isstaticjsnumbervalue)          |
| [`StaticJsBoolean`](./boolean.md)     | `boolean`     | [`isStaticJsBoolean`](./boolean.md#isstaticjsbooleanvalue)       |
| [`StaticJsNull`](./null.md)           | `null`        | [`isStaticJsNull`](./null.md#isstaticjsnullvalue)                |
| [`StaticJsUndefined`](./undefined.md) | `undefined`   | [`isStaticJsUndefined`](./undefined.md#isstaticjsundefinedvalue) |
| [`StaticJsSymbol`](./symbol.md)       | `symbol`      | [`isStaticJsSymbol`](./symbol.md#isstaticjssymbolvalue)          |

---

## Type guard

### isStaticJsScalar(value)

```ts
isStaticJsScalar(value: StaticJsValue): value is StaticJsScalar
```

Returns `true` for any of the scalar member types above. Use this to branch before reading `.value`:

```ts
import { isStaticJsScalar } from "@suntime-js/core";

if (isStaticJsScalar(value)) {
  console.log(value.value); // string | number | boolean | null | undefined | symbol
}
```
