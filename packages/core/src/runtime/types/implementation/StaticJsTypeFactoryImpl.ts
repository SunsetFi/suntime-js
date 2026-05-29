import { StaticJsEngineError } from "../../../errors/StaticJsEngineError.js";
import { StaticJsRuntimeError } from "../../../errors/StaticJsRuntimeError.js";
import { Completion } from "../../../evaluator/completions/Completion.js";
import { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";
import typedKeys from "../../../utils/typed-keys.js";
import { WeakValueMap } from "../../../utils/WeakValueMap.js";
import { createArrayFromList } from "../../algorithms/create-array-from-list.js";
import { createNonEnumerableDataPropertyOrThrow } from "../../algorithms/create-non-enumerable-data-property-or-throw.js";
import type { IntrinsicSymbols } from "../../intrinsics/intrinsics.js";
import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";
import type { HostAccessArg, HostAccessOptions } from "../HostAccessOptions.js";
import { isStaticJsArray, type StaticJsArray } from "../StaticJsArray.js";
import type { StaticJsBoolean } from "../StaticJsBoolean.js";
import { StaticJsCallable } from "../StaticJsCallable.js";
import type { StaticJsFunction } from "../StaticJsFunction.js";
import type { StaticJsNull } from "../StaticJsNull.js";
import { isStaticJsNull } from "../StaticJsNull.js";
import type { StaticJsNumber } from "../StaticJsNumber.js";
import { isStaticJsObject, type StaticJsObject } from "../StaticJsObject.js";
import type { StaticJsPlainObject } from "../StaticJsPlainObject.js";
import {
  validateStaticJsPropertyDescriptorRecord,
  type StaticJsPropertyDescriptorRecord,
} from "../StaticJsPropertyDescriptor.js";
import { staticJsValueToPropertyKey, type StaticJsPropertyKey } from "../StaticJsPropertyKey.js";
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
import type { HostAccessPolicy } from "./host-access/HostAccessPolicy.js";
import { buildHostBuiltinMap, type HostBuiltinMap } from "./host-access/HostBuiltinMap.js";
import { PolicyKeyInterner, type PolicyKey } from "./host-access/PolicyKey.js";
import {
  resolveHostAccessOptions,
  applyChildPolicy,
  type ResolvedHostAccessOptions,
} from "./host-access/resolve-host-access-options.js";
import { getStaticJsObjectProxyOwner } from "./objects/create-object-proxy.js";
import { StaticJsArrayImpl } from "./objects/StaticJsArrayImpl.js";
import { StaticJsErrorImpl } from "./objects/StaticJsErrorImpl.js";
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
  private readonly _symbols: IntrinsicSymbols;

  // The registry for our local Symbol.for()
  private readonly _symbolRegistry = new Map<string, StaticJsSymbol>();

  private readonly _policyInterner = new PolicyKeyInterner();
  private readonly _externalObjectCache = new WeakMap<
    object,
    WeakValueMap<PolicyKey, StaticJsExternalObject | StaticJsExternalFunction>
  >();

  private _hostBuiltinMapCache: HostBuiltinMap | undefined;

  private get _hostBuiltinMap(): HostBuiltinMap {
    if (!this._hostBuiltinMapCache) {
      if (!this._realm.intrinsics["Object.prototype"]) {
        throw new StaticJsEngineError(
          "HostBuiltinMap accessed before realm intrinsics were populated",
        );
      }
      this._hostBuiltinMapCache = buildHostBuiltinMap(this._realm);
    }
    return this._hostBuiltinMapCache;
  }

  private readonly _zero: StaticJsNumber;
  private readonly _NaN: StaticJsNumber;
  private readonly _Infinity: StaticJsNumber;

  private readonly _false: StaticJsBoolean;
  private readonly _true: StaticJsBoolean;

  private readonly _null: StaticJsNull;
  private readonly _undefined: StaticJsUndefined;

  constructor(
    private readonly _realm: StaticJsRealm,
    private readonly _hostAccessDefaults?: HostAccessOptions,
  ) {
    this._zero = new StaticJsNumberImpl(_realm, 0);
    this._NaN = new StaticJsNumberImpl(_realm, NaN);
    this._Infinity = new StaticJsNumberImpl(_realm, Infinity);

    this._false = new StaticJsBooleanImpl(_realm, false);
    this._true = new StaticJsBooleanImpl(_realm, true);

    this._null = new StaticJsNullImpl(_realm);
    this._undefined = new StaticJsUndefinedImpl(_realm);

    const intrinsics = _realm.intrinsics;

    this._symbols = Object.freeze({
      get asyncDispose() {
        return intrinsics["Symbol.asyncDispose"];
      },
      get asyncIterator() {
        return intrinsics["Symbol.asyncIterator"];
      },
      get dispose() {
        return intrinsics["Symbol.dispose"];
      },
      get hasInstance() {
        return intrinsics["Symbol.hasInstance"];
      },
      get isConcatSpreadable() {
        return intrinsics["Symbol.isConcatSpreadable"];
      },
      get iterator() {
        return intrinsics["Symbol.iterator"];
      },
      get match() {
        return intrinsics["Symbol.match"];
      },
      get matchAll() {
        return intrinsics["Symbol.matchAll"];
      },
      // get observable() {
      //   return _intrinsics["Symbol.observable"];
      // },
      get replace() {
        return intrinsics["Symbol.replace"];
      },
      get search() {
        return intrinsics["Symbol.search"];
      },
      get species() {
        return intrinsics["Symbol.species"];
      },
      get split() {
        return intrinsics["Symbol.split"];
      },
      get toPrimitive() {
        return intrinsics["Symbol.toPrimitive"];
      },
      get toStringTag() {
        return intrinsics["Symbol.toStringTag"];
      },
      get unscopables() {
        return intrinsics["Symbol.unscopables"];
      },
    } satisfies IntrinsicSymbols);
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
    const realm = this._realm;
    return new StaticJsNativeFunctionImpl(
      realm,
      name,
      function* (thisArg: StaticJsValue, ...args: StaticJsValue[]) {
        try {
          const functionResult = func.apply(thisArg, args);
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
    }

    const error = new StaticJsErrorImpl(this._realm, proto);

    // Safe: Invokes defineOwnProperty on our error object, which cannot be sandboxed code.
    this._realm.invokeEvaluatorSync(
      createNonEnumerableDataPropertyOrThrow(error, "message", this.string(message!)),
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
        return value;
      }

      // Unwrap it to re-wrap with our own realm.
      // This will result in foreign StaticJs objects being wrapped as external objects, which is desired.
      value = value.toNative();
    }

    if (value === null) return this._toStaticJsValueNull();
    if (value === undefined) return this._toStaticJsValueUndefined();
    if (typeof value === "boolean") return this.boolean(value);
    if (typeof value === "number") return this.number(value);
    if (typeof value === "string") return this.string(value);
    if (typeof value === "symbol") return this._toStaticJsValueSymbol(value);
    if (Array.isArray(value)) return this._toStaticJsValueArray(value);

    if (isFunction(value)) {
      const policy = this._buildPolicy(value, opts);
      return this._wrapHostFunction(value, policy);
    }

    if (typeof value === "object") {
      if (value instanceof Error && isErrorTypeName(value.name)) {
        return this.error(value.name, value.message);
      }

      const policy = this._buildPolicy(value, opts);
      return this._wrapHostObject(value, policy);
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
    // Spec says these symbols are consistent across realms, so convert them
    // to the appropriate intrinsic symbol.
    // This saves us having to care about unwrapping them in equality checks elsewhere.
    switch (value) {
      case Symbol.asyncIterator:
        return this._symbols.asyncIterator;
      case Symbol.dispose:
        return this._symbols.dispose;
      case Symbol.isConcatSpreadable:
        return this._symbols.isConcatSpreadable;
      case Symbol.iterator:
        return this._symbols.iterator;
      case Symbol.match:
        return this._symbols.match;
      case Symbol.matchAll:
        return this._symbols.matchAll;
      // case Symbol.observable:
      // return this._symbols.observable;
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

  private _buildPolicy(rootHostObj: object, opts: HostAccessArg | undefined): HostAccessPolicy {
    const resolved = resolveHostAccessOptions(opts, this._hostAccessDefaults, rootHostObj);
    return this._policyFor(resolved);
  }

  private _policyFor(resolved: ResolvedHostAccessOptions): HostAccessPolicy {
    return {
      options: resolved,
      wrapChild: (childHostValue: unknown): StaticJsValue => {
        // If it's already a StaticJsValue from this realm, return it directly.
        if (isStaticJsValue(childHostValue) && childHostValue.realm === this._realm) {
          return childHostValue;
        }

        if (
          childHostValue === null ||
          childHostValue === undefined ||
          (typeof childHostValue !== "object" && typeof childHostValue !== "function")
        ) {
          return this.toStaticJsValue(childHostValue);
        }

        const childResolved = applyChildPolicy(resolved, childHostValue);
        const policy = this._policyFor(childResolved);

        if (typeof childHostValue === "function") {
          return this._wrapHostFunction(childHostValue, policy);
        }

        return this._wrapHostObject(childHostValue, policy);
      },
      wrapPrototype: (hostProto: object): StaticJsObject => {
        if (!resolved.walkPrototype) {
          return this._realm.intrinsics["Object.prototype"];
        }
        return this._wrapHostObject(hostProto, this._policyFor(resolved));
      },
    };
  }

  private _wrapHostObject(host: object, policy: HostAccessPolicy): StaticJsObject {
    const cached = this._getCached(host, policy);
    if (cached) {
      return cached as StaticJsObject;
    }

    if (!policy.options.rawPrototypes) {
      const builtin = this._hostBuiltinMap.get(host);
      if (builtin) {
        return builtin;
      }
    }

    const wrapper = new StaticJsExternalObject(this._realm, host, policy);
    this._putCached(host, policy, wrapper);
    return wrapper;
  }

  private _wrapHostFunction(host: Function, policy: HostAccessPolicy): StaticJsFunction {
    const cached = this._getCached(host, policy);
    if (cached) {
      return cached as unknown as StaticJsFunction;
    }

    if (!policy.options.rawPrototypes) {
      const builtin = this._hostBuiltinMap.get(host);
      if (builtin) {
        return builtin as StaticJsFunction;
      }
    }

    const wrapper = new StaticJsExternalFunction(this._realm, host.name, host, policy);
    this._putCached(host, policy, wrapper);
    return wrapper;
  }

  private _getCached(host: object, policy: HostAccessPolicy) {
    const inner = this._externalObjectCache.get(host);
    if (!inner) return undefined;
    return inner.get(this._policyInterner.keyFor(policy.options));
  }

  private _putCached(
    host: object,
    policy: HostAccessPolicy,
    wrapper: StaticJsExternalObject | StaticJsExternalFunction,
  ) {
    let inner = this._externalObjectCache.get(host);
    if (!inner) {
      inner = new WeakValueMap();
      this._externalObjectCache.set(host, inner);
    }
    inner.set(this._policyInterner.keyFor(policy.options), wrapper);
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
function sandboxArrayToNative(array: StaticJsValue): unknown[] {
  if (!isStaticJsArray(array)) {
    throw new TypeError(`Expected a StaticJsArray, got ${array}`);
  }
  const length = Number(array.getSync("length").toNative());
  const result = [];
  for (let i = 0; i < length; i++) {
    result.push(array.getSync(String(i)));
  }
  return result;
}
const proxyHandlerConverters: Partial<
  Record<keyof StaticJsProxyHandlers, ((value: StaticJsValue) => unknown)[]>
> = {
  getOwnPropertyDescriptor: [convertIdentity, staticJsValueToPropertyKey],
  defineProperty: [convertIdentity, staticJsValueToPropertyKey, convertIdentity],
  has: [convertIdentity, staticJsValueToPropertyKey],
  get: [convertIdentity, staticJsValueToPropertyKey, convertIdentity],
  set: [convertIdentity, staticJsValueToPropertyKey, convertIdentity, convertIdentity],
  deleteProperty: [convertIdentity, staticJsValueToPropertyKey],
  apply: [convertIdentity, convertIdentity, sandboxArrayToNative],
  construct: [convertIdentity, sandboxArrayToNative, convertIdentity],
};
