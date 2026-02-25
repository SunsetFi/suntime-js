import StaticJsRuntimeError from "../../../errors/StaticJsRuntimeError.js";

import type { EvaluationGenerator } from "../../../evaluator/EvaluationGenerator.js";

import getIterator from "../../iterators/get-iterator.js";
import iteratorStepValue from "../../iterators/iterator-step-value.js";
import toBoolean from "../../algorithms/to-boolean.js";

import type { StaticJsRealm } from "../../realm/StaticJsRealm.js";

import toNativeUnwrap from "../../utils/to-native-unwrap.js";
import toRuntimeWrap from "../../utils/to-runtime-wrap.js";

import { isStaticJsFunction, type StaticJsFunction } from "../StaticJsFunction.js";
import { isStaticJsObjectLike } from "../StaticJsObjectLike.js";
import { isStaticJsValue, type StaticJsValue } from "../StaticJsValue.js";
import type { StaticJsSet } from "../StaticJsSet.js";

import StaticJsIteratorImpl from "./StaticJsIteratorImpl.js";
import StaticJsObjectLikeImpl from "./StaticJsObjectLikeImpl.js";
import StaticJsTypeCode from "../StaticJsTypeCode.js";
import iteratorClose from "../../iterators/iterator-close.js";

// TODO: Take shortcuts for difference and friends if otherSet is also a StaticJsSetImpl

export default class StaticJsSetImpl extends StaticJsObjectLikeImpl implements StaticJsSet {
  private _backingStore = new Set<unknown>();

  constructor(realm: StaticJsRealm) {
    super(realm, realm.types.prototypes.setProto);
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
    if (!isStaticJsObjectLike(otherSet)) {
      throw new StaticJsRuntimeError(
        this.realm.types.error("TypeError", "Argument is not an object"),
      );
    }

    const [result, resultAdd] = yield* setCreate(this, this.realm);

    const otherHas = yield* otherSet.getEvaluator("has");
    if (!isStaticJsFunction(otherHas)) {
      throw new StaticJsRuntimeError(this.realm.types.error("TypeError", "has is not a function"));
    }

    for (const value of this._backingStore) {
      const wrapped = toRuntimeWrap(value, this.realm);
      const otherHasResult = yield* otherHas.callEvaluator(otherSet, [wrapped]);
      const isInOther = yield* toBoolean.js(otherHasResult, this.realm);
      if (!isInOther) {
        yield* resultAdd.callEvaluator(result, [wrapped]);
      }
    }

    return result;
  }

  *hasEvaluator(value: StaticJsValue): EvaluationGenerator<boolean> {
    const unwrapped = toNativeUnwrap(value);
    return this._backingStore.has(unwrapped);
  }

  *intersectionEvaluator(otherSet: StaticJsValue): EvaluationGenerator<StaticJsValue> {
    if (!isStaticJsObjectLike(otherSet)) {
      throw new StaticJsRuntimeError(
        this.realm.types.error("TypeError", "Argument is not an object"),
      );
    }

    const [result, resultAdd] = yield* setCreate(this, this.realm);

    const otherHas = yield* otherSet.getEvaluator("has");
    if (!isStaticJsFunction(otherHas)) {
      throw new StaticJsRuntimeError(this.realm.types.error("TypeError", "has is not a function"));
    }

    for (const value of this._backingStore) {
      const wrapped = toRuntimeWrap(value, this.realm);
      const otherHasResult = yield* otherHas.callEvaluator(otherSet, [wrapped]);
      const isInOther = yield* toBoolean.js(otherHasResult, this.realm);
      if (isInOther) {
        yield* resultAdd.callEvaluator(result, [wrapped]);
      }
    }

    return result;
  }

  *isDisjointFromEvaluator(otherSet: StaticJsValue): EvaluationGenerator<boolean> {
    if (!isStaticJsObjectLike(otherSet)) {
      throw new StaticJsRuntimeError(
        this.realm.types.error("TypeError", "Argument is not an object"),
      );
    }

    const otherHas = yield* otherSet.getEvaluator("has");
    if (!isStaticJsFunction(otherHas)) {
      throw new StaticJsRuntimeError(this.realm.types.error("TypeError", "has is not a function"));
    }

    for (const value of this._backingStore) {
      const wrapped = toRuntimeWrap(value, this.realm);
      const otherHasResult = yield* otherHas.callEvaluator(otherSet, [wrapped]);
      const isInOther = yield* toBoolean.js(otherHasResult, this.realm);
      if (isInOther) {
        return false;
      }
    }

    return true;
  }

  *isSubsetOfEvaluator(otherSet: StaticJsValue): EvaluationGenerator<boolean> {
    if (!isStaticJsObjectLike(otherSet)) {
      throw new StaticJsRuntimeError(
        this.realm.types.error("TypeError", "Argument is not an object"),
      );
    }

    const otherHas = yield* otherSet.getEvaluator("has");
    if (!isStaticJsFunction(otherHas)) {
      throw new StaticJsRuntimeError(this.realm.types.error("TypeError", "has is not a function"));
    }

    for (const value of this._backingStore) {
      const wrapped = toRuntimeWrap(value, this.realm);
      const otherHasResult = yield* otherHas.callEvaluator(otherSet, [wrapped]);
      const isInOther = yield* toBoolean.js(otherHasResult, this.realm);
      if (!isInOther) {
        return false;
      }
    }

    return true;
  }

