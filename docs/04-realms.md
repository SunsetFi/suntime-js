# Realms

The root unit of sandbox evaluation is `StaticJsRealm`. These realms provide independent virtual javascript evaluation. Each realm has its own prototypes, types, globals, and task queue.

Once you have created a realm, you can use it to evaluate scripts.

## Creating Realms

You can create a realm using `StaticJsRealm(opts?)`.

Available options:

### globalThis

Sets the global `this` arg for the realm.

- `globalThis`.`value`: Sets the this arg to the given value. If the value is not a StaticJsValue, it will be [coerced to one](./03-type-coersion.md).

### globalObj

Sets the global object or its properties for the realm.

- `globalObj`.`value`: Sets the this arg to the given value. The value must be an object-like. If the value is not a StaticJsValue, it will be [coerced to one](./03-type-coersion.md).
- `globalObj`.`properties`: Specifies propertery descriptors of the global object.

Only one of these two properties may be set on `globalObj` at a time.

If any value specified by either of these is not a StaticJsValue, [it will be coerced to one](./03-type-coersion.md).

### modules

Modules can be set to a prebuilt record of module names to [Resolvable StaticJs Modules](./05-modules.md#resolvable-modules).

See that documentation for what values are accepted.

```ts
import { StaticJsRealm } from "@suntime-js/core";

const realm = StaticJsRealm({
  modules: {
    "my-module": {
      exports: {
        add(a, b) {
          return a + b;
        },
        foo: "bar",
      },
    },
  },
});

await realm.evaluateModule(`
  import { add } from "my-module";
  add(1, 2);
`);
```

### resolveImportedModule

For asynchronous module resolution, the `resolveImportedModule` function will be invoked if `modules` has no record for the desired module. It will be called with a reference with the importing [StaticJsModule](./05-modules.md) as its first argument, and the module specifier as the second argument. It should return either a [Resolvable StaticJs Modules](./05-modules.md#resolvable-modules), or a Promise that resolves to one.

### runTask

The default [Task Handler](07-tasks.md) for running tasks, if none is specified for the task itself.

Tasks can be used to timeshare, pause, debug, and abort ongoing sandbox code evaluations.

See [Task handling](07-tasks.md) for more information.

## Realm methods

### `evaluateExpression(code)`

Queues an expression evaluation into the realm's task queue.

Returns a promise that resolves to the [StaticJsValue](./06-types.md) result of the evaluation.

### `evaluateScript(code)`

Queues a script evaluation in the realm's task queue.

Returns a promise that resolves to the [StaticJsValue](./06-types.md) result of the evaluation.

### `evaluateModule(code)`

Queues a module evaluation in the realm's task queue.

Returns a promise that resolves to the [StaticJsModule](./05-modules.md).

Note that module linking will be done ASAP, while the declaration and evaluation steps will wait for the task queue.

## Realm properties

### `types`

The type factory for a realm can be found on the `types` property for that realm.

See [Realm Type Factory](./06-types.md#type-factory)
