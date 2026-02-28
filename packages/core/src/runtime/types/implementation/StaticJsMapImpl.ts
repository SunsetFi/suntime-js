import StaticJsRuntimeError from "../../../errors/StaticJsRuntimeError.js";

import type { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";

import { createIteratorResultObject } from "../../iterators/create-iterator-result-object.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import toNativeUnwrap from "../../utils/to-native-unwrap.js";
import toRuntimeWrap from "../../utils/to-runtime-wrap.js";

import { isStaticJsFunction, type StaticJsFunction } from "../StaticJsFunction.js";
import type { StaticJsIterator, StaticJsIteratorResult } from "../StaticJsIterator.js";
import type { StaticJsMap } from "../StaticJsMap.js";
import StaticJsTypeCode from "../StaticJsTypeCode.js";
import type { StaticJsValue } from "../StaticJsValue.js";
import StaticJsFunctionImpl from "./StaticJsFunctionImpl.js";

import StaticJsIteratorImpl from "./StaticJsIteratorImpl.js";

import StaticJsObjectLikeImpl from "./StaticJsObjectLikeImpl.js";

export default class StaticJsMapImpl extends StaticJsObjectLikeImpl implements StaticJsMap {
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

  *deleteValueEvaluator(key: StaticJsValue): EvaluationGenerator<boolean> {
    const keyUnwrapped = toNativeUnwrap(key);
    return this._backingStore.delete(keyUnwrapped);
  }

  *entriesEvaluator(): EvaluationGenerator<StaticJsIterator> {
    const backingIterator = this._backingStore.entries();
    return new StaticJsMapIteratorImpl(backingIterator, "key+value", this.realm);
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
      yield* callback.callEvaluator(thisArg, [value, toRuntimeWrap(key, this.realm), this]);
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

// FIXME: Implement spec compliant CreateMapIterator,
// which needs generators.
class StaticJsMapIteratorImpl extends StaticJsIteratorImpl {
  constructor(
    private _backingIterator: IterableIterator<[unknown, StaticJsValue]> | null,
    private readonly _kind: "key" | "value" | "key+value",
    realm: StaticJsRealm,
  ) {
    super(realm);

    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const self = this;

    this.defineOwnPropertySync("next", {
      value: new StaticJsFunctionImpl(realm, "next", function* () {
        const result = yield* self.nextEvaluator();
        return yield* createIteratorResultObject(result.value, result.done, self.realm);
      }),
      writable: true,
      enumerable: false,
      configurable: true,
    });
  }

  *nextEvaluator(): EvaluationGenerator<StaticJsIteratorResult> {
    const iterator = this._backingIterator;
    if (!iterator) {
      return {
        value: this.realm.types.undefined,
        done: true,
      };
    }

    const { value, done } = iterator.next();
    if (done) {
      this._backingIterator = null;
      return {
        value: this.realm.types.undefined,
        done: true,
      };
    }

    const [key, val] = value;

    let result: StaticJsValue;
    switch (this._kind) {
      case "key":
        result = toRuntimeWrap(key, this.realm);
        break;
      case "value":
        result = val;
        break;
      case "key+value":
        result = this.realm.types.array([toRuntimeWrap(key, this.realm), val]);
        break;
    }

    return {
      value: result,
      done: false,
    };
  }
}
