# StaticJsRuntimeError

Wraps a value thrown inside the sandbox so it can propagate through host code.

**Import**

```ts
import { StaticJsRuntimeError } from "@suntime-js/core";
```

---

## Extends

`Error` → `StaticJsRuntimeError`

## When thrown

Thrown when sandboxed code throws a value that propagates out of the sandbox uncaught. Surfaces as a rejected promise from `evaluateScript`, `evaluateExpression`, and `evaluateModule`, or as a thrown error from `evaluateScriptSync` and `evaluateExpressionSync`. The `thrown` property holds the sandboxed value exactly as the script threw it.

```ts
try {
  realm.evaluateScriptSync(`throw new Error("oops")`);
} catch (e) {
  if (e instanceof StaticJsRuntimeError) {
    // e.thrown is the sandbox Error object
    const msg = e.thrown.getSync("message");
    console.log(msg.value); // "oops"
  }
}
```

## Properties

### thrown

Type: `StaticJsValue`

The sandboxed value that was thrown.
