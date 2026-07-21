# TODO:

## Really immediate this is getting silly

- [ ] Make an assert() function for all StaticJsEngineError cases.

## Memory tracking

- [ ] Account for creating native symbols for SymbolImpl
- [x] Account for private env names
- [x] Account for module environments on the current realm
- [x] Object param create methods to stop type jank.
- [ ] Account for enqueued promise resolution tasks.
- [ ] Weigh true cost of ast function nodes, use length-based as estimate only.
- [ ] Document memory stuff

## Host access

- [ ] Realm hostAccessDefaults should be able to be a function called with the object to test.
- [ ] Look really closely at realm's global object initializer and stub policy.
- [ ] Tests for host wrapped function thrown value wrap policies.
  - [ ] Update documentation
- [ ] Thread policy into propertyDescriptorToNative and other create-object-proxy toStaticJsNative calls from .toNative of object.
- [ ] Fix crash on stubPromise when a promise is passed to a global option property in the realm ctor.
- [ ] Document host access stuff

## Safe access

Started to introduce the ability to safely interact with objects without invoking sandbox.

See array setIndexSafe

- [ ] Add safe methods to object
- [ ] Add safe methods to map
- [ ] Add safe methods to set

## General

- [ ] Clean up StaticJsMethodFunction and StaticJsClassConstructorFunction
      Currently duplicate some properties from StaticJsAstFunction.
  - [ ] Add missing properties to StaticJsFunction (constructorKind, sourceText)
    - [ ] Use public sourceText in function prototype toString instead of instance check
  - [ ] Allow StaticJsNativeClassConstructorFunction to inherit from NativeFunction
        Needs the latter to have a parameterized .create()
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
- [ ] Object.defineProperties/y used to give more helpful errors for if object was not extensible or cannot redefine property. Re-add this.

### Performance lookthrough

- realm.types.symbols are all getters, could be turned into data properties
- realm host access defaults are constantly re-applied to the safe defaults through resolveHostAccessOptions. Should cache.

### Implement More

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

- [ ] Expose final value from task iterators so debug attach to task can expose it as terminal states.
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

## Tests

- [-] Fix 'all' [Test262](https://github.com/tc39/test262) tests.
  - [x] Add builtins tests
  - [ ] Enable strict/nonstrict tests (Very time consuming and not likely to break - CI only?)

## Sandboxing / Security

- Need a way to enforce memory limits. Infinite loops are gated, but memory-bombing can still crash the host.

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
