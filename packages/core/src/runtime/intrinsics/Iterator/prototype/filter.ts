import { Completion } from "../../../../evaluator/completions/Completion.js";
import captureThrownCompletion from "../../../../evaluator/completions/capture-thrown-completion.js";
import Q from "../../../../evaluator/completions/Q.js";

import createIteratorFromClosure from "../../../iterators/create-iterator-from-closure.js";
import getIteratorDirect from "../../../iterators/get-iterator-direct.js";
import iteratorClose from "../../../iterators/iterator-close.js";
import iteratorStepValue from "../../../iterators/iterator-step-value.js";
import type { StaticJsIteratorRecord } from "../../../iterators/StaticJsIteratorRecord.js";

import { isStaticJsFunction, type StaticJsFunction } from "../../../types/StaticJsFunction.js";
import { isStaticJsObjectLike } from "../../../types/StaticJsObjectLike.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";
import toBoolean from "../../../algorithms/to-boolean.js";
import { YieldCommand } from "../../../../evaluator/commands/YieldCommand.js";

const iteratorProtoFilterDeclaration: IntrinsicPropertyDeclaration = {
  key: "filter",
  *func(realm, thisArg, predicate = realm.types.undefined) {
    const O = thisArg;
    if (!isStaticJsObjectLike(O)) {
      throw Completion.Throw(
        realm.types.error("TypeError", "Iterator.prototype.filter called on non-object"),
      );
    }

    let iterated: StaticJsIteratorRecord = {
      iterator: O,
      nextMethod: realm.types.undefined,
      done: false,
    };

    let predicateFunc: StaticJsFunction;
    if (!isStaticJsFunction(predicate)) {
      const error = Completion.Throw(
        realm.types.error("TypeError", "Predicate must be a function"),
      );
      return yield* Q(iteratorClose(iterated, error));
    } else {
      // Not sure why this is needed.
      // Typescript knows the above code never flows through,
      // and types predicate as function in the else,
      // but it forgets inside the closure.
      predicateFunc = predicate;
    }

    iterated = yield* Q(getIteratorDirect(O));

    function* closure() {
      let counter = 0;
      while (true) {
        const value = yield* Q(iteratorStepValue(iterated));
        if (value === null) {
          return realm.types.undefined;
        }

        const selected = yield* captureThrownCompletion(
          predicateFunc.callEvaluator(realm.types.undefined, [value, realm.types.number(counter)]),
        );

        if (Completion.Abrupt.is(selected)) {
          return yield* Q(iteratorClose(iterated, selected));
        }

        const selectedValue = yield* toBoolean.js(selected);
        if (selectedValue) {
          const completion = yield* captureThrownCompletion(YieldCommand(value));
          if (Completion.Abrupt.is(completion)) {
            return yield* Q(iteratorClose(iterated, completion));
          }
        }

        counter++;
      }
    }

    const result = yield* createIteratorFromClosure(
      closure(),
      "Iterator Helper",
      realm.types.prototypes.iteratorHelperProto,
      realm,
    );

    return result;
  },
};

export default iteratorProtoFilterDeclaration;
