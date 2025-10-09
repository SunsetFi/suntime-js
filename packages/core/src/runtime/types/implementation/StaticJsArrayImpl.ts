import hasOwnProperty from "../../../internal/has-own-property.js";

import type EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import toNumber from "../../algorithms/to-number.js";

import type { StaticJsValue } from "../StaticJsValue.js";
import type { StaticJsPropertyDescriptor } from "../StaticJsPropertyDescriptor.js";
import {
  isStaticJsDataPropertyDescriptor,
  isStaticJsAccessorPropertyDescriptor,
} from "../StaticJsPropertyDescriptor.js";
import type { StaticJsArray } from "../StaticJsArray.js";

import StaticJsNumberImpl from "./StaticJsNumberImpl.js";
import StaticJsObjectLikeImpl from "./StaticJsObjectLikeImpl.js";

export default class StaticJsArrayImpl
  extends StaticJsObjectLikeImpl
  implements StaticJsArray
{
  static create(
    realm: StaticJsRealm,
    items?: StaticJsValue[],
  ): EvaluationGenerator<StaticJsArrayImpl>;
  static create(
    realm: StaticJsRealm,
    len?: number,
  ): EvaluationGenerator<StaticJsArrayImpl>;
  // Redundant overload to help TS understand the union type
  static create(
    realm: StaticJsRealm,
    itemsOrLen?: StaticJsValue[] | number,
  ): EvaluationGenerator<StaticJsArrayImpl>;
  static *create(
    realm: StaticJsRealm,
    itemsOrLen: StaticJsValue[] | number = 0,
  ): EvaluationGenerator<StaticJsArrayImpl> {
    const array = new StaticJsArrayImpl(realm);

    // Per the spec, these need to be defineProperty, not setProperty.

    let length: number;
    if (Array.isArray(itemsOrLen)) {
      length = itemsOrLen.length;
      for (let i = 0; i < itemsOrLen.length; i++) {
        const Pi = String(i);
        if (!hasOwnProperty(itemsOrLen, Pi)) {
          // Skip deletions.
          continue;
        }

        yield* array.definePropertyEvaluator(Pi, {
          value: itemsOrLen[i],
          writable: true,
          enumerable: true,
          configurable: true,
        });
      }
    } else {
      length = itemsOrLen;
    }

    yield* array.definePropertyEvaluator("length", {
      value: new StaticJsNumberImpl(realm, length),
      writable: true,
      enumerable: false,
      configurable: false,
    });

    return array;
  }

  private constructor(realm: StaticJsRealm) {
    super(realm, realm.types.prototypes.arrayProto);
  }

  get runtimeTypeOf() {
    return "array" as const;
  }

  *getLengthEvaluator(): EvaluationGenerator<number> {
    const descr = yield* this.getOwnPropertyDescriptorEvaluator("length");
    if (!descr) {
      return 0;
    }

    if (isStaticJsDataPropertyDescriptor(descr)) {
      const value = yield* toNumber(
        descr.value ?? this.realm.types.undefined,
        this.realm,
      );
      return value.value;
    } else if (isStaticJsAccessorPropertyDescriptor(descr) && descr.get) {
      let result = yield* descr.get.callEvaluator(this);
      result = yield* toNumber(result, this.realm);
      return result.value;
    } else {
      return 0;
    }
  }

  *getEvaluator(index: number): EvaluationGenerator<StaticJsValue> {
    return yield* this.getPropertyEvaluator(String(index));
  }

  *setEvaluator(
    index: number,
    value: StaticJsValue,
  ): EvaluationGenerator<void> {
    yield* this.setPropertyEvaluator(String(index), value, false);
  }

  protected _createToJsProxyTarget(): object {
    return [];
  }

  protected *_setWritableDataPropertyEvaluator(
    name: string,
    value: StaticJsValue,
  ): EvaluationGenerator<void> {
    if (name === "length") {
      value = yield* toNumber(value, this.realm);
      const newLength = value.value;
      const length = yield* this.getLengthEvaluator();
      if (newLength < length) {
        for (let i = newLength; i < length; i++) {
          yield* this.deletePropertyEvaluator(i.toString());
        }
      }
    } else {
      const index = parseInt(name, 10);
      if (!Number.isNaN(index)) {
        const length = yield* this.getLengthEvaluator();
        if (index >= length) {
          yield* this._updateLength(index + 1);
        }
      }
    }

    yield* super._setWritableDataPropertyEvaluator(name, value);
  }

  protected *_definePropertyEvaluator(
    name: string,
    descriptor: StaticJsPropertyDescriptor,
  ): EvaluationGenerator<void> {
    yield* super._definePropertyEvaluator(name, descriptor);
    const index = parseInt(name, 10);
    if (!Number.isNaN(index)) {
      const length = yield* this.getLengthEvaluator();
      if (index >= length) {
        yield* this._updateLength(index + 1);
      }
    }
  }

  private *_updateLength(length: number): EvaluationGenerator<void> {
    const currentLength = yield* this.getLengthEvaluator();

    yield* this.setPropertyEvaluator(
      "length",
      new StaticJsNumberImpl(this.realm, length),
      false,
    );

    if (length < currentLength) {
      for (let i = length; i < currentLength; i++) {
        yield* this.deletePropertyEvaluator(i.toString());
      }
    }
  }
}
