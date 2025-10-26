import StaticJsRuntimeError from "../../../../errors/StaticJsRuntimeError.js";

import getIterator from "../../../algorithms/get-iterator.js";
import iteratorStepValue from "../../../algorithms/iterator-step-value.js";
import toString from "../../../algorithms/to-string.js";

import { isStaticJsFunction } from "../../../types/StaticJsFunction.js";
import type { StaticJsValue } from "../../../types/StaticJsValue.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectCtorGroupByDeclaration: IntrinsicPropertyDeclaration = {
  key: "groupBy",
  *func(realm, _thisArg, items, callbackFn) {
    const collection = new Map<string, StaticJsValue[]>();

    if (!isStaticJsFunction(callbackFn)) {
      throw new StaticJsRuntimeError(
        realm.types.error(
          "TypeError",
          "Object.groupBy callback must be a function",
        ),
      );
    }

    const iterator = yield* getIterator(items ?? realm.types.undefined, realm);

    let index = 0;
    while (true) {
      const next = yield* iteratorStepValue(iterator, realm);
      if (!next) {
        break;
      }

      const keyValue = yield* callbackFn.callEvaluator(
        realm.types.undefined,
        next,
        realm.types.number(index),
      );

      index++;

      const key = yield* toString.js(keyValue, realm);
      let group = collection.get(key);
      if (!group) {
        group = [];
        collection.set(key, group);
      }

      group.push(next);
    }

    const result = realm.types.object();
    for (const [key, items] of collection) {
      yield* result.definePropertyEvaluator(key, {
        enumerable: true,
        writable: true,
        configurable: true,
        value: realm.types.array(items),
      });
    }

    return result;
  },
};

export default objectCtorGroupByDeclaration;
