# @suntime-js/core

(static-js was taken (So was js-engine))

A (work in progress) JavaScript interpreter built on the TC39 ECMAScript standard, implementing asyncronous / non-blocking execution, sandboxing, modern language features, and full debugging support.

A spiritual successor to [static-eval](https://www.npmjs.com/package/static-eval).

Try it out in [the sandbox](https://sunsetfi.github.io/suntime-js)!

## Spec Compliance

This project is being ran against the Test262 test suite to ensure spec compliance. This is a work-in-progress, and full coverage has not yet been obtained.

Current progress: ![Test262 Language Suite](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FSunsetFi%2Fsuntime-js%2Frefs%2Fheads%2Fmain%2Fpackages%2Fcore%2Fbadges%2Ftest262.json)

## Sandboxing and Security

Unlike static-eval, this project has ambitions of providing a secure sandbox from which untrusted code can be safely ran.

The fundimental difference with static-eval is that static-js operates entirely against its own implementation of the intrinsic javascript types, complete with its own prototype chain. This seeks to ensure that the code being ran is never able to manipulate the system into accessing the native properties of the underlying native objects, which would allow it to eventually reach a function constructor and therefor gain arbitrary code execution.

Instead, while the code in the sandbox **will** have access to eval() and the function constructor, those functions will instead run their code inside the sandbox, preserving the integrity of the host system.

[More information on StaticJs security](docs/02-security.md)

## Quick Usage (native JS interop)

StaticJs provides quick functions for evaluating simple code: `evaluateExpressionSync` and `evaluateScriptSync`. These functions take strings as their first argument, and return a [coerced native value](docs/03-type-coersion.md).

Note that these functions will drain all microtasks enqueued during their evaluation before returning. This means that any promise resolutions in the scripts will also be ran to completion.

```ts
import { evaluateExpressionSync } from "@suntime-js/core";

const result = evaluateExpressionSync("2 + 2");
```

**Warning**: Using StaticJs this way is vulnurable to deadlocks with infinite loops, and can introduce security complications where VM code can be unexpectedly invoked through interacting with the resulting values (eg: property getters and setters).

For more information, including solutions for breaking loops, see [Quick Start](docs/01-quick-start.md).

## Detailed example

```js
import { StaticJsRealm, createTimeSharingTaskRunner } from "@suntime-js/core";

let myModuleResolveAwait;
const realm = StaticJsRealm({
  runTask: createTimeSharingTaskRunner({
    yieldTime: 100,
    operationsPerIteration: 1000,
    maxRunTime: 60 * 1000
  }),
  global: {
    properties: {
      sayHello: {
        value: () => console.log("Hello World");
      },
      registerCallback: {
        value: (cb) => myModuleResolveAwait = cb;
      }
    }
  },
  modules: {
    "my-module": `
      const { promise, resolve } = Promise.withResolvers();
      registerCallback(resolve);
      await promise;
      export const foo = 42;
    `
  }
});

const module = await realm.evaluateModule(`
  import { foo } from "my-module";
  export function addFoo(value) {
    return value + foo;
  }
`);

myModuleResolveAwait();

const addFoo = await module.getExportAsync("addFoo");

const result = await addFoo.callAsync(realm.types.undefined, realm.types.number(10));
```

## What is supported

- Strict directive
- Primitives
- Arrays
- Set, Map
- Math
- Error (and variants), try / catch
- Promises
- Functions / Arrow functions
- Async Functions
- Generator functions
- Async generator functions
- Top-level await
- Symbols (including engine behavior)
  - Symbol.iterator
  - Symbol.hasInstance
  - Symbol.species
  - Symbol.isConcatSpreadable
  - Symbol.toPrimitive
  - Symbol.unscopables
  - Symbol.toStringTag
- Control flow / loops
- Unary and binary operators
- Destructuring
- Spread operators (including Symbol.iterator usage)
- eval / Function constructor.
- ECMAScript Modules
  - Async modules
  - Exports
  - Importing from host-defined modules
  - Importing from sandboxed modules

### Notable things not (yet) supported

- All well-known symbols not listed above
- WeakMap, WeakRef, FinalizationRegistry
- Class syntax
- Date
- Regex
- Proxy

## Test262 coverage

Current status:

![Test262 Language Suite](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FSunsetFi%2Fsuntime-js%2Frefs%2Fheads%2Fmain%2Fpackages%2Fcore%2Fbadges%2Ftest262.json)
