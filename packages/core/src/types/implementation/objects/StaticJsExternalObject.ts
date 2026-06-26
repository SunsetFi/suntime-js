import { Completion } from "../../../evaluator/completions/Completion.js";
import type { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import type { Intrinsics } from "../../../runtime/intrinsics/intrinsics.js";
import type { StaticJsCallable } from "../../StaticJsCallable.js";
import { isStaticJsNull } from "../../StaticJsNull.js";
import type { StaticJsObject } from "../../StaticJsObject.js";
import {
  isStaticJsDataPropertyDescriptor,
  type StaticJsDataPropertyDescriptor,
  type StaticJsPropertyDescriptor,
  type StaticJsPropertyDescriptorRecord,
} from "../../StaticJsPropertyDescriptor.js";
import type { StaticJsPropertyKey } from "../../StaticJsPropertyKey.js";
import { isStaticJsSymbol, type StaticJsSymbol } from "../../StaticJsSymbol.js";
import { StaticJsTypeCode } from "../../StaticJsTypeCode.js";
import type { StaticJsValue } from "../../StaticJsValue.js";
import type { HostAccessPolicy } from "../host-access/HostAccessPolicy.js";
import { StaticJsAbstractObject } from "../StaticJsAbstractObject.js";
import { isWellKnownSymbol } from "../well-known-symbols.js";

export class StaticJsExternalObject extends StaticJsAbstractObject {
  private readonly _extends = new Map<string | StaticJsSymbol, StaticJsPropertyDescriptor>();
  private readonly _writes = new Map<string | StaticJsSymbol, StaticJsValue>();
  private readonly _propertyCache = new Map<
    PropertyKey,
    [PropertyDescriptor, StaticJsPropertyDescriptor]
  >();

  constructor(
    realm: StaticJsRealm,
    private readonly _target: object,
    private readonly _policy: HostAccessPolicy,
    private readonly _fallbackPrototype: keyof Intrinsics = "Object.prototype",
  ) {
    super(realm, null);
    this._policy = Object.freeze({ ...this._policy });
  }

  override get [Symbol.toStringTag](): string {
    return "StaticJsExternalObject";
  }

  get runtimeTypeOf() {
    return "object";
  }

  get runtimeTypeCode() {
    return StaticJsTypeCode.PlainObject;
  }

  get policy() {
    return this._policy;
  }

  get target() {
    return this._target;
  }

  override toNative() {
    return this._target;
  }

  *getOwnPropertyEvaluator(
    name: StaticJsPropertyKey,
  ): EvaluationGenerator<StaticJsPropertyDescriptor | undefined> {
    const extended = this._extends.get(name);
    if (extended) {
      return extended;
    }

    const isExposed = this._isExposed(isStaticJsSymbol(name) ? name.toNative() : name);
    if (!isExposed) {
      return undefined;
    }

    const property: PropertyKey = isStaticJsSymbol(name) ? name.toNative() : (name as string);

    const objDescr = Object.getOwnPropertyDescriptor(this._target, property);
    if (!objDescr) {
      this._propertyCache.delete(property);
      return undefined;
    }

    const [cachedDescr, cachedStaticDescr] = this._propertyCache.get(property) ?? [];
    if (cachedDescr && propertyDescriptorsMatch(cachedDescr, objDescr)) {
      if (this._writes.has(name) && isStaticJsDataPropertyDescriptor(cachedStaticDescr)) {
        cachedStaticDescr.value = this._writes.get(name)!;
      }
      return cachedStaticDescr!;
    }

    const { writable } = this._policy.options;
    const { enumerable, value, get: descrGet, set: descrSet } = objDescr;
    const hasValue = "value" in objDescr;

    const staticJsDescr: StaticJsPropertyDescriptorRecord = {
      enumerable: enumerable ?? false,
      configurable: false,
    };

    let isAccessor = false;
    if (descrGet) {
      isAccessor = true;
      staticJsDescr.get = this._policy.wrapChild(descrGet, true) as StaticJsCallable;
    }

    if (descrSet) {
      isAccessor = true;
      staticJsDescr.set = this._policy.wrapChild(descrSet, true) as StaticJsCallable;
    }

    if (!isAccessor && hasValue) {
      staticJsDescr.value = this._writes.get(name) ?? this._policy.wrapChild(value, true);
      staticJsDescr.writable = Boolean(writable);
    }

    const result = staticJsDescr as StaticJsPropertyDescriptor;
    this._propertyCache.set(property, [objDescr, result]);
    return result;
  }

  override *isExtensibleEvaluator(): EvaluationGenerator<boolean> {
    return Boolean(this._policy.options.extensible);
  }

  *ownPropertyKeysEvaluator(): EvaluationGenerator<StaticJsPropertyKey[]> {
    const obj = this._target;

    const allKeys: (string | symbol)[] = Reflect.ownKeys(obj);

    const exposedKeys = allKeys.filter((key) => this._isExposed(key));

    return exposedKeys.map((k) => (typeof k === "symbol" ? this.realm.types.symbol(k) : String(k)));
  }

  override *getPrototypeOfEvaluator(): EvaluationGenerator<StaticJsObject | null> {
    const hostProto = Object.getPrototypeOf(this._target) as object | null;
    const proto = this._policy.wrapPrototype(hostProto, this._fallbackPrototype);
    if (isStaticJsNull(proto)) {
      return null;
    }
    return proto;
  }

  override *privateElementAddEvaluator(): EvaluationGenerator<void> {
    throw yield* Completion.Throw.create(
      "TypeError",
      "Cannot add a private element to this object.",
    );
  }

  protected *_setPropertyDescriptorEvaluator(
    key: StaticJsPropertyKey,
    setDescr: StaticJsPropertyDescriptor,
  ): EvaluationGenerator<boolean> {
    if (!isStaticJsDataPropertyDescriptor(setDescr)) return false;

    const property = isStaticJsSymbol(key) ? key.toNative() : key;
    const propertyDescr = Object.getOwnPropertyDescriptor(this._target, property);

    if (propertyDescr) {
      if (!propertyDescr.writable || !("value" in propertyDescr)) {
        return false;
      }

      if (setDescr.value === propertyDescr.value) {
        return true;
      }

      if (this._policy.options.writable === "transparent") {
        this._writes.set(key, setDescr.value);
        return true;
      }

      Object.defineProperty(this._target, property, { value: setDescr.value.toNative() });
      return true;
    }

    if (this._policy.options.extensible) {
      if (this._policy.options.extensible === "transparent") {
        this._extends.set(key, setDescr);
        return true;
      }

      Object.defineProperty(this._target, property, {
        ...setDescr,
        value: setDescr.value.toNative(),
      });
      return true;
    }

    return false;
  }

  protected *_deleteConfigurablePropertyEvaluator(): EvaluationGenerator<boolean> {
    return false;
  }

  private _isExposed(key: PropertyKey): boolean {
    const { extensible, includeNonEnumerable, includeWellKnownSymbols } = this._policy.options;
    if (
      extensible === "transparent" &&
      this._extends.has(typeof key === "symbol" ? this.realm.types.symbol(key) : String(key))
    ) {
      return true;
    }

    if (typeof key === "symbol") {
      if (isWellKnownSymbol(key)) {
        return includeWellKnownSymbols;
      }
    }

    if (!includeNonEnumerable && !Object.getOwnPropertyDescriptor(this._target, key)?.enumerable) {
      return false;
    }

    return true;
  }
}

function propertyDescriptorsMatch(a: PropertyDescriptor, b: PropertyDescriptor): boolean {
  if (a.configurable !== b.configurable || a.enumerable !== b.enumerable) {
    return false;
  }

  const aIsData = "value" in a || "writable" in a;
  const bIsData = "value" in b || "writable" in b;
  if (aIsData !== bIsData) {
    return false;
  }

  if (aIsData && bIsData) {
    return a.writable === (b as StaticJsDataPropertyDescriptor).writable && a.value === b.value;
  }

  return a.get === b.get && a.set === b.set;
}
