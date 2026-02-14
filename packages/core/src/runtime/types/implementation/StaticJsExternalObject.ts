import type { Writable } from "type-fest";

import type { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";

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
import { isStaticJsSymbol } from "../StaticJsSymbol.js";

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
    name: StaticJsObjectPropertyKey,
  ): EvaluationGenerator<StaticJsPropertyDescriptor | undefined> {
    let property: PropertyKey;
    if (isStaticJsSymbol(name)) {
      // This is a safe operation and will not invoke any evaluator code that could loop.
      property = name.toJsSync();
    } else {
      property = name as string;
    }

    const objDescr = Object.getOwnPropertyDescriptor(this._obj, property);
    if (!objDescr) {
      return undefined;
    }

    const { enumerable, value, get: descrGet } = objDescr;

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

    // Had this enabled at one point, but we really want to be read-only, at least until
    // we provide the option not to be.
    // if (descrSet) {
    //   staticJsDescr.set = new StaticJsExternalFunction(
    //     this.realm,
    //     "set",
    //     descrSet,
    //   );
    // }

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
