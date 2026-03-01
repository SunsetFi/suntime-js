import type { EvaluationGenerator } from "../../../../evaluator/EvaluationGenerator.js";

import { YieldCommand } from "../../../../evaluator/commands/YieldCommand.js";

import { Completion } from "../../../../evaluator/completions/Completion.js";
import captureThrownCompletion from "../../../../evaluator/completions/capture-thrown-completion.js";
import Q from "../../../../evaluator/completions/Q.js";

import toIntegerOrInfinity from "../../../algorithms/to-integer-or-infinity.js";
import toNumber from "../../../algorithms/to-number.js";

import { isStaticJsObjectLike } from "../../../types/StaticJsObjectLike.js";

import createIteratorFromClosure from "../../../iterators/create-iterator-from-closure.js";
import { getIteratorDirect } from "../../../iterators/get-iterator-direct.js";
import iteratorClose from "../../../iterators/iterator-close.js";
import iteratorStep from "../../../iterators/iterator-step.js";
import type { IteratorRecord } from "../../../iterators/IteratorRecord.js";

import type { IntrinsicPropertyDeclaration } from "../../utils.js";
import StaticJsEngineError from "../../../../errors/StaticJsEngineError.js";

const iteratorProtoDropDeclaration: IntrinsicPropertyDeclaration = {
  key: "drop",
  *func(realm, thisArg, limit = realm.types.undefined) {
    const O = thisArg;
    if (!isStaticJsObjectLike(O)) {
      throw Completion.Throw(
        realm.types.error("TypeError", "Iterator.prototype.drop called on non-object"),
      );
    }

    let iterated: IteratorRecord = {
      iterator: O,
      nextMethod: realm.types.undefined,
      done: false,
    };

    const numLimit = yield* toNumber(limit, realm);
    if (Number.isNaN(numLimit.value)) {
      const error = Completion.Throw(realm.types.error("RangeError", "Invalid count value"));
      yield* Q(iteratorClose(iterated, error, realm));
      throw new StaticJsEngineError("Unreachable code after iteratorClose with abrupt completion");
    }

    const integerLimit = yield* toIntegerOrInfinity.js(numLimit, realm);
    if (integerLimit < 0) {
      const error = Completion.Throw(
        realm.types.error("RangeError", "Count value must be non-negative"),
      );
      yield* Q(iteratorClose(iterated, error, realm));
      throw new StaticJsEngineError("Unreachable code after iteratorClose with abrupt completion");
    }

    iterated = yield* Q(getIteratorDirect(O));

    function* closure(): EvaluationGenerator {
      let remaining = integerLimit;
      while (remaining > 0) {
        if (remaining !== Infinity) {
          remaining -= 1;
        }

        const next = yield* Q(iteratorStep(iterated, realm));
        if (next === null) {
          return realm.types.undefined;
        }
      }

      while (true) {
        const value = yield* Q(iteratorStep(iterated, realm));
        if (value === null) {
          return realm.types.undefined;
        }

        const completion = yield* captureThrownCompletion(YieldCommand(value));
        if (Completion.Abrupt.is(completion)) {
          return yield* Q(iteratorClose(iterated, completion, realm));
        }
      }
    }

    // Note: Spec wants us to store the underlying iterator here.
    const generator = yield* createIteratorFromClosure(
      closure(),
      "Iterator Helper",
      realm.types.prototypes.iteratorHelperProto,
      realm,
    );

    return generator;
  },
};

export default iteratorProtoDropDeclaration;
