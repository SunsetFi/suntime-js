---
title: Types
sidebar_label: Types
sidebar_position: 5
---

# Types

Every value that exists inside a StaticJs sandbox is a [`StaticJsValue`](./value.md). The type system mirrors JavaScript's own primitives and objects, but wraps them so the host can inspect, create, and manipulate sandbox values safely without executing untrusted code directly.

All types carry a `realm` reference and implement the [`StaticJsPrimitive`](./primitive.md) base interface. Object-like types additionally implement [`StaticJsObject`](./object.md), which provides the full ECMAScript internal-method API (`[[Get]]`, `[[Set]]`, `[[DefineOwnProperty]]`, etc.) as async/sync/evaluator triplets.

---

## Inheritance diagram

```mermaid
classDiagram
    class StaticJsPrimitive["StaticJsPrimitive"] {
        +realm StaticJsRealm
        +typeOf string
        +runtimeTypeOf string
        +toNative()
        +toStringSync()
    }
    class StaticJsObject["StaticJsObject"] {
        +getAsync(key)
        +setAsync(key, value)
        +defineOwnPropertyAsync(key, desc)
        +hasPropertyAsync(key)
        +ownPropertyKeysAsync()
        +getPrototypeOfAsync()
        … and more
    }
    class StaticJsCallable["StaticJsCallable"] {
        +isConstructor boolean
        +callAsync(thisArg, args?)
        +constructAsync(args?)
    }
    class StaticJsString {
        +value string
    }
    class StaticJsNumber {
        +value number
    }
    class StaticJsBoolean {
        +value boolean
        +negate()
    }
    class StaticJsNull {
        +value null
    }
    class StaticJsUndefined {
        +value undefined
    }
    class StaticJsSymbol {
        +value symbol
        +description string
    }
    class StaticJsPlainObject
    class StaticJsArray
    class StaticJsFunction {
        +strict boolean
        +getNameAsync()
    }
    class StaticJsProxy {
        +proxyTarget StaticJsObject
    }

    class StaticJsScalar["StaticJsScalar"] {
        <<union>>
    }

    StaticJsPrimitive <|-- StaticJsString
    StaticJsPrimitive <|-- StaticJsNumber
    StaticJsPrimitive <|-- StaticJsBoolean
    StaticJsPrimitive <|-- StaticJsNull
    StaticJsPrimitive <|-- StaticJsUndefined
    StaticJsPrimitive <|-- StaticJsObject
    StaticJsObject <|-- StaticJsPlainObject
    StaticJsObject <|-- StaticJsArray
    StaticJsObject <|-- StaticJsCallable
    StaticJsCallable <|-- StaticJsFunction
    StaticJsObject <|-- StaticJsProxy
    StaticJsCallable <|-- StaticJsProxy
    StaticJsObject <|-- StaticJsSymbol
    StaticJsScalar ..> StaticJsString : includes
    StaticJsScalar ..> StaticJsNumber : includes
    StaticJsScalar ..> StaticJsBoolean : includes
    StaticJsScalar ..> StaticJsNull : includes
    StaticJsScalar ..> StaticJsUndefined : includes
    StaticJsScalar ..> StaticJsSymbol : includes
```

---

## Union types

Two union types group related concrete types for type-narrowing purposes:

### StaticJsValue

