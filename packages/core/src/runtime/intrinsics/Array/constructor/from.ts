import type { EvaluationGenerator } from "../../../../evaluator/EvaluationGenerator.js";

import { ThrowCompletion } from "../../../../evaluator/completions/ThrowCompletion.js";

import type { StaticJsRealm } from "../../../realm/StaticJsRealm.js";

import isConstructor from "../../../algorithms/is-constructor.js";
import toObject from "../../../algorithms/to-object.js";
import lengthOfArrayLike from "../../../algorithms/length-of-array-like.js";
import getIterator from "../../../iterators/get-iterator.js";
import iteratorStepValue from "../../../iterators/iterator-step-value.js";

import StaticJsArrayImpl from "../../../types/implementation/StaticJsArrayImpl.js";

import {
  isStaticJsObjectLike,
  type StaticJsObjectLike,
} from "../../../types/StaticJsObjectLike.js";
import type { StaticJsValue } from "../../../types/StaticJsValue.js";
import {
  isStaticJsFunction,
  type StaticJsFunction,
} from "../../../types/StaticJsFunction.js";
import { isStaticJsUndefined } from "../../../types/StaticJsUndefined.js";
import { MAX_ARRAY_LENGTH_INCLUSIVE } from "../../../types/StaticJsArray.js";

import iteratorClose from "../../../iterators/iterator-close.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const arrayCtorFromDeclaration: IntrinsicPropertyDeclaration = {
  key: "from",
  *func(realm, thisArg, items, mapper, mapperThisArg) {
    let mapperFunc: StaticJsFunction | undefined = undefined;
    if (!isStaticJsUndefined(mapper ?? realm.types.undefined)) {
      if (!isStaticJsFunction(mapper)) {
        throw new ThrowCompletion(
          realm.types.error("TypeError", "mapper must be a function"),
        );
      }
      mapperFunc = mapper;
    }

    let hasIterator = false;
    if (isStaticJsObjectLike(items)) {
      const iteratorMethod = yield* items.getEvaluator(
        realm.types.symbols.iterator,
      );
      hasIterator = isStaticJsFunction(iteratorMethod);
    }

    if (items && hasIterator) {
      return yield* fromIterator(
        thisArg,
        items,
        mapperFunc,
        mapperThisArg ?? realm.types.undefined,
        realm,
      );
    } else {
      return yield* fromArrayLike(
        thisArg,
        items ?? realm.types.undefined,
        mapperFunc,
        mapperThisArg ?? realm.types.undefined,
        realm,
      );
    }
  },
};

export default arrayCtorFromDeclaration;

function* fromIterator(
  C: StaticJsValue,
  items: StaticJsValue,
  mapFn: StaticJsFunction | undefined,
  thisArg: StaticJsValue,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsValue> {
  const A = yield* createArrayFromConstructor(C, 0, realm);

  const iterator = yield* getIterator(items, "sync", realm);

  let k = 0;

  yield* iteratorClose.handle(iterator, realm, function* () {
    while (true) {
      if (k > MAX_ARRAY_LENGTH_INCLUSIVE) {
        throw new ThrowCompletion(
          realm.types.error("TypeError", "Too many items from iterator"),
        );
      }

      const Pk = String(k);

      const next = yield* iteratorStepValue(iterator, realm);
      if (!next) {
        break;
      }

      // TODO: Spec compliance requires us to call the return method
      // on the iterator if setting stuff goes wrong.

      let mappedValue: StaticJsValue;
      if (mapFn) {
        mappedValue = yield* mapFn.callEvaluator(thisArg, [
          next,
          realm.types.number(k),
        ]);
      } else {
        mappedValue = next;
      }

      // Per spec: Use define, not set.
      yield* A.definePropertyEvaluator(Pk, {
        value: mappedValue,
        writable: true,
        enumerable: true,
        configurable: true,
      });

      k++;
    }
  });

  yield* A.setEvaluator("length", realm.types.number(k), true);
  return A;
}

function* fromArrayLike(
  C: StaticJsValue,
  items: StaticJsValue,
  mapFn: StaticJsFunction | undefined,
  thisArg: StaticJsValue,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsValue> {
  const arrayLike = yield* toObject(items, realm);

  const len = yield* lengthOfArrayLike(arrayLike, realm);

  const A = yield* createArrayFromConstructor(C, len, realm);

  let k = 0;
  while (k < len) {
    const pK = String(k);
    const kValue = yield* arrayLike.getEvaluator(pK);

    let mappedValue: StaticJsValue;
    if (mapFn) {
      mappedValue = yield* mapFn.callEvaluator(thisArg, [
        kValue,
        realm.types.number(k),
      ]);
    } else {
      mappedValue = kValue;
    }

    // Per spec: Use define, not set.
    yield* A.definePropertyEvaluator(pK, {
      value: mappedValue,
      writable: true,
      enumerable: true,
      configurable: true,
    });

    k++;
  }

  // Per spec: Use set, not define
  // This doesn't actually hit setters, as the array ctor uses define for initializing length.
  yield* A.setEvaluator("length", realm.types.number(len), true);

  return A;
}

// Not sure why this is called out in the spec different from arraySpeciesCreate
function* createArrayFromConstructor(
  C: StaticJsValue,
  len: number,
  realm: StaticJsRealm,
): EvaluationGenerator<StaticJsObjectLike> {
  const cIsConstructor = yield* isConstructor(C, realm);
  let A: StaticJsObjectLike;
  if (cIsConstructor) {
    const created = yield* (C as StaticJsFunction).constructEvaluator([
      realm.types.number(len),
    ]);
    // FIXME: Not spec complaint.  Spec lets this be anything, then throws on
    // property set.
    if (!isStaticJsObjectLike(created)) {
      throw new ThrowCompletion(
        realm.types.error("TypeError", "Constructor did not create an object"),
      );
    }
    A = created;
  } else {
    A = yield* StaticJsArrayImpl.create(realm, len);
  }

  return A;
}
