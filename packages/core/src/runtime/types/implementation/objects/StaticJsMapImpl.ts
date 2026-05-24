import { StaticJsRuntimeError } from "../../../../errors/StaticJsRuntimeError.js";
import type { EvaluationGenerator } from "../../../../evaluator/EvaluationGenerator.js";
import { call } from "../../../algorithms/call.js";
import { isCallable } from "../../../algorithms/is-callable.js";
import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import type { StaticJsRunTaskOptions } from "../../../tasks/StaticJsRunTaskOptions.js";
import { toNativeUnwrap } from "../../../utils/to-native-unwrap.js";
import { toRuntimeWrap } from "../../../utils/to-runtime-wrap.js";
import { StaticJsCallable } from "../../StaticJsCallable.js";
import type { StaticJsIterator } from "../../StaticJsIterator.js";
import type { StaticJsMap } from "../../StaticJsMap.js";
import { StaticJsTypeCode } from "../../StaticJsTypeCode.js";
import type { StaticJsValue } from "../../StaticJsValue.js";

import { StaticJsMapIteratorImpl } from "./StaticJsMapIteratorImpl.js";
import { StaticJsOrdinaryObjectImpl } from "./StaticJsOrdinaryObjectImpl.js";

export class StaticJsMapImpl extends StaticJsOrdinaryObjectImpl implements StaticJsMap {
  private readonly _backingStore = new Map<unknown, StaticJsValue>();

  constructor(realm: StaticJsRealm) {
    super(realm, realm.intrinsics["Map.prototype"]);
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
    return new StaticJsMapIteratorImpl(backingIterator, "key+value", this.realm);
  }

  keysSync(opts?: StaticJsRunTaskOptions): StaticJsIterator {
    return this.realm.invokeEvaluatorSync(this.keysEvaluator(), opts);
  }

  keysAsync(opts?: StaticJsRunTaskOptions): Promise<StaticJsIterator> {
    return this.realm.invokeEvaluatorAsync(this.keysEvaluator(), opts);
  }

  *keysEvaluator(): EvaluationGenerator<StaticJsIterator> {
    const backingIterator = this._backingStore.entries();
    return new StaticJsMapIteratorImpl(backingIterator, "key", this.realm);
  }

  valuesSync(opts?: StaticJsRunTaskOptions): StaticJsIterator {
    return this.realm.invokeEvaluatorSync(this.valuesEvaluator(), opts);
  }

  valuesAsync(opts?: StaticJsRunTaskOptions): Promise<StaticJsIterator> {
    return this.realm.invokeEvaluatorAsync(this.valuesEvaluator(), opts);
  }

  *valuesEvaluator(): EvaluationGenerator<StaticJsIterator> {
    const backingIterator = this._backingStore.entries();
    return new StaticJsMapIteratorImpl(backingIterator, "value", this.realm);
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
}
