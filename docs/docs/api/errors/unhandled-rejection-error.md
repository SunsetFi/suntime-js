# StaticJsUnhandledRejectionError

Thrown when a sandbox `Promise` is rejected with no rejection handler.

**Import**

```ts
import { StaticJsUnhandledRejectionError } from "@suntime-js/core";
```

---

## Extends

`Error` → [`StaticJsRuntimeError`](./runtime-error.md) → `StaticJsUnhandledRejectionError`

## When thrown

Thrown after the realm's microtask queue has been fully drained and one or more `Promise` rejections were never handled. Typically surfaces during `realm.awaitIdle()` or at the end of an async evaluation. The `thrown` property (inherited from [`StaticJsRuntimeError`](./runtime-error.md)) holds the rejection reason as a sandboxed value.

## Properties

Inherits [`thrown`](./runtime-error.md#thrown) from [`StaticJsRuntimeError`](./runtime-error.md).
