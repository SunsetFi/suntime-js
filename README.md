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
- Switch to a generator-like function for execution:
  - Line by line evaluation / debugging
  - Arbitrarily halting and resuming execution
  - Lets a parent control whether to keep running or to quit.
