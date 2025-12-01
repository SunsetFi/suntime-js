import type { Writable } from "type-fest";

import hasOwnProperty from "../../../internal/has-own-property.js";

import type EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";
import { ThrowCompletion } from "../../../evaluator/completions/ThrowCompletion.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import StaticJsEngineError from "../../../errors/StaticJsEngineError.js";

import toNumber from "../../algorithms/to-number.js";
import toUInt32 from "../../algorithms/to-uint-32.js";

import type { StaticJsValue } from "../StaticJsValue.js";
import StaticJsTypeCode from "../StaticJsTypeCode.js";
import type {
  StaticJsDataPropertyDescriptor,
  StaticJsPropertyDescriptor,
} from "../StaticJsPropertyDescriptor.js";
import {
  isStaticJsDataPropertyDescriptor,
  isStaticJsAccessorPropertyDescriptor,
} from "../StaticJsPropertyDescriptor.js";
import {
  MAX_ARRAY_LENGTH_INCLUSIVE,
  type StaticJsArray,
} from "../StaticJsArray.js";
import { isStaticJsNumber } from "../StaticJsNumber.js";

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

    yield* array._init(
      typeof itemsOrLen === "number" ? itemsOrLen : itemsOrLen.length,
    );

    // Often in the spec, setting items on arrays is done through [[DefineOwnProperty]].
    if (Array.isArray(itemsOrLen)) {
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
    }

    return array;
  }

  private constructor(realm: StaticJsRealm) {
    super(realm, realm.types.prototypes.arrayProto);
  }

  private *_init(length: number): EvaluationGenerator<void> {
    // We need to call super and use the direct setter for this.
    // This is the equivalent of the spec OrdinaryDefineOwnProperty, with gratuitious shortcuts, as
    // we know we will be an ObjectLikeImpl and not something exotic.
    yield* super._setPropertyDescriptorEvaluator("length", {
      value: new StaticJsNumberImpl(this.realm, length),
      writable: true,
      enumerable: false,
      configurable: false,
    });
  }

  get runtimeTypeOf() {
    return "array" as const;
  }

  get runtimeTypeCode() {
    return StaticJsTypeCode.Array;
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

  protected _createToJsProxyTarget(): object {
    return [];
  }

  protected *_setPropertyDescriptorEvaluator(
    key: string,
    desc: StaticJsPropertyDescriptor,
  ): EvaluationGenerator<boolean> {
    if (key === "length") {
      return yield* this._setLength(desc);
    }

    if (isArrayIndex(key)) {
      let lengthDesc = yield* this.getOwnPropertyDescriptorEvaluator("length");
      if (!lengthDesc) {
        throw new StaticJsEngineError(
          "Null length descriptor on array intrinsic",
        );
      }
      if (lengthDesc.configurable) {
        throw new StaticJsEngineError(
          "Configurable length descriptor on array intrinsic",
        );
      }
      if (!isStaticJsDataPropertyDescriptor(lengthDesc)) {
        throw new StaticJsEngineError(
          "Invalid length descriptor on array intrinsic",
        );
      }

      const length = lengthDesc.value;
      if (!isStaticJsNumber(length) || length.value < 0) {
        throw new StaticJsEngineError(
          "Invalid length value on array intrinsic",
        );
      }

      const index = toUInt32.sync(key);
      if (index >= length.value && !lengthDesc.writable) {
        return false;
      }

      const success = yield* super._setPropertyDescriptorEvaluator(key, desc);
      if (!success) {
        return false;
      }

      if (index >= length.value) {
        lengthDesc = {
          ...lengthDesc,
          value: new StaticJsNumberImpl(this.realm, index + 1),
        };

        const success = yield* super._setPropertyDescriptorEvaluator(
          "length",
          lengthDesc,
        );
        if (!success) {
          throw new StaticJsEngineError(
            "Failed to update array length after adding element",
          );
        }
      }

      return true;
    }

    return yield* super._setPropertyDescriptorEvaluator(key, desc);
  }

  private *_setLength(
    desc: StaticJsPropertyDescriptor,
  ): EvaluationGenerator<boolean> {
    if (!isStaticJsDataPropertyDescriptor(desc) || !desc.value) {
      return yield* super._setPropertyDescriptorEvaluator("length", desc);
    }

    const newLen = yield* toUInt32(desc.value, this.realm);

    const numberLen = yield* toNumber(desc.value, this.realm);
    if (numberLen.value !== newLen) {
      throw new ThrowCompletion(
        this.realm.types.error("RangeError", "Invalid array length"),
      );
    }

    const newLenDesc: Writable<StaticJsDataPropertyDescriptor> = {
      ...desc,
      value: this.realm.types.number(newLen),
    };

    const oldLenDesc = yield* this.getOwnPropertyDescriptorEvaluator("length");
    if (oldLenDesc === undefined) {
      throw new StaticJsEngineError(
        "Null length descriptor on array intrinsic",
      );
    }
    if (!isStaticJsDataPropertyDescriptor(oldLenDesc)) {
      throw new StaticJsEngineError(
        "Invalid length descriptor on array intrinsic",
      );
    }
    if (oldLenDesc.configurable) {
      throw new StaticJsEngineError(
        "Configurable length descriptor on array intrinsic",
      );
    }

    const oldLenValue = oldLenDesc.value;
    if (!isStaticJsNumber(oldLenValue) || oldLenValue.value < 0) {
      throw new StaticJsEngineError("Invalid length value on array intrinsic");
    }
    const oldLen = oldLenValue.value;

    if (newLen >= oldLen) {
      return yield* super._setPropertyDescriptorEvaluator("length", newLenDesc);
    }

    if (oldLenDesc.writable === false) {
      return false;
    }

    let newWritable: boolean = true;
    if (newLenDesc.writable === false) {
      newWritable = false;
      newLenDesc.writable = true;
    }

    const succeeded = yield* super._setPropertyDescriptorEvaluator(
      "length",
      newLenDesc,
    );
    if (!succeeded) {
      return false;
    }

    const keys = yield* this.getOwnKeysEvaluator();
    // Madness to do the equivalent of toUInt32, which would be inefficient to use on account of being a generator.
    // We probably should make a non-generator version of it.
    const indicies = keys
      .filter(isArrayIndex)
      .map(toUInt32.sync)
      .sort()
      .reverse();
    for (const index of indicies) {
      if (index < newLen) {
        break;
      }

      const deleteSucceeded = yield* this.deletePropertyEvaluator(
        String(index),
      );
      if (!deleteSucceeded) {
        newLenDesc.value = this.realm.types.number(index + 1);
        if (!newWritable) {
          newLenDesc.writable = false;
        }

        yield* super._setPropertyDescriptorEvaluator("length", newLenDesc);
        return false;
      }
    }

    if (!newWritable) {
      const succeeded = yield* super._setPropertyDescriptorEvaluator("length", {
        ...newLenDesc,
        writable: false,
      });
      if (!succeeded) {
        throw new StaticJsEngineError(
          "Failed to make array length non-writable",
        );
      }
    }

    return true;
  }
}

function isArrayIndex(number: number | string): boolean {
  const parsed = typeof number === "number" ? number : parseInt(number, 10);
  return (
    !Number.isNaN(parsed) &&
    parsed >= 0 &&
    parsed <= MAX_ARRAY_LENGTH_INCLUSIVE &&
    Math.floor(parsed) === parsed
  );
}
