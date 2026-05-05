import { StaticJsRuntimeError } from "../../../../errors/StaticJsRuntimeError.js";
import type { EvaluationGenerator } from "../../../../evaluator/EvaluationGenerator.js";
import { call } from "../../../algorithms/call.js";
import { get } from "../../../algorithms/get.js";
import { isCallable } from "../../../algorithms/is-callable.js";
import { toBoolean } from "../../../algorithms/to-boolean.js";
import { getIterator } from "../../../iterators/get-iterator.js";
import { iteratorClose } from "../../../iterators/iterator-close.js";
import { iteratorStepValue } from "../../../iterators/iterator-step-value.js";
import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";
import { toNativeUnwrap } from "../../../utils/to-native-unwrap.js";
import { toRuntimeWrap } from "../../../utils/to-runtime-wrap.js";
import { type StaticJsCallable } from "../../StaticJsCallable.js";
import type { StaticJsIterator } from "../../StaticJsIterator.js";
import { isStaticJsObject } from "../../StaticJsObject.js";
import type { StaticJsSet } from "../../StaticJsSet.js";
import { StaticJsTypeCode } from "../../StaticJsTypeCode.js";
import { isStaticJsValue, type StaticJsValue } from "../../StaticJsValue.js";

import { StaticJsOrdinaryObjectImpl } from "./StaticJsOrdinaryObjectImpl.js";
import { StaticJsSetIteratorImpl } from "./StaticJsSetIteratorImpl.js";

// TODO: Take shortcuts for difference and friends if otherSet is also a StaticJsSetImpl

export class StaticJsSetImpl extends StaticJsOrdinaryObjectImpl implements StaticJsSet {
  private _backingStore = new Set<unknown>();

  constructor(realm: StaticJsRealm) {
    super(realm, realm.intrinsics["Set.prototype"]);
  }

  get runtimeTypeOf(): "set" {
    return "set";
  }

  get runtimeTypeCode() {
    return StaticJsTypeCode.Set;
  }

  *addValueEvaluator(value: StaticJsValue): EvaluationGenerator<void> {
    const unwrapped = toNativeUnwrap(value);
    this._backingStore.add(unwrapped);
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

  *hasEvaluator(value: StaticJsValue): EvaluationGenerator<boolean> {
    const unwrapped = toNativeUnwrap(value);
    return this._backingStore.has(unwrapped);
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

  keysEvaluator(): EvaluationGenerator<StaticJsValue> {
    return this.valuesEvaluator();
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

  *valuesEvaluator(): EvaluationGenerator<StaticJsIterator> {
    return new StaticJsSetIteratorImpl(this._backingStore.values(), "key", this.realm);
  }

  *clearEvaluator(): EvaluationGenerator<void> {
    this._backingStore.clear();
  }

  *deleteValueEvaluator(value: StaticJsValue): EvaluationGenerator<boolean> {
    const unwrapped = toNativeUnwrap(value);
    return this._backingStore.delete(unwrapped);
  }

  *entriesEvaluator(): EvaluationGenerator<StaticJsValue> {
    return new StaticJsSetIteratorImpl(this._backingStore.values(), "key+value", this.realm);
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

  *sizeEvaluator(): EvaluationGenerator<number> {
    return this._backingStore.size;
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
