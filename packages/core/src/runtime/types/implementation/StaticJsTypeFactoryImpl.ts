import { ThrowCompletion } from "../../../evaluator/completions/ThrowCompletion.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type { StaticJsArray } from "../StaticJsArray.js";
import type { StaticJsFunction } from "../StaticJsFunction.js";
import type {
  StaticJsObjectLike,
  StaticJsObjectPropertyKey,
} from "../StaticJsObjectLike.js";
import type { StaticJsObject } from "../StaticJsObject.js";
import type { StaticJsPropertyDescriptor } from "../StaticJsPropertyDescriptor.js";
import type {
  ErrorTypeName,
  StaticJsFunctionTypeCreationOptions,
} from "../StaticJsTypeFactory.js";
import type StaticJsTypeFactory from "../StaticJsTypeFactory.js";
import { isErrorTypeName } from "../StaticJsTypeFactory.js";
import type { StaticJsValue } from "../StaticJsValue.js";
import { isStaticJsValue } from "../StaticJsValue.js";
import type { StaticJsBoolean } from "../StaticJsBoolean.js";
import type { StaticJsUndefined } from "../StaticJsUndefined.js";
import type { StaticJsNull } from "../StaticJsNull.js";
import { isStaticJsNull } from "../StaticJsNull.js";
import type { StaticJsNumber } from "../StaticJsNumber.js";
import type { StaticJsString } from "../StaticJsString.js";
import type { StaticJsSymbol } from "../StaticJsSymbol.js";

import type {
  IntrinsicSymbols,
  Constructors,
  Prototypes,
} from "../../intrinsics/intrinsics.js";

import { WeakValueMap } from "../../../internal/WeakValueMap.js";

import StaticJsArrayImpl from "./StaticJsArrayImpl.js";
import StaticJsBooleanImpl from "./StaticJsBooleanImpl.js";
import StaticJsNullImpl from "./StaticJsNullImpl.js";
import StaticJsNumberImpl from "./StaticJsNumberImpl.js";
import StaticJsObjectImpl from "./StaticJsObjectImpl.js";
import StaticJsStringImpl from "./StaticJsStringImpl.js";
import StaticJsSymbolImpl, {
  getSymbolProxyOwner,
} from "./StaticJsSymbolImpl.js";
import StaticJsUndefinedImpl from "./StaticJsUndefinedImpl.js";
import StaticJsExternalFunction from "./StaticJsExternalFunction.js";
import StaticJsExternalObject from "./StaticJsExternalObject.js";
import StaticJsFunctionImpl from "./StaticJsFunctionImpl.js";
import { getStaticJsObjectLikeProxyOwner } from "./create-object-proxy.js";

export default class StaticJsTypeFactoryImpl implements StaticJsTypeFactory {
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
  private readonly _externalObjectMap = new WeakValueMap<
    object,
    StaticJsObject
  >();

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
      | Record<string, StaticJsPropertyDescriptor>
      | Map<StaticJsObjectPropertyKey, StaticJsPropertyDescriptor>,
    prototype?: StaticJsObjectLike | StaticJsNull | null,
  ): StaticJsObject {
    if (prototype === undefined) {
      prototype = this._prototypes.objectProto;
    }
    const obj = new StaticJsObjectImpl(
      this._realm,
      isStaticJsNull(prototype) ? null : prototype,
    );

    if (properties) {
      const iterator =
        properties instanceof Map
          ? properties.entries()
          : Object.entries(properties);
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
    return this._realm.invokeEvaluatorSync(
      StaticJsArrayImpl.create(this._realm, itemsOrLength),
    );
  }

  function(
    name: string,
    func: (this: StaticJsValue, ...args: StaticJsValue[]) => StaticJsValue,
    opts: StaticJsFunctionTypeCreationOptions = {},
  ): StaticJsFunction {
    return new StaticJsFunctionImpl(
      this._realm,
      name,
      function* (thisArg: StaticJsValue, ...args: StaticJsValue[]) {
        try {
          const result = func.apply(thisArg, args);
          if (!isStaticJsValue(result)) {
            throw new TypeError(
              `Function ${name} returned non-StaticJsValue: ${result}`,
            );
          }
          return result;
        } catch (e) {
          if (isStaticJsValue(e)) {
            throw new ThrowCompletion(e);
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
          value: this.string(`${message}`),
        },
      },
      proto,
    );
    return error;
  }

  toStaticJsValue(value: boolean): StaticJsBoolean;
  toStaticJsValue(value: number): StaticJsNumber;
  toStaticJsValue(value: string): StaticJsString;
  toStaticJsValue(value: unknown[]): StaticJsArray;
  toStaticJsValue(value: object): StaticJsObject;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  toStaticJsValue(value: Function): StaticJsFunction;
  toStaticJsValue(value: symbol): StaticJsSymbol;
  toStaticJsValue(value: null): StaticJsNull;
  toStaticJsValue(value: undefined): StaticJsUndefined;
  toStaticJsValue(value: unknown): StaticJsValue;
  toStaticJsValue(value: unknown): StaticJsValue {
    const owner =
      getStaticJsObjectLikeProxyOwner(value) ?? getSymbolProxyOwner(value);
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
      value = value.toJsSync();
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
      throw new Error(
        `Cannot convert ${value} to StaticJsValue: Unknown type.`,
      );
    }
  }

  boolean(value: boolean): StaticJsBoolean {
    if (typeof value !== "boolean") {
      throw new TypeError(
        `Cannot convert ${value} to StaticJsBoolean: Expected boolean.`,
      );
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
      case Symbol.asyncDispose:
        return this._symbols.asyncDispose;
      case Symbol.asyncIterator:
        return this._symbols.asyncIterator;
      case Symbol.dispose:
        return this._symbols.dispose;
      case Symbol.hasInstance:
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

    return new StaticJsSymbolImpl(this._realm, value);
  }

  private _toStaticJsValueArray(value: unknown[]): StaticJsArray {
    const values = value.map((v) => this.toStaticJsValue(v));
    return this._realm.invokeEvaluatorSync(
      StaticJsArrayImpl.create(this._realm, values),
    );
  }

  private _toStaticJsValueFunction(
    value: (...args: unknown[]) => unknown,
  ): StaticJsFunction {
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
