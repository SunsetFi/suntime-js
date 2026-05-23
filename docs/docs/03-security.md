---
title: Security
sidebar_label: Security
sidebar_position: 2
---

This project intends to do its best to sandbox the evaluated code from the host system. That is, the evaluated code should not be capable of referencing or manipulating any part of the host that was not passed into the sandbox explicitly.

However, it should be noted that care must be taken by the implementer to ensure this guarantee remains in place. Code inside the sandbox will have access to anything you give it, so it is up to you to not pass more than you intend.

The safest way to use StaticJs is to always manually create StaticJs objects and functions using the Realm. This ensures that you do not leak any host concerns through the prototype. However, there is a [bidirectional native to sandbox coercing system](./04-type-coercion.md) which coerces passed objects to StaticJs sandbox types, enforces read-only access, and only exposes enumerable properties.

:::danger
This project has not been security audited. Take care when using it for critical applications.
:::

## Writing secure sandbox interop code.

When interoping with sandbox code, it is **strongly encouraged** that you always deal directly with [StaticJs Types](./07-types.md), and **do not use native interop / type coercion features**. Type coercion may result in unexpected and synchronous sandbox invocations at any time, as Proxies and property accessors may be returned to you. Additionally, coercion can easily result in granting sandbox access to properties you did not intend.

There are a few rules to keeping sandboxed code from misbehaving:

