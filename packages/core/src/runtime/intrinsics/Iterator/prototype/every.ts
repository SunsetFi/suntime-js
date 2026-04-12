import { StaticJsEngineError } from "../../../../errors/StaticJsEngineError.js";
import { captureThrownCompletion } from "../../../../evaluator/completions/capture-thrown-completion.js";

import { Completion } from "../../../../evaluator/completions/Completion.js";
import { Q } from "../../../../evaluator/completions/Q.js";

import { isStaticJsObject } from "../../../types/StaticJsObject.js";

import { iteratorClose } from "../../../iterators/iterator-close.js";
import { iteratorStepValue } from "../../../iterators/iterator-step-value.js";
import type { StaticJsIteratorRecord } from "../../../iterators/StaticJsIteratorRecord.js";
import { getIteratorDirect } from "../../../iterators/get-iterator-direct.js";

import call from "../../../algorithms/call.js";
import { isCallable } from "../../../algorithms/is-callable.js";
import toBoolean from "../../../algorithms/to-boolean.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const iteratorProtoEveryDeclaration: IntrinsicPropertyDeclaration = {
  key: "every",
  *func(realm, thisArg, predicate = realm.types.undefined) {
    const O = thisArg;
    if (!isStaticJsObject(O)) {
      throw Completion.Throw("TypeError", "Iterator.prototype.every called on non-object");
    }

    let iterated: StaticJsIteratorRecord = {
      iterator: O,
      nextMethod: realm.types.undefined,
      done: false,
    };

    if (!isCallable(predicate)) {
      const error = Completion.Throw("TypeError", "Predicate must be a function");
      yield* Q(iteratorClose(iterated, error));
      throw new StaticJsEngineError("Unreachable code after iteratorClose with abrupt completion");
    }

    iterated = yield* Q(getIteratorDirect(O));

    let counter = 0;
    while (true) {
      const value = yield* Q(iteratorStepValue(iterated));
      if (value === null) {
        return realm.types.boolean(true);
      }

      const result = yield* captureThrownCompletion(
        call(predicate, realm.types.undefined, [value, realm.types.number(counter), O]),
      );

      if (Completion.Abrupt.is(result)) {
        yield* Q(iteratorClose(iterated, result));
        throw new StaticJsEngineError(
          "Unreachable code after iteratorClose with abrupt completion",
        );
      }

      const boolResult = yield* toBoolean.js(result);
      if (boolResult === false) {
        return yield* Q(iteratorClose(iterated, realm.types.false));
      }

      counter += 1;
    }
  },
};

export default iteratorProtoEveryDeclaration;
