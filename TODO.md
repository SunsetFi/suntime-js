# TODO:

## Host access

- [ ] Realm hostAccessDefaults should be able to be a function called with the object to test.
- [ ] Look really closely at realm's global object initializer and stub policy.
- [ ] Tests for host wrapped function thrown value wrap policies.
- [-] `The ability to supply extensible objects, define writable properties, and selectively expose prototypes is planned.`
  - [ ] Update documentation
- [ ] Thread policy into propertyDescriptorToNative and other create-object-proxy toStaticJsNative calls from .toNative of object.
- [ ] Eliminate toStaticJsValue from realm.types.proxy handlers.

## Immediate

- [ ] Move proxy symbol owner of StaticJsSymbol to StaticJsTypeFactory
  - [ ] Symbols that are in .for() can't be in a WeakMap, and can be referenced in the future anyway, so store them in symbolRegistry
- [ ] Figure out why oxclint is complaining about clearly reachable code being unreachable.
      Doesn't do it for commits, only for manual lint run.
- [ ] introspect / spy function for objects - Analyze properties without invoking sandbox code.
  - [ ] Use for debugger function name
  - [ ] Re-add frame-level functionName using above.
- [-] Rework ExternalFunction
  - [ ] Allow enumerable own properties to be exposed non-writable and non-configurable,
        as StaticJsExternalObject does
    - [ ] Don't allow mutations to other properties (based on policy)
  - [ ] Update type coercion docs.
- [-] InitialName for functions.
  - [+] Expose it in the stack as a non-invoking getter.
    Exposed under frame.function.initialName

### Performance lookthrough

- realm.types.symbols are all getters, could be turned into data properties
- realm host access defaults are constantly re-applied to the safe defaults through resolveHostAccessOptions. Should cache.

### Implement More

- [ ] AggregateError
- [ ] Date
- [ ] Regex
      No hope but to do this ourselves. No way we can pass this through to the engine with catastrophic backtracking.
      Need to process this so backtracking still ticks the operation counter for interrupts / timeshare / abort.

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
  - [ ] Modules have getOwnBindingValueEvaluator, which is okay for our stub modules, but the spec expects a DeclarativeEnvironmentRecord.

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
  - [x] Add builtins tests
  - [ ] Enable strict/nonstrict tests (Very time consuming and not likely to break - CI only?)
- [-] toStaticJsValue option to convert objects deeply so that their prototypes still function; but still mask the Object and Function prototypes.
  - Test against engine-native iterators
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