- Always specify a [runTask](./05-realms.md#runtask) and [runTaskSync](./05-realms.md#runtasksync) [Task Scheduler](./08-tasks.md). These are critical to prevent infinite loops and runaway code.
- Always use the [Type Factory](./07-types.md) and StaticJs type objects, to ensure you know where you are potentially evaluating sandboxed code.
- Avoid [toNative](./07-types.md#staticjsvalue) and [Type Coercion](./04-type-coercion.md), to avoid accidentally invoking sandboxed code unexpectedly.

### Objects

Receiving sandboxed objects as native values can produce problematic code, as the sandbox can return proxies or object property accessors that may synchronously evaluate code on interacting with the object:

```ts
import { evaluateScript } from "@suntime-js/core";
const value = evaluateScript(`
  const obj = new Proxy({}, {
    ownKeys: () => {
      // Deadlock
      while(true) {}
    }
  });
  obj;
`);

// Invoking sandboxed code here may be unexpected.
// This will cause a deadlock, as runTaskSync was never specified.
const Object.keys(value);
```

Use [StaticJs Types](./07-types.md) instead:

```ts
import { StaticJsRealm, createTimeBoundTaskRunner } from "@suntime-js/core";

const realm = StaticJsRealm({
  runTask: createTimeBoundTaskRunner({ maxRunTime: 500 }),
});
const value = evaluateScript(`
  const obj = new Proxy({}, {
    ownKeys: () => {
      // Deadlock
      while(true) {}
    }
  });
  obj;
`);

// Will await the 500 millisecond response time,
// then abort the task.
// You can optionally supply a custom runTask
// to ownEnumerableKeysAsyc directly
const keys = await value.ownEnumerableKeysAsync();
```

#### With Coercion

While it is strongly advised to avoid type coercion, the type coercion system does attempt to provide some degree of security when passing in native objects:

```js
const targetObj = {
  _value: "target",
  get foo() {
    return this._value;
  },
};

const myOtherObject = {
  _value: "other-object",
};

const realm = StaticJsRealm({
  global: {
    properties: {
      targetObj: {
        // Direct usage of a native object performs type coercion.
        value: nativeObj,
      },
      myOtherObject: {
        // Direct usage of a native object performs type coercion.
        value: myOtherObject,
      },
    },
  },
});

realm.evaluateScript(`
  // Properties can NOT be modified; will no-op
  myObject._value = "my-sandbox";
  
  // Alternative 'this' invokes for property getters
  // will NOT be honored:
  const descr = Object.getOwnPropertyDescriptor(myObj, "foo");
  // Still stays "target":
  const value = descr.get.call(myOtherObject); 
`);
```

### Writing Functions

Functions in StaticJs are typically outwardly-async, even when the sandboxed evaluation is synchronous. This is to allow time-sharing and interrupting evaluation through the [Task System](./08-tasks.md). This is implemented using JavasScript Generators rather than async / promises, as this allows the function to be paused at key checkpoints; usually before every AST node evaluation.

When creating functions, you should use \*Evaluator() function calls on the sandboxed types to preserve this async nature.

**Incorrect**

```ts
const add = realm.types.function("myFunc", (a, b) => {
  // Incorrect: Synchronous evaluation cannot be
  // time-shared and invokes runTaskSync on the realm.
  const aValue = a.getSync("value");
  const bValue = b.getSync("value");

  if (!isStaticJsNumber(aValue) || !isStaticJsNumber(bValue)) {
    // Potentially incorrect: Native errors
    // will not be captured by try / catch in
    // the sandbox, and instead immediately
    // bubble up to the host.
    throw new TypeError("value must be a number");
  }

  return realm.types.number(aValue.value + bValue.value);
});
```

**Correct**

```ts
const func = realm.types.function("myFunc", function* (a, b) {
  // Correct: Evaluators will run through the task system
  // and may be asynchronous to the host.
  const aValue = yield* a.getEvaluator("value");
  const bValue = yield* b.getEvaluator("value");

  if (!isStaticJsNumber(aValue) || !isStaticJsNumber(bValue)) {
    // Correct: Throwing a sandbox object will get captured by try/catch
    // within the sandbox.
    // This works with or without a wrapping StaticJsRuntimeError()
    throw realm.types.error("TypeError", "value must be a number");
  }

  return realm.types.number(aValue.value + bValue.value);
});
```

For a complete guide to writing host functions including the generator pattern, see [Runtime Function](./07-types.md#function).

### Invoking Functions

Don't use type coercion, and use the Async evaluators

**Incorrect**

```ts
import { evaluateScript } from "@suntime-js/core";

const func = evaluateScript(`
  function add(a, b) {
    // Returns an object that can unexpectedly run sandbox code.
    return {
      [Symbol.toPrimitive]() {
        // Deadlock
        while(true) {}
      }
    }
  }
  add;
`);

// Incorrect: Creates a function with type coercion
//  - The Function itself may not terminate and
//    deadlock behind runTaskSync
//  - The Function may return values that unexpectedly run
//    sandboxed code synchronously.
const native = func.toNative();
// Will deadlock without a realm-supplied runTaskSync
const result = Number(func(1, 2));
```

**Correct**

```ts
import { StaticJsRealm, createTimeSharingTaskRunner } from "@suntime-js/core";

const realm = StaticJsRealm({
  runTask: createTimeSharingTaskRunner({ maxRunTime: 5_000 }),
});

const func = realm.evaluateScript(`
  function add(a, b) {
    // Returns an object that can unexpectedly run sandbox code.
    return {
      [Symbol.toPrimitive]() {
        // Deadlock
        while(true) {}
      }
    }
  }
  add;
`);

// runTask will be used, so the function call will be time-gated.
// With time sharing, the host is free to do other things
// while this runs.
const returnValue = await func.callAsync(
  realm.types.undefined,
  realm.types.number(1),
  realm.types.number(2),
);

if (!isStaticJsNumber(result)) {
  // User didn't return a real number
  throw new Error("Did not receive a number");
}

// Get the value safely, without invoking sandbox code.
const result = returnValue.value;
```

For worked examples of safely invoking sandbox functions, see [Invoking Functions](./02-detailed-walkthrough.md#invoking-functions).

## Traditionally problematic code

There are a few vectors that enable arbitrary code execution on the host if the sandbox is ever able to gain access to such components. Most of these come from JavaScript features that allow strings to be evaluated as code:

- eval
- Function constructors
- setImmediate
- setTimeout

The first two are easy to handle, as the sandbox fully implements both, and they each will invoke further sandbox code. The second two are currenty unimplemented.

### Function Constructors

Function constructors should bear much more scrutiny, as they are often accessible in unintended ways.

Function constructors are able to take strings to define the function with:

```ts
Function("console.log('hello')")();
```

This looks straightforward, but the problem lies in the fact that function constructors are reachable from almost any object, allowing for code like:

```ts
const objectConstructor = {}.constructor;
const functionConstructor = objectConstructor.constructor;
functionConstructor("console.log('hello')")();
```

When run inside the sandbox, this will be fine, as the function constructor it will access is the sandboxed function constructor, which mantains the sandbox when invoked.

However, where things get risky is when native objects are passed into the system. For example:

```ts
const realm = StaticJsRealm({
  global: {
    properties: {
      myObject: {
        writable: false,
        value: {},
      },
    },
  },
});

const attackStr = `myObject.constructor.constructor("console.log('hello')")()`;
evaluateExpression(attackStr, { realm });
```

Despite this, this code **will still remain secure**. This is because incoming objects are [coerced](./04-type-coercion.md), and a proxy object is used instead. This proxy only allows read-only access to enumerable properties, and **does not expose the native object's prototype**. Instead, the sandboxed Object prototype is used.

## Host Fingerprinting and Determinism

Many areas of JavaScript are left up to "host-implementation". As such, these function implementations can vary across runtimes. This has a few undesirable effects when used in a sandbox:

- Identical sandboxed code may behave differently on different engines
- The host engine may be determined by inspecting variance in these behaviors

For example, the sin, cost, and tan functions of Math can yield different values for the same input between Chrome and Firefox browsers. Beyond this, there are some methods that by their nature return inconsistent values, such as Math.random() and Date.now().

All of these can be made consistent across invocations providing deterministic implementations to the StaticJsRealm for such behaviors. This can be done through utilizing the realm's [Host Hooks](./05-realms.md#hooks) option.

Note that Suntime-Js defaults to the **engine-implemented behavior** for all hooks. You will need to provide your own implementations if you want to make them deterministic.
