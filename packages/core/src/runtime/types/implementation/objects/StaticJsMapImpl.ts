import { StaticJsRuntimeError } from "../../../../errors/StaticJsRuntimeError.js";
import type { EvaluationGenerator } from "../../../../evaluator/EvaluationGenerator.js";
import { call } from "../../../algorithms/call.js";
import { isCallable } from "../../../algorithms/is-callable.js";
import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
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

  *clearEvaluator(): EvaluationGenerator<void> {
    this._backingStore.clear();
  }

  *deleteValueEvaluator(key: StaticJsValue): EvaluationGenerator<boolean> {
    const keyUnwrapped = toNativeUnwrap(key);
    return this._backingStore.delete(keyUnwrapped);
  }

  *entriesEvaluator(): EvaluationGenerator<StaticJsIterator> {
    const backingIterator = this._backingStore.entries();
    return new StaticJsMapIteratorImpl(backingIterator, "key+value", this.realm);
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

  *getValueEvaluator(key: StaticJsValue): EvaluationGenerator<StaticJsValue> {
    const keyUnwrapped = toNativeUnwrap(key);
    return this._backingStore.get(keyUnwrapped) ?? this.realm.types.undefined;
  }

  *hasEvaluator(key: StaticJsValue): EvaluationGenerator<boolean> {
    const keyUnwrapped = toNativeUnwrap(key);
    return this._backingStore.has(keyUnwrapped);
  }

  *keysEvaluator(): EvaluationGenerator<StaticJsIterator> {
    const backingIterator = this._backingStore.entries();
    return new StaticJsMapIteratorImpl(backingIterator, "key", this.realm);
  }

  *setValueEvaluator(key: StaticJsValue, value: StaticJsValue): EvaluationGenerator<void> {
    const keyUnwrapped = toNativeUnwrap(key);
    this._backingStore.set(keyUnwrapped, value);
  }

  *valuesEvaluator(): EvaluationGenerator<StaticJsIterator> {
    const backingIterator = this._backingStore.entries();
    return new StaticJsMapIteratorImpl(backingIterator, "value", this.realm);
  }

  *sizeEvaluator(): EvaluationGenerator<number> {
    return this._backingStore.size;
  }
}
