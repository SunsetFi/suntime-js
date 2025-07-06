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

- Most primitives (including prototypes and constructors)
  - null
  - undefined
  - string
  - number
  - boolean
  - object
  - array
  - function
  - Boxed versions of string / number / boolean
- Strict directive
- Promises
- Async Functions
- Math
- Error (and variants)
- Unary and Binary operators
- for / while / do
- try / catch / finally
- Destructuring
- Spread operators (internal array and object instances only).
- ECMAScript Modules
  - Importing from external APIs
  - Importing from additional code string sources
  - Exports

### Notable things not (yet) supported

- Symbols
- Async Modules
- Iterators and Generators
- Class syntax
- Date
- Regex
- for-of

## Test262 coverage

This project is slowly working its way through the [Test262](https://github.com/tc39/test262) suite of JavaScript tests.

As of 4-26-2025, 6281 of the 23605 tests are passing, or 26%.

## Quick Usage (native JS interop)

**Warning**: Using StaticJs this way is vulnurable to deadlocks when given looping code, and can introduce security complications where VM code can be unexpectedly invoked through interacting with the resulting values (eg: property getters and setters).

StaticJs provides quick functions for evaluating simple code: `evaluateExpression`, `evaluateScript`, and `evaluateModule`. These functions take strings as their first argument, and return a promise to the [coerced native value](docs/03-type-coersion.md).

Note that the promise resolves when all microtasks are complete, not when the macrotask itself completes.

```ts
import { evaluateExpression } from "@suntime-js/core";

const result = await evaluateExpression("2 + 2");
```

For more information, see [Quick Start](docs/01-quick-start.md).

## Detailed Usage

The primary way of interacting with StaticJs is through using a [StaticJsRealm](./04-realms.md)

## TODO:

- **Testing with https://github.com/tc39/test262**
- Switch to sub-imports for lodash-es for tree-shaking
  Not sure why this isnt working. Identical tsconfig and setup to other projects where this works fine.
  Stupid pnpm typescript resolution jank.
- Report code coverage in repo
  coveralls.io?
  [vitest-coverage-report-action](https://github.com/marketplace/actions/vitest-coverage-report)?
- Get api-extractor working. The only holdup right now is the combine and re-export of the interface and factory function of StaticJsRealm
  - Combine these into one file to make this work?
- Get more strict with public api
  - Replace index.ts with public.ts
  - Never import from public.ts except for other public.ts to stop circular refs.
- Clean up ThrowCompletions on utility functions.
  - Currently have a mix of some functions returning ThrowCompletions and some throwing StaticJsRuntimeErrors
  - Decide on one and stick to it.
- Turn the value of ObjectLike.toJs() back into the same instance of StaticJsObjectLike in TypeFactory.toStaticJsValue()
- Reveal information about the current line and character number the generator is at.
  - Also reveal scopes and variables.
- Investigate debugger for monaco
  [Example implementation?](https://github.com/polylith/monaco-debugger)
- Stop .toX functions from using synchronous evaluation, use promises.
  Probably should include a .toXSync
  But don't use these internally!
