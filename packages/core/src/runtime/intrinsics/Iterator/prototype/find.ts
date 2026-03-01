import { Completion } from "../../../../evaluator/completions/Completion.js";
import captureThrownCompletion from "../../../../evaluator/completions/capture-thrown-completion.js";
import Q from "../../../../evaluator/completions/Q.js";

import { isStaticJsFunction } from "../../../types/StaticJsFunction.js";
import { isStaticJsObjectLike } from "../../../types/StaticJsObjectLike.js";

import toBoolean from "../../../algorithms/to-boolean.js";

import { getIteratorDirect } from "../../../iterators/get-iterator-direct.js";
import iteratorClose from "../../../iterators/iterator-close.js";
import iteratorStepValue from "../../../iterators/iterator-step-value.js";
import type { StaticJsIteratorRecord } from "../../../iterators/StaticJsIteratorRecord.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const iteratorProtoFindDeclaration: IntrinsicPropertyDeclaration = {
  key: "find",
  *func(realm, thisArg, predicate = realm.types.undefined) {
    const O = thisArg;
    if (!isStaticJsObjectLike(O)) {
      throw Completion.Throw(
        realm.types.error("TypeError", "Iterator.prototype.find called on non-object"),
      );
    }

    let iterated: StaticJsIteratorRecord = {
      iterator: O,
      nextMethod: realm.types.undefined,
      done: false,
    };

    if (!isStaticJsFunction(predicate)) {
      const error = Completion.Throw(
        realm.types.error("TypeError", "Predicate must be a function"),
      );
      return yield* Q(iteratorClose(iterated, error, realm));
    }

    iterated = yield* Q(getIteratorDirect(O));

    let counter = 0;
    while (true) {
      const value = yield* Q(iteratorStepValue(iterated, realm));
      if (value === null) {
        return realm.types.undefined;
      }

      const result = yield* captureThrownCompletion(
        predicate.callEvaluator(realm.types.undefined, [value, realm.types.number(counter), O]),
      );

      if (Completion.Abrupt.is(result)) {
        return yield* Q(iteratorClose(iterated, result, realm));
      }

      const boolResult = yield* toBoolean.js(result, realm);
      if (boolResult === true) {
        return yield* Q(iteratorClose(iterated, value, realm));
      }
      counter += 1;
    }
  },
};

export default iteratorProtoFindDeclaration;
