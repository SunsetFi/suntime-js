import { captureThrownCompletion } from "../../../evaluator/completions/capture-thrown-completion.js";
import { Completion } from "../../../evaluator/completions/Completion.js";
import { asyncGeneratorValidate } from "../../algorithms/async-generator-validate.js";
import { promiseReject } from "../../algorithms/promise-reject.js";
import { StaticJsAsyncGeneratorImpl } from "../../types/implementation/functions/StaticJsAsyncGeneratorImpl.js";
import type { IntrinsicPropertyDeclaration } from "../apply-intrinsic-properties.js";

const asyncGeneratorProtoReturnDeclaration: IntrinsicPropertyDeclaration = {
  key: "return",
  length: 1,
  *func(realm, thisArg, value = realm.types.undefined) {
    if (thisArg instanceof StaticJsAsyncGeneratorImpl === false) {
      const error = realm.types.error(
        "TypeError",
        "Generator return called on incompatible receiver",
      );
      return yield* promiseReject(error, realm);
    }

    const completion = yield* captureThrownCompletion(asyncGeneratorValidate(thisArg, null));
    if (Completion.Abrupt.is(completion)) {
      return yield* promiseReject(Completion.value(completion), realm);
    }

    return yield* thisArg.returnEvaluator(value);
  },
};

export default asyncGeneratorProtoReturnDeclaration;
