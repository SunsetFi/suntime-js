# TODO:

- Fix 'all' [Test262](https://github.com/tc39/test262) tests.
  - Currently only running tests in the language folder. Need to add built-ins
- function `arguments` object
- toStaticJsValue option to convert objects deeply so that their prototypes still function; but still mask the Object and Function prototypes.
  - Test against engine-native iterators
- Make invokeEvaluatorSync use runTaskSync
- Fix task runner not bound to continuations of promises
  - This is really thorny. On the surface, its suprising that a task runner passed to evaluateModule will only work for
    the initial evaluation and not for any runs after await, but it would also be suprising if the await is triggered by code that has its own runTask and that runTask isn't used in favor of the root runTask.
    Either way, this probably means we need to store the runTask on the context.
- Only call runTask once per evaluate call, and transparently use the same task iterator for all microtasks.
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
- [ ] Rework TypeFactory.factory to require a generator function
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
- [ ] Option to specify task runners in async methods
- [ ] Rename toJs to toNative
- [ ] Documentation

## Debugging

- Add scope, variable, and stack info to StaticJsTaskIterator for debugging.
- Add support for monaco debugger
  [Example implementation?](https://github.com/polylith/monaco-debugger)
  [Docs](https://microsoft.github.io/debug-adapter-protocol/overview)

## Think about

- Host fingerprinting using Math trig functions - different results between firefox and chrome. Problem? Use a manual implementation?
  - Same problems with most pass-throughs; Date and Regex if we pass those through to.

## Completion Refactor

- [ ] Rework EvaluationGenerator to accept and return Completions
  - [ ] Accept and return Completions for all Node Evaluators
  - [ ] Use generator.next instead of generator.throw for abnormal completions.
- [x] Rework EvaluateNodeCommand to always return completions
  - [x] Use Q() where needed to enforce NormalCompletion
- [ ] Eliminate most throws for completions where not needed.