`StaticJsValue` is a type representing every possible StaticJs value. Use [`isStaticJsValue`](./value.md#isstaticjsvaluevalue) to check, or the more specific guards below to narrow further.

```
StaticJsValue = StaticJsScalar | StaticJsPlainObject | StaticJsArray | StaticJsFunction | ...
```

### StaticJsScalar

`StaticJsScalar` covers the non-compound types. All StaticJsScalar types include a `.value` property reflecting the native, non-sandbox value. Use [`isStaticJsScalar`](./scalar.md#isstaticjsscalarvalue) to narrow to any scalar.

```
StaticJsScalar = StaticJsString | StaticJsNumber | StaticJsBoolean
               | StaticJsNull | StaticJsUndefined | StaticJsSymbol
```

:::note[Symbols are dual-classified]
`StaticJsSymbol` appears in both the `StaticJsScalar` union (it is a primitive in JavaScript) and extends `StaticJsObject` in the interface hierarchy (so the sandbox can support `Symbol.prototype` method access internally). [`isStaticJsScalar`](./scalar.md#isstaticjsscalarvalue) returns `true` for symbols; [`isStaticJsObject`](./object.md#isstaticjsobjectvalue) also returns `true` for them.
:::

---

## Type reference

| Type                                           | Type guard                                                                     | `.value`                                                     |
| ---------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| [StaticJsValue](./value.md)                    | [isStaticJsValue](./value.md#isstaticjsvaluevalue)                             | —                                                            |
| [StaticJsPrimitive](./primitive.md)            | [isStaticJsPrimitive](./primitive.md#isstaticjsprimitivevalue)                 | —                                                            |
| [StaticJsScalar](./scalar.md)                  | [isStaticJsScalar](./scalar.md#isstaticjsscalarvalue)                          | `string \| number \| boolean \| null \| undefined \| symbol` |
| [StaticJsObject](./object.md)                  | [isStaticJsObject](./object.md#isstaticjsobjectvalue)                          | —                                                            |
| [StaticJsCallable](./function.md)              | [isStaticJsCallable](./function.md#isstaticjscallable)                         | —                                                            |
| [StaticJsString](./string.md)                  | [isStaticJsString](./string.md#isstaticjsstringvalue)                          | `string`                                                     |
| [StaticJsNumber](./number.md)                  | [isStaticJsNumber](./number.md#isstaticjsnumbervalue)                          | `number`                                                     |
| [StaticJsBoolean](./boolean.md)                | [isStaticJsBoolean](./boolean.md#isstaticjsbooleanvalue)                       | `boolean`                                                    |
| [StaticJsNull](./null.md)                      | [isStaticJsNull](./null.md#isstaticjsnullvalue)                                | `null`                                                       |
| [StaticJsUndefined](./undefined.md)            | [isStaticJsUndefined](./undefined.md#isstaticjsundefinedvalue)                 | `undefined`                                                  |
| [StaticJsSymbol](./symbol.md)                  | [isStaticJsSymbol](./symbol.md#isstaticjssymbolvalue)                          | `symbol`                                                     |
| [StaticJsPlainObject](./plain-object.md)       | [isStaticJsPlainObject](./plain-object.md#isstaticjsplainobjectvalue)          | —                                                            |
| [StaticJsArray](./array.md)                    | [isStaticJsArray](./array.md#isstaticjsarrayvalue)                             | —                                                            |
| [StaticJsFunction](./function.md)              | [isStaticJsFunction](./function.md#isstaticjsfunction)                         | —                                                            |
| [StaticJsProxy](./proxy.md)                    | [isStaticJsProxy](./proxy.md#isstaticjsproxyvalue)                             | —                                                            |
| [StaticJsMap](./map.md)                        | [isStaticJsMap](./map.md#isstaticjsmapvalue)                                   | —                                                            |
| [StaticJsSet](./set.md)                        | [isStaticJsSet](./set.md#isstaticjssetvalue)                                   | —                                                            |
| [StaticJsPromise](./promise.md)                | [isStaticJsPromise](./promise.md#isstaticjspromisevalue)                       | —                                                            |
| [StaticJsIterator](./iterator.md)              | [isStaticJsIterator](./iterator.md#isstaticjsiteratorvalue)                    | —                                                            |
| [StaticJsAsyncGenerator](./async-generator.md) | [isStaticJsAsyncGenerator](./async-generator.md#isstaticjsasyncgeneratorvalue) | —                                                            |
| [StaticJsGenerator](./generator.md)            | [isStaticJsGenerator](./generator.md#isstaticjsgeneratorvalue)                 | —                                                            |

All type guards and types are importable from `@suntime-js/core`.
