---
title: Modules
sidebar_label: Modules
sidebar_position: 5
---

StaticJs supports ECMAScript modules, both through host-defined modules exposed to sandboxed code, and sandboxed module source that is parsed and evaluated within the realm.

For the complete type and method reference, see the [StaticJsModule API reference](./api/modules.md).

## Evaluating a sandboxed module

Pass ECMAScript module source to `realm.evaluateModule()`. It returns a promise that resolves once the module and all its dependencies are fully evaluated:

```ts
import { StaticJsRealm } from "@suntime-js/core";

const realm = StaticJsRealm();

const module = await realm.evaluateModule(`
  export const foo = 42;
`);
```

## Reading exports

`evaluateModule` resolves to a [`StaticJsModule`](./api/modules.md). Use `getExportAsync` to retrieve individual exports as sandbox values.

```ts
const module = await realm.evaluateModule(`
  export function add(a, b) {
    return a + b;
  }
`);

const result = await addValue.callAsync(realm.types.undefined, [
  realm.types.number(2),
  realm.types.number(3),
]);
```

## Providing host modules

### Static map

Register modules by specifier at realm construction time using the `modules` option. The value for each key is a [`StaticJsModuleResolution`](./api/modules.md#staticjsmoduleresolution):

```ts
const realm = StaticJsRealm({
  modules: {
    "my-lib": {
      exports: {
        add(a, b) {
          return a + b;
        },
      },
    },
    prebuilt: existingModule,
    inline: `export const x = 1;`,
  },
});
```

### Dynamic resolver

For modules that need to be resolved on demand, use `resolveImportedModule`:

```ts
const realm = StaticJsRealm({
  resolveImportedModule: async (specifier, referencingModule) => {
    if (specifier === "utils") {
      return { exports: { add: (a, b) => a + b } };
    }
    // Return null or throw to signal a failed resolution
    return null;
  },
});
```

The static `modules` map is checked first; `resolveImportedModule` is only called for specifiers not found there. See [StaticJsModuleResolver](./api/modules.md#staticjsmoduleresolver) for the full signature.

### Exports object

The simplest form for a host module is a plain object with an `exports` property. Each key becomes a named export; values are [coerced to sandbox types](./04-type-coercion.md) unless they are already `StaticJsValue` instances:

```ts
const realm = StaticJsRealm({
  modules: {
    "host-api": {
      exports: {
        version: "1.0.0",
        add(a, b) {
          return a + b;
        },
      },
    },
  },
});

await realm.evaluateModule(`
  import { version, add } from "host-api";
  console.log(version);   // "1.0.0"
  console.log(add(1, 2)); // 3
`);
```

See [`StaticJsRealmModuleExports`](./api/modules.md#staticjsrealmmoduleexports) for details.

### Module source string

Passing a string as a module value causes StaticJs to parse and evaluate it as ECMAScript module source within the realm:

```ts
const realm = StaticJsRealm({
  modules: {
    constants: `export const PI = 3.14159;`,
  },
});
```

When a string is returned from `resolveImportedModule`, it is evaluated using the task runner of the importing module.

### Pre-built module instance

A [`StaticJsModule`](./api/modules.md) returned by a previous `evaluateModule` call can be re-used directly:

```ts
const lib = await realm.evaluateModule(`export const x = 1;`);

const realm2 = StaticJsRealm({
  modules: { lib: lib },
});
```

## Async modules

Top-level `await` is supported in both directly evaluated modules and their dependencies. The `evaluateModule` promise does not resolve until the entire module graph has settled:

```ts
const module = await realm.evaluateModule(`
  const data = await fetch("...");
  export const result = await data.json();
`);
```
