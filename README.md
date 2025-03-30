# static-js

A javascript interpreter built on the TC39 ECMAScript 2025 standard, supporting modern language features.

A spiritual successor to [static-eval](https://www.npmjs.com/package/static-eval), made to avoid the security pitfalls of the former.

## How is security provided?

The main shortcomming of static-eval is its direct usage of javascript objects inside the engine. This ultimately allows the script to gain access to an object prototype, which allows access to a Function instance, which then allows arbitrary code execution.

This project instead provides an entire sandboxed and isolated implementation of all primitives, including objects. The scripts inside the engine are never able to obtain raw references to objects from the underlying javascript engine, and can only ever perform controlled manipulations into the scripting engine's own object classes.

Because of this, interoping with the runtime is not as simple as in static-eval, as all inputs must be converted and wrapped for the static-js to access. However, this ensures a much more intentional exposure of your API surface to the scripting engine.

### Is this actually secure?

No idea. I haven't had this security tested or reviewed. While this approach gives me enough confidence to use on my own low-stakes projects, securely interpreting user-provided scripts is a thorny subject. Please do your due-dilligence before using this in any critical applications.

## What is supported

TODO

## TODO:

- Testing with https://github.com/tc39/test262/blob/main/INTERPRETING.md
- Switch to sub-imports for lodash-es for tree-shaking
  Not sure why this isnt working. Identical tsconfig and setup to other projects where this works fine.
  Stupid pnpm typescript resolution jank.
- Preprocess the AST tree and generate an AST + setup tree instead of mutating the AST nodes.
  This is required if we want to accept external AST instead of parsing it ourselves.
- Report code coverage in repo
  coveralls.io?
  [vitest-coverage-report-action](https://github.com/marketplace/actions/vitest-coverage-report)?
- Investigate making StaticJsObject() objects into external objects that wrap their target so that
  the runtime can set properties on it.
  - Or maybe use a cached proxy in StaticJsEnvObject's toJs(), if that is faster?
    This would cause a lot of redundancy with ExternalObject. Simpler is better?
- Get api-extractor working. Currently, it hates the fact that we export factories and interfaces with the same names as merged, but the merger
  happens down the line from their declarations.
  - Re-think ban on exporting classes?
  - Put factory and interface in the same class?
    - This was avoided due to circular dependencies, but there is probably a way to do this safely.
- Get more strict with public api
  - Replace index.ts with public.ts
  - Never import from public.ts except for other public.ts to stop circular refs.
