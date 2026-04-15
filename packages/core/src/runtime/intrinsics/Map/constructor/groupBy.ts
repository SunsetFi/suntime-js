import { Completion } from "../../../../evaluator/completions/Completion.js";
import { call } from "../../../algorithms/call.js";
import { createArrayFromList } from "../../../algorithms/create-array-from-list.js";
import { isCallable } from "../../../algorithms/is-callable.js";
import { getIterator } from "../../../iterators/get-iterator.js";
import { iteratorClose } from "../../../iterators/iterator-close.js";
import { iteratorStepValue } from "../../../iterators/iterator-step-value.js";
import { StaticJsMapImpl } from "../../../types/implementation/objects/StaticJsMapImpl.js";
import type { StaticJsValue } from "../../../types/StaticJsValue.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const mapCtorGroupByDeclaration: IntrinsicPropertyDeclaration = {
  key: "groupBy",
  *func(realm, _thisArg, items = realm.types.undefined, callbackFn = realm.types.undefined) {
    const collection = new Map<StaticJsValue, StaticJsValue[]>();

    if (!isCallable(callbackFn)) {
      throw Completion.Throw("TypeError", "Map.groupBy callback must be a function");
    }

    const iterator = yield* getIterator(items, "sync");

    yield* iteratorClose.handle(iterator, function* () {
      let index = 0;
      while (true) {
        const next = yield* iteratorStepValue(iterator);
        if (!next) {
          break;
        }

        const key = yield* call(callbackFn, realm.types.undefined, [
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
      yield* result.setValueEvaluator(key, yield* createArrayFromList(items));
    }

    return result;
  },
};

export default mapCtorGroupByDeclaration;
