import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsMarkable } from "#memory/StaticJsMarkable.js";
import type { StaticJsRealm } from "#realm/StaticJsRealm.js";
import type { StaticJsRunTaskOptions } from "#tasks/StaticJsRunTaskOptions.js";

import { call } from "#algorithms/call.js";
import { get } from "#algorithms/get.js";
import { isCallable } from "#algorithms/is-callable.js";
import { toBoolean } from "#algorithms/to-boolean.js";
import { StaticJsRuntimeError } from "#errors/StaticJsRuntimeError.js";
import { getIterator } from "#iterators/get-iterator.js";
import { iteratorClose } from "#iterators/iterator-close.js";
import { iteratorStepValue } from "#iterators/iterator-step-value.js";
import {
  STATICJS_PRIMITIVE_BYTES,
  STATICJS_SET_ENTRY_OVERHEAD_BYTES,
  STATICJS_SET_OVERHEAD_BYTES,
} from "#memory/implementation/measurements.js";
import { stringSizeBytes } from "#memory/implementation/string-size.js";
import { toNativeUnwrap } from "#types/utils/to-native-unwrap.js";
import { toRuntimeWrap } from "#types/utils/to-runtime-wrap.js";

import type { StaticJsCallable } from "../../StaticJsCallable.js";
import type { StaticJsIterator } from "../../StaticJsIterator.js";
import type { StaticJsSet } from "../../StaticJsSet.js";

import { isStaticJsObject } from "../../StaticJsObject.js";
import { StaticJsTypeCode } from "../../StaticJsTypeCode.js";
import { isStaticJsValue, type StaticJsValue } from "../../StaticJsValue.js";
import { StaticJsOrdinaryObjectImpl } from "./StaticJsOrdinaryObjectImpl.js";
import { StaticJsSetIteratorImpl } from "./StaticJsSetIteratorImpl.js";

// TODO: Take shortcuts for difference and friends if otherSet is also a StaticJsSetImpl

export class StaticJsSetImpl extends StaticJsOrdinaryObjectImpl implements StaticJsSet {
  private _backingStore = new Set<unknown>();

  constructor(realm: StaticJsRealm) {
    super(realm, realm.intrinsics["Set.prototype"], STATICJS_SET_OVERHEAD_BYTES);
  }

  override get [Symbol.toStringTag](): string {
    return "StaticJsSet";
  }

  get runtimeTypeOf(): "set" {
    return "set";
  }

  get runtimeTypeCode() {
    return StaticJsTypeCode.Set;
  }

  sizeSync(opts?: StaticJsRunTaskOptions): number {
    return this.realm.invokeEvaluatorSync(this.sizeEvaluator(), opts);
  }

  sizeAsync(opts?: StaticJsRunTaskOptions): Promise<number> {
    return this.realm.invokeEvaluatorAsync(this.sizeEvaluator(), opts);
  }

  *sizeEvaluator(): EvaluationGenerator<number> {
    return this._backingStore.size;
  }

  keysSync(opts?: StaticJsRunTaskOptions): StaticJsIterator {
    return this.realm.invokeEvaluatorSync(this.keysEvaluator(), opts);
  }

  keysAsync(opts?: StaticJsRunTaskOptions): Promise<StaticJsIterator> {
    return this.realm.invokeEvaluatorAsync(this.keysEvaluator(), opts);
  }

  keysEvaluator(): EvaluationGenerator<StaticJsIterator> {
    return this.valuesEvaluator();
  }

  valuesSync(opts?: StaticJsRunTaskOptions): StaticJsIterator {
    return this.realm.invokeEvaluatorSync(this.valuesEvaluator(), opts);
  }

  valuesAsync(opts?: StaticJsRunTaskOptions): Promise<StaticJsIterator> {
    return this.realm.invokeEvaluatorAsync(this.valuesEvaluator(), opts);
  }

