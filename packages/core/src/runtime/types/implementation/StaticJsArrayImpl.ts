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
import StaticJsUndefinedImpl from "./StaticJsUndefinedImpl.js";
import StaticJsObjectImpl from "./StaticJsObjectImpl.js";

export default class StaticJsArrayImpl
  extends StaticJsObjectImpl
  implements StaticJsArray
{
  constructor(realm: StaticJsRealm, items: StaticJsValue[] = []) {
    super(realm, realm.types.arrayProto, "array");

    // This is a little suspect... We are using runEvaluatorUntilCompletion for these...

    for (let i = 0; i < items.length; i++) {
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

    runEvaluatorUntilCompletion(this._updateLength(items.length));
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
    const descr = yield* this.getOwnPropertyDescriptorEvaluator(String(index));
    if (!descr) {
      return StaticJsUndefinedImpl.Instance;
    }

    if (isStaticJsObjectPropertyDescriptorValue(descr)) {
      return descr.value;
    } else if (isStaticJsObjectPropertyDescriptorGetter(descr)) {
      return yield* descr.get.call(this);
    } else {
      return StaticJsUndefinedImpl.Instance;
    }
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
      const value = yield* this.getEvaluator(i);
      array.push(value);
    }
    return array;
  }

  *pushEvaluator(value: StaticJsValue): EvaluationGenerator<number> {
    const length = yield* this.getLengthEvaluator();
    yield* this.setEvaluator(length, value);
    return yield* this.getLengthEvaluator();
  }

  *popEvaluator(): EvaluationGenerator<StaticJsValue> {
    const length = yield* this.getLengthEvaluator();
    if (length === 0) {
      return StaticJsUndefinedImpl.Instance;
    }

    const value = yield* this.getEvaluator(length - 1);
    yield* this._updateLength(length - 1);
    return value;
  }

  *shiftEvaluator(): EvaluationGenerator<StaticJsValue> {
    const length = yield* this.getLengthEvaluator();
    if (length === 0) {
      return StaticJsUndefinedImpl.Instance;
    }

    const value = yield* this.getEvaluator(0);
    yield* this.deletePropertyEvaluator("0");
    for (let i = 1; i < length; i++) {
      const item = yield* this.getEvaluator(i);
      yield* this.setEvaluator(i - 1, item);
    }
    yield* this._updateLength(length - 1);
    return value;
  }

  *unshiftEvaluator(value: StaticJsValue): EvaluationGenerator<number> {
    const length = yield* this.getLengthEvaluator();
    for (let i = length - 1; i >= 0; i--) {
      const item = yield* this.getEvaluator(i);
      yield* this.setEvaluator(i + 1, item);
    }

    yield* this.setEvaluator(0, value);

    // Length is updated automatically by the set property.
    return yield* this.getLengthEvaluator();
  }

  *spliceEvaluator(
    start: number,
    deleteCount: number,
    ...items: StaticJsValue[]
  ): EvaluationGenerator<StaticJsArray> {
    const length = yield* this.getLengthEvaluator();
    const array = this.realm.types.createArray();

    if (start < -length) {
      start = 0;
    } else if (start > length) {
      start = length;
    } else if (start < 0) {
      start = length + start;
    }

    if (deleteCount < 0) {
      deleteCount = 0;
    } else if (deleteCount > length - start) {
      deleteCount = length - start;
    }

    // Copy the removed items to the new array.
    const deleteLimit = Math.min(length, start + deleteCount);
    for (let i = start; i < deleteLimit; i++) {
      const value = yield* this.getEvaluator(i);
      yield* array.setEvaluator(i - start, value);
    }

    // Shift the items as appropriate.
    const offset = deleteCount - items.length;
    if (offset !== 0) {
      for (let i = length - 1; i >= start + offset; i--) {
        const item = yield* this.getEvaluator(i);
        // We shift items left if we are deleting, but
        // shift them right for new items
        yield* this.setEvaluator(i - offset, item);
      }
    }

    // Write the new items.
    for (let i = 0; i < items.length; i++) {
      yield* this.setEvaluator(i + start, items[i]);
    }

    yield* this._updateLength(length - deleteCount + items.length);
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
    yield* super._setWritableDataPropertyEvaluator(name, value);
    const index = parseInt(name, 10);
    const length = yield* this.getLengthEvaluator();
    if (!Number.isNaN(index) && index >= length) {
      yield* this._updateLength(index + 1);
    }
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
