# StaticJs runtime types

The StaticJs runtime creates its own implementations of all intrinsic types. Each type is unique to the realm that created it. If a type value from one realm is passed to another, it will be treated as an external / host object.

## Type factory

The `types` property on a `StaticJsRealm` contains factories for creating all primitive types. Using these factories will let you pass in types to the sandbox directly without any coersion.

Additionally, it contains a `toStaticJsValue` function that performs [coersion on native types](./03-type-coersion.md).

## Types

### StaticJsValue

All StaticJsValue objects implement a common `StaticJsPrimitive` interface:

- `realm`: The realm this value was created on.
- `typeOf`: The javascript 'typeof' operator return value.
- `runtimeTypeOf`: The realm's interpretation of this value type.
- `runtimeTypeCode`: A more efficient value-and-flag map of the value's type, derived from `StaticJsTypeCode`.
- `toNative()`: Builds and returns a host-proxied value from the runtime value
  **WARNING**: While this function itself does not invoke sandboxed code, the resulting proxy object will invoke sandboxed code synchronously when accessed. See [Caveats](#using-synchonous-functions) to synchronous functions.
- `toStringSync()`: Synchronously returns a string representation of this value
  **WARNING**: See [Caveats](#using-synchonous-functions) to synchronous functions.

Note: You may find StaticJsValue and derivitaves have methods on them ending in `Evaluator`. These are for internal use by the system, and should generally not be invoked manually. All such methods have `Sync` and `Async` counterparts, which are intended for public consumption.

### string

### Factory

`realm.types.string("my-value")`

#### Instances

`StaticJsString` => `isStaticJsString()`

##### Instance Properties

- `typeOf`: `string`
- `runtimeTypeOf`: `string`
- `value`: The native value of the string.

### number

#### Factory

`realm.types.number(12)`

A few numbers are provided explicity. You do not have to use these, but they reference a single persistent instance that is slightly more efficient to use.

`realm.types.zero`
`realm.types.NaN`
`realm.types.Infinity`

#### Instances

`StaticJsNumber` => `isStaticJsNumber()`

##### Instance Properties

- `typeOf`: `number`
- `runtimeTypeOf`: `number`
- `value`: The native value of the number

### boolean

#### Factory

`realm.types.boolean(true)`

`realm.types.true`

`realm.types.false`

Internally, the `boolean(...)` function uses these pre-defined values, so either is efficient.

#### Instances

`StaticJsBoolean` => `isStaticJsBoolean()`

##### Instance Properties

- `typeOf`: `boolean`
- `runtimeTypeOf`: `boolean`
- `value`: The value of the boolean

### null

#### Factory

`realm.types.null` (Not a function)

#### Instances

`StaticJsNull` => `isStaticJsNull()`

##### Instance Properties

- `typeOf`: `object`
- `runtimeTypeOf`: `null`

### undefined

#### Factory

`realm.types.undefined` (Not a function)

#### Instances

`StaticJsUndefined` => `isStaticJsUndefined()`

##### Instance Properties

- `typeOf`: `undefined`
- `runtimeTypeOf`: `undefined`

### symbol

#### Factory

`realm.types.symbol(description)`

#### Instances

`StaticJsSymbol` => `isStaticJsSymbol()`

##### Instance Properties

- `typeOf`: `symbol`
- `runtimeTypeOf`: `symbol`
- `description`: string

### object

#### Factory

The object creation function takes 2 arguments:
`realm.types.object(properties, prototype)`

- `properties`: An object whose keys are property names and whose values are suntime-js object property descriptors
  Note that for these descriptors, `value` **must** be a suntime-js value, not a host value, and `get` and `set` **must** be suntime-js functions, not host functions.
- `prototype`: The suntime-js prototype to use. This **must** be a StaticJsObject, and cannot be a host / native object. If ommitted, the sandbox's Object.prototype is used.

Unless otherwise specified, the suntime-js prototype of the object will be `realm.types.prototypes.objectProto`.

#### Instances

Base instance, inherited by all other object-likes
`StaticJsObject` => `isStaticJsObject()`

Specific "plain objects" not extending anything beneath.
`StaticJsPlainObject` => `isStaticJsPlainObject()`

#### Instance Properties

- `typeOf`: `object`
- `runtimeTypeOf`: `object`
- `prototype`: The read-only StaticJsValue prototype of this object.
- `extensible`: A read-only value indicating whether this object is extensible.

#### Instance Methods

##### Async methods

- `getPrototypeOfAsync(StaticJsRunTaskOptions?)`
  Gets the prototype of the object. The value will be a StaticJsObject, or null.
- `setPrototypeOfAsync(prototype, StaticJsRunTaskOptions?)`
  Sets the prototype of the object. The prototype must be a StaticJsObject.
- `preventExtensionsAsync(StaticJsRunTaskOptions?)`
  Prevents extensions on the object.
- `ownPropertyKeysAsync(StaticJsRunTaskOptions?)`
  Gets an array of own property keys. Note that non-symbol properties will be reported as native strings, while symbol properties will be reported as [StaticJsSymbol](#symbol) instances.
- `ownEnumerableKeysAsync(StaticJsRunTaskOptions?)`
  Gets an array of own enumerable property keys. All properties will be reported as native strings.
- `hasPropertyAsync(key, StaticJsRunTaskOptions?)`
  Gets a value indicating whether the given key exists on the object or its prototype chain.
  Use native strings for regular properties, or [StaticJsSymbol](#symbol) instances for symbols.
- `hasOwnPropertyAsync(StaticJsRunTaskOptions?)`
  Gets a value indicating whether the given key exists on the object directly.
  Use native strings for regular properties, or [StaticJsSymbol](#symbol) instances for symbols.
- `getPropertyAsync(key, StaticJsRunTaskOptions?)`
  Gets the property descriptor of the given property for the object or its prototype chain.
  The key should be a native string or [StaticJsSymbol](#symbol).
  The property descriptor will be a [StaticJsPropertyDescriptor](#staticjspropertydescriptor) if present,
  or native undefined if not.
- `getOwnPropertyAsync(key, StaticJsRunTaskOptions?)`
  Gets the property descriptor of the given property for the object directly.
  The key should be a native string or [StaticJsSymbol](#symbol).
  The property descriptor will be a [StaticJsPropertyDescriptor](#staticjspropertydescriptor) if present,
  or native undefined if not.
- `defineOwnPropertyAsync(key, descriptor, StaticJsRunTaskOptions?)`
  Define a property on the object.
  The key should be a native string or [StaticJsSymbol](#symbol).
  Descriptor should be a [StaticJsPropertyDescriptor](#staticjspropertydescriptor)
- `getAsync(key, StaticJsRunTaskOptions?)`
  Gets the value of the given property on an object or its prototype chain.
  The key should be a native string or [StaticJsSymbol](#symbol).
  This follows usual get semantics, and can invoke property getters if present.
  This will always return a valid [StaticJsValue](#staticjsvalue). If the property is not set, an instance of [StaticJsUndefined](#undefined) will be returned.
- `setAsync(key, value, strict, StaticJsRunTaskOptions?)`
  Sets the key to the given value.
  The key should be a native string or [StaticJsSymbol](#symbol).
  This follows usual set semantics, and can invoke property setters if present.
- `deleteAsync(key, StaticJsRunTaskOptions?)`
  Deletes the given property.
  The key should be a native string or [StaticJsSymbol](#symbol).
  This follows usual delete semantics, and may fail.
  The return value is a native boolean indicating if the property was able to be deleted. This follows usual JavaScript semantics in that properties that did not exist will return true for deletion.

Note: All async methods take a [StaticJsRunTaskOptions](./04-realms.md#staticjsruntaskoptions) argument.
You can use this to supply a custom `runTask` [Task Runner](./07-tasks.md#implementing-task-runners) to control time limits or timesharing on the options. However, these functions do not make use of `sourceName`.

Note: All async methods above have Sync counterparts. These all still operate on StaticJsValues and do not coerce to native, but they will complete synchronously using the [runTaskSync](./04-realms.md#runtasksync) realm option. **WARNING**: See [Caveats](#using-synchonous-functions) to synchronous functions.

#### Examples

```ts
const myPrototype = realm.types.object({
  value: {
    enumerable: true,
    configurable: false,
    get: realm.types.toStaticJsValue(function () {
      // The 'this' argument be proxied from the scripting engine.
      return this._value;
    }),
    set: realm.types.toStaticJsValue(function (value) {
      // Both 'value' and 'this' will be proxied from the scripting engine.
      this._value = value;
    }),
  },
});

const myObject = realm.types.object(
  {
    _value: {
      enumerable: false,
      configurable: false,
      writable: true,
      value: 0,
    },
  },
  myPrototype,
);
```

#### StaticJsPropertyDescriptor

### array

#### Factory

The array function has two overloads:

`realm.types.array([...values])`

Create an array with the given values. The values **must** be [StaticJsValue](#staticjsvalue) objects, and does not accept host / native values. Use `realm.types.toStaticJsValue` or other type factories as needed.

`realm.types.array(length)`

Creates an empty array with the given length. The length is specified as a native number.

Gaps and sparse arrays are fully supported.

Note that arrays are objects like any other, and can have additional properties defined on them.

#### Instances

`StaticJsArray` => `isStaticJsArray()`

Inherits all properties from `StaticJsObject`

#### Examples

```ts
const myArray = realm.types.array([1, 2, 3]);

// Trims the array as expected.
myArray.setProperty("length", 1);

// Additional properties can be defined on it.
myArray.defineProperty("message", {
  enumerable: false,
  configurable: false,
  writable: false,
  value: realm.types.string("Hello World"),
});
```

The suntime-js prototype of the array will be `realm.types.prototypes.arrayProto`.

### function

#### Factory

Functions can be created with `realm.types.function(name, callback, options?)`.

**Alpha Implementation**: Currently, the callback is expected to complete synchronously, and cannot participate in the time-sharing asyncronous evaluation. Work is planned to expose the internal evaluator system to allow functions made with this factory to pause and resume evaluation as all StaticJs constructs can.

The callback will be called when the function is invoked (or when used as a constructor, depending on the options passed).

When invoked, the callback will:

- Receive all arguments as [StaticJsValue](#staticjsvalue) objects.
- Be called with a `this` arg as a [StaticJsValue](#staticjsvalue). If no `this` arg was specified, it will be [StaticJsUndefined](#undefined)

Your callback **must** return a [StaticJsValue](#staticjsvalue), otherwise a `TypeError` will be thrown (and surface in the evaluate promise or sync call that triggered it).

Thrown values will be caught and handled. However, there are special semantics here:

- If the thrown value is a [StaticJsValue](#staticjsvalue), the throw will be catchable by sandboxed code.
- If the throw value is **not** a [StaticJsValue](#staticjsvalue), the sandbox **cannot** intercept it, and it will be surfaced in the evaluate promise or sync call that triggered the function.

- `isConstructor`: Whether the function is a constructor. Defaults to false.
  When set to `true`, the function may be called with `new` in the sandbox.
  When set to `false`, using `new` on the function will throw a `TypeError` inside the sandbox.
- `length`: The argument length. Defaults to callback.length
- `prototype`: The sandboxed prototype to give the function. This must be a [StaticJsObject](#object).
  Defaults to `realm.types.prototypes.functionProto`

#### Instances

`StaticJsFunction` => `isStaticJsFunction()`

Inherits all properties from `StaticJsObject`

#### Instance Properties

- `isConstructor`: Whether the function is callable as a constructor.
- `strict`: Whether the function evaluates with strict semantics.
  This has no effect for host-defined functions, but is relevant for sandbox-defined ones.

#### Instance Methods

- `callAsync(thisArg, args?, StaticJsRunTaskOptions?)`
  Invokes the function.
  thisArg must be a [StaticJsValue](#staticjsvalue), and args must be a native array of [StaticJsValue](#staticjsvalue) objects.
  The return value will be a [StaticJsValue](#staticjsvalue). If the function had no return value, am instance of [StaticJsUndefined](#undefined) will be returned.
- `constructAsync(args?, newTarget?, StaticJsRunTaskOptions?)`
  Invokes the function as a constructor.
  thisArg must be a [StaticJsValue](#staticjsvalue), and args must be a native array of [StaticJsValue](#staticjsvalue) objects.
  The return value will always be a [StaticJsObject](#object) of the constructed object.
- `getNameAsync(StaticJsRunTaskOptions?)`
  Gets the name of the function as a native string.
  This may invoke sandboxed code, if the name property was set to an accessor property descriptor.
  Note that this will invoke `toString` semantics on the name property before returning the native string,
  so setting the function name to objects or other primitives will be stringified asynchronously before returning.

Note: Async here refers to the evaluation of the sandboxed function. The function itself will run synchronously within the context of the sandbox, but based on your [Task Runner](./07-tasks.md), the invocation may not complete synchronously for the host.

Note: All async methods take a [StaticJsRunTaskOptions](./04-realms.md#staticjsruntaskoptions) argument.
You can use this to supply a custom `runTask` [Task Runner](./07-tasks.md#implementing-task-runners) to control time limits or timesharing on the options. However, these functions do not make use of `sourceName`.

Note: All async methods above have Sync counterparts. These all still operate on StaticJsValues and do not coerce to native, but they will complete synchronously using the [runTaskSync](./04-realms.md#runtasksync) realm option. **WARNING**: See [Caveats](#using-synchonous-functions) to synchronous functions.

#### Examples

```ts
import { StaticJsValue } from "@suntime-js/core";

const add = realm.types.function("add", (a: StaticJsValue, b: StaticJsValue) => {
  if (a.typeOf !== "number" || b.typeOf !== "number") {
    // Thrown StaticJsValue types will act as thrown errors within the sandbox.
    // Any other thrown value will bypass sandbox evaluation and bubble up to either the evaluate* function
    // promise or thrown from the synchronous invocation.
    throw realm.types.error("TypeError", "Arguments to add must be numbers");
  }

  return realm.types.number(a.value + b.value);
});
```

## Methods

The following methods are available on the Type Factory:

### `toStaticJsValue(value)`

Coerces the host / native value to a sandboxed value.

This follows the [coersion rules](./03-type-coersion.md). This may produce bidirectional conversion for the case of functions or objects with accessor properties.

Note that native objects passed through this will **not be mutable** in the sandbox. The properties will appear as nonconfigurable, and set accessor properties will not be invoked. However, get accessors will still be invoked.

The conversion is recursive: Native property values will be converted, as will values returned by any get accessor or function invocations.

See [Type Coersion](./03-type-coersion.md) for full details.

## Using synchonous functions

Various elements of StaticJs implement synchronous functions. However, using them should be done with care, as they include several caveats:

By default, synchronous functions are unprotected against loops. Infinite loops implemented in the input code will deadlock the host when evaluated with a synchronous function. Be aware that many of these operations can trigger sandboxed code unexpectedly.

For example, the following code will deadlock the system:

```ts
const realm = StaticJsRealm();
const func = await realm.evaluateScript(`
  function test() {
    return 42;
  }
  Object.defineProperty(test, "name", {
    get: () => {
      while(true) {}
    }
  });
  test;
`);

const name = func.getNameSync();
```

The way around this is using [Tasks](./07-tasks.md).

```ts
const name = func.getNameSync({
  runTask: createTimeBoundTaskRunner({ maxRunTime: 1000 }),
});
```

All sync methods accepts a [StaticJsRunTaskOptions](./04-realms.md#staticjsruntaskoptions) argument as their last argument, through which the `runTask` which can be used to time-guard the execution.

Note that for sync functions, the `runTask` function **must** either run the iterator to exhaustion, or call `.abort()` or `.throw()` on the iterator. Failure to do either will result in a `StaticJsSynchronousTaskIncompleteError` being thrown.
