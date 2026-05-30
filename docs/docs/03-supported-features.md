---
title: Supported Features
sidebar_label: Supported Features
sidebar_position: 3
---

## What is supported

- Strict directive
- Primitives
- Arrays
- Set, Map
- Math
- try / catch
- Error and variants
- Stack traces (including Error.captureStackTrace)
- Promises
- Functions / Arrow functions
- Async Functions
- Generator functions
- Async generator functions
- Top-level await
- Symbols (including engine behavior)
  - Symbol.iterator
  - Symbol.hasInstance
  - Symbol.species
  - Symbol.isConcatSpreadable
  - Symbol.toPrimitive
  - Symbol.unscopables
  - Symbol.toStringTag
- Control flow / loops
- Unary and binary operators
- Optional call expressions
- Destructuring
- Optional member expressions
- Spread operators (including Symbol.iterator usage)
- eval / Function constructor.
- Classes
  - Private names
- Proxy
- ECMAScript Modules
  - Async modules
  - Exports
  - Importing from host-defined modules
  - Importing from sandboxed modules

### Notable things not (yet) supported

- All well-known symbols not listed above
- Date
- Temporal
- Regex
- JSON
- WeakMap, WeakRef, FinalizationRegistry
- 'using' syntax; disposables
