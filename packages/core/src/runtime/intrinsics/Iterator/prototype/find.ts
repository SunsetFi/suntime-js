import type { StaticJsIteratorRecord } from "../../../iterators/StaticJsIteratorRecord.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";

import { captureThrownCompletion } from "../../../../evaluator/completions/capture-thrown-completion.js";
import { Completion } from "../../../../evaluator/completions/Completion.js";
import { Q } from "../../../../evaluator/completions/Q.js";
import call from "../../../algorithms/call.js";
import { isCallable } from "../../../algorithms/is-callable.js";
import toBoolean from "../../../algorithms/to-boolean.js";
import { getIteratorDirect } from "../../../iterators/get-iterator-direct.js";
import { iteratorClose } from "../../../iterators/iterator-close.js";
import { iteratorStepValue } from "../../../iterators/iterator-step-value.js";
import { isStaticJsObject } from "../../../types/StaticJsObject.js";

const iteratorProtoFindDeclaration: IntrinsicPropertyDeclaration = {
  key: "find",
  *func(realm, thisArg, predicate = realm.types.undefined) {
    const O = thisArg;
    if (!isStaticJsObject(O)) {
      throw Completion.Throw("TypeError", "Iterator.prototype.find called on non-object");
    }

    let iterated: StaticJsIteratorRecord = {
      iterator: O,
      nextMethod: realm.types.undefined,
      done: false,
    };

    if (!isCallable(predicate)) {
      const error = Completion.Throw("TypeError", "Predicate must be a function");
      return yield* Q(iteratorClose(iterated, error));
    }

    iterated = yield* Q(getIteratorDirect(O));

    let counter = 0;
    while (true) {
      const value = yield* Q(iteratorStepValue(iterated));
      if (value === null) {
        return realm.types.undefined;
      }

      const result = yield* captureThrownCompletion(
        call(predicate, realm.types.undefined, [value, realm.types.number(counter), O]),
      );

      if (Completion.Abrupt.is(result)) {
        return yield* Q(iteratorClose(iterated, result));
      }

      const boolResult = yield* toBoolean.js(result);
      if (boolResult === true) {
        return yield* Q(iteratorClose(iterated, value));
      }
      counter += 1;
    }
  },
};

export default iteratorProtoFindDeclaration;
