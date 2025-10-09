# Security

This project intends to do its best to provide a way of providing security for the host system against the evaluated code. That is, the evaluated code should not be capable of referencing or manipulating any part of the host that was not passed into the sandbox explicitly.

However, it should be noted that care must be taken by the user to ensure this guarentee remains in place. Code inside the sandbox will have access to anything you give it, so it us up to you to not pass more than you intend.

The safest way to use StaticJs is to always manually create StaticJs objects and functions using the Realm. This ensures that you do not leak any host concerns through the prototype. However, there is a [bidirectional native to sandbox coercing system](./05-type-coersion.md) which coerces passed objects to StaticJs sandbox types, enforces read-only access, and only exposes enumerable properties.

**At this moment in time, this project has not been security audited.** Take care when using it for critical applications.

## Traditionally problematic code

There are a few vectors that enable arbitrary code execution on the host if the sandbox is ever able to gain access to such components. Most of these come from JavaScript features that allow strings to be evaluated as code:

- eval
- setImmediate
- setTimeout
- Function constructors

The first 3 are easy to handle, as the sandbox fully implements these functions, and they will invoke sandboxed code. However, it is possible for you to breach this security by exposing them to the sandbox yourself. If you do override these functions in the sandbox, do so with care.

### Function Constructors

Function constructors should bear much more scrutiny, as they are often accessible in unintended ways.

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

When run inside the sandbox, this would be fine, as the function constructor it will access is the sandboxed function constructor, which mantains the sandbox when invoking.

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

Despite this, this code will still remain secure. This is because incoming objects are [coerced](./05-type-coersion.md), and a proxy object is used instead. This proxy only allows read-only access to enumerable properties, and uses the sandboxed prototype instead of the host's.
