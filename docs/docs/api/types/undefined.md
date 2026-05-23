# StaticJsUndefined

The sandboxed `undefined` value.

**Import**

```ts
import { type StaticJsUndefined, isStaticJsUndefined } from "@suntime-js/core";
```

---

## Extends

[`StaticJsPrimitive`](./primitive.md)

## Factory

`realm.types.undefined` (singleton property)

---

## Properties

Inherits all properties from [`StaticJsPrimitive`](./primitive.md).

### value

Type: `undefined`

Always `undefined`.

### typeOf

`"undefined"`

### runtimeTypeOf

`"undefined"`

---

## Type guard

### isStaticJsUndefined(value)

```ts
isStaticJsUndefined(value: unknown): value is StaticJsUndefined
```
