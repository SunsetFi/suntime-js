import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsAllocation, StaticJsAllocator } from "#memory/StaticJsAllocation.js";
import type { StaticJsRealm } from "#realm/StaticJsRealm.js";
import type { StaticJsRunTaskOptions } from "#tasks/StaticJsRunTaskOptions.js";

import { call } from "#algorithms/call.js";
import { isCallable } from "#algorithms/is-callable.js";
import { StaticJsRuntimeError } from "#errors/StaticJsRuntimeError.js";
import { StaticJsMemoryAllocationTag } from "#memory/StaticJsMemoryAllocationTag.js";
import { toNativeUnwrap } from "#types/utils/to-native-unwrap.js";
import { toRuntimeWrap } from "#types/utils/to-runtime-wrap.js";

import type { StaticJsCallable } from "../../StaticJsCallable.js";
import type { StaticJsIterator } from "../../StaticJsIterator.js";
import type { StaticJsMap } from "../../StaticJsMap.js";

import { StaticJsTypeCode } from "../../StaticJsTypeCode.js";
import { isStaticJsValue, type StaticJsValue } from "../../StaticJsValue.js";
import { StaticJsMapIteratorImpl } from "./StaticJsMapIteratorImpl.js";
import { StaticJsOrdinaryObjectImpl } from "./StaticJsOrdinaryObjectImpl.js";

export class StaticJsMapImpl extends StaticJsOrdinaryObjectImpl implements StaticJsMap {
  private readonly _backingStore = new Map<unknown, StaticJsValue>();

  constructor(realm: StaticJsRealm) {
    super(realm, realm.intrinsics["Map.prototype"], StaticJsMemoryAllocationTag.StaticJsMap);
  }

  override get [Symbol.toStringTag](): string {
    return "StaticJsMap";
  }

  get runtimeTypeOf(): "map" {
    return "map";
  }