  *valuesEvaluator(): EvaluationGenerator<StaticJsIterator> {
    return new StaticJsSetIteratorImpl(this._backingStore.values(), "key", this.realm);
  }

  entriesSync(opts?: StaticJsRunTaskOptions): StaticJsIterator {
    return this.realm.invokeEvaluatorSync(this.entriesEvaluator(), opts);
  }

  entriesAsync(opts?: StaticJsRunTaskOptions): Promise<StaticJsIterator> {
    return this.realm.invokeEvaluatorAsync(this.entriesEvaluator(), opts);
  }

  *entriesEvaluator(): EvaluationGenerator<StaticJsIterator> {
    return new StaticJsSetIteratorImpl(this._backingStore.values(), "key+value", this.realm);
  }

  hasSync(value: StaticJsValue, opts?: StaticJsRunTaskOptions): boolean {
    return this.realm.invokeEvaluatorSync(this.hasEvaluator(value), opts);
  }

  hasAsync(value: StaticJsValue, opts?: StaticJsRunTaskOptions): Promise<boolean> {
    return this.realm.invokeEvaluatorAsync(this.hasEvaluator(value), opts);
  }

  *hasEvaluator(value: StaticJsValue): EvaluationGenerator<boolean> {
    const unwrapped = toNativeUnwrap(value);
    return this._backingStore.has(unwrapped);
  }

  addValueSync(value: StaticJsValue, opts?: StaticJsRunTaskOptions): void {
    return this.realm.invokeEvaluatorSync(this.addValueEvaluator(value), opts);
  }

  addValueAsync(value: StaticJsValue, opts?: StaticJsRunTaskOptions): Promise<void> {
    return this.realm.invokeEvaluatorAsync(this.addValueEvaluator(value), opts);
  }

  *addValueEvaluator(value: StaticJsValue): EvaluationGenerator<void> {
    const unwrapped = toNativeUnwrap(value);
    if (!this._backingStore.has(unwrapped)) {
      this.realm.memory.allocate(STATICJS_SET_ENTRY_OVERHEAD_BYTES);
      this._backingStore.add(unwrapped);
    }
  }

  deleteValueSync(value: StaticJsValue, opts?: StaticJsRunTaskOptions): boolean {
    return this.realm.invokeEvaluatorSync(this.deleteValueEvaluator(value), opts);
  }

  deleteValueAsync(value: StaticJsValue, opts?: StaticJsRunTaskOptions): Promise<boolean> {
    return this.realm.invokeEvaluatorAsync(this.deleteValueEvaluator(value), opts);
  }

  *deleteValueEvaluator(value: StaticJsValue): EvaluationGenerator<boolean> {
    const unwrapped = toNativeUnwrap(value);
    return this._backingStore.delete(unwrapped);
  }

  clearSync(opts?: StaticJsRunTaskOptions): void {
    return this.realm.invokeEvaluatorSync(this.clearEvaluator(), opts);
  }

  clearAsync(opts?: StaticJsRunTaskOptions): Promise<void> {
    return this.realm.invokeEvaluatorAsync(this.clearEvaluator(), opts);
  }

  *clearEvaluator(): EvaluationGenerator<void> {
    this._backingStore.clear();
  }

  forEachSync(
    callback: StaticJsCallable,
    thisArg?: StaticJsValue,
    opts?: StaticJsRunTaskOptions,
  ): void {
    return this.realm.invokeEvaluatorSync(this.forEachEvaluator(callback, thisArg), opts);
  }

  forEachAsync(
    callback: StaticJsCallable,
    thisArg?: StaticJsValue,
    opts?: StaticJsRunTaskOptions,
  ): Promise<void> {
    return this.realm.invokeEvaluatorAsync(this.forEachEvaluator(callback, thisArg), opts);
  }

