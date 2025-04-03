import { Writable } from "type-fest";

import hasOwnProperty from "../../../internal/has-own-property.js";

import { EvaluationGenerator } from "../../../evaluator/internal.js";

import StaticJsRealm from "../../realm/interfaces/StaticJsRealm.js";

import { StaticJsValue } from "../interfaces/StaticJsValue.js";
import {
  StaticJsObjectPropertyDescriptor,
  StaticJsObjectPropertyDescriptorGetter,
  StaticJsObjectPropertyDescriptorValue,
} from "../interfaces/StaticJsObject.js";
import staticJsDescriptorToObjectDescriptor from "../utils/sjs-descriptor-to-descriptor.js";

import StaticJsAbstractObject from "./StaticJsAbstractObject.js";

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
    super(realm, realm.types.objectProto, "object");
  }

  get extensible(): boolean {
    return false;
  }

  *getOwnKeysEvaluator(): EvaluationGenerator<string[]> {
    // This only returns own keys that are enumerable (and not symbols).
    return Object.keys(this._obj);
  }

  toJs() {
    return this._obj;
  }

  *getOwnPropertyDescriptorEvaluator(
    name: string,
  ): EvaluationGenerator<StaticJsObjectPropertyDescriptor | undefined> {
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
        StaticJsObjectPropertyDescriptorValue &
          StaticJsObjectPropertyDescriptorGetter
      >
    > = {
      writable: descrSet != null,
      enumerable,
      configurable: false,
    };

    // We need to maintain the semantics of getter vs data value, as it is material to how prototypes are resolved.
    const realm = this.realm;
    if (descrGet) {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const self = this;
      staticJsDescr.get = function* () {
        return realm.types.toStaticJsValue(descrGet.call(self));
      };
    } else if (hasOwnProperty(objDescr, "value")) {
      staticJsDescr.value = realm.types.toStaticJsValue(value);
    }

    if (descrSet) {
      staticJsDescr.set = function* (value: StaticJsValue) {
        descrSet(value.toJs());
      };
    }

    return staticJsDescr as StaticJsObjectPropertyDescriptor;
  }

  protected *_setWritableDataPropertyEvaluator(): EvaluationGenerator<void> {
    /* No-op.  Externals are not writable. */
  }

  protected *_definePropertyEvaluator(
    name: string,
    descriptor: StaticJsObjectPropertyDescriptor,
  ): EvaluationGenerator<void> {
    const objDescriptor = staticJsDescriptorToObjectDescriptor(
      this.realm,
      descriptor,
    );
    Object.defineProperty(this._obj, name, objDescriptor);
  }

  protected *_deleteConfigurablePropertyEvaluator(): EvaluationGenerator<boolean> {
    /* No-op.  Externals are not configurable. */
    return false;
  }
}
