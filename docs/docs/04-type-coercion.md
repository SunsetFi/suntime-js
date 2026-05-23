---
title: Type Coercion
sidebar_label: Type Coercion
sidebar_position: 3
---

StaticJs provides a method of converting between StaticJsValue and native objects. This is invoked across several APIs, most notably the shorthand exports `evaluateScript`, `evaluateExpression`, the `toNative` StaticJsValue method, and when coercing native or sandboxed function evaluation.

```ts
import { StaticJsRealm } from "@suntime-js/core";

const realm = StaticJsRealm();

const funcValue = await realm.evaluateScript(`
  function map(array, callback) {
    return array.map(callback);
  }
`);

// Sandboxed function coerced to a native function.
const map = funcValue.toNative();

// The native function is invokable
const result = map([1, 2], (value) => {
  // The callabck was coerced to a sandboxed function,
  // which then gets called.
  // When called, its sandboxed arguments get coerced
  // to native values.
  // When this returns, the return value gets coerced
  // back to a sandboxed value.
  return value * 2;
});
```

:::note
Type coercion is provided for convienence with low-security use cases. The preferred method of dealign with types is to use the [StaticJs Type System](./07-types.md) directly.
:::

## Host to Sandbox

When a value is passed to the sandbox, special care is taken to limit the sandbox access to that object.

### Scalars

Scalars act the same in the host or the sandbox. Boxed scalers will use the sandbox version of the boxing object.

### Objects

#### Host-defined Objects

When an object is proxied from the host to the sandbx, **only own enumerable properties are exposed**, and those properties are **read-only**. Additionally, the prototype of the object is **not proxied**, and the sandbox's object prototype will be used instead.

This is critical for [maintaining security](./03-security.md). Currently, there is no way to opt out of this. If you want passed objects to be mutable, you must [create and use a realm object](./07-types.md#object)

The ability to supply extensible objects, define writable properties, and selectively expose prototypes is planned.

Note that the objects are still linked. Changing, adding, or deleting a property of the object in the host will also change the proxied value in the sandbox.

#### Sandbox-defined Objects (round trip)

When passing an object to the Sandbox that originated in the sandbox, its proxy will be unwrapped to the same instance in the sandbox as was returned from it. In this way, round-tripping an object from the sandbox back into the sandbox will keep the mutability of that object.

### Symbols

#### Well-known symbols

Well-known symbols are preserved across sandbox boundaries. This means things like `Symbol.iterator` on host strings will be coerced to the sandbox symbol, preserving iteration behavior.

```ts
import { evaluateScriptSync } from "@suntime-js/core";

const increment = evaluateScriptSync(`
  function* increment(value, amount) {
    for (const v of value) {
      yield v + amount;
    }
  }
`);

const set = new Set([1, 2, 3]);

// Iterator of our set is preserved in the sandbox
for (const value of increment(set, 4)) {
  console.log(value);
}
```

#### Host-defined symbols

Symbols will be converted to runtime symbols, with their descriptions preserved.

Note that due to javascript semantics, symbols from Symbol.for() will cause a sandbox symbol to be permanently created and never GCd, while symbols created with the Symbol() function will have their proxies GCd when the originating symbol is.

#### Sandbox-defined symbols (round trip)

When passing a symbol to the sandbox that originated in the sandbox, its proxy will be unwrapped and it will be the same instance in the sandbox as was returned from it.

### Functions

Coercing functions from the host to the sandbox will produce a new copy of the function in the sandbox. Additional properties on the function will **not** be carried into the sandbox, and mutations to the function properties will **not** be written back to the host.

When the sandbox invokes the function, all arguments to the function, as well as its this arg, will be proxied according to the [Sandbox to Host](#sandbox-to-host) rules, and the function's return will be proxied into the sandbox with these Host to Sandbox rules.

## Sandbox to Host

:::warning
Sandbox to host coercion generally **should be avoided**, as its usage introduces the possibility of unintentionally and synchronously evaluating sandbox code as a result of property getters and setters.

If you choose to use this, it is **strongly recommended** to time-gate these evaluations using [runTaskSync](./05-realms.md#runtasksync) and the [built-in task runners](./08-tasks.md#built-in-task-runners) on the StaticJsRealm, as the default task runner will run forever and will deadlock for infinite loops.
:::

### Scalars

Scalars are converted to their native forms when being passed to the host.

### Objects

#### Host-defined Objects (round trip)

Objects that were native to the Host that get returned from the sandbox will be unwrapped back into their original forms.

#### Sandbox Objects

Object from the sandbox are transparently proxied into native representations, but all of their attributes remain rooted in the sandbox. This means:

- The entire object prototype chain is proxied, all the way down to Object.prototype.
  `instanceof`, `Array.isArray`, and other things **will not reflect the same values as inside the sandbox**.
- Property getters and setters for sandboxed objects **will be invoked synchronously** if the native js accesses a property.

```ts
import { evaluateScriptSync } from "@suntime-js/core";

const obj = evaluteScriptSync(`
  const obj = {
    get value() {
      // Deadlock
      while(true) {}
    }
  }
`);

// Accessing the property will invoke the getter
// If runTaskSync is not specified, this will deadlock.
obj.value;
```

### Symbols

#### Well-known symbols

Well-known symbols are preserved across sandbox boundaries. This means things like `Symbol.iterator` on sandboxed strings will be coerced to the host's symbol, preserving iteration behavior.

```ts
import { evaluateScriptSync } from "@suntime-js/core";

const map = evaluateScriptSync(`
  const set = new Set(["a", "b", "c"]);
`);

// Iterator is coerced to the native equivalent
for (const value of map) {
  console.log(value);
}
```

#### Host-defined Symbols (round trip)

Symbols that originated on the Host that get returned from the sandbox will be unwrapped back into their original forms.

#### Sandbox Symbols

Sandbox symbols that are not well-known will produce a native symbol to represent them. Their description will be preserved in the host.

### Functions

Functions extend from objects, and are fully proxied and mutable in turn. Additionally, they are callable from the host.

Calling a function from the host will:

- Coerce the 'this' argument to a StaticJs value
- Coerce all arguments to StaticJs values
- Invoke the function synchronously.
- Coerce the result to a native value and return it.
