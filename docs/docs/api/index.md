---
title: API Reference
sidebar_label: API Reference
sidebar_position: 9
---

# API Reference

Complete reference for the `@suntime-js/core` public API.

---

## [StaticJsRealm](./realm.md)

The root object for a sandboxed JavaScript environment. Each realm holds its own prototypes, global object, type factory, and task queue. Everything else in the API is accessed through or created by a realm.

Key members: `types`, `global`, `globalThis`, `evaluateScript`, `evaluateScriptSync`, `evaluateModule`, `awaitIdle`

---

## [StaticJsTypeFactory](./type-factory.md)

Accessed via `realm.types`. Creates and coerces all sandbox values: booleans, numbers, strings, objects, arrays, functions, symbols, and proxies. Also exposes well-known singleton values (`undefined`, `null`, `true`, `false`) and the intrinsic symbol registry.

Key members: `boolean`, `number`, `string`, `object`, `array`, `function`, `error`, `proxy`, `toStaticJsValue`

---

## [StaticJsModule](./modules.md)

Returned by `realm.evaluateModule()` and passed to module resolver callbacks. Exposes named exports as `StaticJsValue` instances or coerced native values. Also documents `StaticJsModuleResolver`, `StaticJsModuleResolution`, and `StaticJsRealmModuleExports`.

Key members: `getExportedNames`, `getExportAsync`, `getExportJsSync`, `getModuleNamespaceAsync`, `getModuleNamespaceJsSync`

---

## [StaticJsTaskIterator](./tasks.md)

The iterator interface passed to task runners. Each call to `.next()` evaluates one operation in the sandbox. Exposes introspection (`location`, `stack`, `currentTaskType`) and control (`abort`, `throw`).

Also documents the built-in task runners `createTimeBoundTaskRunner` and `createTimeSharingTaskRunner`.

Key members: `done`, `async`, `next()`, `abort()`, `location`, `stack`

---

## [Types](./types/index.md)

The core types used by StaticJs.

| Type                                           | Description                                       |
| ---------------------------------------------- | ------------------------------------------------- |
| [StaticJsValue](./types/value.md)              | Union of all sandbox values                       |
| [StaticJsPrimitive](./types/primitive.md)      | Base interface: `realm`, `typeOf`, `toNative()`   |
| [StaticJsScalar](./types/scalar.md)            | Union of scalar types (exposes `.value`)          |
| [StaticJsObject](./types/object.md)            | Base for all object-like types; full property API |
| [StaticJsString](./types/string.md)            | Sandboxed string                                  |
| [StaticJsNumber](./types/number.md)            | Sandboxed number                                  |
| [StaticJsBoolean](./types/boolean.md)          | Sandboxed boolean                                 |
| [StaticJsNull](./types/null.md)                | Sandboxed `null`                                  |
| [StaticJsUndefined](./types/undefined.md)      | Sandboxed `undefined`                             |
| [StaticJsSymbol](./types/symbol.md)            | Sandboxed symbol                                  |
| [StaticJsPlainObject](./types/plain-object.md) | Plain `{}` object                                 |
| [StaticJsArray](./types/array.md)              | Array instance                                    |
| [StaticJsFunction](./types/function.mdx)       | Function and callable interface                   |
| [StaticJsProxy](./types/proxy.md)              | Proxy object                                      |

---

## [Errors](./errors/engine-error.md)

Error classes thrown by the runtime or surfaced through evaluation.

| Class                                                                                   | When thrown                                                                      |
| --------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| [StaticJsEngineError](./errors/engine-error.md)                                         | Internal interpreter bug or unsupported host API usage                           |
| [StaticJsSyntaxError](./errors/syntax-error.md)                                         | Source text could not be parsed                                                  |
| [StaticJsRuntimeError](./errors/runtime-error.md)                                       | Sandboxed code threw a value that propagated out of the sandbox                  |
| [StaticJsUnhandledRejectionError](./errors/unhandled-rejection-error.md)                | A sandbox `Promise` was rejected with no rejection handler                       |
| [StaticJsConcurrentEvaluationError](./errors/concurrent-evaluation-error.md)            | A synchronous evaluation was attempted while another task was already running    |
| [StaticJsSynchronousTaskIncompleteError](./errors/synchronous-task-incomplete-error.md) | A synchronous task runner returned without fully draining the task iterator      |
| [StaticJsTaskError](./errors/task-error.md)                                             | Base class for task lifecycle errors                                             |
| [StaticJsTaskCompletedError](./errors/task-completed-error.md)                          | A task method was called after the task already finished                         |
| [StaticJsTaskAbortedError](./errors/task-aborted-error.md)                              | A task method was called on an aborted task, or used as the default abort reason |
