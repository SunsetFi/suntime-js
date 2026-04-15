import { Completion } from "../../../../evaluator/completions/Completion.js";
import { call } from "../../../algorithms/call.js";
import { createArrayFromList } from "../../../algorithms/create-array-from-list.js";
import { isCallable } from "../../../algorithms/is-callable.js";
import { toString } from "../../../algorithms/to-string.js";
import { getIterator } from "../../../iterators/get-iterator.js";
import { iteratorClose } from "../../../iterators/iterator-close.js";
import { iteratorStepValue } from "../../../iterators/iterator-step-value.js";
import type { StaticJsValue } from "../../../types/StaticJsValue.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const objectCtorGroupByDeclaration: IntrinsicPropertyDeclaration = {
  key: "groupBy",
  *func(realm, _thisArg, items = realm.types.undefined, callbackFn = realm.types.undefined) {
    const collection = new Map<string, StaticJsValue[]>();

    if (!isCallable(callbackFn)) {
      throw Completion.Throw("TypeError", "Object.groupBy callback must be a function");
    }

    const iterator = yield* getIterator(items, "sync");

    yield* iteratorClose.handle(iterator, function* () {
      let index = 0;
      while (true) {
        const next = yield* iteratorStepValue(iterator);
        if (!next) {
          break;
        }

        const keyValue = yield* call(callbackFn, realm.types.undefined, [
          next,
          realm.types.number(index),
        ]);

        index++;

        const key = yield* toString.js(keyValue);
        let group = collection.get(key);
        if (!group) {
          group = [];
          collection.set(key, group);
        }

        group.push(next);
      }
    });

    const result = realm.types.object();
    for (const [key, items] of collection) {
      const value = yield* createArrayFromList(items);
      yield* result.defineOwnPropertyEvaluator(key, {
        enumerable: true,
        writable: true,
        configurable: true,
        value,
      });
    }

    return result;
  },
};

export default objectCtorGroupByDeclaration;
