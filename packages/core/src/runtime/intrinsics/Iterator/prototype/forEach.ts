import { captureThrownCompletion } from "../../../../evaluator/completions/capture-thrown-completion.js";
import { Completion } from "../../../../evaluator/completions/Completion.js";
import { Q } from "../../../../evaluator/completions/Q.js";
import { call } from "../../../algorithms/call.js";
import { isCallable } from "../../../algorithms/is-callable.js";
import { getIteratorDirect } from "../../../iterators/get-iterator-direct.js";
import { iteratorClose } from "../../../iterators/iterator-close.js";
import { iteratorStepValue } from "../../../iterators/iterator-step-value.js";
import type { StaticJsIteratorRecord } from "../../../iterators/StaticJsIteratorRecord.js";
import { isStaticJsObject } from "../../../types/StaticJsObject.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const iteratorProtoForEachDeclaration: IntrinsicPropertyDeclaration = {
  key: "forEach",
  length: 1,
  *func(realm, thisArg, callback = realm.types.undefined) {
    const O = thisArg;
    if (!isStaticJsObject(O)) {
      throw Completion.Throw("TypeError", "Iterator.prototype.forEach called on non-object");
    }

    let iterated: StaticJsIteratorRecord = {
      iterator: O,
      nextMethod: realm.types.undefined,
      done: false,
    };

    if (!isCallable(callback)) {
      const error = Completion.Throw("TypeError", "Callback must be a function");
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
        call(callback, realm.types.undefined, [value, realm.types.number(counter)]),
      );

      if (Completion.Abrupt.is(result)) {
        return yield* Q(iteratorClose(iterated, result));
      }

      counter++;
    }
  },
};

export default iteratorProtoForEachDeclaration;
