---
sidebar_position: 4
---

# StaticJsModule

Represents an evaluated ECMAScript module. Returned by `realm.evaluateModule()` and passed to `StaticJsModuleResolver` callbacks.

**Import**

```ts
import type { StaticJsModule } from "@suntime-js/core";
```

---

## Properties

### name

Type: `string`

The specifier string that identifies this module. For modules evaluated directly via `realm.evaluateModule()`, this is an auto-generated name. For modules resolved through `resolveImportedModule`, it is the specifier passed to the resolver.

---

## Methods

### getExportedNames(opts?)

```ts
getExportedNames(opts?: StaticJsRunTaskOptions): string[]
```

Returns an array of all named export identifiers from this module, including re-exported names from `export * from "..."`. The default export is **not** included.

### getExportAsync(exportName, opts?)

```ts
getExportAsync(exportName: string, opts?: StaticJsRunTaskOptions): Promise<StaticJsValue | null>
```

Returns a promise that resolves to the current value of the named export as a [`StaticJsValue`](./types/value.md), or `null` if the export does not exist. Pass `"default"` to retrieve the default export.

### getExportJsSync(exportName, opts?)

```ts
getExportJsSync(exportName: string, opts?: StaticJsRunTaskOptions): unknown
```

Returns the current value of the named export coerced to a native JavaScript value. Pass `"default"` to retrieve the default export.

The value is coerced according to the [Type Coercion rules](../04-type-coercion.md).

### getModuleNamespaceAsync()

```ts
getModuleNamespaceAsync(): Promise<StaticJsObject>
```

Returns a promise that resolves to the module namespace object as a [`StaticJsObject`](./types/object.md). The namespace object exposes all named exports (excluding the default export) as live bindings.

### getModuleNamespaceJsSync(opts?)

```ts
getModuleNamespaceJsSync(opts?: StaticJsRunTaskOptions): Record<string, unknown>
```

Returns the module namespace as a plain JavaScript object with all named exports coerced to native values. Property reads reflect the current state of each binding at the time of the call.

The values are coerced according to the [Type Coercion rules](../04-type-coercion.md).

---

## `isStaticJsModule(x)`

```ts
import { isStaticJsModule } from "@suntime-js/core";

isStaticJsModule(x: unknown): x is StaticJsModule
```

Type guard that returns `true` if `x` satisfies the `StaticJsModule` interface.

---

# StaticJsModuleResolver

Types used by the realm's module resolution system.

**Import**

```ts
import type {
  StaticJsModuleResolver,
  StaticJsModuleResolution,
  StaticJsRealmModuleExports,
} from "@suntime-js/core";
```

---

## `StaticJsModuleResolver`

```ts
type StaticJsModuleResolver = (
  specifier: string,
  referencingModule: StaticJsModule,
) => Promise<StaticJsModuleResolution>;
```

A host-supplied function that resolves a module specifier to a module implementation. Passed as the `resolveImportedModule` option to `StaticJsRealm`.

| Parameter           | Type             | Description                                              |
| ------------------- | ---------------- | -------------------------------------------------------- |
| `specifier`         | `string`         | The raw import specifier (e.g. `"./utils"`, `"lodash"`). |
| `referencingModule` | `StaticJsModule` | The module that contains the `import` statement.         |

The returned promise must resolve to a [`StaticJsModuleResolution`](#staticjsmoduleresolution).

**Example**

```ts
import { StaticJsRealm } from "@suntime-js/core";

const realm = StaticJsRealm({
  resolveImportedModule: async (specifier, referencingModule) => {
    if (specifier === "utils") {
      return { exports: { add: (a: number, b: number) => a + b } };
    }
    throw new Error(`Cannot resolve module: ${specifier}`);
  },
});
```

---

## `StaticJsModuleResolution`

```ts
type StaticJsModuleResolution =
  | StaticJsRealmModuleExports
  | StaticJsModule
  | StaticJsModuleImplementation
  | string;
```

The union of all values accepted by `StaticJsRealm`'s `modules` map and returned from `resolveImportedModule`.

| Variant                        | Description                                                                                                                                |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `StaticJsRealmModuleExports`   | A plain exports object. Property values are coerced via [type coercion](../04-type-coercion.md). See [below](#staticjsrealmmoduleexports). |
| `StaticJsModule`               | A pre-built module instance (e.g. one returned by a previous `evaluateModule` call).                                                       |
| `StaticJsModuleImplementation` | An internal module implementation. Rarely needed outside of advanced integration scenarios.                                                |
| `string`                       | ECMAScript module source code. The runtime parses and evaluates it within the realm.                                                       |

---

## `StaticJsRealmModuleExports`

```ts
interface StaticJsRealmModuleExports {
  exports: Record<string, unknown>;
}
```

The simplest way to expose host values to sandboxed code. Each key of `exports` becomes a named export; values are coerced from native JavaScript according to the [Type Coercion rules](../04-type-coercion.md). Values that are already `StaticJsValue` instances are used as-is.

**Example**

```ts
const realm = StaticJsRealm({
  modules: {
    "host-api": {
      exports: {
        version: "1.0.0",
        add(a: number, b: number) {
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
