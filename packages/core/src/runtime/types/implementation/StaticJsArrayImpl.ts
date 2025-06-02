import hasOwnProperty from "../../../internal/has-own-property.js";

import type EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";
import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import type { StaticJsValue } from "../StaticJsValue.js";
import type { StaticJsPropertyDescriptor } from "../StaticJsPropertyDescriptor.js";
import {
  isStaticJsDataPropertyDescriptor,
  isStaticJsAccessorPropertyDescriptor,
} from "../StaticJsPropertyDescriptor.js";
import type { StaticJsArray } from "../StaticJsArray.js";

import StaticJsNumberImpl from "./StaticJsNumberImpl.js";
import StaticJsObjectLikeImpl from "./StaticJsObjectLikeImpl.js";
import toNumber from "../../algorithms/to-number.js";

export default class StaticJsArrayImpl
  extends StaticJsObjectLikeImpl
  implements StaticJsArray
{
  constructor(realm: StaticJsRealm, items: StaticJsValue[] = []) {
    super(realm, realm.types.prototypes.arrayProto);

    // This is a little suspect... We are using runEvaluatorUntilCompletion for these...

    for (let i = 0; i < items.length; i++) {
      if (!hasOwnProperty(items, String(i))) {
        // Skip deletions.
        continue;
      }

      this.defineProperty(i.toString(), {
        value: items[i],
        writable: true,
        enumerable: true,
        configurable: true,
      });
    }

    this.defineProperty("length", {
      value: new StaticJsNumberImpl(realm, items.length),
      writable: true,
      enumerable: false,
      configurable: false,
    });
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
      const value = yield* toNumber(descr.value, this.realm);
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

  *sliceEvaluator(start = 0, end?: number): EvaluationGenerator<StaticJsArray> {
    if (end == null) {
      end = yield* this.getLengthEvaluator();
    }
    const array = this.realm.types.array();
    for (let i = start; i < end; i++) {
      const value = yield* this.getEvaluator(i);
      yield* array.setEvaluator(i, value);
    }
    return array;
  }

  *sliceNativeEvaluator(
    start = 0,
    end?: number,
  ): EvaluationGenerator<StaticJsValue[]> {
    if (end == null) {
      end = yield* this.getLengthEvaluator();
    }

    const array = new Array<StaticJsValue>();
    for (let i = start; i < end; i++) {
      // Reproduce gaps.
      const hasProperty = yield* this.hasPropertyEvaluator(i.toString());
      if (!hasProperty) {
        const length = array.push(this.realm.types.undefined);
        delete array[length - 1];
        continue;
      }

      const value = yield* this.getEvaluator(i);
      array.push(value);
    }

    return array;
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
