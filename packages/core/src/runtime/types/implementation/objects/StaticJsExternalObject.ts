import { Completion } from "../../../../evaluator/completions/Completion.js";
import type { EvaluationGenerator } from "../../../../evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import { StaticJsCallable } from "../../StaticJsCallable.js";
import { StaticJsObject } from "../../StaticJsObject.js";
import {
  isStaticJsDataPropertyDescriptor,
  type StaticJsPropertyDescriptor,
  type StaticJsPropertyDescriptorRecord,
} from "../../StaticJsPropertyDescriptor.js";
import type { StaticJsPropertyKey } from "../../StaticJsPropertyKey.js";
import { isStaticJsSymbol, StaticJsSymbol } from "../../StaticJsSymbol.js";
import { StaticJsTypeCode } from "../../StaticJsTypeCode.js";
import { StaticJsValue } from "../../StaticJsValue.js";
import type { HostAccessPolicy } from "../host-access/HostAccessPolicy.js";
import { StaticJsAbstractObject } from "../StaticJsAbstractObject.js";

export class StaticJsExternalObject extends StaticJsAbstractObject {
  private readonly _extends = new Map<string | StaticJsSymbol, StaticJsPropertyDescriptor>();
  private readonly _writes = new Map<string | StaticJsSymbol, StaticJsValue>();

  constructor(
    realm: StaticJsRealm,
    private readonly _obj: object,
    private readonly _policy: HostAccessPolicy,
    prototype?: StaticJsObject | null,
  ) {
    super(realm, prototype ?? realm.intrinsics["Object.prototype"]);
  }

  override get [Symbol.toStringTag](): string {
    return "StaticJsExternalObject";
  }

  get runtimeTypeOf() {
    return "object" as const;
  }

  get runtimeTypeCode() {
    return StaticJsTypeCode.PlainObject;
  }

  override toNative() {
    return this._obj;
  }

  *getOwnPropertyEvaluator(
    name: StaticJsPropertyKey,
  ): EvaluationGenerator<StaticJsPropertyDescriptor | undefined> {
    const extended = this._extends.get(name);
    if (extended) {
      return extended;
    }

    const property: PropertyKey = isStaticJsSymbol(name) ? name.toNative() : (name as string);

    const objDescr = Object.getOwnPropertyDescriptor(this._obj, property);
    if (!objDescr) return undefined;

    const { includeNonEnumerable, writable } = this._policy.options;
    const { enumerable, value, get: descrGet, set: descrSet } = objDescr;
    const hasValue = "value" in objDescr;

    if (!enumerable && !includeNonEnumerable) {
      return undefined;
    }

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

    return staticJsDescr as StaticJsPropertyDescriptor;
  }

  override *isExtensibleEvaluator(): EvaluationGenerator<boolean> {
    return Boolean(this._policy.options.extensible);
  }

  *ownPropertyKeysEvaluator(): EvaluationGenerator<StaticJsPropertyKey[]> {
    const { includeNonEnumerable } = this._policy.options;
    const obj = this._obj;
    const allKeys: (string | symbol)[] = Reflect.ownKeys(obj);
    const keys = includeNonEnumerable
      ? allKeys
      : allKeys.filter((k) => Object.getOwnPropertyDescriptor(obj, k)?.enumerable);
    return keys.map((k) =>
      typeof k === "symbol" ? this.realm.types.toStaticJsValue(k) : (k as string),
    );
  }

  override *getPrototypeOfEvaluator(): EvaluationGenerator<StaticJsObject | null> {
    const { walkPrototype } = this._policy.options;
    if (!walkPrototype) {
      return this.realm.intrinsics["Object.prototype"];
    }

    const hostProto = Object.getPrototypeOf(this._obj) as object | null;
    if (hostProto === null) {
      return null;
    }

    return this._policy.wrapPrototype(hostProto);
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
    const propertyDescr = Object.getOwnPropertyDescriptor(this._obj, property);

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

      Object.defineProperty(this._obj, property, { value: setDescr.value.toNative() });
      return true;
    }

    if (this._policy.options.extensible) {
      if (this._policy.options.extensible === "transparent") {
        this._extends.set(key, setDescr);
        return true;
      }

      Object.defineProperty(this._obj, property, {
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
}
