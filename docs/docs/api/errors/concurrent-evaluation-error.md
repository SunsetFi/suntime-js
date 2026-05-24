# StaticJsConcurrentEvaluationError

Thrown when a synchronous evaluation is attempted while another task is already running.

**Import**

```ts
import { StaticJsConcurrentEvaluationError } from "@suntime-js/core";
```

---

## Extends

`Error` → `StaticJsConcurrentEvaluationError`

## When thrown

Thrown when you call a synchronous evaluation method (`evaluateScriptSync`, `evaluateExpressionSync`) on a realm that already has an active task in progress. Synchronous evaluations must run to completion before another synchronous evaluation can begin.

To avoid this error, ensure async evaluations have settled before issuing a synchronous one. See [Realms](../realm.md#awaitidle) for how to use `awaitIdle()` and `awaitCurrentTask()`, and [Tasks](../../08-tasks.md) for how to structure task runners.
