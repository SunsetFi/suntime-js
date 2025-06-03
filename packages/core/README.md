# @suntime-js/core

(static-js was taken (So was js-engine))

A javascript interpreter built on the TC39 ECMAScript 2025 standard, seeking to implement modern language features.

A spiritual successor to [static-eval](https://www.npmjs.com/package/static-eval).

Try it out in [the sandbox](https://sunsetfi.github.io/suntime-js)!

## Sandboxing and Security

Unlike static-eval, this project has ambitions of providing a secure sandbox from which untrusted code can be safely ran.

The fundimental difference with static-eval is that static-js operates entirely against its own implementation of the intrinsic javascript types, complete with its own prototype chain. This seeks to ensure that the code being ran is never able to manipulate the system into accessing the native properties of the underlying native objects, which would allow it to eventually reach a function constructor and therefor gain arbitrary code execution.

Instead, while the code in the sandbox **will** have access to eval() and the function constructor, those functions will instead run their code inside the sandbox, preserving the integrity of the host system.

### Is this actually secure?

No idea. I haven't had this security tested or reviewed. While this approach gives me enough confidence to use on my own low-stakes projects, securely interpreting user-provided scripts is a thorny subject. Please do your due-dilligence before using this in any critical applications.

## What is supported

- Most primitives (including prototypes and constructors)
  - null
  - undefined
  - string
  - number
  - boolean
  - object
  - array
  - function
  - Boxed versions of string / number / boolean
- Math
- Error (and variants)
- (Most?) Unary and Binary operators
- for / while / do
- try / catch / finally
- Destructuring
- Spread operators (internal array and object instances only).
- ECMAScript Modules
  - Importing from external APIs
  - Importing from additional code string sources
  - Importing from custom module instances.
  - Exports

### Notable things not (yet) supported

- Symbols
- Promises
- Async
- Async Modules
- Iterators and Generators
- Classes
- Date
- Regex
- for-of

## Test262 coverage

This project is slowly working its way through the [Test262](https://github.com/tc39/test262) suite of JavaScript tests.

As of 4-26-2025, 6281 of the 23605 tests are passing, or 26%.

## Usage

There are two ways to evaluate scripts, depending on your needs:

### Direct Evaluation

The API functions `evaluateProgram(string, {realm?})`, `evaluateModule(string, {realm?})`, and `evaluateExpression(string, {realm?})`
will execute the script until completion, and return the runtime-native result.

```ts
import { evaluateExpression } from "@suntime-js/core";

const result = evaluateExpression("2 + 2");
```

### Compiled usage

If multiple runs are desired, or for more advanced use cases, the script can be 'compiled' (parsed into AST) with `compileProgram`, `compileModule`, or `compileExpression`.
This returns a compilation unit with the following methods:

#### evaluate({realm?})

Evaluates the script and returns the result.

```ts
import { compileExpression } from "@suntime-js/core";

const compiled = compileExpression("2 + 2");

const result = compiled.evaluate();
```

#### generator({realm?})

Returns an iterator that will perform one operation per invocation, until the script is completed.

This is useful when you want to [timeshare the evaluation](#creating-a-timesharing-time-bound-cancellable-script-invocation) or provide a way for the user to abort the script, even in the case of infinite loops.

```ts
import { compileExpression } from "@suntime-js/core";

const compiled = compileExpression("2 + 2");

const generator = compiled.generator();

// Run the generator until we have an answer
// This does not have to be done synchronously.
let iterableResult;
do {
  iterableResult = generator.next();
} while (!iterableResult.done);

// Get the final value.
const result = iterableResult.value;
```

### Passing in external data

You can supply external data to the sandbox in a few ways:

#### Global objects

You can define properties on the global object with [Realm globalObj](#globalobj)

```ts
import { StaticJsRealm, evaluateProgram } from "@suntime-js/core";

const realm = StaticJsRealm({
  globalObj: {
    value: {
      myCallback: (arg) => console.log(arg),
    },
  },
});

evaluateProgram("myCallback(2 + 2)", { realm });
```

#### External modules

When using the module form of the sandbox, you can define your own external modules

```ts
import { StaticJsRealm, evaluateModule } from "@suntime-js/core";

const realm = StaticJsRealm({
  modules: {
    "my-module": {
      exports: {
        myCallback: (arg) => console.log(arg);
      }
    }
  }
});

const code = `
import { myCallback } from "my-module";
myCallback(2 + 2);
`;
evaluateModule(code, {realm});
```

There are many ways of defining modules. [See their section](#modules) for more details.

### Retrieving data from the sandbox

Data can be retrieved from the sandbox in many ways, depending on your needs.

#### Expression and Program results

When using the expression or program evaluation modes, the last statement (or expression) will be returned from the evaluation function.

```ts
import { evaluateProgram } from "@static-js/core";

const result = evaluateProgram("{message: 'Hello World'}))
console.log("The message is", result.message);
```

#### External callback functions

Any sandbox value that passes its way into the host's world is wrapped into native values that remain synced with the sandbox:

```ts
import { StaticJsRealm, evaluateProgram } from "@suntime-js/core";

function myApiCallback(obj) {
  console.log("Message is", obj.message);
}
const realm = StaticJsRealm({
  globalObj: {
    properties: {
      callback: {
        writable: false,
        value: myApiCallback,
      },
    },
  },
});

evaluateProgram("callback({message: 'Hello World'})");
```

#### Retrieving functions

Functions that make their way out of the sandbox are proxied appropriately. They will invoke the sandbox function, automatically proxying their inputs (both arguments and `this` binding), and proxy their return value.

```ts
import { evaluateProgram } from "@suntime-js/core";

const code = `function length(v) {
  return Math.sqrt(v.x ** 2 + v.y ** 2);
}
`;

const computeLength = evaluateProgram(code);

const length = computeLength({ x: 2, y: 4 });
console.log("Length is", length);
```

### Type coersion between the native runtime and the script evaluation

Any value passing the barrier between the scripting engine and the host is transparently proxied.

#### Host to Sandbox

When a value is passed to the sandbox, special care is taken to limit the sandbox access to that object.

##### Scalars

Scalars are sent as-is.

##### Objects

When an object is proxied from the host to the sandbx, **only own enumerable properties are exposed**, and those properties are **read-only**.

This is critical for [maintaining security](#security). Currently, there is no way to opt out of this.

The ability to supply extensible objects, define writable properties, and selectively expose prototypes is planned.

Note that the objects are still linked. Changing, adding, or deleting a property of the object in the host will also change the (proxied) value in the sandbox.

##### Arrays

Currently, arrays will instantiate a new copy of the array in the sandbox, that is mutable. Mutations will **not** be applied to the host array. No other properties are carried forward beyond the array items.

This may change in the future to produce full read-only-own-enumerable references as objects do.

##### Functions

Functions will produce a new copy of the function in the sandbox. Additional properties will **not** be carried into the sandbox, and mutations to the function properties will **not** be written back to the host.

When the sandbox invokes the function, all arguments to the function, as well as its this arg, will be proxied according to the [Sandbox to Host](#sandbox-to-host) rules, and the function's return will be proxied into the sandbox with these Host to Sandbox rules.

#### Sandbox to Host

Unlike Host to Sandbox, proxies of sandbox values to the host runtime are far more complete.

##### Scalars

Scalars are sent using the native host scalar.

##### Objects, Arrays, Functions

Sandbox objects and object-likes are **fully proxied**. This means that you will receive a live, up-to-date, synchronizing copy of the object. Any property mutation made on the object **will be reflected in the sandbox**, although any values you set will still be ran through the Host to Sandbox ruleset.

Functions you pass **will be invokable**. Sandbox invocations of the function will have their arguments and this argument proxied into host values using the [Sandbox to Host](#sandbox-to-host) ruleset, and your function's return value will be proxied back with the Host to Sandbox ruleset.

## Security

For the scope of this project, "Security" means "Any sandboxed code is not able to run arbitrary non-sandboxed code." Sandboxed code is allowed to run "arbitrary code" as long as such code is still confined to the sandbox.

There are a few vectors that such a security hole could take. Javascript has a number of ways of invoking strings as code that could be used by sandboxed code to pull this off:

- eval
- setImmediate
- setTimeout
- Function constructors

Of these, the first 3 are easy to handle, as the sandbox controls these functions.

The last one should bear much more scrutiny.

Function constructors are able to take strings to define the function with:

```ts
Function("console.log('hello')")();
```

This looks straightforward, but the problem lies in the fact that function constructors are reachable from almost any object, allowing for code like:

```ts
const objectConstructor = {}.constructor;
const functionConstructor = objectConstructor.constructor;
functionConstructor("console.log('hello')")();
```

When run inside the sandbox, this would be fine, as it is just invoking the sandboxed function constructor.

However, where things get risky is when native objects are passed into the system. For example:

```ts
const realm = StaticJsRealm({
  globalObject: {
    properties: {
      myObject: {
        writable: false,
        value: {},
      },
    },
  },
});

const attackStr = `myObject.constructor.constructor("console.log('hello')")()`;
evaluateExpression(attackStr, { realm });
```

To prevent this from happening, suntime-js proxies all incoming objects and object-likes as **surface-level proxies**. These proxies will have the appropriate sandbox-defined prototypes, and only expose **read-only copies** of **own enumerable properties** of the object. As a consequence, more complicated objects that rely on prototypes, such as classes, cannot (currently) be passed into the system.

## Realms

To define the global environment in which scripts are ran, you can create a realm using `StaticJsRealm(opts?)`.

Available options:

### globalThis

Sets the global `this` arg for the realm.

- `globalThis.value`: Sets the this arg to the given value. If the value is not a StaticJsValue, it will be converted to one.

If the value is not a StaticJsValue, [it will be converted to one](#type-coersion-between-the-native-runtime-and-the-script-evaluation).

### globalObj

Sets the global object or its properties for the realm.

- `globalObj.value`: Sets the this arg to the given value. The value must be an object-like. If the value is not a StaticJsValue, it will be converted to one.
- `globalObj.properties`: Specifies propertery descriptors of the global object.

Only one of these two properties may be used at a time.

If any value specified by either of these is not a StaticJsValue, [it will be converted to one](#type-coersion-between-the-native-runtime-and-the-script-evaluation).

## Modules

Module support is implemented through evaluateModule and compileModule. There are two sides to module evaluation:

### Top-level modules

When using the module variations, the returned object is a StaticJsModule instance that provides access to a few methods which can be used to access the exports:

#### getExportedNames

Returns an array of string names for all exports from the module, including star re-exports. The default export is not included in this list.

#### getExport(exportName)

Returns the current value of the export. The string "default" can be used to get the default export.

#### getModuleNamespace

Returns a namespace object for all (non-default) exports of the module. This object will reflect the current state of the module, including any changes made after its creation.

### Dependency modules

Providing modules available for import can be done in two ways:

#### StaticJsRealm 'modules'

The 'modules' key in the options object of StaticJsRealm can be set to any valid realm module, keyed by import name.

#### StaticJsRealm 'resolveModule(moduleName)' function

The 'resolveMOdule' option key can be specified as a function, accepting a valid StaticJsRealm module option result.

Currently, this function does not accept promises.

#### StaticJsRealmModule

Both 'modules' and 'resolveModule' can accept any of the following:

- A string containing additional module-mode javascript.
- The result of `evaluateModule`
- An object with an 'exports' key, set to a key/value record of export names to values.
- Your own custom implementation of a StaticJsModule.

### Async Modules

Currently, async modules are not supported, as async (and promises in general) are not yet implemented.

## Sandbox Primitives

Once you create a realm, you are able to create sandboxed primitives for greater control of your api surface.

Note that there is a chicken-and-egg problem when wanting to set these objects to a global. In such cases, you should create a host javascript object for the global, and
set the sandboxed object as a property to that global. The proxy system will identify that the value is a sandbox value and use it directly.

```ts
import { StaticJsRealm, evaluateProgram } from "@suntime-js/core";

// Create the empty global objects.
const globalObj = {};

// Create the realm, using the specified global.
const realm = StaticJsRealm({
  globalObj: {
    value: globalObj,
  },
});

// Create our api to expose on the global object.
const myApi = realm.types.object({
  message: {
    enumerable: true,
    configurable: false,
    writable: false,
    value: realm.types.string("Hello World"),
  },
  writableProperty: {
    enumerable: true,
    configurable: false,
    writable: true,
    value: realm.types.number(12),
  },
  callback: {
    enumerable: true,
    configurable: false,
    writable: false,
    value: realm.types.toStaticJsValue(function (arg) {
      console.log("Callback called with", String(arg));
    }),
  },
});

// Set our api on the global object.
// suntime-js will identify the value as its own runtime object and use it directly.
globalObj.api = myApi;

evaluateProgram("api.callback(`Program got message: ${api.message}`);");
```

All sandbox types are extended from the `StaticJsPrimitive` interface. The `StaticJsValue` interface represents any possible sandboxed value.

You may get instances of these values using the various factories on the `realm.types` object, after a realm is created.

### StaticJsPrimitive

The properties of `StaticJsPrimitive` that are shared by all types are:

- `realm`: The realm this value was created on.
- `typeOf`: The javascript 'typeof' operator return value.
- `runtimeTypeOf`: The realm's interpretation of this value.
- `toJsSync()`: Synchronously builds and returns a host-proxied value from the runtime value
  **WARNING**: This executes synchronously, bypasses generators, and is vulnurable to infinite loops.
- `toStringSync()`: Synchronously returns a string representation of this value
  **WARNING**: This executes synchronously, bypasses generators, and is vulnurable to infinite loops.

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
  **WARNING**: This executes synchronously, bypasses generators, and is vulnurable to infinite loops.
- `preventExtensionsSync()`: Synchronously prevents extensions on this object.
  **WARNING**: This executes synchronously, bypasses generators, and is vulnurable to infinite loops.
- `getKeysSync()`: Synchronously gets the keys (enumerable and not, own and inherited) of this object.
  **WARNING**: This executes synchronously, bypasses generators, and is vulnurable to infinite loops.
- `getEnumerableKeysSync()`: Synchronously gets all enumerable keys (own and inherited) of this object.
  **WARNING**: This executes synchronously, bypasses generators, and is vulnurable to infinite loops.
- `getOwnKeysSync()`: Synchronously gets all own keys (enumerable and not) of this object.
  **WARNING**: This executes synchronously, bypasses generators, and is vulnurable to infinite loops.
- `getOwnEnumerableKeysSync()`: Synchronously gets all own enumerable keys of this object.
  **WARNING**: This executes synchronously, bypasses generators, and is vulnurable to infinite loops.
- `hasPropertySync(property)`: Synchronously returns a value indicating if the object has the given property.
  **WARNING**: This executes synchronously, bypasses generators, and is vulnurable to infinite loops.
- `getPropertyDescriptorSync(property)`: Synchronously gets the property descriptor for the given property, either from this object or down the prototype chain.
  This returns a StaticJsObjectPropertyDescriptor, so the value and accessors will be StaticJsValues
  **WARNING**: This executes synchronously, bypasses generators, and is vulnurable to infinite loops.
- `getOwnPropertyDescriptorSync(property)`: Synchronously gets this object's property descriptor for the given property.
  This returns a StaticJsObjectPropertyDescriptor, so the value and accessors will be StaticJsValues
  **WARNING**: This executes synchronously, bypasses generators, and is vulnurable to infinite loops.
- `definePropertySync(property, descriptor)`: Synchronously defines a property on this object.
  This accepts a StaticJsObjectPropertyDescriptor, so the value and accessors must be StaticJsValues
  **WARNING**: This executes synchronously, bypasses generators, and is vulnurable to infinite loops.
- `getPropertySync(property)`: Synchronously gets the value of a property, either for this object or down the prototype chain.
  The value will be a StaticJsValue.
  **WARNING**: This executes synchronously, bypasses generators, and is vulnurable to infinite loops.
- `setPropertySync(property, value, strict)`: Synchronously sets the value of a property.
  The value must be a StaticJsValue
  **WARNING**: This executes synchronously, bypasses generators, and is vulnurable to infinite loops.
- `deletePropertySync(property)`: Synchronously deletes a property.
  **WARNING**: This executes synchronously, bypasses generators, and is vulnurable to infinite loops.

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
    _this: {
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
import { StaticJsValue, ThrowCompletion } from "@suntime-js/core";

const add = realm.types.function(
  "add",
  (a: StaticJsValue, b: StaticJsValue) => {
    if (a.typeOf !== "number" || b.typeOf !== "number") {
      throw new ThrowCompletion(
        realm.types.error("TypeError", "Arguments to add must be numbers")
      );
    }

    return realm.types.number(a.value + b.value);
  }
);
```

## Recipes

### Creating a timesharing, time-bound, cancellable script invocation

Using generator mode, you can control the timings of when each AST node is evaluated. This can be used to both spread out the execution over time to allow other tasks to still operate, as well as to put guardrails on how long the script is executing.

Here is an example of a function that will evaluate the script over time, limiting itself to 1000 AST nodes per stretch, and interspersing that with 10ms deferrals for other code in the environment to execute. It also throws in a cancellation function for good measure.

```ts
import { compileProgram, StaticJsRealm } from "static-js";

function evaluateCancellableProgram(
  code: string,
  timeout: number,
  realm?: StaticJsRealm
): { promise: Promise<unknown>; cancel: () => void } {
  const compiled = compileProgram(code);
  const gen = compiled.generator(realm);

  let nextInvocation: number | null = null;

  const start = Date.now();
  const promise = new Promise<unknown>((accept, reject) => {
    function schedule() {
      nextInvocation = setTimeout(process, 10);
    }

    function process() {
      for (let i = 0; i < 1000; i++) {
        try {
          const { value, done } = gen.next();
          if (done) {
            accept(value);
            return;
          }
        } catch (e: unknown) {
          reject(e);
          return;
        }
      }

      if (Date.now() - start >= timeout) {
        reject(new Error("Evaluation timed out."));
        return;
      }

      schedule();
    }

    schedule();
  });

  function cancel() {
    clearTimeout(nextInvocation);
    nextInvocation = null;
  }

  return {
    promise,
    cancel,
  };
}
```

## TODO:

- **Testing with https://github.com/tc39/test262**
- Switch to sub-imports for lodash-es for tree-shaking
  Not sure why this isnt working. Identical tsconfig and setup to other projects where this works fine.
  Stupid pnpm typescript resolution jank.
- Report code coverage in repo
  coveralls.io?
  [vitest-coverage-report-action](https://github.com/marketplace/actions/vitest-coverage-report)?
- Get api-extractor working. The only holdup right now is the combine and re-export of the interface and factory function of StaticJsRealm
  - Combine these into one file to make this work?
- Get more strict with public api
  - Replace index.ts with public.ts
  - Never import from public.ts except for other public.ts to stop circular refs.
- Clean up ThrowCompletions on utility functions.
  - Currently have a mix of some functions returning ThrowCompletions and some throwing StaticJsRuntimeErrors
  - Decide on one and stick to it.
- Turn the value of ObjectLike.toJs() back into the same instance of StaticJsObjectLike in TypeFactory.toStaticJsValue()
- Reveal information about the current line and character number the generator is at.
  - Also reveal scopes and variables.
- Investigate debugger for monaco
  [Example implementation?](https://github.com/polylith/monaco-debugger)
- Stop .toX functions from using synchronous evaluation, use promises.
  Probably should include a .toXSync
  But don't use these internally!
