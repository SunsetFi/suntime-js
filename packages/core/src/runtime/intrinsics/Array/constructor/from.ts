import { Completion } from "../../../../evaluator/completions/Completion.js";
import { Q } from "../../../../evaluator/completions/Q.js";
import { captureThrownCompletion } from "../../../../evaluator/completions/capture-thrown-completion.js";

import isConstructor from "../../../algorithms/is-constructor.js";
import toObject from "../../../algorithms/to-object.js";
import lengthOfArrayLike from "../../../algorithms/length-of-array-like.js";
import createDataPropertyOrThrow from "../../../algorithms/create-data-property-or-throw.js";
import getMethod from "../../../algorithms/get-method.js";

import { iteratorStepValue } from "../../../iterators/iterator-step-value.js";
import { getIteratorFromMethod } from "../../../iterators/get-iterator-from-method.js";
import { iteratorClose } from "../../../iterators/iterator-close.js";

import { type StaticJsObjectLike } from "../../../types/StaticJsObjectLike.js";
import type { StaticJsValue } from "../../../types/StaticJsValue.js";
import { isStaticJsFunction, type StaticJsFunction } from "../../../types/StaticJsFunction.js";
import { isStaticJsUndefined } from "../../../types/StaticJsUndefined.js";
import { MAX_ARRAY_LENGTH_INCLUSIVE } from "../../../types/StaticJsArray.js";

import { StaticJsArrayImpl } from "../../../types/implementation/objects/StaticJsArrayImpl.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";
import { set } from "../../../algorithms/set.js";

const arrayCtorFromDeclaration: IntrinsicPropertyDeclaration = {
  key: "from",
  *func(
    realm,
    thisArg,
    items = realm.types.undefined,
    mapper = realm.types.undefined,
    mapperThisArg = realm.types.undefined,
  ) {
    const C = thisArg;

    let mapping: boolean;
    let mapperFunc: StaticJsFunction | undefined;
    if (isStaticJsUndefined(mapper)) {
      mapping = false;
      mapperFunc = undefined;
    } else {
      if (!isStaticJsFunction(mapper)) {
        throw Completion.Throw("TypeError", "mapper must be a function");
      }
      mapperFunc = mapper;
      mapping = true;
    }

    let A: StaticJsObjectLike;

    const usingIterator = yield* Q(getMethod(items, realm.types.symbols.iterator));
    if (usingIterator) {
      if (isConstructor(C, realm)) {
        A = yield* Q(C.constructEvaluator([realm.types.number(0)]));
      } else {
        A = yield* StaticJsArrayImpl.create(realm, 0);
      }

      const iteratorRecord = yield* Q(getIteratorFromMethod(items, usingIterator));
      let k = 0;
      while (true) {
        if (k >= MAX_ARRAY_LENGTH_INCLUSIVE) {
          const error = Completion.Throw("TypeError", "Too many items from iterator");
          return yield* Q(iteratorClose(iteratorRecord, error));
        }

        const Pk = String(k);
        const next = yield* Q(iteratorStepValue(iteratorRecord));
        if (next === null) {
          yield* set(A, "length", realm.types.number(k), true);
          return A;
        }

        let mappedValue: StaticJsValue;
        if (mapping) {
          const mapperResult = yield* captureThrownCompletion(
            mapperFunc!.callEvaluator(mapperThisArg, [next, realm.types.number(k)]),
          );
          if (Completion.Abrupt.is(mapperResult)) {
            return yield* Q(iteratorClose(iteratorRecord, mapperResult));
          }
          mappedValue = Completion.value(mapperResult)!;
        } else {
          mappedValue = next;
        }

        const defineStatus = yield* captureThrownCompletion(
          createDataPropertyOrThrow(A, Pk, mappedValue),
        );
        if (Completion.Abrupt.is(defineStatus)) {
          return yield* Q(iteratorClose(iteratorRecord, defineStatus));
        }

        k += 1;
      }
    }

    // items is array-like
    const arrayLike = yield* Q(toObject(items));
    const len = yield* Q(lengthOfArrayLike(arrayLike));
    if (isConstructor(C, realm)) {
      A = yield* Q(C.constructEvaluator([realm.types.number(len)]));
    } else {
      A = yield* StaticJsArrayImpl.create(realm, len);
    }

    let k = 0;
    while (k < len) {
      const Pk = String(k);
      const kValue = yield* Q(arrayLike.getEvaluator(Pk));

      let mappedValue: StaticJsValue;
      if (mapping) {
        mappedValue = yield* Q(
          mapperFunc!.callEvaluator(mapperThisArg, [kValue, realm.types.number(k)]),
        );
      } else {
        mappedValue = kValue;
      }

      yield* Q(createDataPropertyOrThrow(A, Pk, mappedValue));

      k += 1;
    }

    yield* set(A, "length", realm.types.number(len), true);
    return A;
  },
};

export default arrayCtorFromDeclaration;
