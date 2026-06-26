import type { EvaluationGenerator } from "#evaluator/EvaluationGenerator.js";
import type { StaticJsIteratorRecord } from "#iterators/StaticJsIteratorRecord.js";

import { toIntegerOrInfinity } from "#algorithms/to-integer-or-infinity.js";
import { toNumber } from "#algorithms/to-number.js";
import { Yield } from "#algorithms/yield.js";
import { StaticJsEngineError } from "#errors/StaticJsEngineError.js";
import { Completion } from "#evaluator/completions/Completion.js";
import { Q } from "#evaluator/completions/Q.js";
import { createIteratorFromClosure } from "#iterators/create-iterator-from-closure.js";
import { getIteratorDirect } from "#iterators/get-iterator-direct.js";
import { iteratorClose } from "#iterators/iterator-close.js";
import { iteratorStepValue } from "#iterators/iterator-step-value.js";
import { iteratorStep } from "#iterators/iterator-step.js";
import { isStaticJsObject } from "#types/StaticJsObject.js";

import type { IntrinsicPropertyDeclaration } from "../../apply-intrinsic-properties.js";

const iteratorProtoDropDeclaration: IntrinsicPropertyDeclaration = {
  key: "drop",
  length: 1,
  *func(realm, thisArg, limit = realm.types.undefined) {
    const O = thisArg;
    if (!isStaticJsObject(O)) {
      throw yield* Completion.Throw.create(
        "TypeError",
        "Iterator.prototype.drop called on non-object",
      );
    }

    let iterated: StaticJsIteratorRecord = {
      iterator: O,
      nextMethod: realm.types.undefined,
      done: false,
    };

    const numLimit = yield* toNumber.js(limit);
    if (Number.isNaN(numLimit)) {
      const error = yield* Completion.Throw.create("RangeError", "Invalid count value");
      yield* Q(iteratorClose(iterated, error));
      throw new StaticJsEngineError("Unreachable code after iteratorClose with abrupt completion");
    }

    const integerLimit = yield* toIntegerOrInfinity.js(numLimit);
    if (integerLimit < 0) {
      const error = yield* Completion.Throw.create(
        "RangeError",
        "Count value must be non-negative",
      );
      yield* Q(iteratorClose(iterated, error));
      throw new StaticJsEngineError("Unreachable code after iteratorClose with abrupt completion");
    }

    iterated = yield* Q(getIteratorDirect(O));

    function* closure(): EvaluationGenerator {
      let remaining = integerLimit;
      while (remaining > 0) {
        if (remaining !== Infinity) {
          remaining -= 1;
        }

        const next = yield* Q(iteratorStep(iterated));
        if (next === null) {
          return realm.types.undefined;
        }
      }

      while (true) {
        const value = yield* Q(iteratorStepValue(iterated));
        if (value === null) {
          return realm.types.undefined;
        }

        const completion = yield* Q(Yield(value));
        if (Completion.Abrupt.is(completion)) {
          return yield* Q(iteratorClose(iterated, completion));
        }
      }
    }

    // Note: Spec wants us to store the underlying iterator here.
    const generator = yield* createIteratorFromClosure(
      closure(),
      "Iterator Helper",
      realm.intrinsics["IteratorHelperPrototype"],
      realm,
    );

    return generator;
  },
};

export default iteratorProtoDropDeclaration;
