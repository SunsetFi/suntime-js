# TODO:

## Immediate

- [ ] Task improvements
  - [x] Property on a task indicating if its sync or async.
  - [ ] Merge microtasks into same iterator?

### Refactor Await / Yield / Suspend

Spec wants suspending to be based on execution contexts. Doesn't differentiate between await and yield suspending, just "Suspend the current context".
When suspending, the spec often sets up callbacks for [ResumeSuspendedContext](https://tc39.es/ecma262/multipage/executable-code-and-execution-contexts.html#sec-runsuspendedcontext):

- [Await](https://tc39.es/ecma262/multipage/control-abstraction-objects.html#await)
- [Yield / Resume](https://tc39.es/ecma262/multipage/control-abstraction-objects.html#sec-generatorresume)

Currently, the design requires a listener in the generator chain to handle these specifically, which complicates and disjoints the logic; one spec function has to be split
across the suspend and the resume side.

Replace this with a single Suspend command that takes a function which will be invoked with the resumer generator:

```ts
function await(promise) {
  const resumeContext = SuspendCommand.createContext();
  const promiseResolve = function*() {
    yield* SuspendCommand.resume(resumeContext);
  }

  yield* promiseThen(promise, promiseResolve);

  yield* SuspendCommand(resumeContext);
}

function SuspendCommand(context) {
  return { type: "suspend", context };
}

SuspendCommand.createContext = function() {
  return { generator: null };
}

SuspendCommand.resume = function(context) {
  if (context.generator === null) {
    throw;
  }

  return yield* SuspendCommand.handleSuspend(context.generator);
}

SuspendCommand.handleSuspend = function*(generator: EvaluationGenerator) {
  while(true) {
    const { value, done } = generator.next();
    if (done) {
      return value;
    }

    if (value.type === "suspend") {
      value.context.generator = generator;
      return null;
    }

    yield value;
  }
}
```

## Less imidiate

- [-] Wire up OrdinaryCreateFromConstructor to the intrinsic type constructors.
- [ ] StaticJsFunction.toString revealing source
- [ ] Figure out why a tiny number of test262 tests trigger a context.run() to pop a context different from what it pushed.
- [ ] Get promises returned to proxied functions to await properly in the sandbox.
      This should be happening automatically due to the .then function, but isn't
- [ ] Rewrite async generators. Make AsyncDriver not care about yields at all, so we can use
      Await() inside generator implementation functions.
  - [ ] Remake await and yield as SuspendCommand. Spec seems to not care what type and just calls functions that suspend and resume.
        No need to make the implementations be defined at the handler level.
- [-] checkEarlyErrors could be improved to be more performant by precomputing strict and similar.
- Return completions from iteratorNext

### Long term spec compliance reworks

- [ ] Rework node evaluator so catagories of nodes can be processed in a tree
      Get closer to how the spec wants these to work, with categories splitting into
      narrower options
  - [ ] Switch to estree? Will be painful.
  - [ ] LabelledStatement
  - [ ] BreakableStatement
- [ ] Rework modules for spec compliance
  - [ ] EvaluateModuleSync
  - [ ] CyclicModuleRecord

### Debugger improvements

- [ ] Expose node data in task iterator
- [ ] Use node data to break on loop condition and update nodes
- [ ] Fix DAP / monaco-vscode not knowing line numbers of non-top functions in the call stack.
- [ ] Stack traces! It should be easy, just do them!

### Completion Refactor

- [ ] Rework EvaluationGenerator to accept and return Completions
  - [ ] Accept and return Completions for all Node Evaluators
  - [ ] Use generator.next instead of generator.throw for abnormal completions.
- [ ] Eliminate most throws for completions where not needed.
- [ ] Convert All The Things to Q
  - [ ] iteratorClose / asyncIteratorClose
  - [ ] ...others

### Cleanup

- [-] Remove default exports from everywhere
- [ ] Deep review and cleanup of dap
  - [ ] Sanify file names on kebab.

## General

- [-] Fix 'all' [Test262](https://github.com/tc39/test262) tests.
  - [x] Add builtins tests (Currently only testing language folder)
  - [ ] Enable strict/nonstrict tests (Very time consuming and not likely to break - CI only?)
- [-] toStaticJsValue option to convert objects deeply so that their prototypes still function; but still mask the Object and Function prototypes.
  - Test against engine-native iterators
- [ ] Only call runTask once per evaluate call, and transparently use the same task iterator for all microtasks.
  - Do we even want this?
  - It makes task timekeepers easier to reason about, and lets one timekeeper be reused if we can make this assumption
  - Currently cannot reuse them due to this.
  - Now that we expose macrotask/microtask, we can actually reset the timer on a new macrotask.
- Get api-extractor working. The only holdup right now is the combine and re-export of the interface and factory function of StaticJsRealm
  - Combine these into one file to make this work?
- Object.defineProperties/y used to give more helpful errors for if object was not extensible or cannot redefine property.
  They got removed for "spec compliance". Put them back!

## Sandboxing / Security

- Need a way to enforce memory limits. Infinite loops are gated, but memory-bombing can still crash the host.

## API for host implementation of functions using evaluators

Figure out public API for invoking and implementing evaluators.

- [ ] Export needed constructs
  - [ ] Completion
  - [ ] EvaluationGenerator
- [x] Rework TypeFactory.function to require a generator function. Only use native functions in toStaticJsValue

## API cleanup

- [x] Async methods for host api core types
  - [x] Functions
  - [x] Objects
  - [ ] toString / primitives
  - [ ] Promises
  - [ ] ...others
- [x] Option to specify task runners in async methods
- [ ] Accept a runTask on toNative to use for future calls to object proxies.

## Think about

- Host fingerprinting using Math trig functions - different results between firefox and chrome. Problem? Use a manual implementation?
  - Same problems with most pass-throughs; Date and Regex if we pass those through to.
