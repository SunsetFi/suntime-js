# StaticJsNull

The sandboxed `null` value.

**Import**

```ts
import { type StaticJsNull, isStaticJsNull } from "@suntime-js/core";
```

---

## Extends

[`StaticJsPrimitive`](./primitive.md)

## Factory

`realm.types.null` (singleton property)

---

## Properties

Inherits all properties from [`StaticJsPrimitive`](./primitive.md).

### value

Type: `null`

Always `null`.

### typeOf

`"object"`

Note: this matches JavaScript's `typeof null === "object"` behavior.

### runtimeTypeOf

`"null"`

Use this to distinguish `null` from plain objects.

---

## Type guard

### isStaticJsNull(value)

```ts
isStaticJsNull(value: unknown): value is StaticJsNull
```
