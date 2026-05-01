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
import type { StaticJsValue } from "../../../types/StaticJsValue.js";
import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const iteratorProtoReduceDeclaration: IntrinsicPropertyDeclaration = {
  key: "reduce",
  length: 1,
  *func(realm, thisArg, reducer = realm.types.undefined, initialValue) {
    const O = thisArg;
    if (!isStaticJsObject(O)) {
      throw Completion.Throw("TypeError", "Iterator.prototype.reduce called on non-object");
    }

    let iterated: StaticJsIteratorRecord = {
      iterator: O,
      nextMethod: realm.types.undefined,
      done: false,
    };

    if (!isCallable(reducer)) {
      const error = Completion.Throw("TypeError", "Reducer must be a function");
      return yield* Q(iteratorClose(iterated, error));
    }

    iterated = yield* Q(getIteratorDirect(O));

    let accumulator: StaticJsValue;
    let counter = 0;

    if (!initialValue) {
      const firstValue = yield* Q(iteratorStepValue(iterated));
      if (firstValue === null) {
        throw Completion.Throw("TypeError", "Reduce of empty iterator with no initial value");
      }
      accumulator = firstValue;
      counter = 1;
    } else {
      accumulator = initialValue;
    }

    while (true) {
      const value = yield* Q(iteratorStepValue(iterated));
      if (value === null) {
        return accumulator;
      }

      const result = yield* captureThrownCompletion(
        call(reducer, realm.types.undefined, [accumulator, value, realm.types.number(counter)]),
      );
      if (Completion.Abrupt.is(result)) {
        return yield* Q(iteratorClose(iterated, result));
      }

      accumulator = result;
      counter++;
    }
  },
};

export default iteratorProtoReduceDeclaration;
