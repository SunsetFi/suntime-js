---
title: Evaluator
sidebar_label: Evaluators
sidebar_position: 8
---

# Evaluators

In order to allow script runtime functions to pause and resume at key checkpoints, StaticJs uses Generators and Generator Functions. Because of this, all code intended to run within the scope of the sandboxed evaluation must be a generator.

:::info
The primary place evaluators are used is in the [Function Type Factory](./api/type-factory.md#functionname-func-opts).
:::

## EvaluationGenerator

The common return type of all Evaluators is `EvaluationGenerator<TReturn>`:

```ts
export type EvaluationGenerator<TReturn = Completion.Normal> = Generator<
  EvaluatorCommand,
  TReturn,
  Completion.Normal
>;
```

The generic parameter of EvaluationGenerator contains the final return type of the generator. The core EvaluationGenerator type will default this to a `Completion`, but for users of the library, this is almost always overridden and simplified.

:::info
`EvaluatorCommand` and `Completion` are internal details of the evaluator, and typically you do not need to interact with them.

The EvaluationGenerator type defaults its return type to a Completion. However, in practice, all of your evaluators should explicitly indicate a return type, typically StaticJsValue.
:::

## Implementing Evaluators

Evaluator functions most often take the form of generator functions, which are denotated by an asterisk (`*`) on the function keyword. Evaluator functions also delegate (using `yield *`) to other evaluator generators when interacting with StaticJsValue objects. By keeping the chain of generators, the [Task Iterator](./api/tasks.md) is able to halt evaluation at any operation node, to either yield time to the engine, to pause evaluation during debugging, or to abort the operation entirely.

```ts
function* setIfNotExists(obj: StaticJsObject, property: StaticJsPropertyKey, value: StaticJsValue) {
  const hasProperty = yield* obj.hasPropertyEvaluator(property);
  if (hasProperty) {
    return;
  }

  yield* obj.setEvaluator(property, value);
}
```

If you want to throw an error that is catchable by a try/catch wrapping your evaluator function, you need to wrap your error in a [StaticJsRuntimeError](./api/errors/runtime-error.md). This error holds special semantics both inside and out of the evaluator, and is used to package thrown [StaticJsValue](./api/types/value.md) items across the library's API surface.

The error itself takes a single parameter — the thrown [StaticJsValue](./api/types/value.md) that will be caught by any try / catch.

By throwing this error, you can emit an error that is catchable by sandboxed code:

```ts
function* setOrError(obj: StaticJsObject, property: StaticJsPropertyKey, value: StaticJsValue) {
  const hasProperty = yield* obj.hasPropertyEvaluator(property);
  if (hasProperty) {
    const err = realm.types.error("Error", "Property is already set");
    throw new StaticJsRuntimeError(err);
  }

  yield* obj.setEvaluator(property, value);
}
```

When writing evaluators, always follow these rules:

- Evaluators MUST either be generator functions, or return a generator instance.
- Avoid using `*Sync` or `*Async` methods in favor of `*Evaluator`
- Always use `yield*` or otherwise fully delegate `*Evaluator` call generators.
- Always return a [StaticJsValue](./api/types/value.md).
- When throwing errors intended for the sandbox, use [StaticJsRuntimeError](./api/errors/runtime-error.md).

:::warning
Using `*Sync` or `*Async` functions here would start a brand new evaluation task that is beyond the reach of the current running task iterator, and not be interruptable or subject to the same time constraints or time sharing.
:::

:::warning
Always ensure you `yield*` the results of all `*Evaluator` functions. Failing to do so will not create any type errors, but ultimately will cause that function to never evaluate, resulting in a no-op.
:::

## Usage

Generally, evaluators are used by the [Type Factory](./api/type-factory.md#functionname-func-opts) when declaring functions for the sandbox. However, you can make your own individual evaluator functions, so long as the initial entrypoint of the call stack is within one such function factory.
