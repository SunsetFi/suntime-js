import { YieldCommand } from "../../../../evaluator/commands/YieldCommand.js";

import captureThrownCompletion from "../../../../evaluator/completions/capture-thrown-completion.js";
import { Completion } from "../../../../evaluator/completions/Completion.js";
import Q from "../../../../evaluator/completions/Q.js";

import toIntegerOrInfinity from "../../../algorithms/to-integer-or-infinity.js";
import toNumber from "../../../algorithms/to-number.js";

import createIteratorFromClosure from "../../../iterators/create-iterator-from-closure.js";
import getIteratorDirect from "../../../iterators/get-iterator-direct.js";
import iteratorClose from "../../../iterators/iterator-close.js";
import iteratorStepValue from "../../../iterators/iterator-step-value.js";
import type { StaticJsIteratorRecord } from "../../../iterators/StaticJsIteratorRecord.js";

import { isStaticJsObjectLike } from "../../../types/StaticJsObjectLike.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";

const iteratorProtoTakeDeclaration: IntrinsicPropertyDeclaration = {
  key: "take",
  *func(realm, thisArg, limit = realm.types.undefined) {
    const O = thisArg;
    if (!isStaticJsObjectLike(O)) {
      throw Completion.Throw(
        realm.types.error("TypeError", "Iterator.prototype.take called on non-object"),
      );
    }

    let iterated: StaticJsIteratorRecord = {
      iterator: O,
      nextMethod: realm.types.undefined,
      done: false,
    };

    const numLimit = yield* captureThrownCompletion(toNumber.js(limit));
    if (Completion.Abrupt.is(numLimit)) {
      return yield* Q(iteratorClose(iterated, numLimit, realm));
    }

    if (Number.isNaN(numLimit)) {
      const error = Completion.Throw(realm.types.error("RangeError", "Limit must not be NaN"));
      return yield* Q(iteratorClose(iterated, error, realm));
    }

    const integerLimit = yield* toIntegerOrInfinity.js(numLimit, realm);
    if (integerLimit < 0) {
      const error = Completion.Throw(
        realm.types.error("RangeError", "Limit must be a non-negative integer or Infinity"),
      );
      return yield* Q(iteratorClose(iterated, error, realm));
    }

    iterated = yield* Q(getIteratorDirect(O));

    function* closure() {
      let remaining = integerLimit;
      while (true) {
        if (remaining === 0) {
          return yield* Q(iteratorClose(iterated, realm.types.undefined, realm));
        }

        if (remaining !== Infinity) {
          remaining -= 1;
        }

        const value = yield* Q(iteratorStepValue(iterated));
        if (value === null) {
          return realm.types.undefined;
        }

        const completion = yield* captureThrownCompletion(YieldCommand(value));
        if (Completion.Abrupt.is(completion)) {
          return yield* Q(iteratorClose(iterated, completion, realm));
        }
      }
    }

    const result = yield* Q(
      createIteratorFromClosure(
        closure(),
        "Iterator Helper",
        realm.types.prototypes.iteratorHelperProto,
        realm,
      ),
    );

    return result;
  },
};

export default iteratorProtoTakeDeclaration;
