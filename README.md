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

## Quick Usage (native JS interop)

StaticJs provides quick functions for evaluating simple code: `evaluateExpressionSync` and `evaluateScriptSync`. These functions take strings as their first argument, and return a [coerced native value](docs/03-type-coersion.md).

Note that these functions will drain all microtasks enqueued during their evaluation before returning. This means that any promise resolutions in the scripts will also be ran to completion.

```ts
import { evaluateExpressionSync } from "@suntime-js/core";

const result = evaluateExpressionSync("2 + 2");
```

**Warning**: Using StaticJs this way is vulnurable to deadlocks with infinite loops, and can introduce security complications where VM code can be unexpectedly invoked through interacting with the resulting values (eg: property getters and setters).

For more information, including solutions for breaking loops, see [Quick Start](docs/01-quick-start.md).

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
- Top-level await
- Symbols (including engine behavior)
  - Symbol.iterator
  - Symbol.hasInstance
  - Symbol.species
  - Symbol.isConcatSpreadable
  - Symbol.toPrimitive
  - Symbol.unscopables
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
- WeakMap, WeakRef, FinalizationRegistry
- Class syntax
- Date
- Regex

## Test262 coverage

This project is slowly working its way through the [Test262](https://github.com/tc39/test262) suite of JavaScript tests in order to ensure compliance with the spec.

Currently, around 6200 of the language tests are passing, or about 22%. Further work is ongoing in this area.
