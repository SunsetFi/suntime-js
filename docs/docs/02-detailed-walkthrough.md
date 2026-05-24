---
title: Detailed Walkthrough
sidebar_label: Detailed Walkthrough
sidebar_position: 2
---

# Detailed Walkthrough

## Realms

The core unit of StaticJs evaluation is the [StaticJsRealm](./api/realm.md). Realms contain their own unique JavaScript environment, define the global types and prototypes, and contain an execution queue.

Realms can be created with their factory function:

```ts
import { StaticJsRealm } from "@suntime-js/core";

const realm = StaticJsRealm();
```

:::tip
While using `new` is not required, the realm factory will still work correctly with it. You can use it or not at your discression.
:::

## Evaluating your first script

To evaluate script-sourced code, use [`realm.evaluateScript`](./api/realm.md#evaluatescriptscript-opts) or [`realm.evaluateScriptSync`](./api/realm.md#evaluatescriptsyncscript-opts).

```ts
import { StaticJsRealm } from "@suntime-js/core";

const realm = StaticJsRealm();

const code = `
  let result = 0;
  for (let i = 0; i < 10; i++) {
    result = i ** 2;
  }
  result;
`;

const result = await realm.evaluateScript(code);
```

:::warning[Unbounded evaluation]
By default, scripts can take all the time they need to run. In the case of infinite loops, this may result in hanging the browser or runtime. It is best practice to provide a time-bounded [Task Runner](./api/tasks.md). See below for more details.
:::

:::info[Why async?]
You may be wondering why an asynchronous API is provided in the first place. StaticJs is designed in a way that it can run scripts 'asynchronously' by yielding control during script evaluation. In this way, StaticJs is able to properly compute never-ending scripts and infinite loops while still allowing the host runtime or browser window to respond to other events.
:::

## Time-bounding evaluations

In order to enforce a time limit on evaluations, you may specify a [Task Runner](./api/tasks.md).

### Tasks

:::info[Task System Overview]
Tasks are how StaticJs is able to monitor, limit, and evaluate JavaScript asynchronously.

At its core, a task is simpy a JavaScript iterator, where every call to `.next()` permits a single AST node or equivalent unit of evaluation to occur.
:::

:::tip
Tasks can do much more, including providing debugging and introspection into the current call stack. See [Tasks](./08-tasks.md) for more information.
:::

Task runners can be as simple or complex as needed. A minimal synchronous runner just drains the iterator:

```ts
function runTask(task: StaticJsTaskIterator) {
  while (!task.done) {
    task.next();
  }
}
```

Async runners may return before the task completes, yielding to the host between chunks. See [Tasks](./08-tasks.md) for the full task runner API including aborting, introspection, and sync vs async semantics.

### Specifying tasks

Task runners can be set at the realm level ([`runTask`](./api/realm.md#runtask), [`runTaskSync`](./api/realm.md#runtasksync)) or overridden per-call via the [`runTask`](./api/realm.md#runtask) option on any evaluation or object method. See [StaticJsRealm.runTask](./05-realms.md#runtask) and [StaticJsRunTaskOptions](./05-realms.md#staticjsruntaskoptions).

### Built-in task runners

StaticJs provides two robust built-in task runners:

**Time-limited synchronous**

[createTimeBoundTaskRunner](./api/tasks.md#createtimeboundtaskrunneropts) creates a task runner that executes synchronously, but provides an upper time limit on the evaluation.

```ts
import { StaticJsRealm, createTimeBoundTaskRunner } from "@suntime-js/core";

const taskRunner = createTimeBoundTaskRunner({
  // Maximum time in milliseconds the script evaluation can run for.
  maxRunTime: 5_000,

  // Maximum time in milliseconds a single macro or micro task can run for.
  // For advanced use cases.
  maxTaskTime: Infinity,
});

const realm = StaticJsRealm({
  runTask: taskRunner,
  runTaskSync: taskRunner,
});

// Hangs for 5 seconds, then aborts with a StaticJsTaskAbortedError.
const result = await realm.evaluateScript(`while(true) {}`);
```

**Time-sharing asynchronous**

[createTimeSharingTaskRunner](./api/tasks.md#createtimesharingtaskrunneropts) creates an **asynchronous** task runner that will divide time between evaluating the script and allowing the underlying engine to run its own tasks.

Note that this is only usable for asynchronous tasks. Passing this to [`runTaskSync`](./api/realm.md#runtasksync) or other synchronous methods can result in errors.

```ts
import { StaticJsRealm, createTimeSharingTaskRunner } from "@suntime-js/core";

const taskRunner = createTimeSharingTaskRunner({
  // AST nodes / operations to evaluate per iteration
  operationsPerIteration: 10,000

  // How long to yield in milliseconds between iterations
  yieldTime: 100,

  // Maximum time in milliseconds the script evaluation can run for.
  maxRunTime: Infinity,

  // Maximum time in milliseconds a single macro or micro task can run for.
  // For advanced use cases.
  maxTaskTime: Infinity,
});

const realm = StaticJsRealm({
  runTask: taskRunner,
});

// Does not hang the runtime, but the promise never resolves.
const result = await realm.evaluateScript(`while(true) {}`);
```

## Working with types

StaticJs has its own implementation of all type primitives. These are unique to the realm that creates them, and generally cannot be shared between realms.

```ts
const realm = StaticJsRealm();

const obj = await realm.evaluateScript(`
  const obj = {
    foo: true,
    bar: 64,
    get baz() {
      return Math.random();
    }
  }
`);

const myBool = await obj.getAsync("foo");
if (isStaticJsBoolean(myBool)) {
  console.log("Foo is", myBool.value);
}
```

### Creating your own type instances

You can create types using the [TypeFactory](./api/type-factory.md), stored on the realm:

```ts
const myNumber = realm.types.number(42);

const myObj = realm.types.object({
  myProp: {
    value: myNumber,
    enumerable: true,
    writable: false,
  },
});

const myArray = realm.types.array([
  realm.types.number(1),
  realm.types.string("Hello"),
  realm.types.boolean(true),
]);
```

### Common Properties

The common interface among all StaticJs types is [StaticJsPrimitive](./api/types/primitive.md). This provides a few basic properties for interacting with types.

```ts
const myNumber = realm.types.number(42);

// .realm contains the realm that owns the type
const myString = myNumber.realm.types.string("Hello");

// .runtimeTypeOf contains a string indicating the type of the value
// Note that this is not the javascript `typeof` operator, but differentiates
// between the actual type, and includes things such as 'map' and 'proxy'
console.log("myNumber is", myNumber.runtimeTypeOf);
```

### Type Guards

While evaluating code, it is common to get an unknown value and need to determine its root type. Every type has an `is` function provided to type-check the given type, and also serves as a TypeScript type guard function.

```ts
import {
  type StaticJsValue,
  isStaticJsScalar,
  isStaticJsString,
  isStaticJsObject,
} from "@suntime-js/core";

function toString(value: StaticJsValue): string {
  if (isStaticJsScalar(value)) {
    return String(value.value);
  }
  else if (isStaticJsObject(value)) {
    // value to string logic
    return ...;
  }
}
```

:::info[Scalar values]
All scalar types in StaticJs have a 'value' property containing the host-native javascript value of the scalar.
:::

Note that these functions exist for a mix of specific types and type classes. For example, [`isStaticJsScalar`](./api/types/scalar.md#isstaticjsscalarvalue) returns true for values guarded by [`isStaticJsString`](./api/types/string.md#isstaticjsstringvalue), [`isStaticJsNumber`](./api/types/number.md#isstaticjsnumbervalue), and so on. In particular, [`isStaticJsObject`](./api/types/object.md#isstaticjsobjectvalue) returns true for [`isStaticJsFunction`](./api/types/function.md#isstaticjsfunction) and other object-like values.

:::info[Type codes]
The type guard functions work internally by checking the [`.runtimeTypeCode`](./api/types/primitive.md#runtimetypecode) property against the `StaticJsTypeCode` enum. You can use these yourself, but be aware that the type codes are a mix of ordinals and bit flags, and usage might not be as straightforward.
:::

### Native value coercion

All StaticJs values have a [`toNative()`](./api/types/primitive.md#tonative) method that produces a host-proxied representation.

:::danger[toNative() and objects]
While toNative is safe for scalar values, it returns live proxies for objects. Such proxies carry risks, as accessing any property on it may synchronously invoke sandboxed code. Avoid [`toNative()`](./api/types/primitive.md#tonative) on objects unless you have a time-bounded [StaticJsRealm.runTaskSync](./05-realms.md#runtasksync) configured.

Prefer `.value` on scalars (accessible after an [`isStaticJsScalar`](./api/types/scalar.md#isstaticjsscalarvalue) check) and direct [`StaticJsObject`](./api/types/object.md) API methods on objects.
:::

See [Type Coercion](./04-type-coercion.md) for full coercion rules.

### Sandbox value coercion

[`realm.types.toStaticJsValue(nativeValue)`](./api/type-factory.md#tostaticjsvaluevalue) coerces a native value into the sandbox. For objects, this is a shallow-on-demand proxy: only own enumerable properties are exposed, they are read-only, and the prototype is replaced with the sandbox's `Object.prototype`.

:::danger
Avoid [`toStaticJsValue`](./api/type-factory.md#tostaticjsvaluevalue) for objects you intend to mutate inside the sandbox. Prefer creating typed values directly via [`realm.types.object(...)`](./api/type-factory.md#objectproperties-prototype).
:::

See [Type Coercion](./04-type-coercion.md) for the full coercion rules including symbol and function semantics.

### Working with objects

Object types provide a rich API into working with the underlying object.

:::info[Object method semantics]
Most methods you will find on [StaticJsObject](./api/types/object.md) come in triplets:

- getAsync
- getSync
- getEvaluator

The \*Async and \*Sync properties each perform an asynchronous and synchronous invocation respectively. Both of these accept a last options object argument that can accept a `runTask` property, making use of the task runners described above.

The \*Evaluator function is a special case, and should only be used when writing [Evaluator Functions](./09-evaluators.md).
:::

:::warning[Code invocation]
There are many ways in JavaScript for an object property access or reflection to invoke code. Be aware that any time you call a method on an object, you may be invoking sandboxed code. Take care to ensure you use the appropriate task runners.
:::

For the full list of property methods, see [StaticJsObject](./07-types.md#object).

#### Property access

You can perform basic get and set semantics using the `get*` and `set*` methods:

```ts
const realm = StaticJsRealm();

const obj = realm.types.object();

await obj.setAsync(
  "myProp",
  realm.types.number(42),
  { runTask: createTimeBoundTaskRunner({...}) }
);

const value = await obj.getAsync("myProp");
```

#### Property definitions

For more rigidly defining properties, you can use `defineOwnProperty*`:

```ts
const realm = StaticJsRealm();

const obj = realm.types.object();

await obj.defineOwnPropertyAsync("myProp", {
  value: realm.types.number(42),
  enumerable: true,
  writable: false,
  configurable: false,
});
```

As well as use it's opposite, `getProperty*`:

```ts
const def = await obj.getPropertyAsync("myProp");
if (def) {
  console.log("Property is writable:", def.writable);
}
```

#### Prototypes

Prototypes can also be accessed:

```ts
const realm = StaticJsRealm();

const obj = realm.types.object();

const proto = realm.types.object();

const currentProto = await obj.getPrototypeOfAsync();
await obj.setPrototypeOfAsync(proto);
```

For more information, see [StaticJsObject](./api/types/object.md).

### Working with Functions

Functions in StaticJs are worth special consideration, as by their nature they have bidirectional data transfer; accepting arguments and returning values. Additionally, they must be declared in the correct way if you wish your function to participate in async task evaluation.

#### Invoking functions

Invoking functions can be done using the `call*` series of functions. Note that you need to specify the thisArg whenever they are called.

```ts
const realm = StaticJsRealm();

const func = await realm.evaluateScriptSync(`
  function add(a, b) {
    return a + b;
  }
  add;
`);

const result = await func.callAsync(realm.types.undefined, [
  realm.types.number(2),
  realm.types.number(4),
]);

if (isStaticJsNumber(result)) {
  console.log("Result is", result.value);
}
```

You can also invoke functions as constructors:

```ts
const realm = StaticJsRealm();

const ctor = await realm.evaluateScriptSync(`
  class MyIncrementer {
    #inc = 0;

    get amount() {
      return this.#inc;
    }

    set amount(value) {
      this.#inc = value;
    }

    apply(value) {
      return value + this.#inc;
    }
  }
  MyIncrementer;
`);

const instance = await ctor.constructAsync();

await instance.setAsync("amount", realm.types.number(5));

const apply = instance.getAsync("apply");
const result = apply.callAsync(instance, [realm.types.number(10)]);
```

See [StaticJsFunction](./07-types.md#function) for the full `callAsync`, `constructAsync`, and `getNameAsync` API.

#### Defining functions

For best results, functions should be defined as [Evaluator Functions](./09-evaluators.md). Evaluators are special generator functions that are able to be paused and resumed arbitrarily as the task runner dictates.

Evaluators have a few rules:

- Evaluators MUST either be generator functions or return a generator instance.
- Avoid using `*Sync` or `*Async` methods in favor of `*Evaluator`
- Always use `yield*` or otherwise fully delegate `*Evaluator` call generators.
- Always return a [StaticJsValue](./api/types/value.md).
- When throwing errors intended for the sandbox, use [StaticJsRuntimeError](./api/errors/runtime-error.md).

```ts
const sort = realm.types.function("sort", function* (a, b) {
  if (!isStaticJsObject(a) || !isStaticJsObject(b)) {
    const err = realm.types.error("TypeError", "Arguments must be objects");
    throw new StaticJsRuntimeError(err);
  }

  const valueA = yield* a.getEvaluator("value");
  const valueB = yield* b.getEvaluator("value");

  if (!isStaticJsNumber(valueA) || !isStaticJsNumber(valueB)) {
    const err = realm.types.error("TypeError", "Object values must be numbers");
    throw new StaticJsRuntimeError(err);
  }

  return realm.types.number(valueB.value - valueA.value);
});

const realm = StaticJsRealm();

await realm.global.setAsync("sort", sort);

await realm.evaluateScriptSync(`
  const array = [
    { value: 4 },
    { value: 2 },
    { value: 3 },
  ];

  const sorted = array.toSorted(sort);
`);
```

When written in this way, functions you define are able to be paused and resumed by the [Task Iterator](./api/tasks.md) mid-evaluation.

#### Coercing functions

Functions can be coerced in both directions via `toNative()` (sandbox → host) and `toStaticJsValue()` (host → sandbox). Both directions carry the standard coercion caveats: argument and return values are coerced on each call, and method functions on coerced objects retain their original `thisArg`.

See [Type Coercion](./04-type-coercion.md) for the complete rules.

## Working with the global environment

The global enivronment of a realm is exposed through the [`global`](./api/realm.md#global) property. The global property is an instance of [StaticJsObject](./api/types/object.md), and supports all the same methods.

```ts
const realm = StaticJsRealm();

const arrayCtor = await realm.global.getAsync("Array");

const array = await arrayCtor.constructAsync([
  realm.types.number(1),
  realm.types.number(2),
  realm.types.number(3),
]);

await realm.global.setAsync("foo", realm.types.number(42));

const result = await realm.evaluateScriptSync(`
  foo + 10;
`);
```

### Specifying a custom global object

The global object is created at realm creation time, but you can customize it by providing a factory function:

```ts
const realm = StaticJsRealm({
  global: (types) =>
    types.object({
      foo: {
        value: types.number(42),
        enumerable: true,
        configurable: false,
      },
    }),
});
```

:::warning
Whatever global object you define, StaticJs will try to initialize it with the standard JavaScript API globals. If the object returned is not extensible, issues may occur.
:::

:::danger
Never use coerced objects for a global value, as writes to them are a no-op, and the sandboxed environment will be left in a non-functional state.
:::
