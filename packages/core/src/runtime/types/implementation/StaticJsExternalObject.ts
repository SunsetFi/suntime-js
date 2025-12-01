import type { Writable } from "type-fest";

import type EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type {
  StaticJsPropertyDescriptor,
  StaticJsAccessorPropertyDescriptor,
  StaticJsDataPropertyDescriptor,
} from "../StaticJsPropertyDescriptor.js";
import StaticJsTypeCode from "../StaticJsTypeCode.js";
import type { StaticJsObjectPropertyKey } from "../StaticJsObjectLike.js";

import StaticJsAbstractObject from "./StaticJsAbstractObject.js";
import StaticJsExternalFunction from "./StaticJsExternalFunction.js";

/**
 * A static object that wraps a native javascript object.
 *
 * For security reasons:
 * - The object is not extensible.
 * - Only own setter properties are writable.
 * - The object is not configurable.
 * - Only enumerable properties are exposed.
 */
export default class StaticJsExternalObject extends StaticJsAbstractObject {
  constructor(
    realm: StaticJsRealm,
    private readonly _obj: object,
  ) {
    super(realm, realm.types.prototypes.objectProto);
  }

  get runtimeTypeOf() {
    return "object" as const;
  }

  get runtimeTypeCode() {
    return StaticJsTypeCode.Object;
  }

  get extensible(): boolean {
    return false;
  }

  *ownPropertyKeysEvaluator(): EvaluationGenerator<
    StaticJsObjectPropertyKey[]
  > {
    const keys = Reflect.ownKeys(this._obj);
    return keys.map((key) => {
      if (typeof key === "symbol") {
        return this.realm.types.toStaticJsValue(key);
      }

      return key;
    });
  }

  toJsSync() {
    return this._obj;
  }

  *getOwnPropertyEvaluator(
    name: string,
  ): EvaluationGenerator<StaticJsPropertyDescriptor | undefined> {
    const objDescr = Object.getOwnPropertyDescriptor(this._obj, name);
    if (!objDescr) {
      return undefined;
    }

    const { enumerable, value, get: descrGet, set: descrSet } = objDescr;

    if (!enumerable) {
      return undefined;
    }

    const staticJsDescr: Writable<
      Partial<
        StaticJsDataPropertyDescriptor & StaticJsAccessorPropertyDescriptor
      >
    > = {
      enumerable,
      configurable: false,
    };

    // Do we want to cache these?  The object can be changed from underneath us...

    if (descrGet) {
      staticJsDescr.get = new StaticJsExternalFunction(
        this.realm,
        "get",
        descrGet,
      );
    }

    if (descrSet) {
      staticJsDescr.set = new StaticJsExternalFunction(
        this.realm,
        "set",
        descrSet,
      );
    }

    if (value) {
      staticJsDescr.value = this.realm.types.toStaticJsValue(value);
      staticJsDescr.writable = false;
    }

    return staticJsDescr as StaticJsPropertyDescriptor;
  }

  protected *_setPropertyDescriptorEvaluator(): EvaluationGenerator<boolean> {
    /* No-op.  Externals are not writable. */
    return false;
  }

  protected *_deleteConfigurablePropertyEvaluator(): EvaluationGenerator<boolean> {
    /* No-op.  Externals are not configurable. */
    return false;
  }
}
