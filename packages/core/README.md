# @suntime-js/core

(static-js was taken (So was js-engine))

A javascript interpreter built on the TC39 ECMAScript 2025 standard, seeking to implement modern language features.

A spiritual successor to [static-eval](https://www.npmjs.com/package/static-eval).

Try it out in [the sandbox](https://sunsetfi.github.io/suntime-js)!

## Sandboxing and Security

Unlike static-eval, this project has ambitions of providing a secure sandbox from which untrusted code can be safely ran.

The fundimental difference with static-eval is that static-js operates entirely against its own implementation of the intrinsic javascript types, complete with its own prototype chain. This seeks to ensure that the code being ran is never able to manipulate the system into accessing the native properties of the underlying native objects, which would allow it to eventually reach a function constructor and therefor gain arbitrary code execution.

Instead, while the code in the sandbox **will** have access to eval() and the function constructor, those functions will instead run their code inside the sandbox, preserving the integrity of the host system.

### Is this actually secure?

No idea. I haven't had this security tested or reviewed. While this approach gives me enough confidence to use on my own low-stakes projects, securely interpreting user-provided scripts is a thorny subject. Please do your due-dilligence before using this in any critical applications.

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
- Math
- Error (and variants)
- (Most?) Unary and Binary operators
- for / while / do
- try / catch / finally
- Destructuring
- Spread operators (internal array and object instances only).
- ECMAScript Modules
  - Importing from external APIs
  - Importing from additional code string sources
  - Importing from custom module instances.
  - Exports

### Notable things not (yet) supported

- Symbols
- Promises
- Async
- Async Modules
- Iterators and Generators
- Classes
- Date
- Regex
- for-of

## Test262 coverage

This project is slowly working its way through the [Test262](https://github.com/tc39/test262) suite of JavaScript tests.

As of 4-26-2025, 6281 of the 23605 tests are passing, or 26%.

## Usage

There are two ways to evaluate scripts, depending on your needs:

### Direct Evaluation

The API functions `evaluateProgram(string, {realm?})`, `evaluateModule(string, {realm?})`, and `evaluateExpression(string, {realm?})`
will execute the script until completion, and return the runtime-native result.

### Compiled usage

If multiple runs are desired, or for more advanced use cases, the script can be 'compiled' (parsed into AST) with `compileProgram`, `compileModule`, or `compileExpression`.
This returns a compilation unit with the following methods:

#### evaluate({realm?})

Evaluates the script and returns the result.

#### generator({realm?})

Returns an iterator that will perform one operation per invocation, until the script is completed.

This is useful when you want to timeshare the evaluation or keep a way for the user to abort the script.

## Type coersion between the native runtime and the script evaluation

Some attempt has been made to create a transparent shim between the values returned by the evaluation and the native js runtime:

- Functions returned by the script will be converted to the runtime native functions, which invoke the script function when executed.
  Note: These will be ran-to-completion without using the original generator
- Objects returned by the script will be converted to runtime native objects, which use Proxies to synchronize between themselves and the runtime object.
  **Mutations to this object will be reflected in the runtime**
- Arrays are copied over to the native array type.
  **Currently, mutations to the returned array will not mutate the script array**
- All primitive types are converted to their runtime native primitive.

## Realms

To define the global environment in which scripts are ran, you can create a realm using `StaticJsRealm(opts?)`.

Available options:

### globalThis

Sets the global `this` arg for the realm.

- `globalThis.value`: Sets the this arg to the given value. If the value is not a StaticJsValue, it will be converted to one.

### globalObj

Sets the global object or its properties for the realm.

- `globalObj.value`: Sets the this arg to the given value. The value must be an object-like. If the value is not a StaticJsValue, it will be converted to one.
- `globalObj: {properties?, extensible?}`: Specifies the properties of the global object, and whether or not it is extensible.
  properties: A record matching string keys to ObjectPropertyDescriptor objects for each property.

## Modules

Module support is implemented through evaluateModule and compileModule. There are two sides to module evaluation:

### Top-level modules

When using the module variations, the returned object is a StaticJsModule instance that provides access to a few methods which can be used to access the exports:

#### getExportedNames

Returns an array of string names for all exports from the module, including star re-exports. The default export is not included in this list.

#### getExport(exportName)

Returns the current value of the export. The string "default" can be used to get the default export.

#### getModuleNamespace

Returns a namespace object for all (non-default) exports of the module. This object will reflect the current state of the module, including any changes made after its creation.

### Dependency modules

Providing modules available for import can be done in two ways:

#### StaticJsRealm 'modules'

The 'modules' key in the options object of StaticJsRealm can be set to any valid realm module, keyed by import name.

#### StaticJsRealm 'resolveModule(moduleName)' function

The 'resolveMOdule' option key can be specified as a function, accepting a valid StaticJsRealm module option result.

Currently, this function does not accept promises.

#### StaticJsRealmModule

Both 'modules' and 'resolveModule' can accept any of the following:

- A string containing additional module-mode javascript.
- The result of `evaluateModule`
- An object with an 'exports' key, set to a key/value record of export names to values.
- Your own custom implementation of a StaticJsModule.

### Async Modules

Currently, async modules are not supported, as async (and promises in general) are not yet implemented.

## Recipes

### Creating a timesharing, time-bound, cancellable script invocation:

Using generator mode, you can control the timings of when each AST node is evaluated. This can be used to both spread out the execution over time to allow other tasks to still operate, as well as to put guardrails on how long the script is executing.

Here is an example of a function that will evaluate the script over time, limiting itself to 1000 AST nodes per stretch, and interspersing that with 10ms deferrals for other code in the environment to execute. It also throws in a cancellation function for good measure.

```ts
import { compileProgram, StaticJsRealm } from "static-js";

function evaluateCancellableProgram(
  code: string,
  timeout: number,
  realm?: StaticJsRealm
): { promise: Promise<unknown>; cancel: () => void } {
  const compiled = compileProgram(code);
  const gen = compiled.generator(realm);

  let nextInvocation: number | null = null;

  const start = Date.now();
  const promise = new Promise<unknown>((accept, reject) => {
    function schedule() {
      nextInvocation = setTimeout(process, 10);
    }

    function process() {
      for (let i = 0; i < 1000; i++) {
        try {
          const { value, done } = gen.next();
          if (done) {
            accept(value);
            return;
          }
        } catch (e: unknown) {
          reject(e);
          return;
        }
      }

      if (Date.now() - start >= timeout) {
        reject(new Error("Evaluation timed out."));
        return;
      }

      schedule();
    }

    schedule();
  });

  function cancel() {
    clearTimeout(nextInvocation);
    nextInvocation = null;
  }

  return {
    promise,
    cancel,
  };
}
```

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
