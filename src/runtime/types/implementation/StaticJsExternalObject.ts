import { Writable } from "type-fest";

import hasOwnProperty from "../../../internal/has-own-property.js";

import { EvaluationGenerator } from "../../../evaluator/internal.js";

import {
  StaticJsObjectPropertyDescriptor,
  StaticJsValue as IStaticJsValue,
} from "../interfaces/index.js";
import {
  StaticJsObjectPropertyDescriptorGetter,
  StaticJsObjectPropertyDescriptorValue,
} from "../interfaces/StaticJsObject.js";
import staticJsDescriptorToObjectDescriptor from "../utils/sjs-descriptor-to-descriptor.js";

import StaticJsValue from "../factories/StaticJsValue.js";

import StaticJsAbstractObject from "./StaticJsAbstractObject.js";

export default class StaticJsExternalObject extends StaticJsAbstractObject {
  constructor(private readonly _obj: object) {
    // FIXME: Use Object.prototype, whatever that will be.
    super(null, "object");
  }

  get extensible(): boolean {
    return Object.isExtensible(this._obj);
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

    const {
      writable,
      enumerable,
      configurable,
      value,
      get: descrGet,
      set: descrSet,
    } = objDescr;

    const staticJsDescr: Writable<
      Partial<
        StaticJsObjectPropertyDescriptorValue &
          StaticJsObjectPropertyDescriptorGetter
      >
    > = {
      writable,
      enumerable,
      configurable,
    };

    // We need to maintain the semantics of getter vs data value, as it is material to how prototypes are resolved.
    if (descrGet) {
      staticJsDescr.get = () => StaticJsValue(descrGet.call(this._obj));
    } else if (hasOwnProperty(objDescr, "value")) {
      staticJsDescr.value = StaticJsValue(value);
    }

    if (descrSet) {
      staticJsDescr.set = (value: IStaticJsValue) => {
        descrSet.call(this._obj, value.toJs());
      };
    }

    return staticJsDescr as StaticJsObjectPropertyDescriptor;
  }

  protected *_setWritableDataPropertyEvaluator(
    name: string,
    value: IStaticJsValue,
  ): EvaluationGenerator<void> {
    // @ts-expect-error: We can trust that this is a valid key due to the checks made by StaticJsObjectBase.
    this._obj[name] = value.toJs();
  }

  protected *_definePropertyEvaluator(
    name: string,
    descriptor: StaticJsObjectPropertyDescriptor,
  ): EvaluationGenerator<void> {
    const objDescriptor = staticJsDescriptorToObjectDescriptor(descriptor);
    Object.defineProperty(this._obj, name, objDescriptor);
  }

  protected *_deleteConfigurablePropertyEvaluator(
    name: string,
  ): EvaluationGenerator<boolean> {
    // @ts-expect-error: We can trust that this is a valid key due to the checks made by StaticJsObjectBase.
    return delete this._obj[name];
  }
}