  *forEachEvaluator(
    callback: StaticJsCallable,
    thisArg: StaticJsValue = this.realm.types.undefined,
  ): EvaluationGenerator<void> {
    if (!isCallable(callback)) {
      throw new StaticJsRuntimeError(
        this.realm.types.error("TypeError", "Callback is not a function"),
      );
    }

    if (!isStaticJsValue(thisArg)) {
      throw new StaticJsRuntimeError(this.realm.types.error("TypeError", "thisArg is not a value"));
    }

    for (const value of this._backingStore) {
      const wrapped = toRuntimeWrap(value, this.realm);
      yield* call(callback, thisArg, [wrapped, wrapped, this]);
    }
  }

  differenceSync(otherSet: StaticJsValue, opts?: StaticJsRunTaskOptions): StaticJsValue {
    return this.realm.invokeEvaluatorSync(this.differenceEvaluator(otherSet), opts);
  }

  differenceAsync(otherSet: StaticJsValue, opts?: StaticJsRunTaskOptions): Promise<StaticJsValue> {
    return this.realm.invokeEvaluatorAsync(this.differenceEvaluator(otherSet), opts);
  }

  *differenceEvaluator(otherSet: StaticJsValue): EvaluationGenerator<StaticJsValue> {
    if (!isStaticJsObject(otherSet)) {
      throw new StaticJsRuntimeError(
        this.realm.types.error("TypeError", "Argument is not an object"),
      );
    }

    const [result, resultAdd] = yield* setCreate(this, this.realm);

    const otherHas = yield* get(otherSet, "has");
    if (!isCallable(otherHas)) {
      throw new StaticJsRuntimeError(this.realm.types.error("TypeError", "has is not a function"));
    }

    for (const value of this._backingStore) {
      const wrapped = toRuntimeWrap(value, this.realm);
      const otherHasResult = yield* call(otherHas, otherSet, [wrapped]);
      const isInOther = yield* toBoolean.js(otherHasResult);
      if (!isInOther) {
        yield* call(resultAdd, result, [wrapped]);
      }
    }

    return result;
  }

  intersectionSync(otherSet: StaticJsValue, opts?: StaticJsRunTaskOptions): StaticJsValue {
    return this.realm.invokeEvaluatorSync(this.intersectionEvaluator(otherSet), opts);
  }

  intersectionAsync(
    otherSet: StaticJsValue,
    opts?: StaticJsRunTaskOptions,
  ): Promise<StaticJsValue> {
    return this.realm.invokeEvaluatorAsync(this.intersectionEvaluator(otherSet), opts);
  }

  *intersectionEvaluator(otherSet: StaticJsValue): EvaluationGenerator<StaticJsValue> {
    if (!isStaticJsObject(otherSet)) {
      throw new StaticJsRuntimeError(
        this.realm.types.error("TypeError", "Argument is not an object"),
      );
    }

    const [result, resultAdd] = yield* setCreate(this, this.realm);

    const otherHas = yield* get(otherSet, "has");
    if (!isCallable(otherHas)) {
      throw new StaticJsRuntimeError(this.realm.types.error("TypeError", "has is not a function"));
    }

    for (const value of this._backingStore) {
      const wrapped = toRuntimeWrap(value, this.realm);
      const otherHasResult = yield* call(otherHas, otherSet, [wrapped]);
      const isInOther = yield* toBoolean.js(otherHasResult);
      if (isInOther) {
        yield* call(resultAdd, result, [wrapped]);
      }
    }

    return result;
  }

  isDisjointFromSync(otherSet: StaticJsValue, opts?: StaticJsRunTaskOptions): boolean {
    return this.realm.invokeEvaluatorSync(this.isDisjointFromEvaluator(otherSet), opts);
  }

  isDisjointFromAsync(otherSet: StaticJsValue, opts?: StaticJsRunTaskOptions): Promise<boolean> {
    return this.realm.invokeEvaluatorAsync(this.isDisjointFromEvaluator(otherSet), opts);
  }

