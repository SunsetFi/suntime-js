# Modules

StaticJs supports ECMAScript modules, both for consumption by sandboxed code, and allowing evaluation and linking of sandboxed modules.

## Evaluating sandboxed modules

Modules can be used by either the quick `evaluateModule` function, or by calling `evaluateModule` on a realm object.

## Defining modules on a realm

Realms have two ways of defining modules

### StaticJsRealmOpts.modules

Modules can be defined by setting keyed properties of the modules config option:

```ts
import { StaticJsRealm } from "@suntime-js/core";

const realm = StaticJsRealm({
  modules: {
    "my-module-1": {
      exports: {
        foo: 42,
      },
    },
    "my-module-2": `
      export const bar = 64;
    `,
  },
});
```

### StaticJsRealmOpts.resolveImportedModule

Modules can be created per-request by the `resolveImportedModule` option

```ts
import { StaticJsRealm } from "@suntime-js/core";

function resolveImportedModule(importer, specifier) {
  switch (specifier) {
    case "my-module-1":
      return {
        exports: {
          foo: 42,
        },
      };
    case "my-module-2":
      return `
        export const bar = 64;
      `;
  }
  return null;
}
const realm = StaticJsRealm({
  resolveImportedModule,
});
```

## Consuming evaluated modules

Evaluating a module will return a promise to a [StaticJsModule](#staticjsmodule-type). From there, you can use `module.getExportSync` and `module.getExportAsync` to obtain exports.

```ts
import { StaticJsRealm } from "@suntime-js/core";

const realm = StaticJsRealm();

const module = await realm.evaluateModule(`
  export function add(a, b) {
    return a + b;
  }
`);

// Result will be a StaticJsValue
const addValue = await module.getExportAsync("add");

// Invoke the function safely
const resultValue = await addValue.callAsync(realm.types.undefined, [
  realm.types.number(2),
  realm.types.number(3),
]);

// Alternatively, coerce it to a native function
const add = addValue.toNative();
const result = add(4, 3);
```

## Providing external modules.

### Resolvable modules

The following are valid for passing as a StaticJs module, both for StaticJsRealm `modules` and `resolveImportedModule` results:

### Exports object

An object containing a single `exports` property will create a virtual module. The property names of the exports object will be the named exports, and the values will be [coerced](./03-type-coersion.md) unless it is a StaticJsValue.

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

Top-level await is supported for both direct evaluateModule calls and for additional dependent modules. The module evaluation promise will not resolve until the module itself, and all its dependencies, fully resolve.

## StaticJsModule type

Modules in StaticJs are interfaced with through the `StaticJsModule` type.

### StaticJsModule methods

#### getExportedNames

Returns an array of string names for all exports from the module, including star re-exports. The default export is not included in this list.

#### getExportSync(exportName)

Returns the current value of the export, as a [StaticJsValue](./06-types.md#staticjsvalue). The string "default" can be used to get the default export.

Note that some exports can be dynamic. The exported object will NOT reflect changes for primitive values, but WILL reflect changes on exported objects.

#### getExportJsSync(exportName)

Returns the current value of the export, coerced to a native value. The string "default" can be used to get the default export.

The returned value will be [coerced to native representation](./03-type-coersion.md).

#### getModuleNamespaceJsSync

Returns a coerced-native namespace object for all (non-default) exports of the module. This properties of this object will reflect the current state of the module, including any changes made after its creation.

The mapped values will be [coerced to native representations](./03-type-coersion.md).
