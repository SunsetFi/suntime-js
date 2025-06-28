# Modules

StaticJs supports ECMAScript modules, both for consumption by sandboxed code, and allowing evaluation and linking of sandboxed modules.

## Evaluating sandboxed modules

Modules can be used by either the quick `evaluateModule` function, or by calling `evaluateModule` on a realm.

## Consuming evaluated modules

Evaluating a module will return a promise to a StaticJsModule.

### StaticJsModule methods

#### getExportedNames

Returns an array of string names for all exports from the module, including star re-exports. The default export is not included in this list.

#### getExport(exportName)

Returns the current value of the export. The string "default" can be used to get the default export.

The returned value will be [coersed to native representation](./03-type-coersion.md).

#### getModuleNamespace

Returns a namespace object for all (non-default) exports of the module. This object will reflect the current state of the module, including any changes made after its creation.

The mapped values will be [coersed to native representations](./03-type-coersion.md).

## Providing external modules.

### Resolvable modules

The following is valid for passing as a StaticJs module, both for StaticJsRealm `modules` and `resolveImportedModule` results:

### Exports object

An object containing a single `exports` property will create a virtual module. The property names of the exports object will be the named exports, and the values will be [coerced](./03-type-coersion.md)

```ts
import { StaticJsRealm } from "@suntime-js/core";

const realm = StaticJsRealm({
  modules: {
    "my-module": {
      exports: {
        add(a, b) {
          return a + b;
        },
      },
    },
  },
});

await realm.evaluateModule(`
  import { add } from "my-module";
  add(1, 2);
`);
```

### string

Providing string values as modules will cause StaticJs to evaluate that string within the realm as an independent module.

Note that doing so during `resolveImportedModule` will invoke that module's evaluation with the [task evaluator](./07-tasks.md) specified for the module that requested the import.

## Async Modules

Currently, async modules are not supported, as async (and promises in general) are not yet implemented.
