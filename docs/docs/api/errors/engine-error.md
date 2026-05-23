# StaticJsEngineError

Indicates an internal error in the interpreter.

**Import**

```ts
import { StaticJsEngineError } from "@suntime-js/core";
```

---

## Extends

`Error` → `StaticJsEngineError`

## When thrown

Surfaces when the engine reaches an unexpected internal state. You should not normally encounter this; if you do, it represents either a bug in `@suntime-js/core` or usage of internal APIs in an unsupported way.