  *isDisjointFromEvaluator(otherSet: StaticJsValue): EvaluationGenerator<boolean> {
    if (!isStaticJsObject(otherSet)) {
      throw new StaticJsRuntimeError(
        this.realm.types.error("TypeError", "Argument is not an object"),
      );
    }

    const otherHas = yield* get(otherSet, "has");
    if (!isCallable(otherHas)) {
      throw new StaticJsRuntimeError(this.realm.types.error("TypeError", "has is not a function"));
    }

    for (const value of this._backingStore) {
      const wrapped = toRuntimeWrap(value, this.realm);
      const otherHasResult = yield* call(otherHas, otherSet, [wrapped]);
      const isInOther = yield* toBoolean.js(otherHasResult);
      if (isInOther) {
        return false;
      }
    }

    return true;
  }

  isSubsetOfSync(otherSet: StaticJsValue, opts?: StaticJsRunTaskOptions): boolean {
    return this.realm.invokeEvaluatorSync(this.isSubsetOfEvaluator(otherSet), opts);
  }

  isSubsetOfAsync(otherSet: StaticJsValue, opts?: StaticJsRunTaskOptions): Promise<boolean> {
    return this.realm.invokeEvaluatorAsync(this.isSubsetOfEvaluator(otherSet), opts);
  }

  *isSubsetOfEvaluator(otherSet: StaticJsValue): EvaluationGenerator<boolean> {
    if (!isStaticJsObject(otherSet)) {
      throw new StaticJsRuntimeError(
        this.realm.types.error("TypeError", "Argument is not an object"),
      );
    }

    const otherHas = yield* get(otherSet, "has");
    if (!isCallable(otherHas)) {
      throw new StaticJsRuntimeError(this.realm.types.error("TypeError", "has is not a function"));
    }

    for (const value of this._backingStore) {
      const wrapped = toRuntimeWrap(value, this.realm);
      const otherHasResult = yield* call(otherHas, otherSet, [wrapped]);
      const isInOther = yield* toBoolean.js(otherHasResult);
      if (!isInOther) {
        return false;
      }
    }

    return true;
  }

  isSupersetOfSync(otherSet: StaticJsValue, opts?: StaticJsRunTaskOptions): boolean {
    return this.realm.invokeEvaluatorSync(this.isSupersetOfEvaluator(otherSet), opts);
  }

  isSupersetOfAsync(otherSet: StaticJsValue, opts?: StaticJsRunTaskOptions): Promise<boolean> {
    return this.realm.invokeEvaluatorAsync(this.isSupersetOfEvaluator(otherSet), opts);
  }

  *isSupersetOfEvaluator(otherSet: StaticJsValue): EvaluationGenerator<boolean> {
    if (!isStaticJsObject(otherSet)) {
      throw new StaticJsRuntimeError(
        this.realm.types.error("TypeError", "Argument is not an object"),
      );
    }

    const iterator = yield* getIterator(otherSet, "sync");

    const backingStore = this._backingStore;
    return yield* iteratorClose.handle(iterator, function* () {
      while (true) {
        const nextResult = yield* iteratorStepValue(iterator);
        if (!nextResult) {
          break;
        }

        const unwrapped = toNativeUnwrap(nextResult);
        if (!backingStore.has(unwrapped)) {
          return false;
        }
      }

      return true;
    });
  }

  symmetricDifferenceSync(otherSet: StaticJsValue, opts?: StaticJsRunTaskOptions): StaticJsValue {
    return this.realm.invokeEvaluatorSync(this.symmetricDifferenceEvaluator(otherSet), opts);
  }

  symmetricDifferenceAsync(
    otherSet: StaticJsValue,
    opts?: StaticJsRunTaskOptions,
  ): Promise<StaticJsValue> {
    return this.realm.invokeEvaluatorAsync(this.symmetricDifferenceEvaluator(otherSet), opts);
  }

