# Type coersion between the native runtime and the script evaluation

Any value passing the barrier between the scripting engine and the host is transparently proxied.

## Host to Sandbox

When a value is passed to the sandbox, special care is taken to limit the sandbox access to that object.

### Scalars

Scalars act the same in the host or the sandbox. Boxed scalers will use the sandbox version of the boxing object.

### Objects

#### Host-defined Objects

When an object is proxied from the host to the sandbx, **only own enumerable properties are exposed**, and those properties are **read-only**.

This is critical for [maintaining security](./02-security.md). Currently, there is no way to opt out of this. If you want passed objects to be mutable, you must [create and use a realm object](./06-types.md#object)

The ability to supply extensible objects, define writable properties, and selectively expose prototypes is planned.

Note that the objects are still linked. Changing, adding, or deleting a property of the object in the host will also change the (proxied) value in the sandbox.

#### Sandbox-defined Objects (round trip)

When passing an object to the Sandbox that originated in the sandbox, its proxy will be unwrapped and it will be the same instance in the sandbox as was returned from it.

### Symbols

#### Host-defined symbols

Symbols will be converted to runtime symbols, with their descriptions preserved.

Note that due to javascript semantics, symbols from Symbol.for() will cause a sandbox symbol to be permenantly created and never GCd, while symbols created with the Symbol() function will have their proxies GCd when the originating symbol is.

#### Sandbox-defined symbols (round trip)

When passing a symbol to the sandbox that originated in the sandbox, its proxy will be unwrapped and it will be the same instance in the sandbox as was returned from it.

### Functions

Functions will produce a new copy of the function in the sandbox. Additional properties will **not** be carried into the sandbox, and mutations to the function properties will **not** be written back to the host.

When the sandbox invokes the function, all arguments to the function, as well as its this arg, will be proxied according to the [Sandbox to Host](#sandbox-to-host) rules, and the function's return will be proxied into the sandbox with these Host to Sandbox rules.

## Sandbox to Host

Sandbox to Host coersion is not used often, and generally **should be avoided**, as its usage introduces the possibility of unintentionally and synchronously evaluating sandbox code as a result of property getters and setters. **Remember that synchronous evaluations cannot be aborted, and can deadlock the system if an infinite loop is encountered.**

Generally, this is only used for `toJsSync`, and for `evaluateScript` and friends.

## Scalars

Scalars are returned converted to their native forms.

### Objects

#### Host-defined Objects (round trip)

Objects that were native to the Host that get returned from the VM will be unwrapped back into their original forms.

##### Sandbox Objects

Object from the sandbox are transparently proxied into native representations, but all of their attributes remain rooted in the sandbox. This means:

- The entire object prototype chain is proxied, all the way down to Object.prototype.
  - `instanceof`, `Array.isArray`, and other things **will not reflect the same values as inside the sandbox**. EG: Arrays returned from the sandbox will have `Array.isArray` return false.
- Property getters and setters inside the sandbox **will be invoked synchronously** if the native js accesses a property.

These objects remain mutable, so changing object properties on the native representation will reflect in the StaticJs sandbox, and **will synchronously invoke setters**.

### Symbols

#### Host-defined Symbols (round trip)

Symbols that originated on the Host that get returned from the VM will be unwrapped back into their original forms.

#### Sandbox Symbols

Sandbox symbols will be converted to native Host symbols with their descriptions preserved.

### Functions

Functions extend from objects, and are fully proxied and mutable in turn. Additionally, they are callable from the host.

Calling a function from the host will:

- Coerce the 'this' argument to a StaticJs value
- Coerce all arguments to StaticJs values
- Invoke the function synchronously.
- Coerce the result to a native value and return it.