  *isSupersetOfEvaluator(otherSet: StaticJsValue): EvaluationGenerator<boolean> {
    if (!isStaticJsObjectLike(otherSet)) {
      throw new StaticJsRuntimeError(
        this.realm.types.error("TypeError", "Argument is not an object"),
      );
    }

    const iterator = yield* getIterator(otherSet, "sync", this.realm);

    const realm = this.realm;
    const backingStore = this._backingStore;
    return yield* iteratorClose.handle(iterator, realm, function* () {
      while (true) {
        const nextResult = yield* iteratorStepValue(iterator, realm);
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
    if (!isStaticJsObjectLike(otherSet)) {
      throw new StaticJsRuntimeError(
        this.realm.types.error("TypeError", "Argument is not an object"),
      );
    }

    const [result, resultAdd] = yield* setCreate(this, this.realm);

    const otherHas = yield* otherSet.getEvaluator("has");
    if (!isStaticJsFunction(otherHas)) {
      throw new StaticJsRuntimeError(this.realm.types.error("TypeError", "has is not a function"));
    }

    for (const value of this._backingStore) {
      const wrapped = toRuntimeWrap(value, this.realm);
      const otherHasResult = yield* otherHas.callEvaluator(otherSet, [wrapped]);
      const isInOther = yield* toBoolean.js(otherHasResult, this.realm);
      if (!isInOther) {
        yield* resultAdd.callEvaluator(result, [wrapped]);
      }
    }

    const iterator = yield* getIterator(otherSet, "sync", this.realm);
    const realm = this.realm;
    const backingStore = this._backingStore;
    yield* iteratorClose.handle(iterator, this.realm, function* () {
      while (true) {
        const nextResult = yield* iteratorStepValue(iterator, realm);
        if (!nextResult) {
          break;
        }

        const unwrapped = toNativeUnwrap(nextResult);
        if (!backingStore.has(unwrapped)) {
          yield* resultAdd.callEvaluator(result, [nextResult]);
        }
      }
    });

    return result;
  }

  *unionEvaluator(otherSet: StaticJsValue): EvaluationGenerator<StaticJsValue> {
    const [result, resultAdd] = yield* setCreate(this, this.realm);

    for (const value of this._backingStore) {
      const wrapped = toRuntimeWrap(value, this.realm);
      yield* resultAdd.callEvaluator(result, [wrapped]);
    }

    const iterator = yield* getIterator(otherSet, "sync", this.realm);
    const realm = this.realm;
    const backingStore = this._backingStore;
    yield* iteratorClose.handle(iterator, realm, function* () {
      while (true) {
        const nextResult = yield* iteratorStepValue(iterator, realm);
        if (!nextResult) {
          break;
        }

        const unwrapped = toNativeUnwrap(nextResult);
        if (!backingStore.has(unwrapped)) {
          yield* resultAdd.callEvaluator(result, [nextResult]);
        }
      }
    });

    return result;
  }

  *valuesEvaluator(): EvaluationGenerator<StaticJsValue> {
    const backingIterator = this._backingStore.values();

    const realm = this.realm;
    return new StaticJsIteratorImpl(function* () {
      const next = backingIterator.next();
      if (next.done) {
        return undefined;
      }

      return toRuntimeWrap(next.value, realm);
    }, realm);
  }

  *clearEvaluator(): EvaluationGenerator<void> {
    this._backingStore.clear();
  }

  *deleteValueEvaluator(value: StaticJsValue): EvaluationGenerator<boolean> {
    const unwrapped = toNativeUnwrap(value);
    return this._backingStore.delete(unwrapped);
  }

  *entriesEvaluator(): EvaluationGenerator<StaticJsValue> {
    const backingIterator = this._backingStore.values();

    const realm = this.realm;
    return new StaticJsIteratorImpl(function* () {
      const next = backingIterator.next();
      if (next.done) {
        return undefined;
      }

      const value = toRuntimeWrap(next.value, realm);
      return realm.types.array([value, value]);
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

    if (!isStaticJsValue(thisArg)) {
      throw new StaticJsRuntimeError(this.realm.types.error("TypeError", "thisArg is not a value"));
    }

    for (const value of this._backingStore) {
      const wrapped = toRuntimeWrap(value, this.realm);
      yield* callback.callEvaluator(thisArg, [wrapped, wrapped, this]);
    }
  }

  *sizeEvaluator(): EvaluationGenerator<number> {
    return this._backingStore.size;
  }
}

function* setCreate(
  _from: StaticJsSetImpl,
  realm: StaticJsRealm,
): EvaluationGenerator<[set: StaticJsValue, add: StaticJsFunction]> {
  // According to MDN, Set[@@species] is never used.
  // const result = yield* speciesConstructor(
  //   from,
  //   realm.types.constructors.Set,
  //   realm
  // );

  const result = yield* realm.types.constructors.Set.constructEvaluator();

  if (!isStaticJsObjectLike(result)) {
    throw new StaticJsRuntimeError(realm.types.error("TypeError", "Failed to create Set"));
  }
  const resultAdd = yield* result.getEvaluator("add");
  if (!isStaticJsFunction(resultAdd)) {
    throw new StaticJsRuntimeError(realm.types.error("TypeError", "add is not a function"));
  }

  return [result, resultAdd];
}
