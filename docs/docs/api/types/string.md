# StaticJsString

A sandboxed string value.

**Import**

```ts
import { type StaticJsString, isStaticJsString } from "@suntime-js/core";
```

---

## Extends

[`StaticJsPrimitive`](./primitive.md)

## Factory

[`realm.types.string(value)`](../type-factory.md#stringvalue)

---

## Properties

Inherits all properties from [`StaticJsPrimitive`](./primitive.md).

### value

Type: `string`

The native host string wrapped by this sandbox value.

### typeOf

`"string"`

### runtimeTypeOf

`"string"`

---

## Type guard

### isStaticJsString(value)

```ts
isStaticJsString(value: unknown): value is StaticJsString
```
