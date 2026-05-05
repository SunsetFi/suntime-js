import { Completion } from "../../../../evaluator/completions/Completion.js";
import type { EvaluationGenerator } from "../../../../evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import { StaticJsObject } from "../../StaticJsObject.js";
import {
  isStaticJsDataPropertyDescriptor,
  type StaticJsPropertyDescriptor,
  type StaticJsPropertyDescriptorRecord,
} from "../../StaticJsPropertyDescriptor.js";
import type { StaticJsPropertyKey } from "../../StaticJsPropertyKey.js";
import { isStaticJsSymbol } from "../../StaticJsSymbol.js";
import { StaticJsTypeCode } from "../../StaticJsTypeCode.js";
import { StaticJsExternalFunction } from "../functions/StaticJsExternalFunction.js";
import { StaticJsAbstractObject } from "../StaticJsAbstractObject.js";

export interface StaticJsExternalObjectOpts {
  prototype?: StaticJsObject | null;
  enableWrites?: boolean;
  enableThisArg?: boolean;
}

/**
 * A static object that wraps a native javascript object.
 *
 * For security reasons:
 * - The object is not extensible.
 * - Only own setter properties are writable.
 * - The object is not configurable.
 * - Only enumerable properties are exposed.
 */
export class StaticJsExternalObject extends StaticJsAbstractObject {
  constructor(
    realm: StaticJsRealm,
    private readonly _obj: object,
    private readonly _opts: StaticJsExternalObjectOpts = {},
  ) {
    super(realm, _opts.prototype ?? realm.intrinsics["Object.prototype"]);
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
    let property: PropertyKey;
    if (isStaticJsSymbol(name)) {
      // This is a safe operation and will not invoke any evaluator code that could loop.
      property = name.toNative();
    } else {
      property = name as string;
    }

    const objDescr = Object.getOwnPropertyDescriptor(this._obj, property);
    if (!objDescr) {
      return undefined;
    }

    const { enableWrites, enableThisArg } = this._opts;

    const { enumerable, value, get: descrGet, set: descrSet } = objDescr;
    const hasValue = "value" in objDescr;

    if (!enumerable) {
      return undefined;
    }

    const staticJsDescr: StaticJsPropertyDescriptorRecord = {
      enumerable,
      configurable: false,
    };

    // Do we want to cache these?  The object can be changed from underneath us...

    let isAccessor = false;
    if (descrGet) {
      isAccessor = true;
      staticJsDescr.get = new StaticJsExternalFunction(this.realm, "get", descrGet, {
        getThisArg: (value) => (enableThisArg ? value.toNative() : this._obj),
      });
    }

    if (enableWrites && descrSet) {
      isAccessor = true;
      staticJsDescr.set = new StaticJsExternalFunction(this.realm, "set", descrSet, {
        getThisArg: () => (enableThisArg ? staticJsDescr.get : this._obj),
      });
    }

    if (!isAccessor && hasValue) {
      staticJsDescr.value = this.realm.types.toStaticJsValue(value);
      staticJsDescr.writable = enableWrites ?? false;
    }

    return staticJsDescr as StaticJsPropertyDescriptor;
  }

  override *isExtensibleEvaluator(): EvaluationGenerator<boolean> {
    return false;
  }

  *ownPropertyKeysEvaluator(): EvaluationGenerator<StaticJsPropertyKey[]> {
    const keys = Reflect.ownKeys(this._obj);
    return keys.map((key) => {
      if (typeof key === "symbol") {
        return this.realm.types.toStaticJsValue(key);
      }

      return key;
    });
  }

  override *privateElementAddEvaluator(): EvaluationGenerator<void> {
    throw Completion.Throw("TypeError", "Cannot add a private elemnt to this object.");
  }

  protected *_setPropertyDescriptorEvaluator(
    key: StaticJsPropertyKey,
    setDescr: StaticJsPropertyDescriptor,
  ): EvaluationGenerator<boolean> {
    const { enableWrites, enableThisArg } = this._opts;
    if (!enableWrites) {
      return false;
    }

    if (!isStaticJsDataPropertyDescriptor(setDescr)) {
      return false;
    }

    const property = isStaticJsSymbol(key) ? key.toNative() : (key as string);

    const propertyDescr = Object.getOwnPropertyDescriptor(this._obj, property);
    if (!propertyDescr) {
      return false;
    }

    if (setDescr.value === propertyDescr.value) {
      return true;
    }

    if (propertyDescr.set) {
      propertyDescr.set.call(
        enableThisArg ? propertyDescr.get : this._obj,
        setDescr.value.toNative(),
      );
      return true;
    }

    if (propertyDescr.writable) {
      Object.defineProperty(this._obj, property, {
        value: setDescr.value.toNative(),
      });
      return true;
    }

    return false;
  }

  protected *_deleteConfigurablePropertyEvaluator(): EvaluationGenerator<boolean> {
    /* No-op.  Externals are not configurable. */
    return false;
  }
}
