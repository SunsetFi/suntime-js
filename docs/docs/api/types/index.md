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
    StaticJsObject <|-- StaticJsSymbol
    StaticJsObject <|-- StaticJsPlainObject
    StaticJsObject <|-- StaticJsArray
    StaticJsObject <|-- StaticJsCallable
    StaticJsCallable <|-- StaticJsFunction
    StaticJsObject <|-- StaticJsProxy
    StaticJsScalar ..> StaticJsString : includes
    StaticJsScalar ..> StaticJsNumber : includes
    StaticJsScalar ..> StaticJsBoolean : includes
    StaticJsScalar ..> StaticJsNull : includes
    StaticJsScalar ..> StaticJsUndefined : includes
    StaticJsScalar ..> StaticJsSymbol : includes
    StaticJsCallable <|-- StaticJsProxy
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

| Type                                           | Kind           | Type guard                                                                     | `.value`                                                     |
| ---------------------------------------------- | -------------- | ------------------------------------------------------------------------------ | ------------------------------------------------------------ |
| [StaticJsValue](./value.md)                    | Union          | [isStaticJsValue](./value.md#isstaticjsvaluevalue)                             | —                                                            |
| [StaticJsPrimitive](./primitive.md)            | Base interface | [isStaticJsPrimitive](./primitive.md#isstaticjsprimitivevalue)                 | —                                                            |
| [StaticJsScalar](./scalar.md)                  | Union          | [isStaticJsScalar](./scalar.md#isstaticjsscalarvalue)                          | `string \| number \| boolean \| null \| undefined \| symbol` |
| [StaticJsObject](./object.md)                  | Base interface | [isStaticJsObject](./object.md#isstaticjsobjectvalue)                          | —                                                            |
| [StaticJsCallable](./function.md)              | Base interface | [isStaticJsCallable](./function.md#isstaticjscallable)                         | —                                                            |
| [StaticJsString](./string.md)                  | Concrete       | [isStaticJsString](./string.md#isstaticjsstringvalue)                          | `string`                                                     |
| [StaticJsNumber](./number.md)                  | Concrete       | [isStaticJsNumber](./number.md#isstaticjsnumbervalue)                          | `number`                                                     |
| [StaticJsBoolean](./boolean.md)                | Concrete       | [isStaticJsBoolean](./boolean.md#isstaticjsbooleanvalue)                       | `boolean`                                                    |
| [StaticJsNull](./null.md)                      | Concrete       | [isStaticJsNull](./null.md#isstaticjsnullvalue)                                | `null`                                                       |
| [StaticJsUndefined](./undefined.md)            | Concrete       | [isStaticJsUndefined](./undefined.md#isstaticjsundefinedvalue)                 | `undefined`                                                  |
| [StaticJsSymbol](./symbol.md)                  | Concrete       | [isStaticJsSymbol](./symbol.md#isstaticjssymbolvalue)                          | `symbol`                                                     |
| [StaticJsPlainObject](./plain-object.md)       | Concrete       | [isStaticJsPlainObject](./plain-object.md#isstaticjsplainobjectvalue)          | —                                                            |
| [StaticJsArray](./array.md)                    | Concrete       | [isStaticJsArray](./array.md#isstaticjsarrayvalue)                             | —                                                            |
| [StaticJsFunction](./function.md)              | Concrete       | [isStaticJsFunction](./function.md#isstaticjsfunction)                         | —                                                            |
| [StaticJsProxy](./proxy.md)                    | Concrete       | [isStaticJsProxy](./proxy.md#isstaticjsproxyvalue)                             | —                                                            |
| [StaticJsMap](./map.md)                        | Concrete       | [isStaticJsMap](./map.md#isstaticjsmapvalue)                                   | —                                                            |
| [StaticJsSet](./set.md)                        | Concrete       | [isStaticJsSet](./set.md#isstaticjssetvalue)                                   | —                                                            |
| [StaticJsPromise](./promise.md)                | Concrete       | [isStaticJsPromise](./promise.md#isstaticjspromisevalue)                       | —                                                            |
| [StaticJsIterator](./iterator.md)              | Concrete       | [isStaticJsIterator](./iterator.md#isstaticjsiteratorvalue)                    | —                                                            |
| [StaticJsAsyncGenerator](./async-generator.md) | Concrete       | [isStaticJsAsyncGenerator](./async-generator.md#isstaticjsasyncgeneratorvalue) | —                                                            |
| [StaticJsGenerator](./generator.md)            | Internal       | —                                                                              | —                                                            |

All type guards and types (except `StaticJsGenerator`) are importable from `@suntime-js/core`.
