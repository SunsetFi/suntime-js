import { Completion } from "../../../evaluator/completions/Completion.js";
import { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";
import typedKeys from "../../../utils/typed-keys.js";
import { WeakValueMap } from "../../../utils/WeakValueMap.js";
import { createArrayFromList } from "../../algorithms/create-array-from-list.js";
import type { IntrinsicSymbols, Constructors, Prototypes } from "../../intrinsics/intrinsics.js";
import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";
import type { StaticJsArray } from "../StaticJsArray.js";
import type { StaticJsBoolean } from "../StaticJsBoolean.js";
import { StaticJsCallable } from "../StaticJsCallable.js";
import type { StaticJsFunction } from "../StaticJsFunction.js";
import type { StaticJsNull } from "../StaticJsNull.js";
import { isStaticJsNull } from "../StaticJsNull.js";
import type { StaticJsNumber } from "../StaticJsNumber.js";
import { isStaticJsObject, type StaticJsObject } from "../StaticJsObject.js";
import type { StaticJsPlainObject } from "../StaticJsPlainObject.js";
import type { StaticJsPropertyDescriptorRecord } from "../StaticJsPropertyDescriptor.js";
import { toStaticJsPropertyKey, type StaticJsPropertyKey } from "../StaticJsPropertyKey.js";
import {
  StaticJsProxy,
  StaticJsProxyHandlerKeys,
  StaticJsProxyHandlers,
  StaticJsProxyTarget,
} from "../StaticJsProxy.js";
import type { StaticJsString } from "../StaticJsString.js";
import type { StaticJsSymbol } from "../StaticJsSymbol.js";
import type { ErrorTypeName, StaticJsFunctionTypeCreationOptions } from "../StaticJsTypeFactory.js";
import type { StaticJsTypeFactory } from "../StaticJsTypeFactory.js";
import { isErrorTypeName } from "../StaticJsTypeFactory.js";
import type { StaticJsUndefined } from "../StaticJsUndefined.js";
import type { StaticJsValue } from "../StaticJsValue.js";
import { isStaticJsValue } from "../StaticJsValue.js";

import { StaticJsExternalFunction } from "./functions/StaticJsExternalFunction.js";
import { StaticJsNativeFunctionImpl } from "./functions/StaticJsNativeFunctionImpl.js";
import { getStaticJsObjectProxyOwner } from "./objects/create-object-proxy.js";
import { StaticJsArrayImpl } from "./objects/StaticJsArrayImpl.js";
import { StaticJsExternalObject } from "./objects/StaticJsExternalObject.js";
import { StaticJsPlainObjectImpl } from "./objects/StaticJsPlainObjectImpl.js";
import { StaticJsBooleanImpl } from "./primitives/StaticJsBooleanImpl.js";
import { StaticJsNullImpl } from "./primitives/StaticJsNullImpl.js";
import { StaticJsNumberImpl } from "./primitives/StaticJsNumberImpl.js";
import { StaticJsStringImpl } from "./primitives/StaticJsStringImpl.js";
import { StaticJsSymbolImpl, getSymbolProxyOwner } from "./primitives/StaticJsSymbolImpl.js";
import { StaticJsUndefinedImpl } from "./primitives/StaticJsUndefinedImpl.js";
import { StaticJsProxyImpl } from "./StaticJsProxyImpl.js";

export class StaticJsTypeFactoryImpl implements StaticJsTypeFactory {
  private readonly _prototypes: Prototypes;
  private readonly _symbols: IntrinsicSymbols;
  private _constructors: Constructors | undefined;

  // The registry for our local Symbol.for()
  private readonly _symbolRegistry = new Map<string, StaticJsSymbol>();

  // Map native objects to our StaticJsValue wrappers.
  // We want to be weak for the value, not the key, as we can forget about these objects
  // when the runtime is no longer using them, but we want to keep the instance the same
  // so long as an instance actually exists in the runtime.
  // We do NOT want or need a weak key, because:
  // - StaticJsExternalObject needs to keep the backing object around for property access, and thus
  //   requires a strong reference to the key.
  private readonly _externalObjectMap = new WeakValueMap<object, StaticJsPlainObject>();

  private readonly _zero: StaticJsNumber;
  private readonly _NaN: StaticJsNumber;
  private readonly _Infinity: StaticJsNumber;

  private readonly _false: StaticJsBoolean;
  private readonly _true: StaticJsBoolean;

  private readonly _null: StaticJsNull;
  private readonly _undefined: StaticJsUndefined;

  constructor(
    private readonly _realm: StaticJsRealm,
    prototypes: Prototypes,
    symbols: IntrinsicSymbols,
  ) {
    this._zero = new StaticJsNumberImpl(_realm, 0);
    this._NaN = new StaticJsNumberImpl(_realm, NaN);
    this._Infinity = new StaticJsNumberImpl(_realm, Infinity);

    this._false = new StaticJsBooleanImpl(_realm, false);
    this._true = new StaticJsBooleanImpl(_realm, true);

    this._null = new StaticJsNullImpl(_realm);
    this._undefined = new StaticJsUndefinedImpl(_realm);

    this._prototypes = { ...prototypes };
    Object.freeze(this._prototypes);

    this._symbols = { ...symbols };
    Object.freeze(this._symbols);
  }

  _initializeConstructors(constructors: Constructors) {
    this._constructors = { ...constructors };
    Object.freeze(this._constructors);
  }

  get prototypes(): Prototypes {
    return this._prototypes;
  }

  get constructors(): Constructors {
    if (!this._constructors) {
      throw new Error("Constructors have not yet been initialized");
    }

    return this._constructors;
  }

  get symbols(): IntrinsicSymbols {
    return this._symbols;
  }

  get symbolRegistry(): Map<string, StaticJsSymbol> {
    return this._symbolRegistry;
  }

  get true(): StaticJsBoolean {
    return this._true;
  }

  get false(): StaticJsBoolean {
    return this._false;
  }

  get undefined(): StaticJsUndefined {
    return this._undefined;
  }

  get null(): StaticJsNull {
    return this._null;
  }

  get zero(): StaticJsNumber {
    return this._zero;
  }

  get NaN(): StaticJsNumber {
    return this._NaN;
  }

  get Infinity(): StaticJsNumber {
    return this._Infinity;
  }

  object(
    properties?:
      | Record<string, StaticJsPropertyDescriptorRecord>
      | Map<StaticJsPropertyKey, StaticJsPropertyDescriptorRecord>,
    prototype?: StaticJsObject | StaticJsNull | null,
  ): StaticJsPlainObject {
    if (prototype === undefined) {
      prototype = this._prototypes.objectProto;
    }
    const obj = new StaticJsPlainObjectImpl(
      this._realm,
      isStaticJsNull(prototype) ? null : prototype,
    );

    if (properties) {
      const iterator =
        properties instanceof Map ? properties.entries() : Object.entries(properties);
      for (const [key, value] of iterator) {
        obj.defineOwnPropertySync(key, value);
      }
    }

    return obj;
  }

  symbol(description?: string | undefined): StaticJsSymbol {
    return new StaticJsSymbolImpl(this._realm, description);
  }

  array(itemsOrLength?: StaticJsValue[] | number): StaticJsArray {
    if (itemsOrLength === undefined || typeof itemsOrLength === "number") {
      return new StaticJsArrayImpl(this._realm, itemsOrLength);
    } else if (Array.isArray(itemsOrLength)) {
      if (!itemsOrLength.every(isStaticJsValue)) {
        throw new TypeError("All items in the array must be StaticJsValues");
      }
      return this._realm.invokeEvaluatorSync(createArrayFromList(itemsOrLength ?? []));
    } else {
      throw new TypeError(
        "Invalid argument for array creation: Must be a number or an array of StaticJsValues",
      );
    }
  }

  function(
    name: string,
    func: (this: StaticJsValue, ...args: StaticJsValue[]) => StaticJsValue,
    opts: StaticJsFunctionTypeCreationOptions = {},
  ): StaticJsFunction {
    return new StaticJsNativeFunctionImpl(
      this._realm,
      name,
      function* (thisArg: StaticJsValue, ...args: StaticJsValue[]) {
        try {
          const result = func.apply(thisArg, args);
          if (!isStaticJsValue(result)) {
            throw new TypeError(`Function ${name} returned non-StaticJsValue: ${result}`);
          }
          return result;
        } catch (e) {
          if (isStaticJsValue(e)) {
            throw Completion.Throw(e);
          }

          throw e;
        }
      },
      {
        construct: opts.isConstructor ?? false,
        length: opts.length ?? func.length,
        prototype: opts.prototype ?? this._prototypes.functionProto,
      },
    );
  }

  error(message: string): StaticJsObject;
  error(name: ErrorTypeName, message: string): StaticJsObject;
  error(nameOrMessage: string, message?: string): StaticJsObject {
    let name = "Error";
    if (message !== undefined) {
      name = nameOrMessage;
    } else {
      message = nameOrMessage;
    }

    let proto: StaticJsObject;
    switch (name) {
      case "Error":
      default:
        proto = this._prototypes.errorProto;
        break;
      case "TypeError":
        proto = this._prototypes.typeErrorProto;
        break;
      case "ReferenceError":
        proto = this._prototypes.referenceErrorProto;
        break;
      case "SyntaxError":
        proto = this._prototypes.syntaxErrorProto;
        break;
      case "RangeError":
        proto = this._prototypes.rangeErrorProto;
        break;
      case "EvalError":
        proto = this._prototypes.evalErrorProto;
        break;
    }

    const error = this.object(
      {
        name: {
          enumerable: false,
          writable: true,
          configurable: true,
          value: this.string(name),
        },
        message: {
          enumerable: false,
          writable: true,
          configurable: true,
          value: this.string(message),
        },
      },
      proto,
    );
    return error;
  }

  proxy(target: StaticJsProxyTarget, handlers: StaticJsProxyHandlers): StaticJsProxy {
    const handlerKeys = typedKeys(handlers);
    const unknownKey = handlerKeys.find(
      (x) => !StaticJsProxyHandlerKeys.includes(x) || typeof handlers[x] !== "function",
    );
    if (unknownKey) {
      throw new TypeError(`Invalid proxy handler key: ${unknownKey}`);
    }

    let resolvedTarget: StaticJsObject | StaticJsCallable;
    if (target === "object") {
      resolvedTarget = this.object();
    } else if (target === "function") {
      resolvedTarget = this.function("proxyTargetFunction", () => this.undefined);
    } else if (isStaticJsObject(target)) {
      resolvedTarget = target;
    } else if (typeof target === "function") {
      resolvedTarget = this._toStaticJsValueFunction(target);
    } else if (target != null && typeof target === "object") {
      resolvedTarget = this._toStaticJsValueObject(target);
    } else {
      throw new TypeError(
        `Invalid proxy target: ${target}. Must be an object, function, "object", or "function".`,
      );
    }

    // oxlint-disable-next-line typescript/no-this-alias
    const typeFactory = this;
    const handlersResolved: Partial<Record<keyof StaticJsProxyHandlers, StaticJsFunction>> = {};
    for (const key of handlerKeys) {
      const converter = proxyHandlerConverters[key];
      const handlerValue = handlers[key]!;
      // FIXME: Support actually doing async evaluation in these
      const handlerFunc = new StaticJsNativeFunctionImpl(
        this._realm,
        key,
        function* (_thisArg: StaticJsValue, ...args: StaticJsValue[]) {
          let invokeArgs: unknown[];
          if (converter) {
            invokeArgs = args.map((arg, index) => (converter[index] ? converter[index](arg) : arg));
          } else {
            invokeArgs = args;
          }
          const result = (handlerValue as any).apply(undefined, invokeArgs);
          const evaluated = yield* EvaluationGenerator(result);
          return typeFactory.toStaticJsValue(evaluated);
        },
      );
      handlersResolved[key] = handlerFunc;
    }

    const descriptors = Object.fromEntries(
      Object.entries(handlersResolved).map(([key, value]) => [
        key,
        {
          value,
          writable: true,
          enumerable: true,
          configurable: true,
        },
      ]),
    ) as Record<string, StaticJsPropertyDescriptorRecord>;
    const handlersObject = this.object(descriptors);

    return new StaticJsProxyImpl(resolvedTarget, handlersObject, this._realm);
  }

  toStaticJsValue(value: boolean): StaticJsBoolean;
  toStaticJsValue(value: number): StaticJsNumber;
  toStaticJsValue(value: string): StaticJsString;
  toStaticJsValue(value: unknown[]): StaticJsArray;
  toStaticJsValue(value: object): StaticJsPlainObject;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  toStaticJsValue(value: Function): StaticJsFunction;
  toStaticJsValue(value: symbol): StaticJsSymbol;
  toStaticJsValue(value: null): StaticJsNull;
  toStaticJsValue(value: undefined): StaticJsUndefined;
  toStaticJsValue(value: unknown): StaticJsValue;
  toStaticJsValue(value: unknown): StaticJsValue {
    const owner = getStaticJsObjectProxyOwner(value) ?? getSymbolProxyOwner(value);
    if (owner) {
      value = owner;
    }

    // Check to see if its a StaticJsValue from another realm.
    if (isStaticJsValue(value)) {
      if (value.realm === this._realm) {
        return value;
      }

      // Unwrap it to re-wrap with our own realm.
      // This will result in foreign StaticJs objects being wrapped as external objects, which is desired.
      value = value.toNative();
    }

    if (value === null) {
      return this._toStaticJsValueNull();
    } else if (value === undefined) {
      return this._toStaticJsValueUndefined();
    } else if (typeof value === "boolean") {
      return this.boolean(value);
    } else if (typeof value === "number") {
      return this.number(value);
    } else if (typeof value === "string") {
      return this.string(value);
    } else if (typeof value === "symbol") {
      return this._toStaticJsValueSymbol(value);
    } else if (Array.isArray(value)) {
      return this._toStaticJsValueArray(value);
    } else if (isFunction(value)) {
      return this._toStaticJsValueFunction(value);
    } else if (typeof value === "object") {
      return this._toStaticJsValueObject(value);
    } else {
      throw new Error(`Cannot convert ${value} to StaticJsValue: Unknown type.`);
    }
  }

  boolean(value: boolean): StaticJsBoolean {
    if (typeof value !== "boolean") {
      throw new TypeError(`Cannot convert ${value} to StaticJsBoolean: Expected boolean.`);
    }

    if (value) {
      return this.true;
    }

    return this.false;
  }

  number(value: number): StaticJsNumber {
    return new StaticJsNumberImpl(this._realm, value);
  }

  string(value: string): StaticJsString {
    return new StaticJsStringImpl(this._realm, value);
  }

  private _toStaticJsValueSymbol(value: symbol): StaticJsSymbol {
    // Spec says these symbols are consistent across realms, so convert them
    // to the appropriate intrinsic symbol.
    // This saves us having to care about unwrapping them in equality checks elsewhere.
    switch (value) {
      case Symbol.asyncIterator:
        return this._symbols.asyncIterator;
      case Symbol.dispose:
        return this._symbols.hasInstance;
      case Symbol.isConcatSpreadable:
        return this._symbols.isConcatSpreadable;
      case Symbol.iterator:
        return this._symbols.iterator;
      case Symbol.match:
        return this._symbols.match;
      case Symbol.matchAll:
        return this._symbols.matchAll;
      case Symbol.observable:
        return this._symbols.observable;
      case Symbol.replace:
        return this._symbols.replace;
      case Symbol.search:
        return this._symbols.search;
      case Symbol.species:
        return this._symbols.species;
      case Symbol.split:
        return this._symbols.split;
      case Symbol.toPrimitive:
        return this._symbols.toPrimitive;
      case Symbol.toStringTag:
        return this._symbols.toStringTag;
      case Symbol.unscopables:
        return this._symbols.unscopables;
    }

    if ("dispose" in Symbol) {
      switch (value) {
        case Symbol.asyncDispose:
          return this._symbols.asyncDispose;
        case Symbol.dispose:
          return this._symbols.dispose;
      }
    }

    return new StaticJsSymbolImpl(this._realm, value);
  }

  private _toStaticJsValueArray(value: unknown[]): StaticJsArray {
    const values = value.map((v) => this.toStaticJsValue(v));
    return this._realm.invokeEvaluatorSync(createArrayFromList(values));
  }

  private _toStaticJsValueFunction(value: Function): StaticJsFunction {
    return new StaticJsExternalFunction(this._realm, value.name, value);
  }

  private _toStaticJsValueObject(value: object): StaticJsObject {
    if (value instanceof Error && isErrorTypeName(value.name)) {
      return this.error(value.name, value.message);
    }

    let obj = this._externalObjectMap.get(value);
    if (!obj) {
      obj = new StaticJsExternalObject(this._realm, value);
      this._externalObjectMap.set(value, obj);
    }

    return obj;
  }

  private _toStaticJsValueNull(): StaticJsNull {
    return this._null;
  }

  private _toStaticJsValueUndefined(): StaticJsUndefined {
    return this._undefined;
  }
}

// Just "typeof f === 'function'" is not enough, because it will type it as Function.
// There is nothing wrong with this, but the linter gets angry, and so this appeases it.
function isFunction(f: unknown): f is (...args: unknown[]) => unknown {
  return typeof f === "function";
}

const convertIdentity = (x: StaticJsValue) => x;
const proxyHandlerConverters: Partial<
  Record<keyof StaticJsProxyHandlers, ((value: StaticJsValue) => unknown)[]>
> = {
  getOwnPropertyDescriptor: [convertIdentity, toStaticJsPropertyKey],
  defineProperty: [convertIdentity, toStaticJsPropertyKey, convertIdentity],
  has: [convertIdentity, toStaticJsPropertyKey],
  get: [convertIdentity, toStaticJsPropertyKey, convertIdentity],
  set: [convertIdentity, toStaticJsPropertyKey, convertIdentity, convertIdentity],
  deleteProperty: [convertIdentity, toStaticJsPropertyKey],
};
