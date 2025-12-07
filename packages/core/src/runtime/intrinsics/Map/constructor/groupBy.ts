import StaticJsRuntimeError from "../../../../errors/StaticJsRuntimeError.js";

import getIterator from "../../../iterators/get-iterator.js";
import iteratorClose from "../../../iterators/iterator-close.js";
import iteratorStepValue from "../../../iterators/iterator-step-value.js";

import StaticJsMapImpl from "../../../types/implementation/StaticJsMapImpl.js";
import { isStaticJsFunction } from "../../../types/StaticJsFunction.js";
import type { StaticJsValue } from "../../../types/StaticJsValue.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const mapCtorGroupByDeclaration: IntrinsicPropertyDeclaration = {
  key: "groupBy",
  *func(realm, _thisArg, items, callbackFn) {
    const collection = new Map<StaticJsValue, StaticJsValue[]>();

    if (!isStaticJsFunction(callbackFn)) {
      throw new StaticJsRuntimeError(
        realm.types.error(
          "TypeError",
          "Map.groupBy callback must be a function",
        ),
      );
    }

    const iterator = yield* getIterator(
      items ?? realm.types.undefined,
      "sync",
      realm,
    );

    yield* iteratorClose.handle(iterator, realm, function* () {
      let index = 0;
      while (true) {
        const next = yield* iteratorStepValue(iterator, realm);
        if (!next) {
          break;
        }

        const key = yield* callbackFn.callEvaluator(realm.types.undefined, [
          next,
          realm.types.number(index),
        ]);

        index++;

        let group = collection.get(key);
        if (!group) {
          group = [];
          collection.set(key, group);
        }

        group.push(next);
      }
    });

    const result = new StaticJsMapImpl(realm);
    for (const [key, items] of collection) {
      yield* result.setValueEvaluator(key, realm.types.array(items));
    }

    return result;
  },
};

export default mapCtorGroupByDeclaration;
