import StaticJsRuntimeError from "../../../errors/StaticJsRuntimeError.js";
import type EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";
import toNativeUnwrap from "../../utils/to-native-unwrap.js";

import toRuntimeWrap from "../../utils/to-runtime-wrap.js";

import {
  isStaticJsFunction,
  type StaticJsFunction,
} from "../StaticJsFunction.js";
import type { StaticJsMap } from "../StaticJsMap.js";
import StaticJsTypeCode from "../StaticJsTypeCode.js";
import type { StaticJsValue } from "../StaticJsValue.js";

import StaticJsIteratorImpl from "./StaticJsIteratorImpl.js";

import StaticJsObjectLikeImpl from "./StaticJsObjectLikeImpl.js";

export default class StaticJsMapImpl
  extends StaticJsObjectLikeImpl
  implements StaticJsMap
{
  private readonly _backingStore = new Map<unknown, StaticJsValue>();

  constructor(realm: StaticJsRealm) {
    super(realm, realm.types.prototypes.mapProto);
  }

  get runtimeTypeOf(): "map" {
    return "map";
  }

  get runtimeTypeCode() {
    return StaticJsTypeCode.Map;
  }

  *clearEvaluator(): EvaluationGenerator<void> {
    this._backingStore.clear();
  }

  *deleteEvaluator(key: StaticJsValue): EvaluationGenerator<boolean> {
    return this._backingStore.delete(key);
  }

  *entriesEvaluator(): EvaluationGenerator<StaticJsValue> {
    const backingIterator = this._backingStore.entries();

    const realm = this.realm;
    return new StaticJsIteratorImpl(function* () {
      const value = backingIterator.next();
      if (value.done) {
        return;
      }

      const [key, val] = value.value;
      return realm.types.array([toRuntimeWrap(key, realm), val]);
    }, realm);
  }

  *forEachEvaluator(
    callback: StaticJsFunction,
    thisArg: StaticJsValue = this.realm.types.undefined,
  ): EvaluationGenerator<void> {
    if (!isStaticJsFunction(callback)) {
      throw new StaticJsRuntimeError(
        this.realm.types.error("TypeError", "Callback is not a function"),
      );
    }

    for (const [key, value] of this._backingStore) {
      yield* callback.callEvaluator(
        thisArg,
        value,
        toRuntimeWrap(key, this.realm),
        this,
      );
    }
  }

  *getEvaluator(key: StaticJsValue): EvaluationGenerator<StaticJsValue> {
    const keyUnwrapped = toNativeUnwrap(key);
    const result = this._backingStore.get(keyUnwrapped);
    return toRuntimeWrap(result, this.realm);
  }

  *hasEvaluator(key: StaticJsValue): EvaluationGenerator<boolean> {
    const keyUnwrapped = toNativeUnwrap(key);
    return this._backingStore.has(keyUnwrapped);
  }

  *keysEvaluator(): EvaluationGenerator<StaticJsValue> {
    const backingIterator = this._backingStore.keys();

    const realm = this.realm;
    return new StaticJsIteratorImpl(function* () {
      const value = backingIterator.next();
      if (value.done) {
        return;
      }

      return toRuntimeWrap(value.value, realm);
    }, realm);
  }

  *setEvaluator(
    key: StaticJsValue,
    value: StaticJsValue,
  ): EvaluationGenerator<void> {
    const keyUnwrapped = toNativeUnwrap(key);
    this._backingStore.set(keyUnwrapped, value);
  }

  *valuesEvaluator(): EvaluationGenerator<StaticJsValue> {
    const backingIterator = this._backingStore.values();

    const realm = this.realm;
    return new StaticJsIteratorImpl(function* () {
      const value = backingIterator.next();
      if (value.done) {
        return;
      }

      return value.value;
    }, realm);
  }

  *sizeEvaluator(): EvaluationGenerator<number> {
    return this._backingStore.size;
  }
}
