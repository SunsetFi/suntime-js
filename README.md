# Suntime JS

(static-js was taken (So was js-engine))

A (work in progress) JavaScript interpreter built on the TC39 ECMAScript standard, implementing asyncronous / non-blocking execution, sandboxing, modern language features, and full debugging support.

A spiritual successor to [static-eval](https://www.npmjs.com/package/static-eval).

Try it out in [the sandbox](https://sunsetfi.github.io/suntime-js)!

## Spec Compliance

This project is being ran against the Test262 test suite to ensure spec compliance. This is a work-in-progress, and full coverage has not yet been obtained.

![Test262 Language Suite](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FSunsetFi%2Fsuntime-js%2Frefs%2Fheads%2Fmain%2Fpackages%2Fcore%2Fbadges%2Ftest262-language.json)

![Test262 Builtins Suite](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FSunsetFi%2Fsuntime-js%2Frefs%2Fheads%2Fmain%2Fpackages%2Fcore%2Fbadges%2Ftest262-builtins.json)

![Test262 Totals](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2FSunsetFi%2Fsuntime-js%2Frefs%2Fheads%2Fmain%2Fpackages%2Fcore%2Fbadges%2Ftest262.json)

## Packages

### @suntime-js/core

Core engine and javascript evaluator

```js
import { StaticJsRealm, createTimeSharingTaskRunner } from "@suntime-js/core";

let myModuleResolveAwait;
const realm = StaticJsRealm({
  runTask: createTimeSharingTaskRunner({
    yieldTime: 100,
    operationsPerIteration: 1000,
    maxRunTime: 60 * 1000
  }),
  global: {
    properties: {
      sayHello: {
        value: () => console.log("Hello World");
      },
      registerCallback: {
        value: (cb) => myModuleResolveAwait = cb;
      }
    }
  },
  modules: {
    "my-module": `
      const { promise, resolve } = Promise.withResolvers();
      registerCallback(resolve);
      await promise;
      export const foo = 42;
    `
  }
});

const modulePromise = realm.evaluateModule(`
  import { foo } from "my-module";
  export function addFoo(value) {
    return value + foo;
  }
`);

myModuleResolveAwait();

const module = await modulePromise;

const addFoo = await module.getExportAsync("addFoo");

const result = await addFoo.callAsync(realm.types.undefined, realm.types.number(10));
```

See the [documentation](./docs) or [readme](./packages/core/README.md) for more information.

### @suntime-js/debugger

A stepping debugger for @suntime-js/core, providing breakpoint support and stack inspection.

### @suntime-js/dap

Provides a DAP (Debugger Adapter Protocol) adapter for visual studio code. Adapters for for both vscode (external process) and the web-based [CodinGame/monaco-vscode-api](https://github.com/codingame/monaco-vscode-api) are provided.
