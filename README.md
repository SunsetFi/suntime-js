# @suntime-js/core

(static-js was taken (So was js-engine))

A javascript interpreter built on the TC39 ECMAScript 2025 standard, seeking to implement modern language features.

A spiritual successor to [static-eval](https://www.npmjs.com/package/static-eval).

Try it out in [the sandbox](https://sunsetfi.github.io/suntime-js)!

## Sandboxing and Security

Unlike static-eval, this project has ambitions of providing a secure sandbox from which untrusted code can be safely ran.

The fundimental difference with static-eval is that static-js operates entirely against its own implementation of the intrinsic javascript types, complete with its own prototype chain. This seeks to ensure that the code being ran is never able to manipulate the system into accessing the native properties of the underlying native objects, which would allow it to eventually reach a function constructor and therefor gain arbitrary code execution.

Instead, while the code in the sandbox **will** have access to eval() and the function constructor, those functions will instead run their code inside the sandbox, preserving the integrity of the host system.

[More information on StaticJs security](docs/02-security.md)

## What is supported

- Strict directive
- Primitives
- Arrays
- Math
- Promises
- Functions / Arrow functions
- Top-level await
- Async Functions
- Error (and variants)
- Symbols (including engine behavior)
  - Symbol.iterator
  - Symbol.hasInstance
  - Symbol.species
  - Symbol.isConcatSpreadable
  - Symbol.toPrimitive
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

- Generator functions
- All well-known symbols not listed above
- Map, Set
- WeakMap, WeakRef, FinalizationRegistry
- Class syntax
- Date
- Regex
- Iterator.return calls

## Test262 coverage

This project is slowly working its way through the [Test262](https://github.com/tc39/test262) suite of JavaScript tests in order to ensure compliance with the spec.

Currently, around 4800 of the language tests are passing, or about 20%. Further work is ongoing in this area.

## Quick Usage (native JS interop)

StaticJs provides quick functions for evaluating simple code: `evaluateExpressionSync` and `evaluateScriptSync`. These functions take strings as their first argument, and return a [coerced native value](docs/03-type-coersion.md).

Note that these functions will drain all microtasks enqueued during their evaluation before returning. This means that any promise resolutions in the scripts will also be ran to completion.

```ts
import { evaluateExpressionSync } from "@suntime-js/core";

const result = evaluateExpressionSync("2 + 2");
```

For ECMAScript Modules, `evaluateModule` will take a source string as its first argument, and return a promise that resolves to a [StaticJsModule](./docs/05-modules.md#staticjsmodule-type)

**Warning**: Using StaticJs this way is vulnurable to deadlocks with infinite loops, and can introduce security complications where VM code can be unexpectedly invoked through interacting with the resulting values (eg: property getters and setters).

For more information, see [Quick Start](docs/01-quick-start.md).

## TODO:

- Fix 'all' [Test262](https://github.com/tc39/test262) tests.
  - Currently only running tests in the language folder. Need to add built-ins
- Fix host throwing error inside a sandbox promise continuation causing sandbox unhandled rejections.
- Fix test262 unhandled rejections not captured.
  Should be being captured... not sure how its escaping
  See "named-returns-async-arrow.js"
  This is failing in a fascinating way too... somehow the .then() is called 4 times?
- Fix circular imports on modules. There's a skipped test for this.
- Fix task runner not bound to continuations of promises
  - This is really thorny. On the surface, its suprising that a task runner passed to evaluateModule will only work for
    the initial evaluation and not for any runs after await, but it would also be suprising if the await is triggered
    by code that has its own runTask and that runTask isn't used in favor of the root runTask.
    Either way, this probably means we need to store the runTask on the context.
- Report code coverage in repo
  coveralls.io?
  [vitest-coverage-report-action](https://github.com/marketplace/actions/vitest-coverage-report)?
- Get api-extractor working. The only holdup right now is the combine and re-export of the interface and factory function of StaticJsRealm
  - Combine these into one file to make this work?
- Rename toJs to toNative
- Add scope, variable, and stack info to StaticJsTaskIterator for debugging.
- Investigate debugger for monaco
  [Example implementation?](https://github.com/polylith/monaco-debugger)
  [Docs](https://microsoft.github.io/debug-adapter-protocol/overview)
