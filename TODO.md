# TODO:

## Immediate

- [-] runTask improvements
  - [x] Make invokeEvaluatorSync use runTaskSync
  - [ ] If invokeEvaluatorX is called and the current task is an X, merge the invoked iteration with the task.
- [x] Rework createFunction to use current execution stack for scriptOrModule and realm
- [ ] Rework all async functions to one class
- [ ] toJsSync preserve task runners on proxies
  - [ ] StaticJsAbstractObject property get/set/whatever
  - [ ] StaticJsFunctionImpl invocation
- [ ] Task improvements
  - [ ] Properly set async and sync macrotasks as "host-invocation"
  - [ ] Property on a task indicating if its sync or async.

## Less imidiate

- [ ] Debugger improvements
  - [ ] Expose node data in task iterator
  - [ ] Use node data to break on loop condition and update nodes
- [ ] Deep review and cleanup of dap
  - [ ] Sanify file names on kebab.
- [ ] Implement global stuff like the execution context stack and GetActiveScriptOrModule
  - [ ] Fix function constructor not knowing its active script or module.
- [ ] Rework node evaluator so catagories of nodes can be processed in a tree
      Get closer to how the spec wants these to work, with categories splitting into
      narrower options
  - [ ] LabelledStatement
  - [ ] BreakableStatement
- [ ] Take full function node on StaticJsAstFunction and implement toString on it.
  - [ ] Also make this work in-engine.
- [ ] Fix StaticJsDebugAdapter in dap - broke in the debugger rework.
- [ ] Remove generators from module linking stages as they aren't needed (Confirm this).
- [-] Rework function creation to match OrdinaryFunctionCreate.
  - [ ] Unify all function types to a single Function class accepting Call and Construct?
- [ ] Clean up ForInOfBody to use completions rather than try/catch.
      [ ] Clean up iterator algorithms to use completions. Remove unwrap argument.
- [-] Reduce calls to EvaluationContext.current when they aren't needed. Mostly thrown errors.
  - [x] Helper for Completion.Throw to pull the current context to create the error from name and message.
- [ ] Figure out why a tiny number of test262 tests trigger a context.run() to pop a context different from what it pushed.
- [ ] Yield Delegate for generators
- [x] Async generators
- [ ] Get promises returned to proxied functions to await properly in the sandbox.
      This should be happening automatically due to the .then function, but isn't
- [ ] Remove unwrap jank from asyncIteratorClose and iteratorClose
- [ ] Namespace object non-js native in StaticJsModule
- [ ] Align ObjectLike functions to slots.
  - [ ] hasOwnProperty is actually the hasProperty slot, and hasProperty is a utility function. This is confusing.
- [ ] Check AbstractObject 'slots' for compliance with 10.1
  - [ ] GetOwnProperty, DefineOwnProperty
    - [ ] completePropertyDescriptor
    - [ ] isCompatiblePropertyDescriptor

### Completion Refactor

- [ ] Rework EvaluationGenerator to accept and return Completions
  - [ ] Accept and return Completions for all Node Evaluators
  - [ ] Use generator.next instead of generator.throw for abnormal completions.
- [x] Rework EvaluateNodeCommand to always return completions
  - [x] Use Q() where needed to enforce NormalCompletion
- [ ] Eliminate most throws for completions where not needed.
- [ ] Convert All The Things to Q
  - [ ] iteratorClose / asyncIteratorClose
  - [ ] ...others

### Module Refactor

Modules are not implemented according to spec

- [ ] EvaluateModuleSync
- [ ] CyclicModuleRecord

## General

- [-] Fix 'all' [Test262](https://github.com/tc39/test262) tests.
  - [ ] Add builtins tests (Currently only testing language folder)
  - [ ] Enable strict/nonstrict tests (Very time consuming and not likely to break - CI only?)
- [ ] toStaticJsValue option to convert objects deeply so that their prototypes still function; but still mask the Object and Function prototypes.
  - Test against engine-native iterators
- [ ] Only call runTask once per evaluate call, and transparently use the same task iterator for all microtasks.
  - Do we even want this?
  - It makes task timekeepers easier to reason about, and lets one timekeeper be reused if we can make this assumption
  - Currently cannot reuse them due to this.
  - Now that we expose macrotask/microtask, we can actually reset the timer on a new macrotask.
- Strict mode reserved identifiers - Need to implement Early Errors phase.
- Report code coverage in repo
  - coveralls.io?
  - [vitest-coverage-report-action](https://github.com/marketplace/actions/vitest-coverage-report)?
- Get api-extractor working. The only holdup right now is the combine and re-export of the interface and factory function of StaticJsRealm
  - Combine these into one file to make this work?
- Object.defineProperties/y used to give more helpful errors for if object was not extensible or cannot redefine property.
  They got removed for "spec compliance". Put them back!

## Sandboxing / Security

- Need a way to enforce memory limits. Infinite loops are gated, but memory-bombing can still crash the host.
- Host needs more control over some core JS features
  - RNG / seeds
  - Current date, performance, so on
- Figure out how to implement regex safely.
  - Regex is nefarious for unbounded computation
  - Our operation counter and async execution is useless if we pass regex to the host
  - Find a js-implemented regex replacement? Add operation counting and async execution to this?
  - ...Build our own?

## API for host implementation of functions using evaluators

Figure out public API for invoking and implementing evaluators.

- [ ] Export constructs needed
  - [ ] Completion
  - [ ] EvaluationGenerator
- [ ] Rework TypeFactory.function to require a generator function. Only use native functions in toStaticJsValue
- [ ] Method for host to obtain an evaluator for evaluateScript, evaluateExpression, and StaticJsValue evaluators
      Hide evaluators, make host use Async, and hide the async-nature of them?
      Would require our TaskIterator to become an async iterator
- [ ] Rework runTask in Realm to inline child tasks when re-entering runtime
      IE: Sandbox invokes host function that delegates to realm.evaluateScript

## API cleanup

- [x] Async methods for host api core types
  - [x] Functions
  - [x] Objects
  - [ ] Promises
  - [ ] ...others
- [-] Option to specify task runners in async methods
- [ ] Rename toJs to toNative
- [ ] Documentation

## More packages

- monacode - monaco-vscode-api leveraged react vscode workspace
  Composite components representing files and services inside the main Vscode component

  ```tsx
    import { Vscode, DebugService, File } from "@suntime-js/monacode"
    return (
      <Vscode onFileCreate={onFileCreate} onFileClose={onFileClose}>
        <DebugService adapter={myAdapter} />
        <File name="index.js" language="javascript">
      </Vscode>

    )
  ```

## Think about

- Host fingerprinting using Math trig functions - different results between firefox and chrome. Problem? Use a manual implementation?
  - Same problems with most pass-throughs; Date and Regex if we pass those through to.
