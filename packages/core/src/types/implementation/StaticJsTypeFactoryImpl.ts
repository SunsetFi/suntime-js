import type { IntrinsicSymbols } from "#intrinsics/intrinsics.js";
import type { StaticJsRealm } from "#realm/StaticJsRealm.js";
import type { StaticJsMap } from "#types/StaticJsMap.js";
import type { StaticJsSet } from "#types/StaticJsSet.js";

import { createArrayFromList } from "#algorithms/create-array-from-list.js";
import { createNonEnumerableDataPropertyOrThrow } from "#algorithms/create-non-enumerable-data-property-or-throw.js";
import { StaticJsRuntimeError } from "#errors/StaticJsRuntimeError.js";
import { Completion } from "#evaluator/completions/Completion.js";
import { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";

import type { HostAccessArg } from "../HostAccessOptions.js";
import type { StaticJsArray } from "../StaticJsArray.js";
import type { StaticJsBoolean } from "../StaticJsBoolean.js";
import type { StaticJsFunction } from "../StaticJsFunction.js";
import type { StaticJsNull } from "../StaticJsNull.js";
import type { StaticJsNumber } from "../StaticJsNumber.js";
import type { StaticJsPlainObject } from "../StaticJsPlainObject.js";
import type { StaticJsPropertyKey } from "../StaticJsPropertyKey.js";
import type {
  StaticJsProxy,
  StaticJsProxyHandlers,
  StaticJsProxyTarget,
} from "../StaticJsProxy.js";
import type { StaticJsString } from "../StaticJsString.js";
import type { StaticJsSymbol } from "../StaticJsSymbol.js";
import type { StaticJsFunctionTypeCreationOptions } from "../StaticJsTypeFactory.js";
import type { StaticJsTypeFactory } from "../StaticJsTypeFactory.js";
import type { StaticJsUndefined } from "../StaticJsUndefined.js";
import type { StaticJsValue } from "../StaticJsValue.js";
import type { WellKnownErrorName } from "../well-known-errors.js";

import { isStaticJsNull } from "../StaticJsNull.js";
import { isStaticJsObject, type StaticJsObject } from "../StaticJsObject.js";
import {
  validateStaticJsPropertyDescriptorRecord,
  type StaticJsPropertyDescriptorRecord,
} from "../StaticJsPropertyDescriptor.js";
import { isStaticJsSymbol } from "../StaticJsSymbol.js";
import { isStaticJsUndefined } from "../StaticJsUndefined.js";
import { isStaticJsValue } from "../StaticJsValue.js";
import { createHostDefinedProxy } from "./create-host-defined-proxy.js";
import { StaticJsNativeFunctionImpl } from "./functions/StaticJsNativeFunctionImpl.js";
import { StaticJsHostProxyFactory } from "./host-access/StaticJsHostProxyFactory.js";
import { getStaticJsObjectProxyOwner } from "./objects/create-object-proxy.js";
import { StaticJsArrayImpl } from "./objects/StaticJsArrayImpl.js";
import { StaticJsErrorImpl } from "./objects/StaticJsErrorImpl.js";
import { StaticJsMapImpl } from "./objects/StaticJsMapImpl.js";
import { StaticJsPlainObjectImpl } from "./objects/StaticJsPlainObjectImpl.js";
import { StaticJsSetImpl } from "./objects/StaticJsSetImpl.js";
import { StaticJsBooleanImpl } from "./primitives/StaticJsBooleanImpl.js";
import { StaticJsNullImpl } from "./primitives/StaticJsNullImpl.js";
import { StaticJsNumberImpl } from "./primitives/StaticJsNumberImpl.js";
import { StaticJsStringImpl } from "./primitives/StaticJsStringImpl.js";
import { StaticJsSymbolImpl, getSymbolProxyOwner } from "./primitives/StaticJsSymbolImpl.js";
import { StaticJsUndefinedImpl } from "./primitives/StaticJsUndefinedImpl.js";
import { buildIntrinsicSymbolRecord, getWellKnownSymbol } from "./well-known-symbols.js";

export class StaticJsTypeFactoryImpl implements StaticJsTypeFactory {
  private readonly _symbols: IntrinsicSymbols;

  private readonly _zero: StaticJsNumber;
  private readonly _NaN: StaticJsNumber;
  private readonly _Infinity: StaticJsNumber;

  private readonly _false: StaticJsBoolean;
  private readonly _true: StaticJsBoolean;

  private readonly _null: StaticJsNull;
  private readonly _undefined: StaticJsUndefined;

  private readonly _hostProxyFactory: StaticJsHostProxyFactory;

  constructor(
    private readonly _realm: StaticJsRealm,
    private readonly _symbolRegistry: Map<string, StaticJsSymbol>,
  ) {
    this._zero = new StaticJsNumberImpl(_realm, 0);
    this._NaN = new StaticJsNumberImpl(_realm, NaN);
    this._Infinity = new StaticJsNumberImpl(_realm, Infinity);

    this._false = new StaticJsBooleanImpl(_realm, false);
    this._true = new StaticJsBooleanImpl(_realm, true);

    this._null = new StaticJsNullImpl(_realm);
    this._undefined = new StaticJsUndefinedImpl(_realm);

    const intrinsics = _realm.intrinsics;

    this._symbols = Object.freeze(buildIntrinsicSymbolRecord(intrinsics));

    this._hostProxyFactory = new StaticJsHostProxyFactory(this._realm);
  }

  get [Symbol.toStringTag](): string {
    return "StaticJsTypeFactory";
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
      prototype = this._realm.intrinsics["Object.prototype"];
    }

    if (prototype !== null && !isStaticJsNull(prototype) && !isStaticJsObject(prototype)) {
      throw new TypeError("Prototype must be a StaticJsObject, StaticJsNull, or null");
    }

    Object.values(properties ?? {}).forEach(validateStaticJsPropertyDescriptorRecord);

    const obj = new StaticJsPlainObjectImpl(
      this._realm,
      isStaticJsNull(prototype) ? null : prototype,
      properties,
    );

    return obj;
  }

  symbol(description?: string | symbol | undefined): StaticJsSymbol {
    if (typeof description === "symbol") {
      const wellKnown = getWellKnownSymbol(description, this._realm.intrinsics);
      if (wellKnown) {
        return wellKnown;
      }

      const owner = getSymbolProxyOwner(description);
      if (owner) {
        return owner;
      }
    }

    // FIXME: We should cache the symbols ourselves, not rely on this and getSymbolProxyOwner to do it for us.
    return new StaticJsSymbolImpl(this._realm, description);
  }

  array(
    itemsOrLength?: readonly StaticJsValue[] | Iterable<StaticJsValue> | number,
  ): StaticJsArray {
    if (itemsOrLength === undefined || typeof itemsOrLength === "number") {
      return new StaticJsArrayImpl(this._realm, itemsOrLength);
    }

    const items = Array.from(itemsOrLength);
    if (!items.every(isStaticJsValue)) {
      throw new TypeError("All items must be StaticJsValue");
    }

    // This should be safe, as it never invokes sandboxed code.
    return createArrayFromList.safe(items, this._realm);
  }

  set(items?: Iterable<StaticJsValue> | readonly StaticJsValue[]): StaticJsSet {
    const set = new StaticJsSetImpl(this._realm);

    // We use the manual methods and do NOT check the prototype, so there is
    // no chance of invoking sandbox code
    if (items) {
      for (const item of items) {
        set.addValueSync(item);
      }
    }

    return set;
  }

  map(
    items?: Iterable<[StaticJsValue, StaticJsValue]> | readonly [StaticJsValue, StaticJsValue][],
  ): StaticJsMap {
    const map = new StaticJsMapImpl(this._realm);

    // We use the manual methods and do NOT check the prototype, so there is
    // no chance of invoking sandbox code
    if (items) {
      for (const [key, value] of items) {
        map.setValueSync(key, value);
      }
    }

    return map;
  }

  function(
    name: string,
    func: (this: StaticJsValue, ...args: StaticJsValue[]) => StaticJsValue,
    opts: StaticJsFunctionTypeCreationOptions = {},
  ): StaticJsFunction {
    const realm = this._realm;
    return new StaticJsNativeFunctionImpl(
      realm,
      name,
      function* (thisArg: StaticJsValue, ...args: StaticJsValue[]) {
        try {
          // When self-sandboxing, func.apply might be resolved through a proxy.
          // We need to invoke the function directly without relying on such mechanisms.
          const functionResult = Reflect.apply(func, thisArg, args);
          const result = yield* EvaluationGenerator(functionResult);
          if (!isStaticJsValue(result)) {
            throw new TypeError(`Function ${name} returned non-StaticJsValue: ${functionResult}`);
          }
          return result;
        } catch (e) {
          if (e instanceof StaticJsRuntimeError) {
            if (e.thrown.realm === realm) {
              throw Completion.Throw(e.thrown);
            }

            throw e;
          }

          if (isStaticJsValue(e) && e.realm === realm) {
            throw Completion.Throw(e);
          }

          throw e;
        }
      },
      {
        construct: opts.isConstructor ?? false,
        length: opts.length ?? func.length,
        prototype: opts.prototype ?? realm.intrinsics["Function.prototype"],
      },
    );
  }

  error(message: string): StaticJsObject;
  error(name: WellKnownErrorName, message: string): StaticJsObject;
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
        proto = this._realm.intrinsics["Error.prototype"];
        break;
      case "TypeError":
        proto = this._realm.intrinsics["TypeError.prototype"];
        break;
      case "ReferenceError":
        proto = this._realm.intrinsics["ReferenceError.prototype"];
        break;
      case "SyntaxError":
        proto = this._realm.intrinsics["SyntaxError.prototype"];
        break;
      case "RangeError":
        proto = this._realm.intrinsics["RangeError.prototype"];
        break;
      case "EvalError":
        proto = this._realm.intrinsics["EvalError.prototype"];
        break;
      case "URIError":
        proto = this._realm.intrinsics["URIError.prototype"];
        break;
    }

    const error = new StaticJsErrorImpl(this._realm, proto);

    // Safe: Invokes defineOwnProperty on our error object, which cannot be sandboxed code.
    this._realm.invokeEvaluatorSync(
      createNonEnumerableDataPropertyOrThrow(error, "message", this.string(message!)),
    );

    return error;
  }

  proxy(target: StaticJsProxyTarget, handlers: StaticJsProxyHandlers): StaticJsProxy {
    return createHostDefinedProxy(target, handlers, this._realm);
  }

  toStaticJsValue(value: boolean): StaticJsBoolean;
  toStaticJsValue(value: number): StaticJsNumber;
  toStaticJsValue(value: string): StaticJsString;
  toStaticJsValue(value: unknown[], opts?: HostAccessArg): StaticJsArray;
  toStaticJsValue(value: object, opts?: HostAccessArg): StaticJsPlainObject;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  toStaticJsValue(value: Function, opts?: HostAccessArg): StaticJsFunction;
  toStaticJsValue(value: symbol): StaticJsSymbol;
  toStaticJsValue(value: null): StaticJsNull;
  toStaticJsValue(value: undefined): StaticJsUndefined;
  toStaticJsValue(value: unknown, opts?: HostAccessArg): StaticJsValue;
  toStaticJsValue(value: unknown, opts?: HostAccessArg): StaticJsValue {
    const owner = getStaticJsObjectProxyOwner(value) ?? getSymbolProxyOwner(value);
    if (owner) {
      value = owner;
    }

    // Check to see if its a StaticJsValue from another realm.
    if (isStaticJsValue(value)) {
      if (value.realm === this._realm) {
        // Same realm: preserve it verbatim (no-op).
        return value;
      }

      // Realm-agnostic interned values (symbols, null, undefined) must be
      // normalized to THIS realm's representation. In particular a foreign
      // well-known symbol has to map back to this realm's intrinsic symbol so
      // it keeps working as a property key. Other foreign values (objects,
      // functions, value-bearing scalars) fall through to be wrapped as opaque
      // external handles below, preserving their StaticJsValue surface.
      // NOTE: I am not really sure the wisdom of making these exceptions, but they were needed
      // at the moment to get the self-sandboxing in the docs site working.
      // TODO: Rethink this and see if we can make the docs site deal with this instead.
      if (isStaticJsSymbol(value) || isStaticJsNull(value) || isStaticJsUndefined(value)) {
        value = value.toNative();
      }
    }

    const valueType = typeof value;

    if (value === null) return this._toStaticJsValueNull();
    if (value === undefined) return this._toStaticJsValueUndefined();
    if (valueType === "boolean") return this.boolean(value as boolean);
    if (valueType === "number") return this.number(value as number);
    if (valueType === "string") return this.string(value as string);
    if (valueType === "symbol") return this._toStaticJsValueSymbol(value as symbol);

    if (valueType === "object" || valueType === "function") {
      return this._hostProxyFactory.getWrapperFor(value, opts);
    }

    throw new Error(`Cannot convert ${value} to StaticJsValue: Unknown type.`);
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
    const wellKnown = getWellKnownSymbol(value, this._realm.intrinsics);
    if (wellKnown) {
      return wellKnown;
    }

    return new StaticJsSymbolImpl(this._realm, value);
  }

  private _toStaticJsValueNull(): StaticJsNull {
    return this._null;
  }

  private _toStaticJsValueUndefined(): StaticJsUndefined {
    return this._undefined;
  }
}
