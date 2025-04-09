import hasOwnProperty from "../../../internal/has-own-property.js";

import {
  EvaluationGenerator,
  runEvaluatorUntilCompletion,
} from "../../../evaluator/internal.js";

import StaticJsRealm from "../../realm/interfaces/StaticJsRealm.js";

import { StaticJsValue } from "../interfaces/StaticJsValue.js";
import {
  isStaticJsObjectPropertyDescriptorValue,
  isStaticJsObjectPropertyDescriptorGetter,
  StaticJsObjectPropertyDescriptor,
} from "../interfaces/StaticJsObject.js";
import { StaticJsArray } from "../interfaces/StaticJsArray.js";

import staticJsDescriptorToObjectDescriptor from "../utils/sjs-descriptor-to-descriptor.js";

import StaticJsNumberImpl from "./StaticJsNumberImpl.js";
import StaticJsObjectLikeImpl from "./StaticJsObjectLikeImpl.js";

export default class StaticJsArrayImpl
  extends StaticJsObjectLikeImpl
  implements StaticJsArray
{
  constructor(realm: StaticJsRealm, items: StaticJsValue[] = []) {
    super(realm, realm.types.arrayProto);

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

    if (isStaticJsObjectPropertyDescriptorValue(descr)) {
      return descr.value.toNumber();
    } else if (isStaticJsObjectPropertyDescriptorGetter(descr)) {
      const getValue = yield* descr.get.call(this);
      return getValue.toNumber();
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
    const array = this.realm.types.createArray();
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

  toJs() {
    const length = runEvaluatorUntilCompletion(this.getLengthEvaluator());
    const array = new Array(length);
    for (const key of this.getOwnKeys()) {
      const descriptor = this.getOwnPropertyDescriptor(key)!;
      const objDescriptor = staticJsDescriptorToObjectDescriptor(
        this.realm,
        descriptor,
      );
      Object.defineProperty(array, key, objDescriptor);
    }

    // FIXME: Set prototype if not Array.prototype
    return array;
  }

  toString() {
    const length = runEvaluatorUntilCompletion(this.getLengthEvaluator());
    return Array(length)
      .fill(undefined)
      .map((_, i) => {
        const item = runEvaluatorUntilCompletion(this.getEvaluator(i));
        return item.toString();
      })
      .join(",");
  }

  toNumber() {
    const length = runEvaluatorUntilCompletion(this.getLengthEvaluator());
    // Yes, really.
    if (length === 0) {
      return 0;
    }

    // Yes, really really.
    if (length === 1) {
      // Really really really.
      if (!this.hasProperty("0")) {
        return 0;
      }

      // Really really really really.
      return this.getProperty("0").toNumber();
    }

    // Really really really really really
    return Number.NaN;
  }

  protected *_setWritableDataPropertyEvaluator(
    name: string,
    value: StaticJsValue,
  ): EvaluationGenerator<void> {
    if (name === "length") {
      const length = yield* this.getLengthEvaluator();
      const newLength = value.toNumber();
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
    descriptor: StaticJsObjectPropertyDescriptor,
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