  get runtimeTypeCode() {
    return StaticJsTypeCode.Map;
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

  entriesSync(opts?: StaticJsRunTaskOptions): StaticJsIterator {
    return this.realm.invokeEvaluatorSync(this.entriesEvaluator(), opts);
  }

  entriesAsync(opts?: StaticJsRunTaskOptions): Promise<StaticJsIterator> {
    return this.realm.invokeEvaluatorAsync(this.entriesEvaluator(), opts);
  }

  *entriesEvaluator(): EvaluationGenerator<StaticJsIterator> {
    const backingIterator = this._backingStore.entries();
    return new StaticJsMapIteratorImpl(this, backingIterator, "key+value", this.realm);
  }

  keysSync(opts?: StaticJsRunTaskOptions): StaticJsIterator {
    return this.realm.invokeEvaluatorSync(this.keysEvaluator(), opts);
  }

  keysAsync(opts?: StaticJsRunTaskOptions): Promise<StaticJsIterator> {
    return this.realm.invokeEvaluatorAsync(this.keysEvaluator(), opts);
  }

  *keysEvaluator(): EvaluationGenerator<StaticJsIterator> {
    const backingIterator = this._backingStore.entries();
    return new StaticJsMapIteratorImpl(this, backingIterator, "key", this.realm);
  }

  valuesSync(opts?: StaticJsRunTaskOptions): StaticJsIterator {
    return this.realm.invokeEvaluatorSync(this.valuesEvaluator(), opts);
  }

  valuesAsync(opts?: StaticJsRunTaskOptions): Promise<StaticJsIterator> {
    return this.realm.invokeEvaluatorAsync(this.valuesEvaluator(), opts);
  }

  *valuesEvaluator(): EvaluationGenerator<StaticJsIterator> {
    const backingIterator = this._backingStore.entries();
    return new StaticJsMapIteratorImpl(this, backingIterator, "value", this.realm);
  }

  hasSync(key: StaticJsValue, opts?: StaticJsRunTaskOptions): boolean {
    return this.realm.invokeEvaluatorSync(this.hasEvaluator(key), opts);
  }

  hasAsync(key: StaticJsValue, opts?: StaticJsRunTaskOptions): Promise<boolean> {
    return this.realm.invokeEvaluatorAsync(this.hasEvaluator(key), opts);
  }

  *hasEvaluator(key: StaticJsValue): EvaluationGenerator<boolean> {
    const keyUnwrapped = toNativeUnwrap(key);
    return this._backingStore.has(keyUnwrapped);
  }

  getValueSync(key: StaticJsValue, opts?: StaticJsRunTaskOptions): StaticJsValue {
    return this.realm.invokeEvaluatorSync(this.getValueEvaluator(key), opts);
  }

  getValueAsync(key: StaticJsValue, opts?: StaticJsRunTaskOptions): Promise<StaticJsValue> {
    return this.realm.invokeEvaluatorAsync(this.getValueEvaluator(key), opts);
  }

  *getValueEvaluator(key: StaticJsValue): EvaluationGenerator<StaticJsValue> {
    const keyUnwrapped = toNativeUnwrap(key);
    return this._backingStore.get(keyUnwrapped) ?? this.realm.types.undefined;
  }

  setValueSync(key: StaticJsValue, value: StaticJsValue, opts?: StaticJsRunTaskOptions): void {
    return this.realm.invokeEvaluatorSync(this.setValueEvaluator(key, value), opts);
  }

  setValueAsync(
    key: StaticJsValue,
    value: StaticJsValue,
    opts?: StaticJsRunTaskOptions,
  ): Promise<void> {
    return this.realm.invokeEvaluatorAsync(this.setValueEvaluator(key, value), opts);
  }

  *setValueEvaluator(key: StaticJsValue, value: StaticJsValue): EvaluationGenerator<void> {
    const keyUnwrapped = toNativeUnwrap(key);
    if (!this._backingStore.has(keyUnwrapped)) {
      this.realm.memory.allocate(StaticJsMemoryAllocationTag.StaticJsMapEntryOverhead, undefined);
      // The unwrapped key's own storage (string content, boxed number, etc.) is
      // accounted for in mark(). At this point the caller still holds the
      // StaticJsValue it was passed, which already charged for that storage, so
      // charging it again here would double-count the same native value.
    }
    this._backingStore.set(keyUnwrapped, value);
  }

  deleteValueSync(key: StaticJsValue, opts?: StaticJsRunTaskOptions): boolean {
    return this.realm.invokeEvaluatorSync(this.deleteValueEvaluator(key), opts);
  }

  deleteValueAsync(key: StaticJsValue, opts?: StaticJsRunTaskOptions): Promise<boolean> {
    return this.realm.invokeEvaluatorAsync(this.deleteValueEvaluator(key), opts);
  }

  *deleteValueEvaluator(key: StaticJsValue): EvaluationGenerator<boolean> {
    const keyUnwrapped = toNativeUnwrap(key);
    return this._backingStore.delete(keyUnwrapped);
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

    for (const [key, value] of this._backingStore) {
      yield* call(callback, thisArg, [value, toRuntimeWrap(key, this.realm), this]);
    }
  }

  override mark(marks: Set<StaticJsAllocation>): void {
    if (marks.has(this)) {
      return;
    }

    super.mark(marks);

    for (const [key, value] of this._backingStore) {
      if (isStaticJsValue(key)) {
        key.mark(marks);
      }
      value.mark(marks);
    }
  }

  override allocateSelf(
    allocate: StaticJsAllocator = this.realm.memory.allocate.bind(this.realm.memory),
  ): void {
    super.allocateSelf(allocate);
    for (const key of this._backingStore.keys()) {
      allocate(StaticJsMemoryAllocationTag.StaticJsMapEntryOverhead, undefined);
      if (typeof key === "string") {
        allocate(StaticJsMemoryAllocationTag.RawString, key);
      } else if (typeof key === "number") {
        allocate(StaticJsMemoryAllocationTag.RawNumber, key);
      }
    }
  }
}
