import StaticJsRuntimeError from "../../../errors/StaticJsRuntimeError.js";
import type EvaluationGenerator from "../../../evaluator/EvaluationGenerator.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";
import toNativeUnwrap from "../../utils/to-native-unwrap.js";

import {
  isStaticJsFunction,
  type StaticJsFunction,
} from "../StaticJsFunction.js";
import type { StaticJsMap } from "../StaticJsMap.js";
import StaticJsTypeCode from "../StaticJsTypeCode.js";
import type { StaticJsValue } from "../StaticJsValue.js";

import StaticJsIteratorImpl from "./StaticJsIteratorImpl.js";

import StaticJsObjectLikeImpl from "./StaticJsObjectLikeImpl.js";

interface MapValue {
  key: StaticJsValue;
  value: StaticJsValue;
}

export default class StaticJsMapImpl
  extends StaticJsObjectLikeImpl
  implements StaticJsMap
{
  private readonly _backingStore = new Map<unknown, MapValue>();

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
    for (const [, { key, value }] of this._backingStore) {
      key.unref();
      value.unref();
    }

    this._backingStore.clear();
  }

  *deleteValueEvaluator(key: StaticJsValue): EvaluationGenerator<boolean> {
    const keyUnwrapped = toNativeUnwrap(key);
    const data = this._backingStore.get(keyUnwrapped);
    if (!data) {
      return false;
    }

    const { key: internalKey, value } = data;

    internalKey.unref();
    value.unref();

    this._backingStore.delete(keyUnwrapped);

    return true;
  }

  *entriesEvaluator(): EvaluationGenerator<StaticJsValue> {
    const backingIterator = this._backingStore.values();

    const realm = this.realm;
    return new StaticJsIteratorImpl(function* () {
      const n = backingIterator.next();
      if (n.done) {
        return;
      }

      const { key, value } = n.value;
      return realm.types.array([key, value]);
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

    for (const { key, value } of this._backingStore.values()) {
      yield* callback.callEvaluator(thisArg, [value, key, this]);
    }
  }

  *getValueEvaluator(key: StaticJsValue): EvaluationGenerator<StaticJsValue> {
    const keyUnwrapped = toNativeUnwrap(key);
    const data = this._backingStore.get(keyUnwrapped);
    if (!data) {
      return this.realm.types.undefined;
    }

    return data.value;
  }

  *hasEvaluator(key: StaticJsValue): EvaluationGenerator<boolean> {
    const keyUnwrapped = toNativeUnwrap(key);
    return this._backingStore.has(keyUnwrapped);
  }

  *keysEvaluator(): EvaluationGenerator<StaticJsValue> {
    const backingIterator = this._backingStore.values();

    const realm = this.realm;
    return new StaticJsIteratorImpl(function* () {
      const n = backingIterator.next();
      if (n.done) {
        return;
      }

      return n.value.key;
    }, realm);
  }

  *setValueEvaluator(
    key: StaticJsValue,
    value: StaticJsValue,
  ): EvaluationGenerator<void> {
    const keyUnwrapped = toNativeUnwrap(key);
    let data = this._backingStore.get(keyUnwrapped);
    if (data) {
      data.value.unref();
      data.value = value;
    } else {
      key.ref();
      data = { key, value };
    }

    value.ref();

    this._backingStore.set(keyUnwrapped, data);
  }

  *valuesEvaluator(): EvaluationGenerator<StaticJsValue> {
    const backingIterator = this._backingStore.values();

    const realm = this.realm;
    return new StaticJsIteratorImpl(function* () {
      const n = backingIterator.next();
      if (n.done) {
        return;
      }

      return n.value.value;
    }, realm);
  }

  *sizeEvaluator(): EvaluationGenerator<number> {
    return this._backingStore.size;
  }
}
