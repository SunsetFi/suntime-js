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
- Iterator.return calls

## Test262 coverage

This project is slowly working its way through the [Test262](https://github.com/tc39/test262) suite of JavaScript tests in order to ensure compliance with the spec.

Currently, around 5700 of the language tests are passing, or about 24%. Further work is ongoing in this area.

## TODO:

- Fix 'all' [Test262](https://github.com/tc39/test262) tests.
  - Currently only running tests in the language folder. Need to add built-ins
- function `arguments` object
- Make invokeEvaluatorSync use runTaskSync
- Rework modules to be more spec compliant with regard to linking and evaluation.
- Fix task runner not bound to continuations of promises
  - This is really thorny. On the surface, its suprising that a task runner passed to evaluateModule will only work for
    the initial evaluation and not for any runs after await, but it would also be suprising if the await is triggered by code that has its own runTask and that runTask isn't used in favor of the root runTask.
    Either way, this probably means we need to store the runTask on the context.
- Strict mode reserved identifiers - Need to implement Early Errors phase.
- Report code coverage in repo
  coveralls.io?
  [vitest-coverage-report-action](https://github.com/marketplace/actions/vitest-coverage-report)?
- Get api-extractor working. The only holdup right now is the combine and re-export of the interface and factory function of StaticJsRealm
  - Combine these into one file to make this work?
- Rename toJs to toNative

### API for host implementation of functions using evaluators

Figure out public API for invoking evaluators.

- Probably hide evaluators and provide non-evaluator non-sync APIs from intrinsic types.
- Figure out what it looks like for a consumer to want to call functions or invoke other evaluators as part of an api surface exposed within
  the sandbox (IE global scope functions, external modules).
  - Not good to have it start a new macrotask, as the task runner API should see calls to these apis happening while a task is active as
    continuations of the same task, not new nested tasks.
  - Should have the current macrotask inline these new tasks. Some sort of evaluator stack.

### Debugging

- Add scope, variable, and stack info to StaticJsTaskIterator for debugging.
- Add support for monaco debugger
  [Example implementation?](https://github.com/polylith/monaco-debugger)
  [Docs](https://microsoft.github.io/debug-adapter-protocol/overview)

### Think about

- Host fingerprinting using Math trig functions - different results between firefox and chrome. Problem? Use a manual implementation?
  - Same problems with most pass-throughs; Date and Regex if we pass those through to.
- More control for host over environment
  - 'intrinsics' on the realm that can be replacable? Math funcs, Date.now(), performance.\*, other stuff the engine would be interested in controling
    - Support the intrinsics keyword for these? Or would the host want to keep them hidden?
