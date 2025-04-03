# @suntime-js/core

(static-js was taken (So was js-engine))

A javascript interpreter built on the TC39 ECMAScript 2025 standard, seeking to implement modern language features.

A spiritual successor to [static-eval](https://www.npmjs.com/package/static-eval).

Try it out in [the sandbox](https://sunsetfi.github.io/static-js)!

## Sandboxing and Security

Unlike static-eval, this project has ambitions of providing a secure sandbox from which untrusted code can be safely ran.

The fundimental difference with static-eval is that static-js operates entirely against its own implementation of the intrinsic javascript types, complete with its own prototype chain. This seeks to ensure that the code being ran is never able to manipulate the system into accessing the native properties of the underlying native objects, which would allow it to eventually reach a function constructor and therefor gain arbitrary code execution.

Instead, while the code in the sandbox **will** have access to eval() and the function constructor, those functions will instead run their code inside the sandbox, preserving the integrity of the host system.

### Is this actually secure?

No idea. I haven't had this security tested or reviewed. While this approach gives me enough confidence to use on my own low-stakes projects, securely interpreting user-provided scripts is a thorny subject. Please do your due-dilligence before using this in any critical applications.

## What is supported

- Some intrinsic types
  - null
  - undefined
  - string
  - number
  - boolean
  - object
  - array
  - function
  - Boxed versions of string / number / boolean
- Constructors
- Prototypes and factories for the intrinsic types
- (Most?) Unary and Binary operators
- for / while / do
- try / catch / finally
- Spread operators
- Destructuring

### Notable things not (yet) supported

- Promises
- Symbols
- Iterators and Generators
- Classes
- Error intrinsics
- Date
- Regex
- for-of
- ES Modules (import and export statements)

## Usage

There are two ways to evaluate scripts, depending on your needs:

### Direct Evaluation

The API functions `evaluateProgram(string, realm?)` and `evaluateExpression(string, realm?)` will execute the script until completion, and return the runtime-native result.

### Compiled usage

If multiple runs are desired, or for more advanced use cases, the script can be 'compiled' (parsed into AST) with `compileProgram` or `compileExpression`. This returns a compilation unit with the following methods:

#### evaluate(realm?)

Evaluates the script and returns the result.

#### generator(realm?)

Returns an iterator that will perform one operation per invocation, until the script is completed.

This is useful when you want to timeshare the evaluation or keep a way for the user to abort the script.

## Type coersion between the native runtime and the script evaluation

Some attempt has been made to create a transparent shim between the values returned by the evaluation and the native js runtime:

- Functions returned by the script will be converted to the runtime native functions, which invoke the script function when executed.
  Note: These will be ran-to-completion without using the original generator
- Objects returned by the script will be converted to runtime native objects, with getters / setters that invoke the script code when called.
  Note: These will be ran-to-completion without using the original generator.
- Arrays are copied over to the native array type.
  **Mutations to the returned array will not mutate the script array**
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
- Preprocess the AST tree and generate an AST + setup tree instead of mutating the AST nodes.
  This is required if we want to accept external AST instead of parsing it ourselves.
- Report code coverage in repo
  coveralls.io?
  [vitest-coverage-report-action](https://github.com/marketplace/actions/vitest-coverage-report)?
- Get api-extractor working. The only holdup right now is the combine and re-export of the interface and factory function of StaticJsRealm
  - Combine these into one file to make this work?
- Get more strict with public api
  - Replace index.ts with public.ts
  - Never import from public.ts except for other public.ts to stop circular refs.
- Allow controlled generator oversight of spontanious runs (toJs proxies and such).
  - Replace runEvaluatorUntilCompletion with a direct link to the realm
  - Allow StaticJsRealm to take a function for controlling the evaluation loop.
  - Readme examples for how to use that to implement timesharing and timeouts.
- Reveal information about the current line and character number the generator is at.
  - Also reveal scopes and variables.
- Investigate debugger for monaco
  [Example implementation?](https://github.com/polylith/monaco-debugger)
