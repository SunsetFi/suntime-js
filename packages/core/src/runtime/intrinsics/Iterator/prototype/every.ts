import StaticJsEngineError from "../../../../errors/StaticJsEngineError.js";
import captureThrownCompletion from "../../../../evaluator/completions/capture-thrown-completion.js";

import { Completion } from "../../../../evaluator/completions/Completion.js";
import Q from "../../../../evaluator/completions/Q.js";
import toBoolean from "../../../algorithms/to-boolean.js";
import { getIteratorDirect } from "../../../iterators/get-iterator-direct.js";

import iteratorClose from "../../../iterators/iterator-close.js";
import iteratorStepValue from "../../../iterators/iterator-step-value.js";
import type { IteratorRecord } from "../../../iterators/IteratorRecord.js";

import { isStaticJsFunction } from "../../../types/StaticJsFunction.js";
import { isStaticJsObjectLike } from "../../../types/StaticJsObjectLike.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const iteratorProtoEveryDeclaration: IntrinsicPropertyDeclaration = {
  key: "every",
  *func(realm, thisArg, predicate = realm.types.undefined) {
    const O = thisArg;
    if (!isStaticJsObjectLike(O)) {
      throw Completion.Throw(
        realm.types.error("TypeError", "Iterator.prototype.every called on non-object"),
      );
    }

    let iterated: IteratorRecord = {
      iterator: O,
      nextMethod: realm.types.undefined,
      done: false,
    };

    if (!isStaticJsFunction(predicate)) {
      const error = Completion.Throw(
        realm.types.error("TypeError", "Predicate must be a function"),
      );
      yield* Q(iteratorClose(iterated, error, realm));
      throw new StaticJsEngineError("Unreachable code after iteratorClose with abrupt completion");
    }

    iterated = yield* Q(getIteratorDirect(O));

    let counter = 0;
    while (true) {
      const value = yield* Q(iteratorStepValue(iterated, realm));
      if (value === null) {
        return realm.types.boolean(true);
      }

      const result = yield* captureThrownCompletion(
        predicate.callEvaluator(realm.types.undefined, [value, realm.types.number(counter), O]),
      );

      if (Completion.Abrupt.is(result)) {
        yield* Q(iteratorClose(iterated, result, realm));
        throw new StaticJsEngineError(
          "Unreachable code after iteratorClose with abrupt completion",
        );
      }

      const boolResult = yield* toBoolean.js(result, realm);
      if (boolResult === false) {
        return yield* Q(iteratorClose(iterated, realm.types.false, realm));
      }

      counter += 1;
    }
  },
};

export default iteratorProtoEveryDeclaration;