  *symmetricDifferenceEvaluator(otherSet: StaticJsValue): EvaluationGenerator<StaticJsValue> {
    if (!isStaticJsObject(otherSet)) {
      throw new StaticJsRuntimeError(
        this.realm.types.error("TypeError", "Argument is not an object"),
      );
    }

    const [result, resultAdd] = yield* setCreate(this, this.realm);

    const otherHas = yield* get(otherSet, "has");
    if (!isCallable(otherHas)) {
      throw new StaticJsRuntimeError(this.realm.types.error("TypeError", "has is not a function"));
    }

    for (const value of this._backingStore) {
      const wrapped = toRuntimeWrap(value, this.realm);
      const otherHasResult = yield* call(otherHas, otherSet, [wrapped]);
      const isInOther = yield* toBoolean.js(otherHasResult);
      if (!isInOther) {
        yield* call(resultAdd, result, [wrapped]);
      }
    }

    const iterator = yield* getIterator(otherSet, "sync");
    const backingStore = this._backingStore;
    yield* iteratorClose.handle(iterator, function* () {
      while (true) {
        const nextResult = yield* iteratorStepValue(iterator);
        if (!nextResult) {
          break;
        }

        const unwrapped = toNativeUnwrap(nextResult);
        if (!backingStore.has(unwrapped)) {
          yield* call(resultAdd, result, [nextResult]);
        }
      }
    });

    return result;
  }

  unionSync(otherSet: StaticJsValue, opts?: StaticJsRunTaskOptions): StaticJsValue {
    return this.realm.invokeEvaluatorSync(this.unionEvaluator(otherSet), opts);
  }

  unionAsync(otherSet: StaticJsValue, opts?: StaticJsRunTaskOptions): Promise<StaticJsValue> {
    return this.realm.invokeEvaluatorAsync(this.unionEvaluator(otherSet), opts);
  }

  *unionEvaluator(otherSet: StaticJsValue): EvaluationGenerator<StaticJsValue> {
    const [result, resultAdd] = yield* setCreate(this, this.realm);

    for (const value of this._backingStore) {
      const wrapped = toRuntimeWrap(value, this.realm);
      yield* call(resultAdd, result, [wrapped]);
    }

    const iterator = yield* getIterator(otherSet, "sync");
    const backingStore = this._backingStore;
    yield* iteratorClose.handle(iterator, function* () {
      while (true) {
        const nextResult = yield* iteratorStepValue(iterator);
        if (!nextResult) {
          break;
        }

        const unwrapped = toNativeUnwrap(nextResult);
        if (!backingStore.has(unwrapped)) {
          yield* call(resultAdd, result, [nextResult]);
        }
      }
    });

    return result;
  }

  override mark(marks: Set<StaticJsMarkable>, allocate?: (size: number) => void): void {
    if (marks.has(this)) {
      return;
    }

    super.mark(marks, allocate);

    for (const value of this._backingStore) {
      allocate?.(STATICJS_SET_ENTRY_OVERHEAD_BYTES);

      if (isStaticJsValue(value)) {
        value.mark(marks, allocate);
      } else {
        switch (typeof value) {
          case "string":
            allocate?.(stringSizeBytes(value));
            break;
          case "number":
            allocate?.(STATICJS_PRIMITIVE_BYTES);
            break;
        }
      }
    }
  }
}

function* setCreate(
  _from: StaticJsSetImpl,
  realm: StaticJsRealm,
): EvaluationGenerator<[set: StaticJsValue, add: StaticJsCallable]> {
  // According to MDN, Set[@@species] is never used.
  // const result = yield* speciesConstructor(
  //   from,
  //   realm.intrinsics.Set,
  //   realm
  // );

  const result = yield* realm.intrinsics.Set.constructEvaluator();

  if (!isStaticJsObject(result)) {
    throw new StaticJsRuntimeError(realm.types.error("TypeError", "Failed to create Set"));
  }
  const resultAdd = yield* get(result, "add");
  if (!isCallable(resultAdd)) {
    throw new StaticJsRuntimeError(realm.types.error("TypeError", "add is not a function"));
  }

  return [result, resultAdd];
}
