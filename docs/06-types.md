# StaticJs runtime types

The StaticJs runtime creates its own implementations of all intrinsic types. Each type is unique to the realm that created it, and is not compatible with other realms.

## Type factory

The `types` property on a `StaticJsRealm` contains factories for creating all primitive types. Using these factories will let you pass in types to the sandbox directly without any coersion.

Additionally, it contains a `toStaticJsValue` function that performs coersion on native types.

## Types

### StaticJsValue

All StaticJsValue objects implement a common `StaticJsPrimitive` interface:

- `realm`: The realm this value was created on.
- `typeOf`: The javascript 'typeof' operator return value.
- `runtimeTypeOf`: The realm's interpretation of this value.
- `toJsSync()`: Synchronously builds and returns a host-proxied value from the runtime value
  **WARNING**: See [Caveats](#using-synchonous-functions) to synchronous functions.
- `toStringSync()`: Synchronously returns a string representation of this value
  **WARNING**: See [Caveats](#using-synchonous-functions) to synchronous functions.

### string

Factory:

`realm.types.string("my-value")`

Instances:

`StaticJsString`

Instance Properties:

- `typeOf`: `string`
- `runtimeTypeOf`: `string`
- `value`: The value of the string.

### number

Factory:

`realm.types.number(12)`

A few numbers are provided explicity. You do not have to use these, but they reference a single persistent instance that is slightly more efficient to use.

`realm.types.zero`
`realm.types.NaN`
`realm.types.Infinity`

Instances:

`StaticJsString`

Instance Properties:

- `typeOf`: `number`
- `runtimeTypeOf`: `number`
- `value`: The value of the number

### boolean

Factory:

`realm.types.boolean(true)`

Both true and false are also provided as explicit instances.

These are used internally for the `boolean(...)` function, so either is efficient.

`realm.types.true`

`realm.types.false`

Instances:

`StaticJsBoolean`

Instance Properties:

- `typeOf`: `boolean`
- `runtimeTypeOf`: `boolean`
- `value`: The value of the boolean

### null

Factory:

`realm.types.null` (Not a function)

Instances:

`StaticJsNull`

Instance Properties:

- `typeOf`: `object`
- `runtimeTypeOf`: `null`

### undefined

Factory:

`realm.types.undefined` (Not a function)

Instances:

`StaticJsUndefined`

Instance Properties:

- `typeOf`: `undefined`
- `runtimeTypeOf`: `undefined`

### object

Factory:

The object creation function takes 2 arguments:
`realm.types.object(properties, prototype)`

- `properties`: An object whose keys are property names and whose values are suntime-js object property descriptors
  Note that for these descriptors, `value` **must** be a suntime-js value, not a host value, and `get` and `set` **must** be suntime-js functions, not host functions.
- `prototype`: The suntime-js prototype to use (cannot be a host object). If ommitted, the sandbox's Object.prototype is used.

Unless otherwise specified, the suntime-js prototype of the object will be `realm.types.prototypes.objectProto`.

Instances:

`StaticJsObject`, `StaticJsObjectLike`

Instance Properties:

- `typeOf`: `object`
- `runtimeTypeOf`: `object`
- `prototype`: The read-only StaticJsValue prototype of this object.
- `extensible`: A read-only value indicating whether this object is extensible.
- `setPrototypeOfSync()`: Synchronously sets the prototype of this object.
  **WARNING**: See [Caveats](#using-synchonous-functions) to synchronous functions.
- `preventExtensionsSync()`: Synchronously prevents extensions on this object.
  **WARNING**: See [Caveats](#using-synchonous-functions) to synchronous functions.
- `getKeysSync()`: Synchronously gets the keys (enumerable and not, own and inherited) of this object.
  **WARNING**: See [Caveats](#using-synchonous-functions) to synchronous functions.
- `getEnumerableKeysSync()`: Synchronously gets all enumerable keys (own and inherited) of this object.
  **WARNING**: See [Caveats](#using-synchonous-functions) to synchronous functions.
- `getOwnKeysSync()`: Synchronously gets all own keys (enumerable and not) of this object.
  **WARNING**: See [Caveats](#using-synchonous-functions) to synchronous functions.
- `getOwnEnumerableKeysSync()`: Synchronously gets all own enumerable keys of this object.
  **WARNING**: See [Caveats](#using-synchonous-functions) to synchronous functions.
- `hasPropertySync(property)`: Synchronously returns a value indicating if the object has the given property.
  **WARNING**: See [Caveats](#using-synchonous-functions) to synchronous functions.
- `getPropertyDescriptorSync(property)`: Synchronously gets the property descriptor for the given property, either from this object or down the prototype chain.
  This returns a StaticJsObjectPropertyDescriptor, so the value and accessors will be StaticJsValues
  **WARNING**: See [Caveats](#using-synchonous-functions) to synchronous functions.
- `getOwnPropertyDescriptorSync(property)`: Synchronously gets this object's property descriptor for the given property.
  This returns a StaticJsObjectPropertyDescriptor, so the value and accessors will be StaticJsValues
  **WARNING**: See [Caveats](#using-synchonous-functions) to synchronous functions.
- `definePropertySync(property, descriptor)`: Synchronously defines a property on this object.
  This accepts a StaticJsObjectPropertyDescriptor, so the value and accessors must be StaticJsValues
  **WARNING**: See [Caveats](#using-synchonous-functions) to synchronous functions.
- `getPropertySync(property)`: Synchronously gets the value of a property, either for this object or down the prototype chain.
  The value will be a StaticJsValue.
  **WARNING**: See [Caveats](#using-synchonous-functions) to synchronous functions.
- `setPropertySync(property, value, strict)`: Synchronously sets the value of a property.
  The value must be a StaticJsValue
  **WARNING**: See [Caveats](#using-synchonous-functions) to synchronous functions.
- `deletePropertySync(property)`: Synchronously deletes a property.
  **WARNING**: See [Caveats](#using-synchonous-functions) to synchronous functions.

Examples:

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
  myPrototype
);
```

### array

Factory:

`realm.types.array([realm.types.number(1), realm.types.number(2), realm.types.string("three")])`

The array function accepts a host array with suntime-js values. It **does not accept host values**, so use `realm.types.toStaticJsValue` if needed.

Gaps and sparse arrays are fully supported.

Note that arrays are objects like any other, and can have additional properties defined on them.

Instances:

`StaticJsArray`

Inherits all properties from `StaticJsObjectLike`

Examples:

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

Factory:

Functions can be created with `realm.types.function(name, callback, options?)`.

Note that the function callback functions in the realm of the suntime-js runtime, and does not use regular host javascript conventions for arguments or throw semantics. Use `realm.types.toStaticJsValue` if you wish to use a function that receives and returns proxied host values.

Your callback must:

- Accept only suntime-js StaticJsValue arguments
- Accept the `this` arg as a StaticJsValue
- Return a StaticJsValue argument

Additionally, if you want to throw an error that is caught by the sandbox, you must use a `ThrowCompletion` along with `realm.types.error`.

The options argument can have the following arguments:

- `isConstructor`: Whether the function is a constructor. Defaults to false.
- `length`: The argument length. Defaults to callback.length
- `prototype`: The sandboxed prototype to give the function. This must be a StaticJsValue. Defaults to `realm.types.prototypes.functionProto`

Instances:

`StaticJsFunction`

Inherits all properties from `StaticJsObjectLike`

Examples:

```ts
import { StaticJsValue } from "@suntime-js/core";

const add = realm.types.function(
  "add",
  (a: StaticJsValue, b: StaticJsValue) => {
    if (a.typeOf !== "number" || b.typeOf !== "number") {
      // Thrown StaticJsValue types will act as thrown errors within the sandbox.
      // Any other thrown value will bypass sandbox evaluation and bubble up to either the evaluate* function
      // promise or thrown from the synchronous invocation.
      throw realm.types.error("TypeError", "Arguments to add must be numbers");
    }

    return realm.types.number(a.value + b.value);
  }
);
```

## Using synchonous functions

Various elements of StaticJs implement synchronous functions. However, using them should be done with care, as they include several caveats:

1. Synchronous functions are unprotected against loops.
   Infinite loops implemented in the input code will deadlock the host when evaluated with a synchronous function.
2. Synchronous functions ignore `runTask`.
   Synchronous functions will not invoke the StaticJsRealm `runTask` option, and cannot be monitored, stepped through, iterated, or aborted.
3. Synchronous functions ignore task queuing.
   Synchronous functions evaluate runtime code immediately regardless of the current stack or microtask queue.
